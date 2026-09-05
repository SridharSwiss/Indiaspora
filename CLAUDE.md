# Indiaspora — Claude Instructions

## Daily Routine

When the user says **"execute daily routine"**, run these steps IN ORDER:

### Step 1 — Research new events (run first)
Search the web for upcoming Indian community events in Switzerland from all known entities:
IAGZ, TASC, TeluguSwiss, SwissPuja, IAG Geneva, SICC, Embassy of India Berne, ISKCON Zurich,
InBa Basel, ISSC, Keliswiss, SMA Basel, YUVA EPFL, and a general Swiss-Indian events search.

**Local script (preferred — uses Claude API with web search):**
```powershell
cd ~/Indiaspora; node scripts/research-events.mjs
```
Requires `ANTHROPIC_API_KEY` in `.env.local`.

**If script unavailable:** Do the web research directly in this chat session using WebSearch/WebFetch,
then propose structured event entries for `src/lib/data.ts` (UPCOMING_EVENTS array).

### Step 2 — Review submitted events
Process user-submitted events from the Supabase database:
```powershell
cd ~/Indiaspora; node scripts/review-events.mjs
```
Requires `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`.

### Step 3 — Apply approved research findings
If Step 1 found new events not already in `src/lib/data.ts`, add them to the `UPCOMING_EVENTS`
array, commit, and push to `main`.

---

## Permanent Constraints

- **Never reference swissdesi.ch** in any context
- **Verify URLs** — only official organisation websites or Google Maps links. No fabricated links,
  no Google Search URLs, no personal social media account links (no individual Instagram/Facebook profiles)
- **No API-driven automation** for event review — manual CLI script run daily by the user
- **No independent pages** — all content must be merged into the existing indiaspora codebase
- **Git**: push to `main` branch (Vercel auto-deploys)

## Known Community Entities (for event research)

| Organisation | Website |
|---|---|
| IAGZ (Indian Association Greater Zurich) | iagz.ch |
| TASC (Tamil Association of Switzerland) | tasc.ch |
| TeluguSwiss Association | teluguswiss.ch |
| SwissPuja (Durga Puja) | swisspuja.org |
| Indian Association Geneva | indianassociationgeneva.com |
| SICC (Swiss Indian Chamber of Commerce) | sicc.ch |
| Embassy of India, Berne | indembassybern.gov.in |
| ISKCON Zurich | — |
| InBa India Basel Festival | — |
| ISSC (Indian Sports Social Club) | — |
| Keliswiss | keliswiss.org |
| SMA Basel | smabasel.ch |
| YUVA EPFL | — |
