import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Retrieve user by email
    const users = await sql`
      SELECT * FROM users WHERE email = ${email.toLowerCase().trim()}
    `;

    if (users.length === 0) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const dbUser = users[0];

    // Check password hash
    const isPasswordValid = await bcrypt.compare(password, dbUser.password_hash || "");
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
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
      resumeDetails: typeof dbUser.resume_details === "string" ? JSON.parse(dbUser.resume_details) : (dbUser.resume_details || null),
    };

    return NextResponse.json({ success: true, user: profile });
  } catch (error: any) {
    console.error("Login failed:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred during login." },
      { status: 500 }
    );
  }
}
