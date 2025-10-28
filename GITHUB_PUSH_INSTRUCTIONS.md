# 🔐 Push to GitHub - Authentication Required

Your repository is already on GitHub, but you need to authenticate to push changes.

## Option 1: Personal Access Token (Recommended)

### Step 1: Generate Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `aidroute-deploy-token`
4. Expiration: 90 days (or your preference)
5. Select scope: **repo** (check all repo permissions)
6. Click "Generate token"
7. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push Using Token
Open PowerShell/Command Prompt and run:

```bash
cd c:\aidroute-frontend
git push https://github.com/Shakil281/aidroute-frontend.git main
```

When prompted:
- **Username**: Shakil281
- **Password**: Paste the token you copied

## Option 2: Use SSH (Alternative)

### Step 1: Set up SSH (if not already done)
```bash
# Check if you have SSH key
ls ~/.ssh

# If not, generate one
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept defaults
```

### Step 2: Add SSH key to GitHub
1. Copy your public key: `cat ~/.ssh/id_ed25519.pub`
2. Go to: https://github.com/settings/ssh/new
3. Paste the key
4. Click "Add SSH key"

### Step 3: Change remote to SSH
```bash
cd c:\aidroute-frontend
git remote set-url origin git@github.com:Shakil281/aidroute-frontend.git
git push -u origin main
```

## Option 3: GitHub CLI (Easiest)

```bash
# Install GitHub CLI (if not installed)
winget install GitHub.cli

# Login
gh auth login

# Push
cd c:\aidroute-frontend
git push -u origin main
```

---

## 📝 Quick Check

After pushing, verify at:
https://github.com/Shakil281/aidroute-frontend

You should see all the updated files!

---

## 🚀 Deploy to Vercel

Once code is on GitHub:

1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Sign in with GitHub
4. Select: **Shakil281/aidroute-frontend**
5. Click "Deploy"
6. Wait 2 minutes
7. Your app will be live! 🎉

Your deployed URL will be: `https://aidroute-frontend-xxxxx.vercel.app`

