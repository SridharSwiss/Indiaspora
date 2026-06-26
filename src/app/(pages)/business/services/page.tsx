import PageHeader from "@/components/ui/PageHeader";

const serviceCategories = [
  {
    title: "Legal Services",
    description: "Immigration lawyers, Swiss commercial law firms serving Indian clients, contract review, and company formation specialists.",
    examples: ["Work permit and visa lawyers", "Business formation and commercial law", "Family law and divorce matters", "Notarial services in major cities"],
  },
  {
    title: "Accounting & Tax",
    description: "Specialists in the India–Switzerland DTAA (Double Taxation Avoidance Agreement), NRI tax filing, and Swiss corporate accounting.",
    examples: ["DTAA and India–Switzerland tax planning", "Swiss VAT registration and filing", "Indian CA networks connecting Switzerland and India", "Payroll services for small businesses"],
  },
  {
    title: "Financial Advisors",
    description: "NRI-focused wealth management, cross-border financial planning, and retirement planning for Indians in Switzerland.",
    examples: ["NRI investment and portfolio management", "Swiss pension (3rd pillar) advisory", "Repatriation of funds to India", "Insurance and life cover planning"],
  },
  {
    title: "Relocation Services",
    description: "Consultants who assist Indians moving to Switzerland with housing, schooling, banking, and settling in.",
    examples: ["Apartment search and rental assistance", "School admission guidance", "Bank account opening support", "Canton registration and Anmeldung help"],
  },
  {
    title: "HR & Recruitment",
    description: "Specialist recruiters who understand the Indian diaspora talent market and Swiss hiring practices.",
    examples: ["Executive search for Indian professionals", "Contract and interim placements", "Salary benchmarking and negotiation coaching", "Swiss job market orientation sessions"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Indian Professional Services in Switzerland"
        subtitle="Find Indian lawyers, accountants, doctors, and consultants who understand the Swiss and Indian systems."
        badge="Professional Services"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Professional Services" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="glass card-hover rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-white/70 mb-4">{cat.description}</p>
                <ul className="space-y-1">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-white/60 text-xs">
                      <span className="text-teal-400 mt-0.5">•</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How to Find */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">How to Find Professional Services</h2>
          <div className="glass rounded-2xl p-8">
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-0.5">→</span>
                <span>Browse the <strong className="text-white">SICC member directory</strong> at <a href="https://sicc.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">sicc.ch</a> — many member firms offer services relevant to Indians in Switzerland.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-0.5">→</span>
                <span>Ask for recommendations in community Facebook groups like <strong className="text-white">"Indians in Zurich"</strong> or <strong className="text-white">"Indian Community Switzerland"</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-0.5">→</span>
                <span>Search LinkedIn for <strong className="text-white">"Indian lawyer Zurich"</strong>, <strong className="text-white">"Indian accountant Geneva"</strong>, or your specific need and city.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-0.5">→</span>
                <span>Check <strong className="text-white">Google Reviews</strong> and ask for client references before engaging any professional.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Credentials Note */}
        <div className="glass rounded-2xl p-6 border border-teal-500/20">
          <p className="text-white/80 text-sm">
            <span className="font-semibold text-teal-400">Important:</span> Always verify professional credentials before engaging a service provider. Lawyers should be registered with the cantonal bar association (<em>Anwaltsregister</em>). Accountants and auditors must be licensed by FAOA (Federal Audit Oversight Authority) for audit work. Ask for their registration number and verify independently.
          </p>
        </div>
      </div>
    </div>
  );
}
