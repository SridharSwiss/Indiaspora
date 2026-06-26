import PageHeader from "@/components/ui/PageHeader";

const associations = [
  {
    name: "SICC — Swiss Indian Chamber of Commerce",
    url: "https://sicc.ch",
    description: "The premier bilateral trade and business chamber connecting Swiss and Indian businesses. Organises networking dinners, trade missions, and the annual Swiss India Business Summit.",
  },
  {
    name: "TiE Switzerland",
    url: "https://switzerland.tie.org",
    description: "Chapter of the global TiE network for South Asian entrepreneurs. Hosts startup events, mentorship programmes, and investor connect sessions.",
  },
  {
    name: "India Business Switzerland",
    url: undefined,
    description: "Facilitates connections between Indian businesses and Swiss partners across sectors including finance, pharma, and technology.",
  },
  {
    name: "Swiss Indo Business Forum",
    url: undefined,
    description: "Informal network for professionals and executives from both countries to exchange ideas and explore opportunities.",
  },
  {
    name: "NASSCOM Switzerland Chapter",
    url: undefined,
    description: "Network for Indian IT and tech professionals in Switzerland, organising knowledge-sharing and professional development events.",
  },
];

const linkedInGroups = [
  "Indian Professionals Zurich",
  "Indians in Switzerland",
  "Swiss Indian Network",
];

const regularEvents = [
  { event: "SICC Networking Dinners", frequency: "Monthly", location: "Zurich / Geneva" },
  { event: "TiE Startup Events", frequency: "Quarterly", location: "Zurich" },
  { event: "Swiss India Business Summit", frequency: "Annual", location: "Bern" },
];

const tips = [
  "Punctuality is critical in Switzerland — arrive on time or a few minutes early.",
  "Bring business cards — exchange them at the start of meetings.",
  "Follow up by email within 24 hours after meeting someone.",
  "Swiss business culture is formal; use titles (Dr., Prof.) until invited to use first names.",
  "Small talk is limited — Swiss professionals appreciate direct, substantive conversation.",
];

export default function NetworkingPage() {
  return (
    <div>
      <PageHeader
        title="Business Networking for Indians in Switzerland"
        subtitle="Connect with Indian professionals, chamber of commerce events, and Swiss-Indian business associations."
        badge="Chambers & Networks"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Networking" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Associations */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Business Associations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {associations.map((assoc) => (
              <div key={assoc.name} className="glass card-hover rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{assoc.name}</h3>
                  {assoc.url && (
                    <a
                      href={assoc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs text-teal-400 hover:text-teal-300 underline"
                    >
                      Visit
                    </a>
                  )}
                </div>
                <p className="text-sm text-white/70 mt-2">{assoc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LinkedIn Groups */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">LinkedIn Groups</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-2">
              {linkedInGroups.map((group) => (
                <li key={group} className="flex items-center gap-2 text-white/70">
                  <span className="text-teal-400">→</span>
                  <span>{group}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Regular Events */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Regular Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {regularEvents.map((ev) => (
              <div key={ev.event} className="glass card-hover rounded-2xl p-6 text-center">
                <h3 className="text-base font-semibold text-white mb-1">{ev.event}</h3>
                <p className="text-sm text-teal-400 font-medium">{ev.frequency}</p>
                <p className="text-sm text-white/60 mt-1">{ev.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Tips for Networking in Switzerland</h2>
          <div className="glass rounded-2xl p-8">
            <ul className="space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-white/70 text-sm">
                  <span className="text-teal-400 mt-0.5">•</span>
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
