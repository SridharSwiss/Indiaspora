import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Startups & Entrepreneurship in Switzerland",
  description: "Swiss startup ecosystem for Indian entrepreneurs — incubators, investors, visa options, and India-Switzerland bridge programmes.",
  openGraph: {
    title: "Indian Startups & Entrepreneurship in Switzerland | IndiaSwiss",
    description: "Swiss startup ecosystem for Indian entrepreneurs — incubators, investors, visa options, and India-Switzerland bridge programmes.",
  },
};

const ecosystem = [
  { name: "ETH Zurich Pioneer Fellowship", url: "https://ethz.ch/en/industry/entrepreneurship/pioneer-fellowship.html", category: "University", desc: "ETH's flagship startup programme. Fellows receive CHF 150,000 and two years to build a deep-tech company from ETH research. Strong pipeline for Indian PhD students at ETH." },
  { name: "EPFL Innovation Park", url: "https://www.epfl-innovationpark.ch", category: "University", desc: "Lausanne-based tech park hosting 180+ startups from EPFL research. Strong in robotics, medtech, and biotech. Large Indian student-founder community from EPFL PhD programmes." },
  { name: "Venturelab", url: "https://www.venturelab.swiss", category: "Training", desc: "Switzerland's leading entrepreneurship training organisation. Runs the annual AIT India programme (with Swissnex and ZHAW), helping Swiss science-based startups explore and validate the Indian market." },
  { name: "Swissnex in India", url: "https://swissnex.org/india", category: "Government", desc: "Swiss government's science and innovation network in India. Has supported 65+ Swiss startups exploring the Indian market since 2010. Facilitates the Indo-Swiss Startup Connect and Innovation Platform." },
  { name: "India-Switzerland Startup Bridge", url: "https://www.startupindia.gov.in/content/sih/en/international/india-swiss_startup_bridge.html", category: "Government", desc: "Formal bilateral startup bridge under Startup India and Switzerland Global Enterprise. Enables Indian startups to soft-land in Switzerland and Swiss startups to access the Indian ecosystem." },
  { name: "Innosuisse", url: "https://www.innosuisse.ch/inno/en/home.html", category: "Government", desc: "Swiss federal innovation agency. Grants up to CHF 2M for R&D collaboration between startups and Swiss universities. Open to Swiss-based companies regardless of founders' nationality." },
  { name: "Switzerland Global Enterprise (S-GE)", url: "https://www.s-ge.com/en", category: "Government", desc: "Promotes Swiss startups internationally and helps Indian companies soft-land in Switzerland. Primary gateway for Indian businesses seeking a Swiss base." },
  { name: "Swiss Startup Association", url: "https://www.swissstartups.ch", category: "Association", desc: "Switzerland's largest startup lobby. Advocacy, networking, and the annual Swiss Startup Map — a key directory for ecosystem navigation." },
  { name: "Venture Kick", url: "https://www.venturekick.ch", category: "Funding", desc: "Pre-seed grants of up to CHF 130,000 for Swiss-based tech startups. Three-stage jury process. Open to founders of any nationality with a registered Swiss entity." },
];

const hubs = [
  { city: "Zurich", nickname: "Zürich Valley", strengths: "Fintech, DeepTech, AI, Blockchain", space: "Impact Hub Zurich, Mindspace, WeWork", note: "Google, Apple, and Microsoft R&D centres attract Indian engineering talent. ETH Zurich spins out multiple Indian-founded deep-tech companies annually." },
  { city: "Lausanne", nickname: "EPFL Cluster", strengths: "MedTech, Robotics, Photonics, Clean Energy", space: "EPFL Innovation Park, Eclosion", note: "Large Indian student-founder community from EPFL PhD programmes. EPFL Innovation Park hosts 180+ startups with strong Swiss-Indian research ties." },
  { city: "Basel", nickname: "Life Sciences Hub", strengths: "BioTech, PharmaInformatics, HealthTech", space: "Basel Area Business & Innovation, Novartis Campus", note: "Indian pharma professionals from Novartis and Roche frequently spin out healthtech companies. Basel Area Business & Innovation offers free startup advisory." },
  { city: "Zug", nickname: "Crypto Valley", strengths: "Blockchain, DeFi, Web3, DAO", space: "Crypto Valley Association, CV VC", note: "Liberal tax regime and Ethereum Foundation HQ make Zug the top destination for Web3 founders. Several Indian-origin blockchain founders have incorporated here." },
];

const visa = [
  { type: "Startup Visa (Cantonal)", eligibility: "Business plan approved by cantonal authority; typically requires CHF 100K+ funding and demonstrated economic benefit", note: "Cantons Zurich, Vaud, and Geneva have active startup visa tracks. Requirements vary — engage a Swiss immigration lawyer before applying." },
  { type: "B Permit via Own Swiss Entity", eligibility: "Self-employed or employed as director of your own Swiss GmbH or AG", note: "You need a genuine employer-employee structure and must meet salary thresholds set by the canton. SICC and TiE Zurich can refer experienced immigration lawyers." },
  { type: "C Permit (Long-term Settlement)", eligibility: "After 10 years of legal residence in Switzerland", note: "Settlement permit unlocks full employment rights including unrestricted self-employment and right to change cantons freely." },
];

const events = [
  { name: "Swiss-Indian Entrepreneurship Day", timing: "February", url: "https://www.venturelab.swiss/SWISS_INDIAN_DAY", desc: "Annual event co-organised by Venturelab, SICC, ZHAW, and Swissnex India. Features startup pitches from the AIT India cohort, power talks, and the Swiss-Indian Ambassador of Innovation award." },
  { name: "Indo-Swiss Startup Connect", timing: "Annual", url: "https://swissnex.org/india/event/indoswiss-startup-connect/", desc: "Swissnex India event connecting Swiss and Indian startups, investors, and industry. Pitches from 20 sciencepreneurs across both ecosystems." },
  { name: "TiEcon Switzerland", timing: "Autumn", url: "https://zurich.tie.org", desc: "Annual conference for Indian-origin entrepreneurs in Zurich. Investor panels, startup pitches, and mentoring sessions organised by TiE Zurich." },
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
          <p className="text-slate-400 mb-8">Incubators, accelerators, and India-Switzerland bridge organisations</p>
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
          <h2 className="text-2xl font-bold text-white mb-2">Key Events for Indian Founders</h2>
          <p className="text-slate-400 mb-8">Annual Switzerland–India startup events worth attending</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((e) => (
              <a key={e.name} href={e.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm group-hover:text-teal-400 transition-colors">{e.name}</h3>
                  <span className="text-xs text-teal-400 ml-2 shrink-0">{e.timing}</span>
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
            <p className="text-sm text-teal-300">Startup permit rules vary by canton. Consult a Swiss immigration lawyer before applying. SICC (<a href="https://sicc.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-200">sicc.ch</a>) and TiE Zurich (<a href="https://zurich.tie.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-200">zurich.tie.org</a>) can refer you to experienced advisors with Indian-founder experience.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
