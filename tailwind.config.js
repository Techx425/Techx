/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ─────────────────────────────────────────────────────────────────────────────
  // CRITICAL: disable Tailwind's base reset (preflight) so it does NOT
  // interfere with Bootstrap or the existing theme CSS (style.css / plugins.css).
  // All existing styling remains exactly as-is.
  // ─────────────────────────────────────────────────────────────────────────────
  corePlugins: {
    preflight: false,
  },
  // Allow Tailwind classes to override existing ones where needed
  important: false,
  theme: {
    extend: {
      // ── Brand colours matching CSS custom properties ────────────────────────
      colors: {
        primary:   "#f7ca18",          // --primary-color
        "dark-1":  "#1B1663",          // --bg-dark-1
        "dark-2":  "#120d4f",          // --bg-dark-2
        "dark-3":  "#1e1e1e",          // --bg-dark-3
        "bg-light": "#F8F9FA",         // --bg-light
        "bg-grey":  "#eeeeee",         // --bg-grey
      },
      // ── Font families matching the theme ────────────────────────────────────
      fontFamily: {
        body:    ["Manrope", "Helvetica", "Arial", "sans-serif"],
        heading: ["Inter Tight", "Helvetica", "Arial", "sans-serif"],
      },
      // ── Border radius matching --rounded-1: 15px ────────────────────────────
      borderRadius: {
        theme: "15px",
      },
      // ── Container matching --container-max-width: 1240px ────────────────────
      maxWidth: {
        container: "1240px",
      },
      // ── Custom spacing helpers that mirror theme p-40, mb-min-50 etc. ───────
      spacing: {
        "40px": "40px",
        "60px": "60px",
        "100px": "100px",
      },
      // ── Custom keyframes matching the globals.css animations ─────────────────
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-15px)" },
        },
        "gradient-border": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floating:          "floating 3s ease-in-out infinite",
        "gradient-border": "gradient-border 6s ease infinite",
      },
      // ── Backdrop blur matching .glass-card ───────────────────────────────────
      backdropBlur: {
        "glass": "12px",
      },
      // ── Box shadows matching theme cards ─────────────────────────────────────
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0,0,0,0.37)",
        "2xl-theme": "0 25px 50px -12px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
