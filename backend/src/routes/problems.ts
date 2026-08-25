import { Router, Request, Response } from "express";
import { sql } from "../lib/db";
import { problems as staticProblems } from "../data/problems";

const router = Router();

// ─── Helper: sanitize slug ────────────────────────────────────────────────
function sanitizeSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-");
}

// ─── GET /api/problems ────────────────────────────────────────────────────
router.get("/", async (_req: Request, res: Response) => {
  try {
    let dbProblems = await sql`SELECT * FROM problems ORDER BY id ASC`;

    // Auto-seed if empty
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
      dbProblems = await sql`SELECT * FROM problems ORDER BY id ASC`;
    }

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
      hints: p.hints || [],
    }));

    res.json({ success: true, problems });
  } catch (error: any) {
    console.error("Failed to fetch/seed problems:", error);
    res.status(500).json({ error: error.message || "Failed to load problems from database." });
  }
});

// ─── POST /api/problems ───────────────────────────────────────────────────
router.post("/", async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"] as string;

    if (!userId) {
      res.status(401).json({ error: "Unauthorized. Missing user ID header." });
      return;
    }

    const users = await sql`SELECT role FROM users WHERE id = ${userId}`;
    if (users.length === 0 || users[0].role !== "admin") {
      res.status(403).json({ error: "Forbidden. Admin access required." });
      return;
    }

    const {
      title, difficulty, tags, companies, description,
      constraints, examples, codeTemplates, testCases, editorial, videoUrl, hints,
    } = req.body;

    if (!title || !description) {
      res.status(400).json({ error: "Title and description are required." });
      return;
    }

    const titleSlug = sanitizeSlug(title);
    const id = titleSlug;

    const cleanTags = Array.isArray(tags) ? tags : (tags ? tags.split(",").map((t: string) => t.trim()) : []);
    const cleanCompanies = Array.isArray(companies) ? companies : (companies ? companies.split(",").map((c: string) => c.trim()) : []);
    const cleanConstraints = Array.isArray(constraints) ? constraints : (constraints ? constraints.split(",").map((c: string) => c.trim()) : []);
    const cleanHints = Array.isArray(hints) ? hints : (hints ? hints.split(",").map((h: string) => h.trim()) : []);

    const defaultCodeTemplates = codeTemplates || {
      python: `def solve():\n    # Write your Python code here\n    pass`,
      javascript: `function solve() {\n    // Write your JavaScript code here\n}`,
      typescript: `function solve() {\n    // Write your TypeScript code here\n}`,
      cpp: `class Solution {\npublic:\n    void solve() {\n        \n    }\n};`,
      java: `class Solution {\n    public void solve() {\n        \n    }\n}`,
    };

    const defaultExamples = examples || [
      { input: "No standard input example", output: "No standard output example", explanation: "Created by Admin" },
    ];

    const defaultTestCases = testCases || [{ input: "1", expectedOutput: "1" }];

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

    res.json({ success: true, message: `Coding challenge "${title}" created/updated successfully!`, id });
  } catch (error: any) {
    console.error("Failed to insert coding challenge:", error);
    res.status(500).json({ error: error.message || "Failed to save coding challenge." });
  }
});

// ─── DELETE /api/problems ─────────────────────────────────────────────────
router.delete("/", async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"] as string;
    const id = req.query.id as string;

    if (!userId) {
      res.status(401).json({ error: "Unauthorized. Missing user ID header." });
      return;
    }

    if (!id) {
      res.status(400).json({ error: "Missing problem ID parameter." });
      return;
    }

    const users = await sql`SELECT role FROM users WHERE id = ${userId}`;
    if (users.length === 0 || users[0].role !== "admin") {
      res.status(403).json({ error: "Forbidden. Admin access required." });
      return;
    }

    await sql`DELETE FROM problems WHERE id = ${id}`;

    res.json({ success: true, message: `Coding challenge "${id}" deleted successfully!` });
  } catch (error: any) {
    console.error("Failed to delete coding challenge:", error);
    res.status(500).json({ error: error.message || "Failed to delete coding challenge." });
  }
});

export default router;
