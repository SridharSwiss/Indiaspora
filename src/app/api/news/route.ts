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
const FEEDS = [
  // ── NRI / Diaspora ────────────────────────────────────────────────────────
  { key: "nri-timesofindia", name: "TOI NRI", url: "https://timesofindia.indiatimes.com/rss/indiabriefing.cms", category: "NRI", language: "English" },
  { key: "nri-ndtv", name: "NDTV NRI", url: "https://feeds.feedburner.com/ndtvnews-nri", category: "NRI", language: "English" },
  { key: "nri-indianews", name: "India News Abroad", url: "https://www.indiaabroad.com/feed/", category: "NRI", language: "English" },
  { key: "nri-newsindiaan", name: "News India", url: "https://newsindiaaa.com/feed/", category: "NRI", language: "English" },

  // ── Top 10 English newspapers ─────────────────────────────────────────────
  { key: "en-toi-top",   name: "Times of India",     url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",    category: "National", language: "English" },
  { key: "en-ht",        name: "Hindustan Times",    url: "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml", category: "National", language: "English" },
  { key: "en-hindu",     name: "The Hindu",          url: "https://www.thehindu.com/news/national/feeder/default.rss",      category: "National", language: "English" },
  { key: "en-ndtv",      name: "NDTV",               url: "https://feeds.feedburner.com/ndtvnews-india-news",               category: "National", language: "English" },
  { key: "en-ie",        name: "Indian Express",     url: "https://indianexpress.com/feed/",                                category: "National", language: "English" },
  { key: "en-et",        name: "Economic Times",     url: "https://economictimes.indiatimes.com/rssfeedstopstories.cms",    category: "Business", language: "English" },
  { key: "en-mint",      name: "Mint",               url: "https://www.livemint.com/rss/news",                              category: "Business", language: "English" },
  { key: "en-bs",        name: "Business Standard",  url: "https://www.business-standard.com/rss/home_page_top_stories.rss", category: "Business", language: "English" },
  { key: "en-dh",        name: "Deccan Herald",      url: "https://www.deccanherald.com/rss-feed/national/feed",            category: "National", language: "English" },
  { key: "en-wire",      name: "The Wire",           url: "https://thewire.in/feed",                                        category: "National", language: "English" },

  // ── Hindi ────────────────────────────────────────────────────────────────
  { key: "hi-bhaskar",   name: "Dainik Bhaskar",     url: "https://www.bhaskar.com/rss-v1--category-1061.xml",             category: "Regional", language: "Hindi" },
  { key: "hi-amar",      name: "Amar Ujala",         url: "https://www.amarujala.com/rss/india-news.xml",                  category: "Regional", language: "Hindi" },
  { key: "hi-nbt",       name: "Navbharat Times",    url: "https://navbharattimes.indiatimes.com/rssfeedstopstories.cms",  category: "Regional", language: "Hindi" },
  { key: "hi-jagran",    name: "Dainik Jagran",      url: "https://www.jagran.com/rss/news-national.xml",                  category: "Regional", language: "Hindi" },
  { key: "hi-jtv",       name: "Jansatta",           url: "https://www.jansatta.com/feed/",                                category: "Regional", language: "Hindi" },

  // ── Tamil ────────────────────────────────────────────────────────────────
  { key: "ta-dinamalar", name: "Dinamalar",          url: "https://www.dinamalar.com/rss.asp",                             category: "Regional", language: "Tamil" },
  { key: "ta-dinamani",  name: "Dinamani",           url: "https://www.dinamani.com/feeds/?section=national",              category: "Regional", language: "Tamil" },

  // ── Telugu ───────────────────────────────────────────────────────────────
  { key: "te-eenadu",    name: "Eenadu",             url: "https://www.eenadu.net/rss",                                    category: "Regional", language: "Telugu" },
  { key: "te-sakshi",    name: "Sakshi",             url: "https://www.sakshi.com/rss",                                    category: "Regional", language: "Telugu" },

  // ── Bengali ──────────────────────────────────────────────────────────────
  { key: "bn-abp",       name: "Ananda Bazar",       url: "https://www.anandabazar.com/feed",                              category: "Regional", language: "Bengali" },

  // ── Marathi ──────────────────────────────────────────────────────────────
  { key: "mr-lokmat",    name: "Lokmat",             url: "https://www.lokmat.com/rss/maharashtra.xml",                    category: "Regional", language: "Marathi" },
  { key: "mr-mht",       name: "Maharashtra Times",  url: "https://maharashtratimes.com/rssfeedstopstories.cms",           category: "Regional", language: "Marathi" },

  // ── Malayalam ────────────────────────────────────────────────────────────
  { key: "ml-mathrubhumi", name: "Mathrubhumi",      url: "https://www.mathrubhumi.com/rss",                              category: "Regional", language: "Malayalam" },
  { key: "ml-manorama",  name: "Manorama",           url: "https://www.manoramaonline.com/news/feeds/rss.cms",            category: "Regional", language: "Malayalam" },

  // ── Gujarati ─────────────────────────────────────────────────────────────
  { key: "gu-gujaratsamachar", name: "Gujarat Samachar", url: "https://www.gujaratsamachar.com/index.php/rss",             category: "Regional", language: "Gujarati" },
  { key: "gu-divyabhaskar",    name: "Divya Bhaskar",    url: "https://www.divyabhaskar.co.in/rss/news/national/",         category: "Regional", language: "Gujarati" },

  // ── Kannada ──────────────────────────────────────────────────────────────
  { key: "kn-vijayavani", name: "Vijaya Vani",       url: "https://www.vijayavani.net/feed",                              category: "Regional", language: "Kannada" },
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
