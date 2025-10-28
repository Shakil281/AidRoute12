# Push to GitHub Script
# Run this script in PowerShell

Write-Host "🔐 Authenticating with GitHub..." -ForegroundColor Cyan
Write-Host ""

# Check if GitHub CLI is installed
if (!(Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "⚠️  GitHub CLI not found. Installing..." -ForegroundColor Yellow
    winget install GitHub.cli
}

# Login to GitHub
Write-Host "Please follow the authentication prompts..."
gh auth login

# Push to GitHub
Write-Host ""
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Green
cd c:\aidroute-frontend
git push https://github.com/Shakil281/aidroute-frontend.git main

Write-Host ""
Write-Host "✅ Done! Check your repo: https://github.com/Shakil281/aidroute-frontend" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Now deploy to Vercel:" -ForegroundColor Cyan
Write-Host "   1. Go to: https://vercel.com/new" -ForegroundColor White
Write-Host "   2. Import: Shakil281/aidroute-frontend" -ForegroundColor White
Write-Host "   3. Click Deploy" -ForegroundColor White

