/**
 * Event research script — Step 1 of the daily routine.
 *
 * Searches the web for upcoming Indian community events in Switzerland
 * from known organisations listed on indiaspora.ch, then proposes additions
 * to src/lib/data.ts (UPCOMING_EVENTS array) and the events page.
 *
 * Uses the Anthropic Claude API with web_search tool.
 * Requires env var: ANTHROPIC_API_KEY
 * Load from .env.local if running locally.
 *
 * Usage: node scripts/research-events.mjs
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, existsSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local
const envCandidates = [
  resolve(__dirname, "../.env.local"),
  resolve(process.cwd(), ".env.local"),
];
for (const envFile of envCandidates) {
  if (existsSync(envFile)) {
    const lines = readFileSync(envFile, "utf8")
      .replace(/^﻿/, "")
      .replace(/\r/g, "")
      .split("\n");
    for (const line of lines) {
      const m = line.match(/^([^#=\s][^=]*)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^['"]|['"]$/g, "");
    }
    break;
  }
}

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("❌ Missing ANTHROPIC_API_KEY in .env.local");
  process.exit(1);
}

// ── All known community entities to research ────────────────────────────────
const ENTITIES = [
  { name: "IAGZ",         query: "IAGZ Indian Association Greater Zurich upcoming events 2025 2026 site:iagz.ch OR site:instagram.com/iagzurich" },
  { name: "TASC",         query: "TASC Tamil Association Switzerland upcoming events 2025 2026 site:tasc.ch" },
  { name: "TeluguSwiss",  query: "TeluguSwiss Association upcoming events 2025 2026 site:teluguswiss.ch" },
  { name: "SwissPuja",    query: "SwissPuja Durga Puja Switzerland 2025 2026 upcoming events site:swisspuja.org" },
  { name: "IAG Geneva",   query: "Indian Association Geneva upcoming events 2025 2026 site:indianassociationgeneva.com" },
  { name: "SICC",         query: "Swiss Indian Chamber of Commerce upcoming events networking 2025 2026 site:sicc.ch" },
  { name: "Embassy Berne",query: "Embassy of India Berne upcoming events Independence Day Republic Day 2025 2026 site:indembassybern.gov.in" },
  { name: "ISKCON Zurich",query: "ISKCON Zurich upcoming events Rath Yatra Janmashtami 2025 2026" },
  { name: "InBa Basel",   query: "InBa India Basel Festival 2025 2026 upcoming events Theater Basel" },
  { name: "ISSC",         query: "ISSC Indian Sports Social Club Switzerland upcoming events 2025 2026" },
  { name: "Keliswiss",    query: "Keliswiss Kalamela arts festival Switzerland upcoming 2025 2026 site:keliswiss.org" },
  { name: "SMA Basel",    query: "SMA Basel Onam Ponnonam celebration 2025 2026 site:smabasel.ch" },
  { name: "YUVA EPFL",    query: "YUVA EPFL Indian student association Diwali events 2025 2026" },
  { name: "General",      query: "Indian community events Switzerland Zurich Geneva Basel Bern Diwali Garba Holi Navratri 2025 2026" },
];

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const TODAY = new Date().toISOString().split("T")[0];

async function researchAllEntities() {
  console.log(`\n🔎 Researching Indian community events in Switzerland — ${TODAY}\n`);
  console.log("Sources: IAGZ, TASC, TeluguSwiss, SwissPuja, IAG, SICC, Embassy, ISKCON, InBa, ISSC, Keliswiss, SMA Basel, YUVA EPFL + general search\n");
  console.log("─".repeat(70));

  const systemPrompt = `You are a research assistant helping maintain an Indian community events calendar for Switzerland (indiaspora.ch).

Today's date: ${TODAY}

Your job: Search the web for UPCOMING Indian community events in Switzerland from the provided queries.

Rules:
- Only include events that are UPCOMING (after today ${TODAY})
- Only include events in Switzerland
- No personal social media account links — only official organisation websites or Google Maps
- No fabricated events — only report what you actually find
- For each event found, output a structured JSON block
- If nothing concrete is found for a query, say so briefly and move on

For each event found, output exactly this JSON format (one per code block):
\`\`\`json
{
  "title": "Event name",
  "date": "Date string e.g. 15 August 2026",
  "location": "Venue, City",
  "category": "Festival|Cultural|Networking|Food|Arts|Sports|Religious|Other",
  "description": "1-2 sentence description",
  "organiser": "Organisation name",
  "url": "https://official-url.com or null",
  "color": "bg-orange-500"
}
\`\`\`

Color mapping: Festival→bg-orange-500, Cultural→bg-purple-500, Networking→bg-blue-500, Food→bg-green-500, Arts→bg-teal-500, Sports→bg-cyan-500, Religious→bg-rose-500, Other→bg-gray-500`;

  const userMessage = `Search for upcoming Indian community events in Switzerland from these organisation queries. Run a search for each one and report any concrete upcoming events you find:\n\n${ENTITIES.map((e, i) => `${i + 1}. ${e.name}: ${e.query}`).join("\n")}`;

  let response;
  try {
    response = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 8000,
      tools: [{ type: "web_search_20250305", name: "web_search" }],
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });
  } catch (err) {
    // web_search tool may not be available on all plans — fall back gracefully
    if (err.status === 400 && err.message?.includes("web_search")) {
      console.error("⚠️  Web search tool not available on this API key/plan.");
      console.error("   Add ANTHROPIC_API_KEY with web search access to .env.local");
      process.exit(1);
    }
    throw err;
  }

  // Extract text from response
  const textBlocks = response.content.filter((b) => b.type === "text");
  const fullText = textBlocks.map((b) => b.text).join("\n");

  console.log(fullText);

  // Parse JSON event blocks from the response
  const jsonMatches = [...fullText.matchAll(/```json\s*([\s\S]*?)```/g)];
  const events = [];
  for (const match of jsonMatches) {
    try {
      const ev = JSON.parse(match[1].trim());
      if (ev.title && ev.date && ev.location) events.push(ev);
    } catch {
      // skip malformed blocks
    }
  }

  if (events.length === 0) {
    console.log("\n📭 No new structured events found today.");
    return;
  }

  console.log("\n" + "─".repeat(70));
  console.log(`\n✅ Found ${events.length} upcoming event(s). Review and add to src/lib/data.ts if not already listed.\n`);

  // Write a review file for easy copy-paste
  const outPath = resolve(__dirname, "../.events-research-output.json");
  writeFileSync(outPath, JSON.stringify({ date: TODAY, events }, null, 2));
  console.log(`📄 Saved to .events-research-output.json for review\n`);

  // Print copy-paste ready entries
  console.log("── Copy-paste ready (for UPCOMING_EVENTS in src/lib/data.ts) ──\n");
  for (const ev of events) {
    console.log(`  {`);
    console.log(`    title: ${JSON.stringify(ev.title)},`);
    console.log(`    date: ${JSON.stringify(ev.date)},`);
    console.log(`    location: ${JSON.stringify(ev.location)},`);
    console.log(`    category: ${JSON.stringify(ev.category)},`);
    console.log(`    description: ${JSON.stringify(ev.description)},`);
    console.log(`    organiser: ${JSON.stringify(ev.organiser)},`);
    console.log(`    color: ${JSON.stringify(ev.color ?? "bg-violet-500")},`);
    console.log(`    url: ${JSON.stringify(ev.url ?? "")},`);
    console.log(`  },`);
    console.log();
  }
}

researchAllEntities().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
