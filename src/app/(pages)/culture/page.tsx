import PageHeader from "@/components/ui/PageHeader";

const festivals = [
  { name: "IAGZ Diwali Gala", date: "November 2026", location: "Mattenhofsaal, Zurich", desc: "Annual Diwali gala with cultural performances, dinner, and community awards — the biggest Indian event in Switzerland", organiser: "IAGZ" },
  { name: "Holi Zuri Openair", date: "March 2026", location: "Zurich", desc: "Open-air Holi celebration with organic colours, live music and DJs. One of the largest in Switzerland.", organiser: "holizuri.ch" },
  { name: "IAGZ Navratri Garba", date: "October 2026", location: "Zurich", desc: "Largest Garba celebration in Switzerland with live orchestra and professional Garba artists", organiser: "IAGZ" },
  { name: "SwissPuja Durga Puja", date: "October 2026", location: "Schwerzisaal, Langnau am Albis", desc: "Authentic five-day Durga Puja with pandal, dhak drummers, prasad, and cultural programs", organiser: "SwissPuja" },
  { name: "PrangaN@Swiss Durga Puja", date: "October 2026", location: "Lausanne", desc: "Lausanne's Bengali community organises Durga Puja with traditional rituals and cultural feast", organiser: "PrangaN@Swiss" },
  { name: "ISKCON Ratha Yatra", date: "June 2026", location: "Zurich City Centre", desc: "Festival of Lord Jagannath's chariot — procession through Zurich followed by prasad feast and kirtan", organiser: "ISKCON Zurich" },
  { name: "InBa India Basel Festival", date: "May–Jun 2026", location: "Theater Basel", desc: "Multi-week festival of Indian performing arts at Theater Basel — dance, music, and theatre", organiser: "Theater Basel" },
  { name: "India Fest Margazhi Utsav", date: "December 2026", location: "Zurich", desc: "Annual Carnatic music and classical dance festival celebrating the Tamil Margazhi season in Switzerland", organiser: "South Indian Community" },
  { name: "Holi Festival Basel", date: "March 2026", location: "Basel", desc: "Festival of colours with music, dance, and organic colour powder", organiser: "ICAS" },
  { name: "India Day Bern", date: "August 2026", location: "Embassy of India, Bern", desc: "India Independence Day celebration hosted by the Embassy of India", organiser: "Embassy of India" },
  { name: "Ganesh Chaturthi", date: "August/September 2026", location: "Zurich", desc: "Eco-friendly Ganesh Chaturthi with aarti, cultural programs and community feast", organiser: "Maharashtra Mandal" },
  { name: "Pongal Celebration", date: "January 2026", location: "Geneva", desc: "Tamil harvest festival with traditional cooking, kolam, and cultural events", organiser: "Tamil Sangam Switzerland" },
];

const danceSchools = [
  { name: "Nateschwara Dance School", style: "Bharatanatyam / Odissi", city: "Baden, Aargau", since: "1980", desc: "One of Switzerland's oldest Indian classical dance schools — established 1980. Bharatanatyam, Odissi, and contemporary Indian dance.", url: "https://nateschwara.ch" },
  { name: "Kalasri", style: "Bharatanatyam", city: "Basel", since: "1976", desc: "Bharatanatyam school in Basel established in 1976 — one of the longest-running Indian dance institutions in Switzerland. Classes for all ages.", url: "https://kalasri.com" },
  { name: "Stuti Aga Dance Academy", style: "Bharatanatyam", city: "Zurich", since: "–", desc: "Bharatanatyam and Indian classical dance training in Zurich — recitals and community performances.", url: "https://stutiaga.com" },
  { name: "VDance – Veena Iyer Dance", style: "Contemporary / Classical", city: "Zurich", since: "–", desc: "Contemporary and classical Indian dance company — performances, workshops, and cultural exchange.", url: "https://veena.dance" },
  { name: "Bollywood Dance Studio", style: "Bollywood / Fusion", city: "Zurich/Geneva", since: "–", desc: "Weekly Bollywood dance workshops and choreography for events and weddings", url: "#" },
  { name: "Dhol & Bhangra Group", style: "Bhangra", city: "Zurich", since: "–", desc: "High-energy Bhangra for events, weddings, Navratri and Baisakhi celebrations", url: "#" },
];

const musicGroups = [
  { name: "Swiss Carnatic Music Circle", genre: "Carnatic Classical", city: "Zurich", desc: "Monthly Satsang, violin, veena, vocal lessons and annual Margazhi Utsav" },
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
        {/* Festivals */}
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
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full ml-2 shrink-0">{f.organiser}</span>
                </div>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Dance Schools & Classes</h2>
          <p className="text-slate-400 mb-8">Classical and contemporary Indian dance across Switzerland — with schools established as far back as 1976</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {danceSchools.map((d) => (
              <a key={d.name} href={d.url === "#" ? undefined : d.url} target={d.url !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                className="glass rounded-2xl p-5 card-hover group block">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white text-sm group-hover:text-rose-400 transition-colors">{d.name}</h3>
                  <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full ml-2 shrink-0">{d.city}</span>
                </div>
                <p className="text-xs text-slate-400 mb-1">{d.style}</p>
                {d.since !== "–" && <p className="text-xs text-rose-400/70 mb-2">Est. {d.since}</p>}
                <p className="text-sm text-slate-400">{d.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Music */}
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

        {/* Fashion */}
        <section className="mb-16">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">👗 Indian Fashion & Boutiques</h2>
            <p className="text-slate-400 mb-6">Find Indian ethnic wear, sarees, lehengas, and jewellery in Switzerland</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-rose-400 mb-3">Physical Boutiques</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• <a href="https://rukkumani.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300">Rukkumani</a> (near Basel) — Sarees, salwar kameez, lehengas, sherwanis for festivals</li>
                  <li>• Rang De (Zurich) — Sarees, salwars, designer wear</li>
                  <li>• Desi Closet (Geneva) — Bridal and party wear</li>
                  <li>• Silk India (Basel) — Pure silk sarees imported from India</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-rose-400 mb-3">Online & Custom Orders</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• WhatsApp boutiques via \"Desi Moms Switzerland\" group</li>
                  <li>• Custom tailoring orders via community recommendations</li>
                  <li>• Pre-loved Indian wear via Facebook: \"Indian Wardrobe Switzerland\"</li>
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
