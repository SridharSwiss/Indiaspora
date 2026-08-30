import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Language Learning in Switzerland for Indians",
  description: "Learn German, French, or Italian. Language schools, apps, integration courses, and tips for Indian residents.",
  openGraph: {
    title: "Language Learning in Switzerland for Indians | IndiaSwiss",
    description: "Learn German, French, or Italian. Language schools, apps, integration courses, and tips for Indian residents.",
  },
};

const languages = [
  { lang: "German", regions: "Zurich, Bern, Basel, Lucerne, St. Gallen", speakers: "~63% of Switzerland", url: "https://www.klubschule.ch/Angebote/Sprachen/Deutsch", note: "Swiss German (Schweizerdeutsch) dialects are spoken in daily conversation; High German (Hochdeutsch / Standard German) is used in writing, formal settings, and media. Learn Hochdeutsch first — it is universally understood and you will pick up dialect nuances over time." },
  { lang: "French", regions: "Geneva, Lausanne, Neuchâtel, Fribourg, Sion", speakers: "~23% of Switzerland", url: "https://www.alliancefr.ch/en/", note: "Standard French is used — much closer to Parisian French than Swiss German is to High German. French speakers in Switzerland appreciate the effort even if your level is basic." },
  { lang: "Italian", regions: "Lugano, Locarno, Bellinzona (Canton Ticino)", speakers: "~8% of Switzerland", url: "https://www.klubschule.ch/Angebote/Sprachen/Italienisch", note: "Standard Italian with some local vocabulary. English is more widely spoken in Ticino than in German-speaking regions. Romansh (4th national language) is spoken by ~0.5% in Graubünden." },
];

const resources = [
  { category: "Apps & Online", items: [
    "Duolingo (duolingo.com) — free gamified daily practice for German, French, Italian; good for vocabulary building",
    "Babbel (babbel.com/learn/german) — structured lesson paths, strong grammar focus; free trial available",
    "Pimsleur — audio-first approach; excellent for commuters learning German or French during a train commute",
    "Tandem (tandem.net) — language exchange app; find Swiss German or French speakers wanting to learn English",
    "Anki — customisable vocabulary flashcards; search for shared Swiss German and Hochdeutsch decks online",
  ] },
  { category: "Schools", items: [
    "Migros Klubschule (klubschule.ch) — Switzerland's largest language school, 50+ locations, courses A1–C2, in-person and online",
    "Berlitz (berlitz.com/en-ch) — intensive one-to-one and group courses in Zurich, Geneva, Basel, Bern",
    "Alliance Française (alliancefr.ch) — for French learners; branches in Zurich, Geneva, Bern, Basel, Lausanne",
    "Goethe-Institut Schweiz (goethe.de/en/wwt/sch.html) — official German-language institute; courses and internationally recognised exams (Goethe-Zertifikat) in Zurich, Bern, Basel",
    "VHS Zürich (vhszurich.ch) — affordable evening and weekend courses; subsidised rates for residents of the city",
    "VHS Genève (cfp-genève.ch) — French-language courses and continuing education for Geneva residents",
  ] },
  { category: "Integration Courses", items: [
    "Kanton-subsidised language courses — ask your Gemeinde or cantonal migration office about Integrationsförderung vouchers covering 50–80% of course costs",
    "FIDE (fide-ch.ch) — the federally recognised Swiss language framework; required for some permit renewals and naturalisation",
    "A2 written + B1 oral in your canton's language is required for C permit and Swiss citizenship",
    "FIDE test preparation materials and practice tests are free at fide-ch.ch — register and practice well before your real permit renewal deadline",
    "Speak Local / Lingua (speaklocal.ch) — free conversation programmes run in collaboration with Swiss cantonal offices",
  ] },
  { category: "Community Practice", items: [
    "Tandem language exchange (tandem.net) — pair with a Swiss German or French speaker learning English, Hindi, or another Indian language",
    "Stammtisch — informal German conversation meetups, many advertised on Meetup.com in Zurich, Bern, Basel",
    "Swiss German vs High German: learn Hochdeutsch (Standard German) first — it is understood everywhere. Dialect (Züridütsch, Baseldytsch, Berndütsch) varies even between cities; you will pick it up naturally over 6–12 months",
    "Library reading groups and conversation cafés (Bibliothek der Gemeinde) — free and open to all residents; a low-pressure environment to practise",
    "Indian community members fluent in German or French — ask in Indian WhatsApp groups or IAGZ/IAB community forums for language exchange partners",
  ] },
];

export default function LanguagePage() {
  return (
    <div>
      <PageHeader
        title="Language Learning"
        subtitle="Switzerland has four national languages. Learning the local language opens doors socially, professionally, and legally."
        badge="Language Guide"
        gradient="from-teal-500 to-cyan-500"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Language Learning" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Switzerland's Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {languages.map((l) => (
              <a key={l.lang} href={l.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-xl font-bold text-teal-400 mb-1 group-hover:text-teal-300 transition-colors">{l.lang}</h3>
                <p className="text-xs/40 mb-1" style={{ color: "var(--text)" }}>{l.regions}</p>
                <p className="text-xs/50 mb-3" style={{ color: "var(--text)" }}>{l.speakers}</p>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{l.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Learning Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((r) => (
              <div key={r.category} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold text-teal-400 mb-3">{r.category}</h3>
                <ul className="space-y-2">
                  {r.items.map((item) => (
                    <li key={item} className="text-sm/60 flex items-start gap-2" style={{ color: "var(--text)" }}>
                      <span className="text-teal-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-teal-500/20">
          <h3 className="text-base font-semibold text-teal-400 mb-2">Why Language Matters Legally</h3>
          <p className="text-sm/70" style={{ color: "var(--text)" }}>Proficiency in the local language is formally required for both the C permit (settlement) and Swiss naturalisation. You must demonstrate at least <strong style={{ color: "var(--text)" }}>A2 written and B1 oral</strong> ability in the official language of your canton of residence. The FIDE test (fide-ch.ch) is the recognised assessment — start preparing early.</p>
        </div>
      </div>
    </div>
  );
}
