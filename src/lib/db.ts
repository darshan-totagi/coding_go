import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl && process.env.NODE_ENV === "production") {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local or production server settings");
}

// In development, we can fallback to an empty string so typechecks/compiles succeed without breaking startup
export const sql = neon(databaseUrl || "postgresql://placeholder:placeholder@localhost:5432/placeholder");
