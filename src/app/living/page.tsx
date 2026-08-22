import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Living in Switzerland",
  description: "Complete guide for Indians living in Switzerland — permits, housing, healthcare, schools, banking, transport, and daily life.",
};

const QUICK_LINKS = [
  { title: "Residence Permits (Non-EU)", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht-eu_efta.html", desc: "B, C, L permits for non-EU nationals — official SEM information" },
  { title: "Health Insurance (Comparis)", url: "https://www.comparis.ch/krankenkassen/praemienvergleich", desc: "Compare Krankenkasse premiums — avg CHF 393.30/month (2026)" },
  { title: "SBB Public Transport", url: "https://www.sbb.ch", desc: "GA Travelcard from CHF 2,780/yr; Half-Fare Card CHF 190/yr" },
  { title: "Homegate – Rentals", url: "https://www.homegate.ch", desc: "Switzerland's leading rental property portal" },
  { title: "Anmeldung – Stadt Zurich", url: "https://www.stadt-zuerich.ch/portal/de/index/politik_u_recht/stadtrat/zustaendigkeiten/bevoelkerungsamt.html", desc: "Register at Zurich municipality (Bevölkerungsamt)" },
  { title: "German Courses – Migros Klubschule", url: "https://www.klubschule.ch", desc: "Affordable German and French language classes across Switzerland" },
  { title: "Immoscout24", url: "https://www.immoscout24.ch", desc: "Additional rental and property search platform" },
  { title: "Integration Zurich", url: "https://www.stadt-zuerich.ch/integration", desc: "Integration programs and support from Stadt Zurich" },
];

const SECTIONS = [
  {
    id: "welcome",
    title: "Arriving in Switzerland",
    emoji: "✈️",
    color: "from-blue-500 to-indigo-600",
    steps: [
      "Register at your local Gemeinde (municipality) within 14 days of arrival — bring passport and rental contract",
      "Apply for your residence permit (L, B, or C) at the Migrationsamt — Indians need employer sponsorship for B/L permits",
      "Open a Swiss bank account — UBS, ZKB, Postfinance, or neo banks like Neon, Yuh (easiest for newcomers)",
      "Get mandatory health insurance (Krankenkasse / KVG) within 3 months — avg CHF 393.30/month (2026 BAG data)",
      "Register children at local schools through the Schulverwaltung — public schools are free and excellent",
      "Get a Swiss SIM card — Sunrise, Salt, and Swisscom are the main providers; Wingo and Lycamobile for budget options",
    ],
  },
  {
    id: "housing",
    title: "Housing & Rentals",
    emoji: "🏠",
    color: "from-teal-500 to-cyan-600",
    steps: [
      "The rental market is extremely competitive — apply quickly with all documents ready in advance",
      "Documents needed: Betreibungsauszug (debt register extract), last 3 pay slips, passport copy, and permit",
      "Search on Homegate, Comparis, Immoscout24, and Indian/Desi Facebook groups for community leads",
      "Deposit: legally capped at 3 months rent, must be held in a blocked bank account (not with landlord)",
      "Read the Mietvertrag (rental contract) carefully — Swiss tenancy law strongly protects tenants",
      "Mieterverband (mieterverband.ch) offers free tenant legal advice — highly recommended for disputes",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    emoji: "🏥",
    color: "from-rose-500 to-pink-600",
    steps: [
      "Health insurance (Grundversicherung) is mandatory for all residents — register within 3 months of arrival",
      "Average premium: CHF 393.30/month (2026, BAG federal data) — compare plans at comparis.ch",
      "Choose between standard, HMO, or Telmed models — HMO/Telmed give 10–25% discount on premiums",
      "Supplementary insurance (Zusatzversicherung) covers dental, glasses, private rooms, and alternative medicine",
      "GP referrals are required for specialists under HMO/Telmed models",
      "Emergency numbers: 144 (ambulance), 117 (police), 118 (fire), 145 (poison control), 112 (EU), 1414 (alpine rescue)",
    ],
  },
  {
    id: "education",
    title: "Education & Schools",
    emoji: "🎓",
    color: "from-amber-500 to-orange-500",
    steps: [
      "Public schools are free, high-quality, and children are assigned based on home address — no school fees",
      "International schools: Zurich International School (ZIS), American School of Zurich, ISGE Geneva",
      "Universities: ETH Zurich (#7 world), University of Zurich (UZH), EPFL Lausanne (#14 world) — world-class",
      "IAGZ and other Indian associations run Hindi and Indian language weekend schools in Zurich",
      "Indian curriculum CBSE school (Euroschool Zurich) available for short-term expats",
      "Daycare (Krippe) and after-school care (Hort) available — apply 6–12 months in advance as waitlists are long",
    ],
  },
  {
    id: "finance",
    title: "Banking & Finance",
    emoji: "🏦",
    color: "from-purple-500 to-violet-600",
    steps: [
      "Major banks: UBS, ZKB (Zurich Cantonal Bank), Postfinance — UBS acquired Credit Suisse in 2023",
      "Neo banks: Neon, Yuh, Revolut — easy to open online, no minimum balance, low international fees",
      "Open a bank account with passport, residence permit, and address confirmation (Anmeldebestätigung)",
      "Swiss franc (CHF) is the currency — TWINT is the dominant mobile payment app in Switzerland",
      "Tax filing: Zurich uses the online Steueramt portal (steuern.zh.ch) — most cantons have online filing",
      "3-pillar pension: AHV (state, mandatory), BVG/Pensionskasse (occupational, mandatory), 3a (private, voluntary, max CHF 7,258/year in 2025)",
    ],
  },
  {
    id: "transport",
    title: "Transport",
    emoji: "🚆",
    color: "from-emerald-500 to-teal-600",
    steps: [
      "Switzerland has the world's most punctual public transport — trains, buses, trams run on the minute",
      "SBB trains connect all cities; ZVV covers Zurich region; TPG covers Geneva; TL covers Lausanne",
      "GA Travelcard: unlimited travel on all SBB/ZVV — from CHF 2,780/year (2nd class) or CHF 4,720/year (1st class)",
      "Half-Fare Card (Halbtax): 50% off all tickets — CHF 190/year adults, CHF 120/year youth (under 25)",
      "SBB Mobile and ZVV apps for timetables; SwitzerlandMobility for hiking and cycling routes",
      "Indian driving licence: 12-month grace period to drive in Switzerland, then a FULL Swiss driving test is required — there is no reciprocity agreement with India",
    ],
  },
  {
    id: "legal",
    title: "Legal & Immigration",
    emoji: "⚖️",
    color: "from-orange-500 to-red-500",
    steps: [
      "EU/EFTA citizens: free movement under bilateral agreements — B permit initially, C permit after 5 years",
      "Non-EU Indians: need a job offer with employer sponsorship; quota limited to 4,500 B + 4,000 L permits/year (2025–26)",
      "C permit (settlement): requires 10 years of residence, A2 spoken German/French, and A1 written language proficiency",
      "OCI Card renewal, passport services: Embassy of India in Berne (indembassybern.gov.in) or Consulate General in Geneva (cgigeneva.gov.in)",
      "Dual citizenship: India does not permit dual citizenship — OCI card is the closest status available for Swiss-naturalised Indians",
      "Free legal advice: HEKS, Caritas Switzerland, and cantonal Rechtsberatung services — important for permit and immigration queries",
    ],
  },
];

export default function LivingPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">Living in Switzerland</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            Your Complete <span className="gradient-text">Switzerland Guide</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From your first day in Switzerland to building a permanent home — permits, housing, healthcare, schools, banking, and everything in between.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#welcome" className="btn btn-primary">
              Start Here <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#housing" className="btn btn-outline">Housing Guide</a>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="tag">Quick Links</span>
            <h2 className="text-2xl font-bold text-white mt-4">Essential Swiss Resources</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 group block"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm group-hover:text-indigo-400 transition-colors">{link.title}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 shrink-0 transition-colors" />
                </div>
                <p className="text-xs text-slate-500">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Guide Sections */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {SECTIONS.map((section) => (
            <div key={section.id} id={section.id} className="card overflow-hidden">
              <div className={`bg-gradient-to-r ${section.color} p-6 flex items-center gap-4`}>
                <span className="text-3xl">{section.emoji}</span>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {section.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 text-indigo-400" style={{ background: "rgba(249,115,22,0.1)" }}>
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-3xl font-bold text-white mb-4">Need Help Settling In?</h2>
            <p className="text-slate-400 mb-8">
              Connect with our community of Indians who have been there. Ask questions, get advice, and find support.
            </p>
            <Link href="/community" className="btn btn-primary">
              Join the Community <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
