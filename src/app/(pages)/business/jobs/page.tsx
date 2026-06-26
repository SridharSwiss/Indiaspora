import PageHeader from "@/components/ui/PageHeader";

const portals = [
  { name: "jobs.ch", url: "https://www.jobs.ch/en/", desc: "Switzerland's largest job portal. Filter by city, industry, language requirement, and salary." },
  { name: "LinkedIn Jobs Switzerland", url: "https://www.linkedin.com/jobs/", desc: "Best for tech, finance, pharma. Activate Open to Work. Connect with Indian recruiters in Switzerland." },
  { name: "Indeed Switzerland", url: "https://ch.indeed.com", desc: "Wide range from entry-level to senior. Good for first job searches and scanning market salaries." },
  { name: "EURES – European Job Mobility Portal", url: "https://eures.ec.europa.eu", desc: "EU-wide portal including Switzerland. Useful for cross-border job searches." },
  { name: "arbeit.swiss – RAV Job Portal", url: "https://www.arbeit.swiss", desc: "Official Swiss government job portal run by SECO. Also access to RAV employment centres." },
  { name: "Glassdoor Switzerland", url: "https://www.glassdoor.com/Job/switzerland-jobs-SRCH_IL.0,11_IN226.htm", desc: "Job listings with salary insights and company reviews from employees." },
];

const sectors = [
  { name: "Financial Services", hub: "Zurich", employers: ["UBS", "Julius Baer", "Zurich Insurance", "Swiss Re", "Credit Suisse (now UBS)", "Partners Group"] },
  { name: "Pharma & Life Sciences", hub: "Basel", employers: ["Novartis", "Roche", "Lonza", "Alcon", "Syngenta", "Vifor Pharma"] },
  { name: "Technology & IT", hub: "Zurich", employers: ["Google Zurich", "Microsoft", "IBM", "ABB", "Siemens", "Temenos"] },
  { name: "International Organisations", hub: "Geneva", employers: ["UN (UNOG)", "WHO", "WTO", "ILO", "ICRC", "WIPO"] },
  { name: "Engineering & MedTech", hub: "Nationwide", employers: ["ABB", "Georg Fischer", "Sulzer", "Straumann", "Sonova", "Sensirion"] },
  { name: "Trading & Commodities", hub: "Zug / Geneva", employers: ["Glencore", "Vitol", "Trafigura", "Gunvor", "Mercuria"] },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Jobs & Careers in Switzerland"
        subtitle="Find your next role in one of Europe's most competitive job markets — tech, pharma, finance, and international organisations."
        badge="Jobs & Recruitment"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[{ label: "Business & Career", href: "/business" }, { label: "Jobs & Careers" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Job Search Portals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portals.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover group block">
                <h3 className="font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">{p.name}</h3>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Top Sectors for Indian Professionals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((s) => (
              <div key={s.name} className="glass rounded-2xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white">{s.name}</h3>
                  <span className="text-xs text-teal-400">{s.hub}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.employers.map((e) => (
                    <span key={e} className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Work Permit for Indian Nationals</h2>
          <p className="text-slate-400 text-sm mb-4">Switzerland uses a quota system for non-EU/EFTA nationals. Your employer must sponsor your work permit.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              { permit: "L Permit", desc: "Short-term, up to 12 months. Tied to a specific employer." },
              { permit: "B Permit", desc: "1–5 year residence and work permit. Most common for employed Indians." },
              { permit: "C Permit", desc: "Settlement permit after 5–10 years. Unrestricted work rights." },
              { permit: "G Permit", desc: "Cross-border commuter permit. Live in EU, work in Switzerland." },
            ].map((w) => (
              <div key={w.permit} className="bg-white/5 rounded-xl p-4">
                <p className="font-semibold text-teal-400 text-sm mb-1">{w.permit}</p>
                <p className="text-xs text-slate-400">{w.desc}</p>
              </div>
            ))}
          </div>
          <a href="https://www.sem.admin.ch/sem/en/home/themen/arbeit.html" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300">Official SEM work permit information &rarr;</a>
        </section>

        <section className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Swiss CV Tips</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2"><span className="text-teal-400 shrink-0">&#8226;</span> Keep CV to 2 pages maximum</li>
            <li className="flex items-start gap-2"><span className="text-teal-400 shrink-0">&#8226;</span> Photo is optional (common in German-speaking Switzerland)</li>
            <li className="flex items-start gap-2"><span className="text-teal-400 shrink-0">&#8226;</span> Include nationality and work permit status clearly</li>
            <li className="flex items-start gap-2"><span className="text-teal-400 shrink-0">&#8226;</span> Write a tailored cover letter — Swiss employers read them carefully</li>
            <li className="flex items-start gap-2"><span className="text-teal-400 shrink-0">&#8226;</span> Include language proficiency (English + any German/French is a big plus)</li>
            <li className="flex items-start gap-2"><span className="text-teal-400 shrink-0">&#8226;</span> References: write "Available upon request" or list 2 professional references</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
