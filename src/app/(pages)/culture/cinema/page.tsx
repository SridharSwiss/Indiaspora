import PageHeader from "@/components/ui/PageHeader";

const streamingPlatforms = [
  { name: "Netflix", url: "https://www.netflix.com", desc: "Indian content available on Swiss accounts. Bollywood, South Indian dubbed, and original Indian series (Sacred Games, Delhi Crime, Scam 1992).", available: "Available in Switzerland" },
  { name: "Amazon Prime Video", url: "https://www.primevideo.com", desc: "Strong Indian catalogue. Subscribe to Indian channels as add-ons. Best for regional cinema and Bollywood.", available: "Available in Switzerland" },
  { name: "Disney+ Hotstar (International)", url: "https://www.hotstar.com", desc: "International subscription available from Switzerland. IPL cricket, Star content, Hindi and regional shows.", available: "International subscription" },
  { name: "SonyLIV (International)", url: "https://www.sonyliv.com", desc: "Indian TV shows, cricket, web series. International subscription available. Use Indian content via VPN (personal risk).", available: "International access" },
  { name: "Zee5 Global", url: "https://www.zee5.com", desc: "Indian TV serials, movies, originals. Global subscription available for Swiss residents.", available: "Global subscription" },
  { name: "MX Player", url: "https://www.mxplayer.in", desc: "Free Indian content. Availability may vary by region. Check from Switzerland.", available: "Check availability" },
];

const radioStreams = [
  { name: "Radio Mirchi", url: "https://www.radiomirchi.com", desc: "Live stream of India's most popular FM station — Hindi film music, RJs, morning shows" },
  { name: "Radio City 91.1 FM", url: "https://www.radiocity.in", desc: "Hindi and regional music, bollywood news, live streaming from India" },
  { name: "Big FM", url: "https://www.bigfm.in", desc: "Bollywood music and talk shows, streamable from Switzerland" },
];

export default function CinemaPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Cinema & Entertainment in Switzerland"
        subtitle="Bollywood, regional cinema, OTT streaming, and Indian film festivals — stay connected with Indian entertainment from Switzerland."
        badge="Films & OTT"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[{ label: "Culture & Arts", href: "/culture" }, { label: "Cinema & Entertainment" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-2">Indian Film Festival Switzerland</h2>
          <p className="text-slate-400 mb-6">Annual curated Indian cinema event in Zurich and Geneva — Bollywood, regional, and art-house films</p>
          <div className="glass rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-rose-400 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>&#8226; 10–15 curated Indian films over 5–7 days</li>
                  <li>&#8226; Mix of Bollywood blockbusters and independent regional cinema</li>
                  <li>&#8226; Director Q&amp;A sessions and panel discussions</li>
                  <li>&#8226; Networking events with Swiss film industry</li>
                  <li>&#8226; Usually held in November in Zurich and Geneva</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-rose-400 mb-3">Bollywood in Swiss Cinemas</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>&#8226; <a href="https://www.pathe.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300">Pathe.ch</a> — occasionally screens Bollywood blockbusters (Diwali releases)</li>
                  <li>&#8226; Special screenings organised by IAGZ and community groups</li>
                  <li>&#8226; Check <a href="https://www.cineman.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300">cineman.ch</a> for Swiss cinema listings</li>
                  <li>&#8226; Kino Xenix Zurich often screens world cinema including Indian films</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">OTT Streaming Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {streamingPlatforms.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover group block">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors">{p.name}</h3>
                  <span className="text-xs bg-white/10 text-slate-400 px-2 py-1 rounded-full ml-2 shrink-0 text-center">{p.available}</span>
                </div>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Indian Radio Streams</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {radioStreams.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover group block">
                <h3 className="font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors">{r.name}</h3>
                <p className="text-sm text-slate-400">{r.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">YouTube — Free Indian Content</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
            <ul className="space-y-2">
              <li>&#8226; <strong>T-Series</strong> — Bollywood music and film trailers</li>
              <li>&#8226; <strong>SET India</strong> — Sony TV shows (KBC, CID, etc.)</li>
              <li>&#8226; <strong>Star Plus / Hotstar Clips</strong> — Star TV content</li>
            </ul>
            <ul className="space-y-2">
              <li>&#8226; <strong>Sun TV</strong> — Tamil serials and movies</li>
              <li>&#8226; <strong>ETV Andhra</strong> — Telugu content</li>
              <li>&#8226; <strong>Shemaroo Movies</strong> — Classic Bollywood films free</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
