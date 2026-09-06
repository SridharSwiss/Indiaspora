"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

const CAT_META: Record<string, {
  emoji: string;
  accent: string;
  accentRgb: string;
  topBar: string;
  stat: string;
  statLabel: string;
  orb: string;
}> = {
  "Community": {
    emoji: "🤝",
    accent: "#CEB07A", accentRgb: "201,169,110",
    topBar: "linear-gradient(90deg, #CEB07A 0%, #E8C88A 50%, #D4906A 100%)",
    stat: "150+", statLabel: "associations",
    orb: "radial-gradient(ellipse 80% 70% at 110% -10%, rgba(201,169,110,0.22) 0%, transparent 65%)",
  },
  "Living in Switzerland": {
    emoji: "🏠",
    accent: "#70BC92", accentRgb: "80,160,110",
    topBar: "linear-gradient(90deg, #70BC92 0%, #90D0A8 50%, #4E9870 100%)",
    stat: "50+", statLabel: "guides",
    orb: "radial-gradient(ellipse 80% 70% at 110% -10%, rgba(80,160,110,0.22) 0%, transparent 65%)",
  },
  "Food & Dining": {
    emoji: "🍛",
    accent: "#D4906A", accentRgb: "212,144,106",
    topBar: "linear-gradient(90deg, #D4906A 0%, #ECA878 50%, #C87040 100%)",
    stat: "200+", statLabel: "listings",
    orb: "radial-gradient(ellipse 80% 70% at 110% -10%, rgba(212,144,106,0.22) 0%, transparent 65%)",
  },
  "Spiritual & Wellness": {
    emoji: "🪔",
    accent: "#C090D0", accentRgb: "192,144,208",
    topBar: "linear-gradient(90deg, #C090D0 0%, #D8A8E8 50%, #A070B8 100%)",
    stat: "40+", statLabel: "centres",
    orb: "radial-gradient(ellipse 80% 70% at 110% -10%, rgba(192,144,208,0.22) 0%, transparent 65%)",
  },
  "Business & Career": {
    emoji: "💼",
    accent: "#80B0D8", accentRgb: "128,176,216",
    topBar: "linear-gradient(90deg, #80B0D8 0%, #A0C8E8 50%, #5A8AB8 100%)",
    stat: "300+", statLabel: "opportunities",
    orb: "radial-gradient(ellipse 80% 70% at 110% -10%, rgba(128,176,216,0.22) 0%, transparent 65%)",
  },
  "Culture & Arts": {
    emoji: "🎭",
    accent: "#F0A060", accentRgb: "240,160,96",
    topBar: "linear-gradient(90deg, #F0A060 0%, #F8B870 50%, #D07030 100%)",
    stat: "100+", statLabel: "events/year",
    orb: "radial-gradient(ellipse 80% 70% at 110% -10%, rgba(240,160,96,0.22) 0%, transparent 65%)",
  },
};

const fallback = {
  emoji: "✨", accent: "#CEB07A", accentRgb: "201,169,110",
  topBar: "linear-gradient(90deg, #CEB07A, #DFC090)",
  stat: "—", statLabel: "listings",
  orb: "radial-gradient(ellipse 80% 70% at 110% -10%, rgba(201,169,110,0.18) 0%, transparent 65%)",
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

        {/* ── Card grid — 3 × 2 ── */}
        <div className="cat-grid">
          {cats.map((cat, i) => {
            const m = CAT_META[cat.title] ?? fallback;
            return (
              <AnimateIn
                key={cat.id}
                from="up"
                delay={i * 85}
                threshold={0.06}
              >
                <Link
                  href={cat.href}
                  className="cat-card"
                  style={{
                    "--accent": m.accent,
                    "--accent-rgb": m.accentRgb,
                    "--orb": m.orb,
                    "--top-bar": m.topBar,
                    animationDelay: `${i * 0.9}s`,
                  } as React.CSSProperties}
                >
                  {/* Shimmer sweep overlay */}
                  <div className="cat-shimmer" aria-hidden />

                  {/* Ambient orb — breathes slowly */}
                  <div className="cat-orb" aria-hidden />

                  {/* Coloured top bar — expands on hover */}
                  <div className="cat-bar" aria-hidden />

                  {/* Top row: emoji + stat */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 22, position: "relative", zIndex: 1 }}>
                    <span className="cat-emoji" aria-hidden>{m.emoji}</span>
                    <div className="cat-stat-wrap">
                      <span className="cat-stat-num" style={{ color: m.accent }}>{m.stat}</span>
                      <span className="cat-stat-label">{m.statLabel}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="cat-title">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="cat-desc">{cat.description}</p>

                  {/* CTA */}
                  <div className="cat-cta" style={{ color: m.accent }}>
                    <span>Explore</span>
                    <span className="cat-arrow-wrap">
                      <ArrowRight style={{ width: 13, height: 13 }} className="cat-arrow-icon" />
                    </span>
                  </div>

                  {/* Border glow ring — appears on hover */}
                  <div className="cat-glow-ring" aria-hidden />
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        {/* Bottom stats strip */}
        <AnimateIn from="up" delay={300} threshold={0.05}>
          <div className="cat-strip">
            {[
              { v: "~24,500", l: "Indians in Switzerland" },
              { v: "26", l: "Cantons covered" },
              { v: "500+", l: "Businesses listed" },
              { v: "150+", l: "Community groups" },
            ].map((s, i) => (
              <div key={s.l} className="cat-strip-stat" style={{ animationDelay: `${i * 0.12}s` }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800,
                  color: "var(--in-hi)", lineHeight: 1, display: "block",
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

        /* ── Card shell ── */
        .cat-card {
          display: flex; flex-direction: column;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 28px 26px 24px;
          text-decoration: none;
          position: relative; overflow: hidden;
          min-height: 248px;
          /* Entrance is handled by AnimateIn; card sits and breathes */
          animation: cat-breathe 6s ease-in-out infinite;
        }

        /* Subtle scale-breathe ambient loop — each card offset by delay */
        @keyframes cat-breathe {
          0%,100% { box-shadow: 0 2px 12px rgba(var(--accent-rgb, 201,169,110), 0.04); }
          50%      { box-shadow: 0 6px 28px rgba(var(--accent-rgb, 201,169,110), 0.10); }
        }

        /* ── Shimmer sweep ── */
        .cat-shimmer {
          position: absolute; inset: 0; border-radius: 24px;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.045) 50%,
            transparent 80%
          );
          background-size: 200% 100%;
          background-position: -200% 0;
          pointer-events: none; z-index: 0;
          transition: background-position 0s;
          opacity: 0;
        }
        .cat-card:hover .cat-shimmer {
          opacity: 1;
          animation: shimmer-sweep 0.65s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes shimmer-sweep {
          from { background-position: -200% 0; }
          to   { background-position:  200% 0; }
        }

        /* ── Ambient orb ── */
        .cat-orb {
          position: absolute; inset: 0; border-radius: 24px;
          background: var(--orb);
          pointer-events: none; z-index: 0;
          opacity: 0.6;
          transition: opacity 0.5s, transform 0.5s cubic-bezier(0.16,1,0.3,1);
          animation: orb-drift 7s ease-in-out infinite;
        }
        @keyframes orb-drift {
          0%,100% { transform: scale(1) translate(0,0); opacity: 0.55; }
          33%      { transform: scale(1.08) translate(-2%, 2%); opacity: 0.75; }
          66%      { transform: scale(0.97) translate(2%,-1%); opacity: 0.60; }
        }
        .cat-card:hover .cat-orb {
          opacity: 1;
          transform: scale(1.12) translate(-2%, 2%);
          animation: none;
        }

        /* ── Top accent bar ── */
        .cat-bar {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; border-radius: 24px 24px 0 0;
          background: var(--top-bar);
          background-size: 200% 100%;
          opacity: 0.85;
          transition: height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s;
          animation: bar-shimmer 3s ease-in-out infinite;
          z-index: 2;
        }
        @keyframes bar-shimmer {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .cat-card:hover .cat-bar { height: 5px; opacity: 1; }

        /* ── Hover: lift + glow shadow ── */
        .cat-card {
          transition:
            transform 0.4s cubic-bezier(0.16,1,0.3,1),
            border-color 0.3s,
            box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .cat-card:hover {
          transform: translateY(-8px) scale(1.012);
          border-color: rgba(var(--accent-rgb, 201,169,110), 0.35);
          box-shadow:
            0 24px 64px rgba(var(--accent-rgb, 201,169,110), 0.16),
            0 8px 24px rgba(0,0,0,0.07),
            0 0 0 1px rgba(var(--accent-rgb, 201,169,110), 0.12);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .cat-card:hover {
            box-shadow:
              0 24px 64px rgba(var(--accent-rgb, 201,169,110), 0.20),
              0 8px 24px rgba(0,0,0,0.35),
              0 0 0 1px rgba(var(--accent-rgb, 201,169,110), 0.18);
          }
        }
        :root[data-theme="dark"] .cat-card:hover {
          box-shadow:
            0 24px 64px rgba(var(--accent-rgb, 201,169,110), 0.20),
            0 8px 24px rgba(0,0,0,0.35),
            0 0 0 1px rgba(var(--accent-rgb, 201,169,110), 0.18);
        }

        /* ── Glow ring (inner border flash on hover) ── */
        .cat-glow-ring {
          position: absolute; inset: 0; border-radius: 24px;
          pointer-events: none; z-index: 3;
          box-shadow: inset 0 0 0 1px rgba(var(--accent-rgb,201,169,110), 0);
          transition: box-shadow 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cat-card:hover .cat-glow-ring {
          box-shadow: inset 0 0 0 1.5px rgba(var(--accent-rgb,201,169,110), 0.40);
        }

        /* ── Emoji ── */
        .cat-emoji {
          font-size: 2.6rem; line-height: 1; display: block;
          position: relative; z-index: 1;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.10));
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), filter 0.3s;
          will-change: transform;
        }
        .cat-card:hover .cat-emoji {
          transform: scale(1.18) rotate(-8deg) translateY(-3px);
          filter: drop-shadow(0 6px 16px rgba(var(--accent-rgb,201,169,110),0.35));
        }

        /* ── Stat ── */
        .cat-stat-wrap {
          display: flex; flex-direction: column; align-items: flex-end; gap: 2px;
          position: relative; z-index: 1;
        }
        .cat-stat-num {
          fontFamily: "'Playfair Display', Georgia, serif";
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.55rem; font-weight: 800; line-height: 1;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cat-card:hover .cat-stat-num { transform: scale(1.08); }
        .cat-stat-label {
          font-size: 9px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--text-3);
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        /* ── Text ── */
        .cat-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.1rem, 1.7vw, 1.3rem); font-weight: 700;
          color: var(--text); margin-bottom: 10px; line-height: 1.2;
          position: relative; z-index: 1;
          transition: color 0.25s;
        }
        .cat-card:hover .cat-title { color: var(--accent, var(--in-hi)); }
        .cat-desc {
          font-size: 13px; color: var(--text-2); line-height: 1.65;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          flex: 1; position: relative; z-index: 1;
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        /* ── CTA row ── */
        .cat-cta {
          display: flex; align-items: center; gap: 7px;
          margin-top: 20px; padding-top: 16px;
          border-top: 1px solid var(--border);
          font-size: 11px; font-weight: 700; letter-spacing: 0.10em;
          text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          position: relative; z-index: 1;
          transition: gap 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s;
        }
        .cat-card:hover .cat-cta { gap: 11px; border-color: rgba(var(--accent-rgb,201,169,110),0.25); }
        .cat-arrow-wrap {
          display: inline-flex; align-items: center; justify-content: center;
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(var(--accent-rgb,201,169,110), 0.10);
          transition: background 0.3s, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cat-card:hover .cat-arrow-wrap {
          background: rgba(var(--accent-rgb,201,169,110), 0.22);
          transform: rotate(-45deg) scale(1.1);
        }
        .cat-arrow-icon {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .cat-card:hover .cat-arrow-icon {
          transform: rotate(45deg);
        }

        /* ── Stats strip ── */
        .cat-strip {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 0;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px 32px;
          margin-top: 16px;
          transition: box-shadow 0.3s;
        }
        .cat-strip:hover {
          box-shadow: 0 8px 32px rgba(201,169,110,0.08);
          border-color: var(--border-2);
        }
        .cat-strip-stat {
          display: flex; flex-direction: column; gap: 4px;
          align-items: center; text-align: center;
          border-right: 1px solid var(--border);
          padding: 0 20px;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .cat-strip-stat:hover { transform: translateY(-2px); }
        .cat-strip-stat:first-child { padding-left: 0; align-items: flex-start; text-align: left; }
        .cat-strip-stat:last-child  { border-right: none; padding-right: 0; align-items: flex-end; text-align: right; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .cat-grid { grid-template-columns: repeat(2,1fr); }
          .cat-strip { grid-template-columns: repeat(2,1fr); gap: 16px; }
          .cat-strip-stat { border-right: none; padding: 0; align-items: center !important; text-align: center !important; }
          .cat-strip-stat:nth-child(odd) { border-right: 1px solid var(--border); padding-right: 20px; align-items: flex-end !important; text-align: right !important; }
        }
        @media (max-width: 560px) {
          .cat-grid { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cat-card, .cat-orb, .cat-bar { animation: none !important; }
          .cat-shimmer { display: none; }
          .cat-card:hover { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  );
}
