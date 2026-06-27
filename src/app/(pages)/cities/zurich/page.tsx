import PageHeader from "@/components/ui/PageHeader";

export default function ZurichPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indians in Zurich"
        subtitle="Switzerland's largest city and financial capital is home to 18,000+ Indians — the heart of Swiss-Indian life with the strongest community infrastructure."
        badge="~18,000 Indians"
        gradient="from-blue-600 to-indigo-700"
        breadcrumbs={[{ label: "City Guides", href: "/cities" }, { label: "Zurich" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Community */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Community & Associations</h2>
              <ul className="space-y-3">
                {[
                  { name: "IAGZ – Indian Association of Greater Zurich", url: "https://iagz.ch", desc: "Main umbrella body. Events, Hindi school, Diwali Mela, networking" },
                  { name: "Gujarati Samaj Switzerland", url: "#", desc: "Cultural events, Navratri, Diwali, Garba — strong community" },
                  { name: "Maharashtra Mandal Switzerland", url: "#", desc: "Ganesh Chaturthi, Gudi Padwa, cultural programmes" },
                  { name: "Punjabi Cultural Association", url: "#", desc: "Baisakhi, Lohri, Bhangra performances" },
                  { name: "InSAZ – Indian Student Association ETH Zurich", url: "https://insaz.ethz.ch", desc: "Largest student association for Indians at ETH" },
                  { name: "ISKCON Krishna Temple", url: "#", desc: "Sunday feasts, Janmashtami, spiritual programmes" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Neighbourhoods */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Best Neighbourhoods for Indians</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Kreis 4 (Langstrasse)", desc: "Indian restaurants, grocery stores, vibrant multicultural area. Most affordable central neighbourhood.", tag: "Budget-friendly" },
                  { name: "Oerlikon (Kreis 11)", desc: "Family-friendly, good schools, Indian grocery nearby, easy SBB connections.", tag: "Families" },
                  { name: "Aussersihl (Kreis 4/5)", desc: "Close to city, Indian community concentration, Bollywood events nearby", tag: "Young Professionals" },
                  { name: "Adliswil / Kilchberg", desc: "Suburb with good schools, quieter living, Indian community events nearby", tag: "Suburbs" },
                ].map((n) => (
                  <div key={n.name} className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white text-sm">{n.name}</h3>
                      <span className="text-xs text-blue-400">{n.tag}</span>
                    </div>
                    <p className="text-xs text-slate-400">{n.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Food */}
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Indian Food in Zurich</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🍽️ <strong>Bairavi Restaurant</strong> (Langstrasse 149) — Best South Indian dosas in Switzerland</li>
                <li>🍽️ <strong>Rajasthan Restaurant</strong> (Stauffacherstr 50) — Popular North Indian thalis</li>
                <li>🍽️ <strong>Chennai Diner</strong> — Filter coffee, idli, vada</li>
                <li>🍽️ <strong>Bombay Dreams</strong> (Seefeldstrasse 60) — Mumbai street food</li>
                <li>🛒 <strong>Aggarwals Indian Grocery</strong> (Langstrasse) — Spices, dals, frozen foods</li>
                <li>🛒 <strong>Art of Food</strong> — Fresh Indian vegetables and spices</li>
                <li>🍱 <strong>Tiffin Services</strong> — Search "Indians in Zurich" Facebook group</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Key Stats</h3>
              <div className="space-y-3">
                {[
                  { label: "Indian Population", value: "~18,000" },
                  { label: "Indian Associations", value: "50+" },
                  { label: "Indian Restaurants", value: "30+" },
                  { label: "Indian Grocery Stores", value: "5+" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between">
                    <span className="text-xs text-slate-400">{s.label}</span>
                    <span className="text-sm font-semibold text-blue-400">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Official Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Stadt Zürich (City Website)", url: "https://www.stadt-zuerich.ch/en" },
                  { label: "ZVV (Public Transport)", url: "https://www.zvv.ch/zvv/en" },
                  { label: "Registration (Kreisbüro)", url: "https://www.stadt-zuerich.ch/en" },
                  { label: "Migrationsamt Zurich", url: "https://www.zh.ch/de/migration-integration.html" },
                  { label: "Indian Consulate Zurich", url: "https://www.cgizurich.gov.in" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300">{l.label} →</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">Indian Consulate Zurich</h3>
              <p className="text-xs text-slate-400 mb-2">Passport, OCI, visa, attestation services</p>
              <a href="https://www.cgizurich.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 block mb-1">cgizurich.gov.in →</a>
              <p className="text-xs text-slate-500">Mon–Fri, appointment required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
