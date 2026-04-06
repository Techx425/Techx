# TechX Custom Domain Setup Guide 🌐

This guide contains the step-by-step instructions for securely connecting your custom `techx.com.pk` domain name to your Vercel deployment. Vercel automatically natively handles all the heavy lifting and provides a free SSL certificate!

---

### Step 1: Add the Domain in Vercel
1. Log into your **Vercel Dashboard** and click on your newly deployed Next.js `Techx` project.
2. Click on the **Settings** tab located at the top center.
3. On the left-hand navigation sidebar, click on **Domains**.
4. In the text input box, type `techx.com.pk` and hit the **Add** button. 
5. *(Highly Recommended)* Vercel will ask if you also want to add `www.techx.com.pk` to redirect to the main domain. **Say Yes.**

---

### Step 2: Get your DNS Records
Once you attach the domain, Vercel will temporarily show an **"Invalid Configuration"** error block. This happens because the internet doesn't know where to route your domain yet.

Inside that error block, Vercel will provide exactly one or two **DNS Records** that you need to copy. Usually, the main requirement is an **A Record**:
- **Type:** `A` 
- **Name:** `@` (or leave it completely blank)
- **Value:** `76.76.21.21` (This is Vercel's global secure IP address)

---

### Step 3: Point your Registrar to Vercel
Now it is time to route your internet traffic:

1. Open a new tab and absolutely log into the company where you explicitly bought `techx.com.pk` (like Hostinger, Namecheap, GoDaddy, PKNIC, etc.).
2. Navigate to your domain's **DNS Management** or **DNS Settings** page.
3. Delete any old placeholder "A Records" that were there previously.
4. Add a **New DNS Record** using the exact Type, Name, and Value that Vercel provided you in *Step 2*.
5. Save your changes!

---

### Step 4: Wait for the Magic
DNS changes take time to bounce around the globe's internet servers. You can safely close the window and wait.

This can take anywhere from 5 minutes to a maximum of 2 hours.
Keep an eye on that Domain page in your Vercel Dashboard; the red "Invalid Configuration" error will automatically magically turn into a **green checkmark**. As soon as that happens, your website is instantly live securely at `techx.com.pk`!
