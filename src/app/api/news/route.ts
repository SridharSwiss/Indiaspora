import { NextResponse } from "next/server";

export const revalidate = 1800;

export type NewsItem = {
  id: string;
  title: string;
  url: string;
  source: string;
  sourceKey: string;
  category: string; // "NRI" | "National" | "Regional"
  language: string;
  pubDate: string;
  description: string;
  imageUrl?: string;
};

const FEEDS = [
  // ── NRI / Diaspora ────────────────────────────────────────────────────────
  { key: "nri-1", name: "Indians Abroad",    url: "https://news.google.com/rss/search?q=Indian+diaspora+NRI&hl=en-US&gl=US&ceid=US:en",              category: "NRI", language: "English" },
  { key: "nri-2", name: "Indians in Europe", url: "https://news.google.com/rss/search?q=Indians+Europe+UK+Switzerland+expat&hl=en-US&gl=US&ceid=US:en", category: "NRI", language: "English" },
  { key: "nri-3", name: "NRI News",          url: "https://news.google.com/rss/search?q=NRI+news+overseas+Indian&hl=en-US&gl=US&ceid=US:en",          category: "NRI", language: "English" },
  { key: "nri-4", name: "Indian Community",  url: "https://news.google.com/rss/search?q=Indian+community+abroad+diaspora&hl=en-US&gl=US&ceid=US:en",  category: "NRI", language: "English" },

  // ── English ───────────────────────────────────────────────────────────────
  { key: "en-1",  name: "India Top Stories", url: "https://news.google.com/rss/headlines/section/geo/IN?hl=en-IN&gl=IN&ceid=IN:en",                   category: "National", language: "English" },
  { key: "en-2",  name: "India Politics",    url: "https://news.google.com/rss/search?q=India+politics+parliament&hl=en-IN&gl=IN&ceid=IN:en",         category: "National", language: "English" },
  { key: "en-3",  name: "India Business",    url: "https://news.google.com/rss/search?q=India+economy+business+market&hl=en-IN&gl=IN&ceid=IN:en",     category: "National", language: "English" },
  { key: "en-4",  name: "India Tech",        url: "https://news.google.com/rss/search?q=India+technology+startup&hl=en-IN&gl=IN&ceid=IN:en",          category: "National", language: "English" },

  // ── Hindi ─────────────────────────────────────────────────────────────────
  { key: "hi-1",  name: "हिन्दी समाचार",     url: "https://news.google.com/rss/headlines/section/geo/IN?hl=hi&gl=IN&ceid=IN:hi",                     category: "Regional", language: "Hindi" },
  { key: "hi-2",  name: "भारत समाचार",       url: "https://news.google.com/rss/search?q=news&hl=hi&gl=IN&ceid=IN:hi",                               category: "Regional", language: "Hindi" },

  // ── Tamil ─────────────────────────────────────────────────────────────────
  { key: "ta-1",  name: "தமிழ் செய்திகள்",   url: "https://news.google.com/rss/headlines/section/geo/IN?hl=ta&gl=IN&ceid=IN:ta",                     category: "Regional", language: "Tamil" },
  { key: "ta-2",  name: "Tamil News",         url: "https://news.google.com/rss/search?q=news&hl=ta&gl=IN&ceid=IN:ta",                               category: "Regional", language: "Tamil" },

  // ── Telugu ────────────────────────────────────────────────────────────────
  { key: "te-1",  name: "తెలుగు వార్తలు",    url: "https://news.google.com/rss/headlines/section/geo/IN?hl=te&gl=IN&ceid=IN:te",                     category: "Regional", language: "Telugu" },
  { key: "te-2",  name: "Telugu News",        url: "https://news.google.com/rss/search?q=news&hl=te&gl=IN&ceid=IN:te",                               category: "Regional", language: "Telugu" },

  // ── Bengali ───────────────────────────────────────────────────────────────
  { key: "bn-1",  name: "বাংলা খবর",          url: "https://news.google.com/rss/headlines/section/geo/IN?hl=bn&gl=IN&ceid=IN:bn",                     category: "Regional", language: "Bengali" },
  { key: "bn-2",  name: "Bengali News",       url: "https://news.google.com/rss/search?q=news&hl=bn&gl=IN&ceid=IN:bn",                               category: "Regional", language: "Bengali" },

  // ── Marathi ───────────────────────────────────────────────────────────────
  { key: "mr-1",  name: "मराठी बातम्या",      url: "https://news.google.com/rss/headlines/section/geo/IN?hl=mr&gl=IN&ceid=IN:mr",                     category: "Regional", language: "Marathi" },
  { key: "mr-2",  name: "Marathi News",       url: "https://news.google.com/rss/search?q=news&hl=mr&gl=IN&ceid=IN:mr",                               category: "Regional", language: "Marathi" },

  // ── Malayalam ─────────────────────────────────────────────────────────────
  { key: "ml-1",  name: "മലയാളം വാർത്ത",     url: "https://news.google.com/rss/headlines/section/geo/IN?hl=ml&gl=IN&ceid=IN:ml",                     category: "Regional", language: "Malayalam" },
  { key: "ml-2",  name: "Malayalam News",     url: "https://news.google.com/rss/search?q=news&hl=ml&gl=IN&ceid=IN:ml",                               category: "Regional", language: "Malayalam" },

  // ── Gujarati ──────────────────────────────────────────────────────────────
  { key: "gu-1",  name: "ગુજરાતી સમાચાર",    url: "https://news.google.com/rss/headlines/section/geo/IN?hl=gu&gl=IN&ceid=IN:gu",                     category: "Regional", language: "Gujarati" },
  { key: "gu-2",  name: "Gujarati News",      url: "https://news.google.com/rss/search?q=news&hl=gu&gl=IN&ceid=IN:gu",                               category: "Regional", language: "Gujarati" },

  // ── Kannada ───────────────────────────────────────────────────────────────
  { key: "kn-1",  name: "ಕನ್ನಡ ಸುದ್ದಿ",      url: "https://news.google.com/rss/headlines/section/geo/IN?hl=kn&gl=IN&ceid=IN:kn",                     category: "Regional", language: "Kannada" },
  { key: "kn-2",  name: "Kannada News",       url: "https://news.google.com/rss/search?q=news&hl=kn&gl=IN&ceid=IN:kn",                               category: "Regional", language: "Kannada" },
];

function parseRss(xml: string, meta: { key: string; name: string; category: string; language: string }): NewsItem[] {
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
      title, url: link, source: meta.name, sourceKey: meta.key,
      category: meta.category, language: meta.language,
      pubDate, description: desc, imageUrl,
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
      return parseRss(await res.text(), feed);
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

  all.sort((a, b) => {
    if (a.category === "National" && b.category !== "National") return -1;
    if (b.category === "National" && a.category !== "National") return 1;
    return (new Date(b.pubDate).getTime() || 0) - (new Date(a.pubDate).getTime() || 0);
  });

  return NextResponse.json({ items: all, fetchedAt: new Date().toISOString() });
}
