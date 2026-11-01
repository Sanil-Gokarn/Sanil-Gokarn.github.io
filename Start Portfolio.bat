@echo off
title Portfolio - http://localhost:4321
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Download it from https://nodejs.org and try again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies, this only happens once...
  call npm install
)

echo.
echo   Your portfolio is starting and will open in your browser.
echo   Edits to the site show up automatically while this window is open.
echo   Close this window to stop the site.
echo.

call npm run dev -- --port 4321 --open
pause
