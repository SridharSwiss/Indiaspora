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
  { name: "Swiss Public Schools", url: "https://www.edk.ch/en/education-system/compulsory-schooling", desc: "Free, high quality, and language-immersive. Children are placed by age group. The first 6–12 months can be linguistically challenging — most cantons provide language support (Deutsch als Zweitsprache / DaZ) at no extra cost. Compulsory from age 4 (Kindergarten) to 15.", icon: "🏫" },
  { name: "International Schools", url: "https://www.icsz.ch/", desc: "English-medium education following the IB, British, or American curriculum. Popular with families on short-term assignments or planning to return to India. Annual fees typically range from CHF 20,000–40,000. Examples: Inter-Community School Zurich (ICS), Zurich International School (ZIS), Institut International de Lancy (Geneva).", icon: "🌍" },
  { name: "Indian / CBSE-Curriculum Schools", url: "https://www.indembassybern.gov.in/page/schools/", desc: "A small number of Indian schools operate in Switzerland, primarily in the Zurich area, following the CBSE or ICSE curriculum. These are best for families with definite plans to return to India. The Indian Embassy maintains a list of recognised Indian associations that may run such programmes.", icon: "🇮🇳" },
  { name: "Heritage Language Classes", url: "https://iagz.ch", desc: "Indian community organisations run weekend Hindi, Tamil, Telugu, Malayalam, and Gujarati classes. In Zurich, the Hindi School Zürich (run under the Indian community) offers regular classes for children. The Indian Association of Greater Zurich (IAGZ, iagz.ch) coordinates many cultural and educational events.", icon: "📚" },
];

const universities = [
  { name: "ETH Zurich", url: "https://ethz.ch/en.html", city: "Zurich", note: "Consistently top-10 globally in engineering, science, and technology. Instruction mainly in German at Bachelor level; many Master's programmes in English. Large Indian student community." },
  { name: "University of Zurich (UZH)", url: "https://www.uzh.ch/en.html", city: "Zurich", note: "Switzerland's largest university. Strong in medicine, law, social sciences, and economics. Some English-taught Master's programmes." },
  { name: "EPFL", url: "https://www.epfl.ch/en/", city: "Lausanne", note: "Leading technical university; English-friendly environment with a large and active Indian student association. Strong in engineering, computer science, and life sciences." },
  { name: "University of Geneva", url: "https://www.unige.ch/en/", city: "Geneva", note: "Strong in international relations, law, sciences, and global health. Proximity to UN agencies makes it popular for policy-oriented students." },
  { name: "University of Basel", url: "https://www.unibas.ch/en.html", city: "Basel", note: "Oldest Swiss university (founded 1460). Excellent in life sciences and pharmaceutical sciences — close to Novartis, Roche, and other pharma HQs." },
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
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>School Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schoolTypes.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-6 block group">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-indigo-400 transition-colors" style={{ color: "var(--text)" }}>{s.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Universities with Large Indian Communities</h2>
          <div className="space-y-3">
            {universities.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 flex items-start justify-between gap-4 group">
                <div>
                  <h3 className="text-base font-semibold group-hover:text-purple-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                  <p className="text-sm/60 mt-1" style={{ color: "var(--text)" }}>{u.note}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 whitespace-nowrap">{u.city}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-purple-500/20">
          <h3 className="text-base font-semibold text-purple-400 mb-2">Tip for New Arrivals</h3>
          <p className="text-sm/70" style={{ color: "var(--text)" }}>Contact your Gemeinde (municipality) as soon as you register — they will tell you which public school your child is assigned to and what language support is available. The Swiss public school system is genuinely excellent and free of charge, including textbooks and most materials.</p>
        </div>
      </div>
    </div>
  );
}
