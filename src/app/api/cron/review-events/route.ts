/**
 * Cron endpoint — runs twice daily via Vercel Cron (see vercel.json).
 * Fetches pending event submissions, asks Claude to validate each one,
 * and auto-approves or rejects based on the verdict.
 *
 * Required env vars:
 *   CRON_SECRET          — must match Authorization header sent by Vercel Cron
 *   ANTHROPIC_API_KEY    — for Claude validation calls
 *   SUPABASE_SERVICE_ROLE_KEY + NEXT_PUBLIC_SUPABASE_URL (already set)
 */

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

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

async function validateWithClaude(event: {
  title: string;
  organiser: string;
  date: string;
  location: string;
  category: string;
  description: string;
  url?: string | null;
}): Promise<{ approved: boolean; reason: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // No API key — auto-approve with a note so admins can still manually review
    return { approved: true, reason: "Auto-approved (no ANTHROPIC_API_KEY set — manual review recommended)" };
  }

  const prompt = `You are a community event moderator for IndiaSwiss.ch, a platform for the Indian community in Switzerland.

Evaluate this submitted event and decide if it should be approved or rejected.

APPROVE if:
- It is a genuine community event (cultural, religious, social, business, educational)
- The event appears to be real and targeted at the Indian community in Switzerland
- The organiser sounds like a legitimate association, community group, or business
- The location is plausible for Switzerland
- The date is in the future (today is ${new Date().toISOString().split("T")[0]})

REJECT if:
- It contains spam, advertising, or promotional content unrelated to community events
- It appears to be a fake or fabricated event
- The date has already passed
- It contains hateful, divisive, or inappropriate content
- The URL (if provided) points to a suspicious or unrelated domain

Event details:
- Title: ${event.title}
- Organiser: ${event.organiser}
- Date: ${event.date}
- Location: ${event.location}
- Category: ${event.category}
- Description: ${event.description}
- Website: ${event.url || "none provided"}

Respond with ONLY valid JSON in this exact format:
{"approved": true, "reason": "Brief reason for approval"}
or
{"approved": false, "reason": "Brief reason for rejection"}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    console.error("Claude API error:", res.status, await res.text());
    return { approved: true, reason: "Auto-approved (Claude API unavailable — manual review recommended)" };
  }

  const json = await res.json();
  const text: string = json.content?.[0]?.text ?? "";
  try {
    const parsed = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] ?? "{}");
    return {
      approved: Boolean(parsed.approved),
      reason: String(parsed.reason ?? "No reason provided"),
    };
  } catch {
    return { approved: false, reason: `Could not parse Claude response: ${text}` };
  }
}

export async function GET(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();

  // Fetch all pending submissions
  const { data: pending, error } = await supabase
    .from("event_submissions")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(20);

  if (error) {
    console.error("Fetch pending error:", error);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }

  if (!pending || pending.length === 0) {
    return NextResponse.json({ processed: 0, message: "No pending submissions" });
  }

  const results: Array<{ id: string; title: string; verdict: string; reason: string }> = [];

  for (const submission of pending) {
    try {
      const { approved, reason } = await validateWithClaude(submission);

      // Update submission status
      await supabase.from("event_submissions").update({
        status: approved ? "approved" : "rejected",
        review_notes: reason,
        reviewed_at: new Date().toISOString(),
      }).eq("id", submission.id);

      // If approved, insert into the live events table
      if (approved) {
        await supabase.from("events").insert({
          title: submission.title,
          organiser: submission.organiser,
          date: submission.date,
          location: submission.location,
          category: submission.category,
          description: submission.description,
          color: CATEGORY_COLORS[submission.category] ?? "bg-violet-500",
          url: submission.url ?? null,
          image: submission.image_url ?? null,
          source: "submission",
          submission_id: submission.id,
          active: true,
        });
      }

      results.push({ id: submission.id, title: submission.title, verdict: approved ? "approved" : "rejected", reason });
    } catch (err) {
      console.error(`Error processing submission ${submission.id}:`, err);
      results.push({ id: submission.id, title: submission.title, verdict: "error", reason: String(err) });
    }
  }

  return NextResponse.json({ processed: results.length, results });
}
