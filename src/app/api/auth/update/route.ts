import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      id,
      name,
      avatar,
      level,
      xp,
      coins,
      streak,
      isPremium,
      rating,
      leaderboardRank,
      solvedProblems,
      weakTopics,
      badges,
      heatmap,
      bookmarks,
      notes,
      resumeScore,
      resumeDetails
    } = body;

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required to update profile." },
        { status: 400 }
      );
    }

    // Update the database record using tagged template literals
    await sql`
      UPDATE users SET
        name = ${name},
        avatar = ${avatar},
        level = ${level},
        xp = ${xp},
        coins = ${coins},
        streak = ${streak},
        is_premium = ${isPremium},
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

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Update profile failed:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update profile." },
      { status: 500 }
    );
  }
}
