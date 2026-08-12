import { neon } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";

let databaseUrl = process.env.DATABASE_URL;

// In development, prioritize DATABASE_URL from .env.local over system environment variables
if (process.env.NODE_ENV === "development") {
  try {
    const envLocalPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envLocalPath)) {
      const envContent = fs.readFileSync(envLocalPath, "utf-8");
      const match = envContent.match(/^\s*DATABASE_URL\s*=\s*(.*)$/m);
      if (match) {
        let val = match[1].trim();
        if (val.startsWith('"') && val.endsWith('"')) {
          val = val.substring(1, val.length - 1);
        }
        if (val.startsWith("'") && val.endsWith("'")) {
          val = val.substring(1, val.length - 1);
        }
        if (val) {
          databaseUrl = val;
        }
      }
    }
  } catch (err) {
    console.error("Failed to load DATABASE_URL from .env.local:", err);
  }
}

if (!databaseUrl && process.env.NODE_ENV === "production") {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local or production server settings");
}

// In development, we can fallback to an empty string so typechecks/compiles succeed without breaking startup
export const sql = neon(databaseUrl || "postgresql://placeholder:placeholder@localhost:5432/placeholder");

