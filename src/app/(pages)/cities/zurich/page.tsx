import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Zurich — Community Guide",
  description: "Zurich's 18,000+ Indian community — associations, neighbourhoods, restaurants, grocery stores, and official resources.",
  openGraph: {
    title: "Indians in Zurich — Community Guide | IndiaSwiss",
    description: "Zurich's 18,000+ Indian community — associations, neighbourhoods, restaurants, grocery stores, and official resources.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~18,000", icon: "👥" },
  { label: "Language", value: "Swiss German", icon: "🗣️" },
  { label: "Canton", value: "Zürich", icon: "🏛️" },
  { label: "Key Employers", value: "UBS, Credit Suisse, Google, IBM", icon: "🏢" },
];

const associations = [
  { name: "IAGZ", full: "Indian Association of the Canton of Zurich", desc: "The largest Indian association in Switzerland. Organises cultural events, Diwali, Holi, and community meetups." },
  { name: "Gujarati Samaj Zurich", full: "", desc: "Cultural events and networking for the Gujarati community." },
  { name: "Tamil Cultural Association", full: "", desc: "Events and cultural programmes for the Tamil-speaking community." },
  { name: "ISKCON Zurich", full: "", desc: "Hare Krishna temple; weekly programmes and prasad open to all." },
];

const neighbourhoods = [
  { name: "Schlieren & Dietikon", note: "Western suburbs with affordable rents and good Indian grocery access." },
  { name: "Oerlikon", note: "Popular with tech professionals; well-connected by tram and S-Bahn." },
  { name: "Winterthur", note: "30 min by S-Bahn; growing Indian community; more affordable than Zurich city." },
  { name: "City districts 3, 4, 5", note: "Central, vibrant; higher rents but walkable and well-connected." },
];

export default function ZurichPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Zurich"
        subtitle="Zurich is home to Switzerland's largest Indian community — a thriving diaspora of IT professionals, bankers, students, and families."
        badge="City Guide"
        gradient="from-blue-600 to-indigo-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Zurich" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">{h.icon}</div>
              <p className="text-base font-bold text-white">{h.value}</p>
              <p className="text-xs text-white/50">{h.label}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Indian Associations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => (
              <div key={a.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-white mb-0.5">{a.name}</h3>
                {a.full && <p className="text-xs text-white/40 mb-2">{a.full}</p>}
                <p className="text-sm text-white/60">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Neighbourhoods Popular with Indians</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighbourhoods.map((n) => (
              <div key={n.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-blue-400 mb-1">{n.name}</h3>
                <p className="text-sm text-white/60">{n.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
