import PageHeader from "@/components/ui/PageHeader";

const jobPortals = [
  { name: "jobs.ch", url: "https://www.jobs.ch/en/", description: "Switzerland's largest job portal — covers all sectors and cantons." },
  { name: "LinkedIn Jobs", url: "https://linkedin.com/jobs", description: "Global network with strong Swiss presence — essential for professional roles." },
  { name: "Indeed CH", url: "https://ch.indeed.com", description: "Aggregated listings from multiple Swiss job boards and company sites." },
  { name: "EURES", url: "https://eures.ec.europa.eu", description: "European job mobility portal — useful for EU-regulated roles and cross-border positions." },
  { name: "arbeit.swiss (RAV)", url: "https://www.arbeit.swiss", description: "Official Swiss public employment service — includes subsidised job placements." },
  { name: "Glassdoor CH", url: "https://www.glassdoor.com", description: "Job listings with company reviews and salary insights." },
];

const sectors = [
  { name: "Finance", location: "Zurich", employers: "UBS, Credit Suisse (now UBS), Zurich Insurance, Swiss Re", roles: "Banking, asset management, insurance, compliance" },
  { name: "Pharma & Biotech", location: "Basel", employers: "Novartis, Roche, Lonza, Syngenta", roles: "R&D, regulatory affairs, clinical trials, manufacturing" },
  { name: "Technology", location: "Zurich", employers: "Google, Microsoft, IBM, SAP, Siemens", roles: "Software engineering, data science, cloud, AI/ML" },
  { name: "International Organisations", location: "Geneva", employers: "UN, WHO, WTO, ICRC, ILO", roles: "Policy, communications, development, humanitarian" },
  { name: "Engineering & Industrial", location: "Zurich / Basel", employers: "ABB, Siemens, Georg Fischer, Sulzer", roles: "Mechanical, electrical, process engineering" },
];

const cvTips = [
  "Keep your CV to 2 pages maximum — Swiss employers expect concise, factual CVs.",
  "A photo is optional but common on Swiss CVs — use a professional headshot if included.",
  "Include your nationality and work permit status (or right to work in Switzerland).",
  "List references as 'Available on request' rather than including referees directly.",
  "Write a tailored cover letter in the language of the job posting (German, French, or English).",
];

export default function JobsPage() {
  return (
    <div>
      <PageHeader
        title="Jobs & Careers in Switzerland"
        subtitle="Find your next role in one of Europe's most competitive job markets — tech, pharma, finance, and international organisations."
        badge="Jobs & Recruitment"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Jobs & Careers" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Job Portals */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Job Portals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPortals.map((portal) => (
              <a
                key={portal.name}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-hover rounded-2xl p-6 block group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">{portal.name}</h3>
                <p className="text-sm text-white/60 mt-2">{portal.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Top Sectors */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Top Sectors for Indian Professionals</h2>
          <div className="space-y-4">
            {sectors.map((sector) => (
              <div key={sector.name} className="glass card-hover rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{sector.name}</h3>
                    <p className="text-sm text-teal-400 mt-0.5">{sector.location}</p>
                    <p className="text-sm text-white/70 mt-2"><span className="text-white/50">Key employers:</span> {sector.employers}</p>
                    <p className="text-sm text-white/70"><span className="text-white/50">Typical roles:</span> {sector.roles}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Permit */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Work Permit Information</h2>
          <div className="glass rounded-2xl p-8">
            <p className="text-white/70 text-sm mb-4">
              Non-EU/EFTA nationals (including Indian passport holders) require an employer-sponsored work permit to work in Switzerland. Switzerland operates a quota system — the number of permits available each year is limited.
            </p>
            <ul className="space-y-2 text-white/70 text-sm mb-4">
              <li>• <strong className="text-white">L permit:</strong> Short-term, tied to a specific employer contract (up to 1 year).</li>
              <li>• <strong className="text-white">B permit:</strong> Annual residence permit, renewable, tied to your employer.</li>
              <li>• <strong className="text-white">C permit:</strong> Settlement permit after 10 years (5 years for some nationalities).</li>
            </ul>
            <a
              href="https://www.sem.admin.ch/sem/en/home/themen/arbeit.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-teal-400 hover:text-teal-300 underline text-sm"
            >
              Official work permit information — sem.admin.ch
            </a>
          </div>
        </section>

        {/* CV Tips */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">CV Tips for Switzerland</h2>
          <div className="glass rounded-2xl p-8">
            <ul className="space-y-3">
              {cvTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-white/70 text-sm">
                  <span className="text-teal-400 mt-0.5">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
