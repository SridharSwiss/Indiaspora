import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Living in Switzerland",
  description: "Complete guide for Indians living in Switzerland — permits, housing, healthcare, schools, banking, transport, and daily life.",
};

const QUICK_LINKS = [
  { title: "Residence Permits (Non-EU)", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht-eu_efta.html", desc: "SEM guide for Indian nationals — L, B, C permits explained" },
  { title: "Health Insurance (Comparis)", url: "https://www.comparis.ch/krankenkassen/praemienvergleich", desc: "Compare Krankenkasse premiums across all Swiss insurers" },
  { title: "SBB Public Transport", url: "https://www.sbb.ch", desc: "Train timetables, GA travelcard, and Half-Fare passes" },
  { title: "Homegate – Rentals", url: "https://www.homegate.ch", desc: "Switzerland's leading rental property portal" },
  { title: "Anmeldung – Gemeinde Zurich", url: "https://www.stadt-zuerich.ch/portal/de/index/politik_u_recht/stadtrat/zustaendigkeiten/bevoelkerungsamt.html", desc: "Register at Zurich municipality within 14 days" },
  { title: "German Courses – Migros Klubschule", url: "https://www.klubschule.ch", desc: "Affordable German and French language classes across Switzerland" },
  { title: "Immoscout24", url: "https://www.immoscout24.ch", desc: "Search rental apartments and houses across Switzerland" },
  { title: "Integration Zurich", url: "https://www.stadt-zuerich.ch/integration", desc: "Integration programs, language courses, and support from Stadt Zurich" },
];

const SECTIONS = [
  {
    id: "welcome",
    title: "Arriving in Switzerland",
    emoji: "✈️",
    color: "from-blue-500 to-indigo-600",
    steps: [
      "Register at your local Gemeinde (municipality) within 14 days of arrival — bring passport, rental contract, and employment contract",
      "Your employer sponsors your work permit application at the cantonal Migration Office (Migrationsamt) — this must happen before you arrive",
      "Open a Swiss bank account — Neon or Yuh (app-based, no minimum balance) are fastest for new arrivals; UBS, ZKB, and Postfinance for full banking",
      "Enrol in mandatory health insurance (Krankenkasse / LaMal) within 3 months — coverage backdates to arrival",
      "Get a Swiss SIM card — Sunrise, Salt, and Swisscom are the main operators; Yallo and Wingo offer budget plans",
      "Register children at the local Schulverwaltung (school administration) — placement is by home address, schools are free",
    ],
  },
  {
    id: "housing",
    title: "Housing & Rentals",
    emoji: "🏠",
    color: "from-teal-500 to-cyan-600",
    steps: [
      "The rental market is extremely competitive in Zurich and Geneva — respond to listings within hours, not days",
      "Documents needed: Betreibungsauszug (debt register extract, from Betreibungsamt), 3 recent pay slips, passport copy, permit copy",
      "Search on Homegate, Comparis, Immoscout24, and Indian community Facebook groups for off-market listings",
      "Typical deposit: 2–3 months rent, held in a blocked bank account (Mietkaution) — returned in full when you leave if no damage",
      "Average rents: Zurich 1-bed CHF 2,000–3,000/month; Basel CHF 1,400–2,200/month; Bern CHF 1,300–2,000/month",
      "Mieterverband (Swiss tenants' association) offers free legal advice on rental contracts — mieterverband.ch",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    emoji: "🏥",
    color: "from-rose-500 to-pink-600",
    steps: [
      "Health insurance (Grundversicherung / LaMal) is mandatory for all residents — must enrol within 3 months, coverage is backdated",
      "All basic insurance covers the same services (set by law) — only price and model differ between providers",
      "Choose between Standard (free doctor choice), HMO (use network GP), or Telmed (call first) — HMO/Telmed are 10–20% cheaper",
      "Average premium: CHF 400–650/month per adult depending on canton, model, and deductible (Franchise) chosen",
      "Supplementary insurance (Zusatzversicherung) adds dental, glasses, international coverage, and private hospital rooms",
      "Emergencies: 144 (ambulance), 145 (poison control), 117 (police), 1811 (medical hotline for non-emergencies)",
    ],
  },
  {
    id: "education",
    title: "Education & Schools",
    emoji: "🎓",
    color: "from-amber-500 to-orange-500",
    steps: [
      "Public schools are free, high-quality, and fully funded by canton — placement is automatic by home address",
      "International schools: Zurich International School (ZIS), American School of Zurich (ASZM), Geneva English School, ISGE",
      "Top universities: ETH Zurich (#7 world, #1 Europe for engineering/science), EPFL (#14 world), University of Zurich",
      "IAGZ and Indian associations run Hindi / Indian language weekend schools for children — check iagz.ch for schedule",
      "University applications from India: ETH and EPFL accept Indian bachelor degrees directly for Masters programs",
      "Daycare (Krippe) has long waitlists — register months in advance; subsidies available depending on income",
    ],
  },
  {
    id: "finance",
    title: "Banking & Finance",
    emoji: "🏦",
    color: "from-purple-500 to-violet-600",
    steps: [
      "Best banks for new arrivals: Neon (app-based, free, open online same day) or Yuh (Postfinance/Swissquote, investing included)",
      "Traditional banks: UBS (largest Swiss bank post-Credit Suisse merger), ZKB (Zurich Cantonal Bank), Raiffeisen, Postfinance",
      "To open a bank account: bring passport, residence permit, and address confirmation (Anmeldebestätigung from Gemeinde)",
      "Swiss franc (CHF) is the currency — use TWINT app for local payments (widely accepted, like UPI in India)",
      "Tax filing: online via cantonal Steueramt portal — Zurich uses ZHprivateTax; most cantons have English interfaces",
      "Swiss pension: 3-pillar system — AHV (state), BVG (employer), and 3a (private) — contribute to 3a early for tax savings",
    ],
  },
  {
    id: "transport",
    title: "Transport",
    emoji: "🚆",
    color: "from-emerald-500 to-teal-600",
    steps: [
      "Switzerland has one of the world's most punctual public transport systems — trains, trams, and buses are impeccably coordinated",
      "SBB is the national railway; ZVV covers Zurich region buses, trams, and S-Bahn; TPG covers Geneva; BVB covers Basel",
      "GA Travelcard (Generalabonnement): unlimited travel on all SBB, trams, and buses — 2nd class CHF ~3,860/year",
      "Half-Fare Card (Halbtax): 50% off all public transport tickets — excellent value at ~CHF 190/year",
      "Indian driving licence: convertible to Swiss licence within 12 months of B permit; no additional tests required",
      "SBB app is essential — download on arrival for tickets, real-time timetables, and bike rental access",
    ],
  },
  {
    id: "legal",
    title: "Legal & Immigration",
    emoji: "⚖️",
    color: "from-orange-500 to-red-500",
    steps: [
      "Indian nationals (non-EU/EFTA) need a valid work contract to obtain a Swiss residence permit — quota-based, employer applies",
      "L permit: short-stay residence for up to 1 year (renewable). B permit: annual residence permit, tied to employment",
      "C permit (permanent residence): available after 10 continuous years of legal residence for Indian nationals",
      "OCI (Overseas Citizen of India) card: apply at Embassy of India in Berne — visit indembassybern.gov.in for current procedures",
      "Passport renewal: Indian Embassy Berne or Indian Consulate Geneva — allow 6–8 weeks processing time",
      "India does not permit dual citizenship — naturalising as Swiss means renouncing Indian citizenship",
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
