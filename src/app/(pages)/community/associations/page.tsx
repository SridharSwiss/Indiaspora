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

// Umbrella associations verified via Embassy of India Bern listing, individual organisation websites, and swissdesi.ch (Aug 2026)
const umbrella: Org[] = [
  { name: "IAGZ – Indian Association of Greater Zurich", url: "https://iagz.ch", city: "Zurich", desc: "Formed 2010. Gathers the Indian community in Greater Zurich for Holi, Dandiya and Diwali. 70+ member families. Non-political, non-communal." },
  { name: "SICC – Swiss-Indian Chamber of Commerce", url: "https://sicc.ch", city: "Zurich", desc: "Founded 1985. Bi-national non-profit with 400+ Swiss and Indian members. Offices in Zurich, Mumbai, New Delhi, Bengaluru and Pune. Hosts 50+ events annually." },
  { name: "Indian Association of Berne (IAB)", url: "https://www.india-bern.ch", city: "Bern", desc: "Founded 15 June 1972. Cultural, non-profit, non-political organisation for the Indian diaspora in Bern. 120+ members. Ambassador of India is patron." },
  { name: "Bharatiya Association Berne (BAB)", url: "https://www.india-bab.ch", city: "Bern", desc: "Founded July 1996. Promotes companionship and goodwill among members and fosters contacts with Swiss institutions and culture." },
  { name: "Indian Association Geneva (IAG)", url: "https://indianassociationgeneva.com", city: "Geneva", desc: "Founded 1947 — one of the world's oldest continuously running Indian associations. 500+ members in the Lake Geneva region." },
  { name: "Bruhan Maharashtra Mandal Switzerland (BMMS)", url: "https://bruhan-mms.org", city: "Nationwide", desc: "Non-profit, secular forum for the Marathi-speaking community in Switzerland. Promotes Marathi language, literature and culture." },
];

// Regional/language associations — verified via Embassy of India listing, swissdesi.ch/indian-associations, and web search (Aug 2026)
const regional: Org[] = [
  { name: "Gujarati Samaj Switzerland", url: "https://www.gujaratisamaj.ch", city: "Nationwide", desc: "Navratri Garba, language classes, and Gujarati cultural events across Switzerland." },
  { name: "Swiss Tamil Sangam", url: "http://swisstamilsangam.com", city: "Nationwide", desc: "Cultural association for Tamil-speaking community in Switzerland. Tamil is one of the largest diaspora language groups in the country." },
  { name: "Swiss Tamil Professionals Association (STPA)", url: "https://www.tamilprofessionals.ch", city: "Zurich", desc: "Network for Tamil professionals — collaboration, innovation and mentoring across industries." },
  { name: "Telugu Association of Switzerland (TeluguSwiss)", url: "https://teluguswiss.org", city: "Nationwide", desc: "Ugadi and other Telugu cultural events and community networking. The affiliated Swiss Telugu NRI Forum (STNRI) runs Mana Badi, a Telugu language programme for children." },
  { name: "Kannada Koota Switzerland", url: "https://www.facebook.com/groups/kannadakoota.switzerland/", city: "Zurich", desc: "Kannada Rajyotsava and community events for Kannadigas across Switzerland." },
  { name: "Bengali Cultural Society Switzerland", url: "https://www.facebook.com/groups/bengaliculturalsocietyswitzerland/", city: "Zurich/Geneva", desc: "Durga Puja, Rabindra Jayanti and Bengali cultural events across Switzerland." },
  { name: "Kerala Associations Network", url: "https://www.keralam.ch", city: "Nationwide", desc: "Kerala's diaspora runs several regional groups rather than one body — including Keliswiss, Malayalees Swiss, Changathi Kootam and Bharatheeya Kalalayam Switzerland — organising Onam, Vishu and Malayalam-language cultural events." },
];

// Professional networks — verified via organisation websites (Aug 2026)
const professional: Org[] = [
  { name: "TiE Zurich (The Indus Entrepreneurs)", url: "https://tie.org", city: "Zurich", desc: "Global entrepreneurship network founded 1992 in Silicon Valley with chapters in 12 countries. Fosters mentoring, networking and education for entrepreneurs with Indus-region roots." },
  { name: "Swiss-Indian Chamber of Commerce (SICC)", url: "https://sicc.ch", city: "Zurich", desc: "Founded 1985. The leading cross-border business platform between Switzerland and India. Bilateral networking, trade delegations and government contacts." },
];

// Cultural organisations — verified via organisation websites (Aug 2026)
const cultural: Org[] = [
  { name: "Hindu Swayamsevak Sangh (HSS) Switzerland", url: "https://www.hssworld.org", city: "Nationwide", desc: "Hindu cultural values, yoga shakhas and youth development programmes." },
  { name: "Art of Living Switzerland", url: "https://www.artofliving.org/ch-en", city: "Nationwide", desc: "Centers in Zurich, Geneva, Basel, Bern, Lucerne, Lugano and Neuchâtel. Sudarshan Kriya, meditation, yoga and wellness programmes by Sri Sri Ravi Shankar." },
  { name: "Chinmaya Mission Switzerland", url: "https://chinmayamission.com", city: "Zurich", desc: "Vedanta classes, Gita study groups, Bala Vihar for children and spiritual programmes. Part of Chinmaya Mission Europe network." },
];

function OrgCard({ org }: { org: Org }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm leading-tight group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{org.name}</h3>
        <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/20">{org.city}</span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{org.desc}</p>
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
      <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>{title}</h2>
      <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>{desc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((o) => <OrgCard key={o.name} org={o} />)}
      </div>
    </section>
  );
}

export default function AssociationsPage() {
  return (
    <div>
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
