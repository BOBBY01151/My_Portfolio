# Vercel Deployment Guide

This guide explains how to deploy the Portfolio backend and frontend separately on Vercel.

## 📁 Project Structure

```
My_Portfolio/
├── backend/          # Backend API (Node.js/Express)
│   ├── vercel.json   # Backend Vercel configuration
│   └── api/          # Serverless functions
└── frontend/         # Frontend (React/Vite)
    └── vercel.json   # Frontend Vercel configuration
```

## 🚀 Deployment Steps

### 1. Deploy Backend

1. **Go to Vercel Dashboard** → New Project
2. **Import your repository**
3. **Configure Project:**
   - **Root Directory:** `backend`
   - **Framework Preset:** Other
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
   - **Install Command:** `npm install`

4. **Environment Variables:**
   Add these in Vercel Dashboard → Settings → Environment Variables:
   ```
   MONGO_URI=mongodb+srv://your-connection-string
   JWT_SECRET=your-random-secret-key
   JWT_EXPIRES_IN=7d
   CLIENT_ORIGIN=https://your-frontend-domain.vercel.app
   NODE_ENV=production
   PORT=3001
   ```

5. **Deploy!**
   - Vercel will automatically detect `backend/vercel.json`
   - Your backend will be available at: `https://your-backend.vercel.app`

### 2. Deploy Frontend

1. **Go to Vercel Dashboard** → New Project
2. **Import your repository** (same repo, different project)
3. **Configure Project:**
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables:**
   Add these in Vercel Dashboard → Settings → Environment Variables:
   ```
   VITE_API_URL=https://your-backend.vercel.app/api
   ```

5. **Deploy!**
   - Vercel will automatically detect `frontend/vercel.json`
   - Your frontend will be available at: `https://your-frontend.vercel.app`

## 🔧 Configuration Files

### Backend `vercel.json`
```json
{
  "version": 2,
  "buildCommand": "",
  "outputDirectory": "",
  "installCommand": "npm install",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/api/index.js"
    }
  ],
  "functions": {
    "api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### Frontend `vercel.json`
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🔐 Important Notes

1. **CORS Configuration:**
   - Update `CLIENT_ORIGIN` in backend environment variables to match your frontend URL
   - Example: `CLIENT_ORIGIN=https://your-frontend.vercel.app`

2. **API URL:**
   - Update `VITE_API_URL` in frontend environment variables to match your backend URL
   - Example: `VITE_API_URL=https://your-backend.vercel.app/api`

3. **Database:**
   - Ensure MongoDB Atlas IP whitelist includes Vercel's IP ranges (or use `0.0.0.0/0` for development)
   - Keep your MongoDB connection string secure in environment variables

4. **JWT Secret:**
   - Use a strong, random string for `JWT_SECRET` in production
   - Never commit secrets to Git

## 📝 Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Environment variables configured correctly
- [ ] CORS settings updated
- [ ] API URL updated in frontend
- [ ] Test login functionality
- [ ] Test API endpoints
- [ ] Verify database connection

## 🐛 Troubleshooting

### Backend Issues

1. **Function Timeout:**
   - Vercel free tier has 10s timeout for Hobby plan
   - Consider upgrading or optimizing database queries

2. **Database Connection:**
   - Check MongoDB Atlas IP whitelist
   - Verify connection string in environment variables

3. **CORS Errors:**
   - Ensure `CLIENT_ORIGIN` matches your frontend URL exactly
   - Check for trailing slashes

### Frontend Issues

1. **API Not Found:**
   - Verify `VITE_API_URL` environment variable
   - Check network tab in browser DevTools

2. **Build Errors:**
   - Check Node.js version (should be 18+)
   - Review build logs in Vercel dashboard

3. **Routing Issues:**
   - Ensure `vercel.json` has the rewrite rule for SPA routing

## 🔄 Updating Deployments

Both projects will automatically redeploy when you push to your main branch. Make sure to:
- Update environment variables if needed
- Test changes locally first
- Monitor deployment logs

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

