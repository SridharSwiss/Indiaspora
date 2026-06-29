import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

const cities = [
  {
    name: "Zurich",
    slug: "zurich",
    population: "~10,000 Indians",
    desc: "Switzerland's financial capital and home to the largest Indian community. ETH Zurich, Google, UBS, and 150+ Indian associations.",
    highlights: ["IAGZ Community", "ETH & UZH Indian Students", "Bollywood nights", "Gujarati & Punjabi Associations"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Geneva",
    slug: "geneva",
    population: "~5,000 Indians",
    desc: "International city with the UN, WHO, and WTO. Cosmopolitan Indian expat community in the heart of Europe.",
    highlights: ["Indian Consulate General (9 Rue du Valais)", "UN & Diplomatic Community", "CERN Scientists", "International Schools"],
    color: "from-purple-600 to-violet-700",
  },
  {
    name: "Basel",
    slug: "basel",
    population: "~3,500 Indians",
    desc: "Pharma and biotech hub — home to Novartis, Roche, and a growing Indian professional community.",
    highlights: ["Pharma & Biotech Pros", "ICAS Indian Association", "Sri Durga Temple", "Holi Festival Basel"],
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Bern",
    slug: "bern",
    population: "~2,000 Indians",
    desc: "Swiss federal capital with the Indian Embassy, academic institutions, and a tight-knit Indian community.",
    highlights: ["Embassy of India (Thunstrasse 5)", "Indian Association Berne", "University of Bern", "Bharatiya Association"],
    color: "from-teal-600 to-cyan-700",
  },
  {
    name: "Lausanne",
    slug: "lausanne",
    population: "~1,500 Indians",
    desc: "Olympic city on Lake Geneva — EPFL's global campus attracts hundreds of Indian students and researchers.",
    highlights: ["EPFL Indian Students", "IOC Indian Professionals", "PrangaN@Swiss (Durga Puja)", "Indian Restaurants"],
    color: "from-rose-600 to-pink-700",
  },
];

export default function CitiesPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indians Across Swiss Cities"
        subtitle="Explore the Indian community in each Swiss city — from Zurich's financial district to Geneva's international arena and Basel's pharma corridor."
        badge="26 Cantons"
        gradient="from-blue-500 to-indigo-600"
        breadcrumbs={[{ label: "City Guides" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cities.map((city) => (
            <Link key={city.slug} href={`/cities/${city.slug}`} className="group glass rounded-2xl overflow-hidden card-hover">
              <div className={`h-2 bg-gradient-to-r ${city.color}`} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{city.name}</h2>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">{city.population}</span>
                </div>
                <p className="text-sm text-slate-400 mb-4">{city.desc}</p>
                <ul className="space-y-1">
                  {city.highlights.map((h) => (
                    <li key={h} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-blue-400 mt-4 group-hover:text-blue-300">Explore {city.name} guide →</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Canton Map Note */}
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Indians in All 26 Cantons</h3>
          <p className="text-slate-400 mb-4 max-w-2xl mx-auto">Beyond the main cities, Indian communities exist in Zug (crypto/finance), Lugano (Italian-speaking), St. Gallen, Winterthur, and across all 26 Swiss cantons. Each canton has its own integration office to help new residents settle in.</p>
          <a href="https://www.ch.ch/en/cantons/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
            Find your canton's integration office at ch.ch →
          </a>
        </div>
      </div>
    </div>
  );
}
