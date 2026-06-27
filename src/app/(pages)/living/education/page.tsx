import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Education & Schools in Switzerland for Indians",
  description: "Swiss public schools, international schools, Indian heritage language classes, and university options for Indian families.",
  openGraph: {
    title: "Education & Schools in Switzerland for Indians | IndiaSwiss",
    description: "Swiss public schools, international schools, Indian heritage language classes, and university options for Indian families.",
  },
};

const schoolTypes = [
  { name: "Swiss Public Schools", desc: "Free, high quality, and language-immersive. Children are placed by age. Expect the first 6–12 months to be challenging linguistically — support classes are usually provided.", icon: "🏫" },
  { name: "International Schools", desc: "English-medium education following the IB or British/American curriculum. Popular with expat families. Fees range from CHF 20,000–40,000/year.", icon: "🌍" },
  { name: "Indian International Schools", desc: "CBSE-curriculum Indian schools exist in Zurich and Geneva, catering to families planning to return to India.", icon: "🇮🇳" },
  { name: "Heritage Language Classes", desc: "Many Indian associations run weekend Hindi, Tamil, Telugu, and Malayalam classes for children born in Switzerland.", icon: "📚" },
];

const universities = [
  { name: "ETH Zurich", city: "Zurich", note: "World top-10 technical university. Strong in engineering, science, and tech." },
  { name: "University of Zurich", city: "Zurich", note: "Largest Swiss university; strong in medicine, law, and social sciences." },
  { name: "EPFL", city: "Lausanne", note: "Leading technical university; English-friendly; large Indian student community." },
  { name: "University of Geneva", city: "Geneva", note: "Strong in international relations, law, and sciences." },
  { name: "University of Basel", city: "Basel", note: "Strong in life sciences; close to major pharma companies." },
];

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        title="Education in Switzerland"
        subtitle="From nursery to university — navigating Swiss education as an Indian family."
        badge="Education Guide"
        gradient="from-purple-500 to-violet-500"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Education" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">School Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schoolTypes.map((s) => (
              <div key={s.name} className="glass card-hover rounded-2xl p-6">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{s.name}</h3>
                <p className="text-sm text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Universities with Large Indian Communities</h2>
          <div className="space-y-3">
            {universities.map((u) => (
              <div key={u.name} className="glass card-hover rounded-2xl p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{u.name}</h3>
                  <p className="text-sm text-white/60 mt-1">{u.note}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 whitespace-nowrap">{u.city}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
