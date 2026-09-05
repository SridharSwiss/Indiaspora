import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import Anthropic from "@anthropic-ai/sdk";

const CATEGORY_COLORS: Record<string, string> = {
  Cultural:   "bg-yellow-500",
  Festival:   "bg-orange-500",
  Networking: "bg-blue-500",
  Business:   "bg-indigo-500",
  Food:       "bg-green-500",
  Arts:       "bg-purple-500",
  Sports:     "bg-red-500",
  Spiritual:  "bg-pink-500",
  Education:  "bg-teal-500",
  Other:      "bg-gray-500",
};

// ── GET — list all events for admin ──────────────────────────────────────────
export async function GET(req: NextRequest) {
  const supabase = createAdminClient();
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") ?? "all";

  let query = supabase
    .from("events")
    .select("id,title,date,location,category,description,organiser,url,image_url,color,event_status,ai_summary,submitted_by,created_at,approved_at")
    .order("created_at", { ascending: false });

  if (status !== "all") query = query.eq("event_status", status);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  return NextResponse.json({ data: data ?? [] });
}

// ── POST — create event with AI enrichment ──────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { rawText, imageUrl, submittedBy } = body;

    if (!rawText?.trim()) {
      return NextResponse.json({ error: "Event description is required" }, { status: 400 });
    }

    // Build AI prompt content
    const userContent: Anthropic.MessageParam["content"] = [];

    if (imageUrl) {
      userContent.push({
        type: "image",
        source: { type: "url", url: imageUrl },
      });
    }

    userContent.push({
      type: "text",
      text: `You are helping curate events for Indiaspora.ch — a community platform for Indians living in Switzerland.

Analyse this event information and extract/enrich it into a structured JSON object. If the image is provided, use it to better understand the event. Fill in reasonable defaults for Switzerland where information is missing (e.g. if no city mentioned but event seems local, use "Switzerland").

INPUT:
${rawText}

Return ONLY a valid JSON object with these exact keys (no markdown, no explanation):
{
  "title": "Full event title",
  "date": "Human-readable date like '15 Oct 2026' or '15–17 Oct 2026' for multi-day",
  "location": "Venue, City, Switzerland",
  "category": "One of: Cultural, Festival, Networking, Business, Food, Arts, Sports, Spiritual, Education, Other",
  "description": "2–3 sentences describing the event for community members. Engaging and informative.",
  "organiser": "Organisation or person name",
  "url": "Official event URL if mentioned, else empty string",
  "ai_summary": "One sentence summary highlighting why this event is valuable for the Swiss-Indian community"
}`,
    });

    const client = new Anthropic();
    const aiResponse = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 1024,
      messages: [{ role: "user", content: userContent }],
    });

    const textBlock = aiResponse.content.find((b): b is Anthropic.TextBlock => b.type === "text");
    if (!textBlock) throw new Error("No text response from AI");

    let parsed: Record<string, string>;
    try {
      // Strip possible markdown code fences
      const clean = textBlock.text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "").trim();
      parsed = JSON.parse(clean);
    } catch {
      return NextResponse.json({ error: "AI returned invalid JSON", raw: textBlock.text }, { status: 422 });
    }

    const category = parsed.category ?? "Other";
    const color = CATEGORY_COLORS[category] ?? "bg-gray-500";

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("events")
      .insert({
        title:        parsed.title ?? "Untitled Event",
        date:         parsed.date ?? "",
        location:     parsed.location ?? "Switzerland",
        category,
        color,
        description:  parsed.description ?? "",
        organiser:    parsed.organiser ?? "",
        url:          parsed.url ?? "",
        image_url:    imageUrl ?? "",
        event_status: "pending",
        ai_summary:   parsed.ai_summary ?? "",
        raw_input:    rawText,
        submitted_by: submittedBy ?? null,
      })
      .select("*")
      .single();

    if (error) throw error;
    return NextResponse.json({ ok: true, event: data });
  } catch (err) {
    console.error("Admin event create error:", err);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}

// ── PATCH — approve or reject ────────────────────────────────────────────────
export async function PATCH(req: NextRequest) {
  try {
    const { id, action } = await req.json();
    if (!id || !["approve", "reject"].includes(action)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { error } = await supabase
      .from("events")
      .update({
        event_status: action === "approve" ? "approved" : "rejected",
        approved_at:  action === "approve" ? new Date().toISOString() : null,
        // Keep legacy `active` column in sync if it exists
        active:       action === "approve",
      })
      .eq("id", id);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Admin event update error:", err);
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}
