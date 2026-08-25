import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import * as fs from "fs";
import * as path from "path";

let databaseUrl = process.env.DATABASE_URL;

// In development, prioritize DATABASE_URL from .env file
if (process.env.NODE_ENV !== "production") {
  try {
    const envPath = path.join(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, "utf-8");
      const match = envContent.match(/^\s*DATABASE_URL\s*=\s*(.*)$/m);
      if (match) {
        let val = match[1].trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.substring(1, val.length - 1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.substring(1, val.length - 1);
        if (val) databaseUrl = val;
      }
    }
  } catch (err) {
    console.error("Failed to load DATABASE_URL from .env:", err);
  }
}

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is not set. Please define it in your .env file or environment variables."
  );
}

export const sql: NeonQueryFunction<false, false> = neon(databaseUrl);
