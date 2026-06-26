import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const regions = [
  { language: "German (Hochdeutsch + Schweizerdeutsch)", cantons: "Zurich, Bern, Basel, Lucerne, Zug, Aargau and 17 others", share: "~65% of population", tip: "Learn standard German (Hochdeutsch) for writing and formal situations. Swiss German (Schweizerdeutsch) is a dialect — you'll absorb it over time. Don't worry about it initially." },
  { language: "French", cantons: "Geneva, Lausanne, Fribourg, Neuchâtel, Jura, Valais", share: "~23% of population", tip: "Standard French. Much closer to French taught in India. Easier for many Indians than Swiss German." },
  { language: "Italian", cantons: "Ticino and parts of Graubünden", share: "~8% of population", tip: "Standard Italian. Beautiful region. Easy for those who know French or Spanish." },
  { language: "Romansh", cantons: "Parts of Graubünden only", share: "<1% of population", tip: "An ancient Romance language. Fascinating culturally but not needed practically. English and German suffice in Graubünden." },
];

const providers = [
  { name: "Migros Klubschule", url: "https://www.klubschule.ch", type: "Language School", desc: "Switzerland's largest and most affordable language school. German, French, Italian courses at all levels. Locations in every major city." },
  { name: "Volkshochschule (VHS)", url: "https://www.vhs.ch", type: "Adult Education", desc: "State-subsidised adult education. Very affordable German and French courses. Integration courses accepted by authorities." },
  { name: "Berlitz Switzerland", url: "https://www.berlitz.com/en-ch", type: "Language School", desc: "Premium language training. Useful for accelerated learning or business German/French." },
  { name: "Goethe Institut Bern", url: "https://www.goethe.de/ins/ch/de/sta/ber.html", type: "Official (German)", desc: "Official German language institute. Internationally recognised certificates (A1–C2). Exam centre." },
  { name: "Alliance Française", url: "https://www.alliance-francaise.ch", type: "Official (French)", desc: "The official French language and culture institute. DELF/DALF exams. Locations in Zurich, Geneva, Basel." },
  { name: "City of Zurich Integration", url: "https://www.stadt-zuerich.ch/integration", type: "Official Programme", desc: "Stadt Zürich's official integration and language programme. Free or subsidised German courses for new residents." },
];

const apps = [
  { name: "Duolingo", url: "https://www.duolingo.com", desc: "Free. Gamified learning for German and French. Good for beginners and daily practice." },
  { name: "Babbel", url: "https://www.babbel.com", desc: "Structured courses designed by language experts. Better for grammar focus than Duolingo." },
  { name: "Pimsleur", url: "https://www.pimsleur.com", desc: "Audio-focused. Excellent for pronunciation and spoken German/French. Good for commuters." },
  { name: "Anki", url: "https://apps.ankiweb.net", desc: "Free flashcard app. Spaced repetition. Build your own Swiss German vocabulary decks." },
];

export default function LanguagePage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Language Learning in Switzerland"
        subtitle="Switzerland has 4 official languages. Learn which one you need, where to study, and how to integrate into Swiss society."
        badge="🗣 Language Guide"
        gradient="from-cyan-500 to-blue-600"
        breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Language Learning" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Switzerland's 4 Official Languages</h2>
          <p className="text-slate-400 text-sm mb-6">Which language you need depends entirely on where in Switzerland you live</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((r) => (
              <div key={r.language} className="glass rounded-xl p-5">
                <h3 className="font-semibold text-white text-base mb-1">{r.language}</h3>
                <div className="text-xs text-cyan-400 mb-1">{r.cantons}</div>
                <div className="text-xs text-slate-500 mb-3">{r.share}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{r.tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Language Schools & Courses</h2>
          <p className="text-slate-400 text-sm mb-6">In-person courses across Switzerland — some count as integration courses required by permits</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {providers.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover group block">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-white text-sm group-hover:text-cyan-400 transition-colors">{p.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 mb-2 inline-block">{p.type}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Language Learning Apps</h2>
          <p className="text-slate-400 text-sm mb-6">Supplement your classes with daily practice on your phone</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {apps.map((a) => (
              <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover group block">
                <h3 className="font-semibold text-white text-sm group-hover:text-cyan-400 transition-colors mb-2">{a.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-6 border border-cyan-500/20">
          <h3 className="font-bold text-cyan-400 text-sm mb-3">🇮🇳 Hindi/Indian Language Practice Groups</h3>
          <p className="text-slate-400 text-sm leading-relaxed">While you learn German or French, the Indian community also maintains Hindi and regional language proficiency through IAGZ language classes, weekend schools, and cultural group activities. These are also great places to practice German with fellow Indians who already speak it.</p>
        </div>
      </section>
    </div>
  );
}
