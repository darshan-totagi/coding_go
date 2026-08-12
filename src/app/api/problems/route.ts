import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { problems as staticProblems } from "@/data/problems";

// Helper to sanitize slug
function sanitizeSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-");
}

export async function GET() {
  try {
    // Fetch all problems from the database
    let dbProblems = await sql`SELECT * FROM problems ORDER BY id ASC`;

    // If table is empty, auto-seed with static problems
    if (dbProblems.length === 0) {
      console.log("No problems in database. Seeding standard problem set...");
      for (const p of staticProblems) {
        await sql`
          INSERT INTO problems (
            id, title, title_slug, difficulty, acceptance_rate, tags, companies,
            description, constraints, examples, code_templates, test_cases,
            editorial, video_url, hints
          ) VALUES (
            ${p.id},
            ${p.title},
            ${p.titleSlug},
            ${p.difficulty},
            ${p.acceptanceRate || 0},
            ${p.tags || []},
            ${p.companies || []},
            ${p.description},
            ${p.constraints || []},
            ${JSON.stringify(p.examples || [])},
            ${JSON.stringify(p.codeTemplates || {})},
            ${JSON.stringify(p.testCases || [])},
            ${p.editorial || ""},
            ${p.videoUrl || ""},
            ${p.hints || []}
          )
          ON CONFLICT (id) DO NOTHING
        `;
      }
      // Fetch again after seeding
      dbProblems = await sql`SELECT * FROM problems ORDER BY id ASC`;
    }

    // Map database fields to camelCase models
    const problems = dbProblems.map((p: any) => ({
      id: p.id,
      title: p.title,
      titleSlug: p.title_slug,
      difficulty: p.difficulty,
      acceptanceRate: parseFloat(p.acceptance_rate || 0),
      tags: p.tags || [],
      companies: p.companies || [],
      description: p.description,
      constraints: p.constraints || [],
      examples: typeof p.examples === "string" ? JSON.parse(p.examples) : (p.examples || []),
      codeTemplates: typeof p.code_templates === "string" ? JSON.parse(p.code_templates) : (p.code_templates || {}),
      testCases: typeof p.test_cases === "string" ? JSON.parse(p.test_cases) : (p.test_cases || []),
      editorial: p.editorial || "",
      videoUrl: p.video_url || "",
      hints: p.hints || []
    }));

    return NextResponse.json({ success: true, problems });
  } catch (error: any) {
    console.error("Failed to fetch/seed problems:", error);
    return NextResponse.json(
      { error: error.message || "Failed to load problems from database." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized. Missing user ID header." }, { status: 401 });
    }

    // Validate if user exists and is admin
    const users = await sql`SELECT role FROM users WHERE id = ${userId}`;
    if (users.length === 0 || users[0].role !== "admin") {
      return NextResponse.json({ error: "Forbidden. Admin access required." }, { status: 403 });
    }

    const body = await request.json();
    const {
      title,
      difficulty,
      tags,
      companies,
      description,
      constraints,
      examples,
      codeTemplates,
      testCases,
      editorial,
      videoUrl,
      hints
    } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required." }, { status: 400 });
    }

    const titleSlug = sanitizeSlug(title);
    const id = titleSlug; // Use slug as the unique ID

    // Pre-populate clean arrays/objects
    const cleanTags = Array.isArray(tags) ? tags : (tags ? tags.split(",").map((t: string) => t.trim()) : []);
    const cleanCompanies = Array.isArray(companies) ? companies : (companies ? companies.split(",").map((c: string) => c.trim()) : []);
    const cleanConstraints = Array.isArray(constraints) ? constraints : (constraints ? constraints.split(",").map((c: string) => c.trim()) : []);
    const cleanHints = Array.isArray(hints) ? hints : (hints ? hints.split(",").map((h: string) => h.trim()) : []);

    const defaultCodeTemplates = codeTemplates || {
      python: `def solve():\n    # Write your Python code here\n    pass`,
      javascript: `function solve() {\n    // Write your JavaScript code here\n}`,
      typescript: `function solve() {\n    // Write your TypeScript code here\n}`,
      cpp: `class Solution {\npublic:\n    void solve() {\n        \n    }\n};`,
      java: `class Solution {\n    public void solve() {\n        \n    }\n}`
    };

    const defaultExamples = examples || [
      { input: "No standard input example", output: "No standard output example", explanation: "Created by Admin" }
    ];

    const defaultTestCases = testCases || [
      { input: "1", expectedOutput: "1" }
    ];

    // Insert new coding challenge
    await sql`
      INSERT INTO problems (
        id, title, title_slug, difficulty, acceptance_rate, tags, companies,
        description, constraints, examples, code_templates, test_cases,
        editorial, video_url, hints
      ) VALUES (
        ${id},
        ${title.trim()},
        ${titleSlug},
        ${difficulty || "Easy"},
        0,
        ${cleanTags},
        ${cleanCompanies},
        ${description.trim()},
        ${cleanConstraints},
        ${JSON.stringify(defaultExamples)},
        ${JSON.stringify(defaultCodeTemplates)},
        ${JSON.stringify(defaultTestCases)},
        ${editorial || ""},
        ${videoUrl || ""},
        ${cleanHints}
      )
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        difficulty = EXCLUDED.difficulty,
        tags = EXCLUDED.tags,
        companies = EXCLUDED.companies,
        description = EXCLUDED.description,
        constraints = EXCLUDED.constraints,
        examples = EXCLUDED.examples,
        code_templates = EXCLUDED.code_templates,
        test_cases = EXCLUDED.test_cases,
        editorial = EXCLUDED.editorial,
        video_url = EXCLUDED.video_url,
        hints = EXCLUDED.hints
    `;

    return NextResponse.json({ success: true, message: `Coding challenge "${title}" created/updated successfully!`, id });
  } catch (error: any) {
    console.error("Failed to insert coding challenge:", error);
    return NextResponse.json({ error: error.message || "Failed to save coding challenge." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const userId = request.headers.get("x-user-id");
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized. Missing user ID header." }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: "Missing problem ID parameter." }, { status: 400 });
    }

    // Validate if user exists and is admin
    const users = await sql`SELECT role FROM users WHERE id = ${userId}`;
    if (users.length === 0 || users[0].role !== "admin") {
      return NextResponse.json({ error: "Forbidden. Admin access required." }, { status: 403 });
    }

    // Delete the coding challenge
    await sql`DELETE FROM problems WHERE id = ${id}`;

    return NextResponse.json({ success: true, message: `Coding challenge "${id}" deleted successfully!` });
  } catch (error: any) {
    console.error("Failed to delete coding challenge:", error);
    return NextResponse.json({ error: error.message || "Failed to delete coding challenge." }, { status: 500 });
  }
}
