import PageHeader from "@/components/ui/PageHeader";

export default function GenevaPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indians in Geneva"
        subtitle="The international city of peace hosts 5,000+ Indians — diplomats, UN officials, CERN scientists, and a vibrant expat community on the shores of Lac Léman."
        badge="~5,000 Indians"
        gradient="from-purple-600 to-violet-700"
        breadcrumbs={[{ label: "City Guides", href: "/cities" }, { label: "Geneva" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Community & Associations</h2>
              <ul className="space-y-3">
                {[
                  { name: "Indian Association Geneva (IAG)", desc: "Main community body — cultural events, India Day, Diwali" },
                  { name: "Tamil Sangam Switzerland (Geneva chapter)", desc: "Tamil cultural events, Pongal, classical arts" },
                  { name: "Malayali Association Switzerland", desc: "Onam, Vishu, cultural programmes" },
                  { name: "ISKCON Geneva", desc: "Hare Krishna temple, Sunday programme, Janmashtami" },
                  { name: "Indian Students Geneva (UNIGE)", desc: "Student association at University of Geneva" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">International Organisations</h2>
              <p className="text-slate-300 text-sm mb-4">Geneva is home to 40+ international organisations employing thousands of Indian professionals:</p>
              <div className="grid grid-cols-2 gap-2">
                {["United Nations (UNOG)", "World Health Organization (WHO)", "World Trade Organization (WTO)", "International Labour Organization (ILO)", "CERN", "International Red Cross (ICRC)", "World Intellectual Property Org (WIPO)", "International Telecommunication Union (ITU)"].map((org) => (
                  <div key={org} className="text-xs text-slate-300 bg-white/5 rounded-lg p-2">{org}</div>
                ))}
              </div>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Indian Food in Geneva</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🍽️ <strong>Indigo Restaurant</strong> (Rue de Rive 23) — Upscale Indian fine dining</li>
                <li>🍽️ <strong>Namaste India Geneva</strong> — North Indian, popular with UN community</li>
                <li>🍽️ <strong>Taj Mahal Geneva</strong> — Classic Indian restaurant near Old Town</li>
                <li>🛒 <strong>Epicentre</strong> — Indian groceries, spices, lentils</li>
                <li>🛒 <strong>Asia Express</strong> — Indian and Asian groceries in Carouge</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Key Stats</h3>
              <div className="space-y-3">
                {[
                  { label: "Indian Population", value: "~5,000" },
                  { label: "International Orgs", value: "40+" },
                  { label: "Indian Restaurants", value: "15+" },
                  { label: "Official Languages", value: "French" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between">
                    <span className="text-xs text-slate-400">{s.label}</span>
                    <span className="text-sm font-semibold text-purple-400">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Official Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Ville de Genève", url: "https://www.geneve.ch/en" },
                  { label: "TPG (Public Transport)", url: "https://www.tpg.ch" },
                  { label: "Consulate General of India, Geneva", url: "https://www.cgigeneva.gov.in" },
                  { label: "Canton Geneva – Welcome", url: "https://www.ge.ch/en/living-geneva" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:text-purple-300">{l.label} →</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
