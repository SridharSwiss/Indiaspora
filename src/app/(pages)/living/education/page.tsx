import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const schoolSystem = [
  { level: "Kindergarten", age: "4–6 years", detail: "2 years, free and mandatory. Excellent preparation for primary school. Language immersion begins here.", url: "https://www.ch.ch/en/education/" },
  { level: "Primary School (Primarschule)", age: "6–12 years", detail: "6 years, free. Core subjects, language acquisition, excellent teaching standards. Assigned by home address.", url: "https://www.ch.ch/en/education/" },
  { level: "Lower Secondary (Sekundarstufe I)", age: "12–15 years", detail: "3 years. Students tracked by academic ability. Top track (Gymnasium/Progymnasiale) leads to university.", url: "https://www.edk.ch/en" },
  { level: "Gymnasium / Matura", age: "15–18/19 years", detail: "Swiss Matura qualification. Direct entry to Swiss universities including ETH and EPFL. Very rigorous.", url: "https://www.edk.ch/en" },
  { level: "Vocational Training (Berufslehre)", age: "15–18 years", detail: "Dual apprenticeship system. Highly respected in Switzerland. Combines work experience with school.", url: "https://www.sbfi.admin.ch/en" },
  { level: "University / ETH", age: "18+ years", detail: "ETH Zurich and EPFL are globally top-10 in engineering. Public universities charge ~CHF 720/semester tuition.", url: "https://www.ethz.ch" },
];

const internationalSchools = [
  { name: "Zurich International School (ZIS)", city: "Zurich/Wädenswil", url: "https://www.zis.ch", desc: "IB Diploma. English medium. Popular with Indian expat families. Fees: CHF 28,000–35,000/year." },
  { name: "Institut Montana Zugerberg", city: "Zug", url: "https://www.montana-zug.ch", desc: "Swiss & IB curriculum. Beautiful campus. Boarding option available." },
  { name: "International School of Geneva (ISGE/Ecolint)", city: "Geneva", url: "https://www.ecolint.ch", desc: "Oldest international school in the world. IB curriculum. Strong Indian expat community." },
  { name: "International School Basel (ISB)", city: "Basel", url: "https://www.isbasel.ch", desc: "IB curriculum. Popular with pharma industry families (Roche, Novartis)." },
  { name: "GEMS World Academy Zurich", city: "Zurich", url: "https://www.gemsworldacademyzurich.ch", desc: "IB World School. English medium. Strong in STEM. Central Zurich location." },
  { name: "The British School of Lausanne", city: "Lausanne", url: "https://www.bsl.ch", desc: "British curriculum + IB. Popular with EPFL and IOC families." },
];

const indianSchools = [
  { name: "Indian School of Zurich (Weekend)", org: "IAGZ", detail: "Hindi, Gujarati, Tamil and Marathi language classes. Saturday mornings. Contact IAGZ for schedule.", url: "https://www.iagz.ch" },
  { name: "Tamil Language School", org: "Tamil Sangam Switzerland", detail: "Tamil language, culture and heritage classes for children on weekends.", url: "#" },
  { name: "Gujarat Samaj Language School", org: "Gujarati Samaj Switzerland", detail: "Gujarati language and culture classes for children. Community events.", url: "#" },
];

export default function EducationPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Education & Schools in Switzerland"
        subtitle="World-class public schools, top universities, and international schools — plus Indian heritage language classes for your children."
        badge="🎓 Education Guide"
        gradient="from-purple-500 to-violet-600"
        breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Education & Schools" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Swiss Public School System</h2>
          <p className="text-slate-400 text-sm mb-6">Free, excellent, and compulsory for all residents. Your child will be assigned a school by home address.</p>
          <div className="space-y-3">
            {schoolSystem.map((s, i) => (
              <div key={s.level} className="glass rounded-xl p-4 sm:p-5 flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">{i+1}</span>
                <div className="flex-1">
                  <div className="flex items-start gap-3 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">{s.level}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/20">{s.age}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mt-1">{s.detail}</p>
                </div>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 hover:text-purple-400 transition-colors" />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a href="https://www.ch.ch/en/education/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium hover:bg-purple-500/20 transition-colors">
              Official Swiss Education Portal (ch.ch) <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">International Schools</h2>
          <p className="text-slate-400 text-sm mb-6">IB and English-medium schools popular with Indian expat families</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {internationalSchools.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover group block">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-white text-sm group-hover:text-purple-400 transition-colors leading-snug">{s.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </div>
                <span className="text-xs text-orange-400 block mb-2">{s.city}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Indian Heritage Language Schools</h2>
          <p className="text-slate-400 text-sm mb-6">Keep your child connected to their Indian roots — weekend language and culture classes</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {indianSchools.map((s) => (
              <div key={s.name} className="glass rounded-xl p-5">
                <h3 className="font-semibold text-white text-sm mb-1">{s.name}</h3>
                <span className="text-xs text-orange-400 block mb-2">{s.org}</span>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{s.detail}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors">
                  Contact <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
