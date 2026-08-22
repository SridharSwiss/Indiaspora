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
  { lang: "German", regions: "Zurich, Bern, Basel, Lucerne", speakers: "~63% of Switzerland", note: "Swiss German dialect is spoken in daily life; High German (Hochdeutsch) is used in writing and formal settings. Learn Hochdeutsch first." },
  { lang: "French", regions: "Geneva, Lausanne, Neuchâtel", speakers: "~23% of Switzerland", note: "Standard French is used — much closer to Parisian French than Swiss German is to High German." },
  { lang: "Italian", regions: "Lugano, Ticino", speakers: "~8% of Switzerland", note: "Standard Italian with some local vocabulary differences. English is more widely spoken here than in German-speaking regions." },
];

const resources = [
  { category: "Apps", items: ["Duolingo — free daily practice", "Babbel — structured lessons", "Pimsleur — audio-first German", "Anki — vocabulary flashcards"] },
  { category: "Schools", items: ["Migros Clubschule — affordable, widespread", "Berlitz — flexible intensive courses", "GLS (German Language School) — community favourite", "Alliance Française — for French learners"] },
  { category: "Integration Courses", items: ["Kanton-subsidised language courses (ask your Gemeinde)", "FIDE language courses (federally recognised)", "A1/A2 level often required for C permit or naturalisation"] },
  { category: "Community Practice", items: ["Tandem language exchange partners", "Stammtisch (regular meetups for German practice)", "Library reading groups", "Indian community members who are fluent and willing to help"] },
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
      </div>
    </div>
  );
}
