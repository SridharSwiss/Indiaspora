"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import SeekAdviceForm from "@/components/ui/SeekAdviceForm";
import { ExternalLink, ChevronRight } from "lucide-react";

const TABS = [
  { id: "overview", label: "🗺️ Overview", sublabel: "Strategic Map" },
  { id: "compulsory", label: "🏫 Phase 1", sublabel: "Ages 4–15" },
  { id: "upper", label: "🎓 Phase 2", sublabel: "Upper Secondary" },
  { id: "tertiary", label: "🏛️ Phase 3", sublabel: "Tertiary & Beyond" },
  { id: "alternatives", label: "🌐 Alternatives", sublabel: "Trends & Private" },
  { id: "stats", label: "📊 Data", sublabel: "Key Statistics" },
  { id: "resources", label: "🔗 Resources", sublabel: "Official Links" },
];

const BLUE = "#4A90C4";
const BLUE_RGB = "74,144,196";
const GOLD = "#CEB07A";
const GOLD_RGB = "201,169,110";
const GREEN = "#70BC92";
const GREEN_RGB = "112,188,146";
const PURPLE = "#B880C8";

function SCard({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`card ${className}`} style={{ padding: "28px 32px", borderRadius: 20, ...style }}>
      {children}
    </div>
  );
}

function SH({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{
      fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem",
      color: "var(--text)", marginBottom: 14, marginTop: 0,
    }}>{children}</h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 14, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{children}</p>;
}

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: `rgba(${GOLD_RGB},0.08)`, border: `1px solid rgba(${GOLD_RGB},0.22)`,
      borderLeft: `3px solid ${GOLD}`, borderRadius: 14, padding: "16px 20px", marginTop: 20,
      fontSize: 13, color: "var(--text-2)", lineHeight: 1.65,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    }}>
      <span style={{ fontWeight: 700, color: GOLD }}>Key Insight: </span>{children}
    </div>
  );
}

function ProCon({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
      <div style={{ padding: "16px 18px", borderRadius: 14, background: `rgba(${GREEN_RGB},0.08)`, border: `1px solid rgba(${GREEN_RGB},0.20)` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>✓ Merits</div>
        {pros.map((p) => <div key={p} style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>• {p}</div>)}
      </div>
      <div style={{ padding: "16px 18px", borderRadius: 14, background: "rgba(200,120,128,0.08)", border: "1px solid rgba(200,120,128,0.20)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#C87880", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>✗ Demerits</div>
        {cons.map((c) => <div key={c} style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>• {c}</div>)}
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SCard style={{ borderLeft: `3px solid ${BLUE}`, background: `rgba(${BLUE_RGB},0.04)` }}>
        <SH>Executive Summary</SH>
        <Body>
          The Canton of Zurich&apos;s education system is a global benchmark defined by three core pillars: <strong style={{ color: "var(--text)" }}>uncompromising quality</strong>, a <strong style={{ color: "var(--text)" }}>powerful dual-track (VET/Academic) structure</strong>, and the hallmark principle of <strong style={{ color: "var(--text)" }}>permeability (Durchlässigkeit)</strong> — no educational choice is a dead end. Governed by the cantonal Bildungsdirektion within a federal SERI framework, the system is 95% public and exceptionally well-funded (5.7% of GDP).
        </Body>
        <Insight>
          The key to navigating this system is not to find the single &quot;best&quot; path, but to leverage its flexibility to find the optimal path for each individual&apos;s talents and ambitions.
        </Insight>
      </SCard>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        <SCard>
          <SH>Governance &amp; Funding</SH>
          <Body>
            Governed by the cantonal <strong style={{ color: "var(--text)" }}>Bildungsdirektion</strong> within a national SERI framework. Cantons and municipalities finance ~90% of public education, making public schools free and of extremely high quality. Nearly 95% of Swiss residents choose public schools.
          </Body>
        </SCard>
        <SCard>
          <SH>Curriculum: Lehrplan 21</SH>
          <Body>
            Zurich follows the <strong style={{ color: "var(--text)" }}>Lehrplan 21</strong>, a competency-based curriculum defining knowledge, skills, and attitudes students should possess at each stage — a modern, skills-oriented approach emphasising both academic and practical competence.
          </Body>
        </SCard>
      </div>

      {/* Pathway diagram */}
      <SCard>
        <SH>The Education Pathway System</SH>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 600, padding: "16px 0" }}>
            {/* Simplified pathway visual */}
            <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
              {/* Compulsory */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 140 }}>
                <div style={{ padding: "16px 18px", borderRadius: 14, background: `rgba(${BLUE_RGB},0.14)`, border: `1px solid rgba(${BLUE_RGB},0.28)`, textAlign: "center", width: "100%", marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Compulsory</div>
                  <div style={{ fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Ages 4–15</div>
                </div>
                <div style={{ fontSize: 10, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", textAlign: "center" }}>Kindergarten + Primary + Sekundarschule</div>
              </div>

              {/* Arrow */}
              <div style={{ display: "flex", alignItems: "center", padding: "0 12px", flexShrink: 0, color: "var(--text-3)" }}>
                <ChevronRight size={20} />
              </div>

              {/* Upper Secondary */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160, flex: 1 }}>
                {[
                  { label: "Gymnasium (Academic)", sub: "→ Matura", color: `rgba(${GOLD_RGB},0.14)`, border: `rgba(${GOLD_RGB},0.28)`, textColor: GOLD },
                  { label: "VET / Apprenticeship", sub: "→ EFZ + Berufsmaturität", color: `rgba(${GREEN_RGB},0.14)`, border: `rgba(${GREEN_RGB},0.28)`, textColor: GREEN },
                  { label: "FMS (Specialist)", sub: "→ Fachmaturität", color: "rgba(184,128,200,0.14)", border: "rgba(184,128,200,0.28)", textColor: PURPLE },
                ].map(({ label, sub, color, border, textColor }) => (
                  <div key={label} style={{ padding: "12px 16px", borderRadius: 12, background: color, border: `1px solid ${border}` }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: textColor, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{label}</div>
                    <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{sub}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", padding: "0 12px", flexShrink: 0, color: "var(--text-3)" }}>
                <ChevronRight size={20} />
              </div>

              {/* Tertiary */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160, flex: 1 }}>
                {[
                  { label: "University / ETH", sub: "Bachelor, Master, PhD", color: `rgba(${GOLD_RGB},0.14)`, border: `rgba(${GOLD_RGB},0.28)`, textColor: GOLD },
                  { label: "Univ. of Applied Sciences", sub: "UAS / FH", color: `rgba(${GREEN_RGB},0.14)`, border: `rgba(${GREEN_RGB},0.28)`, textColor: GREEN },
                  { label: "Professional Education", sub: "PET / HF", color: "rgba(184,128,200,0.14)", border: "rgba(184,128,200,0.28)", textColor: PURPLE },
                ].map(({ label, sub, color, border, textColor }) => (
                  <div key={label} style={{ padding: "12px 16px", borderRadius: 12, background: color, border: `1px solid ${border}` }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: textColor, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{label}</div>
                    <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Passerelle bridge note */}
            <div style={{
              marginTop: 16, padding: "10px 16px", borderRadius: 10,
              background: `rgba(${GOLD_RGB},0.08)`, border: `1px solid rgba(${GOLD_RGB},0.20)`,
              fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              textAlign: "center",
            }}>
              <strong style={{ color: GOLD }}>Passerelle Bridge:</strong> VET graduates with Berufsmaturität can access traditional universities via a 1-year supplementary exam — no path is a dead end.
            </div>
          </div>
        </div>
      </SCard>
    </div>
  );
}

function CompulsoryTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SCard>
        <SH>Phase 1: Foundational Education (Ages 4–15)</SH>
        <Body>
          The 11-year compulsory education journey in Zurich is free and lays the groundwork for all future paths. It covers Kindergarten (age 4–6), Primary School (age 6–12), and Lower Secondary School / Sekundarschule (age 12–15).
        </Body>
      </SCard>

      <SCard>
        <SH>The First Strategic Crossroads (Age 12)</SH>
        <Body>
          Around age 12, after 6th grade, students face their first major educational fork. The decision is based on academic performance, teacher recommendations, and — for the direct academic track — a competitive entrance exam.
        </Body>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Option A: Early Academic Route — <span style={{ color: GOLD }}>Langgymnasium</span>
          </div>
          <Body>
            A 6-year academic high school starting after 6th grade, leading directly to the Matura (university entrance). Admission is highly competitive — requires passing the Central Entrance Exam (ZAP).
          </Body>
          <ProCon
            pros={["Direct, uninterrupted path to university.", "Focused academic environment for high achievers."]}
            cons={["Significant pressure on 12-year-olds.", "May favour privileged backgrounds with access to tutoring.", "Can disadvantage late bloomers."]}
          />
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Option B: Standard Route — <span style={{ color: GREEN }}>Sekundarschule</span>
          </div>
          <Body>
            Most students attend a 3-year Sekundarschule, streamed by ability (Abteilung A/B). Keeps more options open and includes vocational orientation before the next decision at age 15.
          </Body>
          <ProCon
            pros={["3 more years to mature before major commitments.", "Both vocational and academic doors remain open."]}
            cons={["Internal streaming can create performance hierarchies.", "Moving to top academic tracks can be more challenging from lower streams."]}
          />
        </div>
      </SCard>

      <SCard>
        <SH>The Second Chance: Kurzgymnasium</SH>
        <Body>
          Students who attend the standard Sekundarschule have another opportunity to enter a Gymnasium after the 2nd or 3rd year of secondary school — the <strong style={{ color: "var(--text)" }}>Kurzgymnasium</strong>. Entry requires passing the same rigorous ZAP, tailored to the higher age level. A crucial second entry point for students who mature academically later.
        </Body>
        <Insight>
          The system&apos;s permeability begins here. The ZAP entrance exam can be taken in the 2nd or 3rd year of Sekundarschule, giving students two bites at the academic track.
        </Insight>
      </SCard>

      <SCard>
        <SH>Support &amp; Integration</SH>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {[
            { icon: "🗣️", title: "German as Second Language (DaZ)", desc: "Free integrated lessons for non-German speakers. New arrivals may enter Aufnahmeklassen (welcome classes) for intensive language instruction." },
            { icon: "♿", title: "Special Educational Needs (SEN)", desc: "Goal is inclusion in regular classes wherever possible. Dedicated Sonderschulen exist for more severe needs." },
            { icon: "📖", title: "Home Language Courses (HSK)", desc: "Voluntary courses in 30+ home languages including Hindi, Tamil, and Telugu. Strengthening mother tongue supports overall linguistic development." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "var(--surface-2)", borderRadius: 14, padding: "18px 20px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
              <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
            </div>
          ))}
        </div>
      </SCard>
    </div>
  );
}

function UpperTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SCard>
        <SH>The Upper Secondary Crossroads (Ages 15–19)</SH>
        <Body>
          At age 15, students choose between the world-renowned Vocational Education and Training (VET) system or the academic track. This is the most significant strategic decision in the Swiss education journey.
        </Body>
      </SCard>

      {/* Comparison table */}
      <SCard>
        <SH>VET vs. Academic Pathway Comparison</SH>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
            <thead>
              <tr style={{ background: `rgba(${BLUE_RGB},0.08)` }}>
                <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", borderBottom: `1px solid rgba(${BLUE_RGB},0.16)` }}>Feature</th>
                <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", borderBottom: `1px solid rgba(${BLUE_RGB},0.16)` }}>VET / Apprenticeship</th>
                <th style={{ padding: "12px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: GOLD, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", borderBottom: `1px solid rgba(${BLUE_RGB},0.16)` }}>Academic (Gymnasium)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Primary Goal", "Qualification for a specific profession", "General academic education for university"],
                ["Learning Environment", "70–80% in-company, 20–30% vocational school", "Fully school-based and theoretical"],
                ["Key Qualification", "EFZ + optional Berufsmaturität", "Matura (Academic Baccalaureate)"],
                ["Immediate Outcome", "Employment + salary from day one", "University admission"],
                ["Path to University", "Via Berufsmaturität + Passerelle (~1 year)", "Direct access with Matura"],
                ["Share of students", "~66% choose this path", "~34% choose this path"],
              ].map(([f, v, a], i) => (
                <tr key={f} style={{ background: i % 2 === 0 ? "transparent" : "var(--surface-2)", borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "11px 14px", fontSize: 12, fontWeight: 700, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{f}</td>
                  <td style={{ padding: "11px 14px", fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{v}</td>
                  <td style={{ padding: "11px 14px", fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Insight>
          The VET path is not a &quot;lesser&quot; option. It is a co-equal, highly respected pillar of the Swiss economy, chosen by ~66% of students. Many of Switzerland&apos;s top executives began with a VET apprenticeship.
        </Insight>
      </SCard>

      {/* Permeability */}
      <SCard>
        <SH>The Permeability Principle: VET → University</SH>
        <Body>
          A core strength of the Swiss system is its permeability — ensuring that no path is a dead end. VET graduates can access the highest levels of academia through two steps:
        </Body>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
          {[
            {
              step: "1", color: GREEN, label: "Berufsmaturität (BM)",
              desc: "Supplements VET training with extended general education. Can be earned during (BM1) or after (BM2) the apprenticeship. Grants direct access to Universities of Applied Sciences (UAS/FH).",
            },
            {
              step: "2", color: GOLD, label: "Passerelle Supplementary Exam",
              desc: "BM holders take a 1-year intensive course. Passing grants a qualification equivalent to the academic Matura — opening all Swiss universities and ETH Zurich.",
            },
          ].map(({ step, color, label, desc }) => (
            <div key={step} style={{
              display: "flex", gap: 16, padding: "18px 20px", borderRadius: 14,
              background: `rgba(${step === "1" ? GREEN_RGB : GOLD_RGB},0.08)`,
              border: `1px solid rgba(${step === "1" ? GREEN_RGB : GOLD_RGB},0.22)`,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: color, color: "#fff",
                fontSize: 16, fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif",
              }}>{step}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{label}</div>
                <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          padding: "14px 18px", borderRadius: 12,
          background: `rgba(${GOLD_RGB},0.08)`, border: `1px solid rgba(${GOLD_RGB},0.20)`,
          fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        }}>
          <strong style={{ color: GOLD }}>Result:</strong> A student who chooses the VET path at age 15 retains the option to pursue a PhD at ETH Zurich later in life — embodying the system&apos;s lifelong flexibility.
        </div>
      </SCard>
    </div>
  );
}

function TertiaryTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SCard>
        <SH>The Four Tertiary Pillars</SH>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          {[
            { num: "1", icon: "🔬", title: "Universities & ETH", sub: "Research-intensive", desc: "UZH, ETH Zurich. Fundamental research, theoretical knowledge. Bachelor's, Master's, PhD.", color: GOLD },
            { num: "2", icon: "⚙️", title: "Universities of Applied Sciences", sub: "UAS / FH (e.g. ZHAW)", desc: "Professionally-oriented degrees. Applied research in partnership with industry.", color: GREEN },
            { num: "3", icon: "📚", title: "Universities of Teacher Education", sub: "UTE / PH (e.g. PHZH)", desc: "Train teachers for all levels of compulsory schooling.", color: BLUE },
            { num: "4", icon: "🏆", title: "Professional Education & Training", sub: "PET / HF", desc: "Uniquely Swiss. Advanced specialization for VET diploma holders with work experience.", color: PURPLE },
          ].map(({ num, icon, title, sub, desc, color }) => (
            <div key={num} style={{
              padding: "20px", borderRadius: 14,
              background: "var(--surface-2)", border: `1px solid var(--border)`,
              borderTop: `3px solid ${color}`,
            }}>
              <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 2, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{sub}</div>
              <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
            </div>
          ))}
        </div>
      </SCard>

      {/* Entry matrix */}
      <SCard>
        <SH>Higher Education Entry Matrix</SH>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 580 }}>
            <thead>
              <tr style={{ background: `rgba(${BLUE_RGB},0.08)` }}>
                {["Qualification", "University / ETH", "UAS / FH", "UTE / PH", "PET / HF"].map((h) => (
                  <th key={h} style={{ padding: "11px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", borderBottom: `1px solid rgba(${BLUE_RGB},0.16)` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { q: "Matura (Academic)", cells: [["Direct Access", GREEN], ["Access", "var(--text-2)"], ["Direct Access", GREEN], ["Access", "var(--text-2)"]] },
                { q: "Berufsmaturität", cells: [["Via Passerelle", GOLD], ["Direct Access", GREEN], ["Via Passerelle", GOLD], ["Access", "var(--text-2)"]] },
                { q: "Fachmaturität", cells: [["Via Passerelle", GOLD], ["Direct Access", GREEN], ["Direct (Pedagogy)", GREEN], ["Access", "var(--text-2)"]] },
                { q: "EFZ (VET Diploma)", cells: [["No direct access", "#C87880"], ["No direct access", "#C87880"], ["No direct access", "#C87880"], ["Access (+ work exp.)", GREEN]] },
              ].map(({ q, cells }, i) => (
                <tr key={q} style={{ background: i % 2 === 0 ? "transparent" : "var(--surface-2)", borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "11px 14px", fontSize: 12, fontWeight: 700, color: "var(--text)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{q}</td>
                  {cells.map(([v, c], j) => (
                    <td key={j} style={{ padding: "11px 14px", fontSize: 12, fontWeight: 600, color: String(c), fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{String(v)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SCard>

      {/* PhD */}
      <SCard>
        <SH>Doctoral Studies (PhD)</SH>
        <Body>
          A doctorate is the highest academic degree. In Zurich, candidates are almost always <strong style={{ color: "var(--text)" }}>employed as salaried research or teaching assistants</strong> — not simply fee-paying students.
        </Body>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {[
            {
              title: "ETH Zurich", color: GOLD,
              points: [
                "Independent research project + 12 ECTS coursework + teaching duties.",
                "Leads to 'Doctor of Sciences (Dr. sc. ETH Zurich)'.",
                "Admission: secure a supervising professor; admission is provisional until passing an aptitude colloquium in year 1.",
              ],
            },
            {
              title: "University of Zurich (UZH)", color: BLUE,
              points: [
                "Individual doctorates or structured doctoral programs within graduate schools.",
                "Two-step: secure supervisor + formal matriculation application.",
                "Praised for intellectual freedom and interdisciplinary opportunities.",
              ],
            },
          ].map(({ title, color, points }) => (
            <div key={title} style={{ padding: "20px", borderRadius: 14, background: "var(--surface-2)", border: `1px solid var(--border)`, borderLeft: `3px solid ${color}` }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 12, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
              {points.map((p) => (
                <div key={p} style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 8, display: "flex", gap: 8, lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                  <span style={{ color, flexShrink: 0 }}>•</span>{p}
                </div>
              ))}
            </div>
          ))}
        </div>
      </SCard>

      {/* MAS/DAS/CAS */}
      <SCard>
        <SH>Post-Graduate Professional Qualifications</SH>
        <Body>For university graduates with work experience who want to specialize or upskill:</Body>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[
            { abbr: "MAS", full: "Master of Advanced Studies", ects: "min. 60 ECTS", desc: "Comprehensive 2-year program (part-time). Leads to a Master's-level title." },
            { abbr: "DAS", full: "Diploma of Advanced Studies", ects: "min. 30 ECTS", desc: "Mid-level specialization, typically completed within a year (part-time)." },
            { abbr: "CAS", full: "Certificate of Advanced Studies", ects: "min. 10 ECTS", desc: "Short, intensive courses on a specific topic. Can combine toward DAS/MAS." },
          ].map(({ abbr, full, ects, desc }) => (
            <div key={abbr} style={{ textAlign: "center", padding: "20px 16px", borderRadius: 14, background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: BLUE, fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 4 }}>{abbr}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text-2)", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{full}</div>
              <div style={{ fontSize: 10, color: GOLD, fontWeight: 700, marginBottom: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{ects}</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
            </div>
          ))}
        </div>
      </SCard>
    </div>
  );
}

function AlternativesTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SCard>
        <SH>Private &amp; International Schools</SH>
        <Body>
          For families needing curriculum continuity (IB Diploma) or English-medium instruction, private and international schools offer strong alternatives — at a cost.
        </Body>
        <ProCon
          pros={["Curriculum continuity for mobile families (IB, British, American).", "Instruction in English simplifies global university applications.", "Smaller class sizes and extensive support services."]}
          cons={["Extremely high cost: CHF 25,000–40,000+ per year, plus significant one-time fees.", "Risk of expat bubble — limited local integration.", "Difficult to transition back into the Swiss public system later."]}
        />
      </SCard>

      <SCard>
        <SH>Key Policy Debates Shaping the System</SH>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              num: "1", title: "Equity vs. Excellence (Early Selection)",
              desc: "Critics argue early selection at 12 reinforces social inequality. Proponents counter that the high-quality, permeable VET system mitigates this, making the selection less high-stakes than in other countries.",
              color: GOLD,
            },
            {
              num: "2", title: "Digital Transformation",
              desc: "Zurich is proactively integrating digital tools and literacy (Medien und Informatik) into the curriculum at all levels, including issuing guidelines for AI use in schools.",
              color: BLUE,
            },
            {
              num: "3", title: "The Future of VET ('Academisation')",
              desc: "A trend toward strengthening academic pathways from VET (e.g. promoting the Berufsmaturität) enhances prestige but raises concerns about diluting VET's core practical strength.",
              color: GREEN,
            },
          ].map(({ num, title, desc, color }) => (
            <div key={num} style={{ display: "flex", gap: 16, padding: "18px 20px", borderRadius: 14, background: "var(--surface-2)", border: "1px solid var(--border)" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `rgba(${color === GOLD ? GOLD_RGB : color === BLUE ? BLUE_RGB : GREEN_RGB},0.16)`,
                fontSize: 14, fontWeight: 800, color, fontFamily: "'Playfair Display', Georgia, serif",
              }}>{num}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
                <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </SCard>
    </div>
  );
}

function StatsTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SCard>
        <SH>Key Performance Indicators</SH>
        <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 20, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Source: Swiss Federal Statistical Office (FSO) and Canton of Zurich Education Statistics (BISTA)
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
          {[
            { value: "~66%", label: "of school-leavers choose VET / Apprenticeship", color: GREEN },
            { value: "91%", label: "of young adults (by age 25) hold an upper secondary qualification", color: BLUE },
            { value: "59%+", label: "of Zurich's working-age population holds a university-level degree", color: GOLD },
            { value: "95%", label: "of Swiss residents choose public schools", color: PURPLE },
            { value: "5.7%", label: "of GDP invested in education", color: GREEN },
            { value: "4–12+", label: "years of compulsory education depending on stage", color: BLUE },
          ].map(({ value, label, color }) => (
            <div key={label} style={{
              textAlign: "center", padding: "24px 16px", borderRadius: 16,
              background: "var(--surface-2)", border: "1px solid var(--border)",
              borderTop: `3px solid ${color}`,
            }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.1, marginBottom: 8 }}>{value}</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>
      </SCard>

      <SCard>
        <SH>Highest Educational Attainment (Ages 25–64, Switzerland 2023)</SH>
        <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 16, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Source: FSO 2023</p>
        {[
          { label: "Tertiary Education", pct: 46.0, color: BLUE },
          { label: "Upper Secondary", pct: 40.2, color: GREEN },
          { label: "Compulsory Only", pct: 13.7, color: "var(--text-3)" },
        ].map(({ label, pct, color }) => (
          <div key={label} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{label}</span>
              <span style={{ fontSize: 13, fontWeight: 800, color, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{pct}%</span>
            </div>
            <div style={{ height: 10, borderRadius: 999, background: "var(--surface-2)" }}>
              <div style={{ width: `${pct}%`, height: "100%", borderRadius: 999, background: color, transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)" }} />
            </div>
          </div>
        ))}
      </SCard>
    </div>
  );
}

function ResourcesTab() {
  const links = [
    { title: "Bildungsdirektion Kanton Zürich", desc: "Official cantonal authority for all education matters.", url: "https://www.zh.ch/de/bildungsdirektion.html" },
    { title: "Berufsberatung.ch", desc: "Official career counseling portal — explore professions, apprenticeships, and pathways.", url: "https://www.berufsberatung.ch/" },
    { title: "Zentrale Aufnahmeprüfung (ZAP)", desc: "Official portal for the Gymnasium entrance exams.", url: "https://www.zh.ch/de/bildung/schulen/maturitaetsschule/zentrale-aufnahmepruefung.html" },
    { title: "University of Zurich (UZH) Admissions", desc: "Applications for Bachelor's, Master's, and Doctoral programs.", url: "https://www.uzh.ch/en/studies/application.html" },
    { title: "ETH Zurich Doctorate Admissions", desc: "Information on applying for doctoral studies at ETH Zurich.", url: "https://ethz.ch/en/doctorate.html" },
    { title: "Swiss Federal Statistical Office — Education", desc: "Comprehensive national statistics on the education system.", url: "https://www.bfs.admin.ch/bfs/en/home/statistics/education-science.html" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SCard>
        <SH>Official Resources &amp; Key Contacts</SH>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {links.map(({ title, desc, url }) => (
            <a key={title} href={url} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 20px", borderRadius: 14,
              background: "var(--surface-2)", border: "1px solid var(--border)",
              textDecoration: "none", transition: "border-color 0.2s, background 0.2s",
              gap: 12,
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(${BLUE_RGB},0.4)`; (e.currentTarget as HTMLAnchorElement).style.background = `rgba(${BLUE_RGB},0.04)`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface-2)"; }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: BLUE, marginBottom: 3, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{title}</div>
                <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
              </div>
              <ExternalLink size={14} style={{ color: "var(--text-3)", flexShrink: 0 }} />
            </a>
          ))}
        </div>
      </SCard>
    </div>
  );
}

export default function ZurichEducationPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <PageHeader
        title="Zurich Education Navigator"
        subtitle="A strategic guide to the Zurich cantonal education system — from kindergarten to PhD. Master the pathways, understand permeability, and make informed decisions for your family."
        badge="Education Guide"
        gradient="from-blue-500 to-indigo-500"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Education & Schools", href: "/living/education" },
          { label: "Zurich Education Guide" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Tab navigation */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28,
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
                  flex: "1 1 auto", minWidth: 100,
                  padding: "9px 16px", borderRadius: 10,
                  border: isActive ? `1px solid rgba(${BLUE_RGB},0.28)` : "1px solid transparent",
                  background: isActive ? `rgba(${BLUE_RGB},0.10)` : "transparent",
                  cursor: "pointer", transition: "all 0.2s",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: isActive ? BLUE : "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                  {tab.label}
                </div>
                <div style={{ fontSize: 10, color: isActive ? BLUE : "var(--text-3)", marginTop: 2, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", opacity: 0.8 }}>
                  {tab.sublabel}
                </div>
              </button>
            );
          })}
        </div>

        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "compulsory" && <CompulsoryTab />}
        {activeTab === "upper" && <UpperTab />}
        {activeTab === "tertiary" && <TertiaryTab />}
        {activeTab === "alternatives" && <AlternativesTab />}
        {activeTab === "stats" && <StatsTab />}
        {activeTab === "resources" && <ResourcesTab />}

        {/* Link to main education page */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link href="/living/education" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, color: "var(--text-3)",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            textDecoration: "none",
          }}>
            ← Back to Education &amp; Schools overview
          </Link>
        </div>

        {/* Disclaimer */}
        <div style={{
          marginTop: 24, padding: "16px 20px", borderRadius: 14,
          background: "var(--surface-2)", border: "1px solid var(--border)",
          fontSize: 11, color: "var(--text-3)", lineHeight: 1.7,
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        }}>
          <strong style={{ color: "var(--text-2)" }}>Disclaimer:</strong> This information is provided for general guidance only and is subject to change. The Zurich education system is governed by cantonal law and updated regularly — always consult official sources (Bildungsdirektion, berufsberatung.ch, or your school) for current requirements. Last updated: June 2025.
        </div>

        {/* Seek Advice */}
        <div style={{ marginTop: 40, padding: "32px 36px", borderRadius: 24, border: "1px solid rgba(74,144,196,0.20)", background: "rgba(74,144,196,0.03)" }}>
          <div style={{ marginBottom: 22 }}>
            <span className="tag" style={{ marginBottom: 10, display: "inline-flex" }}>Community Help</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
              Education Questions?
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-2)", marginTop: 6, marginBottom: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              Ask the Indiaspora community — parents and professionals who've navigated the Swiss school system.
            </p>
          </div>
          <SeekAdviceForm defaultTopic="Education & Schools" accent="#4A90C4" accentRgb="74,144,196" compact />
        </div>
      </div>
    </div>
  );
}
