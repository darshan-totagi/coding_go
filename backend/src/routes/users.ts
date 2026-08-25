import { Router, Request, Response } from "express";
import { sql } from "../lib/db";

const router = Router();

// ─── GET /api/users ───────────────────────────────────────────────────────
router.get("/", async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"] as string;

    if (!userId) {
      res.status(401).json({ error: "Unauthorized. Missing user ID header." });
      return;
    }

    const caller = await sql`SELECT role FROM users WHERE id = ${userId}`;
    if (caller.length === 0 || caller[0].role !== "admin") {
      res.status(403).json({ error: "Forbidden. Admin access required." });
      return;
    }

    const dbUsers = await sql`SELECT id, name, email, role, is_premium FROM users ORDER BY name ASC`;

    const users = dbUsers.map((u: any) => ({
      id: u.id,
      name: u.name || "Unnamed User",
      email: u.email,
      role: u.role || "student",
      premium: u.is_premium ? "Premium" : "Free",
    }));

    res.json({ success: true, users });
  } catch (error: any) {
    console.error("Failed to fetch database users:", error);
    res.status(500).json({ error: error.message || "Failed to load directory." });
  }
});

// ─── POST /api/users ──────────────────────────────────────────────────────
router.post("/", async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"] as string;

    if (!userId) {
      res.status(401).json({ error: "Unauthorized." });
      return;
    }

    const caller = await sql`SELECT role FROM users WHERE id = ${userId}`;
    if (caller.length === 0 || caller[0].role !== "admin") {
      res.status(403).json({ error: "Forbidden." });
      return;
    }

    const { targetUserId, isPremium } = req.body;

    if (!targetUserId) {
      res.status(400).json({ error: "Target user ID is required." });
      return;
    }

    await sql`
      UPDATE users
      SET is_premium = ${isPremium}
      WHERE id = ${targetUserId}
    `;

    res.json({ success: true });
  } catch (error: any) {
    console.error("Failed to update user access tier:", error);
    res.status(500).json({ error: error.message || "Failed to update access tier." });
  }
});

export default router;
