import { Router, Request, Response } from "express";
import { sql } from "../lib/db";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

const router = Router();

// ─── Helper: map DB row to camelCase UserProfile ──────────────────────────
function mapUserProfile(dbUser: any) {
  return {
    id: dbUser.id,
    name: dbUser.name,
    email: dbUser.email,
    avatar: dbUser.avatar || "👤",
    level: dbUser.level ?? 1,
    xp: dbUser.xp ?? 0,
    coins: dbUser.coins ?? 50,
    streak: dbUser.streak ?? 0,
    isPremium: dbUser.is_premium ?? false,
    role: dbUser.role ?? "student",
    rating: dbUser.rating ?? 1200,
    leaderboardRank: dbUser.leaderboard_rank ?? 0,
    solvedProblems: dbUser.solved_problems || [],
    weakTopics: dbUser.weak_topics || [],
    badges: typeof dbUser.badges === "string" ? JSON.parse(dbUser.badges) : (dbUser.badges || []),
    heatmap: typeof dbUser.heatmap === "string" ? JSON.parse(dbUser.heatmap) : (dbUser.heatmap || {}),
    bookmarks: dbUser.bookmarks || [],
    notes: typeof dbUser.notes === "string" ? JSON.parse(dbUser.notes) : (dbUser.notes || {}),
    resumeScore: dbUser.resume_score ?? 0,
    resumeDetails:
      typeof dbUser.resume_details === "string"
        ? JSON.parse(dbUser.resume_details)
        : dbUser.resume_details || null,
  };
}

// ─── POST /api/auth/login ─────────────────────────────────────────────────
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }

    const users = await sql`
      SELECT * FROM users WHERE email = ${email.toLowerCase().trim()}
    `;

    if (users.length === 0) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    const dbUser = users[0];
    const isPasswordValid = await bcrypt.compare(password, dbUser.password_hash || "");

    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    res.json({ success: true, user: mapUserProfile(dbUser) });
  } catch (error: any) {
    console.error("Login failed:", error);
    res.status(500).json({ error: error.message || "An unexpected error occurred during login." });
  }
});

// ─── POST /api/auth/signup ────────────────────────────────────────────────
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ error: "Name, email, and password are required." });
      return;
    }

    if (password.length < 6) {
      res.status(400).json({ error: "Password must be at least 6 characters long." });
      return;
    }

    const existingUsers = await sql`
      SELECT id FROM users WHERE email = ${email.toLowerCase().trim()}
    `;

    if (existingUsers.length > 0) {
      res.status(400).json({ error: "A user with this email already exists." });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const id = "user-" + randomUUID();
    const avatar = "👤";

    await sql`
      INSERT INTO users (
        id, name, email, password_hash, avatar, level, xp, coins, streak,
        is_premium, role, rating, leaderboard_rank, solved_problems, weak_topics,
        badges, heatmap, bookmarks, notes, resume_score, resume_details
      ) VALUES (
        ${id},
        ${name.trim()},
        ${email.toLowerCase().trim()},
        ${passwordHash},
        ${avatar},
        1, 0, 50, 0, false, 'student', 1200, 0,
        ${[]}, ${[]}, ${JSON.stringify([])}, ${JSON.stringify({})},
        ${[]}, ${JSON.stringify({})}, 0, null
      )
    `;

    const newUsers = await sql`SELECT * FROM users WHERE id = ${id}`;

    if (newUsers.length === 0) {
      res.status(500).json({ error: "Failed to retrieve user after creation." });
      return;
    }

    res.json({ success: true, user: mapUserProfile(newUsers[0]) });
  } catch (error: any) {
    console.error("Signup failed:", error);
    res.status(500).json({ error: error.message || "An unexpected error occurred during signup." });
  }
});

// ─── POST /api/auth/social-login ─────────────────────────────────────────
router.post("/social-login", async (req: Request, res: Response) => {
  try {
    const { email, name, provider } = req.body;

    if (!email) {
      res.status(400).json({ error: "Email is required for social login." });
      return;
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanName = name || cleanEmail.split("@")[0].toUpperCase();
    const avatar =
      provider === "Google" ? "🌐"
      : provider === "GitHub" ? "🐙"
      : provider === "LinkedIn" ? "💼"
      : "👤";

    const users = await sql`SELECT * FROM users WHERE email = ${cleanEmail}`;

    let dbUser: any;

    if (users.length > 0) {
      dbUser = users[0];
      if (dbUser.avatar === "👤" && avatar !== "👤") {
        await sql`UPDATE users SET avatar = ${avatar} WHERE id = ${dbUser.id}`;
        dbUser.avatar = avatar;
      }
    } else {
      const id = "user-" + randomUUID();
      await sql`
        INSERT INTO users (
          id, name, email, password_hash, avatar, level, xp, coins, streak,
          is_premium, role, rating, leaderboard_rank, solved_problems, weak_topics,
          badges, heatmap, bookmarks, notes, resume_score, resume_details
        ) VALUES (
          ${id},
          ${cleanName},
          ${cleanEmail},
          null,
          ${avatar},
          1, 0, 50, 0, false, 'student', 1200, 0,
          ${[]}, ${[]}, ${JSON.stringify([])}, ${JSON.stringify({})},
          ${[]}, ${JSON.stringify({})}, 0, null
        )
      `;
      const newUsers = await sql`SELECT * FROM users WHERE id = ${id}`;
      dbUser = newUsers[0];
    }

    res.json({ success: true, user: mapUserProfile(dbUser) });
  } catch (error: any) {
    console.error("Social login failed:", error);
    res.status(500).json({ error: error.message || "An unexpected error occurred during social login." });
  }
});

// ─── POST /api/auth/update ────────────────────────────────────────────────
router.post("/update", async (req: Request, res: Response) => {
  try {
    const {
      id, name, avatar, level, xp, coins, streak, isPremium, role, rating,
      leaderboardRank, solvedProblems, weakTopics, badges, heatmap,
      bookmarks, notes, resumeScore, resumeDetails,
    } = req.body;

    if (!id) {
      res.status(400).json({ error: "User ID is required to update profile." });
      return;
    }

    await sql`
      UPDATE users SET
        name = ${name},
        avatar = ${avatar},
        level = ${level},
        xp = ${xp},
        coins = ${coins},
        streak = ${streak},
        is_premium = ${isPremium},
        role = ${role || "student"},
        rating = ${rating},
        leaderboard_rank = ${leaderboardRank},
        solved_problems = ${solvedProblems || []},
        weak_topics = ${weakTopics || []},
        badges = ${JSON.stringify(badges || [])},
        heatmap = ${JSON.stringify(heatmap || {})},
        bookmarks = ${bookmarks || []},
        notes = ${JSON.stringify(notes || {})},
        resume_score = ${resumeScore || 0},
        resume_details = ${JSON.stringify(resumeDetails || null)}
      WHERE id = ${id}
    `;

    res.json({ success: true });
  } catch (error: any) {
    console.error("Update profile failed:", error);
    res.status(500).json({ error: error.message || "Failed to update profile." });
  }
});

export default router;
