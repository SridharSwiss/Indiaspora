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
  title: "Indians in Geneva — Community Guide",
  description: "Geneva's Indian community — Indian Association Geneva (est. 1947), Permanent Mission of India, UN professionals, restaurants, and official resources.",
  openGraph: {
    title: "Indians in Geneva — Community Guide | IndiaSwiss",
    description: "Geneva's Indian community — Indian Association Geneva (est. 1947), Permanent Mission of India, UN professionals, restaurants, and official resources.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~5,000", icon: "👥" },
  { label: "Language", value: "French", icon: "🗣️" },
  { label: "Canton", value: "Genève", icon: "🏛️" },
  { label: "Key Employers", value: "UN, WHO, WTO, Private Banking", icon: "🏢" },
];

const associations = [
  {
    name: "Indian Association of Geneva (IAG)",
    url: "https://indianassociationgeneva.com",
    desc: "Founded in 1947, IAG is reputedly one of the world's oldest continuously running Indian associations. With over 500 members, it serves as the social and cultural forum for Indians in Geneva, organising Diwali, Republic Day, Independence Day, and cultural programmes fostering friendship with the Swiss and international community.",
  },
  {
    name: "Permanent Mission of India to the UN, Geneva",
    url: "https://pmindiaun.gov.in",
    desc: "India's diplomatic mission to the UN agencies in Geneva (UNHRC, WTO, WHO, ILO). Also provides consular and passport services for Indians in French-speaking Switzerland. Address: 21 Avenue Appia, 1292 Chambésy. Tel: +41 22 717 0600.",
  },
  {
    name: "ICCR Geneva",
    url: "",
    desc: "Indian Council for Cultural Relations presence in Geneva promotes Indian classical arts, music, dance, and cultural exchange programmes.",
  },
];

const areas = [
  { name: "Carouge", note: "Bohemian, walkable neighbourhood just south of Geneva centre. Lively café culture and vibrant community feel. Popular with Indian professionals and young families." },
  { name: "Meyrin", note: "Near CERN; popular with Indian scientific professionals. More affordable rents with good tram links into the city." },
  { name: "Vernier", note: "Multicultural western suburb with good access to international organisations including WHO and ILO." },
  { name: "Onex & Lancy", note: "Family-friendly western suburbs with strong transport links, larger apartments, and more competitive rents than the city centre." },
];

const restaurants = [
  { name: "Rasoi by Vineet", note: "Fine-dining Indian restaurant at the Mandarin Oriental Geneva, led by acclaimed chef Vineet Bhatia. Contemporary take on Indian cuisine. Geneva's most celebrated Indian dining experience." },
  { name: "Café Gandhi", note: "Popular with the Indian expat community and locals alike. Consistently highly rated for authentic curry and tandoori dishes." },
  { name: "Little India Street Kitchen", note: "Traditional Indian cuisine in a lively bazaar-inspired setting on Rue de Lausanne. Strong vegetarian and vegan selection." },
  { name: "Indian Bites", note: "Highly praised for authentic flavours and varied regional Indian dishes. Website: indianbites.ch." },
  { name: "Le Safran", note: "Highly rated Indian restaurant in Geneva with strong TheFork ratings and consistent community recommendations." },
];

export default function GenevaPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Geneva"
        subtitle="Geneva's Indian community is shaped by the international organisations that call this city home — a sophisticated mix of UN officials, diplomats, scientists, and private bankers."
        badge="City Guide"
        gradient="from-red-600 to-rose-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Geneva" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div style={{ marginBottom: -32 }}>
          <Image
            src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80&auto=format&fit=crop"
            alt="Geneva lake and Jet d'Eau"
            width={1200}
            height={400}
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Indian Associations & Consulate</h2>
          <p className="text-sm/50 mb-6" style={{ color: "var(--text)" }}>Source: indianassociationgeneva.com; pmindiaun.gov.in; Embassy of India, Berne associations directory</p>
          <div className="space-y-4">
            {associations.map((a) => (
              <div key={a.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text)" }}>{a.name}</h3>
                <p className="text-sm/60 mb-2" style={{ color: "var(--text)" }}>{a.desc}</p>
                {a.url && (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-xs text-red-400 hover:text-red-300">
                    {a.url} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Areas Popular with Indians</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((a) => (
              <div key={a.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-red-400 mb-1">{a.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{a.note}</p>
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
