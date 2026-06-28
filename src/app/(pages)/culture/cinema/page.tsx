import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Cinema & Entertainment in Switzerland",
  description: "Watch Bollywood and Indian regional films in Switzerland — screenings, film festivals, streaming platforms, and community events.",
  openGraph: {
    title: "Indian Cinema & Entertainment in Switzerland | IndiaSwiss",
    description: "Watch Bollywood and Indian regional films in Switzerland — screenings, film festivals, streaming platforms, and community events.",
  },
};

const screenings = [
  { name: "Indian Film Festival Zurich", timing: "November 2026", location: "Zurich City Centre cinemas", desc: "Annual curated festival of Indian cinema — Bollywood, regional art-house, and independent documentaries. Often includes Q&A with visiting directors.", org: "IndieSwiss Cinema" },
  { name: "Indian Film Festival Geneva", timing: "November 2026", location: "Cinema Spoutnik, Geneva", desc: "Parallel event in Geneva — French-subtitled screenings of Indian films for the multilingual community.", org: "IAG & CineIndien" },
  { name: "Bollywood Night Zurich", timing: "Monthly", location: "Various venues, Zurich", desc: "Screening of the latest Bollywood release — announced via IAGZ and community WhatsApp groups. Often followed by dinner.", org: "IAGZ" },
  { name: "Tamil Film Screenings", timing: "Quarterly", location: "Zurich & Geneva", desc: "Recent Tamil blockbusters screened for the Swiss-Tamil community. Announced via Tamil Sangam Switzerland.", org: "Tamil Sangam" },
];

const streaming = [
  { name: "Netflix India Content", url: "https://www.netflix.com", note: "Large Bollywood and Indian regional library. Available in Switzerland. Use English-language subtitles for non-Hindi films." },
  { name: "Disney+ Hotstar", url: "https://www.hotstar.com", note: "Best for cricket (IPL), Hindi serials, and Star India content. May require a VPN or Indian account depending on licensing." },
  { name: "Amazon Prime Video", url: "https://www.primevideo.com", note: "Good Indian content library — The Family Man, Panchayat, Mirzapur, and more. Swiss accounts have partial Indian catalogue." },
  { name: "ZEE5", url: "https://www.zee5.com", note: "Zee Entertainment content — Hindi, Telugu, Tamil, Kannada, Marathi. Global subscription available from Switzerland." },
  { name: "SonyLIV", url: "https://www.sonyliv.com", note: "Sony India originals, Cricket World Cup coverage, and classic Indian TV. Global plan available." },
  { name: "Mubi", url: "https://mubi.com", note: "Art-house and independent Indian cinema — curated selection of award-winning Indian films." },
];

const radio = [
  { name: "Radio Salaam Namaste", url: "https://www.radiosalaamnamaste.com", desc: "Online Hindi radio — Bollywood music, RJ chat, and community news. Streams globally." },
  { name: "Red FM India (Online)", url: "https://www.redfm.in", desc: "Popular Indian FM station available as online stream. Latest Bollywood hits and RJ shows." },
  { name: "Spotify – Indian Music", url: "https://open.spotify.com/genre/bollywood-page", desc: "Bollywood playlists, Carnatic classical, Punjabi, Tamil, and all regional Indian music genres." },
];

export default function CinemaPage() {
  return (
    <div>
      <PageHeader
        title="Cinema & Entertainment"
        subtitle="From Bollywood blockbusters to regional art cinema — how the Indian community in Switzerland stays connected to Indian screen culture."
        badge="Film & Media"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Cinema & Entertainment" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Film Screenings & Festivals</h2>
          <p className="text-slate-400 mb-8">Watch Indian films with the community in Switzerland</p>
          <div className="grid md:grid-cols-2 gap-5">
            {screenings.map((s) => (
              <div key={s.name} className="glass rounded-2xl p-6 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{s.name}</h3>
                    <p className="text-xs text-rose-400 mt-0.5">{s.timing} &middot; {s.location}</p>
                  </div>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full ml-2 shrink-0">{s.org}</span>
                </div>
                <p className="text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Streaming Platforms</h2>
          <p className="text-slate-400 mb-8">Watch Indian content from Switzerland</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {streaming.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-rose-400 transition-colors">{s.name}</h3>
                <p className="text-sm text-slate-400">{s.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Indian Radio & Music Streaming</h2>
          <p className="text-slate-400 mb-8">Stay connected to Indian sounds</p>
          <div className="grid md:grid-cols-3 gap-4">
            {radio.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-rose-400 transition-colors">{r.name}</h3>
                <p className="text-sm text-slate-400">{r.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
