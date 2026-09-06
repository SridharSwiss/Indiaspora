import { NextResponse } from "next/server";

export const revalidate = 1800; // re-fetch feeds every 30 minutes

export type NewsItem = {
  id: string;
  title: string;
  url: string;
  source: string;
  sourceKey: string;
  category: string; // "NRI" | "National" | state name
  pubDate: string;
  description: string;
  imageUrl?: string;
};

// ── Feed registry — grouped by state/region ────────────────────────────────
const FEEDS = [
  // ── NRI / Diaspora ────────────────────────────────────────────────────────
  { key: "nri-1", name: "Indians Abroad",   url: "https://news.google.com/rss/search?q=Indian+diaspora+NRI&hl=en-US&gl=US&ceid=US:en",              category: "NRI" },
  { key: "nri-2", name: "Indians in Europe",url: "https://news.google.com/rss/search?q=Indians+Europe+UK+Switzerland+expat&hl=en-US&gl=US&ceid=US:en", category: "NRI" },
  { key: "nri-3", name: "NRI News",         url: "https://news.google.com/rss/search?q=NRI+news+overseas+Indian&hl=en-US&gl=US&ceid=US:en",         category: "NRI" },
  { key: "nri-4", name: "Indian Community", url: "https://news.google.com/rss/search?q=Indian+community+abroad+diaspora&hl=en-US&gl=US&ceid=US:en", category: "NRI" },

  // ── National ──────────────────────────────────────────────────────────────
  { key: "nat-1", name: "India Top Stories",url: "https://news.google.com/rss/headlines/section/geo/IN?hl=en-IN&gl=IN&ceid=IN:en",                  category: "National" },
  { key: "nat-2", name: "India Politics",   url: "https://news.google.com/rss/search?q=India+politics+parliament+government&hl=en-IN&gl=IN&ceid=IN:en", category: "National" },
  { key: "nat-3", name: "India Business",   url: "https://news.google.com/rss/search?q=India+economy+business+market&hl=en-IN&gl=IN&ceid=IN:en",    category: "National" },
  { key: "nat-4", name: "India Tech",       url: "https://news.google.com/rss/search?q=India+technology+startup&hl=en-IN&gl=IN&ceid=IN:en",         category: "National" },

  // ── Delhi / NCR ───────────────────────────────────────────────────────────
  { key: "dl-1",  name: "Delhi News",       url: "https://news.google.com/rss/search?q=Delhi+news&hl=en-IN&gl=IN&ceid=IN:en",                       category: "Delhi / NCR" },
  { key: "dl-2",  name: "Delhi NCR",        url: "https://news.google.com/rss/headlines/section/geo/Delhi?hl=en-IN&gl=IN&ceid=IN:en",               category: "Delhi / NCR" },

  // ── Maharashtra ───────────────────────────────────────────────────────────
  { key: "mh-1",  name: "Maharashtra",      url: "https://news.google.com/rss/headlines/section/geo/Maharashtra?hl=en-IN&gl=IN&ceid=IN:en",         category: "Maharashtra" },
  { key: "mh-2",  name: "Mumbai",           url: "https://news.google.com/rss/search?q=Mumbai+Maharashtra+news&hl=en-IN&gl=IN&ceid=IN:en",          category: "Maharashtra" },

  // ── Karnataka ─────────────────────────────────────────────────────────────
  { key: "ka-1",  name: "Karnataka",        url: "https://news.google.com/rss/headlines/section/geo/Karnataka?hl=en-IN&gl=IN&ceid=IN:en",           category: "Karnataka" },
  { key: "ka-2",  name: "Bangalore",        url: "https://news.google.com/rss/search?q=Bengaluru+Karnataka+news&hl=en-IN&gl=IN&ceid=IN:en",         category: "Karnataka" },

  // ── Tamil Nadu ────────────────────────────────────────────────────────────
  { key: "tn-1",  name: "Tamil Nadu",       url: "https://news.google.com/rss/headlines/section/geo/Tamil+Nadu?hl=en-IN&gl=IN&ceid=IN:en",          category: "Tamil Nadu" },
  { key: "tn-2",  name: "Chennai",          url: "https://news.google.com/rss/search?q=Chennai+Tamil+Nadu+news&hl=en-IN&gl=IN&ceid=IN:en",          category: "Tamil Nadu" },

  // ── Telangana & Andhra Pradesh ────────────────────────────────────────────
  { key: "ts-1",  name: "Telangana",        url: "https://news.google.com/rss/headlines/section/geo/Telangana?hl=en-IN&gl=IN&ceid=IN:en",           category: "Telangana & AP" },
  { key: "ts-2",  name: "Andhra Pradesh",   url: "https://news.google.com/rss/search?q=Hyderabad+Telangana+%22Andhra+Pradesh%22+news&hl=en-IN&gl=IN&ceid=IN:en", category: "Telangana & AP" },

  // ── Gujarat ───────────────────────────────────────────────────────────────
  { key: "gj-1",  name: "Gujarat",          url: "https://news.google.com/rss/headlines/section/geo/Gujarat?hl=en-IN&gl=IN&ceid=IN:en",             category: "Gujarat" },
  { key: "gj-2",  name: "Ahmedabad",        url: "https://news.google.com/rss/search?q=Gujarat+Ahmedabad+news&hl=en-IN&gl=IN&ceid=IN:en",           category: "Gujarat" },

  // ── West Bengal ───────────────────────────────────────────────────────────
  { key: "wb-1",  name: "West Bengal",      url: "https://news.google.com/rss/headlines/section/geo/West+Bengal?hl=en-IN&gl=IN&ceid=IN:en",         category: "West Bengal" },
  { key: "wb-2",  name: "Kolkata",          url: "https://news.google.com/rss/search?q=Kolkata+%22West+Bengal%22+news&hl=en-IN&gl=IN&ceid=IN:en",   category: "West Bengal" },

  // ── Kerala ────────────────────────────────────────────────────────────────
  { key: "kl-1",  name: "Kerala",           url: "https://news.google.com/rss/headlines/section/geo/Kerala?hl=en-IN&gl=IN&ceid=IN:en",              category: "Kerala" },
  { key: "kl-2",  name: "Kochi",            url: "https://news.google.com/rss/search?q=Kerala+Thiruvananthapuram+news&hl=en-IN&gl=IN&ceid=IN:en",   category: "Kerala" },

  // ── Uttar Pradesh ─────────────────────────────────────────────────────────
  { key: "up-1",  name: "Uttar Pradesh",    url: "https://news.google.com/rss/headlines/section/geo/Uttar+Pradesh?hl=en-IN&gl=IN&ceid=IN:en",       category: "Uttar Pradesh" },
  { key: "up-2",  name: "Lucknow",          url: "https://news.google.com/rss/search?q=%22Uttar+Pradesh%22+Lucknow+news&hl=en-IN&gl=IN&ceid=IN:en", category: "Uttar Pradesh" },

  // ── Rajasthan ─────────────────────────────────────────────────────────────
  { key: "rj-1",  name: "Rajasthan",        url: "https://news.google.com/rss/headlines/section/geo/Rajasthan?hl=en-IN&gl=IN&ceid=IN:en",           category: "Rajasthan" },

  // ── Punjab ────────────────────────────────────────────────────────────────
  { key: "pb-1",  name: "Punjab",           url: "https://news.google.com/rss/headlines/section/geo/Punjab?hl=en-IN&gl=IN&ceid=IN:en",              category: "Punjab" },

  // ── Madhya Pradesh ────────────────────────────────────────────────────────
  { key: "mp-1",  name: "Madhya Pradesh",   url: "https://news.google.com/rss/headlines/section/geo/Madhya+Pradesh?hl=en-IN&gl=IN&ceid=IN:en",      category: "Madhya Pradesh" },
];

function parseRss(xml: string, meta: { key: string; name: string; category: string }): NewsItem[] {
  const items: NewsItem[] = [];
  const itemMatches = xml.match(/<item[\s\S]*?<\/item>/gi) || [];

  for (const block of itemMatches.slice(0, 8)) {
    const get = (tag: string) => {
      const m = block.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, "i"))
        || block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
      return m ? m[1].trim() : "";
    };

    const title = get("title").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    const link  = get("link") || get("guid");
    const pubDate = get("pubDate") || get("dc:date") || get("published");
    const desc = get("description").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").slice(0, 200);

    const imgM = block.match(/url="([^"]+\.(jpg|jpeg|png|webp))"/i)
      || block.match(/<media:thumbnail[^>]+url="([^"]+)"/i)
      || block.match(/<enclosure[^>]+url="([^"]+\.(jpg|jpeg|png|webp))"/i);
    const imageUrl = imgM ? imgM[1] : undefined;

    if (!title || !link) continue;
    items.push({
      id: `${meta.key}-${Buffer.from(link).toString("base64").slice(0, 12)}`,
      title,
      url: link,
      source: meta.name,
      sourceKey: meta.key,
      category: meta.category,
      pubDate,
      description: desc,
      imageUrl,
    });
  }
  return items;
}

export async function GET() {
  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const res = await fetch(feed.url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; Indiaspora/1.0)" },
        next: { revalidate: 1800 },
        signal: AbortSignal.timeout(6000),
      });
      if (!res.ok) return [];
      const xml = await res.text();
      return parseRss(xml, feed);
    })
  );

  const seen = new Set<string>();
  const all: NewsItem[] = [];
  for (const r of results) {
    if (r.status === "fulfilled") {
      for (const item of r.value) {
        if (!seen.has(item.id)) { seen.add(item.id); all.push(item); }
      }
    }
  }

  // National first, then by pubDate desc
  all.sort((a, b) => {
    if (a.category === "National" && b.category !== "National") return -1;
    if (b.category === "National" && a.category !== "National") return 1;
    const da = new Date(a.pubDate).getTime() || 0;
    const db = new Date(b.pubDate).getTime() || 0;
    return db - da;
  });

  return NextResponse.json({ items: all, fetchedAt: new Date().toISOString() });
}
