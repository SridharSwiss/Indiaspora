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
  title: "Indians in Basel — Community Guide",
  description: "Basel's Indian community — pharma professionals at Novartis and Roche, Indian Cultural Association of Switzerland, restaurants, and grocery stores.",
  openGraph: {
    title: "Indians in Basel — Community Guide | IndiaSwiss",
    description: "Basel's Indian community — pharma professionals at Novartis and Roche, Indian Cultural Association of Switzerland, restaurants, and grocery stores.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~3,000–4,000", icon: "👥" },
  { label: "Language", value: "Swiss German", icon: "🗣️" },
  { label: "Canton", value: "Basel-Stadt", icon: "🏛️" },
  { label: "Key Employers", value: "Novartis, Roche, Lonza", icon: "🏢" },
];

const associations = [
  {
    name: "Indian Cultural Association of Switzerland (ICAS)",
    url: "https://icas-online.com",
    desc: "Founded 2005 and based in Basel, ICAS is recognised by the Embassy of India in Berne and serves the Indian community across the Basel region. Objectives include preserving Indian cultural heritage, screening regional Indian films, organising cultural performances, and supporting the integration of Indians in Switzerland. Celebrated Republic Day events in Basel annually.",
  },
  {
    name: "Aggarwal Indian Grocery — Basel",
    url: "https://aggarwal.ch",
    desc: "Aggarwal's Basel store serves the Indian community with fresh fruits, vegetables, fish, spices, pickles, chutneys, and Indian household products. Part of a Swiss chain with additional branches in Zurich, Bern, and Baden.",
  },
];

const facts = [
  "Basel is the life sciences capital of Switzerland — Novartis and Roche, two of the world's largest pharmaceutical companies, are both headquartered here and together employ a substantial number of Indian scientists, engineers, and managers.",
  "Basel sits at the Dreiländereck — the tri-border point of Switzerland, Germany, and France. Indian residents often live across the border in Freiburg im Breisgau (Germany) or Mulhouse (France) for significantly cheaper rents while commuting into Basel.",
  "Art Basel (June) is the world's leading modern and contemporary art fair — held in Basel each year and a flagship event for the city. Fasnacht (February/March) is Basel's legendary three-day carnival, one of Switzerland's largest folk festivals.",
  "Basel has excellent tram connections operating across all three countries — the BVB tram network crosses into Germany and France, and a day pass covers all three countries in the tri-border area.",
  "The University of Basel — Switzerland's oldest university, founded 1460 — attracts Indian researchers and PhD students, particularly in life sciences, chemistry, and biomedical fields.",
  "Indian professionals in Basel are predominantly in senior roles in pharmaceutical research & development, regulatory affairs, and global supply chain management at Novartis, Roche, and their subsidiary companies such as Sandoz and Genentech.",
];

const restaurants = [
  { name: "Royal Palace", address: "Spalenring 160, 4055 Basel", note: "Consistently described as the best and largest Indian restaurant in Basel. Known for high-quality Chicken Tikka Masala and a broad menu of North Indian classics. Website: royal-palace.ch." },
  { name: "Bayleaf Gourmet Indian Restaurant", address: "Spalenring 163, 4055 Basel", note: "Upscale Indian restaurant on Spalenring offering diverse Indian, Asian, and Arabic cuisines. Beautiful ambiance, strong vegan curry menu, and catering services." },
  { name: "Indian Tandoori Palace", address: "Basel", note: "Well-regarded for authentic tandoori preparations. Consistent community favourite." },
  { name: "New Bombay", address: "Basel", note: "Popular Indian restaurant in Basel offering North and South Indian dishes." },
  { name: "Dabbawalas", address: "Basel", note: "Contemporary Indian eatery in Basel, named after Mumbai's legendary lunch-box delivery system." },
];

export default function BaselPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Basel"
        subtitle="Basel's compact, walkable city punches above its weight — home to global pharma giants Novartis and Roche, and a tight-knit Indian professional community concentrated in life sciences."
        badge="City Guide"
        gradient="from-orange-600 to-amber-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Basel" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div style={{ marginBottom: -32 }}>
          <Image
            src="https://images.unsplash.com/photo-1597001753514-5b97a5c3b9dd?w=1200&q=80&auto=format&fit=crop"
            alt="Basel Rhine river"
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Indian Associations & Community</h2>
          <p className="text-sm/50 mb-6" style={{ color: "var(--text)" }}>Source: icas-online.com; Embassy of India, Berne — Indian Associations directory; aggarwal.ch</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => (
              <div key={a.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text)" }}>{a.name}</h3>
                <p className="text-sm/60 mb-2" style={{ color: "var(--text)" }}>{a.desc}</p>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-400 hover:text-orange-300">
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
                <h3 className="text-base font-semibold mb-0.5" style={{ color: "var(--text)" }}>{r.name}</h3>
                {r.address && <p className="text-xs/40 mb-1" style={{ color: "var(--text)" }}>{r.address}</p>}
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{r.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
