import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Users, MessageSquare, Building2, Briefcase } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "👥": <Users style={{ width: 20, height: 20, color: "var(--sf)" }} />,
  "🗣️": <MessageSquare style={{ width: 20, height: 20, color: "var(--sf)" }} />,
  "🏛️": <Building2 style={{ width: 20, height: 20, color: "var(--sf)" }} />,
  "🏢": <Briefcase style={{ width: 20, height: 20, color: "var(--sf)" }} />,
};

export const metadata: Metadata = {
  title: "Indians in Zurich — Community Guide",
  description: "Zurich's Indian community — associations, neighbourhoods, restaurants, grocery stores, and official resources for Switzerland's financial capital.",
  openGraph: {
    title: "Indians in Zurich — Community Guide | IndiaSwiss",
    description: "Zurich's Indian community — associations, neighbourhoods, restaurants, grocery stores, and official resources for Switzerland's financial capital.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~10,000+", icon: "👥" },
  { label: "Language", value: "Swiss German", icon: "🗣️" },
  { label: "Canton", value: "Zürich", icon: "🏛️" },
  { label: "Key Employers", value: "UBS, Google, IBM, ETH Zurich", icon: "🏢" },
];

const associations = [
  {
    name: "IAGZ",
    full: "Indian Association of Greater Zurich",
    url: "https://iagz.ch",
    desc: "Founded 2010, IAGZ is the primary Indian social association in the Greater Zurich area with 100+ member families. Organises Holi, Dandiya, Diwali, family picnics, and community meetups across age groups and regions of India.",
  },
  {
    name: "InSAZ",
    full: "Indian Students Association of Zurich",
    url: "https://blogs.ethz.ch/insaz/",
    desc: "Student association for Indians at ETH Zurich and the University of Zurich. Organises cultural events, academic networking, and orientation support for new Indian students.",
  },
  {
    name: "Gujarati Samaj Zurich",
    full: "",
    url: "",
    desc: "Cultural events and networking for the Gujarati-speaking community in the Zurich region.",
  },
  {
    name: "SwissDesi (formerly IndianMomsZurich)",
    full: "",
    url: "https://swissdesi.ch",
    desc: "Online community platform launched 2018 connecting Indian and South Asian families in Zurich and across Switzerland. Maintains a directory of Indian associations, grocery stores, and local services.",
  },
];

const neighbourhoods = [
  { name: "Oerlikon (District 11)", url: "https://www.google.com/maps/search/Oerlikon+Zurich", note: "Popular with tech and finance professionals. Well-connected by tram and S-Bahn; home to Saravanaa Bhavan South Indian restaurant." },
  { name: "Schlieren & Dietikon", url: "https://www.google.com/maps/search/Schlieren+Zurich", note: "Western suburbs with more affordable rents, good Indian grocery access, and a growing Indian family community." },
  { name: "Districts 3, 4 & 5", url: "https://www.google.com/maps/search/District+4+Zurich+Langstrasse", note: "Central city districts; vibrant and walkable, higher rents but home to several Indian restaurants and Aggarwal grocery store." },
  { name: "Winterthur", url: "https://www.google.com/maps/search/Winterthur+Switzerland", note: "30 minutes by S-Bahn; a growing Indian community; noticeably more affordable than Zurich city proper." },
];

const restaurants = [
  { name: "Tadka", url: "https://www.google.com/search?q=Tadka+restaurant+Zurich+Indian", note: "North Indian curries, tandoori, and Thali meals in District 5 (Zürich West). Known for Kerala-style preparations. Casual and community-loved." },
  { name: "Malabar", url: "https://www.google.com/search?q=Malabar+restaurant+Zurich+South+Indian", note: "Elegant South Indian restaurant, praised for its traditional recipes and quality of ingredients." },
  { name: "Bombay Karachi", url: "https://www.google.com/search?q=Bombay+Karachi+Zurich", note: "Indian and Pakistani cuisine in central Zurich. Reliable halal options and Karachi-style biryani." },
  { name: "New Bombay", url: "https://www.google.com/search?q=New+Bombay+restaurant+Zurich", note: "One of Zurich's longest-running Indian restaurants. Menu spans North and South Indian classics." },
  { name: "Saravanaa Bhavan", url: "https://www.saravanabhavan.com", note: "Legendary Chennai-based vegetarian chain with a Zurich branch in Oerlikon. South Indian thalis, dosas, and filter coffee." },
];

const groceries = [
  { name: "Aggarwal", url: "https://www.google.com/maps/search/Aggarwal+Indian+Grocery+Kernstrasse+Zurich", address: "Kernstrasse 27, 8004 Zürich", note: "Fresh Indian produce, spices, pickles, dairy, and household products. Also has branches in Bern, Basel, and Baden. Mon–Fri 9am–8pm, Sat 9am–7pm." },
  { name: "Indiasupermarkt.ch", url: "https://indiasupermarkt.ch", address: "Josefstrasse 91, 8005 Zürich", note: "Wide selection of Indian and Asian groceries, spices, and cosmetics. Also ships across Switzerland." },
  { name: "Namastey India", url: "https://www.google.com/search?q=Namastey+India+grocery+Zurich", address: "Zürich", note: "Well-stocked Indian grocery with fresh produce, masalas, and ready-to-eat items." },
];

export default function ZurichPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Zurich"
        subtitle="Zurich is home to Switzerland's largest Indian community — a thriving diaspora of IT professionals, bankers, researchers, and families centred around the financial capital."
        badge="City Guide"
        gradient="from-blue-600 to-indigo-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Zurich" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div style={{ marginBottom: -32 }}>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop"
            alt="Zurich lakeside view with the city skyline"
            width={1200}
            height={400}
            unoptimized
            className="w-full rounded-2xl object-cover"
            style={{ height: 280, objectFit: "cover" }}
          />
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-4 text-center">
              <div className="flex justify-center mb-1">{ICON_MAP[h.icon] ?? h.icon}</div>
              <p className="text-base font-bold" style={{ color: "var(--text)" }}>{h.value}</p>
              <p className="text-xs/50" style={{ color: "var(--text)" }}>{h.label}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Indian Associations</h2>
          <p className="text-sm/50 mb-6" style={{ color: "var(--text)" }}>Source: Embassy of India, Berne — Indian Associations directory; iagz.ch</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => {
              const href = a.url || `https://www.google.com/search?q=${encodeURIComponent(a.name + " Zurich Indian association")}`;
              return (
                <a key={a.name} href={href} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                  <h3 className="text-base font-semibold mb-0.5 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{a.name}</h3>
                  {a.full && <p className="text-xs/40 mb-2" style={{ color: "var(--text)" }}>{a.full}</p>}
                  <p className="text-sm/60" style={{ color: "var(--text)" }}>{a.desc}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Neighbourhoods Popular with Indians</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighbourhoods.map((n) => (
              <a key={n.name} href={n.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">{n.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{n.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-1 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{r.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Grocery Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {groceries.map((g) => (
              <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-0.5 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{g.name}</h3>
                <p className="text-xs/40 mb-2" style={{ color: "var(--text)" }}>{g.address}</p>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{g.note}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
