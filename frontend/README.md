# Codeplace Frontend (Next.js)

## Overview

This is the frontend for the Codeplace platform — a Next.js app that talks to the separate backend API server.

## Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **UI**: React 19, Tailwind CSS, Framer Motion
- **Editor**: Monaco Editor
- **Payments**: Razorpay JS SDK (loaded client-side)

## Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Required env vars:
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API URL (e.g. `https://codeplace-api.railway.app`) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay public key (safe to expose) |

### 3. Start development server
```bash
npm run dev
```
> Make sure the backend is also running at the URL specified in `NEXT_PUBLIC_API_URL`.

### 4. Build for production
```bash
npm run build
npm start
```

## Deployment (Vercel / Netlify)

1. Push this `frontend/` directory as a standalone repo (or configure root directory in Vercel)
2. Set the environment variables in the Vercel/Netlify dashboard:
   - `NEXT_PUBLIC_API_URL` → your deployed backend URL
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` → your Razorpay public key
3. Deploy!
