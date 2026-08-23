import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

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
      date: date.trim(),
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
