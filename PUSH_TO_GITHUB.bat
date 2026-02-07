@echo off
cd /d %~dp0
echo ======================================================
echo   SABRINA'S MATH PORTAL - GITHUB DEPLOYER
echo ======================================================
echo.
echo 1. Creating/Updating remote link...
git remote add origin https://github.com/adwards74/math-portal.git 2>nul
git remote set-url origin https://github.com/adwards74/math-portal.git

echo 2. Pushing to GitHub...
echo (If a login window appears, please sign in to complete the transfer.)
git push -u origin master

echo.
echo ======================================================
echo   DEPLOYMENT COMPLETE! 
echo   Check your URL: https://adwards74.github.io/math-portal/
echo ======================================================
pause
