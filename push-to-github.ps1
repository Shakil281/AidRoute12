# Push AidRoute Code to GitHub

Write-Host "`n================================================================================" -ForegroundColor Cyan
Write-Host "  PUSHING CODE TO GITHUB: Shakil281/AidRoute12" -ForegroundColor Green
Write-Host "================================================================================`n" -ForegroundColor Cyan

# Change to project directory
cd c:\aidroute-frontend

Write-Host "Your commits ready to push:" -ForegroundColor Yellow
git log --oneline -6

Write-Host "`n================================================================================" -ForegroundColor Cyan
Write-Host "  PLEASE ENTER YOUR GITHUB PERSONAL ACCESS TOKEN" -ForegroundColor Yellow
Write-Host "================================================================================`n" -ForegroundColor Cyan

Write-Host "If you don't have a token, create one at:" -ForegroundColor White
Write-Host "  https://github.com/settings/tokens`n" -ForegroundColor Cyan
Write-Host "Instructions:" -ForegroundColor Yellow
Write-Host "  1. Generate new token (classic)" -ForegroundColor White
Write-Host "  2. Name: aidroute-deploy" -ForegroundColor White
Write-Host "  3. Select: repo (all permissions)" -ForegroundColor White
Write-Host "  4. Generate and copy the token`n" -ForegroundColor White

$token = Read-Host "Paste your GitHub Personal Access Token here"

if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Host "`n❌ No token provided. Exiting." -ForegroundColor Red
    exit
}

Write-Host "`n📤 Pushing to GitHub..." -ForegroundColor Green

# Push using token
git push https://${token}@github.com/Shakil281/AidRoute12.git main

Write-Host "`n✅ Push complete! Check your repository:" -ForegroundColor Green
Write-Host "   https://github.com/Shakil281/AidRoute12" -ForegroundColor Cyan

Write-Host "`n🚀 Now deploy to Vercel:" -ForegroundColor Yellow
Write-Host "   1. Go to: https://vercel.com/new" -ForegroundColor White
Write-Host "   2. Import: Shakil281/AidRoute12" -ForegroundColor White
Write-Host "   3. Click: Deploy" -ForegroundColor White

