import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized. Missing user ID header." }, { status: 401 });
    }

    // Validate if caller is admin
    const caller = await sql`SELECT role FROM users WHERE id = ${userId}`;
    if (caller.length === 0 || caller[0].role !== "admin") {
      return NextResponse.json({ error: "Forbidden. Admin access required." }, { status: 403 });
    }

    // Fetch all users
    const dbUsers = await sql`SELECT id, name, email, role, is_premium FROM users ORDER BY name ASC`;

    const users = dbUsers.map((u: any) => ({
      id: u.id,
      name: u.name || "Unnamed User",
      email: u.email,
      role: u.role || "student",
      premium: u.is_premium ? "Premium" : "Free"
    }));

    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    console.error("Failed to fetch database users:", error);
    return NextResponse.json({ error: error.message || "Failed to load directory." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    // Validate if caller is admin
    const caller = await sql`SELECT role FROM users WHERE id = ${userId}`;
    if (caller.length === 0 || caller[0].role !== "admin") {
      return NextResponse.json({ error: "Forbidden." }, { status: 403 });
    }

    const { targetUserId, isPremium } = await request.json();

    if (!targetUserId) {
      return NextResponse.json({ error: "Target user ID is required." }, { status: 400 });
    }

    // Toggle premium status
    await sql`
      UPDATE users 
      SET is_premium = ${isPremium} 
      WHERE id = ${targetUserId}
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to update user access tier:", error);
    return NextResponse.json({ error: error.message || "Failed to update access tier." }, { status: 500 });
  }
}
