# Codeplace Backend (Express.js API Server)

## Overview

This is the backend API server for the Codeplace platform. It exposes a REST API consumed by the frontend.

## Tech Stack

- **Runtime**: Node.js + TypeScript
- **Framework**: Express.js
- **Database**: Neon (PostgreSQL serverless) via `@neondatabase/serverless`
- **Payments**: Razorpay
- **Auth**: bcryptjs for password hashing

## Project Structure

```
backend/
├── src/
│   ├── index.ts          ← Express app entry point
│   ├── lib/
│   │   └── db.ts         ← Neon database connection
│   ├── data/
│   │   └── problems.ts   ← Static problem data (used for DB seeding)
│   └── routes/
│       ├── auth.ts       ← POST /api/auth/login|signup|social-login|update
│       ├── problems.ts   ← GET|POST|DELETE /api/problems
│       ├── payment.ts    ← POST /api/create-order|verify-payment
│       ├── users.ts      ← GET|POST /api/users (admin only)
│       └── db-init.ts    ← GET /api/db-init (one-time DB setup)
├── .env                  ← Real credentials (not committed)
├── .env.example          ← Template for environment variables
└── package.json
```

## Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

Required env vars:
| Variable | Description |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `RAZORPAY_KEY_ID` | Razorpay API key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay API key secret |
| `PORT` | Port to run on (default: 5000) |
| `FRONTEND_URL` | Frontend URL for CORS (e.g. `https://codeplace.vercel.app`) |

### 3. Initialize Database (first time only)
```bash
curl http://localhost:5000/api/db-init
```

### 4. Start development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
npm start
```

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/api/db-init` | Create tables & seed problems |
| POST | `/api/auth/login` | Email/password login |
| POST | `/api/auth/signup` | New user registration |
| POST | `/api/auth/social-login` | OAuth social login |
| POST | `/api/auth/update` | Update user profile |
| GET | `/api/problems` | List all problems |
| POST | `/api/problems` | Create problem (admin) |
| DELETE | `/api/problems?id=X` | Delete problem (admin) |
| POST | `/api/create-order` | Create Razorpay order |
| POST | `/api/verify-payment` | Verify Razorpay payment |
| GET | `/api/users` | List all users (admin) |
| POST | `/api/users` | Toggle premium status (admin) |

## Deployment (Railway / Render / Fly.io)

1. Set all environment variables in the hosting dashboard
2. Set `FRONTEND_URL` to your deployed frontend URL (for CORS)
3. Deploy — the `npm start` script runs the compiled JS

> **After first deploy**, hit `GET /api/db-init` once to create tables.
