import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, location, query, topic } = body;

    if (!name || !email || !query) {
      return NextResponse.json({ error: "name, email and query are required" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { error } = await supabase.from("advice_inquiries").insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      location: location?.trim() || null,
      query: query.trim(),
      topic: topic?.trim() || null,
      status: "new",
    });

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("advice inquiry error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("x-admin-key");
  if (authHeader !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("advice_inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ inquiries: data });
}
