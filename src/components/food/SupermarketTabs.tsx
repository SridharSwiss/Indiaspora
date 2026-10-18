"use client";

import React, { useState } from "react";
import Link from "next/link";

// ── Types ────────────────────────────────────────────────────────────────────
interface Chain { name: string; emoji: string; tagline: string; tips: string[]; good: string[]; avoid: string }
interface Substitute { need: string; find: string; note: string }
interface DairyItem { german: string; french: string; what: string; indian: string }
interface FlourItem { swiss: string; what: string; indian: string }
interface SpiceItem { german: string; french: string; english: string; indian: string }
interface VegItem { german: string; french: string; english: string; indian: string }
interface LabelItem { label: string; meaning: string; tip: string }
interface HackCategory { category: string; icon: string; tips: string[] }
interface QuickRef { label: string; answer: string; sub: string }

interface Props {
  chains: Chain[];
  substitutes: Substitute[];
  dairy: DairyItem[];
  flours: FlourItem[];
  spices: SpiceItem[];
  vegetables: VegItem[];
  labels: LabelItem[];
  hacks: HackCategory[];
  quickRef: QuickRef[];
}

const TABS = [
  { id: "chains",      label: "Stores",      emoji: "🏪" },
  { id: "substitutes", label: "Substitutes", emoji: "🔄" },
  { id: "dairy",       label: "Dairy",       emoji: "🥛" },
  { id: "flour",       label: "Flour",       emoji: "🌾" },
  { id: "spices",      label: "Spices",      emoji: "🌶" },
  { id: "vegetables",  label: "Vegetables",  emoji: "🥦" },
  { id: "labels",      label: "Labels",      emoji: "🏷" },
  { id: "hacks",       label: "Hacks",       emoji: "💡" },
  { id: "quickref",    label: "Quick Ref",   emoji: "⚡" },
] as const;

type TabId = typeof TABS[number]["id"];

function Tag({ children, color = "green" }: { children: React.ReactNode; color?: string }) {
  const cls: Record<string, string> = {
    green: "bg-green-500/15 text-green-400",
    red:   "bg-red-500/15 text-red-400",
    amber: "bg-amber-500/15 text-amber-400",
  };
  return <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${cls[color] ?? cls.green}`}>{children}</span>;
}

export default function SupermarketTabs({ chains, substitutes, dairy, flours, spices, vegetables, labels, hacks, quickRef }: Props) {
  const [active, setActive] = useState<TabId>("chains");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* ── Tab bar ─────────────────────────────────────────────────────── */}
      <div
        className="sticky top-[64px] z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pb-3 pt-3"
        style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar" style={{ scrollbarWidth: "none" }}>
          {TABS.map((t) => {
            const sel = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="flex items-center gap-1.5 rounded-lg whitespace-nowrap transition-all shrink-0"
                style={{
                  padding: "6px 12px",
                  fontSize: 12, fontWeight: sel ? 700 : 500,
                  background: sel ? "var(--sf)" : "var(--surface-2)",
                  color: sel ? "#fff" : "var(--text-2)",
                  border: sel ? "1px solid var(--sf)" : "1px solid var(--border)",
                }}
              >
                <span className="text-sm">{t.emoji}</span>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Tab content ─────────────────────────────────────────────────── */}
      <div className="mt-8">

        {/* Stores */}
        {active === "chains" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chains.map((c) => (
              <div key={c.name} className="glass rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.emoji}</span>
                  <div>
                    <h3 className="font-bold text-base" style={{ color: "var(--text)" }}>{c.name}</h3>
                    <p className="text-xs" style={{ color: "var(--text-3)" }}>{c.tagline}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1 text-green-400">✓ Good for:</p>
                  <p className="text-xs" style={{ color: "var(--text-2)" }}>{c.good.join(" · ")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1 text-amber-400">⚠ Note:</p>
                  <p className="text-xs" style={{ color: "var(--text-2)" }}>{c.avoid}</p>
                </div>
                <ul className="space-y-1">
                  {c.tips.map((t, i) => (
                    <li key={i} className="text-xs flex gap-2" style={{ color: "var(--text-2)" }}>
                      <span className="shrink-0 text-amber-400">›</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Substitutes */}
        {active === "substitutes" && (
          <>
            <p className="text-sm mb-5" style={{ color: "var(--text-2)" }}>
              What you need vs. what Swiss supermarkets carry. Red = Indian store only.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {substitutes.map((s) => {
                const isIndianOnly = s.find.includes("Indian stores only");
                return (
                  <div key={s.need} className="glass rounded-xl p-4 flex flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{s.need}</p>
                      <Tag color={isIndianOnly ? "red" : "green"}>
                        {isIndianOnly ? "Indian store" : "Swiss supermarket"}
                      </Tag>
                    </div>
                    <p className="text-xs font-medium text-amber-400">{s.find}</p>
                    <p className="text-xs" style={{ color: "var(--text-3)" }}>{s.note}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Dairy */}
        {active === "dairy" && (
          <>
            <p className="text-sm mb-5" style={{ color: "var(--text-2)" }}>
              Swiss dairy aisles carry 40+ milk and cream variants — decoded in Indian cooking terms.
            </p>
            <div className="overflow-x-auto rounded-2xl glass">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: "var(--border-2)" }}>
                    {["German label", "French label", "What it is", "Indian cooking use"].map(h => (
                      <th key={h} className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dairy.map((d, i) => (
                    <tr key={d.german} className={i % 2 === 0 ? "" : "bg-white/[0.02]"} style={{ borderBottom: "1px solid var(--border-2)" }}>
                      <td className="p-3 font-medium text-xs" style={{ color: "var(--text)" }}>{d.german}</td>
                      <td className="p-3 text-xs" style={{ color: "var(--text-2)" }}>{d.french}</td>
                      <td className="p-3 text-xs" style={{ color: "var(--text-2)" }}>{d.what}</td>
                      <td className="p-3 text-xs" style={{ color: "var(--sf-hi)" }}>{d.indian}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Flour */}
        {active === "flour" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {flours.map((f) => (
              <div key={f.swiss} className="glass rounded-xl p-4 space-y-1">
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{f.swiss}</p>
                <p className="text-xs" style={{ color: "var(--text-2)" }}>{f.what}</p>
                <p className="text-xs font-medium" style={{ color: "var(--sf-hi)" }}>→ {f.indian}</p>
              </div>
            ))}
          </div>
        )}

        {/* Spices */}
        {active === "spices" && (
          <>
            <p className="text-sm mb-5" style={{ color: "var(--text-2)" }}>
              German and French names on Swiss packaging — decoded to Indian names with availability notes.
            </p>
            <div className="overflow-x-auto rounded-2xl glass">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: "var(--border-2)" }}>
                    {["German", "French", "English", "Indian name & notes"].map(h => (
                      <th key={h} className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {spices.map((s, i) => (
                    <tr key={s.german} className={i % 2 === 0 ? "" : "bg-white/[0.02]"} style={{ borderBottom: "1px solid var(--border-2)" }}>
                      <td className="p-3 font-medium text-xs" style={{ color: "var(--text)" }}>{s.german}</td>
                      <td className="p-3 text-xs" style={{ color: "var(--text-2)" }}>{s.french}</td>
                      <td className="p-3 text-xs" style={{ color: "var(--text-2)" }}>{s.english}</td>
                      <td className="p-3 text-xs" style={{ color: "var(--sf-hi)" }}>{s.indian}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Vegetables */}
        {active === "vegetables" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {vegetables.map((v) => (
              <div key={v.german} className="glass rounded-xl p-3 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{v.english}</p>
                  <p className="text-xs" style={{ color: "var(--text-3)" }}>/ {v.german}</p>
                </div>
                <p className="text-xs" style={{ color: "var(--text-3)" }}>{v.french}</p>
                <p className="text-xs font-medium" style={{ color: "var(--sf-hi)" }}>→ {v.indian}</p>
              </div>
            ))}
          </div>
        )}

        {/* Labels */}
        {active === "labels" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {labels.map((l) => (
              <div key={l.label} className="glass rounded-xl p-4 space-y-1">
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{l.label}</p>
                <p className="text-xs" style={{ color: "var(--text-2)" }}>{l.meaning}</p>
                <p className="text-xs italic" style={{ color: "var(--sf-hi)" }}>💡 {l.tip}</p>
              </div>
            ))}
          </div>
        )}

        {/* Hacks */}
        {active === "hacks" && (
          <div className="space-y-4">
            {hacks.map((h) => (
              <div key={h.category} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{h.icon}</span>
                  <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{h.category}</h3>
                </div>
                <ul className="space-y-2">
                  {h.tips.map((t, i) => (
                    <li key={i} className="text-sm flex gap-2" style={{ color: "var(--text-2)" }}>
                      <span className="shrink-0 text-amber-400 font-bold">›</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Quick Ref */}
        {active === "quickref" && (
          <>
            <p className="text-sm mb-5" style={{ color: "var(--text-2)" }}>Most-asked questions answered at a glance.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {quickRef.map((r) => (
                <div key={r.label} className="glass rounded-xl p-4 text-center space-y-1">
                  <p className="text-xs font-medium" style={{ color: "var(--text-3)" }}>{r.label}</p>
                  <p className="text-base font-bold" style={{ color: "var(--sf-hi)" }}>{r.answer}</p>
                  <p className="text-xs" style={{ color: "var(--text-2)" }}>{r.sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 glass rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>Need Indian grocery stores?</p>
                <p className="text-xs" style={{ color: "var(--text-2)" }}>Find physical stores and online delivery options across Switzerland.</p>
              </div>
              <Link
                href="/food/grocery"
                className="shrink-0 text-xs font-bold px-4 py-2 rounded-lg"
                style={{ background: "var(--sf)", color: "#fff", textDecoration: "none" }}
              >
                Indian Grocery Stores →
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
