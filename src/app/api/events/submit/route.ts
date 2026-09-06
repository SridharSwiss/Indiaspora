import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

function formatDate(raw: string): string {
  // If ISO date from calendar picker (YYYY-MM-DD), convert to "15 Nov 2026"
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) {
    const d = new Date(+iso[1], +iso[2] - 1, +iso[3]);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  return raw.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, organiser, date, location, category, description, url, contact_email, contact_name, image_url } = body;

    if (!title || !organiser || !date || !location || !category || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase.from("event_submissions").insert({
      title: title.trim(),
      organiser: organiser.trim(),
      date: formatDate(date),
      location: location.trim(),
      category,
      description: description.trim(),
      url: url?.trim() || null,
      contact_email: contact_email?.trim() || null,
      contact_name: contact_name?.trim() || null,
      image_url: image_url?.trim() || null,
      status: "pending",
    }).select("id").single();

    if (error) throw error;
    return NextResponse.json({ ok: true, id: data.id });
  } catch (err) {
    console.error("Event submit error:", err);
    return NextResponse.json({ error: "Failed to submit event" }, { status: 500 });
  }
}
