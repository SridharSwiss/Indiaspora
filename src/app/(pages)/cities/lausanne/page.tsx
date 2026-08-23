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
  title: "Indians in Lausanne — Community Guide",
  description: "Lausanne's Indian community — EPFL's YUVA association, Indian Association Lausanne, PrangaN@Swiss, restaurants, and official links.",
  openGraph: {
    title: "Indians in Lausanne — Community Guide | IndiaSwiss",
    description: "Lausanne's Indian community — EPFL's YUVA association, Indian Association Lausanne, PrangaN@Swiss, restaurants, and official links.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~2,500", icon: "👥" },
  { label: "Language", value: "French", icon: "🗣️" },
  { label: "Canton", value: "Vaud", icon: "🏛️" },
  { label: "Key Employer", value: "EPFL, Nestlé, Philip Morris", icon: "🏢" },
];

const associations = [
  {
    name: "Indian Association Lausanne (IAL)",
    url: "https://www.ialausanne.com",
    desc: "Founded in 1995, IAL is the principal Indian community association for Lausanne and the French-speaking regions of Switzerland. Provides a social, cultural, and local integration platform for Indians in Romandy. Organises Diwali, Holi, Independence Day, and regular community events.",
  },
  {
    name: "YUVA – Indians Association at EPFL-UNIL",
    url: "https://www.epfl.ch/campus/associations/yuva/",
    desc: "Non-profit, non-political student association registered with EPFL for Indians and persons of Indian origin studying or working at EPFL and UNIL. Acts as the official face and voice of the Indian community on campus. Open to all nationalities with an interest in Indian culture.",
  },
  {
    name: "PrangaN@Swiss",
    url: "https://www.pranganswiss.org",
    desc: "Switzerland's first women-led non-profit organisation serving the Indian diaspora. Based in the Lausanne region. Focuses on Bengali cultural traditions — organising Durga Puja, cultural celebrations, and community events promoting a 'Taste of Bengal' in Switzerland.",
  },
];

const facts = [
  "Lausanne is home to EPFL (École Polytechnique Fédérale de Lausanne), consistently ranked among Europe's top technical universities. EPFL has one of the largest Indian student and researcher populations in Switzerland, with IITs and other premier Indian institutions maintaining student exchange programmes with EPFL.",
  "Lausanne sits on the northern shores of Lake Geneva (Lac Léman) with stunning Alpine views. The city is notably hilly — the automated Metro M2 connects the lakeside train station to the hilltop EPFL campus and the old city, making it easy to navigate.",
  "The Lausanne–Renens–Morges corridor offers more affordable housing for EPFL students and researchers compared to Geneva city. Renens and Crissier are particularly popular Indian community clusters.",
  "Nestlé, headquartered nearby in Vevey, and Philip Morris International in Lausanne employ a significant number of Indian nationals in management, science, and technology roles.",
  "French is the primary language in Lausanne. Many Indian professionals and students find the French-speaking environment easier to navigate than Swiss German — and the city's large international university population means English is widely spoken on campus.",
];

const restaurants = [
  { name: "Nandanam", url: "https://www.google.com/search?q=Nandanam+Indian+restaurant+Lausanne", note: "Rated the top Indian restaurant in Lausanne by recent reviews. South Indian specialities alongside North Indian classics." },
  { name: "Bollywood", url: "https://www.google.com/search?q=Bollywood+Indian+restaurant+Lausanne", note: "Consistently highly praised on TheFork and TripAdvisor. Vegetarian and gluten-free options available. Popular with the EPFL student community." },
  { name: "7 Kings Curry", url: "https://www.google.com/search?q=7+Kings+Curry+Lausanne", note: "Reliable Indian restaurant with a broad menu spanning regional Indian cuisines." },
  { name: "La Maison Tandoori", url: "https://www.google.com/search?q=La+Maison+Tandoori+Lausanne", note: "Praised for its authentic tandoor-cooked dishes and good atmosphere." },
  { name: "Indian Zayeka", url: "https://www.google.com/search?q=Indian+Zayeka+Lausanne", note: "Known for its classic Indian dishes and popular lunch buffet. Traditionally decorated dining space." },
];

export default function LausannePage() {
  return (
    <div>
      <PageHeader
        title="Indians in Lausanne"
        subtitle="Lausanne's Indian community is driven by EPFL — one of the world's top technical universities and a magnet for Indian researchers, students, and academic professionals."
        badge="City Guide"
        gradient="from-violet-600 to-purple-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Lausanne" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div style={{ marginBottom: -32 }}>
          <Image
            src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1200&q=80&auto=format&fit=crop"
            alt="Lausanne cathedral overlooking Lake Geneva"
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
          <p className="text-sm/50 mb-6" style={{ color: "var(--text)" }}>Source: ialausanne.com; epfl.ch/campus/associations/yuva; pranganswiss.org; Embassy of India, Berne associations directory</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => (
              <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-violet-400 transition-colors" style={{ color: "var(--text)" }}>{a.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{a.desc}</p>
              </a>
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
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-1 group-hover:text-violet-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{r.note}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
