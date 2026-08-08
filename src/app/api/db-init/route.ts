import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { problems } from "@/data/problems";

export async function GET() {
  try {
    // 1. Create problems table
    await sql(`
      CREATE TABLE IF NOT EXISTS problems (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        title_slug TEXT NOT NULL,
        difficulty TEXT NOT NULL,
        acceptance_rate NUMERIC DEFAULT 0,
        tags TEXT[] NOT NULL DEFAULT '{}',
        companies TEXT[] NOT NULL DEFAULT '{}',
        description TEXT NOT NULL,
        constraints TEXT[] NOT NULL DEFAULT '{}',
        examples JSONB NOT NULL DEFAULT '[]',
        code_templates JSONB NOT NULL DEFAULT '{}',
        test_cases JSONB NOT NULL DEFAULT '[]',
        editorial TEXT DEFAULT '',
        video_url TEXT DEFAULT '',
        hints TEXT[] NOT NULL DEFAULT '{}'
      );
    `);

    // 2. Create users table
    await sql(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT UNIQUE NOT NULL,
        avatar TEXT,
        level INTEGER DEFAULT 1,
        xp INTEGER DEFAULT 0,
        coins INTEGER DEFAULT 0,
        streak INTEGER DEFAULT 0,
        is_premium BOOLEAN DEFAULT FALSE,
        rating INTEGER DEFAULT 1200,
        leaderboard_rank INTEGER DEFAULT 0,
        solved_problems TEXT[] DEFAULT '{}',
        weak_topics TEXT[] DEFAULT '{}',
        badges JSONB DEFAULT '[]',
        heatmap JSONB DEFAULT '{}',
        bookmarks TEXT[] DEFAULT '{}',
        notes JSONB DEFAULT '{}',
        resume_score INTEGER DEFAULT 0,
        resume_details JSONB
      );
    `);

    // 3. Seed problems if empty
    const existingProblems = await sql(`SELECT COUNT(*) FROM problems;`);
    const count = parseInt(existingProblems[0].count, 10);
    
    let seededCount = 0;
    if (count === 0) {
      for (const p of problems) {
        await sql(
          `INSERT INTO problems (
            id, title, title_slug, difficulty, acceptance_rate, tags, companies,
            description, constraints, examples, code_templates, test_cases,
            editorial, video_url, hints
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
          [
            p.id,
            p.title,
            p.titleSlug,
            p.difficulty,
            p.acceptanceRate,
            p.tags,
            p.companies,
            p.description,
            p.constraints,
            JSON.stringify(p.examples || []),
            JSON.stringify(p.codeTemplates || {}),
            JSON.stringify(p.testCases || []),
            p.editorial || "",
            p.videoUrl || "",
            p.hints || []
          ]
        );
        seededCount++;
      }
    }

    return NextResponse.json({
      success: true,
      message: "Database initialized successfully!",
      seededProblems: seededCount,
      totalProblems: count === 0 ? seededCount : count
    });
  } catch (error: any) {
    console.error("Database initialization failed:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
