import PageHeader from "@/components/ui/PageHeader";

const hubs = [
  { name: "ETH Zurich Ecosystem", city: "Zurich", description: "One of Europe's top technology universities, with an extensive startup incubator (ETH Pioneer Fellowship) and spin-off culture in deep tech, AI, and robotics." },
  { name: "EPFL Innovation Park", city: "Lausanne", description: "Home to 250+ startups and R&D centres from global companies. Strong in life sciences, digital health, and clean energy." },
  { name: "Crypto Valley", city: "Zug", description: "Global hub for blockchain and Web3 startups. Favourable regulation and a thriving token economy make Zug the crypto capital of Europe." },
  { name: "Basel Biotech", city: "Basel", description: "World-class biotech and pharma ecosystem anchored by Novartis and Roche, with numerous spin-offs and startups in life sciences." },
  { name: "Geneva International Startups", city: "Geneva", description: "Strong in humanitarian tech, international development, fintech, and global health startups, leveraging Geneva's international organisation ecosystem." },
];

const legalForms = [
  { type: "GmbH (Sàrl)", capital: "CHF 20,000 minimum capital", description: "Similar to a UK Ltd or Indian Pvt Ltd. Most popular for small and medium businesses." },
  { type: "AG (SA)", capital: "CHF 100,000 minimum capital", description: "Joint-stock company, suitable for larger ventures or those planning to issue shares publicly." },
];

export default function StartupsPage() {
  return (
    <div>
      <PageHeader
        title="Indian Startup Ecosystem in Switzerland"
        subtitle="Switzerland ranks among the world's top innovation hubs — explore the startup ecosystem, funding sources, and Indian-founded ventures."
        badge="Startups & Innovation"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Startups" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Key Hubs */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Key Startup Hubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hubs.map((hub) => (
              <div key={hub.name} className="glass card-hover rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">{hub.name}</h3>
                  <span className="text-xs text-teal-400 font-medium ml-2 shrink-0">{hub.city}</span>
                </div>
                <p className="text-sm text-white/70 mt-2">{hub.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Funding */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Funding Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-2">Innosuisse</h3>
              <p className="text-sm text-white/70 mb-3">Swiss Innovation Agency offering grants for research-based startups and innovation projects in collaboration with Swiss universities.</p>
              <a href="https://www.innosuisse.ch/inno/en/home.html" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300 underline">innosuisse.ch</a>
            </div>
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-2">Venture Capital</h3>
              <p className="text-sm text-white/70">Switzerland has an active VC ecosystem. Key firms include Lakestar, Creathor, and VI Partners. Many VCs cluster around Zurich and Zug.</p>
            </div>
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-2">Angel Networks via TiE</h3>
              <p className="text-sm text-white/70">TiE Switzerland connects Indian entrepreneurs with diaspora angel investors. TiE mentors have founded or funded many successful Indian-origin startups in Switzerland.</p>
            </div>
          </div>
        </section>

        {/* Indian Entrepreneurs */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Support for Indian Entrepreneurs</h2>
          <div className="glass rounded-2xl p-8">
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">→</span><span><strong className="text-white">TiE Switzerland mentorship:</strong> Access to experienced mentors who have built businesses in both India and Switzerland.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">→</span><span><strong className="text-white">SICC trade connections:</strong> The Swiss Indian Chamber of Commerce helps with market entry, trade introductions, and B2B matchmaking.</span></li>
              <li className="flex items-start gap-2"><span className="text-teal-400 mt-0.5">→</span><span><strong className="text-white">Indian diaspora angel investors:</strong> A growing network of Indian-origin professionals in banking, pharma, and tech who invest in early-stage companies.</span></li>
            </ul>
          </div>
        </section>

        {/* Legal Setup */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Setting Up Your Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {legalForms.map((form) => (
              <div key={form.type} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{form.type}</h3>
                <p className="text-sm text-teal-400 font-medium mt-1">{form.capital}</p>
                <p className="text-sm text-white/70 mt-2">{form.description}</p>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-6 text-sm text-white/70 space-y-2">
            <p>Register at the cantonal commercial register (<em>Handelsregister</em>) in the canton where your company is based.</p>
            <p>Get your UID (company identification number) at <a href="https://www.uid.admin.ch/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">uid.admin.ch</a>.</p>
          </div>
        </section>

        {/* Visa */}
        <div className="glass rounded-2xl p-6 border border-teal-500/20">
          <p className="text-white/80 text-sm">
            <span className="font-semibold text-teal-400">Visa for entrepreneurs:</span> A B permit normally requires employment with a Swiss company. To operate independently, you need a self-employment permit. Apply via your cantonal migration office (<em>Migrationsamt</em>) — approval depends on proof of sufficient income and Swiss social insurance contributions.
          </p>
        </div>
      </div>
    </div>
  );
}
