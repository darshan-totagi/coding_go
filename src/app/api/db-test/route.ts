import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const result = await sql`SELECT NOW();`;
    return NextResponse.json({
      status: "connected",
      time: result[0].now,
      message: "Neon serverless database connected successfully!"
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to connect to Neon database. Check your DATABASE_URL connection string inside .env.local.",
        error: error.message
      },
      { status: 500 }
    );
  }
}
