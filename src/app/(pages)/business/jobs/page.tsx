import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Jobs & Careers in Switzerland for Indians",
  description: "Find jobs in Switzerland — top portals, major sectors, CV tips, salary benchmarks, and work permit guide for Indian nationals.",
  openGraph: {
    title: "Jobs & Careers in Switzerland for Indians | IndiaSwiss",
    description: "Find jobs in Switzerland — top portals, major sectors, CV tips, salary benchmarks, and work permit guide for Indian nationals.",
  },
};

const portals = [
  { name: "jobs.ch", url: "https://www.jobs.ch/en/", desc: "Switzerland’s largest job board. Filter by city, industry, salary, and language requirement.", badge: "Most listings" },
  { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?location=Switzerland", desc: "Best for tech, banking, and pharma roles. Activate “Open to Work” for recruiter visibility.", badge: "Networking" },
  { name: "Indeed Switzerland", url: "https://ch.indeed.com", desc: "Wide range from entry-level to senior management. Upload CV for direct applications.", badge: "" },
  { name: "jobup.ch", url: "https://www.jobup.ch/en/", desc: "Strong in French-speaking Switzerland (Romandy) — Geneva, Lausanne, Neuchâtel.", badge: "French CH" },
  { name: "EURES", url: "https://eures.ec.europa.eu", desc: "EU-wide mobility portal covering Switzerland. Good for cross-border professional moves.", badge: "" },
  { name: "RAV / arbeit.swiss", url: "https://www.arbeit.swiss", desc: "Official Swiss government job and employment service. Register for job-seeking support.", badge: "Official" },
];

const sectors = [
  { name: "Financial Services", hub: "Zurich", salaryRange: "CHF 100K–200K", roles: ["Quantitative Analyst", "Investment Banker", "Risk Manager", "Private Banker", "Compliance Officer"], employers: ["UBS", "Zurich Insurance", "Swiss Re", "Julius Baer", "Pictet"] },
  { name: "Pharma & Life Sciences", hub: "Basel", salaryRange: "CHF 90K–180K", roles: ["Clinical Researcher", "Regulatory Affairs", "Medicinal Chemist", "Data Scientist", "Project Manager"], employers: ["Novartis", "Roche", "Lonza", "Alcon", "Straumann"] },
  { name: "Technology & Engineering", hub: "Zurich", salaryRange: "CHF 110K–200K+", roles: ["Software Engineer", "Machine Learning Engineer", "Product Manager", "Data Engineer", "Cloud Architect"], employers: ["Google", "Microsoft", "IBM", "ABB", "Siemens"] },
  { name: "International Organisations", hub: "Geneva", salaryRange: "Tax-exempt + benefits", roles: ["Programme Officer", "Policy Analyst", "Communications Specialist", "Legal Advisor"], employers: ["UN", "WHO", "WTO", "WEF", "ICRC"] },
  { name: "Trading & Commodities", hub: "Zug / Geneva", salaryRange: "CHF 120K–300K+", roles: ["Commodity Trader", "Quantitative Researcher", "Structured Finance", "Operations"], employers: ["Glencore", "Vitol", "Trafigura", "Gunvor"] },
];

const cvTips = [
  "Swiss CVs are typically 1–2 pages max. Be concise and result-focused.",
  "Include a professional photo — this is standard in Switzerland (unlike UK/US norms).",
  "List your current permit type — employers want to know your right-to-work status upfront.",
  "German/French language level is critical — state it clearly (A1–C2) on your CV.",
  "Include a brief Anschreiben (cover letter) even when not required — it signals engagement.",
  "Reference letters from previous Swiss employers are highly valued — request them proactively.",
];

export default function JobsPage() {
  return (
    <div>
      <PageHeader
        title="Jobs & Careers"
        subtitle="Switzerland is one of the world's highest-paying job markets. Here's everything you need to find and land your ideal role."
        badge="Careers Guide"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Jobs & Recruitment" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Job Portals</h2>
          <p className="text-slate-400 mb-8">Start your search on these platforms</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portals.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">{p.name}</h3>
                  {p.badge && <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full">{p.badge}</span>}
                </div>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Top Sectors & Salary Ranges</h2>
          <p className="text-slate-400 mb-8">Where Indian professionals excel in Switzerland</p>
          <div className="space-y-4">
            {sectors.map((s) => (
              <div key={s.name} className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{s.name}</h3>
                    <p className="text-sm text-teal-400">{s.hub} &middot; {s.salaryRange}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Common Roles</p>
                    <div className="flex flex-wrap gap-2">
                      {s.roles.map((r) => <span key={r} className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">{r}</span>)}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Key Employers</p>
                    <div className="flex flex-wrap gap-2">
                      {s.employers.map((e) => <span key={e} className="text-xs bg-teal-500/10 text-teal-400 px-2 py-1 rounded-full border border-teal-500/20">{e}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Swiss CV Tips</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {cvTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-teal-400 mt-0.5 shrink-0">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-teal-500/20">
          <h3 className="text-base font-semibold text-teal-400 mb-2">Work Permit for Indian Nationals</h3>
          <p className="text-sm text-slate-300">Switzerland applies annual quotas for non-EU/EFTA nationals. Your employer must sponsor your permit and demonstrate they could not fill the role locally. Most Indians work on a B permit (1–5 year renewable). Full guide: <a href="https://www.sem.admin.ch/sem/en/home/themen/arbeit.html" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">sem.admin.ch/arbeit</a></p>
        </div>
      </div>
    </div>
  );
}
