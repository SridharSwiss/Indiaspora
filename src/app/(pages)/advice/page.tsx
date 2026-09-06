"use client";

import PageHeader from "@/components/ui/PageHeader";
import SeekAdviceForm from "@/components/ui/SeekAdviceForm";
import { MessageCircle, Shield, Users, Clock } from "lucide-react";

const GOLD = "#CEB07A";
const GOLD_RGB = "201,169,110";

const TOPIC_CARDS = [
  { icon: "🏦", label: "Banking & Finance", desc: "Opening accounts, investments, wealth management" },
  { icon: "🏠", label: "Housing", desc: "Rentals, property, tenant rights, relocating" },
  { icon: "🏥", label: "Healthcare", desc: "Insurance, doctors, hospitals, Krankenkasse" },
  { icon: "📋", label: "Immigration & Permits", desc: "Residence permits, citizenship, family reunion" },
  { icon: "🎓", label: "Education & Schools", desc: "Schools, universities, expat options" },
  { icon: "🧾", label: "Tax & Accounting", desc: "Swiss taxes, deductions, filing requirements" },
  { icon: "👴", label: "Pension / Retirement", desc: "AHV, Pillar 2 & 3, pension planning" },
  { icon: "💼", label: "Business & Startups", desc: "Company formation, licensing, networking" },
  { icon: "🛡️", label: "Insurance", desc: "Life, home, liability, and supplementary cover" },
  { icon: "⚖️", label: "Legal Advice", desc: "Contracts, disputes, employment law" },
];

export default function AdvicePage() {
  return (
    <div>
      <PageHeader
        title="Seek Advice"
        subtitle="Ask the community — get guidance from Indians who've navigated life in Switzerland before you."
        badge="Community Help"
        gradient="from-amber-500 to-yellow-400"
        breadcrumbs={[{ label: "Seek Advice" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* How it works */}
        <section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
            {[
              { icon: <MessageCircle size={22} />, title: "Ask Your Question", desc: "Describe your situation — anything from tax queries to school advice." },
              { icon: <Users size={22} />, title: "Community Responds", desc: "Experienced community members and trusted advisors review your query." },
              { icon: <Clock size={22} />, title: "Quick Turnaround", desc: "We aim to connect you with the right person within 48 hours." },
              { icon: <Shield size={22} />, title: "Private & Safe", desc: "Your data is never shared publicly or sold to third parties." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: "22px 24px", border: `1px solid rgba(${GOLD_RGB},0.18)` }}>
                <div style={{ color: GOLD, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 6, fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</div>
                <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Topics */}
        <section>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 700, color: "var(--text)", marginBottom: 8, marginTop: 0 }}>
            What Can We Help With?
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 24, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            We cover a wide range of topics relevant to Indians living in or relocating to Switzerland.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
            {TOPIC_CARDS.map(({ icon, label, desc }) => (
              <div key={label} className="card" style={{ padding: "16px 18px", border: "1px solid var(--border)", cursor: "default" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{label}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section>
          <div className="card" style={{ padding: "36px 40px", borderRadius: 24, border: `1px solid rgba(${GOLD_RGB},0.18)` }}>
            <div style={{ marginBottom: 28 }}>
              <span className="tag" style={{ marginBottom: 12, display: "inline-flex" }}>Submit Your Query</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
                Ask the Expert
              </h2>
              <p style={{ fontSize: 13, color: "var(--text-2)", marginTop: 8, marginBottom: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                Fill in your details below. All fields marked * are required.
              </p>
            </div>
            <SeekAdviceForm />
          </div>
        </section>

      </div>
    </div>
  );
}
