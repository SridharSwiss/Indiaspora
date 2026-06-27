import PageHeader from "@/components/ui/PageHeader";

export default function BaselPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indians in Basel"
        subtitle="Switzerland's pharma and biotech capital is home to 3,000+ Indians — most working at Novartis, Roche, and the biotech corridor along the Rhine."
        badge="~3,000 Indians"
        gradient="from-orange-500 to-red-600"
        breadcrumbs={[{ label: "City Guides", href: "/cities" }, { label: "Basel" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Community & Associations</h2>
              <ul className="space-y-3">
                {[
                  { name: "ICAS – Indian Cultural Association Switzerland (Basel)", desc: "Events, Holi, Diwali, cultural programmes — main Basel community body" },
                  { name: "Sri Durga Temple Basel", desc: "Hindu temple serving the Tamil and broader Indian community" },
                  { name: "Indian Professionals Basel", desc: "LinkedIn and WhatsApp network for pharma professionals" },
                  { name: "University of Basel Indian Students", desc: "Student association at University of Basel" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Major Employers (Indian Professionals)</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { company: "Novartis", field: "Pharma / Oncology", employees: "10,000+ in Basel" },
                  { company: "Roche", field: "Diagnostics / Pharma", employees: "9,000+ in Basel" },
                  { company: "Lonza", field: "Biotech / CDMO", employees: "5,000+ globally" },
                  { company: "Syngenta", field: "Agrochemicals", employees: "Global HQ in Basel" },
                  { company: "Clariant", field: "Specialty Chemicals", employees: "Swiss HQ" },
                  { company: "University of Basel", field: "Research / Academia", employees: "Life Sciences" },
                ].map((e) => (
                  <div key={e.company} className="bg-white/5 rounded-xl p-3">
                    <p className="font-semibold text-white text-sm">{e.company}</p>
                    <p className="text-xs text-orange-400">{e.field}</p>
                    <p className="text-xs text-slate-500">{e.employees}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Indian Food in Basel</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🍽️ <strong>Namaste India Basel</strong> (Güterstrasse 99) — Buffet lunch and dinner</li>
                <li>🍽️ <strong>Taj Mahal Basel</strong> — North Indian classics</li>
                <li>🍽️ <strong>Malabar Basel</strong> — South Indian and Kerala cuisine</li>
                <li>🛒 <strong>Asian Food Store</strong> — Indian spices, lentils, basmati</li>
                <li>🛒 <strong>Globus Delicatessa</strong> — International section with Indian products</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Official Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Kanton Basel-Stadt", url: "https://www.bs.ch/en" },
                  { label: "BVB (Basel Public Transport)", url: "https://www.bvb.ch" },
                  { label: "Cantonal Migration Office", url: "https://www.bs.ch/aue/migration" },
                  { label: "University of Basel", url: "https://www.unibas.ch/en" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-400 hover:text-orange-300">{l.label} →</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">Holi Festival Basel</h3>
              <p className="text-xs text-slate-400">One of the largest Holi celebrations in Switzerland, held annually at Münsterplatz. Organised by ICAS with organic colour powder, music, and food stalls.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
