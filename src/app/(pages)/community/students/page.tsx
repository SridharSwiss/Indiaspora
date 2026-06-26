import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink, GraduationCap } from "lucide-react";

const universities = [
  { name: "ETH Zurich", url: "https://www.ethz.ch", city: "Zurich", assoc: "Indian Students Association ETH (InSAZ)", assocUrl: "#", desc: "World top-10 university. Strong in STEM. ~800 Indian students. InSAZ organises Holi, Diwali, cultural nights." },
  { name: "University of Zurich (UZH)", url: "https://www.uzh.ch/en", city: "Zurich", assoc: "Indian Students UZH", assocUrl: "#", desc: "Largest Swiss university. Medicine, law, humanities. Large Indian student community, especially in medicine." },
  { name: "EPFL Lausanne", url: "https://www.epfl.ch", city: "Lausanne", assoc: "EPFL Indian Student Association", assocUrl: "#", desc: "Top engineering and tech university. Strong Indian PhD and Master's community." },
  { name: "University of Geneva (UNIGE)", url: "https://www.unige.ch/en/", city: "Geneva", assoc: "Indian Students Geneva", assocUrl: "#", desc: "International relations, law, medicine. Many Indian students in WHO/UN-related programmes." },
  { name: "University of Basel (UNIBAS)", url: "https://www.unibas.ch/en/", city: "Basel", assoc: "Indian Students Basel", assocUrl: "#", desc: "Pharma, life sciences, medicine. Roche/Novartis research ties attract Indian PhD students." },
  { name: "University of Bern (UNIBE)", url: "https://www.unibe.ch/index_eng.html", city: "Bern", assoc: "Indian Students Bern", assocUrl: "#", desc: "Medical, law, economics. Small but active Indian student community near the Embassy." },
];

const practical = [
  { title: "Student Visa (D Visa)", desc: "Apply at the Swiss Embassy/Consulate in India before arrival. Requires university admission letter, financial proof (CHF 21,000/year), health insurance, and accommodation proof.", url: "https://www.sem.admin.ch/sem/en/home/themen/einreise/visum.html" },
  { title: "Residence Permit for Students", desc: "After arrival, register at your Gemeinde and apply for a student residence permit (B permit with study purpose) at the cantonal Migrationsamt.", url: "https://www.sem.admin.ch/en/" },
  { title: "Part-Time Work Rules", desc: "Students may work up to 15 hours per week during term (max 100% in holidays) after the first 6 months. Your employer must confirm your permit type allows work.", url: "https://www.sem.admin.ch/en/" },
  { title: "Health Insurance", desc: "Mandatory within 3 months of arrival. Compare at priminfo.admin.ch. ETH, EPFL and most universities do NOT include insurance — you must arrange it yourself.", url: "https://priminfo.admin.ch" },
  { title: "Scholarships", desc: "Swiss Government Excellence Scholarships open to Indian students. Apply via MHRD India or the Swiss Embassy. Deadline usually November each year.", url: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html" },
  { title: "Job Search After Studies", desc: "Graduates can apply for a 6-month residence permit to seek employment after graduation (article 21 AIG). Requires a signed job contract to convert to B work permit.", url: "https://www.sem.admin.ch/en/" },
];

export default function StudentsPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Indian Students in Switzerland"
        subtitle="Study at world-class universities — ETH, EPFL, UZH and more. Everything Indian students need to thrive in Switzerland."
        badge="🎓 8,000+ Indian Students"
        gradient="from-blue-500 to-indigo-600"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Students" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Universities with Indian Student Associations</h2>
          <p className="text-slate-400 text-sm mb-6">Swiss universities with the largest Indian student communities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {universities.map((u) => (
              <div key={u.name} className="glass rounded-xl p-5 card-hover">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <a href={u.url} target="_blank" rel="noopener noreferrer" className="font-bold text-white text-base hover:text-orange-400 transition-colors">{u.name}</a>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-orange-400 mb-2">{u.city}</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{u.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{u.assoc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Essential Guide for Indian Students</h2>
          <p className="text-slate-400 text-sm mb-6">Key information with official Swiss government links</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {practical.map((p) => (
              <div key={p.title} className="glass rounded-xl p-5 card-hover">
                <h3 className="font-semibold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors">
                  Official source <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
