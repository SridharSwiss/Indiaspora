"use client";

import { useEffect, useState, useCallback } from "react";
import type { NewsItem } from "@/app/api/news/route";

const TABS = [
  { key: "All",      label: "All News" },
  { key: "NRI",      label: "NRI / Diaspora" },
  { key: "English",  label: "English" },
  { key: "Hindi",    label: "हिन्दी" },
  { key: "Tamil",    label: "தமிழ்" },
  { key: "Telugu",   label: "తెలుగు" },
  { key: "Bengali",  label: "বাংলা" },
  { key: "Marathi",  label: "मराठी" },
  { key: "Malayalam",label: "മലയാളം" },
  { key: "Gujarati", label: "ગુજરાતી" },
  { key: "Kannada",  label: "ಕನ್ನಡ" },
];

const LANG_ORDER = ["Hindi","Tamil","Telugu","Bengali","Marathi","Malayalam","Gujarati","Kannada"];

function timeAgo(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  const diff = Math.floor((Date.now() - d.getTime()) / 60000);
  if (diff < 2) return "just now";
  if (diff < 60) return `${diff}m ago`;
  const h = Math.floor(diff / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
      display: "flex", gap: 12, padding: "14px 0",
      borderBottom: "1px solid var(--border)",
      textDecoration: "none", color: "inherit", alignItems: "flex-start",
    }}>
      {item.imageUrl && (
        <img src={item.imageUrl} alt="" aria-hidden
          style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 4, flexShrink: 0, background: "var(--surface)" }}
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
            color: item.category === "NRI" ? "#B08D57" : "var(--text-3)",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          }}>{item.source}</span>
          <span style={{ fontSize: 10, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            · {timeAgo(item.pubDate)}
          </span>
        </div>
        <p style={{
          margin: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.45,
          color: "var(--text)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{item.title}</p>
        {item.description && (
          <p style={{
            margin: "4px 0 0", fontSize: 12, color: "var(--text-2)", lineHeight: 1.5,
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>{item.description}</p>
        )}
      </div>
    </a>
  );
}

function Section({ title, items }: { title: string; items: NewsItem[] }) {
  if (!items.length) return null;
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 2, paddingBottom: 10, borderBottom: "2px solid var(--in)" }}>
        <h2 style={{
          margin: 0, fontSize: 15, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
          color: "var(--text)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        }}>{title}</h2>
        <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          {items.length} stories
        </span>
      </div>
      {items.map(item => <NewsCard key={item.id} item={item} />)}
    </div>
  );
}

export default function NewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchedAt, setFetchedAt] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setItems(data.items || []);
      setFetchedAt(data.fetchedAt || "");
      setError(false);
    } catch { setError(true); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    load();
    const iv = setInterval(load, 30 * 60 * 1000);
    return () => clearInterval(iv);
  }, [load]);

  const byLang = (lang: string) => items.filter(i => i.language === lang && i.category !== "NRI");
  const nationalItems = items.filter(i => i.category === "National");
  const nriItems = items.filter(i => i.category === "NRI");
  const filtered = activeTab === "All" ? items
    : activeTab === "NRI" ? nriItems
    : activeTab === "English" ? items.filter(i => i.language === "English")
    : items.filter(i => i.language === activeTab);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)", paddingTop: 96 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "var(--text)", fontFamily: "'Playfair Display', Georgia, serif" }}>
              India News
            </h1>
            {fetchedAt && (
              <span style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                Updated {timeAgo(fetchedAt)}
              </span>
            )}
          </div>

          <div style={{ display: "flex", overflowX: "auto", paddingBottom: 0, scrollbarWidth: "none" }}>
            {TABS.map(({ key, label }) => {
              const active = activeTab === key;
              return (
                <button key={key} onClick={() => setActiveTab(key)} style={{
                  padding: "9px 14px", fontSize: 12,
                  fontWeight: active ? 700 : 500,
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  color: active ? "var(--in)" : "var(--text-3)",
                  background: "transparent", border: "none",
                  borderBottom: active ? "2px solid var(--in)" : "2px solid transparent",
                  cursor: "pointer", whiteSpace: "nowrap", transition: "color 0.15s", marginBottom: -1,
                }}>{label}</button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Loading news…
          </div>
        )}
        {error && !loading && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Could not load news. Please try again later.
          </div>
        )}
        {!loading && !error && (
          activeTab === "All" ? (
            <>
              <Section title="National" items={nationalItems} />
              {LANG_ORDER.map(lang =>
                byLang(lang).length ? <Section key={lang} title={lang} items={byLang(lang)} /> : null
              )}
              <Section title="NRI & Diaspora" items={nriItems} />
              {items.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                  No stories loaded yet.
                </div>
              )}
            </>
          ) : (
            filtered.length > 0
              ? <div>{filtered.map(item => <NewsCard key={item.id} item={item} />)}</div>
              : <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                  No stories for this language yet.
                </div>
          )
        )}
      </div>
    </main>
  );
}
