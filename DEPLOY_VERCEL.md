# 🚀 Deploying TechX Website to Vercel

Vercel is the creator of Next.js and provides the absolute easiest experience for deploying Next.js applications natively.

---

## Method 1: Deploying via GitHub (Recommended & Easiest)

This method sets up automatic deployments. Every time you push code to GitHub in the future, Vercel will automatically rebuild and deploy your site.

### Step 1: Push your code to GitHub
If your code isn't on GitHub yet, push it to a new repository.
1. Open GitHub and create a new repository.
2. In your terminal, run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import Project on Vercel
1. Create a free account or log in at [Vercel.com](https://vercel.com/signup).
2. Click the **"Add New..."** button and select **"Project"**.
3. Connect your GitHub account if you haven't already.
4. Find your repository in the list and click **"Import"**.

### Step 3: Deployment Settings
Vercel will auto-detect that it is a Next.js project. You don't need to change any configuration!
1. (Optional) If you have Environment Variables (like API keys), expand the **"Environment Variables"** dropdown and add them.
2. Click **"Deploy"**.

Vercel will build your project. Once complete, you'll receive a live URL (e.g., `https://solaria-next.vercel.app`)!

---

## Method 2: Deploying via Vercel CLI (From your Terminal)

This method allows you to deploy directly from your VS Code terminal without needing GitHub.

### Step 1: Install Vercel CLI
In your terminal, run:
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
Follow the prompts in your browser to log in.

### Step 3: Deploy!
Make sure you are in your project folder (`D:\Root\Solaria\Solaria HTML\solaria-next`) and run:
```bash
vercel
```

**Answer the setup questions like this:**
- Set up and deploy `~\Solaria HTML\solaria-next`? **[Y]**
- Which scope do you want to deploy to? **[Press Enter for your account]**
- Link to existing project? **[N]**
- What's your project's name? **[Press Enter for default or type a name]**
- In which directory is your code located? **[Press Enter for ./]**
- Want to modify these settings? **[N]**

Vercel will upload and build your code and give you a `Preview` URL. 

### Step 4: Deploy to Production
When you are happy with the preview and want to push it to the main live URL, run:
```bash
vercel --prod
```

---

## 🌐 Setting up a Custom Domain
Once deployed, if you own a domain (like `techx.com.pk`):
1. Go to your project dashboard on Vercel.
2. Click **"Settings"** -> **"Domains"**.
3. Enter your domain name and click **"Add"**.
4. Vercel will give you Nameservers or exact DNS Records (like A and CNAME) to add to your domain registrar (Namecheap, GoDaddy, etc.).
