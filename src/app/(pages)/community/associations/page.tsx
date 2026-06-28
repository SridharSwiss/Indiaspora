import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Associations & Clubs in Switzerland",
  description: "150+ Indian associations — umbrella bodies, regional language groups, professional networks, and cultural organisations.",
  openGraph: {
    title: "Indian Associations & Clubs in Switzerland | IndiaSwiss",
    description: "150+ Indian associations — umbrella bodies, regional language groups, professional networks, and cultural organisations.",
  },
};

type Org = { name: string; url: string | null; city: string; desc: string };

const umbrella: Org[] = [
  { name: "IAGZ – Indian Association of Greater Zurich", url: "https://iagz.ch", city: "Zurich", desc: "Premier Indian community organisation in Zurich. Hindi school, Diwali Mela, networking events." },
  { name: "SICC – Swiss Indian Chamber of Commerce", url: "https://sicc.ch", city: "Zurich/Bern", desc: "Bilateral trade promotion and business networking between India and Switzerland." },
  { name: "Indian Association Berne (IAB)", url: "https://www.india-bern.ch", city: "Bern", desc: "Founded 1972. Community events and cultural programmes for Indians in the federal capital. 120+ members." },
  { name: "Bharatiya Association Berne", url: "https://www.india-bab.ch", city: "Bern", desc: "Founded 1996. Promotes companionship and goodwill among Indian members and fosters Swiss-Indian contacts." },
  { name: "Indian Association Geneva (IAG)", url: "https://indianassociationgeneva.com", city: "Geneva", desc: "Founded 1947 — world's oldest continuously running Indian association. 500+ members in the Lake Geneva region." },
  { name: "Indian Cultural Association Basel (ICAS)", url: null, city: "Basel", desc: "Diwali, Holi and cultural welfare activities for Basel's Indian community." },
];

const regional: Org[] = [
  { name: "Gujarati Samaj Switzerland", url: "https://www.gujaratisamaj.ch", city: "Nationwide", desc: "Navratri Garba, language classes, and Gujarati cultural events across Switzerland." },
  { name: "Maharashtra Mandal Switzerland", url: null, city: "Nationwide", desc: "Ganesh Chaturthi, Marathi culture and community welfare." },
  { name: "Tamil Sangam Switzerland", url: null, city: "Zurich/Basel", desc: "Pongal, Tamil language education and cultural programmes." },
  { name: "Telugu Association Switzerland (TAS)", url: null, city: "Nationwide", desc: "Ugadi, Telugu cultural events and community network." },
  { name: "Punjabi Cultural Association", url: null, city: "Zurich", desc: "Lohri, Baisakhi and Punjabi community events." },
  { name: "Kannada Koota Switzerland", url: null, city: "Zurich", desc: "Kannada Rajyotsava and community events for Kannadigas." },
  { name: "Bengali Cultural Society Switzerland", url: null, city: "Zurich/Geneva", desc: "Durga Puja pandal, Rabindra Jayanti and Bengali cultural events." },
  { name: "Malayalee Association Switzerland", url: null, city: "Nationwide", desc: "Onam, Vishu and Malayalam cultural community events." },
];

const professional: Org[] = [
  { name: "TiE Zurich (The Indus Entrepreneurs)", url: "https://zurich.tie.org", city: "Zurich", desc: "Global entrepreneurship network fostering innovation and mentoring in the Indian diaspora." },
  { name: "NASSCOM Switzerland Chapter", url: "https://nasscom.in", city: "Zurich", desc: "IT industry association connecting Indian tech professionals and companies in Switzerland." },
  { name: "Swiss India Business Network", url: "https://sicc.ch", city: "Zurich/Geneva", desc: "Networking for Indian professionals and entrepreneurs in Switzerland — affiliated with SICC." },
];

const cultural: Org[] = [
  { name: "Hindu Swayamsevak Sangh (HSS) Switzerland", url: "https://www.hssworld.org", city: "Nationwide", desc: "Hindu cultural values, yoga shakhas and youth development programmes." },
  { name: "Art of Living Switzerland", url: "https://www.artofliving.org/ch-en", city: "Zurich/Geneva", desc: "Sudarshan Kriya, meditation, and wellness programmes by Sri Sri Ravi Shankar." },
  { name: "Chinmaya Mission Switzerland", url: "https://chinmayamission.com", city: "Zurich", desc: "Vedanta classes, Bala Vihar for children, and spiritual programmes." },
];

function OrgCard({ org }: { org: Org }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-orange-400 transition-colors">{org.name}</h3>
        <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/20">{org.city}</span>
      </div>
      <p className="text-slate-400 text-xs leading-relaxed">{org.desc}</p>
    </>
  );
  return org.url ? (
    <a href={org.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">{inner}</a>
  ) : (
    <div className="glass rounded-xl p-5">{inner}</div>
  );
}

function Section({ title, desc, items }: { title: string; desc: string; items: Org[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
      <p className="text-slate-400 text-sm mb-6">{desc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((o) => <OrgCard key={o.name} org={o} />)}
      </div>
    </section>
  );
}

export default function AssociationsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <PageHeader
        title="Indian Associations & Clubs in Switzerland"
        subtitle="150+ associations spanning umbrella bodies, regional language groups, professional networks, and cultural organisations."
        badge="🏛️ 150+ Associations"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Associations & Clubs" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Section title="Umbrella & City Associations" desc="Pan-Swiss and city-level Indian organisations" items={umbrella} />
        <Section title="Regional Language Associations" desc="Groups organised by language and state of origin" items={regional} />
        <Section title="Professional Networks" desc="Career, entrepreneurship, and industry networks" items={professional} />
        <Section title="Cultural & Spiritual Organisations" desc="Hindu culture, yoga, and spiritual community organisations" items={cultural} />
      </div>
    </div>
  );
}
