import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Startups & Entrepreneurship in Switzerland",
  description: "Swiss startup ecosystem for Indian entrepreneurs — incubators, investors, visa options, and success stories.",
  openGraph: {
    title: "Indian Startups & Entrepreneurship in Switzerland | IndiaSwiss",
    description: "Swiss startup ecosystem for Indian entrepreneurs — incubators, investors, visa options, and success stories.",
  },
};

const ecosystem = [
  { name: "ETH Zurich Pioneer Fellowship", url: "https://ethz.ch/en/industry/entrepreneurship/pioneer-fellowship.html", category: "University", desc: "ETH's flagship startup programme. Fellows get CHF 150,000 and 2 years to build a deep-tech company from ETH research." },
  { name: "EPFL Innovation Park", url: "https://www.epfl-innovationpark.ch", category: "University", desc: "Lausanne-based tech park hosting 180+ startups from EPFL research. Strong in robotics, medtech, and biotech." },
  { name: "Innosuisse", url: "https://www.innosuisse.ch/inno/en/home.html", category: "Government", desc: "Swiss federal innovation agency. Grants up to CHF 2M for R&D collaboration between startups and universities." },
  { name: "Switzerland Global Enterprise (S-GE)", url: "https://www.s-ge.com/en", category: "Government", desc: "Promotes Swiss startups internationally and helps Indian companies soft-land in Switzerland." },
  { name: "TiE Zurich", url: "https://zurich.tie.org", category: "Community", desc: "The Indus Entrepreneurs — mentorship for Indian-origin founders, investor intros, and TiEcon pitch competitions." },
  { name: "Swiss Startup Association", url: "https://www.swissstartups.ch", category: "Association", desc: "Switzerland’s largest startup lobby. Advocacy, networking, and the annual Swiss Startup Map." },
  { name: "Venture Kick", url: "https://www.venturekick.ch", category: "Funding", desc: "Pre-seed grants of up to CHF 130,000 for Swiss-based tech startups. Three-stage jury process." },
  { name: "StartupButton", url: "https://www.startupbutton.ch", category: "Directory", desc: "Swiss startup news, job listings, and founder community — useful for finding co-founders and early hires." },
];

const hubs = [
  { city: "Zurich", nickname: "Zürich Valley", strengths: "Fintech, DeepTech, AI, Blockchain", space: "Impact Hub Zurich, WeWork, Mindspace", note: "Google, Apple, and Microsoft R&D centres attract Indian engineering talent." },
  { city: "Lausanne", nickname: "EPFL Cluster", strengths: "MedTech, Robotics, Photonics, Clean Energy", space: "EPFL Innovation Park, Eclosion", note: "Large Indian student-founder community from EPFL PhD programmes." },
  { city: "Basel", nickname: "Life Sciences Hub", strengths: "BioTech, PharmaInformatics, HealthTech", space: "Basel Area Business & Innovation", note: "Indian pharma professionals from Novartis/Roche often spin out companies." },
  { city: "Zug", nickname: "Crypto Valley", strengths: "Blockchain, DeFi, Web3, DAO", space: "Crypto Valley Association", note: "Liberal tax regime and Ethereum Foundation HQ make Zug attractive for Web3 founders." },
];

const visa = [
  { type: "Startup Visa (Cantonal)", eligibility: "Business plan approved by cantonal authority; typically requires CHF 100K+ funding", note: "Cantons Zurich, Vaud, and Geneva have active startup visa tracks." },
  { type: "B Permit via Employer", eligibility: "Self-employed or employed by own Swiss GmbH", note: "You need a genuine employer-employee structure. Seek legal advice early." },
  { type: "C Permit (Long-term)", eligibility: "After 5-10 years in Switzerland", note: "Settlement permit unlocks full employment rights including self-employment." },
];

export default function StartupsPage() {
  return (
    <div>
      <PageHeader
        title="Startups & Entrepreneurship"
        subtitle="Switzerland ranks among Europe's top startup ecosystems. Here's how Indian entrepreneurs navigate funding, visas, and building companies in Switzerland."
        badge="Startup Ecosystem"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Startups" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Key Ecosystem Players</h2>
          <p className="text-slate-400 mb-8">Incubators, accelerators, and support organisations</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ecosystem.map((e) => (
              <a key={e.name} href={e.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm group-hover:text-teal-400 transition-colors flex-1 mr-2">{e.name}</h3>
                  <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full shrink-0">{e.category}</span>
                </div>
                <p className="text-sm text-slate-400">{e.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Startup Hubs by City</h2>
          <p className="text-slate-400 mb-8">Where to build your startup in Switzerland</p>
          <div className="grid md:grid-cols-2 gap-5">
            {hubs.map((h) => (
              <div key={h.city} className="glass rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{h.city}</h3>
                    <p className="text-xs text-teal-400">{h.nickname}</p>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-2"><span className="text-white/40">Strengths: </span>{h.strengths}</p>
                <p className="text-sm text-white/60 mb-2"><span className="text-white/40">Spaces: </span>{h.space}</p>
                <p className="text-sm text-white/70">{h.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Startup Visa for Indian Founders</h2>
          <div className="space-y-4">
            {visa.map((v) => (
              <div key={v.type} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-teal-400 mb-1">{v.type}</h3>
                <p className="text-sm text-white/60 mb-1">{v.eligibility}</p>
                <p className="text-xs text-white/40">{v.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
            <p className="text-sm text-teal-300">Startup permit rules vary by canton. Consult a Swiss immigration lawyer before applying. SICC and TiE Zurich can refer you to experienced advisors.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
