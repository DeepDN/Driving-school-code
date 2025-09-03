# Vercel Deployment Guide

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Create a Vercel account at https://vercel.com

## Deployment Steps

### 1. Login to Vercel
```bash
vercel login
```

### 2. Deploy the project
```bash
vercel
```

### 3. For production deployment
```bash
vercel --prod
```

## Configuration Files Created

- `vercel.json` - Vercel configuration
- `api/index.ts` - Serverless API handler
- `.vercelignore` - Files to ignore during deployment

## Environment Variables (if needed)
Set any environment variables in Vercel dashboard:
- Go to your project settings
- Navigate to Environment Variables
- Add any required variables

## Build Process
The build will:
1. Run `vite build` to build the frontend
2. Deploy API functions as serverless functions
3. Serve static files from `dist/public`

## API Routes
All API routes will be available at `/api/*` and handled by the serverless function.

## Domain
After deployment, Vercel will provide:
- A preview URL for testing
- Production URL when using `--prod`
- Option to add custom domain in dashboard
