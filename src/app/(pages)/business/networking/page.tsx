import PageHeader from "@/components/ui/PageHeader";

const associations = [
  { name: "Swiss Indian Chamber of Commerce (SICC)", url: "https://sicc.ch", tag: "Chamber", desc: "Premier bilateral chamber connecting Indian and Swiss businesses. Events, trade missions, member directory, advocacy." },
  { name: "India Business Switzerland (IBS)", url: "https://www.india-switzerland.com", tag: "Advocacy", desc: "Promotes India-Switzerland business ties, events for entrepreneurs and executives" },
  { name: "TiE Switzerland", url: "https://switzerland.tie.org", tag: "Startups", desc: "The Indus Entrepreneurs — mentorship, angel funding, startup pitch events, global TiE network" },
  { name: "Swiss Indo Business Forum", url: "", tag: "Networking", desc: "Regular networking dinners and business exchange events across Zurich, Geneva, Basel" },
  { name: "NASSCOM Switzerland Chapter", url: "https://nasscom.in", tag: "Tech", desc: "IT industry association with Switzerland chapter — tech professionals, digital economy events" },
  { name: "ETH Indian Alumni Network", url: "https://alumni.ethz.ch", tag: "Alumni", desc: "ETH Zurich alumni from India — a powerful professional network in tech, finance, pharma" },
];

const linkedInGroups = [
  "Indian Professionals Zurich (10,000+ members)",
  "Indians in Switzerland (General community)",
  "Swiss Indian Network (Business focused)",
  "Indian IT Professionals Switzerland",
  "NRI Professionals Switzerland",
];

const swissBusinessCulture = [
  { tip: "Punctuality", detail: "Being on time is non-negotiable in Swiss business culture. Arrive 2–3 minutes early." },
  { tip: "Formal greetings", detail: "Handshake, eye contact, use titles (Herr/Frau + surname) until invited to use first names." },
  { tip: "Business cards", detail: "Bring business cards. Present and receive with both hands as a sign of respect." },
  { tip: "Direct communication", detail: "Swiss are direct and expect the same. Get to the point, avoid vague commitments." },
  { tip: "Follow up by email", detail: "Always follow up meetings with a written summary. Swiss value documented agreements." },
  { tip: "Language", detail: "Zurich: German, Geneva: French, Basel: German/French. English is widely spoken in business." },
];

export default function NetworkingPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Business Networking in Switzerland"
        subtitle="Connect with Indian professionals, chambers of commerce, and Swiss-Indian business associations to grow your network and career."
        badge="Chambers & Networks"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[{ label: "Business & Career", href: "/business" }, { label: "Networking" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Associations & Chambers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {associations.map((a) => (
              <div key={a.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white text-sm flex-1 mr-2">{a.name}</h3>
                  <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full shrink-0">{a.tag}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{a.desc}</p>
                {a.url && <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300">Visit &rarr;</a>}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">LinkedIn Groups</h2>
          <div className="glass rounded-2xl p-6">
            <p className="text-slate-400 text-sm mb-4">Search LinkedIn for these groups to connect with Indians in Switzerland:</p>
            <ul className="space-y-2">
              {linkedInGroups.map((g) => (
                <li key={g} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Swiss Business Culture Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {swissBusinessCulture.map((t) => (
              <div key={t.tip} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-teal-400 mb-2">{t.tip}</h3>
                <p className="text-sm text-slate-400">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
