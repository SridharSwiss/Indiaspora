import PageHeader from "@/components/ui/PageHeader";

export default function LausannePage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indians in Lausanne"
        subtitle="The Olympic city on Lake Geneva is Switzerland's innovation hub — EPFL attracts hundreds of Indian students and researchers every year."
        badge="~1,500 Indians"
        gradient="from-rose-600 to-pink-700"
        breadcrumbs={[{ label: "City Guides", href: "/cities" }, { label: "Lausanne" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">EPFL Indian Community</h2>
              <p className="text-slate-400 text-sm mb-4">EPFL (École Polytechnique Fédérale de Lausanne) is one of the top technical universities in the world, with a large and active Indian student community.</p>
              <ul className="space-y-3">
                {[
                  { name: "EPFL Indian Student Association", desc: "Cultural events, orientation support, networking — open to all EPFL students from India", url: "https://students.epfl.ch" },
                  { name: "EPFL PhD Programme", desc: "Highly competitive doctoral programmes across engineering, life sciences, and computing", url: "https://phd.epfl.ch" },
                  { name: "EPFL Start-up Launchpad", desc: "Indian entrepreneurs at EPFL's Innovation Park — 300+ startups in clean-tech, biotech, digital", url: "https://innovationpark.epfl.ch" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-slate-400 mb-1">{item.desc}</p>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-400 hover:text-rose-300">Visit →</a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Indian Food in Lausanne</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🍽️ <strong>Spice Route</strong> (Rue du Midi 22) — Indian favourites near EPFL community</li>
                <li>🍽️ <strong>Indian Palace Lausanne</strong> — Classic North Indian near train station</li>
                <li>🍽️ <strong>Bollywood Café</strong> — Casual Indian street food</li>
                <li>🛒 <strong>Asia Market Lausanne</strong> — Indian spices and groceries</li>
                <li>🍱 <strong>EPFL Tiffin WhatsApp Group</strong> — Indian community meal sharing for students</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">International Organisations</h2>
              <p className="text-slate-400 text-sm mb-4">Lausanne hosts several major international organisations employing Indian professionals:</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🏛️ <strong>IOC – International Olympic Committee</strong> — HQ in Lausanne</li>
                <li>🏛️ <strong>Court of Arbitration for Sport (CAS)</strong></li>
                <li>🏛️ <strong>UNIL – University of Lausanne</strong> — Research positions</li>
                <li>🏛️ <strong>Philip Morris International</strong> — HQ with Indian professionals</li>
                <li>🏛️ <strong>Nestlé HQ</strong> (Vevey, nearby) — Large Indian workforce</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Official Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Ville de Lausanne", url: "https://www.lausanne.ch/en" },
                  { label: "TL (Lausanne Transport)", url: "https://www.t-l.ch" },
                  { label: "Canton Vaud Migration", url: "https://www.vd.ch/themes/population/etrangers" },
                  { label: "EPFL (University)", url: "https://www.epfl.ch/en" },
                  { label: "UNIL (University)", url: "https://www.unil.ch/central/en" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-400 hover:text-rose-300">{l.label} →</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">Tip for Students</h3>
              <p className="text-xs text-slate-400">Lausanne is French-speaking. Learning basic French significantly improves day-to-day life. Join the EPFL Indian Student Association on arrival for orientation and community support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
