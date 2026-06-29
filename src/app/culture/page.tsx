import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Culture & Arts",
  description: "Celebrate Indian culture in Switzerland — festivals, classical music and dance schools, Bollywood, fashion, and cinema.",
};

const FESTIVALS = [
  { name: "IAGZ Diwali Gala", date: "November", desc: "The biggest Indian festival in Switzerland — dinner gala, cultural performances, and awards at Mattenhofsaal, Zurich. Organised by IAGZ.", city: "Zurich", emoji: "🪔", url: "https://iagz.ch" },
  { name: "Holi Zuri Openair", date: "March", desc: "Vibrant open-air Holi celebration with organic colours, live music, and DJs. One of the largest in Switzerland.", city: "Zurich", emoji: "🎨", url: "https://holizuri.ch" },
  { name: "IAGZ Navratri Garba", date: "September/October", desc: "Switzerland's largest Garba celebration with live music, traditional costumes, and professional Garba artists — organised by IAGZ.", city: "Zurich", emoji: "💃", url: "https://iagz.ch" },
  { name: "SwissPuja – Durga Puja", date: "October", desc: "Authentic five-day Durga Puja at Schwerzisaal, Langnau am Albis — pandal, dhak, prasad, and cultural programs by the Bengali community.", city: "Langnau am Albis", emoji: "🌺", url: "#" },
  { name: "PrangaN@Swiss – Durga Puja", date: "October", desc: "Lausanne's Bengali community organises Durga Puja with traditional rituals, cultural performances, and community feasts.", city: "Lausanne", emoji: "🌸", url: "https://pranganswiss.org" },
  { name: "ISKCON Ratha Yatra", date: "June", desc: "The Chariot Festival of Lord Jagannath — procession through Zurich city centre followed by prasad feast and kirtan.", city: "Zurich", emoji: "🛕", url: "https://krishna.ch" },
  { name: "InBa India Basel Festival", date: "May/June", desc: "Multi-week festival of Indian performing arts at Theater Basel — dance, music, theatre, and cross-cultural programmes.", city: "Basel", emoji: "🎭", url: "#" },
  { name: "India Fest Margazhi Utsav", date: "December", desc: "Annual Carnatic music and classical dance festival celebrating the traditional Tamil Margazhi season in Switzerland.", city: "Zurich", emoji: "🎵", url: "#" },
  { name: "Ganesh Chaturthi", date: "August/September", desc: "Maharashtra Mandal organises Ganesh Chaturthi with eco-friendly idol, aarti, and cultural programs.", city: "Zurich", emoji: "🐘", url: "#" },
  { name: "BAPS Diwali Celebration", date: "November", desc: "BAPS Swaminarayan community celebrates Diwali and New Year at GZ Affoltern, Zurich with spiritual programs.", city: "Zurich", emoji: "✨", url: "https://baps.org" },
  { name: "Holi Festival Basel", date: "March", desc: "Colourful Holi celebration by ICAS — organic colour powder, music, and Indian street food in Basel.", city: "Basel", emoji: "🌈", url: "https://icas-online.com" },
  { name: "Baisakhi Celebrations", date: "April", desc: "Punjabi Cultural Association celebrates Baisakhi with Bhangra performances, langar, and festivities.", city: "Nationwide", emoji: "🌾", url: "#" },
];

const DANCE_SCHOOLS = [
  { name: "Nateschwara Dance School", url: "https://nateschwara.ch", location: "Baden, Aargau", since: "1980", desc: "One of Switzerland's longest-running Indian classical dance schools — Bharatanatyam, Odissi, and contemporary Indian dance. Established 1980.", type: "Classical Dance" },
  { name: "Kalasri", url: "https://kalasri.com", location: "Basel", since: "1976", desc: "Bharatanatyam school in Basel established in 1976 — one of the oldest Indian dance institutions in Switzerland. Performances and classes for all ages.", type: "Classical Dance" },
  { name: "Stuti Aga Dance Academy", url: "https://stutiaga.com", location: "Zurich", since: "–", desc: "Bharatanatyam and Indian classical dance training in Zurich — recitals and community performances.", type: "Classical Dance" },
  { name: "VDance – Veena Iyer Dance", url: "https://veena.dance", location: "Zurich", since: "–", desc: "Contemporary and classical Indian dance company based in Zurich — performances, workshops, and cultural exchange.", type: "Contemporary Dance" },
  { name: "Bollywood Dance Switzerland", url: "#", location: "Zurich/Geneva", since: "–", desc: "Bollywood and Bhangra dance classes for all levels — popular across Zurich and Geneva communities.", type: "Bollywood" },
  { name: "Carnatic Music Circle Switzerland", url: "#", location: "Zurich", since: "–", desc: "Carnatic vocal and instrumental concerts and learning circles — South Indian classical music community.", type: "Music" },
];

const FASHION = [
  { name: "Rukkumani Ethnic Wear", url: "https://rukkumani.ch", location: "Near Basel", desc: "Swiss-based Indian ethnic wear boutique — sarees, salwar kameez, lehengas, and sherwanis for festivals and events.", emoji: "👗" },
  { name: "Indian Fashion Shows", url: "#", location: "Zurich", desc: "Annual fashion shows at IAGZ Diwali Gala and community events showcasing Indian designers and traditional wear.", emoji: "🥻" },
  { name: "Online Indian Fashion", url: "#", location: "Nationwide", desc: "Order from Indian brands — Myntra, Nykaa Fashion, and Fabindia ship to Switzerland with EU customs duty.", emoji: "🛍️" },
  { name: "Jewellery Exhibitions", url: "#", location: "Nationwide", desc: "Indian gold and silver jewellery exhibitions by community groups — temple jewellery, kundan, and meenakari.", emoji: "💍" },
];

export default function CulturePage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-rose-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">Culture & Arts</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            India&apos;s Culture <span className="gradient-text">Lives in Switzerland</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Celebrate India&apos;s rich heritage through festivals, classical arts, Bollywood, fashion, and cinema — right here in Switzerland.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#festivals" className="btn btn-primary">
              Upcoming Festivals <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#arts" className="btn btn-outline">Arts & Music</a>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Festivals */}
      <section id="festivals" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Festivals</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Indian Festivals in Switzerland</h2>
            <p className="text-slate-400 text-lg">Every major Indian festival is celebrated here — often with thousands of attendees across the country.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FESTIVALS.map((f) => (
              <div key={f.name} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{f.emoji}</span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" /> {f.date}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{f.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{f.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-rose-400 font-medium">{f.city}</span>
                  {f.url !== "#" && (
                    <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                      Website <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="btn btn-outline">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Dance & Music Schools */}
      <section id="arts" className="py-20 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Music & Dance</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Dance Schools & Performing Arts</h2>
            <p className="text-slate-400 text-lg">Classical Indian arts, Bollywood dance, and live music — Switzerland&apos;s Indian cultural scene is thriving with schools founded decades ago.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DANCE_SCHOOLS.map((a) => (
              <a
                key={a.name}
                href={a.url === "#" ? undefined : a.url}
                target={a.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-rose-300" style={{ background: "rgba(244,63,94,0.12)" }}>
                    {a.type}
                  </span>
                  {a.since !== "–" && <span className="text-xs text-slate-600">Est. {a.since}</span>}
                </div>
                <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors mb-1">{a.name}</h3>
                <p className="text-xs text-slate-500 mb-2">{a.location}</p>
                <p className="text-sm text-slate-400">{a.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Fashion */}
      <section id="fashion" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Fashion & Boutiques</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Indian Fashion in Switzerland</h2>
            <p className="text-slate-400 text-lg">Sarees, salwar kameez, sherwanis, and Indo-western fashion — find Indian ethnic wear in Switzerland.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FASHION.map((f) => (
              <a
                key={f.name}
                href={f.url === "#" ? undefined : f.url}
                target={f.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <span className="text-2xl mb-3 block">{f.emoji}</span>
                <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors mb-1">{f.name}</h3>
                <p className="text-xs text-slate-500 mb-2">{f.location}</p>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">🎭</div>
            <h2 className="text-3xl font-bold text-white mb-4">Submit Your Cultural Event</h2>
            <p className="text-slate-400 mb-8">
              Organising an Indian cultural event in Switzerland? Get it listed on IndiaSwiss for free and reach thousands of Indians.
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=Submit%20Cultural%20Event" className="btn btn-primary">
              Submit an Event <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
