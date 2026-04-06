# ─────────────────────────────────────────────────────────────────────────────
# Stage 1 – deps: install only production dependencies
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS deps

WORKDIR /app

# Copy package manifests and install deps with a clean cache
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2 – builder: build the Next.js app
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy ALL node_modules so devDeps are available for the build step
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build produces a self-contained server in .next/standalone/
RUN npm run build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3 – runner: minimal production image
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy standalone server output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static assets (CSS, images, fonts, etc.)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

# Cloud Run expects the app to listen on $PORT (defaults to 8080)
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

EXPOSE 8080

# Next.js standalone entry point
CMD ["node", "server.js"]
