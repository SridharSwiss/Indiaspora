import { NextResponse } from "next/server";

export const revalidate = 1800; // re-fetch feeds every 30 minutes

export type NewsItem = {
  id: string;
  title: string;
  url: string;
  source: string;
  sourceKey: string;
  category: string;
  language: string;
  pubDate: string;
  description: string;
  imageUrl?: string;
};

// ── Feed registry ─────────────────────────────────────────────────────────────
// Google News RSS is used for languages where direct publisher feeds block server IPs.
// It aggregates the same publications (Eenadu, Sakshi, Dinamalar, etc.) reliably.
const FEEDS = [
  // ── NRI / Diaspora ────────────────────────────────────────────────────────
  { key: "nri-gn1",   name: "Indians Abroad",     url: "https://news.google.com/rss/search?q=Indian+diaspora+NRI&hl=en-US&gl=US&ceid=US:en",        category: "NRI", language: "English" },
  { key: "nri-gn2",   name: "Indians in Europe",  url: "https://news.google.com/rss/search?q=Indians+in+Europe+UK+Switzerland&hl=en-US&gl=US&ceid=US:en", category: "NRI", language: "English" },
  { key: "nri-gn3",   name: "NRI News",           url: "https://news.google.com/rss/search?q=NRI+news+Indian+expat&hl=en-US&gl=US&ceid=US:en",      category: "NRI", language: "English" },
  { key: "nri-gn4",   name: "Indian Community",   url: "https://news.google.com/rss/search?q=Indian+community+abroad+diaspora&hl=en-US&gl=US&ceid=US:en", category: "NRI", language: "English" },

  // ── English national (Google News India top stories + topic feeds) ─────────
  { key: "en-gn-top",  name: "India Top Stories", url: "https://news.google.com/rss/headlines/section/geo/IN?hl=en-IN&gl=IN&ceid=IN:en",             category: "National", language: "English" },
  { key: "en-gn-nat",  name: "India News",        url: "https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRGx1YlY4U0FtVnVLQUFQAQ?hl=en-IN&gl=IN&ceid=IN:en", category: "National", language: "English" },
  { key: "en-gn-pol",  name: "India Politics",    url: "https://news.google.com/rss/search?q=India+politics+government&hl=en-IN&gl=IN&ceid=IN:en",   category: "National", language: "English" },
  { key: "en-gn-biz",  name: "India Business",    url: "https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN:en", category: "Business", language: "English" },
  { key: "en-gn-tech", name: "India Tech",        url: "https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNR1ptZHpNU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN:en", category: "Business", language: "English" },
  { key: "en-gn-sci",  name: "Science & Health",  url: "https://news.google.com/rss/search?q=India+science+health&hl=en-IN&gl=IN&ceid=IN:en",        category: "National", language: "English" },

  // ── Hindi ────────────────────────────────────────────────────────────────
  { key: "hi-gn1",    name: "हिन्दी समाचार",      url: "https://news.google.com/rss/headlines/section/geo/IN?hl=hi&gl=IN&ceid=IN:hi",                category: "Regional", language: "Hindi" },
  { key: "hi-gn2",    name: "भारत समाचार",        url: "https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRGx1YlY4U0FtaHBLQUFQAQ?hl=hi&gl=IN&ceid=IN:hi", category: "Regional", language: "Hindi" },
  { key: "hi-gn3",    name: "हिन्दी खबरें",       url: "https://news.google.com/rss/search?q=news&hl=hi&gl=IN&ceid=IN:hi",                           category: "Regional", language: "Hindi" },

  // ── Tamil ────────────────────────────────────────────────────────────────
  { key: "ta-gn1",    name: "தமிழ் செய்திகள்",    url: "https://news.google.com/rss/headlines/section/geo/IN?hl=ta&gl=IN&ceid=IN:ta",                category: "Regional", language: "Tamil" },
  { key: "ta-gn2",    name: "Tamil News",          url: "https://news.google.com/rss/search?q=news&hl=ta&gl=IN&ceid=IN:ta",                           category: "Regional", language: "Tamil" },

  // ── Telugu ───────────────────────────────────────────────────────────────
  { key: "te-gn1",    name: "తెలుగు వార్తలు",      url: "https://news.google.com/rss/headlines/section/geo/IN?hl=te&gl=IN&ceid=IN:te",                category: "Regional", language: "Telugu" },
  { key: "te-gn2",    name: "Telugu News",         url: "https://news.google.com/rss/search?q=news&hl=te&gl=IN&ceid=IN:te",                           category: "Regional", language: "Telugu" },

  // ── Bengali ──────────────────────────────────────────────────────────────
  { key: "bn-gn1",    name: "বাংলা খবর",           url: "https://news.google.com/rss/headlines/section/geo/IN?hl=bn&gl=IN&ceid=IN:bn",                category: "Regional", language: "Bengali" },
  { key: "bn-gn2",    name: "Bengali News",        url: "https://news.google.com/rss/search?q=news&hl=bn&gl=IN&ceid=IN:bn",                           category: "Regional", language: "Bengali" },

  // ── Marathi ──────────────────────────────────────────────────────────────
  { key: "mr-gn1",    name: "मराठी बातम्या",       url: "https://news.google.com/rss/headlines/section/geo/IN?hl=mr&gl=IN&ceid=IN:mr",                category: "Regional", language: "Marathi" },
  { key: "mr-gn2",    name: "Marathi News",        url: "https://news.google.com/rss/search?q=news&hl=mr&gl=IN&ceid=IN:mr",                           category: "Regional", language: "Marathi" },

  // ── Malayalam ────────────────────────────────────────────────────────────
  { key: "ml-gn1",    name: "മലയാളം വാർത്തകൾ",    url: "https://news.google.com/rss/headlines/section/geo/IN?hl=ml&gl=IN&ceid=IN:ml",                category: "Regional", language: "Malayalam" },
  { key: "ml-gn2",    name: "Malayalam News",      url: "https://news.google.com/rss/search?q=news&hl=ml&gl=IN&ceid=IN:ml",                           category: "Regional", language: "Malayalam" },

  // ── Gujarati ─────────────────────────────────────────────────────────────
  { key: "gu-gn1",    name: "ગુજરાતી સમાચાર",      url: "https://news.google.com/rss/headlines/section/geo/IN?hl=gu&gl=IN&ceid=IN:gu",                category: "Regional", language: "Gujarati" },
  { key: "gu-gn2",    name: "Gujarati News",       url: "https://news.google.com/rss/search?q=news&hl=gu&gl=IN&ceid=IN:gu",                           category: "Regional", language: "Gujarati" },

  // ── Kannada ──────────────────────────────────────────────────────────────
  { key: "kn-gn1",    name: "ಕನ್ನಡ ಸುದ್ದಿ",        url: "https://news.google.com/rss/headlines/section/geo/IN?hl=kn&gl=IN&ceid=IN:kn",                category: "Regional", language: "Kannada" },
  { key: "kn-gn2",    name: "Kannada News",        url: "https://news.google.com/rss/search?q=news&hl=kn&gl=IN&ceid=IN:kn",                           category: "Regional", language: "Kannada" },
];

function parseRss(xml: string, meta: { key: string; name: string; category: string; language: string }): NewsItem[] {
  const items: NewsItem[] = [];
  // Simple regex-based RSS parser — avoids dom-parser dependency
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

    // Try to extract image from media:thumbnail, enclosure, or og-style tags
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
      language: meta.language,
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

  const all: NewsItem[] = [];
  for (const r of results) {
    if (r.status === "fulfilled") all.push(...r.value);
  }

  // Sort NRI first, then by pubDate desc
  all.sort((a, b) => {
    if (a.category === "NRI" && b.category !== "NRI") return -1;
    if (b.category === "NRI" && a.category !== "NRI") return 1;
    const da = new Date(a.pubDate).getTime() || 0;
    const db = new Date(b.pubDate).getTime() || 0;
    return db - da;
  });

  return NextResponse.json({ items: all, fetchedAt: new Date().toISOString() });
}
