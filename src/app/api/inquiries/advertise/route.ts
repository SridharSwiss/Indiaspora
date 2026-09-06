import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, website, ad_type, target_audience, duration, budget, message } = body;

    if (!name || !email || !ad_type) {
      return NextResponse.json({ error: "name, email and ad_type are required" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { error } = await supabase.from("ad_inquiries").insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      company: company?.trim() || null,
      website: website?.trim() || null,
      ad_type: ad_type.trim(),
      target_audience: target_audience?.trim() || null,
      duration: duration?.trim() || null,
      budget: budget?.trim() || null,
      message: message?.trim() || null,
      status: "new",
    });

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("ad inquiry error:", err);
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
    .from("ad_inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ inquiries: data });
}
