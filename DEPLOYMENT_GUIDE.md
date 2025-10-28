# Deployment Guide - AidRoute Frontend

## 🚀 Quick Deployment Steps

### Step 1: Push to GitHub

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `aidroute-frontend`
   - Set it to **Public** or **Private**
   - **DO NOT** initialize with README (we already have one)
   - Click "Create repository"

2. **Push to GitHub** (Run these commands):
   ```bash
   cd c:\aidroute-frontend
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aidroute-frontend.git
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` with your GitHub username!

### Step 2: Deploy to Vercel

**Option A: Quick Deploy (Easiest)**
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Sign in with GitHub
4. Select your `aidroute-frontend` repository
5. Click "Deploy"
6. Wait 2-3 minutes
7. You'll get a live URL like: `https://aidroute-frontend-xxxxx.vercel.app`

**Option B: Vercel CLI**
```bash
npm install -g vercel
vercel login
cd c:\aidroute-frontend
vercel
```
Follow the prompts!

### Step 3: Configure Environment Variables (Optional)

If you want to use real API endpoints or Google Maps:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add:
   - `VITE_API_URL` → Your backend API URL
   - `VITE_GOOGLE_MAPS_API_KEY` → Your Google Maps API key

4. Redeploy the project

## 🎯 What Happens Next?

✅ **Automatic Deployments**: Every push to `main` branch auto-deploys  
✅ **Preview Deployments**: Every PR gets its own preview URL  
✅ **HTTPS**: Automatic SSL certificate  
✅ **Fast CDN**: Global edge network  
✅ **No Cost**: Free tier includes plenty for this app

## 📝 GitHub Repository Commands

```bash
# View remote
git remote -v

# Add remote (if not done)
git remote add origin https://github.com/YOUR_USERNAME/aidroute-frontend.git

# Push to GitHub
git push -u origin main

# Check status
git status
```

## 🔧 Troubleshooting

### If GitHub Push Fails
```bash
# Update remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/aidroute-frontend.git

# Try again
git push -u origin main
```

### If Vercel Build Fails
1. Check build logs in Vercel dashboard
2. Ensure `vercel.json` is correct
3. Try rebuilding from dashboard

## 📊 Project Status

- **Repository**: Will be at `https://github.com/YOUR_USERNAME/aidroute-frontend`
- **Live URL**: Will be at `https://aidroute-frontend-xxxxx.vercel.app`
- **Auto-deploy**: ✅ Enabled
- **Environment**: Production ready

## 🎉 You're Done!

Once deployed, your app will be:
- ✅ Publicly accessible via Vercel URL
- ✅ Automatically updated on every git push
- ✅ Fast and secure
- ✅ Production ready

---

**Need Help?** Check the Vercel docs: https://vercel.com/docs

