import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .update({ active: false, unsubscribed_at: new Date().toISOString() })
      .eq("email", email.trim().toLowerCase());

    if (error) {
      console.error("Unsubscribe error:", error);
      return NextResponse.json({ error: "Failed to unsubscribe" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
