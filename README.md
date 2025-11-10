# Jonny Halprin - Personal Website

Professional website showcasing consulting and startup advisory services.

## 🚀 Deployment Instructions

### Step 1: Push to GitHub

1. Open PowerShell and navigate to your project directory:
```powershell
cd "C:\Users\Jonny\.cursor"
```

2. Initialize Git and create your first commit:
```powershell
git init
git add .
git commit -m "Initial commit: Personal website"
```

3. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it something like `jonny-halprin-website` (or any name you prefer)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

4. Link your local repository to GitHub and push:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy with GitHub Pages

#### Option A: Automatic Deployment (Recommended)

1. In your GitHub repository, go to **Settings** → **Pages**
2. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

#### Option B: Alternative Hosting (Netlify - Even Easier!)

**Netlify offers better performance and easier custom domain setup:**

1. Go to https://www.netlify.com/
2. Click "Sign up" and use your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or use `/`)
6. Click "Deploy site"

Your site will be live immediately with a URL like `random-name-12345.netlify.app`

### Step 3: Connect Your Custom Domain

#### For GitHub Pages:

1. In your repository, go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `jonnyhalprin.com`)
3. Click **Save**
4. In your domain registrar (where you bought the domain):
   - Add an **A record** pointing to these GitHub IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **CNAME record** for `www` pointing to `YOUR_USERNAME.github.io`

5. Wait 10-60 minutes for DNS propagation
6. Enable "Enforce HTTPS" in GitHub Pages settings (after DNS propagates)

#### For Netlify (Easier):

1. In your Netlify dashboard, click on your site
2. Go to **Domain settings** → **Add custom domain**
3. Enter your domain and follow the instructions
4. Netlify will provide you with:
   - Name servers to update at your domain registrar
   - OR specific DNS records to add

5. Update your domain's nameservers or DNS records at your registrar
6. SSL certificate will be automatically provisioned (usually within minutes)

### Step 4: Making Future Updates

It's this simple:

1. Make your changes in Cursor
2. Open PowerShell in your project directory:
```powershell
cd "C:\Users\Jonny\.cursor"
git add .
git commit -m "Description of your changes"
git push
```

3. Your site will automatically update within 1-2 minutes!

## 📝 Common Domain Registrars - DNS Setup Links

- **GoDaddy**: My Products → Domain → DNS → Manage DNS
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Google Domains**: My domains → [your domain] → DNS
- **Cloudflare**: Select your domain → DNS
- **Domain.com**: Domain Management → DNS & Nameservers

## 🛠 Tech Stack

- HTML5
- CSS3 (with modern gradients and animations)
- Vanilla JavaScript
- Formspree (for contact form)
- Inter font family

## 📧 Contact Form

The contact form uses Formspree. Your current endpoint is already configured in the HTML.
If you need to change it, update the form action in `index.html`, `contact.html`, etc.

## 🎨 Making Updates

### Changing Colors
Primary colors are defined in `styles.css`. Search for these hex values to customize:
- `#3b82f6` - Primary blue
- `#1e3a8a` - Dark blue
- `#0f172a` - Dark background

### Adding Content
- Update service offerings in `consulting.html` and `startup.html`
- Modify the hero text in each HTML file
- Add new pages by copying an existing structure

### Images
- Replace `images/headshot.jpg.jpg` with your professional photo
- Keep images optimized for web (< 500KB recommended)

## 🚨 Troubleshooting

**Site not updating?**
- Clear your browser cache (Ctrl + Shift + R)
- Check GitHub Actions or Netlify deploy logs

**Custom domain not working?**
- DNS changes can take 24-48 hours (usually much faster)
- Verify DNS records with https://dnschecker.org/

**Form not working?**
- Verify Formspree endpoint in HTML files
- Check Formspree dashboard for submissions

## 📞 Questions?

If you run into any issues during deployment, feel free to reach out!

