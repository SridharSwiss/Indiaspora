import PageHeader from "@/components/ui/PageHeader";

const festivals = [
  { name: "Diwali Mela Zurich", date: "October 2026", location: "Stadthaus Zurich", desc: "Largest Diwali celebration in Switzerland with cultural shows, food stalls, and fireworks", organiser: "IAGZ" },
  { name: "Holi Festival Basel", date: "March 2026", location: "Münsterplatz, Basel", desc: "Festival of colours with music, dance, and organic colour powder", organiser: "ICAS" },
  { name: "Navratri Garba Night", date: "October 2026", location: "Hallenstadion, Zurich", desc: "Largest Garba celebration in Switzerland with live orchestra", organiser: "Gujarati Samaj" },
  { name: "Durga Puja", date: "October 2026", location: "Zurich & Geneva", desc: "Bengali cultural association's elaborate Durga Puja pandal", organiser: "Bengali Cultural Society" },
  { name: "Eid & Iftar Gathering", date: "March 2026", location: "Zurich", desc: "Community Iftar dinner open to all — celebrating diversity", organiser: "Muslim Indian Community" },
  { name: "India Day Bern", date: "August 2026", location: "Embassy of India, Bern", desc: "India Independence Day celebration hosted by the Embassy", organiser: "Embassy of India" },
  { name: "Indian Film Festival", date: "November 2026", location: "Zurich & Geneva", desc: "Curated Indian cinema — Bollywood, regional, and art-house films", organiser: "IndieSwiss Cinema" },
  { name: "Pongal Celebration", date: "January 2026", location: "Geneva", desc: "Tamil harvest festival with traditional cooking, kolam, and cultural events", organiser: "Tamil Sangam Switzerland" },
];

const danceSchools = [
  { name: "Natya Academy Zurich", style: "Bharatanatyam", city: "Zurich", desc: "Certified Bharatanatyam classes for children and adults" },
  { name: "Bollywood Dance Studio", style: "Bollywood / Fusion", city: "Zurich", desc: "Weekly Bollywood dance workshops, choreography for events" },
  { name: "Bollywood Beats Geneva", style: "Bollywood", city: "Geneva", desc: "Dance fitness and performance classes" },
  { name: "Kuchipudi Kalakshetra", style: "Kuchipudi", city: "Zurich", desc: "Telugu classical dance — children and advanced students" },
  { name: "Odissi Dance Academy", style: "Odissi", city: "Basel", desc: "Odissi classical dance, annual Guru Purnima recital" },
  { name: "Dhol & Bhangra Group", style: "Bhangra", city: "Zurich", desc: "High-energy Bhangra for events, weddings, Navratri" },
];

const musicGroups = [
  { name: "Swiss Carnatic Music Circle", genre: "Carnatic Classical", city: "Zurich", desc: "Monthly Satsang, violin, veena, vocal lessons" },
  { name: "Hindustani Music Academy", genre: "Hindustani Classical", city: "Zurich", desc: "Tabla, sitar, flute, and vocal — all levels" },
  { name: "Bollywood Band Switzerland", genre: "Bollywood / Film", city: "Zurich", desc: "Live band for weddings, Diwali events, corporate shows" },
  { name: "Sufi Nights Switzerland", genre: "Sufi / Qawwali", city: "Geneva", desc: "Quarterly Sufi music evenings, open to all" },
];

export default function CulturePage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Culture & Arts in Switzerland"
        subtitle="Celebrate India's rich cultural tapestry — classical dance, Bollywood, music, festivals, fashion, and cinema across Switzerland."
        badge="100+ Events/Year"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[{ label: "Culture & Arts" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Festivals & Major Events 2026</h2>
          <p className="text-slate-400 mb-8">India's biggest festivals celebrated with the Swiss-Indian community</p>
          <div className="grid md:grid-cols-2 gap-5">
            {festivals.map((f) => (
              <div key={f.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{f.name}</h3>
                    <p className="text-xs text-rose-400">{f.date} · {f.location}</p>
                  </div>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full ml-2">{f.organiser}</span>
                </div>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Dance Schools & Classes</h2>
          <p className="text-slate-400 mb-8">Classical and contemporary Indian dance across Switzerland</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {danceSchools.map((d) => (
              <div key={d.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white text-sm">{d.name}</h3>
                  <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full ml-2">{d.city}</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">{d.style}</p>
                <p className="text-sm text-slate-400">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Music Groups & Academies</h2>
          <p className="text-slate-400 mb-8">From Carnatic classical to Bollywood live bands</p>
          <div className="grid md:grid-cols-2 gap-5">
            {musicGroups.map((m) => (
              <div key={m.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{m.name}</h3>
                  <span className="text-xs text-slate-400">{m.city}</span>
                </div>
                <p className="text-xs text-rose-400 mb-2">{m.genre}</p>
                <p className="text-sm text-slate-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">👗 Indian Fashion & Boutiques</h2>
            <p className="text-slate-400 mb-6">Find Indian ethnic wear, sarees, lehengas, and jewellery in Switzerland</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-rose-400 mb-3">Physical Boutiques</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Rang De (Zurich) — Sarees, salwars, designer wear</li>
                  <li>• Desi Closet (Geneva) — Bridal and party wear</li>
                  <li>• Lehenga House (Zurich) — Wedding collection, alterations</li>
                  <li>• Silk India (Basel) — Pure silk sarees imported from India</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-rose-400 mb-3">Online & Custom Orders</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• WhatsApp boutiques via "Desi Moms Switzerland" group</li>
                  <li>• Custom tailoring orders via community recommendations</li>
                  <li>• Pre-loved Indian wear via Facebook: "Indian Wardrobe Switzerland"</li>
                  <li>• Import via DHL from India — check customs duties at <a href="https://www.ezv.admin.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300">ezv.admin.ch</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
