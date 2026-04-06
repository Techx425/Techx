# 🚀 Deploying TechX Website to Google Cloud Run

A step-by-step guide to containerise and deploy the **TechX Next.js** application on **Google Cloud Run** using **Artifact Registry**.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed and configured:

| Tool | Version | Install Link |
|---|---|---|
| [Google Cloud SDK (`gcloud`)](https://cloud.google.com/sdk/docs/install) | Latest | https://cloud.google.com/sdk/docs/install |
| [Docker Desktop](https://www.docker.com/products/docker-desktop/) | Latest | https://www.docker.com/products/docker-desktop/ |
| [Node.js](https://nodejs.org/) | 20+ | https://nodejs.org/ |
| A Google Cloud Project | — | https://console.cloud.google.com/ |

---

## 🔧 Step 1 — Set Up Your Environment

Open a terminal and configure your project variables. Replace the placeholders with your actual values.

```bash
# Set your GCP Project ID
export PROJECT_ID="your-gcp-project-id"

# Set your preferred region (e.g. asia-south1 for Pakistan/South Asia)
export REGION="asia-south1"

# Name for your Cloud Run service
export SERVICE_NAME="techx-app"

# Artifact Registry repository name
export REPO_NAME="techx"
```

---

## 🔐 Step 2 — Authenticate with Google Cloud

```bash
# Log in to your Google account
gcloud auth login

# Set the active project
gcloud config set project $PROJECT_ID

# Authorise Docker to push to Artifact Registry
gcloud auth configure-docker $REGION-docker.pkg.dev
```

---

## 📦 Step 3 — Enable Required GCP APIs

Run this once per project to enable the necessary services:

```bash
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com
```

---

## 🏗️ Step 4 — Create an Artifact Registry Repository

This is where your Docker image will be stored.

```bash
gcloud artifacts repositories create $REPO_NAME \
  --repository-format=docker \
  --location=$REGION \
  --description="TechX Next.js App Images"
```

---

## 🐳 Step 5 — Build & Push the Docker Image

Navigate to the project root (where `Dockerfile` lives):

```bash
cd "path/to/solaria-next"
```

Build the image and tag it for Artifact Registry:

```bash
docker build \
  -t $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:latest \
  .
```

Push the image to Artifact Registry:

```bash
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:latest
```

> ⏱️ The first build may take 3–5 minutes. Subsequent builds are much faster due to Docker layer caching.

---

## ☁️ Step 6 — Deploy to Cloud Run

Deploy the pushed image as a Cloud Run service:

```bash
gcloud run deploy $SERVICE_NAME \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:latest \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10
```

### Flag Reference

| Flag | Description |
|---|---|
| `--allow-unauthenticated` | Makes the site publicly accessible |
| `--port 8080` | Port the container listens on |
| `--memory 512Mi` | RAM allocated per instance |
| `--min-instances 0` | Scales to zero when idle (saves cost) |
| `--max-instances 10` | Maximum concurrent instances |

---

## ✅ Step 7 — Get Your Live URL

After deployment completes, Cloud Run will print your service URL:

```
Service URL: https://techx-app-xxxxxxxxxxxx-<region-code>.a.run.app
```

You can also retrieve it anytime with:

```bash
gcloud run services describe $SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --format "value(status.url)"
```

---

## 🔄 Updating the Deployment

Whenever you push new code changes, rebuild and redeploy:

```bash
# Rebuild with a new tag (use a version or git SHA for traceability)
docker build -t $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:v2 .
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:v2

# Deploy the new version
gcloud run deploy $SERVICE_NAME \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:v2 \
  --platform managed \
  --region $REGION
```

Cloud Run performs a **zero-downtime rolling update** automatically.

---

## 🌐 Step 8 (Optional) — Map a Custom Domain

If you own a domain (e.g. `techx.com.pk`), you can map it to your Cloud Run service:

```bash
gcloud beta run domain-mappings create \
  --service $SERVICE_NAME \
  --domain www.techx.com.pk \
  --region $REGION
```

Then add the DNS records shown in the output to your domain registrar.

---

## 🔒 Step 9 (Optional) — Add Environment Variables

If you need to pass secrets or config (e.g. API keys):

```bash
gcloud run services update $SERVICE_NAME \
  --region $REGION \
  --set-env-vars="API_KEY=your-key,ANOTHER_VAR=value"
```

For sensitive secrets, use **Secret Manager** instead:

```bash
# Store the secret
echo -n "your-secret-value" | gcloud secrets create MY_SECRET --data-file=-

# Grant Cloud Run access
gcloud secrets add-iam-policy-binding MY_SECRET \
  --member="serviceAccount:$(gcloud run services describe $SERVICE_NAME --region $REGION --format='value(spec.template.spec.serviceAccountName)')" \
  --role="roles/secretmanager.secretAccessor"

# Mount it as an env variable on deploy
gcloud run deploy $SERVICE_NAME \
  --region $REGION \
  --set-secrets="MY_ENV_VAR=MY_SECRET:latest"
```

---

## 📊 Monitoring & Logs

View live logs from your deployed service:

```bash
gcloud logging read \
  "resource.type=cloud_run_revision AND resource.labels.service_name=$SERVICE_NAME" \
  --limit 50 \
  --format "value(textPayload)"
```

Or view them in the [GCP Console → Cloud Run → Logs](https://console.cloud.google.com/run).

---

## 🗑️ Cleanup (Optional)

To delete the service and avoid charges:

```bash
# Delete the Cloud Run service
gcloud run services delete $SERVICE_NAME --region $REGION

# Delete the Artifact Registry repository
gcloud artifacts repositories delete $REPO_NAME --location $REGION
```

---

## 🏁 Quick Reference — All Commands at a Glance

```bash
# 1. Auth
gcloud auth login
gcloud config set project $PROJECT_ID
gcloud auth configure-docker $REGION-docker.pkg.dev

# 2. Enable APIs
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com

# 3. Create repo
gcloud artifacts repositories create $REPO_NAME --repository-format=docker --location=$REGION

# 4. Build & push
docker build -t $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:latest .
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:latest

# 5. Deploy
gcloud run deploy $SERVICE_NAME \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME:latest \
  --platform managed --region $REGION --allow-unauthenticated --port 8080

# 6. Get URL
gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format "value(status.url)"
```

---

*Generated for TechX — `solaria-next` · March 2026*
