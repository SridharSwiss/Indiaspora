import PageHeader from "@/components/ui/PageHeader";

const networks = [
  { name: "Swiss Indian Chamber of Commerce (SICC)", url: "https://sicc.ch", desc: "Premier business network connecting Indian and Swiss businesses. Events, trade missions, member directory.", tag: "Chamber" },
  { name: "TiE Zurich – The Indus Entrepreneurs", url: "https://tie.org/chapter/tie-zurich/", desc: "The Indus Entrepreneurs — mentorship, funding connections, startup events. Strong chapter in Zurich.", tag: "Startups" },
  { name: "Swissnex India", url: "https://swissnex.org/india/", desc: "Swiss government innovation hub bridging Switzerland and India — startup programs, research, and talent exchange.", tag: "Innovation" },
  { name: "NASSCOM Switzerland", url: "https://nasscom.in", desc: "IT industry body with Switzerland chapter for tech professionals", tag: "Tech" },
  { name: "SICC Events & Forums", url: "https://sicc.ch/events", desc: "Annual Swiss-India Business Forums connecting Swiss and Indian business leaders across sectors", tag: "Networking" },
  { name: "LinkedIn: Indian Professionals Switzerland", url: "https://linkedin.com", desc: "10,000+ member LinkedIn group for Indians in Switzerland — jobs, networking, advice", tag: "Online" },
];

const jobPortals = [
  { name: "jobs.ch", url: "https://www.jobs.ch/en/", desc: "Switzerland's leading job portal — search by city, sector, language" },
  { name: "LinkedIn Jobs Switzerland", url: "https://linkedin.com/jobs", desc: "Best for tech, finance, pharma — activate Open to Work" },
  { name: "Indeed Switzerland", url: "https://ch.indeed.com", desc: "Wide range from entry-level to senior roles" },
  { name: "EURES – European Job Mobility", url: "https://eures.ec.europa.eu", desc: "EU-wide job portal, includes Switzerland" },
  { name: "RAV – Regional Employment Centres", url: "https://www.arbeit.swiss", desc: "Official Swiss unemployment and job search service" },
  { name: "Glassdoor Switzerland", url: "https://glassdoor.ch", desc: "Salary insights and company reviews" },
];

const sectors = [
  { name: "Financial Services", companies: ["UBS", "Zurich Insurance", "Swiss Re", "Julius Baer", "Pictet"], hub: "Zurich" },
  { name: "Pharma & Life Sciences", companies: ["Novartis", "Roche", "Lonza", "Alcon", "Vifor Pharma"], hub: "Basel" },
  { name: "Technology & IT", companies: ["Google Zurich", "Microsoft", "Infosys", "IBM", "ABB"], hub: "Zurich" },
  { name: "International Organisations", companies: ["UN Geneva", "WHO", "WEF", "Red Cross", "WTO"], hub: "Geneva" },
  { name: "Trading & Commodities", companies: ["Glencore", "Vitol", "Trafigura", "Gunvor", "Mercuria"], hub: "Zug / Geneva" },
  { name: "Engineering & MedTech", companies: ["ABB", "Sulzer", "Georg Fischer", "Straumann", "Sonova"], hub: "Nationwide" },
];

const workPermitTypes = [
  { permit: "B Permit (Residence)", eligibility: "Job offer from Swiss employer, usually 1–5 year contracts. Annual quota for non-EU nationals: ~4,500 B permits (2025–26).", link: "https://www.sem.admin.ch/sem/en/home/themen/arbeit.html" },
  { permit: "L Permit (Short-term)", eligibility: "Short-term contracts up to 12 months. Quota: ~4,000 L permits per year (2025–26).", link: "https://www.sem.admin.ch/sem/en/home/themen/arbeit.html" },
  { permit: "C Permit (Settlement)", eligibility: "After 10 years of legal residence for Indian nationals. Requires language proficiency and integration. Unrestricted work rights.", link: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht_eu_efta/ausweis_c__niederlassungsbewilligung.html" },
  { permit: "G Permit (Cross-border)", eligibility: "Live in EU border country (France, Germany, Italy, Austria) and work in Switzerland", link: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/grenzgaengerbewilligung.html" },
];

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Business & Career in Switzerland"
        subtitle="Advance your career in one of the world's most competitive economies. Connect with Indian professionals, explore top employers, and navigate work permits."
        badge="300+ Opportunities"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[{ label: "Business & Career" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Trade Context Banner */}
        <div className="glass rounded-2xl p-5 mb-16 border border-teal-500/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-teal-400 font-semibold text-xs uppercase tracking-wider mb-1">India-EFTA TEPA</div>
              <p className="text-slate-400 text-xs">The India-EFTA Trade and Economic Partnership Agreement entered into force in <strong className="text-white">October 2025</strong> — opening major new opportunities for Swiss-Indian business.</p>
            </div>
            <div>
              <div className="text-teal-400 font-semibold text-xs uppercase tracking-wider mb-1">Bilateral Trade (2024)</div>
              <p className="text-slate-400 text-xs">India-Switzerland total trade reached <strong className="text-white">CHF 22.4 billion</strong> in 2024, spanning pharma, machinery, watches, chemicals, and IT services.</p>
            </div>
            <div>
              <div className="text-teal-400 font-semibold text-xs uppercase tracking-wider mb-1">Startup Ecosystem</div>
              <p className="text-slate-400 text-xs">Switzerland ranks <strong className="text-white">#8 globally</strong> in startup ecosystems. CHF 1.47bn raised in H1 2025. Infosys expanding at The Circle, Zurich Airport.</p>
            </div>
          </div>
        </div>

        {/* Networks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Professional Networks & Chambers</h2>
          <p className="text-slate-400 mb-8">Connect with established Indian business associations in Switzerland</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {networks.map((n) => (
              <div key={n.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white text-sm leading-tight flex-1 mr-2">{n.name}</h3>
                  <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full shrink-0">{n.tag}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{n.desc}</p>
                <a href={n.url} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300">Visit →</a>
              </div>
            ))}
          </div>
        </section>

        {/* Job Portals */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Job Search Portals</h2>
          <p className="text-slate-400 mb-8">Top platforms for finding jobs in Switzerland</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {jobPortals.map((j) => (
              <a key={j.name} href={j.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover group block">
                <h3 className="font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">{j.name}</h3>
                <p className="text-sm text-slate-400">{j.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Key Sectors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Top Sectors for Indian Professionals</h2>
          <p className="text-slate-400 mb-8">Switzerland's strongest industries and their key employers</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((s) => (
              <div key={s.name} className="glass rounded-2xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white">{s.name}</h3>
                  <span className="text-xs text-slate-400">{s.hub}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.companies.map((c) => (
                    <span key={c} className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Permits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Work Permits for Non-EU Nationals</h2>
          <p className="text-slate-400 mb-6">As an Indian national, you need a work permit to work in Switzerland. Annual quotas apply for non-EU/EFTA nationals.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {workPermitTypes.map((w) => (
              <div key={w.permit} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-teal-400 mb-2">{w.permit}</h3>
                <p className="text-sm text-slate-300 mb-3">{w.eligibility}</p>
                <a href={w.link} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300">Official SEM info →</a>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
            <p className="text-sm text-teal-300">💡 <strong>India-EFTA TEPA (Oct 2025):</strong> The new trade agreement creates favourable conditions for Indian professionals. Your employer sponsors the permit. Check current quota status at <a href="https://www.sem.admin.ch" target="_blank" rel="noopener noreferrer" className="underline">sem.admin.ch</a></p>
          </div>
        </section>

        {/* Startups */}
        <section className="mb-16">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Indian-Founded Startups & Ecosystem</h2>
            <p className="text-slate-400 mb-6">Switzerland ranks #8 globally in startup ecosystems with CHF 1.47bn raised in H1 2025 — Indians are building here</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-teal-400 mb-3">Startup Hubs</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• <a href="https://www.innosuisse.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Innosuisse</a> — Swiss Innovation Agency, funding for R&D</li>
                  <li>• ETH Zurich's <a href="https://entrepreneurclub.ethz.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Entrepreneur Club</a></li>
                  <li>• EPFL Innovation Park — deep-tech startup campus, Lausanne</li>
                  <li>• Zug Crypto Valley — blockchain & Web3 startups</li>
                  <li>• <a href="https://venturelab.swiss" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Venturelab</a> — startup education and acceleration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-teal-400 mb-3">Resources for Indian Entrepreneurs</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• TiE Zurich — angel network, mentorship (<a href="https://tie.org/chapter/tie-zurich/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">tie.org</a>)</li>
                  <li>• SICC — India-Switzerland trade connections</li>
                  <li>• <a href="https://swissnex.org/india/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Swissnex India</a> — Swiss-India innovation bridge</li>
                  <li>• <a href="https://startupindia.gov.in/content/sih/en/international/india-swiss_startup_bridge.html" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">India-Swiss Startup Bridge</a> — bilateral programme</li>
                  <li>• <a href="https://www.uid.admin.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">uid.admin.ch</a> — Swiss company UID register</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
