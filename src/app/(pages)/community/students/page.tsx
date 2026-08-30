import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Students in Switzerland",
  description: "Guide for Indian students — top universities, scholarships, student associations, and visa information.",
  openGraph: {
    title: "Indian Students in Switzerland | IndiaSwiss",
    description: "Guide for Indian students — top universities, scholarships, student associations, and visa information.",
  },
};

const cantonal: { name: string; url: string; city: string; rank: string; desc: string }[] = [
  { name: "ETH Zurich", url: "https://www.ethz.ch", city: "Zurich", rank: "#7 QS World", desc: "Switzerland's premier technical university. Many Master's in English. Strong Indian community (InSAZ)." },
  { name: "EPFL", url: "https://www.epfl.ch", city: "Lausanne", rank: "#16 QS World", desc: "Top engineering, computer science, and life sciences. Active Indian student association YUVA." },
  { name: "University of Zurich (UZH)", url: "https://www.uzh.ch/en.html", city: "Zurich", rank: "Top 100 QS", desc: "Switzerland's largest university — medicine, law, social sciences, and humanities." },
  { name: "University of Geneva (UNIGE)", url: "https://www.unige.ch/en", city: "Geneva", rank: "Top 100 QS", desc: "International relations, law, sciences, and global health. Adjacent to UN and WHO." },
  { name: "University of Basel", url: "https://www.unibas.ch/en.html", city: "Basel", rank: "Top 150 QS", desc: "Oldest Swiss university — life sciences and pharma cluster next door (Novartis, Roche)." },
  { name: "University of Bern", url: "https://www.unibe.ch/index_eng.html", city: "Bern", rank: "Top 150 QS", desc: "Medicine, veterinary, law, and natural sciences in the federal capital." },
  { name: "University of Lausanne (UNIL)", url: "https://www.unil.ch/central/en/home.html", city: "Lausanne", rank: "Top 200 QS", desc: "Business (HEC Lausanne), biology, geosciences. Shares campus with EPFL." },
  { name: "University of St. Gallen (HSG)", url: "https://www.unisg.ch/en/", city: "St. Gallen", rank: "Top 100 Finance", desc: "Europe's top business school for management, law, and finance." },
  { name: "University of Fribourg", url: "https://www.unifr.ch/home/en.html", city: "Fribourg", rank: "Bilingual", desc: "Bilingual French/German — law, humanities, sciences, and theology." },
  { name: "University of Lucerne", url: "https://www.unilu.ch/en/", city: "Lucerne", rank: "Specialist", desc: "Law, economics, humanities, health sciences, and theology." },
  { name: "University of Neuchâtel", url: "https://www.unine.ch/unine/en/home.html", city: "Neuchâtel", rank: "Research", desc: "Law, natural sciences, economics, and humanities in French-speaking Switzerland." },
  { name: "Università della Svizzera italiana (USI)", url: "https://www.usi.ch/en", city: "Lugano", rank: "Trilingual", desc: "Computer science, architecture, economics, and communication. English programmes available." },
  { name: "Graduate Institute (IHEID)", url: "https://www.graduateinstitute.ch/", city: "Geneva", rank: "Postgrad Only", desc: "Elite postgraduate school for international relations, development, and global governance." },
  { name: "ETH Domain Research Institutes", url: "https://ethrat.ch/en/eth-domain/", city: "Nationwide", rank: "Federal Research", desc: "PSI, WSL, EMPA, EAWAG — federal institutes with PhD and postdoc positions in science and engineering." },
];

const fachhochschulen: { name: string; url: string; city: string; focus: string; desc: string }[] = [
  { name: "ZHAW Zurich University of Applied Sciences", url: "https://www.zhaw.ch/en/", city: "Zurich / Winterthur", focus: "Engineering, Business, Health", desc: "Largest German-speaking UAS — strong in life sciences, engineering, linguistics, and business." },
  { name: "HES-SO Western Switzerland", url: "https://www.hes-so.ch/en/", city: "Geneva / Lausanne / Fribourg", focus: "Multidisciplinary", desc: "Largest UAS network in French-speaking Switzerland — engineering, business, health, and arts." },
  { name: "FHNW Northwestern Switzerland", url: "https://www.fhnw.ch/en", city: "Aarau / Basel", focus: "Engineering, Life Sciences", desc: "Applied sciences across engineering, business, life sciences, and teacher training." },
  { name: "OST Eastern Switzerland", url: "https://www.ost.ch/en/", city: "St. Gallen / Rapperswil", focus: "Engineering, Architecture", desc: "Engineering, business, architecture, and social sciences with strong regional industry ties." },
  { name: "Bern University of Applied Sciences (BFH)", url: "https://www.bfh.ch/en/", city: "Bern / Biel", focus: "Engineering, Health", desc: "Engineering, business, health sciences, and social work. BFH HKB is a leading arts school." },
  { name: "Lucerne UAS (HSLU)", url: "https://www.hslu.ch/en/", city: "Lucerne / Zug", focus: "Business, Design, Music", desc: "Business, engineering, design, film, music, and health. HSLU Design & Film is internationally recognised." },
  { name: "SUPSI Southern Switzerland", url: "https://www.supsi.ch/en/", city: "Lugano / Mendrisio", focus: "Engineering, Arts", desc: "Italian-language UAS — engineering, business, teacher education, and arts (CSIA)." },
  { name: "FHGR Graubünden", url: "https://www.fhgr.ch/en/", city: "Chur", focus: "Digital, Tourism", desc: "Applied digital transformation, tourism management, civil engineering, and photonics." },
  { name: "UniDistance Suisse", url: "https://www.unidistance.ch/en/", city: "Brig (online)", focus: "Distance Learning", desc: "Switzerland's only fully online university — law, economics, history, and psychology. Flexible for working students." },
  { name: "SFUVET / EHB", url: "https://www.sfuvet.swiss/en", city: "Bern / Zollikofen", focus: "Vocational Education", desc: "Federal institute for vocational and professional education — teacher training for VET schools." },
];

const artsUniversities: { name: string; url: string; city: string; focus: string; desc: string }[] = [
  { name: "Zurich University of the Arts (ZHdK)", url: "https://www.zhdk.ch/en", city: "Zurich", focus: "Arts, Design, Film, Music", desc: "Switzerland's largest arts university — fine arts, design, film, music, theatre, and dance." },
  { name: "Hochschule der Künste Bern (HKB)", url: "https://www.hkb.bfh.ch/en/", city: "Bern", focus: "Music, Arts, Conservation", desc: "Arts, music, conservation-restoration, and design. Part of BFH." },
  { name: "FHNW Academy of Art and Design (HGK)", url: "https://www.fhnw.ch/en/studies/arts", city: "Basel", focus: "Visual Arts, Design", desc: "Fine arts, design, and architecture within the FHNW network." },
  { name: "HSLU Design & Film", url: "https://www.hslu.ch/en/lucerne-design-film-art/", city: "Lucerne", focus: "Design, Film", desc: "Internationally recognised design and film school at Lucerne UAS." },
  { name: "Conservatorio della Svizzera italiana", url: "https://www.conservatorio.ch/", city: "Lugano", focus: "Classical Music", desc: "Italian-language conservatory — music performance, composition, and pedagogy." },
];

// Student associations verified via ETH Zurich blogs, EPFL campus associations directory (Aug 2026)
const associations = [
  { name: "InSAZ – Indian Students Association Zurich", url: "https://blogs.ethz.ch/insaz/", city: "Zurich", desc: "Voluntary student association at ETH Zurich and UZH. Mentorship programme, airport pickup for newcomers, Diwali, Holi, cultural events and networking." },
  { name: "YUVA – Indians Association EPFL/UNIL", url: "https://www.epfl.ch/campus/associations/yuva/", city: "Lausanne", desc: "Registered EPFL association for Indian and Indian-origin students at EPFL and UNIL. YUVA = Youth United Via Action. Cultural events including Diwali at the Rolex Learning Center." },
  { name: "Indian Students Geneva", url: null, city: "Geneva", desc: "Community for Indian students at UNIGE and the Graduate Institute. No verified public website found." },
];

const scholarships = [
  { name: "Swiss Government Excellence Scholarships", url: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html", desc: "Federal scholarships for postgraduate study and research — open to Indian citizens." },
  { name: "ETH Zurich Excellence Scholarship", url: "https://ethz.ch/en/studies/financial/scholarships/excellencescholarship.html", desc: "Full scholarship for outstanding Master's students at ETH Zurich." },
  { name: "EPFL Excellence Fellowships", url: "https://www.epfl.ch/education/master/master-excellence-fellowships", desc: "Merit-based fellowships for top Master's applicants at EPFL." },
  { name: "SNSF Doc.CH", url: "https://www.snf.ch/en/GBkQmrFv8tVWGvk8/funding/projects/doc-ch", desc: "Swiss National Science Foundation doctoral scholarships in humanities and social sciences." },
];

export default function StudentsPage() {
  return (
    <div>
      <PageHeader
        title="Indian Students in Switzerland"
        subtitle="Universities, scholarships, student associations and visa information for Indian students in Switzerland."
        badge="🎓 Student Guide"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Students" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Cantonal & Federal Universities</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Switzerland has 12 cantonal universities plus the two federal polytechnics (ETH/EPFL) — all publicly funded and research-intensive.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cantonal.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm leading-tight group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">{u.city}</span>
                </div>
                <p className="text-xs text-blue-400 mb-1">{u.rank}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{u.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Universities of Applied Sciences (Fachhochschulen)</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Practice-oriented degrees with strong industry ties. Many offer English-taught Master's programmes and sponsored placements.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fachhochschulen.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm leading-tight group-hover:text-indigo-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">{u.city}</span>
                </div>
                <p className="text-xs text-indigo-400 mb-1">{u.focus}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{u.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Arts, Music & Design Schools</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Switzerland's conservatories and art academies are internationally recognised — strong in music performance, fine arts, and design.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {artsUniversities.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm leading-tight group-hover:text-pink-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/20">{u.city}</span>
                </div>
                <p className="text-xs text-pink-400 mb-1">{u.focus}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{u.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Indian Student Associations</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Connect with fellow Indian students at Swiss universities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {associations.map((a) =>
              a.url ? (
                <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-sm leading-tight group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{a.name}</h3>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">{a.city}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{a.desc}</p>
                </a>
              ) : (
                <div key={a.name} className="glass rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-sm leading-tight" style={{ color: "var(--text)" }}>{a.name}</h3>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">{a.city}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{a.desc}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Scholarships & Funding</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Scholarships open to Indian students studying in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scholarships.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <h3 className="font-semibold text-sm leading-tight group-hover:text-blue-400 transition-colors mb-2" style={{ color: "var(--text)" }}>{s.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Student Visa & Permit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div style={{ color: "var(--text-2)" }}>
                <h3 className="font-semibold text-blue-400 mb-3">Before Arrival</h3>
                <ul className="space-y-2">
                  <li>• Apply for a student visa (Type D) at the Swiss Embassy in India</li>
                  <li>• You need an admission letter from a Swiss university</li>
                  <li>• Proof of financial means: CHF 21,000/year minimum</li>
                  <li>• Health insurance arranged before or immediately on arrival</li>
                </ul>
              </div>
              <div style={{ color: "var(--text-2)" }}>
                <h3 className="font-semibold text-blue-400 mb-3">After Arrival</h3>
                <ul className="space-y-2">
                  <li>• Register at local commune (Gemeinde/Commune) within 14 days</li>
                  <li>• Apply for Residence Permit B (student) at cantonal migration office</li>
                  <li>• Work permitted up to 15 hours/week during semester</li>
                  <li>• Full permit details at SEM:</li>
                </ul>
                <a href="https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht-eu_efta/ausweis-b--auslaender.html" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-400 hover:text-blue-300 text-xs">sem.admin.ch — Permit B details</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
