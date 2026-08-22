import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Geneva — Community Guide",
  description: "Geneva's 5,000+ Indian community — UN professionals, associations, Indian restaurants, and official resources.",
  openGraph: {
    title: "Indians in Geneva — Community Guide | IndiaSwiss",
    description: "Geneva's 5,000+ Indian community — UN professionals, associations, Indian restaurants, and official resources.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~5,000", icon: "👥" },
  { label: "Language", value: "French", icon: "🗣️" },
  { label: "Canton", value: "Genève", icon: "🏛️" },
  { label: "Key Employers", value: "UN, WHO, WTO, Private Banking", icon: "🏢" },
];

const associations = [
  { name: "Indian Association of Geneva", desc: "Cultural events, Diwali celebrations, and support for newcomers." },
  { name: "ICCR Geneva", desc: "Indian Council for Cultural Relations — promotes Indian arts, music, and dance." },
  { name: "Consulate General of India", desc: "Indian consular services for French-speaking Switzerland. Located in Geneva." },
];

const areas = [
  { name: "Carouge", note: "Bohemian neighbourhood; cafés, restaurants, and a vibrant community feel." },
  { name: "Meyrin", note: "Near CERN; popular with scientific professionals; affordable rents." },
  { name: "Vernier", note: "Multicultural suburb with good access to international organisations." },
  { name: "Onex & Lancy", note: "Family-friendly western suburbs with good transport links." },
];

export default function GenevaPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Geneva"
        subtitle="Geneva's Indian community is shaped by the international organisations that call this city home — a sophisticated mix of diplomats, UN officials, and private bankers."
        badge="City Guide"
        gradient="from-red-600 to-rose-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Geneva" },
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
          <h2 className="text-2xl font-bold text-white mb-6">Indian Associations & Consulate</h2>
          <div className="space-y-4">
            {associations.map((a) => (
              <div key={a.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-white mb-1">{a.name}</h3>
                <p className="text-sm text-white/60">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Areas Popular with Indians</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((a) => (
              <div key={a.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-red-400 mb-1">{a.name}</h3>
                <p className="text-sm text-white/60">{a.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
