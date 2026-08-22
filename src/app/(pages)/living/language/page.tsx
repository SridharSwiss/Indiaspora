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
  { lang: "German", regions: "Zurich, Bern, Basel, Lucerne, St. Gallen", speakers: "~63% of Switzerland", note: "Swiss German (Schweizerdeutsch) dialects are spoken in daily conversation; High German (Hochdeutsch / Standard German) is used in writing, formal settings, and media. Learn Hochdeutsch first — it is universally understood and you will pick up dialect nuances over time." },
  { lang: "French", regions: "Geneva, Lausanne, Neuchâtel, Fribourg, Sion", speakers: "~23% of Switzerland", note: "Standard French is used — much closer to Parisian French than Swiss German is to High German. French speakers in Switzerland appreciate the effort even if your level is basic." },
  { lang: "Italian", regions: "Lugano, Locarno, Bellinzona (Canton Ticino)", speakers: "~8% of Switzerland", note: "Standard Italian with some local vocabulary. English is more widely spoken in Ticino than in German-speaking regions. Romansh (4th national language) is spoken by ~0.5% in Graubünden." },
];

const resources = [
  { category: "Apps", items: ["Duolingo — free gamified daily practice for German, French, Italian", "Babbel — structured lesson paths, strong for Swiss German speakers", "Pimsleur — audio-first approach; excellent for commuters learning German", "Anki — customisable vocabulary flashcards; find shared Swiss German decks online"] },
  { category: "Schools", items: ["Migros Klubschule — Switzerland's largest language school with 50+ locations; courses from A1 to C2; available in-person and online (klubschule.ch)", "Berlitz — flexible intensive courses and one-to-one lessons in major cities", "Alliance Française — for French learners; branches in Zurich, Geneva, Bern, Basel", "VHS (Volkshochschule) — affordable evening and weekend courses run by each city"] },
  { category: "Integration Courses", items: ["Kanton-subsidised language courses — ask your Gemeinde or cantonal migration office for vouchers", "FIDE (fr-de-it.ch) — federally recognised language courses and passport; required for some permit renewals", "A2 written + B1 oral in your canton's language required for C permit and naturalisation", "Online FIDE test preparation materials are free at fide-ch.ch"] },
  { category: "Community Practice", items: ["Tandem language exchange — pair with a Swiss German/French speaker learning English or an Indian language", "Stammtisch — informal German conversation meetups; many advertised on Meetup.com", "Library reading groups and conversation cafés (Bibliothek der Gemeinde)", "Fellow Indian community members who are fluent and willing to do language exchange"] },
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
          <h2 className="text-2xl font-bold text-white mb-6">Switzerland's Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {languages.map((l) => (
              <div key={l.lang} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-xl font-bold text-teal-400 mb-1">{l.lang}</h3>
                <p className="text-xs text-white/40 mb-1">{l.regions}</p>
                <p className="text-xs text-white/50 mb-3">{l.speakers}</p>
                <p className="text-sm text-white/60">{l.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((r) => (
              <div key={r.category} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold text-teal-400 mb-3">{r.category}</h3>
                <ul className="space-y-2">
                  {r.items.map((item) => (
                    <li key={item} className="text-sm text-white/60 flex items-start gap-2">
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
          <p className="text-sm text-white/70">Proficiency in the local language is formally required for both the C permit (settlement) and Swiss naturalisation. You must demonstrate at least <strong className="text-white">A2 written and B1 oral</strong> ability in the official language of your canton of residence. The FIDE test (fide-ch.ch) is the recognised assessment — start preparing early.</p>
        </div>
      </div>
    </div>
  );
}
