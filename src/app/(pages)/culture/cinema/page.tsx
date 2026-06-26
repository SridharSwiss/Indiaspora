import PageHeader from "@/components/ui/PageHeader";

const ottPlatforms = [
  {
    name: "Netflix",
    url: "https://www.netflix.com",
    description: "Swiss Netflix accounts have access to Indian content. A significant library of Bollywood, regional, and Indian originals is available.",
    note: "Use your standard Swiss account — no VPN needed for most Indian content.",
  },
  {
    name: "Amazon Prime Video",
    url: "https://www.primevideo.com",
    description: "Large Indian content library including Bollywood films, regional cinema, and Amazon Originals. Full Indian catalogue may require a VPN.",
    note: "VPN may be needed for the complete Indian Prime Video catalogue.",
  },
  {
    name: "Disney+ Hotstar International",
    url: "https://www.hotstar.com",
    description: "International subscription available in Switzerland. Access to Indian TV serials, sports (IPL, cricket), and Hotstar Specials.",
    note: "Subscribe directly — international plans cover Switzerland.",
  },
  {
    name: "SonyLIV",
    url: "https://www.sonyliv.com",
    description: "International subscription available. South Indian films, reality shows, and Sony TV originals.",
    note: "International subscription required.",
  },
  {
    name: "Zee5",
    url: "https://www.zee5.com",
    description: "International subscription gives access to Zee TV shows, South Asian films, and Zee Originals from Switzerland.",
    note: "International subscription required.",
  },
];

export default function CinemaPage() {
  return (
    <div>
      <PageHeader
        title="Indian Cinema & Entertainment in Switzerland"
        subtitle="Bollywood, regional cinema, OTT streaming, and Indian film festivals — stay connected with Indian entertainment from Switzerland."
        badge="Films & OTT"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Cinema & Entertainment" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Film Festival */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Indian Film Festival Switzerland</h2>
          <div className="glass card-hover rounded-2xl p-8">
            <p className="text-white/70 mb-3">An annual film festival held in <strong className="text-white">Zurich and Geneva</strong> every November. The festival presents a curated programme of Bollywood blockbusters, regional cinema, and art-house Indian films. A must-attend event for cinephiles in the Swiss-Indian community.</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2"><span className="text-rose-400">•</span>Bollywood mainstream and indie films</li>
              <li className="flex items-start gap-2"><span className="text-rose-400">•</span>Regional cinema: Tamil, Telugu, Malayalam, Kannada, Bengali</li>
              <li className="flex items-start gap-2"><span className="text-rose-400">•</span>Art-house and parallel cinema screenings</li>
              <li className="flex items-start gap-2"><span className="text-rose-400">•</span>Director Q&As and panel discussions (select years)</li>
            </ul>
          </div>
        </section>

        {/* Cinema Screenings */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Bollywood in Swiss Cinemas</h2>
          <div className="glass rounded-2xl p-6 text-white/70 text-sm">
            <p className="mb-3"><strong className="text-white">Pathé Zurich</strong> and other multiplex chains occasionally screen major Bollywood blockbusters on release weekends, especially for big-budget films (e.g., Shah Rukh Khan, Salman Khan releases).</p>
            <p>Community groups also organise <strong className="text-white">special screenings</strong> at local cinemas for popular films. Watch for event announcements in <strong className="text-white">"Indians in Zurich"</strong> and <strong className="text-white">"Indian Events Switzerland"</strong> Facebook groups.</p>
          </div>
        </section>

        {/* OTT Platforms */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">OTT Streaming from Switzerland</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ottPlatforms.map((platform) => (
              <div key={platform.name} className="glass card-hover rounded-2xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-400 hover:text-rose-300 underline ml-2 shrink-0">Visit</a>
                </div>
                <p className="text-sm text-white/70 mb-2">{platform.description}</p>
                <p className="text-xs text-white/40 italic">{platform.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube & Radio */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">YouTube & Online Radio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-2">YouTube</h3>
              <p className="text-sm text-white/60">Free access to a vast catalogue of Indian content — regional cinema on dedicated YouTube channels (Sun NXT, Manorama, Goldmines), music videos, comedy shows, and classic Bollywood films.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-2">Online Indian Radio</h3>
              <ul className="space-y-1 text-sm text-white/60">
                <li>Radio Mirchi — stream online from anywhere</li>
                <li>Radio City — Bollywood hits and shows</li>
                <li>Bollywood radio streams on TuneIn and RadioGarden</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
