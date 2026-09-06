"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import SeekAdviceForm from "@/components/ui/SeekAdviceForm";
import { ExternalLink, TrendingUp, Shield, Lightbulb, AlertTriangle, ChevronRight } from "lucide-react";

const TABS = [
  { id: "pillar1", label: "🏛️ Pillar 1", sublabel: "State (AHV/OASI)" },
  { id: "pillar2", label: "🏢 Pillar 2", sublabel: "Occupational (BVG)" },
  { id: "pillar3", label: "💡 Pillar 3", sublabel: "Private Savings" },
];

const GOLD = "rgba(201,169,110,";
const ACCENT = "#CEB07A";

function SectionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`card ${className}`} style={{ padding: "28px 32px", borderRadius: 20 }}>
      {children}
    </div>
  );
}

function InfoRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <tr style={{ borderBottom: "1px solid var(--border)" }}>
      <td style={{ padding: "13px 16px", fontSize: 13, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{label}</td>
      <td style={{
        padding: "13px 16px", fontSize: 13, fontWeight: 700,
        color: highlight ? ACCENT : "var(--text)",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}>{value}</td>
    </tr>
  );
}

function Callout({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: `${GOLD}0.07)`,
      border: `1px solid ${GOLD}0.22)`,
      borderLeft: `3px solid ${ACCENT}`,
      borderRadius: 14, padding: "18px 22px", marginTop: 20,
      display: "flex", gap: 14, alignItems: "flex-start",
    }}>
      <div style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
        <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.65, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{children}</div>
      </div>
    </div>
  );
}

function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "rgba(112,188,146,0.08)", border: "1px solid rgba(112,188,146,0.24)",
      borderLeft: "3px solid #70BC92", borderRadius: 14, padding: "16px 20px", marginTop: 16,
      fontSize: 13, color: "var(--text-2)", lineHeight: 1.65,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    }}>
      <span style={{ fontWeight: 700, color: "#70BC92" }}>Pro Tip: </span>{children}
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="card" style={{
      textAlign: "center", padding: "24px 20px",
      border: `1px solid ${GOLD}0.18)`,
    }}>
      <div style={{
        fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800,
        color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif",
        marginBottom: 8,
      }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{label}</div>
    </div>
  );
}

function Pillar1() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            What is it?
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 14, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Pillar 1 is the state-run <strong style={{ color: "var(--text)" }}>Old-Age and Survivors&apos; Insurance (OASI/AHV)</strong> — the foundation of the Swiss pension system, designed to cover essential living costs in retirement.
          </p>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {[
              ["System", "Pay-as-you-go. Today's workers fund today's retirees."],
              ["Goal", "Secure basic needs in retirement."],
              ["Principle", "Social solidarity — high earners contribute on their full salary."],
              ["Mandatory", "Yes, for almost everyone living or working in Switzerland."],
            ].map(([k, v]) => (
              <li key={k} style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <strong style={{ color: "var(--text)" }}>{k}:</strong> {v}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Contributions
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            A percentage of your gross salary with <strong style={{ color: "var(--text)" }}>no upper cap</strong> — a key difference from many other countries.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["Total Rate (OASI/DI/IC)", "10.6%", true],
              ["Employee Share", "5.3% (deducted from pay)", false],
              ["Employer Share", "5.3% (paid on your behalf)", false],
              ["Tax Treatment", "Contributions are fully deductible", false],
            ].map(([k, v, hi]) => (
              <div key={String(k)} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 14px", borderRadius: 10,
                background: hi ? `${GOLD}0.10)` : "var(--surface-2)",
                border: `1px solid ${hi ? `${GOLD}0.22)` : "var(--border)"}`,
              }}>
                <span style={{ fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{String(k)}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: hi ? ACCENT : "var(--text)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{String(v)}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Retirement Age &amp; Benefits
          </h3>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {[
              ["Full Pension", "Requires a complete contribution history (44 years for men). Each missing year = ~2.3% permanent reduction."],
              ["Men (from 2025)", "Reference age: 65 years."],
              ["Women (transitional)", "Rising from 64 → 65. Born 1961: 64 years & 3 months."],
              ["Early withdrawal", "1–2 years early; 6.8% lifelong reduction per year."],
              ["Deferral", "Up to 5 years for a higher lifetime pension."],
            ].map(([k, v]) => (
              <li key={k} style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <strong style={{ color: "var(--text)" }}>{k}:</strong> {v}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      {/* Key Figures Table */}
      <SectionCard>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 4, marginTop: 0 }}>
          Key Figures (2025)
        </h3>
        <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 16, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Annual CHF amounts — individual full pension
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: `${GOLD}0.12)` }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: ACCENT, textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", borderBottom: `1px solid ${GOLD}0.18)` }}>Parameter</th>
                <th style={{ padding: "12px 16px", textAlign: "right", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: ACCENT, textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", borderBottom: `1px solid ${GOLD}0.18)` }}>CHF / Year</th>
              </tr>
            </thead>
            <tbody>
              <InfoRow label="Minimum Full Pension" value="15,060" />
              <InfoRow label="Maximum Full Pension" value="30,240" highlight />
              <InfoRow label="Average Income Required for Maximum" value="~90,720" />
              <InfoRow label="Married Couple Cap (150% of max)" value="45,360" highlight />
            </tbody>
          </table>
        </div>
        <Callout icon={<AlertTriangle size={16} />} title="The Marriage Penalty">
          A married couple&apos;s combined pension is capped at 150% of the maximum individual pension (CHF 45,360). If both spouses each earn the maximum, their combined benefit is reduced from CHF 60,480 to CHF 45,360 — a CHF 15,120 annual reduction.
        </Callout>
      </SectionCard>

      {/* Stat row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
        <StatCard value="10.6%" label="Total AHV/IV/EO rate on gross salary" />
        <StatCard value="44 yrs" label="Contribution years for a full male pension" />
        <StatCard value="6.8%" label="Annual reduction for early withdrawal" />
        <StatCard value="CHF 30,240" label="Maximum individual pension (2025)" />
      </div>

      {/* CTA */}
      <SectionCard>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 10, marginTop: 0 }}>
          Check Your Pillar 1 Status
        </h3>
        <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.65, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Request an Individual Account (IA) statement to identify any contribution gaps and get an official pension projection.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {[
            ["OASI Information Centre", "https://www.ahv-iv.ch/en/Contacts/Information-Center-OASI-DI"],
            ["Estimate Your Pension", "https://www.acor-avs.ch/requerant"],
          ].map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{
              background: `${GOLD}0.12)`, border: `1px solid ${GOLD}0.28)`,
              color: ACCENT, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12,
            }}>
              {label} <ExternalLink size={11} />
            </a>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function Pillar2() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            What is it?
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 14, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Your occupational pension (BVG/LPP), funded jointly by you and your employer. Together with Pillar 1, the goal is to allow you to maintain your standard of living in retirement.
          </p>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {[
              ["System", "Fully funded — contributions go into your personal account."],
              ["Mandatory for", "Employees earning over CHF 22,680/year (2025)."],
              ["Two parts", "Mandatory portion (legally defined) + Super-Mandatory (employer top-up)."],
              ["Employer rule", "Must contribute at least half the total contribution — many contribute more."],
            ].map(([k, v]) => (
              <li key={k} style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <strong style={{ color: "var(--text)" }}>{k}:</strong> {v}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Contributions by Age
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 14, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Contributions are a % of your <strong style={{ color: "var(--text)" }}>coordinated salary</strong> (gross minus CHF 26,460 in 2025). Rates increase with age.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["25–34", "7%", 0.38],
              ["35–44", "10%", 0.55],
              ["45–54", "15%", 0.80],
              ["55–65", "18%", 1.0],
            ].map(([age, rate, fill]) => (
              <div key={age} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", width: 50, flexShrink: 0 }}>{age}</span>
                <div style={{ flex: 1, height: 24, borderRadius: 6, background: "var(--surface-2)", overflow: "hidden", position: "relative" }}>
                  <div style={{
                    width: `${Number(fill) * 100}%`, height: "100%",
                    background: `linear-gradient(90deg, ${GOLD}0.6), ${GOLD}0.9))`,
                    borderRadius: 6,
                    transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 800, color: ACCENT, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", width: 36, flexShrink: 0 }}>{rate}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "var(--text-3)", marginTop: 12, marginBottom: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Mandatory only insures salary up to CHF 90,720. Higher income covered only by super-mandatory plans.
          </p>
        </SectionCard>

        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Death &amp; Disability Insurance
          </h3>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {[
              ["Risk Premium", "A portion of contributions funds insurance for disability or death — separate from your retirement savings."],
              ["Disability Pension", "Based on projected retirement capital at current conversion rate. Includes child's pension for dependants."],
              ["Spouse's Pension", "Typically 60% of insured's full pension — if you have dependent children, or are 45+ with 5+ years of marriage."],
              ["Orphan's Pension", "Typically 20% of full pension until age 18 (or 25 if in education)."],
              ["Lump-Sum", "If survivor conditions aren't met, accumulated capital is paid to heirs per fund regulations."],
            ].map(([k, v]) => (
              <li key={k} style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <strong style={{ color: "var(--text)" }}>{k}:</strong> {v}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      {/* Conversion Rate */}
      <SectionCard>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 10, marginTop: 0 }}>
          The Conversion Rate Dilemma
        </h3>
        <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          At retirement, your accumulated capital is converted to a lifelong annual pension using a conversion rate.
        </p>
        <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 14, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          <strong style={{ color: "var(--text)" }}>Formula:</strong> Annual Pension = Accumulated Capital × Conversion Rate
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          <div style={{ padding: "18px 20px", borderRadius: 14, background: `${GOLD}0.10)`, border: `1px solid ${GOLD}0.22)`, textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif" }}>6.8%</div>
            <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Legal rate for mandatory portion</div>
          </div>
          <div style={{ padding: "18px 20px", borderRadius: 14, background: "rgba(200,120,128,0.08)", border: "1px solid rgba(200,120,128,0.22)", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#C87880", fontFamily: "'Playfair Display', Georgia, serif" }}>4.5–5.5%</div>
            <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Typical blended effective rate</div>
          </div>
        </div>
        <Callout icon={<AlertTriangle size={16} />} title="The Split-Rate Reality">
          The law mandates 6.8% for the mandatory portion, but funds apply a much lower rate to the (often larger) super-mandatory portion. The resulting blended effective rate is typically 4.5–5.5%, significantly reducing your final pension.
        </Callout>
      </SectionCard>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Payout Options at Retirement
          </h3>
          {[
            { icon: "📅", title: "Lifelong Annuity", desc: "A guaranteed monthly payment for life. Predictable, but you lose capital if you die early." },
            { icon: "💰", title: "Full Lump-Sum", desc: "Withdraw all capital at once. Taxed at a reduced one-time capital benefits rate." },
            { icon: "⚖️", title: "Combination", desc: "Take a portion as a lump sum (e.g. 25%) and convert the rest to an annuity." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
              </div>
            </div>
          ))}
        </SectionCard>

        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Voluntary Buy-Ins
          </h3>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {[
              ["Massive Tax Advantage", "Buy-ins are fully deductible from your taxable income in the year they're made."],
              ["How to Know Your Gap", "Your potential buy-in amount is listed on your annual pension fund certificate."],
              ["3-Year Lock", "Capital from a buy-in cannot be withdrawn as a lump sum for 3 years."],
            ].map(([k, v]) => (
              <li key={k} style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <strong style={{ color: "var(--text)" }}>{k}:</strong> {v}
              </li>
            ))}
          </ul>
          <ProTip>Make buy-ins at least 3 years before any planned withdrawal or home purchase to retain flexibility.</ProTip>
        </SectionCard>

        <SectionCard>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Leaving Switzerland?
          </h3>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {[
              ["Moving to EU/EFTA", "Mandatory portion is locked until retirement. Super-mandatory portion can be withdrawn."],
              ["Moving outside EU/EFTA", "The entire Pillar 2 amount can be withdrawn as a lump sum."],
              ["Tax Strategy", "Transfer funds to a vested benefits foundation in a low-tax canton (e.g. Schwyz, Zug) before departure to significantly reduce withholding tax."],
            ].map(([k, v]) => (
              <li key={k} style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <strong style={{ color: "var(--text)" }}>{k}:</strong> {v}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      {/* Home Ownership & Tax */}
      <SectionCard>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
          Early Withdrawal, Buy-Ins &amp; Tax Strategies
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {[
            {
              icon: "🏠", title: "Home Ownership (WEF)",
              points: [
                "Withdraw Pillar 2 to purchase/build your main Swiss residence, amortize a mortgage, or buy cooperative shares.",
                "Minimum withdrawal: CHF 20,000. Owner-occupiers only — not rental or investment property.",
                "You can also pledge assets as collateral instead of withdrawing, preserving growth.",
                "Buy-ins made in the last 3 years cannot be used for WEF withdrawal.",
              ],
            },
            {
              icon: "📊", title: "Capital Withdrawal Tax",
              points: [
                "Lump-sum withdrawals (retirement, emigration, home ownership) are taxed separately from income at a reduced one-time rate.",
                "Rate depends on canton and municipality — roughly 4–12% for large sums.",
                "Progressive: the more you withdraw in a single year, the higher the marginal rate.",
                "Stagger withdrawals across tax years to benefit from lower rates each time.",
              ],
            },
            {
              icon: "🎯", title: "Optimisation Strategies",
              points: [
                "Stagger withdrawals: spread Pillar 2 and Pillar 3a payouts across different tax years.",
                "Move to a low-tax canton (Schwyz, Zug) before retirement or emigration for better withholding tax rates.",
                "Time buy-ins at least 3 years before planned withdrawals for maximum flexibility.",
                "Consult a Swiss tax advisor — optimal timing can save tens of thousands in taxes.",
              ],
            },
          ].map(({ icon, title, points }) => (
            <div key={title} style={{ background: "var(--surface-2)", borderRadius: 14, padding: "20px 22px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "1.3rem", marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
              <ul style={{ paddingLeft: 16, margin: 0 }}>
                {points.map((p) => (
                  <li key={p} style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 6, lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Callout icon={<Lightbulb size={16} />} title="Pro Tip">
          Consult a tax professional or pension advisor before large withdrawals or buy-ins — optimal timing and canton selection can save you thousands in taxes.
        </Callout>
      </SectionCard>
    </div>
  );
}

function Pillar3() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SectionCard>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 10, marginTop: 0 }}>
          What is Pillar 3?
        </h3>
        <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Pillar 3 is your <strong style={{ color: "var(--text)" }}>voluntary private pension savings</strong> — designed to close the personal gap left by Pillars 1 &amp; 2 so you can maintain your desired lifestyle. It has two types:
        </p>
      </SectionCard>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {/* 3a */}
        <SectionCard>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 14,
            padding: "4px 12px", borderRadius: 999,
            background: `${GOLD}0.12)`, border: `1px solid ${GOLD}0.22)`,
            fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          }}>
            👑 Pillar 3a — The Smart Saver
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Tied / Restricted — Huge Tax Advantages
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            <div style={{ padding: "10px 14px", borderRadius: 10, background: `${GOLD}0.08)`, border: `1px solid ${GOLD}0.18)` }}>
              <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>With a Pillar 2 fund (2025 limit)</div>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif" }}>CHF 7,258</div>
            </div>
            <div style={{ padding: "10px 14px", borderRadius: 10, background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Without a Pillar 2 fund (20% of net income, max)</div>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", fontFamily: "'Playfair Display', Georgia, serif" }}>CHF 36,288</div>
            </div>
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Triple Tax Advantage
          </div>
          {[
            ["1. Deductible", "Contributions are fully deductible from your taxable income."],
            ["2. Tax-Free Growth", "No wealth or income tax on assets while they grow."],
            ["3. Reduced Payout Tax", "Withdrawals taxed at a low one-time capital benefits rate."],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <span style={{
                width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `${GOLD}0.18)`,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, display: "block" }} />
              </span>
              <div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{k}: </span>
                <span style={{ fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{v}</span>
              </div>
            </div>
          ))}
          <p style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.65, marginBottom: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            <strong style={{ color: "var(--text)" }}>Withdrawal:</strong> Locked until 5 years before retirement, or for buying a home, starting a business, or leaving Switzerland.
          </p>
          <ProTip>Open a new 3a account every 5–7 years. Withdraw from each in a different tax year during retirement to break up the sum and significantly reduce your total tax bill.</ProTip>
        </SectionCard>

        {/* 3b */}
        <SectionCard>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 14,
            padding: "4px 12px", borderRadius: 999,
            background: "rgba(112,188,146,0.10)", border: "1px solid rgba(112,188,146,0.24)",
            fontSize: 10, fontWeight: 700, color: "#70BC92", letterSpacing: "0.08em", textTransform: "uppercase",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          }}>
            🚀 Pillar 3b — The Flexible Investor
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
            Unrestricted — General Wealth Accumulation
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 14, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Not a specific product, but a label for all your other private assets and investments. Use after maxing out Pillar 2 buy-ins and Pillar 3a.
          </p>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {[
              ["Contribution Limit", "None."],
              ["Flexibility", "Access your money anytime, for any reason."],
              ["Contributions", "Not tax-deductible."],
              ["Assets", "Subject to annual wealth tax."],
              ["Investment income", "Dividends and interest are taxable."],
              ["Capital Gains", "Generally tax-free for private investors (non-professional traders) — a major advantage."],
            ].map(([k, v]) => (
              <li key={k} style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <strong style={{ color: "var(--text)" }}>{k}:</strong> {v}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      {/* Investment Options */}
      <SectionCard>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 14, marginTop: 0 }}>
          Maximising Your 3a: Investment Options
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {[
            {
              title: "Bank Savings Account",
              icon: "🏦",
              pros: ["Safest option", "No investment risk"],
              cons: ["Very low interest rates", "Often fails to beat inflation"],
              verdict: "Avoid for long horizons",
              verdictColor: "#C87880",
            },
            {
              title: "Securities Funds (High Equity)",
              icon: "📈",
              pros: ["Highest growth potential", "Ideal for 10+ year horizons", "Providers: VIAC, Finpension, Frankly (up to 99% stocks)"],
              cons: ["Short-term market volatility"],
              verdict: "Recommended",
              verdictColor: "#70BC92",
            },
            {
              title: "Insurance Hybrid Policies",
              icon: "🛡️",
              pros: ["Combines saving with risk insurance"],
              cons: ["High fees", "Low returns", "Inflexible"],
              verdict: "Generally avoid",
              verdictColor: "#C87880",
            },
          ].map(({ title, icon, pros, cons, verdict, verdictColor }) => (
            <div key={title} style={{
              background: "var(--surface-2)", borderRadius: 14, padding: "20px",
              border: "1px solid var(--border)", display: "flex", flexDirection: "column",
            }}>
              <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
              <div style={{ flex: 1 }}>
                {pros.map((p) => (
                  <div key={p} style={{ fontSize: 11, color: "var(--text-2)", display: "flex", gap: 6, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                    <span style={{ color: "#70BC92", flexShrink: 0 }}>✓</span> {p}
                  </div>
                ))}
                {cons.map((c) => (
                  <div key={c} style={{ fontSize: 11, color: "var(--text-2)", display: "flex", gap: 6, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                    <span style={{ color: "#C87880", flexShrink: 0 }}>✗</span> {c}
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 12, padding: "5px 10px", borderRadius: 999,
                background: `${verdictColor}18`, border: `1px solid ${verdictColor}33`,
                fontSize: 10, fontWeight: 700, color: verdictColor, display: "inline-block",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}>{verdict}</div>
            </div>
          ))}
        </div>
        <Callout icon={<TrendingUp size={16} />} title="Watch the TER">
          A seemingly small difference in Total Expense Ratio (e.g. 0.5% vs 1.5%) can result in tens of thousands of CHF difference in your final retirement capital over several decades. Always compare fees before committing.
        </Callout>
      </SectionCard>

      {/* Resources */}
      <SectionCard>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: 10, marginTop: 0 }}>
          Independent Research &amp; Comparison Sites
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
          {[
            ["Moneyland.ch", "https://www.moneyland.ch/en/"],
            ["The Poor Swiss", "https://thepoorswiss.com/"],
          ].map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{
              background: `${GOLD}0.10)`, border: `1px solid ${GOLD}0.24)`,
              color: ACCENT, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12,
            }}>
              {label} <ExternalLink size={11} />
            </a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "var(--text-3)", margin: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Providers to compare for 3a investing: VIAC, Finpension, Frankly, UBS, and your cantonal bank.
        </p>
      </SectionCard>
    </div>
  );
}

export default function PensionPage() {
  const [activeTab, setActiveTab] = useState("pillar1");

  return (
    <div>
      <PageHeader
        title="Swiss Pension System"
        subtitle="The three-pillar system explained — state pension (AHV), occupational pension (BVG), and private savings (Pillar 3). Your complete guide as an Indian in Switzerland."
        badge="Retirement Guide"
        gradient="from-amber-500 to-yellow-400"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Swiss Pension System" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Three-pillar overview strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }} className="pillar-strip">
          {[
            { num: "1", title: "State Pension", sub: "AHV / OASI", note: "Pay-as-you-go. Mandatory for all.", color: ACCENT },
            { num: "2", title: "Occupational Pension", sub: "BVG / LPP", note: "Employer + employee funded.", color: "#80A8D0" },
            { num: "3", title: "Private Savings", sub: "Pillar 3a / 3b", note: "Voluntary. Huge tax benefits.", color: "#70BC92" },
          ].map(({ num, title, sub, note, color }) => (
            <div key={num} style={{
              background: "var(--surface)", border: `1px solid ${color}33`,
              borderTop: `3px solid ${color}`, borderRadius: 16, padding: "18px 20px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginTop: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
              <div style={{ fontSize: 10, color, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{sub}</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{note}</div>
            </div>
          ))}
        </div>

        {/* Tab navigation */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28,
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: 16, padding: "8px",
        }}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1, minWidth: 140,
                  padding: "10px 20px", borderRadius: 10,
                  border: isActive ? `1px solid ${GOLD}0.28)` : "1px solid transparent",
                  background: isActive ? `${GOLD}0.12)` : "transparent",
                  cursor: "pointer", transition: "all 0.2s",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: isActive ? ACCENT : "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                  {tab.label}
                </div>
                <div style={{ fontSize: 10, color: isActive ? ACCENT : "var(--text-3)", marginTop: 2, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", opacity: 0.8 }}>
                  {tab.sublabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        {activeTab === "pillar1" && <Pillar1 />}
        {activeTab === "pillar2" && <Pillar2 />}
        {activeTab === "pillar3" && <Pillar3 />}

        {/* Disclaimer */}
        <div style={{
          marginTop: 48, padding: "20px 24px", borderRadius: 14,
          background: "var(--surface-2)", border: "1px solid var(--border)",
          display: "flex", gap: 12, alignItems: "flex-start",
        }}>
          <Shield size={16} style={{ color: "var(--text-3)", flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 11, color: "var(--text-3)", lineHeight: 1.7, margin: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            <strong style={{ color: "var(--text-2)" }}>Disclaimer:</strong> This information is for general guidance only and is not professional financial or legal advice. Swiss pension rules and thresholds are updated annually — always verify current figures with official sources (AHV-IV, your Pensionskasse, or a qualified Swiss financial advisor). Figures shown are for 2025. India–Switzerland DTAA implications should be reviewed with a tax professional familiar with both jurisdictions.
          </p>
        </div>
      </div>

      {/* Seek Advice */}
      <div style={{ marginTop: 56, padding: "36px 40px", borderRadius: 24, border: "1px solid rgba(201,169,110,0.18)", background: "rgba(201,169,110,0.03)" }}>
        <div style={{ marginBottom: 24 }}>
          <span className="tag" style={{ marginBottom: 10, display: "inline-flex" }}>Community Help</span>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
            Have a Pension Question?
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-2)", marginTop: 6, marginBottom: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Ask the Indiaspora community — get guidance from Indians who've navigated Swiss pension planning before you.
          </p>
        </div>
        <SeekAdviceForm defaultTopic="Pension / Retirement" compact />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .pillar-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
