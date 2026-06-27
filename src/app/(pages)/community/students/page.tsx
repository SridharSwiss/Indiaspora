import PageHeader from "@/components/ui/PageHeader";

const universities = [
  { name: "ETH Zurich", url: "https://www.ethz.ch", city: "Zurich", rank: "#7 QS World", desc: "Switzerland's premier technical university. Strong Indian student community and InSAZ association." },
  { name: "EPFL Lausanne", url: "https://www.epfl.ch", city: "Lausanne", rank: "#16 QS World", desc: "École Polytechnique Fédérale de Lausanne — top engineering and life sciences university." },
  { name: "University of Zurich (UZH)", url: "https://www.uzh.ch/en.html", city: "Zurich", rank: "Top 100 QS", desc: "Switzerland's largest university — law, medicine, social sciences, and humanities." },
  { name: "University of Geneva (UNIGE)", url: "https://www.unige.ch/en", city: "Geneva", rank: "Top 100 QS", desc: "Strong in international relations, law, and sciences. Close to UN organisations." },
  { name: "University of Basel", url: "https://www.unibas.ch/en.html", city: "Basel", rank: "Top 150 QS", desc: "Oldest Swiss university — strong in life sciences, pharma and humanities." },
  { name: "University of Bern", url: "https://www.unibe.ch/index_eng.html", city: "Bern", rank: "Top 150 QS", desc: "Strong in medicine, law, and natural sciences. Located in the federal capital." },
];

const associations = [
  { name: "InSAZ – Indian Students Association Zurich", url: "https://insaz.ch", city: "Zurich", desc: "Student association at ETH & UZH — cultural events, networking, Diwali, cricket tournaments." },
  { name: "Indian Students Association EPFL", url: null, city: "Lausanne", desc: "Indian student community at EPFL — cultural events, mentorship and networking." },
  { name: "Indian Students Geneva", url: null, city: "Geneva", desc: "Community for Indian students at UNIGE and the Graduate Institute." },
];

const scholarships = [
  { name: "Swiss Government Excellence Scholarships", url: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html", desc: "Federal scholarships for postgraduate study and research — open to Indian citizens." },
  { name: "ETH Zurich Excellence Scholarship", url: "https://ethz.ch/en/studies/financial/scholarships/excellencescholarship.html", desc: "Full scholarship for outstanding Master's students at ETH Zurich." },
  { name: "EPFL Excellence Fellowships", url: "https://www.epfl.ch/education/master/master-excellence-fellowships", desc: "Merit-based fellowships for top Master's applicants at EPFL." },
  { name: "SNSF Doc.CH", url: "https://www.snf.ch/en/GBkQmrFv8tVWGvk8/funding/projects/doc-ch", desc: "Swiss National Science Foundation doctoral scholarships in humanities and social sciences." },
];

export default function StudentsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <PageHeader
        title="Indian Students in Switzerland"
        subtitle="Universities, scholarships, student associations and visa information for Indian students in Switzerland."
        badge="🎓 Student Guide"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Students" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-1">Top Universities</h2>
          <p className="text-slate-400 text-sm mb-6">Switzerland's world-ranked universities popular with Indian students</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {universities.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-blue-400 transition-colors">{u.name}</h3>
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">{u.city}</span>
                </div>
                <p className="text-xs text-blue-400 mb-1">{u.rank}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{u.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-1">Indian Student Associations</h2>
          <p className="text-slate-400 text-sm mb-6">Connect with fellow Indian students at Swiss universities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {associations.map((a) =>
              a.url ? (
                <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-blue-400 transition-colors">{a.name}</h3>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">{a.city}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
                </a>
              ) : (
                <div key={a.name} className="glass rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white text-sm leading-tight">{a.name}</h3>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">{a.city}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-1">Scholarships & Funding</h2>
          <p className="text-slate-400 text-sm mb-6">Scholarships open to Indian students studying in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scholarships.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-blue-400 transition-colors mb-2">{s.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Student Visa & Permit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-300">
              <div>
                <h3 className="font-semibold text-blue-400 mb-3">Before Arrival</h3>
                <ul className="space-y-2">
                  <li>• Apply for a student visa (Type D) at the Swiss Embassy in India</li>
                  <li>• You need an admission letter from a Swiss university</li>
                  <li>• Proof of financial means: CHF 21,000/year minimum</li>
                  <li>• Health insurance arranged before or immediately on arrival</li>
                </ul>
              </div>
              <div>
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
