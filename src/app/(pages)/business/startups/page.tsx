import PageHeader from "@/components/ui/PageHeader";

const hubs = [
  { name: "ETH Zurich Ecosystem", city: "Zurich", desc: "World #1 engineering university outside US. ETH spinoffs have raised billions. Active Indian founder community.", url: "https://ethz.ch/en/industry/entrepreneurship.html" },
  { name: "EPFL Innovation Park", city: "Lausanne", desc: "300+ startups on campus. Deep tech, clean energy, biotech, digital health. Many Indian PhD founders.", url: "https://innovationpark.epfl.ch" },
  { name: "Crypto Valley Zug", city: "Zug", desc: "World's leading blockchain hub. 1,000+ crypto/Web3 companies. Tax-friendly canton.", url: "https://cryptovalley.swiss" },
  { name: "Basel BioValley", city: "Basel", desc: "Life sciences cluster with Novartis, Roche, and 200+ biotech startups.", url: "https://www.biovalley.com" },
  { name: "Geneva International Hub", city: "Geneva", desc: "International organisations, impact startups, sustainability ventures, fintech.", url: "https://www.geneva.ch/en" },
];

const funding = [
  { name: "Innosuisse", url: "https://www.innosuisse.ch/inno/en/home.html", desc: "Swiss federal innovation agency. Grants for R&D projects with a Swiss research partner. Up to CHF 2M+." },
  { name: "Venture Kick", url: "https://www.venturekick.ch", desc: "CHF 150,000 in equity-free funding for Swiss startups. Well-known among ETH/EPFL founders." },
  { name: "Swiss Startup Association", url: "https://www.swissstartups.ch", desc: "National body for startups — events, VC connections, policy advocacy." },
  { name: "TiE Switzerland", url: "https://switzerland.tie.org", desc: "Indian diaspora angel network. Mentorship, introductions to investors, global TiE network access." },
];

const legalSetup = [
  { step: "Choose legal form", detail: "GmbH (Srl) — CHF 20,000 minimum capital. AG (SA) — CHF 100,000. GmbH is most common for startups." },
  { step: "Register at Handelsregister", detail: "File with the cantonal commercial register. Takes 1–3 weeks. Use a notary for AG." },
  { step: "Get your UID number", detail: "Unique company identifier. Automatic after Handelsregister registration. Check uid.admin.ch." },
  { step: "Register for VAT", detail: "Mandatory once turnover exceeds CHF 100,000/year. Register at estv.admin.ch." },
  { step: "Work permit for founders", detail: "Self-employment permit (Selbststaendigkeit) via your cantonal migration office. Requires proof of viable business." },
];

export default function StartupsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Startup Ecosystem in Switzerland"
        subtitle="Switzerland ranks among the world's top innovation hubs — explore startup clusters, funding sources, and the Indian founder community."
        badge="Startups & Innovation"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[{ label: "Business & Career", href: "/business" }, { label: "Startups" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Startup Hubs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hubs.map((h) => (
              <div key={h.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{h.name}</h3>
                  <span className="text-xs text-teal-400">{h.city}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{h.desc}</p>
                <a href={h.url} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300">Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Funding Sources</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {funding.map((f) => (
              <div key={f.name} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-teal-400 mb-2">{f.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{f.desc}</p>
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300">Visit &rarr;</a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Setting Up Your Swiss Company</h2>
          <div className="space-y-4">
            {legalSetup.map((s, i) => (
              <div key={s.step} className="glass rounded-2xl p-5 flex gap-4">
                <span className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{s.step}</h3>
                  <p className="text-sm text-slate-400">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="https://www.uid.admin.ch" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300">uid.admin.ch — Company UID register &rarr;</a>
            <a href="https://www.estv.admin.ch/estv/en/home/mehrwertsteuer.html" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300">estv.admin.ch — VAT registration &rarr;</a>
            <a href="https://www.sem.admin.ch/sem/en/home/themen/arbeit/selbstaendige.html" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300">SEM — Self-employment permit &rarr;</a>
          </div>
        </section>
      </div>
    </div>
  );
}
