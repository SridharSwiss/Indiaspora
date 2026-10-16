"use client";

import React, { useState, useMemo } from "react";

type Canton = "ALL" | "ZH" | "BS" | "GE" | "VD" | "ZG";
type LifeStage = "newcomer" | "settling" | "family" | "longterm";

interface ErrandItem {
  id: string;
  title: string;
  stage: LifeStage;
  cantons: Canton[];
  urgency: "Day 1–14" | "Month 1–3" | "Ongoing" | "Before 12 Months";
  swissTerm: string;
  summary: string;
  microTip: string;
}

const ERRANDS_DATA: ErrandItem[] = [
  {
    id: "gemeinde-reg",
    title: "Register at Gemeinde / Kreisbüro",
    stage: "newcomer",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG"],
    urgency: "Day 1–14",
    swissTerm: "Anmeldung / Contrôle des habitants",
    summary: "Mandatory registration within 14 days of arrival and before your first day of work.",
    microTip: "Bring your employment contract, rental agreement (ensure your name is on the mailbox!), passport, and marriage/birth certificates (apostilled).",
  },
  {
    id: "grocery-decoder",
    title: "Migros & Coop Grocery Decoder",
    stage: "newcomer",
    cantons: ["ALL"],
    urgency: "Day 1–14",
    swissTerm: "Speisequark / Vollrahm / Kichererbsenmehl",
    summary: "Find Indian kitchen equivalents in standard Swiss supermarkets plus local Indian store delivery days.",
    microTip: "Fresh curry leaves, okra, and Alphonso mangoes arrive at Zurich (Oerlikon/Langstrasse) & Basel Indian stores every Tuesday Afternoon.",
  },
  {
    id: "zurisack",
    title: "Zürisack & Swiss Waste System",
    stage: "newcomer",
    cantons: ["ALL", "ZH"],
    urgency: "Day 1–14",
    swissTerm: "Zürisack / Kehrichtsack / Entsorgungskalender",
    summary: "Garbage in Zurich requires official paid Zürisack bags — regular plastic bags are refused. Each canton has its own system.",
    microTip: "Buy Zürisacks (35L ~CHF 2.15 each) at Migros/Coop. Glass must be separated by colour (white, brown, green). Cardboard collection is calendar-based — check your PLZ at stadt-zuerich.ch/entsorgung.",
  },
  {
    id: "ceiling-lights",
    title: "No Ceiling Lights in Swiss Apartments",
    stage: "newcomer",
    cantons: ["ALL"],
    urgency: "Day 1–14",
    swissTerm: "Lüsterklemme / Deckenauslass",
    summary: "Swiss apartments typically have no ceiling light fittings — only a Lüsterklemme (exposed wire connector) for tenants to install their own fixtures.",
    microTip: "Rent a Bohrhammer (hammer drill) from Migros Do-it+Garden or Hornbach to mount IKEA pendant lamps into concrete ceilings. Most fixtures need M8 concrete anchors.",
  },
  {
    id: "driving-license",
    title: "Convert Indian Driving License",
    stage: "settling",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG"],
    urgency: "Before 12 Months",
    swissTerm: "Kontrollfahrt / Course de contrôle",
    summary: "You have 12 months from arrival to pass the practical Kontrollfahrt — you only get ONE attempt.",
    microTip: "Do not attempt the Kontrollfahrt without 5–8 lessons with an instructor who knows your local Strassenverkehrsamt test routes. Contact the ASTRA (astra.admin.ch) for your canton's office.",
  },
  {
    id: "laundry-room",
    title: "Waschküche (Laundry Room) Etiquette",
    stage: "newcomer",
    cantons: ["ALL"],
    urgency: "Day 1–14",
    swissTerm: "Waschküche / Ruhezeiten / Waschplan",
    summary: "Most Swiss apartment buildings have a shared Waschküche with a booking system. Strict Ruhezeiten (quiet hours) apply on Sundays and after 10 PM.",
    microTip: "Never use the laundry room on Sundays or public holidays without checking the Hausordnung (house rules). Leave the machine spotless — in Swiss culture, this is taken very seriously.",
  },
  {
    id: "parents-visiting",
    title: "Parents Visiting (Visa + Day Companions)",
    stage: "family",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG"],
    urgency: "Ongoing",
    swissTerm: "Verpflichtungserklärung & Schengen Visa",
    summary: "Schengen sponsorship checklist + connect your visiting parents with other Indian seniors in your PLZ for morning walks.",
    microTip: "Your Verpflichtungserklärung (financial guarantee) must be notarised at your Gemeinde. Get Schengen travel insurance (min €30,000 cover) from Helsana or Zurich Insurance. Apply at VFS New Delhi/Mumbai 3 months before.",
  },
  {
    id: "kids-language",
    title: "Kita Subsidies & School System for Indian Kids",
    stage: "family",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG"],
    urgency: "Month 1–3",
    swissTerm: "Kita / Chindsgi / Gymiprüfung",
    summary: "Swiss Kita (daycare) subsidies vary by canton and income. Understanding the school system (Kindergarten → Primarschule → Gymiprüfung) is crucial for bicultural families.",
    microTip: "In Zurich, apply for Kita subsidies via kitas.ch immediately on arrival — waitlists are 6–18 months. The Gymiprüfung (age 12) determines secondary school path; Bala Vihar, Hindi classes, and dance help maintain Indian heritage.",
  },
  {
    id: "pillar-3a-nre",
    title: "Swiss Taxes, Pillar 3a & India NRE/NRO",
    stage: "longterm",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG"],
    urgency: "Ongoing",
    swissTerm: "Quellensteuer / Säule 3a / DTAA",
    summary: "Navigate Swiss wealth tax declaration for Indian assets, Double Taxation Avoidance Agreement (DTAA), and Pillar 3a.",
    microTip: "Even on Permit B (Quellensteuer), if your gross income exceeds CHF 120,000 or global wealth exceeds canton thresholds, you must file a full tax return (ordentliche Veranlagung). Declare Indian NRE/NRO accounts on your Swiss tax return.",
  },
  {
    id: "oci-renewal",
    title: "OCI Card Renewal & Indian Passport in Switzerland",
    stage: "longterm",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG"],
    urgency: "Ongoing",
    swissTerm: "OCI / VFS Global / Embassy Bern",
    summary: "OCI card renewals, Indian passport renewal, and birth registration for children born in Switzerland handled through VFS Global Zurich/Geneva and Embassy of India Bern.",
    microTip: "OCI re-issue is mandatory when your Indian passport expires (required every passport renewal). VFS Zurich (Flughafen Zurich, Airside Centre) for consular services. Book appointments 4–6 weeks in advance at vfsglobal.com/IND/CH.",
  },
];

const GROCERY_DICTIONARY = [
  { indian: "Dahi / Curd (Thick)", swiss: "Nature Joghurt / Griechischer Joghurt", store: "Migros / Coop" },
  { indian: "Shrikhand Base", swiss: "Speisequark (Rahmquark)", store: "Migros / Coop" },
  { indian: "Heavy Cream (for Makhani)", swiss: "Vollrahm (35% fat) or Doppelrahm", store: "Migros / Coop" },
  { indian: "All-Purpose Flour (Maida)", swiss: "Weissmehl (Typ 400)", store: "Migros / Coop" },
  { indian: "Whole Wheat (Chakki Atta substitute)", swiss: "Ruchmehl or Vollkornmehl", store: "Migros / Coop (or Ashirvaad at Aggarwal)" },
  { indian: "Besan (Gram / Chickpea Flour)", swiss: "Kichererbsenmehl", store: "Coop / Alnatura / Indian stores" },
  { indian: "Baking Soda (for Dhokla/Idli)", swiss: "Natron (NOT Backpulver!)", store: "Coop / Pharmacy / Reformhaus" },
  { indian: "Hing / Asafoetida", swiss: "Asant (very rare — buy at Indian stores)", store: "Aggarwal / Indian Supermarkt Oerlikon" },
  { indian: "Curry Leaves (fresh)", swiss: "Curryblätter (not curry powder!)", store: "Indian stores Tues delivery" },
  { indian: "Jaggery / Gur", swiss: "Rohrzucker / Palmzucker (approx)", store: "Bio stores / Indian stores" },
  { indian: "Ghee", swiss: "Butterreinfett / Butterschmalz", store: "Migros / Coop / Indian stores" },
  { indian: "Urad Dal (black lentils)", swiss: "Schwarze Linsen / Belugalinsen (approx)", store: "Indian stores / Bio stores" },
];

export default function CommunityLifeHub() {
  const [selectedCanton, setSelectedCanton] = useState<Canton>("ZH");
  const [selectedStage, setSelectedStage] = useState<LifeStage>("newcomer");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredErrands = useMemo(() => {
    return ERRANDS_DATA.filter((item) => {
      const matchesStage = searchQuery ? true : item.stage === selectedStage;
      const matchesCanton =
        selectedCanton === "ALL" ||
        item.cantons.includes("ALL") ||
        item.cantons.includes(selectedCanton);
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.swissTerm.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStage && matchesCanton && matchesSearch;
    });
  }, [selectedCanton, selectedStage, searchQuery]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Top Context & Canton Bar */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-orange-200/40 bg-orange-500/5 p-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
            Swiss-Indian Daily Navigator
          </span>
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            Everything You Need for Daily Life in Switzerland
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="canton-select" className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
            📍 Your Canton:
          </label>
          <select
            id="canton-select"
            value={selectedCanton}
            onChange={(e) => setSelectedCanton(e.target.value as Canton)}
            className="rounded-lg border px-3 py-1.5 text-sm font-semibold"
            style={{ background: "var(--surface)", color: "var(--text)", borderColor: "var(--border)" }}
          >
            <option value="ALL">All Switzerland</option>
            <option value="ZH">Zürich (ZH)</option>
            <option value="BS">Basel (BS/BL)</option>
            <option value="GE">Geneva (GE)</option>
            <option value="VD">Vaud / Lausanne (VD)</option>
            <option value="ZG">Zug (ZG)</option>
          </select>
        </div>
      </div>

      {/* Search & Life-Stage Tabs */}
      <div className="mb-8 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-5">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search: 'Kontrollfahrt', 'paneer', 'parents visa', 'Zürisack'..."
            className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
            style={{ background: "var(--surface)", color: "var(--text)", borderColor: "var(--border)" }}
          />
        </div>
        <div className="flex flex-wrap gap-2 md:col-span-7 md:justify-end">
          {(
            [
              { id: "newcomer" as LifeStage, label: "🛬 Just Landed (0–90d)" },
              { id: "settling" as LifeStage, label: "🏠 Settling In" },
              { id: "family" as LifeStage, label: "👨‍👩‍👧 Family & Parents" },
              { id: "longterm" as LifeStage, label: "📈 Taxes & Long-Term" },
            ]
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setSelectedStage(tab.id); setSearchQuery(""); }}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                selectedStage === tab.id && !searchQuery
                  ? "bg-orange-500 text-white"
                  : "glass border text-sm"
              }`}
              style={selectedStage === tab.id && !searchQuery ? {} : { color: "var(--text-2)" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Actionable Micro-Needs Cards */}
      <div className="mb-12 grid gap-6 md:grid-cols-2">
        {filteredErrands.length === 0 && (
          <div className="md:col-span-2 text-center py-10" style={{ color: "var(--text-2)" }}>
            No results found. Try a different search term.
          </div>
        )}
        {filteredErrands.map((item) => (
          <div
            key={item.id}
            className="glass flex flex-col justify-between rounded-xl p-6 card-hover"
          >
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-md bg-orange-500/15 px-2.5 py-1 text-xs font-bold text-orange-400">
                  {item.urgency}
                </span>
                <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>
                  🇨🇭 {item.swissTerm}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold" style={{ color: "var(--text)" }}>{item.title}</h3>
              <p className="mb-4 text-sm" style={{ color: "var(--text-2)" }}>{item.summary}</p>
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-emerald-400">
              <strong>💡 Community Insider Tip:</strong> {item.microTip}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Utility: The Swiss Supermarket Decoder */}
      <div className="glass rounded-xl p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>
            🛒 Instant Swiss Supermarket Decoder (Migros / Coop)
          </h3>
          <p className="text-xs mt-1" style={{ color: "var(--text-2)" }}>
            Never buy Backpulver instead of Natron again — what Indian staples are called on Swiss shelves.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GROCERY_DICTIONARY.map((row) => (
            <div
              key={row.indian}
              className="rounded-lg border p-3 text-sm"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="font-bold" style={{ color: "var(--text)" }}>{row.indian}</div>
              <div className="text-orange-400 font-medium">→ {row.swiss}</div>
              <div className="mt-1 text-xs" style={{ color: "var(--text-3)" }}>Available at: {row.store}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
