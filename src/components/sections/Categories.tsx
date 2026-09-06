"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

const CAT_META: Record<string, {
  emoji: string;
  accent: string;
  glow: string;
  topBar: string;
  stat: string;
  statLabel: string;
}> = {
  "Community": {
    emoji: "🤝",
    accent: "#CEB07A",
    glow: "rgba(201,169,110,0.15)",
    topBar: "linear-gradient(90deg, #CEB07A, #D4906A)",
    stat: "150+", statLabel: "associations",
  },
  "Living in Switzerland": {
    emoji: "🏠",
    accent: "#70BC92",
    glow: "rgba(80,160,110,0.15)",
    topBar: "linear-gradient(90deg, #70BC92, #4E9870)",
    stat: "50+", statLabel: "guides",
  },
  "Food & Dining": {
    emoji: "🍛",
    accent: "#D4906A",
    glow: "rgba(212,144,106,0.15)",
    topBar: "linear-gradient(90deg, #D4906A, #C87040)",
    stat: "200+", statLabel: "listings",
  },
  "Spiritual & Wellness": {
    emoji: "🪔",
    accent: "#C090D0",
    glow: "rgba(192,144,208,0.15)",
    topBar: "linear-gradient(90deg, #C090D0, #A070B8)",
    stat: "40+", statLabel: "centres",
  },
  "Business & Career": {
    emoji: "💼",
    accent: "#80B0D8",
    glow: "rgba(128,176,216,0.15)",
    topBar: "linear-gradient(90deg, #80B0D8, #5A8AB8)",
    stat: "300+", statLabel: "opportunities",
  },
  "Culture & Arts": {
    emoji: "🎭",
    accent: "#F0A060",
    glow: "rgba(240,160,96,0.15)",
    topBar: "linear-gradient(90deg, #F0A060, #D07030)",
    stat: "100+", statLabel: "events/year",
  },
};

const fallback = {
  emoji: "✨", accent: "#CEB07A", glow: "rgba(201,169,110,0.12)",
  topBar: "linear-gradient(90deg, #CEB07A, #B89060)",
  stat: "—", statLabel: "listings",
};

export default function Categories() {
  const cats = FEATURED_CATEGORIES.slice(0, 6);

  return (
    <section id="categories" style={{ background: "var(--base)", padding: "96px 0 80px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, gap: 24, flexWrap: "wrap" }}>
          <AnimateIn from="left">
            <span className="tag" style={{ marginBottom: 14, display: "inline-flex" }}>What We Cover</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.08,
              color: "var(--text)", margin: 0,
            }}>
              Everything for<br />
              <em className="gradient-text" style={{ fontStyle: "italic" }}>Swiss Indians</em>
            </h2>
          </AnimateIn>
          <AnimateIn from="right">
            <Link href="/events" className="btn btn-outline btn-sm">
              Browse All <ArrowRight style={{ width: 12, height: 12 }} />
            </Link>
          </AnimateIn>
        </div>

        {/* ── Card grid — 3 columns, 2 rows ── */}
        <div className="cat-grid">
          {cats.map((cat, i) => {
            const m = CAT_META[cat.title] ?? fallback;
            return (
              <AnimateIn
                key={cat.id}
                from={i < 3 ? "up" : "up"}
                delay={i * 70}
                threshold={0.06}
              >
                <Link
                  href={cat.href}
                  className="cat-card"
                  style={{ "--cat-glow": m.glow, "--cat-accent": m.accent } as React.CSSProperties}
                >
                  {/* Coloured top bar */}
                  <div className="cat-bar" style={{ background: m.topBar }} />

                  {/* Top row: emoji + stat badge */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                    <span style={{
                      fontSize: "2.4rem", lineHeight: 1,
                      filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
                      transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                    }} className="cat-emoji">
                      {m.emoji}
                    </span>
                    <div style={{
                      display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1,
                    }}>
                      <span style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.5rem", fontWeight: 800, lineHeight: 1,
                        color: m.accent,
                      }}>
                        {m.stat}
                      </span>
                      <span style={{
                        fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                        textTransform: "uppercase", color: "var(--text-3)",
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      }}>
                        {m.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.15rem, 1.8vw, 1.35rem)", fontWeight: 700,
                    color: "var(--text)", marginBottom: 10, lineHeight: 1.2,
                  }}>
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: 13, color: "var(--text-2)", lineHeight: 1.65,
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    flex: 1,
                    display: "-webkit-box", WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                  }}>
                    {cat.description}
                  </p>

                  {/* CTA row */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 6,
                    marginTop: 20, paddingTop: 16,
                    borderTop: "1px solid var(--border)",
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    color: m.accent,
                    transition: "gap 0.2s",
                  }} className="cat-cta">
                    Explore
                    <ArrowRight style={{ width: 12, height: 12, transition: "transform 0.22s" }} className="cat-arrow" />
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        {/* Bottom strip — stats */}
        <AnimateIn from="up" delay={200} threshold={0.05}>
          <div className="cat-strip">
            {[
              { v: "~24,500", l: "Indians in Switzerland" },
              { v: "26", l: "Cantons covered" },
              { v: "500+", l: "Businesses listed" },
              { v: "150+", l: "Community groups" },
            ].map((s) => (
              <div key={s.l} className="cat-strip-stat">
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800,
                  color: "var(--in-hi)", lineHeight: 1,
                }}>
                  {s.v}
                </span>
                <span style={{
                  fontSize: 11, color: "var(--text-3)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontWeight: 600,
                }}>
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      <style>{`
        /* ── Grid ── */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }

        /* ── Card ── */
        .cat-card {
          display: flex; flex-direction: column;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 28px 26px 24px;
          text-decoration: none;
          position: relative; overflow: hidden;
          transition:
            transform 0.3s cubic-bezier(0.16,1,0.3,1),
            box-shadow 0.3s,
            border-color 0.25s;
          min-height: 240px;
        }
        .cat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 56px var(--cat-glow, rgba(201,169,110,0.14)),
                      0 4px 16px rgba(0,0,0,0.06);
          border-color: var(--border-2);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .cat-card:hover {
            box-shadow: 0 20px 56px var(--cat-glow, rgba(201,169,110,0.14)),
                        0 4px 16px rgba(0,0,0,0.3);
          }
        }
        :root[data-theme="dark"] .cat-card:hover {
          box-shadow: 0 20px 56px var(--cat-glow, rgba(201,169,110,0.14)),
                      0 4px 16px rgba(0,0,0,0.3);
        }

        /* Coloured top accent bar */
        .cat-bar {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; border-radius: 24px 24px 0 0;
          opacity: 0.85;
          transition: opacity 0.25s, height 0.25s;
        }
        .cat-card:hover .cat-bar { opacity: 1; height: 4px; }

        /* Emoji lift on hover */
        .cat-card:hover .cat-emoji { transform: scale(1.12) rotate(-6deg) translateY(-2px); }

        /* Arrow nudge */
        .cat-card:hover .cat-arrow { transform: translateX(4px); }
        .cat-card:hover .cat-cta { gap: 9px; }

        /* ── Bottom stat strip ── */
        .cat-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px 32px;
          margin-top: 16px;
        }
        .cat-strip-stat {
          display: flex; flex-direction: column; gap: 4px;
          align-items: center; text-align: center;
          border-right: 1px solid var(--border);
          padding: 0 20px;
        }
        .cat-strip-stat:first-child { padding-left: 0; align-items: flex-start; text-align: left; }
        .cat-strip-stat:last-child { border-right: none; padding-right: 0; align-items: flex-end; text-align: right; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
          .cat-strip { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .cat-strip-stat { border-right: none; padding: 0; align-items: center !important; text-align: center !important; }
          .cat-strip-stat:nth-child(odd) { border-right: 1px solid var(--border); padding-right: 20px; align-items: flex-end !important; text-align: right !important; }
        }
        @media (max-width: 560px) {
          .cat-grid { grid-template-columns: 1fr; }
          .cat-strip { grid-template-columns: repeat(2, 1fr); }
          .cat-strip-stat:nth-child(odd) { border-right: 1px solid var(--border); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cat-card { transition: none; }
        }
      `}</style>
    </section>
  );
}
