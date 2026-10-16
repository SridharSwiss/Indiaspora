import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "First 30 Days in Switzerland — Indian Expat Checklist",
  description: "Step-by-step checklist for Indians arriving in Switzerland: Gemeinde registration, SIM card, bank account, health insurance, Zürisack, and settling-in essentials for Zurich, Basel, Geneva, and Lausanne.",
  keywords: ["first 30 days Switzerland Indian", "Gemeinde registration Switzerland", "Swiss SIM card new arrival", "health insurance Switzerland new expat", "Zürisack guide", "Swiss bank account Indian passport", "register Switzerland new arrival", "Day 1 Switzerland checklist Indian"],
  openGraph: {
    title: "First 30 Days in Switzerland — Indian Expat Checklist | IndiaSwiss",
    description: "Complete step-by-step checklist for your first month in Switzerland as an Indian expat.",
  },
};

const checklist = [
  {
    week: "Days 1–3",
    color: "bg-red-500/15 text-red-400 border-red-500/20",
    tasks: [
      { task: "Get a Swiss SIM card", detail: "Sunrise, Salt, or Swisscom at the airport or Migros/Coop. Twint (mobile payment) requires a Swiss bank account — set up next.", swissTerm: "Prepaid SIM / Handy-Abo" },
      { task: "Buy your first Zürisack", detail: "In Zurich, ordinary bin bags are refused. Buy official pre-paid Zürisack bags (35L ≈ CHF 2.15) at Migros or Coop.", swissTerm: "Zürisack / Kehrichtsack" },
      { task: "Locate your nearest Indian grocery store", detail: "Aggarwal Zurich (Oerlikon, Langstrasse), India Supermarkt (Zurich HB area), Barkat Basel, Seelan Market Geneva.", swissTerm: "Asienladen / Indischer Lebensmittelladen" },
      { task: "Understand ceiling lights situation", detail: "Swiss apartments come without ceiling light fittings — only a Lüsterklemme (exposed wire). Visit IKEA or Migros Do-it+Garden for pendant lamps.", swissTerm: "Lüsterklemme / Deckenauslass" },
    ],
  },
  {
    week: "Days 4–14",
    color: "bg-orange-500/15 text-orange-400 border-orange-500/20",
    tasks: [
      { task: "Register at Gemeinde (Anmeldung)", detail: "Mandatory within 14 days. Bring: passport, rental agreement (your name on mailbox), employment contract, apostilled marriage/birth certificates.", swissTerm: "Anmeldung / Contrôle des habitants" },
      { task: "Open a Swiss bank account", detail: "Neon or Yuh (app-only, no minimum balance) are easiest for new arrivals. Traditional banks (UBS, ZKB, Raiffeisen) require in-person visits.", swissTerm: "Bankkonto eröffnen" },
      { task: "Choose and register health insurance (Krankenkasse)", detail: "Mandatory within 3 months of arrival, backdated to arrival date. Compare on comparis.ch. Budget ~CHF 350–450/month for a standard plan.", swissTerm: "Krankenkasse / Grundversicherung" },
      { task: "Get a public transport card", detail: "Half-Fare Card (Halbtax-Abo, CHF 190/yr) gives 50% off all SBB, tram, bus tickets. Buy at SBB.ch. Regular commuters may consider GA Travelcard.", swissTerm: "Halbtax-Abo / GA-Abonnement" },
    ],
  },
  {
    week: "Month 1",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    tasks: [
      { task: "Understand Waschküche (laundry room) rules", detail: "Most apartments have shared laundry rooms with booking systems. No Sunday use, no use after 10 PM. Leave machines spotless.", swissTerm: "Waschküche / Hausordnung / Ruhezeiten" },
      { task: "Learn Swiss recycling rules for your PLZ", detail: "Glass by colour, paper/cardboard on calendar days, PET bottles at Migros/Coop, e-waste at Migros Recyclingstation. Check entsorgung.ch.", swissTerm: "Entsorgungskalender / Recycling" },
      { task: "Set up Twint mobile payment", detail: "Switzerland's national mobile payment. Link to Swiss bank account. Used everywhere from farm stands to parking meters.", swissTerm: "Twint / IBAN" },
      { task: "Find your nearest Indian community group", detail: "IAGZ (iagz.ch) for Zurich events, Indian Association Geneva, ICAS for Basel. Join upcoming Diwali, Navratri, and community events.", swissTerm: "Indische Gemeinschaft / Diaspora" },
    ],
  },
  {
    week: "Before Month 3",
    color: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    tasks: [
      { task: "Start Swiss German / French classes", detail: "A2 German is often required for C permit after 5–10 years. VHS Zurich, Migros Klubschule, or online apps (Duolingo, Lingoda).", swissTerm: "Deutschkurs / Sprachkurs" },
      { task: "Book your Indian driving license Kontrollfahrt assessment", detail: "You have 12 months from arrival. One attempt only. Take 5–8 lessons first with an instructor who knows local test routes.", swissTerm: "Kontrollfahrt / Führerausweis" },
      { task: "Register children at local Kindergarten / Schule", detail: "Contact your Gemeinde's Schulverwaltung. Swiss school is mandatory from age 4 (Kindergarten). Ask about German support classes (DaZ).", swissTerm: "Schulanmeldung / Kindergarten / DaZ" },
    ],
  },
];

export default function First30DaysPage() {
  return (
    <div>
      <PageHeader
        title="First 30 Days in Switzerland"
        subtitle="Your complete step-by-step settling-in checklist — from Zurich Airport to your first month living like a local."
        badge="🛬 New Arrival Guide"
        gradient="from-orange-500 to-red-500"
        heroImage="/hero-community.jpg"
        heroImageAlt="First 30 days guide for Indians arriving in Switzerland"
        heroImagePosition="center 40%"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "First 30 Days" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass rounded-2xl p-5 mb-10 border border-orange-500/20">
          <p className="text-sm" style={{ color: "var(--text-2)" }}>
            <strong style={{ color: "var(--text)" }}>Welcome to Switzerland.</strong> This checklist is built from hundreds of real experiences shared by Indians who moved here. The tasks below are ordered by urgency — missing the Gemeinde registration (Day 14) or health insurance (Month 3) deadline has real consequences.
          </p>
        </div>

        <div className="space-y-10">
          {checklist.map((week) => (
            <section key={week.week}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ color: "var(--text)" }}>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${week.color}`}>{week.week}</span>
              </h2>
              <div className="space-y-4">
                {week.tasks.map((t, i) => (
                  <div key={i} className="glass rounded-xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold" style={{ color: "var(--text)" }}>{t.task}</h3>
                      <span className="shrink-0 text-xs font-mono px-2 py-0.5 rounded bg-white/5" style={{ color: "var(--text-3)" }}>🇨🇭 {t.swissTerm}</span>
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-2)" }}>{t.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-6 border border-blue-500/20">
          <h3 className="font-semibold mb-2" style={{ color: "var(--text)" }}>Quick Reference: Key Swiss German Terms for Daily Life</h3>
          <div className="grid sm:grid-cols-2 gap-2 text-sm mt-4">
            {[
              ["Anmeldung", "Gemeinde registration"],
              ["Krankenkasse", "Health insurance (mandatory)"],
              ["Hausordnung", "House rules (in your rental)"],
              ["Ruhezeiten", "Quiet hours (no noise Sun + after 10 PM)"],
              ["Zürisack", "Official paid garbage bag (Zurich)"],
              ["Lüsterklemme", "Exposed ceiling wire (no light fixture)"],
              ["Halbtax-Abo", "Half-fare public transport card"],
              ["Kontrollfahrt", "Indian driving license conversion test"],
            ].map(([de, en]) => (
              <div key={de} className="flex gap-2">
                <span className="font-semibold text-orange-400 shrink-0">{de}:</span>
                <span style={{ color: "var(--text-2)" }}>{en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
