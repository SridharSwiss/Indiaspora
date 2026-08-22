import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Bern — Community Guide",
  description: "Bern's Indian community — Embassy of India, Indian Association of Berne, restaurants, and official resources for Switzerland's federal capital.",
  openGraph: {
    title: "Indians in Bern — Community Guide | IndiaSwiss",
    description: "Bern's Indian community — Embassy of India, Indian Association of Berne, restaurants, and official resources for Switzerland's federal capital.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~2,000", icon: "👥" },
  { label: "Language", value: "Swiss German", icon: "🗣️" },
  { label: "Canton", value: "Bern", icon: "🏛️" },
  { label: "Key Feature", value: "Embassy of India", icon: "🇮🇳" },
];

const facts = [
  "Bern is Switzerland's federal capital and hosts the Embassy of India — the primary location for Indian passport renewal, OCI card applications, visa services for Swiss nationals, and emergency assistance for Indian nationals across Switzerland and Liechtenstein.",
  "The Indian community in Bern is smaller but close-knit, comprising embassy and diplomatic staff, academics at the University of Bern, and professionals working in the federal administration and international organisations.",
  "The University of Bern and the Bern University of Applied Sciences (BFH) attract Indian students, particularly in medicine, natural sciences, and engineering.",
  "Bern's old city — with its 6 km of arcaded walkways (Lauben), the Zytglogge clock tower, and the Bear Park — is a UNESCO World Heritage Site. A compact, walkable city with excellent public transport.",
  "Aggarwal Indian grocery has a store in Bern city for everyday Indian provisions — spices, dal, fresh produce, and ready-to-cook products.",
];

const associations = [
  {
    name: "Indian Association of Berne (IAB)",
    url: "https://www.india-bern.ch",
    desc: "The primary Indian community association in Bern, active since the 1970s. Organises cultural festivals, Diwali and Holi celebrations, Independence Day events, and supports Indian newcomers settling in the Bern region. Contact: iabern1972@gmail.com.",
  },
  {
    name: "Bharatiya Association Berne (BAB)",
    url: "https://india-bab.ch",
    desc: "Another active association serving the Indian community in Bern, focusing on cultural programming and community cohesion.",
  },
];

const restaurants = [
  { name: "Yaadein Indian Restaurant", note: "Family-run restaurant offering authentic North and South Indian cuisine with a personal touch. Highly rated by the local Indian community for its home-style cooking." },
  { name: "India4U", note: "Well-regarded Indian restaurant in Bern city centre. Website: india4u.ch." },
  { name: "Indian Kitchen", note: "Renovated restaurant focusing on a clean atmosphere and traditional Indian dishes. Website: indiankitchen.ch." },
  { name: "Taj Restaurant", note: "One of Bern's top-rated Indian restaurants with consistent reviews for quality and authenticity." },
  { name: "Swaad Bern", note: "Popular for its variety and lighter preparation of curries. Particularly recommended for its accommodating approach to dietary requests." },
];

export default function BernPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Bern"
        subtitle="Switzerland's federal capital hosts the Embassy of India and a close-knit Indian community of diplomats, academics, and federal officials."
        badge="City Guide"
        gradient="from-yellow-600 to-orange-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Bern" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">{h.icon}</div>
              <p className="text-base font-bold" style={{ color: "var(--text)" }}>{h.value}</p>
              <p className="text-xs/50" style={{ color: "var(--text)" }}>{h.label}</p>
            </div>
          ))}
        </section>

        <div className="glass rounded-2xl p-6 border border-yellow-500/20">
          <h3 className="text-base font-semibold text-yellow-400 mb-3">Embassy of India — Bern</h3>
          <div className="space-y-1 text-sm/70" style={{ color: "var(--text)" }}>
            <p><span className="text-white/40">Address:</span> Kirchenfeldstrasse 28, CH-3005 Berne</p>
            <p><span className="text-white/40">Phone:</span> +41 31 350 11 30</p>
            <p><span className="text-white/40">Website:</span>{" "}
              <a href="https://www.indembassybern.gov.in" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
                indembassybern.gov.in ↗
              </a>
            </p>
            <p className="mt-3/60" style={{ color: "var(--text)" }}>The Embassy covers Switzerland and Liechtenstein. Services include passport renewal, OCI card applications, emergency travel documents, and visa issuance for Swiss nationals wishing to visit India.</p>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Associations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => (
              <div key={a.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text)" }}>{a.name}</h3>
                <p className="text-sm/60 mb-2" style={{ color: "var(--text)" }}>{a.desc}</p>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-xs text-yellow-400 hover:text-yellow-300">
                  {a.url} ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>What to Know</h2>
          <div className="space-y-4">
            {facts.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <p className="text-sm/70" style={{ color: "var(--text)" }}>{f}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((r) => (
              <div key={r.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text)" }}>{r.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{r.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
