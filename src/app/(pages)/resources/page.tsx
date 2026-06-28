import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Resources for Indians in Switzerland",
  description: "Curated links to Swiss government services, Indian embassy, healthcare, transport, and community organisations.",
  openGraph: {
    title: "Resources for Indians in Switzerland | IndiaSwiss",
    description: "Curated links to Swiss government services, Indian embassy, healthcare, transport, and community organisations.",
  },
};

const resources = [
  {
    category: "Official Swiss Government",
    color: "from-blue-500 to-indigo-600",
    items: [
      { name: "ch.ch – Official Swiss Portal", url: "https://www.ch.ch/en/", desc: "One-stop for all government information: registration, permits, taxes, benefits" },
      { name: "SEM – State Secretariat for Migration", url: "https://www.sem.admin.ch/en", desc: "Residence permits, work authorisations, naturalization, asylum" },
      { name: "Swiss Confederation Portal", url: "https://www.admin.ch/gov/en/start.html", desc: "Federal departments, laws, official announcements" },
      { name: "SECO – State Secretariat for Economic Affairs", url: "https://www.seco.admin.ch/en", desc: "Employment, labour law, job market statistics" },
      { name: "SBFI – Scholarships Switzerland", url: "https://www.sbfi.admin.ch/en", desc: "Swiss Government Excellence Scholarships for Indian students" },
    ],
  },
  {
    category: "Indian Government & Embassy",
    color: "from-orange-500 to-amber-500",
    items: [
      { name: "Embassy of India, Berne", url: "https://www.indembassybern.gov.in", desc: "Passport, OCI, visa, attestation, diaspora services. Tel: +41 31 350 11 30" },
      { name: "Consulate General of India, Geneva", url: "https://pmindiaun.org/cgi.html", desc: "Consular services for Indians in French-speaking Switzerland" },
      { name: "OCI Card Services", url: "https://ociservices.gov.in", desc: "Apply and track Overseas Citizen of India card online" },
      { name: "Passport Seva (Renewal)", url: "https://www.passportindia.gov.in", desc: "Renew Indian passport from Switzerland — book appointment online" },
      { name: "Indian Associations Directory", url: "https://www.indembassybern.gov.in/page/indian-associations-in-switzerland-the-holy-see-and-liechtenstein/", desc: "Official Embassy list of all recognised Indian associations in Switzerland" },
    ],
  },
  {
    category: "Healthcare",
    color: "from-green-500 to-teal-500",
    items: [
      { name: "Priminfo – Health Insurance Comparison", url: "https://www.priminfo.admin.ch/en", desc: "Official government tool to compare KVG/LAMal health insurance premiums" },
      { name: "BAG – Federal Office of Public Health", url: "https://www.bag.admin.ch/en", desc: "Health regulations, insurance basics, vaccination info" },
      { name: "Comparis – Insurance Comparison", url: "https://en.comparis.ch", desc: "Compare health insurance, car insurance, mortgages" },
      { name: "Swiss Medic", url: "https://www.swissmedic.ch/en", desc: "Drug approval, medical device safety in Switzerland" },
    ],
  },
  {
    category: "Transport & Mobility",
    color: "from-cyan-500 to-blue-500",
    items: [
      { name: "SBB – Swiss Federal Railways", url: "https://www.sbb.ch/en", desc: "Train timetables, tickets, GA and Half-Fare passes" },
      { name: "ZVV – Zurich Public Transport", url: "https://www.zvv.ch/zvv/en", desc: "Zurich network trams, buses, S-Bahn passes" },
      { name: "TPG – Geneva Public Transport", url: "https://www.tpg.ch", desc: "Geneva buses and trams, tourist passes" },
      { name: "Mobility Car-Sharing", url: "https://www.mobility.ch/en", desc: "Switzerland's largest car-sharing network — no car ownership needed" },
    ],
  },
  {
    category: "Community & Culture",
    color: "from-purple-500 to-rose-500",
    items: [
      { name: "IAGZ – Indian Association Zurich", url: "https://iagz.ch", desc: "Events, Hindi school, Diwali Mela, networking — largest Indian body in Switzerland" },
      { name: "Indian Association Geneva (IAG)", url: "https://indianassociationgeneva.com", desc: "Founded 1947 — one of the world's oldest continuously running Indian associations" },
      { name: "SICC – Swiss Indian Chamber of Commerce", url: "https://sicc.ch", desc: "Business networking, trade facilitation, events" },
      { name: "India Supermarkt (Online)", url: "https://indiasupermarkt.ch/en/", desc: "Indian groceries delivered across Switzerland — based in Zurich" },
    ],
  },
  {
    category: "Finance & Banking",
    color: "from-teal-500 to-green-600",
    items: [
      { name: "PostFinance", url: "https://www.postfinance.ch/en", desc: "Easiest Swiss bank to open as a newcomer — no salary requirement" },
      { name: "ESTV – Federal Tax Administration", url: "https://www.estv.admin.ch/en", desc: "Swiss tax returns, withholding tax, DTAA with India" },
      { name: "Wise (Money Transfer)", url: "https://wise.com", desc: "Best rates for CHF to INR transfers to India" },
      { name: "Comparis – Finance", url: "https://en.comparis.ch/finanzen", desc: "Compare mortgages, accounts, loans in Switzerland" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Resources for Indians in Switzerland"
        subtitle="Curated links to Swiss government services, Indian embassy resources, community organisations, and everything else you need for life in Switzerland."
        badge="50+ Resources"
        gradient="from-slate-600 to-slate-800"
        breadcrumbs={[{ label: "Resources" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {resources.map((section) => (
            <section key={section.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${section.color}`} />
                <h2 className="text-xl font-bold text-white">{section.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item) => (
                  <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover group block">
                    <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-blue-400 transition-colors">{item.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    <p className="text-xs text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Open →</p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-6 border border-blue-500/20">
          <p className="text-sm text-slate-300">
            <span className="text-blue-400 font-semibold">💡 Bookmark tip:</span> Save <a href="https://www.ch.ch/en/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ch.ch</a> and <a href="https://www.sem.admin.ch/en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">sem.admin.ch</a> — they answer 90% of government questions for Indians in Switzerland.
          </p>
        </div>
      </div>
    </div>
  );
}
