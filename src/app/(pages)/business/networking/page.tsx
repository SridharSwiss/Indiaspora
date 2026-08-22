import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Business Networking for Indians in Switzerland",
  description: "Connect with Indian professionals through SICC, TiE Zurich, NASSCOM, and the Swiss-Indian business community.",
  openGraph: {
    title: "Business Networking for Indians in Switzerland | IndiaSwiss",
    description: "Connect with Indian professionals through SICC, TiE Zurich, NASSCOM, and the Swiss-Indian business community.",
  },
};

const chambers = [
  {
    name: "Swiss Indian Chamber of Commerce (SICC)",
    url: "https://sicc.ch",
    founded: "1985",
    members: "400+ members",
    desc: "The premier bilateral trade chamber with offices in Zurich, Mumbai, New Delhi, Bengaluru, and Pune. Runs trade missions, B2B matchmaking, and an annual India Day event.",
    tag: "Chamber",
  },
  {
    name: "TiE Zurich",
    url: "https://zurich.tie.org",
    founded: "2000s",
    members: "Global 15,000+",
    desc: "The Indus Entrepreneurs — connecting Indian-origin founders, investors, and mentors. Monthly events, annual TiECon, and 1:1 mentoring for startups.",
    tag: "Startups",
  },
  {
    name: "NASSCOM Switzerland",
    url: "https://nasscom.in",
    founded: "1988",
    members: "3,000+ companies",
    desc: "India's IT industry body connects tech professionals globally. Switzerland-based Indian IT professionals use it for policy advocacy, networking, and talent forums.",
    tag: "Technology",
  },
  {
    name: "India Business Switzerland (IBS)",
    url: "https://sicc.ch/swiss-business-hub/",
    founded: "Via SICC",
    members: "SME & MNC",
    desc: "Facilitated through the SICC Swiss Business Hub — supports Indian companies entering Switzerland and Swiss companies expanding to India.",
    tag: "Trade",
  },
];

const events = [
  { name: "SICC Annual India Day", timing: "August", desc: "Flagship bilateral event attended by Swiss and Indian government officials, CEOs, and diplomats." },
  { name: "TiEcon Switzerland", timing: "Autumn", desc: "Annual conference for Indian-origin entrepreneurs. Startup pitches, investor panels, and networking." },
  { name: "Swiss India Business Summit", timing: "September", desc: "Cross-sector summit at Kursaal Bern connecting Swiss corporates with Indian business delegations." },
  { name: "SICC Business Breakfast", timing: "Monthly", desc: "Informal breakfast networking with Swiss-Indian executives in Zurich." },
  { name: "Pharma India Forum Basel", timing: "Bi-annual", desc: "Connecting Basel-based Indian pharma professionals at Novartis, Roche, and Lonza." },
  { name: "TiE Zurich Pitch Night", timing: "Quarterly", desc: "Indian-origin startups pitch to a panel of investors and serial entrepreneurs." },
];

const linkedin = [
  { name: "Indian Professionals Switzerland", url: "https://www.linkedin.com/search/results/groups/?keywords=Indian%20professionals%20Switzerland", members: "10,000+", desc: "Largest LinkedIn community for Indians working in Switzerland." },
  { name: "Swiss-Indian Business Network", url: "https://www.linkedin.com/search/results/groups/?keywords=Swiss%20Indian%20Business", members: "2,500+", desc: "B2B networking for professionals bridging Switzerland and India." },
  { name: "Indians at Google Zurich", url: "https://www.linkedin.com/company/google/", members: "1,000+", desc: "Informal community of Indian engineers and PMs at Google's Zurich campus." },
];

export default function NetworkingPage() {
  return (
    <div>
      <PageHeader
        title="Networking & Chambers"
        subtitle="Switzerland’s Indian professional community is built on strong bilateral institutions, elite startup networks, and active industry forums."
        badge="Business Networking"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Networking & Chambers" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Chambers & Business Bodies</h2>
          <p className="text-slate-400 mb-8">Established institutions driving Switzerland–India economic relations</p>
          <div className="grid md:grid-cols-2 gap-5">
            {chambers.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 card-hover block group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors flex-1 mr-3">{c.name}</h3>
                  <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full shrink-0">{c.tag}</span>
                </div>
                <div className="flex gap-4 mb-3">
                  <span className="text-xs text-slate-400">Est. {c.founded}</span>
                  <span className="text-xs text-slate-400">{c.members}</span>
                </div>
                <p className="text-sm text-slate-400">{c.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Key Annual Events</h2>
          <p className="text-slate-400 mb-8">Put these on your calendar</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((e) => (
              <div key={e.name} className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm">{e.name}</h3>
                  <span className="text-xs text-teal-400 ml-2 shrink-0">{e.timing}</span>
                </div>
                <p className="text-sm text-slate-400">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Online Communities</h2>
          <p className="text-slate-400 mb-8">LinkedIn groups and digital networks</p>
          <div className="space-y-4">
            {linkedin.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover flex items-start justify-between gap-4 block group">
                <div>
                  <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors mb-1">{l.name}</h3>
                  <p className="text-sm text-slate-400">{l.desc}</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0">{l.members}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-teal-500/20">
          <h3 className="text-base font-semibold text-teal-400 mb-2">Tip: How to join SICC</h3>
          <p className="text-sm text-slate-300">Annual SICC membership starts at CHF 200 for individuals. Members get access to events, the member directory, trade mission invitations, and the SICC newsletter. Apply at <a href="https://sicc.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">sicc.ch</a>.</p>
        </div>
      </div>
    </div>
  );
}
