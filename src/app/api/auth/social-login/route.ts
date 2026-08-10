import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, provider } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required for social login." },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanName = name || cleanEmail.split("@")[0].toUpperCase();
    const avatar = provider === "Google" ? "🌐" : provider === "GitHub" ? "🐙" : provider === "LinkedIn" ? "💼" : "👤";

    // Check if user already exists
    const users = await sql`
      SELECT * FROM users WHERE email = ${cleanEmail}
    `;

    let dbUser;

    if (users.length > 0) {
      dbUser = users[0];
      // Optionally update avatar if it matches placeholder
      if (dbUser.avatar === "👤" && avatar !== "👤") {
        await sql`
          UPDATE users SET avatar = ${avatar} WHERE id = ${dbUser.id}
        `;
        dbUser.avatar = avatar;
      }
    } else {
      // Create a new user for this social account
      const id = "user-" + randomUUID();
      await sql`
        INSERT INTO users (
          id, name, email, password_hash, avatar, level, xp, coins, streak,
          is_premium, rating, leaderboard_rank, solved_problems, weak_topics,
          badges, heatmap, bookmarks, notes, resume_score, resume_details
        ) VALUES (
          ${id},
          ${cleanName},
          ${cleanEmail},
          null, -- no password hash for social login
          ${avatar},
          1, 0, 50, 0, false, 1200, 0,
          ${[]}, ${[]}, ${JSON.stringify([])}, ${JSON.stringify({})},
          ${[]}, ${JSON.stringify({})}, 0, null
        )
      `;

      const newUsers = await sql`
        SELECT * FROM users WHERE id = ${id}
      `;
      dbUser = newUsers[0];
    }

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
    console.error("Social login failed:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred during social login." },
      { status: 500 }
    );
  }
}
