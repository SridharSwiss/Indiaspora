import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const CONSENT_TEXT = "I agree to receive the weekly Indiaspora newsletter. I can unsubscribe at any time.";

export async function POST(req: NextRequest) {
  try {
    const { email, consent } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: "Consent required" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const normalised = email.trim().toLowerCase();

    // Check if already exists (may be unsubscribed)
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, status")
      .eq("email", normalised)
      .maybeSingle();

    if (existing) {
      if (existing.status === "active") {
        return NextResponse.json({ ok: true, already: true });
      }
      // Re-activate unsubscribed or any other non-active status
      const { error: upErr } = await supabase
        .from("newsletter_subscribers")
        .update({
          status: "active",
          consent: true,
          consent_text: CONSENT_TEXT,
          subscribed_at: new Date().toISOString(),
        })
        .eq("id", existing.id);
      if (upErr) {
        console.error("Newsletter reactivate error:", upErr);
        return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
      }
      return NextResponse.json({ ok: true, reactivated: true });
    }

    const { error } = await supabase.from("newsletter_subscribers").insert({
      email: normalised,
      consent: true,
      consent_text: CONSENT_TEXT,
      source: "banner",
    });

    if (error) {
      console.error("Newsletter insert error:", error);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  // Admin-only: list subscribers
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .order("subscribed_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data: data ?? [], count: data?.length ?? 0 });
}
