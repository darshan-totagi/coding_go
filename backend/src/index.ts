import "dotenv/config";
import express from "express";
import cors from "cors";

import authRouter from "./routes/auth";
import problemsRouter from "./routes/problems";
import paymentRouter from "./routes/payment";
import usersRouter from "./routes/users";
import dbInitRouter from "./routes/db-init";

const app = express();
const PORT = process.env.PORT || 5000;

// ─── CORS ───────────────────────────────────────────────────────────────────
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:3000",
  // Add your production frontend URL here, e.g.:
  // "https://codeplace.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. curl, Postman) and allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: Origin '${origin}' not allowed.`));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-user-id"],
    credentials: true,
  })
);

// ─── BODY PARSER ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── HEALTH CHECK ────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── ROUTES ──────────────────────────────────────────────────────────────────
app.use("/api/auth", authRouter);
app.use("/api/problems", problemsRouter);
app.use("/api", paymentRouter);      // /api/create-order, /api/verify-payment
app.use("/api/users", usersRouter);
app.use("/api/db-init", dbInitRouter);

// ─── 404 HANDLER ─────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// ─── GLOBAL ERROR HANDLER ────────────────────────────────────────────────────
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error." });
});

// ─── START ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Codeplace Backend running at http://localhost:${PORT}`);
});

export default app;
