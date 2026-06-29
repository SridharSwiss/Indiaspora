import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Living in Switzerland",
  description: "Complete guide for Indians living in Switzerland — permits, housing, healthcare, schools, banking, transport, and daily life.",
};

const QUICK_LINKS = [
  { title: "Residence Permits", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html", desc: "B, C, L permits — official SEM information" },
  { title: "Health Insurance (Comparis)", url: "https://www.comparis.ch/krankenkassen/praemienvergleich", desc: "Compare Krankenkasse premiums" },
  { title: "SBB Public Transport", url: "https://www.sbb.ch", desc: "Train timetables, GA cards, and Half-Fare passes" },
  { title: "Homegate – Rentals", url: "https://www.homegate.ch", desc: "Switzerland's leading rental property portal" },
  { title: "Anmeldung – Gemeinde Zurich", url: "https://www.stadt-zuerich.ch/portal/de/index/politik_u_recht/stadtrat/zustaendigkeiten/bevoelkerungsamt.html", desc: "Register at Zurich municipality" },
  { title: "German Courses – Migros Klubschule", url: "https://www.klubschule.ch", desc: "Affordable German and French language classes" },
  { title: "KESB – Child Protection", url: "https://www.kescha.ch", desc: "Child and adult protection authority information" },
  { title: "Integration Zurich", url: "https://www.stadt-zuerich.ch/integration", desc: "Integration programs and support from Stadt Zurich" },
];

const SECTIONS = [
  {
    id: "welcome",
    title: "Arriving in Switzerland",
    emoji: "✈️",
    color: "from-blue-500 to-indigo-600",
    steps: [
      "Register at your local Gemeinde (municipality) within 14 days of arrival",
      "Apply for your residence permit (L, B, or C) at the Migrationsamt",
      "Open a Swiss bank account (UBS, ZKB, Postfinance, or Neo banks like Neon, Revolut)",
      "Get mandatory health insurance (Krankenkasse / KVG) within 3 months",
      "Register children at local schools through the Schulverwaltung",
      "Get a Swiss SIM card — Sunrise, Salt, and Swisscom are the main providers",
    ],
  },
  {
    id: "housing",
    title: "Housing & Rentals",
    emoji: "🏠",
    color: "from-teal-500 to-cyan-600",
    steps: [
      "The rental market is very competitive — apply quickly with all documents ready",
      "Documents needed: Betreibungsauszug (debt register extract), last 3 pay slips, passport copy",
      "Search on Homegate, Comparis, Immoscout24, and Indian Facebook groups",
      "Typical deposit: 2–3 months rent, held in a blocked bank account",
      "Read the Mietvertrag (rental contract) carefully — Swiss tenancy law strongly protects tenants",
      "VHTG (tenant association) offers free advice: mieterverband.ch",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    emoji: "🏥",
    color: "from-rose-500 to-pink-600",
    steps: [
      "Health insurance (Grundversicherung) is mandatory for all residents in Switzerland",
      "Basic insurance covers core medical needs — compare at comparis.ch",
      "Choose between standard, HMO, or Telmed models for lower premiums",
      "Supplementary insurance (Zusatzversicherung) covers dental, glasses, and private rooms",
      "GP referrals are needed for specialists in HMO/Telmed models",
      "Emergency: Call 144 for ambulance, 145 for poison control, 117 for police",
    ],
  },
  {
    id: "education",
    title: "Education & Schools",
    emoji: "🎓",
    color: "from-amber-500 to-orange-500",
    steps: [
      "Public schools are free, high-quality, and children are assigned based on address",
      "International schools: Zurich International School (ZIS), American School of Zurich, ISGE Geneva",
      "Universities: ETH Zurich, University of Zurich (UZH), EPFL Lausanne — world-class",
      "IAGZ and other Indian associations run Hindi / Indian language weekend schools",
      "Indian curriculum CBSE schools available in Zurich for short-term expats",
      "Daycare (Krippe) and after-school care available — apply well in advance",
    ],
  },
  {
    id: "finance",
    title: "Banking & Finance",
    emoji: "🏦",
    color: "from-purple-500 to-violet-600",
    steps: [
      "Major banks: UBS, ZKB (Zurich Cantonal Bank), Postfinance, Credit Suisse (now UBS)",
      "Neo banks: Neon, Yuh, Revolut — easy to open, no minimum balance, low fees",
      "Open a bank account — you typically need a passport, permit, and address confirmation",
      "Swiss franc (CHF) is the currency — use TWINT for local payments",
      "Tax filing: Zurich uses the online Steueramt portal (steuern.zh.ch)",
      "Pension: Swiss 3-pillar system — understand AHV, BVG, and 3a savings",
    ],
  },
  {
    id: "transport",
    title: "Transport",
    emoji: "🚆",
    color: "from-emerald-500 to-teal-600",
    steps: [
      "Switzerland has the best public transport in the world — use it!",
      "SBB trains connect all cities; ZVV covers Zurich region buses and trams",
      "GA Travelcard: unlimited travel on all SBB/ZVV — expensive but worth it",
      "Half-Fare Card (Halbtax): 50% off all tickets — great value at ~CHF 185/year",
      "SwitzerlandMobilty app for hiking and cycling route planning",
      "Indian driving licence convertible to Swiss licence within 12 months of arrival",
    ],
  },
  {
    id: "legal",
    title: "Legal & Immigration",
    emoji: "⚖️",
    color: "from-orange-500 to-red-500",
    steps: [
      "EU/EFTA citizens: free movement, B permit initially, C permit after 5 years",
      "Non-EU (Indian passport): need job offer, employer sponsors your work permit",
      "OCI Card: register at Embassy of India in Berne (indembassybern.gov.in)",
      "Passport renewal: contact Indian Embassy or Consulate in Geneva",
      "Dual citizenship: India does not allow dual citizenship — check implications",
      "Legal advice: HEKS, Caritas, and Rechtsberatung services offer free consultations",
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
