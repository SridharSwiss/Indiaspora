# Indiaspora — Claude Instructions

## Daily Routine

When the user says **"execute daily routine"**, run these steps IN ORDER.
After completing all steps, commit and push to `main`. Report every addition with evidence.

---

### Step 1 — Events: research + review

**1a. Research new events**
Use WebSearch/WebFetch to search each known entity's website for upcoming events.
Search all of: IAGZ (iagz.ch), TASC (tasc.ch), TeluguSwiss (teluguswiss.ch),
SwissPuja (swisspuja.org), IAG Geneva (indianassociationgeneva.com), SICC (sicc.ch),
Embassy of India Berne (indembassybern.gov.in), ISKCON Zurich, InBa Basel,
Keliswiss (keliswiss.org), SMA Basel (smabasel.ch), STNRI (swisstelugunri.com).
Also run a general search: "Indian community events Switzerland 2026".

Evidence rule: only add an event if the date, title, and organiser can be confirmed
from the organisation's own website. No guessing. If a URL is not on the official site, skip it.

Add verified events to `UPCOMING_EVENTS` in `src/lib/data.ts`.

**1b. Review submitted events**
Run: `node scripts/review-events.mjs` (requires Supabase keys in `.env.local`).

---

### Step 2 — Page-by-page deep content research

Process **one section/page at a time**. For each page:
1. Read the current file to understand what is already there.
2. Search the web for real, current, verifiable content to fill gaps or correct stale data.
3. Only write content that has a confirmed source URL. Record the source.
4. Edit the file, commit with a message naming what was added and the evidence source.
5. Report to the user: page name, what was added/changed, source URL.

Process pages in this order (one per routine run, cycling through all over time):

| # | Page file | Research focus |
|---|---|---|
| 1 | `src/app/(pages)/food/restaurants/page.tsx` | Indian restaurants in CH — verify name, city, Google Maps link, cuisine type |
| 2 | `src/app/(pages)/food/grocery/page.tsx` | Indian grocery stores — verify name, city, website or Maps link |
| 3 | `src/app/(pages)/food/catering/page.tsx` | Indian catering services — verify name, city, website |
| 4 | `src/app/(pages)/community/associations/page.tsx` | Community orgs — verify website, founding year, member count |
| 5 | `src/app/(pages)/community/spiritual/page.tsx` | Temples, mandirs, spiritual centres — verify address, website |
| 6 | `src/app/(pages)/community/students/page.tsx` | Student associations at Swiss universities — verify uni, website |
| 7 | `src/app/(pages)/community/women/page.tsx` | Women's orgs — verify website, description accuracy |
| 8 | `src/app/(pages)/business/networking/page.tsx` | Business networking groups — verify website, active status |
| 9 | `src/app/(pages)/business/startups/page.tsx` | Indian-founded startups in CH — verify company, founder, website |
| 10 | `src/app/(pages)/business/services/page.tsx` | Professional services — verify firm, speciality, website |
| 11 | `src/app/(pages)/cities/zurich/page.tsx` | Zurich-specific Indian community content |
| 12 | `src/app/(pages)/cities/geneva/page.tsx` | Geneva-specific Indian community content |
| 13 | `src/app/(pages)/cities/basel/page.tsx` | Basel-specific Indian community content |
| 14 | `src/app/(pages)/cities/bern/page.tsx` | Bern-specific Indian community content |
| 15 | `src/app/(pages)/cities/lausanne/page.tsx` | Lausanne-specific Indian community content |
| 16 | `src/app/(pages)/living/healthcare/page.tsx` | Indian-speaking doctors, clinics — verify name, city, specialty |
| 17 | `src/app/(pages)/living/education/page.tsx` | Schools, tutors, Indian curriculum resources in CH |
| 18 | `src/app/(pages)/living/legal/page.tsx` | Immigration lawyers, legal aid — verify firm, website |
| 19 | `src/app/(pages)/living/housing/page.tsx` | Housing resources for Indian immigrants |
| 20 | `src/app/(pages)/living/banking/page.tsx` | Banking and remittance options — verify current rates/services |
| 21 | `src/app/(pages)/culture/festivals/page.tsx` | Festival dates and locations — verify with official sources |
| 22 | `src/app/(pages)/culture/arts/page.tsx` | Indian arts groups, schools, performances in CH |
| 23 | `src/app/(pages)/culture/cinema/page.tsx` | Indian cinema screenings and venues in CH |
| 24 | `src/app/(pages)/news/page.tsx` | Recent Swiss-India bilateral news — verify with news sources |

**Track which page was last processed** by noting it in the commit message:
`Daily research: enriched [page name] — sources: [url1, url2]`

---

### Step 3 — Evidence report

After each routine run, output a report to the user in this format:

```
## Daily Research Report — [date]

### Events added
- [Title] · [Date] · [Organiser] · Source: [url]

### Page enriched: [page name]
- [What was added/changed]
- Source: [verified URL]
- [Any items removed due to stale/unverifiable data]

### Skipped / no new evidence found
- [page or item] — reason
```

---

## Permanent Constraints

- **Never reference swissdesi.ch** in any context
- **Verify URLs** — only official organisation websites or Google Maps links. No fabricated links,
  no Google Search URLs, no personal social media account links (no individual Instagram/Facebook profiles)
- **Evidence-only rule** — never add content that cannot be confirmed by a real, reachable URL.
  If a search returns no evidence, write "no verified data found" in the report and skip.
- **No API-driven automation** for event review — manual CLI script run daily by the user
- **No independent pages** — all content must be merged into the existing indiaspora codebase
- **Git**: push to `main` branch (Vercel auto-deploys)
- **Git attribution** — end every commit message with:
  ```
  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01ERxFYYiHssGnLyHWD4ZFxU
  ```

---

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
| STNRI (Swiss Telugu NRI Forum) | swisstelugunri.com |
