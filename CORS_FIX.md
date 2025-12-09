# CORS Error Fix Guide

## Problem
Frontend at `https://my-portfolio-eight-silk-68.vercel.app` cannot access backend at `https://my-portfolio-3g4c.vercel.app` due to CORS errors.

## Solution

### Step 1: Update Backend Environment Variable in Vercel

1. Go to **Vercel Dashboard** → Your **Backend Project** (`my-portfolio-3g4c`)
2. Navigate to **Settings** → **Environment Variables**
3. Find or create the `CLIENT_ORIGIN` variable
4. Set the value to include ALL your frontend URLs:
   ```
   http://localhost:5173,https://my-portfolio-eight-silk-68.vercel.app,https://vimukthi-buddika-portfolio-3lzk8x1sb.vercel.app
   ```
   (Include localhost for local dev, production URL, and any preview URLs)
   
   **Note:** Vercel preview deployments get new URLs. You may need to add new preview URLs as they're created, or consider using a wildcard pattern if your backend supports it.

5. **Important:** Make sure to select the correct **Environment** (Production, Preview, Development)
   - For production: Select **Production**
   - You can also add it to **Preview** and **Development** if needed

### Step 2: Redeploy Backend

1. After updating the environment variable, go to **Deployments** tab
2. Click the **three dots** (⋯) on the latest deployment
3. Select **Redeploy**
4. Or push a new commit to trigger automatic redeployment

### Step 3: Verify Frontend Environment Variable

1. Go to **Vercel Dashboard** → Your **Frontend Project** (`my-portfolio-eight-silk-68`)
2. Navigate to **Settings** → **Environment Variables**
3. Ensure `VITE_API_URL` is set to:
   ```
   https://my-portfolio-3g4c.vercel.app/api
   ```
4. Redeploy frontend if you just updated it

## What Was Fixed

✅ Updated CORS configuration to support multiple origins  
✅ Added proper CORS headers (methods, allowed headers)  
✅ Fixed Helmet configuration to work with CORS  
✅ Added debugging logs for CORS issues  

## Testing

After redeployment, test:
1. Open your frontend: `https://my-portfolio-eight-silk-68.vercel.app`
2. Open browser DevTools → Console
3. Check if CORS errors are gone
4. Try logging in or fetching projects

## Troubleshooting

If CORS errors persist:

1. **Check Vercel Logs:**
   - Go to Backend Project → Deployments → Latest → Functions
   - Check for CORS-related logs

2. **Verify Environment Variable:**
   - Make sure `CLIENT_ORIGIN` includes your exact frontend URL
   - No trailing slashes
   - Exact match (case-sensitive for protocol)

3. **Check Browser Console:**
   - Look for the exact error message
   - Verify the origin being blocked

4. **Test with curl:**
   ```bash
   curl -H "Origin: https://my-portfolio-eight-silk-68.vercel.app" \
        -H "Access-Control-Request-Method: GET" \
        -H "Access-Control-Request-Headers: Content-Type" \
        -X OPTIONS \
        https://my-portfolio-3g4c.vercel.app/api/projects
   ```

## Environment Variable Format

For multiple origins, use comma-separated (no spaces around commas):
```
CLIENT_ORIGIN=http://localhost:5173,https://my-portfolio-eight-silk-68.vercel.app,https://www.yourdomain.com
```

