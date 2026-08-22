"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";

const ALL_PAGES = [
  { label: "Community", href: "/community", group: "Community" },
  { label: "Associations & Clubs", href: "/community/associations", group: "Community" },
  { label: "Temples & Spiritual", href: "/community/spiritual", group: "Community" },
  { label: "Women's Network", href: "/community/women", group: "Community" },
  { label: "Students", href: "/community/students", group: "Community" },
  { label: "Living Guide", href: "/living", group: "Living Guide" },
  { label: "Welcome to Switzerland", href: "/living/welcome", group: "Living Guide" },
  { label: "Housing & Real Estate", href: "/living/housing", group: "Living Guide" },
  { label: "Healthcare", href: "/living/healthcare", group: "Living Guide" },
  { label: "Education & Schools", href: "/living/education", group: "Living Guide" },
  { label: "Banking & Finance", href: "/living/banking", group: "Living Guide" },
  { label: "Transport", href: "/living/transport", group: "Living Guide" },
  { label: "Legal & Immigration", href: "/living/legal", group: "Living Guide" },
  { label: "Language Learning", href: "/living/language", group: "Living Guide" },
  { label: "Food & Dining", href: "/food", group: "Food & Dining" },
  { label: "Indian Restaurants", href: "/food/restaurants", group: "Food & Dining" },
  { label: "Grocery & Spices", href: "/food/grocery", group: "Food & Dining" },
  { label: "Catering & Home Chefs", href: "/food/catering", group: "Food & Dining" },
  { label: "Cooking Classes", href: "/food/cooking", group: "Food & Dining" },
  { label: "Business", href: "/business", group: "Business" },
  { label: "Networking & Chambers", href: "/business/networking", group: "Business" },
  { label: "Jobs & Recruitment", href: "/business/jobs", group: "Business" },
  { label: "Startups", href: "/business/startups", group: "Business" },
  { label: "Professional Services", href: "/business/services", group: "Business" },
  { label: "Culture", href: "/culture", group: "Culture" },
  { label: "Festivals & Events", href: "/culture/festivals", group: "Culture" },
  { label: "Music & Dance", href: "/culture/arts", group: "Culture" },
  { label: "Fashion & Boutiques", href: "/culture/fashion", group: "Culture" },
  { label: "Cinema & Film", href: "/culture/cinema", group: "Culture" },
  { label: "City Guides", href: "/cities", group: "Cities" },
  { label: "Zurich Guide", href: "/cities/zurich", group: "Cities" },
  { label: "Geneva Guide", href: "/cities/geneva", group: "Cities" },
  { label: "Basel Guide", href: "/cities/basel", group: "Cities" },
  { label: "Bern Guide", href: "/cities/bern", group: "Cities" },
  { label: "Lausanne Guide", href: "/cities/lausanne", group: "Cities" },
  { label: "Events Calendar", href: "/events", group: "Events" },
  { label: "Resources", href: "/resources", group: "Resources" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_PAGES.slice(0, 8);
    return ALL_PAGES.filter(
      (p) =>
        p.label.toLowerCase().includes(q) ||
        p.group.toLowerCase().includes(q) ||
        p.href.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [query]);

  useEffect(() => { setActiveIdx(0); }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && results[activeIdx]) {
        router.push(results[activeIdx].href);
        onClose();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, results, activeIdx, router, onClose]);

  if (!open) return null;

  const navigate = (href: string) => { router.push(href); onClose(); };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        display: "flex", flexDirection: "column", alignItems: "center",
        paddingTop: "min(12vh, 96px)", padding: "min(12vh,96px) 16px 16px",
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          background: "rgba(3,8,18,0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-label="Search"
        aria-modal
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", zIndex: 1,
          width: "100%", maxWidth: 560,
          background: "var(--surface)",
          border: "1px solid var(--border-2)",
          borderRadius: 20,
          boxShadow: "0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.15)",
          overflow: "hidden",
          animation: "searchIn 0.18s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <style>{`
          @keyframes searchIn { from { opacity:0; transform:translateY(-12px) scale(0.98); } to { opacity:1; transform:none; } }
          .search-result:hover, .search-result.active {
            background: var(--sf-bg) !important;
          }
          .search-result:hover .sr-arrow, .search-result.active .sr-arrow { opacity: 1 !important; }
        `}</style>

        {/* Input row */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "14px 18px",
          borderBottom: "1px solid var(--border)",
        }}>
          <Search style={{ width: 18, height: 18, flexShrink: 0, color: "var(--sf-hi)" }} aria-hidden />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, guides, restaurants…"
            aria-label="Search"
            style={{
              flex: 1, background: "none", border: "none", outline: "none",
              fontSize: 15, fontWeight: 500, color: "var(--text)",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            style={{
              width: 28, height: 28, borderRadius: 8, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "var(--surface-2)", border: "none", cursor: "pointer",
              color: "var(--text-3)",
            }}
          >
            <X style={{ width: 14, height: 14 }} />
          </button>
        </div>

        {/* Results */}
        <ul role="listbox" aria-label="Search results" style={{ margin: 0, padding: "6px", listStyle: "none", maxHeight: 380, overflowY: "auto" }}>
          {results.length === 0 ? (
            <li style={{ padding: "20px 14px", textAlign: "center", fontSize: 13, color: "var(--text-3)" }}>
              No pages found for &ldquo;{query}&rdquo;
            </li>
          ) : results.map((r, i) => (
            <li key={r.href}>
              <button
                role="option"
                aria-selected={i === activeIdx}
                onClick={() => navigate(r.href)}
                className={`search-result${i === activeIdx ? " active" : ""}`}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  gap: 12, padding: "10px 12px", borderRadius: 12,
                  background: i === activeIdx ? "var(--sf-bg)" : "transparent",
                  border: "none", cursor: "pointer", textAlign: "left",
                  transition: "background 0.12s",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--text)", marginBottom: 1 }}>{r.label}</div>
                  <div style={{ fontSize: 11, color: "var(--text-3)" }}>{r.group}</div>
                </div>
                <ArrowRight
                  className="sr-arrow"
                  style={{ width: 14, height: 14, flexShrink: 0, color: "var(--sf-hi)", opacity: i === activeIdx ? 1 : 0, transition: "opacity 0.12s" }}
                  aria-hidden
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Footer hint */}
        <div style={{
          padding: "8px 18px", borderTop: "1px solid var(--border)",
          display: "flex", gap: 16, alignItems: "center",
        }}>
          {[["↑↓", "navigate"], ["↵", "go"], ["esc", "close"]].map(([key, action]) => (
            <span key={key} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--text-3)" }}>
              <kbd style={{ padding: "2px 6px", borderRadius: 5, background: "var(--surface-2)", border: "1px solid var(--border-2)", fontSize: 10, fontFamily: "monospace", color: "var(--text-2)" }}>{key}</kbd>
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
