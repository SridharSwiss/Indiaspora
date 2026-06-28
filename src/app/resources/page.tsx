import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { RESOURCES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources",
  description: "Essential resources for Indians in Switzerland — embassy, government services, community links, and useful tools.",
};

const CATEGORIES = ["All", "Official", "Living", "Transport", "Community", "Business", "Media", "Shopping"];

const EXTRA_RESOURCES = [
  { title: "SEM – State Secretariat for Migration", url: "https://www.sem.admin.ch/sem/en/home.html", category: "Official", description: "Swiss immigration authority — permits, asylum, and migration information" },
  { title: "Stadt Zürich – Bevölkerungsamt", url: "https://www.stadt-zuerich.ch/bevoelkerungsamt", category: "Official", description: "Zurich city residents registration, address changes, and civil status" },
  { title: "Immoscout24", url: "https://www.immoscout24.ch", category: "Living", description: "Rental property search — apartments, houses, and commercial space" },
  { title: "Homegate", url: "https://www.homegate.ch", category: "Living", description: "Real estate portal for renting and buying property across Switzerland" },
  { title: "Comparis.ch", url: "https://www.comparis.ch", category: "Living", description: "Compare health insurance, mortgages, mobile plans, and more" },
  { title: "ZVV – Zurich Transport", url: "https://www.zvv.ch", category: "Transport", description: "Zurich public transport — trams, buses, and S-Bahn timetables and tickets" },
  { title: "TPG – Geneva Transport", url: "https://www.tpg.ch", category: "Transport", description: "Geneva public transport network information and tickets" },
  { title: "IAGZ – Indian Association Zurich", url: "https://iagz.ch", category: "Community", description: "Events, networking, and community support for Indians in Zurich" },
  { title: "Namaste Switzerland", url: "https://namasteswitzerland.ch", category: "Media", description: "Online magazine for the Swiss Indian community" },
  { title: "Swiss Federal Chancellery", url: "https://www.admin.ch", category: "Official", description: "Central portal for all Swiss federal government information and services" },
];

const ALL_RESOURCES = [...RESOURCES, ...EXTRA_RESOURCES];

const GROUPED = ALL_RESOURCES.reduce((acc, r) => {
  if (!acc[r.category]) acc[r.category] = [];
  acc[r.category].push(r);
  return acc;
}, {} as Record<string, typeof ALL_RESOURCES>);

export default function ResourcesPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">Resources</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            All the Links <span className="gradient-text">You Actually Need</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Essential Swiss government portals, community organisations, transport, and services — curated for Indians in Switzerland.
          </p>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Resources by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {Object.entries(GROUPED).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="tag">{category}</span>
                <span className="text-slate-500 text-sm">{items.length} links</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((r) => (
                  <a
                    key={r.title}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-5 group block"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-white text-sm group-hover:text-orange-400 transition-colors">{r.title}</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400 shrink-0 transition-colors mt-0.5" />
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{r.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggest Resource */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">🔗</div>
            <h2 className="text-3xl font-bold text-white mb-4">Suggest a Resource</h2>
            <p className="text-slate-400 mb-8">
              Know a useful website, service, or community resource for Indians in Switzerland that we&apos;re missing?
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=Resource%20Suggestion" className="btn btn-primary">
              Suggest a Link
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
