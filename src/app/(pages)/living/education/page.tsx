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

const cantonal: { name: string; url: string; city: string; note: string }[] = [
  { name: "ETH Zurich", url: "https://ethz.ch/en.html", city: "Zurich", note: "Top-10 globally in engineering and science. Many Master's in English. Strong Indian student community (InSAZ)." },
  { name: "EPFL", url: "https://www.epfl.ch/en/", city: "Lausanne", note: "Federal technical university — top-ranked in engineering, computer science, and life sciences. English-friendly; active Indian student association (YUVA)." },
  { name: "University of Zurich (UZH)", url: "https://www.uzh.ch/en.html", city: "Zurich", note: "Switzerland's largest university. Medicine, law, social sciences, and economics. Some English Master's programmes." },
  { name: "University of Bern", url: "https://www.unibe.ch/index_eng.html", city: "Bern", note: "Federal capital university — strong in medicine, veterinary, law, and natural sciences." },
  { name: "University of Basel", url: "https://www.unibas.ch/en.html", city: "Basel", note: "Oldest Swiss university (1460). Excellent in life sciences and pharma — steps from Novartis and Roche HQs." },
  { name: "University of Geneva (UNIGE)", url: "https://www.unige.ch/en/", city: "Geneva", note: "Strong in international relations, law, sciences, and global health. Proximity to UN agencies." },
  { name: "University of Lausanne (UNIL)", url: "https://www.unil.ch/central/en/home.html", city: "Lausanne", note: "Strong in business (HEC Lausanne), biology, geosciences, and social sciences. Campus shared with EPFL." },
  { name: "University of Fribourg", url: "https://www.unifr.ch/home/en.html", city: "Fribourg", note: "Bilingual (French/German). Strong in law, humanities, and theology." },
  { name: "University of Lucerne", url: "https://www.unilu.ch/en/", city: "Lucerne", note: "Smaller university focused on law, economics, humanities, health sciences, and theology." },
  { name: "University of Neuchâtel", url: "https://www.unine.ch/unine/en/home.html", city: "Neuchâtel", note: "Strong in law, natural sciences, economics, and humanities. French-language canton." },
  { name: "University of St. Gallen (HSG)", url: "https://www.unisg.ch/en/", city: "St. Gallen", note: "Switzerland's top business school — ranked among Europe's best for management and law." },
  { name: "Università della Svizzera italiana (USI)", url: "https://www.usi.ch/en", city: "Lugano / Bellinzona", note: "Italian-speaking university — architecture, communication, computer science, and economics. English-taught programmes available." },
  { name: "Graduate Institute (IHEID)", url: "https://www.graduateinstitute.ch/", city: "Geneva", note: "Elite postgraduate-only school — international relations, development, and global governance. Close to UN and WTO." },
  { name: "PSI / WSL / EMPA / EAWAG (ETH Domain)", url: "https://ethrat.ch/en/eth-domain/", city: "Nationwide", note: "Federal research institutes under the ETH Domain. PSI (particle physics), WSL (ecosystems), EMPA (materials), EAWAG (water). Numerous PhD and postdoc positions." },
];

const fachhochschulen: { name: string; url: string; city: string; note: string }[] = [
  { name: "HES-SO (University of Applied Sciences Western Switzerland)", url: "https://www.hes-so.ch/en/", city: "French-speaking Switzerland", note: "Largest network of applied sciences schools in Switzerland — engineering, business, health, social work, and arts. Campuses across Geneva, Lausanne, Fribourg, Neuchâtel, Valais, and Bern region." },
  { name: "Bern University of Applied Sciences (BFH)", url: "https://www.bfh.ch/en/", city: "Bern / Biel / Burgdorf", note: "Strong in engineering, business, health, and social work. BFH Arts (HKB) is a leading arts school." },
  { name: "FHNW (Northwestern Switzerland)", url: "https://www.fhnw.ch/en", city: "Aarau / Basel / Brugg-Windisch", note: "Applied sciences across engineering, business, life sciences, social work, and teacher training." },
  { name: "OST (Eastern Switzerland)", url: "https://www.ost.ch/en/", city: "St. Gallen / Rapperswil / Chur", note: "Engineering, architecture, business, and social sciences. Strong ties to regional SMEs." },
  { name: "Graubünden University of Applied Sciences (FHGR)", url: "https://www.fhgr.ch/en/", city: "Chur", note: "Focus on applied digital transformation, tourism, civil engineering, and photonics." },
  { name: "Lucerne University of Applied Sciences (HSLU)", url: "https://www.hslu.ch/en/", city: "Lucerne / Sursee / Zug", note: "Business, engineering, design, music, social work, and health. HSLU Design & Film is highly regarded." },
  { name: "SUPSI (Southern Switzerland)", url: "https://www.supsi.ch/en/", city: "Ticino", note: "Italian-language applied sciences school — engineering, business, teacher education, and arts (CSIA/CSSI)." },
  { name: "ZHAW (Zurich University of Applied Sciences)", url: "https://www.zhaw.ch/en/", city: "Zurich / Winterthur / Wädenswil", note: "Largest UAS in the German-speaking region — engineering, business, life sciences, health, social work, and linguistics." },
  { name: "UniDistance Suisse", url: "https://www.unidistance.ch/en/", city: "Brig (online)", note: "Switzerland's only distance-learning university — law, economics, history, and psychology. Fully online; affordable fees." },
  { name: "Swiss Federal University of Vocational Education and Training (SFUVET)", url: "https://www.sfuvet.swiss/en", city: "Bern / Zollikofen", note: "Federal institute for vocational and professional education, teacher training for VET schools." },
  { name: "Swiss Federal Institute for Sports Muttenz (SFISM / EHSM)", url: "https://www.baspo.admin.ch/en/education/sfism.html", city: "Magglingen", note: "Federal institute for sports science and elite sports coaching." },
];

const arts: { name: string; url: string; city: string; note: string }[] = [
  { name: "Zurich University of the Arts (ZHdK)", url: "https://www.zhdk.ch/en", city: "Zurich", note: "Switzerland's largest arts university — fine arts, design, film, music, theatre, and dance. Part of ZFH network." },
  { name: "Hochschule der Künste Bern (HKB / BFH)", url: "https://www.hkb.bfh.ch/en/", city: "Bern", note: "Arts, music, conservation-restoration, and design. Part of BFH. Strong conservatory tradition." },
  { name: "Basel Academy of Art and Design (FHNW HGK)", url: "https://www.fhnw.ch/en/studies/arts", city: "Basel", note: "Visual arts, design, and architecture within the FHNW network." },
  { name: "Rapperswil School of Art and Design (OST)", url: "https://www.ost.ch/en/studies/architecture-and-design", city: "Rapperswil", note: "Architecture, civil engineering, and design within OST Eastern Switzerland." },
  { name: "HSLU Design & Film", url: "https://www.hslu.ch/en/lucerne-design-film-art/", city: "Lucerne", note: "Highly regarded design, film, and art school within Lucerne UAS." },
  { name: "SUPSI Arts (CSIA / CSSI)", url: "https://www.supsi.ch/en/", city: "Lugano / Mendrisio", note: "Academy of Architecture (Accademia di architettura, USI partner) and CSIA design school in Ticino." },
  { name: "Conservatorio della Svizzera italiana", url: "https://www.conservatorio.ch/", city: "Lugano", note: "Italian-language conservatory — classical music performance, composition, and pedagogy." },
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Cantonal & Federal Universities</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Switzerland has 12 cantonal universities plus the ETH Domain — all publicly funded and research-intensive.</p>
          <div className="space-y-3">
            {cantonal.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 flex items-start justify-between gap-4 group">
                <div>
                  <h3 className="text-base font-semibold group-hover:text-purple-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>{u.note}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 whitespace-nowrap shrink-0">{u.city}</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Universities of Applied Sciences (Fachhochschulen)</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Practice-oriented degrees — strong employer ties and pathways to industry. Many offer English-taught Master's programmes.</p>
          <div className="space-y-3">
            {fachhochschulen.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 flex items-start justify-between gap-4 group">
                <div>
                  <h3 className="text-base font-semibold group-hover:text-indigo-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>{u.note}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 whitespace-nowrap shrink-0">{u.city}</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Arts, Music & Design Universities</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Switzerland's conservatories and arts academies are internationally recognised, especially for music performance and design.</p>
          <div className="space-y-3">
            {arts.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 flex items-start justify-between gap-4 group">
                <div>
                  <h3 className="text-base font-semibold group-hover:text-pink-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>{u.note}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 whitespace-nowrap shrink-0">{u.city}</span>
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
