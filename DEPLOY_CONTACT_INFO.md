# Deploy Contact Information Updates

## ✅ Changes Made
- Email updated to: `vimukthibudi0007@icloud.com`
- Phone updated to: `+94 756137623`

## 🚀 Steps to Deploy to Vercel

### Option 1: Commit and Push (Recommended - Auto Deploy)

1. **Stage the changes:**
   ```bash
   git add frontend/src/pages/Home/HomeEnhanced.jsx
   git add frontend/src/pages/Contact/ContactEnhanced.jsx
   git add frontend/src/components/Layout/Footer.jsx
   git add frontend/src/FigmaUI/src/App.tsx
   ```

2. **Commit the changes:**
   ```bash
   git commit -m "Update contact information: email and phone number"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

4. **Vercel will automatically redeploy** your frontend when it detects the push.

### Option 2: Manual Redeploy in Vercel

If the changes are already committed:

1. Go to **Vercel Dashboard** → Your **Frontend Project**
2. Navigate to **Deployments** tab
3. Click the **three dots** (⋯) on the latest deployment
4. Select **Redeploy**
5. Wait for the deployment to complete

### Option 3: Force Redeploy (If Auto Deploy Doesn't Work)

1. Make a small change to trigger a new deployment:
   ```bash
   # Add a comment or space to trigger rebuild
   git commit --allow-empty -m "Trigger Vercel redeploy"
   git push origin main
   ```

## 🔍 Verify Changes

After deployment, check:
1. Home page → "Get In Touch" section
2. Contact page → Contact information
3. Footer → Email link

All should show:
- Email: `vimukthibudi0007@icloud.com`
- Phone: `+94 756137623`

## ⚠️ Troubleshooting

If changes don't appear after deployment:

1. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or open in incognito/private mode

2. **Check Vercel build logs:**
   - Go to Vercel Dashboard → Deployments → Latest → Build Logs
   - Ensure build completed successfully

3. **Verify files are updated:**
   - Check that files in GitHub have the new contact info
   - If not, the files may not have been committed

4. **Check environment:**
   - Make sure you're viewing the correct deployment (Production vs Preview)

