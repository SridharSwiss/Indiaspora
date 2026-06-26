import PageHeader from "@/components/ui/PageHeader";

const serviceCategories = [
  {
    name: "Legal Services",
    icon: "&#9878;",
    services: [
      "Immigration lawyers (B/C permit appeals, family reunification)",
      "Swiss employment law specialists",
      "Business setup lawyers (GmbH, AG formation)",
      "Tax treaty (DTAA) specialists for India-Switzerland",
      "Real estate and contract lawyers",
    ],
    findVia: "Swiss Bar Association: sav-fsa.ch",
    findUrl: "https://www.sav-fsa.ch/en/lawyers/find-a-lawyer.html",
  },
  {
    name: "Accounting & Tax",
    icon: "&#128200;",
    services: [
      "Swiss tax return preparation (Steuererklarung)",
      "India-Switzerland DTAA (Double Tax Avoidance) advisory",
      "VAT registration and filing",
      "NRI taxation and repatriation of funds",
      "Payroll and social insurance (AHV/IV/EO)",
    ],
    findVia: "EXPERTsuisse: expertsuisse.ch",
    findUrl: "https://www.expertsuisse.ch/en/home",
  },
  {
    name: "Financial Advisors",
    icon: "&#128176;",
    services: [
      "Wealth management for NRIs and HNIs",
      "Pension (2nd pillar BVG) planning",
      "CHF to INR remittance optimization",
      "PFIC compliance for Indian investors in US funds",
      "Swiss life insurance and retirement planning",
    ],
    findVia: "FINMA licensed advisors: finma.ch",
    findUrl: "https://www.finma.ch/en/authorisation/searching-for-authorised-firms-and-persons/",
  },
  {
    name: "Relocation Services",
    icon: "&#128666;",
    services: [
      "Apartment search and Gemeinde registration support",
      "School enrolment assistance",
      "Work permit application support",
      "Bank account opening assistance",
      "Settling-in packages for corporate transferees",
    ],
    findVia: "EuRA (European Relocation Association) members",
    findUrl: "https://www.eura.org",
  },
  {
    name: "HR & Recruitment",
    icon: "&#128101;",
    services: [
      "Indian diaspora specialist recruiters in Switzerland",
      "IT and tech staffing agencies",
      "Executive search firms with India connections",
      "Swiss payroll and HR consulting",
      "Work permit and quota management for employers",
    ],
    findVia: "swissstaffing.ch — licensed recruiters",
    findUrl: "https://www.swissstaffing.ch/en",
  },
  {
    name: "Healthcare Professionals",
    icon: "&#128138;",
    services: [
      "Indian doctors (GPs) familiar with Indian health concerns",
      "Ayurvedic practitioners",
      "Dietitians familiar with South Asian diets",
      "Mental health professionals serving Indian community",
      "Dentists with Indian language support",
    ],
    findVia: "Ask in community Facebook groups for recommendations",
    findUrl: "",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Professional Services in Switzerland"
        subtitle="Find Indian lawyers, accountants, doctors, financial advisors, and consultants who understand both Swiss systems and Indian needs."
        badge="Professional Services"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[{ label: "Business & Career", href: "/business" }, { label: "Professional Services" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {serviceCategories.map((cat) => (
            <div key={cat.name} className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" dangerouslySetInnerHTML={{ __html: cat.icon }} />
                <h2 className="text-lg font-bold text-white">{cat.name}</h2>
              </div>
              <ul className="space-y-2 mb-4">
                {cat.services.map((s) => (
                  <li key={s} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-teal-400 shrink-0 mt-0.5">&#8226;</span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-slate-500 mb-1">How to find:</p>
                {cat.findUrl ? (
                  <a href={cat.findUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300">{cat.findVia} &rarr;</a>
                ) : (
                  <p className="text-xs text-slate-400">{cat.findVia}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-6 border border-teal-500/20">
          <p className="text-sm text-slate-300">
            <span className="text-teal-400 font-semibold">Verification tip:</span> Always check professional credentials before engaging any service provider. Lawyers must be admitted to the Swiss Bar, accountants should be EXPERTsuisse certified, and financial advisors must be FINMA licensed. The SICC member directory at <a href="https://sicc.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">sicc.ch</a> lists vetted Indian professionals.
          </p>
        </div>
      </div>
    </div>
  );
}
