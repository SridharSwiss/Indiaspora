/**
 * Event review script — run manually: node scripts/review-events.mjs
 *
 * Reads pending submissions from Supabase, applies basic legitimacy checks,
 * and promotes approved events to the live events table.
 *
 * Requires env vars: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * Load them from .env.local if running locally.
 */

import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Try .env.local from project root (one level up from scripts/) and cwd
const envCandidates = [
  resolve(__dirname, "../.env.local"),
  resolve(process.cwd(), ".env.local"),
];
for (const envFile of envCandidates) {
  console.log("Trying:", envFile, "→", existsSync(envFile) ? "FOUND" : "not found");
  if (existsSync(envFile)) {
    const lines = readFileSync(envFile, "utf8")
      .replace(/^﻿/, "")   // strip BOM
      .replace(/\r/g, "")       // strip Windows \r
      .split("\n");
    for (const line of lines) {
      const m = line.match(/^([^#=\s][^=]*)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^['"]|['"]$/g, "");
    }
    break;
  }
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const CATEGORY_COLORS = {
  Festival: "bg-orange-500",
  Cultural: "bg-purple-500",
  Networking: "bg-blue-500",
  Food: "bg-green-500",
  Arts: "bg-teal-500",
  Sports: "bg-cyan-500",
  Religious: "bg-rose-500",
  Other: "bg-gray-500",
};

function isLegitimate(ev) {
  const issues = [];
  const now = new Date();

  // Must have core fields
  if (!ev.title?.trim()) issues.push("missing title");
  if (!ev.organiser?.trim()) issues.push("missing organiser");
  if (!ev.date?.trim()) issues.push("missing date");
  if (!ev.location?.trim()) issues.push("missing location");
  if (!ev.description || ev.description.trim().length < 20) issues.push("description too short");

  // Description should not look like spam
  const spamWords = ["buy now", "click here", "earn money", "free gift", "limited offer", "casino", "lottery", "bitcoin", "crypto investment"];
  const descLower = (ev.description ?? "").toLowerCase();
  for (const word of spamWords) {
    if (descLower.includes(word)) issues.push(`spam keyword: "${word}"`);
  }

  // Location should mention a Swiss place or be a plausible venue
  const swissPlaces = ["zurich", "zürich", "geneva", "genève", "basel", "bern", "lausanne", "berne", "lucerne", "luzern", "winterthur", "switzerland", "schweiz", "suisse", "svizzera", "zug", "thun", "langnau", "baar", "aarau", "st. gallen", "gallen"];
  const locationLower = (ev.location ?? "").toLowerCase();
  const hasSwissLocation = swissPlaces.some((p) => locationLower.includes(p));
  if (!hasSwissLocation) issues.push("location doesn't appear to be in Switzerland");

  // URL check — if provided, must be http/https
  if (ev.url && !/^https?:\/\//i.test(ev.url)) issues.push("invalid URL format");

  // Image URL check
  if (ev.image_url && !/^https?:\/\//i.test(ev.image_url)) issues.push("invalid image URL");

  return { ok: issues.length === 0, issues };
}

async function main() {
  console.log("🔍 Fetching pending event submissions…\n");

  const { data: pending, error } = await supabase
    .from("event_submissions")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("❌ Supabase error:", error.message);
    process.exit(1);
  }

  if (!pending || pending.length === 0) {
    console.log("✅ No pending submissions — nothing to review.");
    return;
  }

  console.log(`📋 ${pending.length} pending submission(s):\n`);

  let approved = 0;
  let rejected = 0;

  for (const ev of pending) {
    const { ok, issues } = isLegitimate(ev);
    const verdict = ok ? "✅ APPROVED" : "❌ REJECTED";
    const reason = ok ? "Passed all legitimacy checks" : `Issues: ${issues.join("; ")}`;

    console.log(`${verdict}  "${ev.title}" by ${ev.organiser}`);
    console.log(`   📅 ${ev.date}  📍 ${ev.location}  🏷️  ${ev.category}`);
    if (!ok) console.log(`   ⚠️  ${reason}`);
    console.log();

    // Update submission status
    await supabase.from("event_submissions").update({
      status: ok ? "approved" : "rejected",
      review_notes: reason,
      reviewed_at: new Date().toISOString(),
    }).eq("id", ev.id);

    if (ok) {
      // Insert into live events table
      await supabase.from("events").insert({
        title: ev.title,
        organiser: ev.organiser,
        date: ev.date,
        location: ev.location,
        category: ev.category,
        description: ev.description,
        color: CATEGORY_COLORS[ev.category] ?? "bg-violet-500",
        url: ev.url ?? null,
        image: ev.image_url ?? null,
        source: "submission",
        submission_id: ev.id,
        active: true,
      });
      approved++;
    } else {
      rejected++;
    }
  }

  console.log(`\n📊 Done — ${approved} approved, ${rejected} rejected out of ${pending.length} submissions.`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
