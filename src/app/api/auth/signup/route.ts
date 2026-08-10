import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUsers = await sql`
      SELECT id FROM users WHERE email = ${email.toLowerCase().trim()}
    `;

    if (existingUsers.length > 0) {
      return NextResponse.json(
        { error: "A user with this email already exists." },
        { status: 400 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);
    const id = "user-" + randomUUID();
    const avatar = "👤";

    // Insert user with default stats
    await sql`
      INSERT INTO users (
        id, name, email, password_hash, avatar, level, xp, coins, streak,
        is_premium, rating, leaderboard_rank, solved_problems, weak_topics,
        badges, heatmap, bookmarks, notes, resume_score, resume_details
      ) VALUES (
        ${id},
        ${name.trim()},
        ${email.toLowerCase().trim()},
        ${passwordHash},
        ${avatar},
        1, 0, 50, 0, false, 1200, 0,
        ${[]}, ${[]}, ${JSON.stringify([])}, ${JSON.stringify({})},
        ${[]}, ${JSON.stringify({})}, 0, null
      )
    `;

    // Fetch the newly created user profile
    const newUsers = await sql`
      SELECT * FROM users WHERE id = ${id}
    `;

    if (newUsers.length === 0) {
      return NextResponse.json(
        { error: "Failed to retrieve user after creation." },
        { status: 500 }
      );
    }

    const dbUser = newUsers[0];

    // Map database fields to camelCase response model
    const profile = {
      id: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      avatar: dbUser.avatar || "👤",
      level: dbUser.level ?? 1,
      xp: dbUser.xp ?? 0,
      coins: dbUser.coins ?? 50,
      streak: dbUser.streak ?? 0,
      isPremium: dbUser.is_premium ?? false,
      rating: dbUser.rating ?? 1200,
      leaderboardRank: dbUser.leaderboard_rank ?? 0,
      solvedProblems: dbUser.solved_problems || [],
      weakTopics: dbUser.weak_topics || [],
      badges: typeof dbUser.badges === "string" ? JSON.parse(dbUser.badges) : (dbUser.badges || []),
      heatmap: typeof dbUser.heatmap === "string" ? JSON.parse(dbUser.heatmap) : (dbUser.heatmap || {}),
      bookmarks: dbUser.bookmarks || [],
      notes: typeof dbUser.notes === "string" ? JSON.parse(dbUser.notes) : (dbUser.notes || {}),
      resumeScore: dbUser.resume_score ?? 0,
      resumeDetails: typeof dbUser.resume_details === "string" ? JSON.parse(dbUser.resume_details) : (dbUser.resume_details || null),
    };

    return NextResponse.json({ success: true, user: profile });
  } catch (error: any) {
    console.error("Signup failed:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred during signup." },
      { status: 500 }
    );
  }
}
