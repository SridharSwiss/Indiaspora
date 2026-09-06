import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Users, MessageSquare, Building2, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Indians in Lausanne — Community Guide",
  description: "Lausanne's Indian community — associations, EPFL, Olympic Museum, restaurants, and practical tips for Switzerland's Olympic capital on Lake Geneva.",
  openGraph: {
    title: "Indians in Lausanne — Community Guide | Indiaspora",
    description: "Lausanne's Indian community — associations, EPFL, Olympic Museum, restaurants, and practical tips for Switzerland's Olympic capital on Lake Geneva.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~2,000+", icon: <Users style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Language", value: "French", icon: <MessageSquare style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Status", value: "Olympic Capital", icon: <Building2 style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Key Institutions", value: "EPFL, IOC, IMD", icon: <GraduationCap style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
];

const associations = [
  {
    name: "Indian Association Lausanne (IAL)",
    full: "",
    url: "",
    desc: "The primary Indian social and cultural association in the Lausanne and Vaud region. Organises major Indian festivals including Diwali, Holi, and cultural events throughout the year.",
  },
  {
    name: "YUVA EPFL",
    full: "Youth Union Vivace & Active",
    url: "",
    desc: "Indian student association at EPFL (École Polytechnique Fédérale de Lausanne). Organises cultural events, cricket, Bollywood nights, and orientation support for new Indian students at EPFL.",
  },
  {
    name: "PrangaN@Swiss",
    full: "",
    url: "",
    desc: "Cultural organisation serving the Bengali-speaking Indian community in the Lausanne and greater Swiss-Romande region. Organises Durga Puja, music events, and cultural gatherings.",
  },
];

const landmarks = [
  { name: "Olympic Museum", url: "https://www.google.com/maps/search/Olympic+Museum+Lausanne", note: "The only Olympic Museum in the world, in Lausanne — the seat of the International Olympic Committee (IOC). Stunning lakeside location with interactive exhibitions on Olympic history. A must-visit." },
  { name: "Cathédrale de Lausanne", url: "https://www.google.com/maps/search/Cathédrale+de+Lausanne", note: "One of the finest Gothic cathedrals in Switzerland (12th–13th century). Unique tradition: a night watchman calls the hours from the tower every night between 10pm and 2am — a practice maintained since the Middle Ages." },
  { name: "Ouchy Lakeside Promenade", url: "https://www.google.com/maps/search/Ouchy+Lausanne+lakeside", note: "Lausanne's beautiful lakeside district with a promenade, parks, boat piers, and the Olympic Museum. Excellent views of the Alps across Lake Geneva. In summer, paddle boats and swimming at the lake beaches." },
  { name: "Plateforme 10 Arts District", url: "https://www.google.com/maps/search/Plateforme+10+Lausanne", note: "Newly opened arts district next to the main train station (2022). Houses three major museums: Musée cantonal des Beaux-Arts (MCBA), MUDAC (design and applied arts), and Photo Elysée (photography)." },
  { name: "EPFL Campus", url: "https://www.google.com/maps/search/EPFL+Lausanne+campus", note: "The École Polytechnique Fédérale de Lausanne campus is a city within a city — art installations, the Rolex Learning Center (a wave-shaped building), restaurants, and the ArtLab. Open to the public." },
  { name: "Musée de l'Élysée → Photo Elysée", url: "https://www.google.com/maps/search/Photo+Elysée+Lausanne", note: "Switzerland's national museum of photography. Now part of the Plateforme 10 arts district. A world-class photography collection from historic to contemporary." },
  { name: "Rochers-de-Naye", url: "https://www.google.com/maps/search/Rochers-de-Naye+Montreux", note: "Dramatic viewpoint (2,042 m) above Montreux (30 min from Lausanne by train). Reached by cogwheel railway from Montreux. Panoramic views of Lake Geneva, the Alps, and Mont Blanc." },
];

const institutions = [
  { name: "EPFL (École Polytechnique Fédérale de Lausanne)", url: "https://www.epfl.ch/en/", note: "Switzerland's second federal polytechnic university; consistently ranked top 15 globally. Major draw for Indian students and researchers in engineering, computer science, life sciences, and architecture. ~11,000 students; highly international." },
  { name: "University of Lausanne (UNIL)", url: "https://www.unil.ch/index.html", note: "~17,000 students. Strong in social sciences, law, business, medicine, and humanities. Located on the scenic Dorigny campus by the lake, adjacent to EPFL." },
  { name: "IMD Business School", url: "https://www.imd.org/", note: "One of the world's top-ranked business schools. Flagship MBA and Executive Education programmes. Many Indian executives attend IMD; high alumni visibility in Swiss corporate world." },
  { name: "EHL (Ecole hôtelière de Lausanne)", url: "https://www.ehl.edu/en", note: "Consistently ranked the world's #1 hospitality management school. Indian students interested in hospitality, tourism, and hotel management come to Lausanne specifically for EHL." },
  { name: "International Olympic Committee (IOC)", url: "https://olympics.com/ioc", note: "Lausanne is the official 'Olympic Capital' and home to the IOC headquarters. Various sports federations are also headquartered here, creating international employment opportunities." },
];

const events = [
  { name: "Lausanne Marathon", when: "October", desc: "Popular city marathon along the lake and through Lausanne's hilly streets. Excellent course with lake and mountain views." },
  { name: "Lausanne Underground Film Festival", when: "October", desc: "Independent and underground cinema. One of Europe's leading alternative film festivals." },
  { name: "Lausanne Lumières", when: "December", desc: "Light art festival transforming Lausanne's streets, squares, and facades with spectacular illuminations." },
  { name: "Cully Jazz Festival", when: "April", desc: "Renowned jazz festival in the nearby wine village of Cully on Lake Geneva (25 min from Lausanne). Intimate outdoor concerts among the vineyards." },
  { name: "Lausanne Dance Festival (Prix de Lausanne)", when: "February", desc: "International ballet competition for young dancers — one of the most prestigious youth ballet competitions in the world." },
  { name: "Fête de la Musique", when: "June 21", desc: "Free outdoor music concerts across the city on the summer solstice. Hundreds of performances in streets, squares, and parks." },
];

const transport = [
  { mode: "Metro M2 (Automated Hillside Metro)", detail: "Lausanne's most distinctive transport feature — the world's steepest automated metro, connecting Ouchy lakeside to the city centre and beyond. Runs 24 hours at weekends." },
  { mode: "Trains from Lausanne", detail: "Geneva (33 min), Bern (65 min), Zurich (2h20 direct). Fast and frequent services along the Lake Geneva corridor (Geneva–Lausanne–Montreux–Brig). TGV connections from Geneva to Paris." },
  { mode: "TL Buses & Trolleybuses", detail: "Lausanne's bus and trolleybus network covers the city's famously hilly terrain. Lausanne is built on three hills — the bus network is essential for navigating between districts." },
  { mode: "CGN Lake Boats", detail: "Lake Geneva boats connect Lausanne-Ouchy to Évian-les-Bains (France), Geneva, Montreux, and Nyon. A scenic way to travel along the lake; Swiss Travel Pass valid on most routes." },
];

const areas = [
  { name: "Ouchy", url: "https://www.google.com/maps/search/Ouchy+Lausanne", note: "Lausanne's lakeside district. Olympic Museum, boat piers, lakeside promenade, hotels. Most scenic neighbourhood — popular with expats and visitors." },
  { name: "Écublens & EPFL Area", url: "https://www.google.com/maps/search/Écublens+Lausanne+EPFL", note: "Western suburb; home to the EPFL and UNIL campus. Student-heavy area with affordable housing and an international community. Metro M1 connects directly to the city centre." },
  { name: "Pully & Paudex", url: "https://www.google.com/maps/search/Pully+Lausanne", note: "Eastern lakeside suburbs. Quieter, family-friendly, very scenic. Commutable to Lausanne city centre. Popular with Indian families employed at international institutions." },
  { name: "Renens & Prilly", url: "https://www.google.com/maps/search/Renens+Lausanne", note: "Western suburbs with lower rents and good transport links. A practical choice for families and professionals on more modest budgets." },
];

const foodAndGrocery: { name: string; url: string; address?: string; note: string }[] = [
  { name: "Indian Restaurants, Lausanne", url: "https://www.google.com/maps/search/Indian+restaurant+Lausanne", note: "Several Indian restaurants in central Lausanne, particularly around the Flon and Saint-François areas. North Indian, South Indian, and fusion options available." },
  { name: "EPFL / UNIL Campus Canteens", url: "https://www.google.com/maps/search/EPFL+restaurant+Lausanne", note: "The EPFL campus has multiple restaurants including Indian-inspired options in the Restaurants des Rives. Open to the public." },
  { name: "South Asian Restaurants, Lausanne", url: "https://www.google.com/maps/search/Pakistani+Sri+Lankan+restaurant+Lausanne", note: "Pakistani and Sri Lankan restaurants in Lausanne supplement the Indian dining scene, offering biryanis, halal options, and South Asian home cooking." },
  { name: "Indian & Asian Groceries, Lausanne", url: "https://www.google.com/maps/search/Indian+Asian+grocery+Lausanne", address: "Central Lausanne", note: "Several Asian supermarkets in Lausanne carry Indian staples — spices, lentils, basmati rice, and Indian brands. Larger Indian grocery runs are often made to Geneva (33 min by train)." },
];

const practical = [
  { title: "EPFL Indian Students", detail: "EPFL has one of the largest concentrations of Indian students and researchers in Switzerland. YUVA EPFL is the student association. The campus is well-connected by Metro M1 to central Lausanne." },
  { title: "French Language", detail: "Lausanne is in French-speaking Switzerland. French is essential for daily life, administration, and integration. UNIL and EPFL both offer French courses for international students." },
  { title: "Indian Consulate Access", detail: "The nearest Consulate General of India is in Geneva (33 min by train). The Embassy is in Berne (65 min). For OCI, passport renewal, and consular services, plan ahead — appointments required." },
  { title: "Health Insurance", detail: "Mandatory from day 1. Apply within 3 months. Canton Vaud (Lausanne is the cantonal capital) has moderate-to-high premiums. Compare at priminfo.ch." },
  { title: "Cost of Living", detail: "Lausanne is expensive but generally slightly cheaper than Geneva for housing. Cross-border shopping in France (across the lake in Évian, or in the Gex area) saves significantly on groceries." },
  { title: "Lake Geneva Day Trips", detail: "From Lausanne: Montreux (20 min) for Château de Chillon and the Lavaux vineyards (UNESCO). Nyon (15 min). Geneva (33 min). The entire Lake Geneva region is beautiful and accessible." },
];

export default function LausannePage() {
  return (
    <div>
      <PageHeader
        title="Indians in Lausanne"
        subtitle="Switzerland's Olympic Capital on Lake Geneva — home to EPFL, the IOC, IMD Business School, and a vibrant Indian student and professional community in the heart of French-speaking Switzerland."
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lausanne_-_panorama_depuis_Sauvabelin_-_panoramio.jpg/1280px-Lausanne_-_panorama_depuis_Sauvabelin_-_panoramio.jpg"
            alt="Lausanne panorama from Sauvabelin"
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
              <div className="flex justify-center mb-1">{h.icon}</div>
              <p className="text-base font-bold" style={{ color: "var(--text)" }}>{h.value}</p>
              <p className="text-xs/50" style={{ color: "var(--text)" }}>{h.label}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Indian Associations</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Community groups serving Indians in the Lausanne and Vaud region</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => {
              const href = a.url || `https://www.google.com/search?q=${encodeURIComponent(a.name + " Lausanne")}`;
              return (
                <a key={a.name} href={href} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                  <h3 className="text-base font-semibold mb-0.5 group-hover:text-violet-400 transition-colors" style={{ color: "var(--text)" }}>{a.name}</h3>
                  {a.full && <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{a.full}</p>}
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{a.desc}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Neighbourhoods Popular with Indians</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((n) => (
              <a key={n.name} href={n.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold text-violet-400 mb-1 group-hover:text-violet-300 transition-colors">{n.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{n.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Landmarks & Attractions</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>From the world's only Olympic Museum to the hilltop Gothic cathedral</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {landmarks.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-violet-400 transition-colors" style={{ color: "var(--text)" }}>{l.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{l.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Universities & International Institutions</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Lausanne is one of the world's top cities for higher education — EPFL, UNIL, IMD, EHL, and the IOC</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {institutions.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-violet-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{u.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Annual Events & Festivals</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Lausanne's cultural calendar — lively throughout the year</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.name} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{e.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa" }}>{e.when}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Getting Around</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>The steep hillside Metro M2 is Lausanne's signature transport — runs 24 hours at weekends</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transport.map((t) => (
              <div key={t.mode} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text)" }}>{t.mode}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Restaurants & Grocery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {foodAndGrocery.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-1 group-hover:text-violet-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                {r.address && <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{r.address}</p>}
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{r.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Practical Tips for Indians</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Essentials for settling into Lausanne</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practical.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text)" }}>{p.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
