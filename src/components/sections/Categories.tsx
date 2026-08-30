"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data";

const ACCENT_COLORS: Record<string, string> = {
  "Community":  "var(--in)",
  "Living":     "var(--em)",
  "Food":       "var(--mg)",
  "Culture":    "#8B5CF6",
  "Business":   "#0EA5E9",
  "Cities":     "var(--sw)",
};

export default function Categories() {
  const [hero, ...rest] = FEATURED_CATEGORIES;
  const accent = (title: string) => ACCENT_COLORS[title] ?? "var(--in)";

  return (
    <section id="categories" style={{ background: "var(--bg)", padding: "96px 0 80px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ width: 32, height: 1, background: "var(--in)", display: "inline-block" }} aria-hidden />
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--in)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                What We Cover
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--text)", margin: 0 }}>
              Everything for<br />
              <em style={{ fontStyle: "italic", color: "var(--in)" }}>Swiss Indians</em>
            </h2>
          </div>
          <Link
            href="/events"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 22px",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              color: "var(--text-2)",
              border: "1px solid var(--border-2)",
              background: "transparent",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            Browse All
            <ArrowRight style={{ width: 12, height: 12 }} />
          </Link>
        </div>

        {/* Editorial grid: 1 hero left + 2×2 right on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: 12,
          }}
          className="categories-grid"
        >
          {/* Hero card — spans 1 col, 2 rows */}
          {hero && (
            <Link
              href={hero.href}
              className="categories-hero"
              style={{
                gridColumn: "1 / 2",
                gridRow: "1 / 3",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                minHeight: 420,
                padding: 32,
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                transition: "border-color 0.25s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = accent(hero.title);
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${accent(hero.title)}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Number watermark */}
              <span aria-hidden style={{
                position: "absolute", top: 24, right: 24,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(4rem, 8vw, 7rem)", fontWeight: 700,
                lineHeight: 1, color: accent(hero.title), opacity: 0.08,
                pointerEvents: "none",
              }}>01</span>

              <div style={{ position: "relative" }}>
                <span style={{
                  display: "inline-block", marginBottom: 12,
                  padding: "4px 10px",
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  color: accent(hero.title),
                  border: `1px solid ${accent(hero.title)}`,
                  opacity: 0.9,
                }}>
                  {hero.count}
                </span>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700,
                  color: "var(--text)", marginBottom: 12, lineHeight: 1.15,
                }}>
                  {hero.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
                  {hero.description}
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  color: accent(hero.title),
                }}>
                  Explore <ArrowRight style={{ width: 12, height: 12 }} />
                </div>
              </div>
            </Link>
          )}

          {/* Remaining cards — 2×2 on right */}
          {rest.slice(0, 4).map((cat, i) => (
            <Link
              key={cat.id}
              href={cat.href}
              style={{
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                padding: "24px 28px",
                position: "relative", overflow: "hidden",
                textDecoration: "none",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                transition: "border-color 0.25s, box-shadow 0.3s, background 0.25s",
                minHeight: 190,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = accent(cat.title);
                el.style.background = "var(--surface-2)";
                el.style.boxShadow = `0 0 0 1px ${accent(cat.title)}`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.background = "var(--surface)";
                el.style.boxShadow = "none";
              }}
            >
              <span aria-hidden style={{
                position: "absolute", bottom: 12, right: 16,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "3.5rem", fontWeight: 700, lineHeight: 1,
                color: accent(cat.title), opacity: 0.07,
                pointerEvents: "none",
              }}>
                {String(i + 2).padStart(2, "0")}
              </span>
              <div>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  color: accent(cat.title),
                }}>
                  {cat.count}
                </span>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.2rem", fontWeight: 700,
                  color: "var(--text)", marginTop: 6, marginBottom: 8,
                }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.65 }}>
                  {cat.description}
                </p>
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: 6, marginTop: 16,
                fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                color: "var(--text-3)",
              }}>
                View All <ArrowRight style={{ width: 10, height: 10 }} />
              </div>
            </Link>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .categories-grid {
              grid-template-columns: 1fr 1fr !important;
              grid-template-rows: auto !important;
            }
            .categories-hero {
              grid-column: 1 / -1 !important;
              grid-row: auto !important;
              min-height: 280px !important;
            }
          }
          @media (max-width: 480px) {
            .categories-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
