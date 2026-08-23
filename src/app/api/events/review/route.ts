import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

const CATEGORY_COLORS: Record<string, string> = {
  Festival: "bg-orange-500",
  Cultural: "bg-purple-500",
  Networking: "bg-blue-500",
  Food: "bg-green-500",
  Arts: "bg-teal-500",
  Sports: "bg-cyan-500",
  Religious: "bg-rose-500",
  Other: "bg-gray-500",
};

async function requireAdmin() {
  const client = await createClient();
  const { data: { user } } = await client.auth.getUser();
  if (!user || user.email !== process.env.ADMIN_EMAIL) return null;
  return user;
}

// GET — list pending submissions
export async function GET(req: NextRequest) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("event_submissions")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ submissions: data ?? [] });
}

// POST — approve or reject a submission
export async function POST(req: NextRequest) {
  const user = await requireAdmin();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, action } = await req.json();
  if (!id || !["approve", "reject"].includes(action)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const supabase = createAdminClient();

  // Get the submission
  const { data: sub, error: fetchErr } = await supabase
    .from("event_submissions").select("*").eq("id", id).single();
  if (fetchErr || !sub) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Update status
  await supabase.from("event_submissions").update({
    status: action === "approve" ? "approved" : "rejected",
    review_notes: action === "approve" ? "Approved by admin" : "Rejected by admin",
    reviewed_at: new Date().toISOString(),
  }).eq("id", id);

  // If approved, add to live events
  if (action === "approve") {
    await supabase.from("events").insert({
      title: sub.title,
      organiser: sub.organiser,
      date: sub.date,
      location: sub.location,
      category: sub.category,
      description: sub.description,
      color: CATEGORY_COLORS[sub.category] ?? "bg-violet-500",
      url: sub.url ?? null,
      image: sub.image_url ?? null,
      source: "submission",
      submission_id: sub.id,
      active: true,
    });
  }

  return NextResponse.json({ ok: true });
}
