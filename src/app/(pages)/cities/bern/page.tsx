import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Bern — Community Guide",
  description: "Bern's Indian community — Embassy of India, associations, restaurants, and official resources for the federal capital.",
  openGraph: {
    title: "Indians in Bern — Community Guide | IndiaSwiss",
    description: "Bern's Indian community — Embassy of India, associations, restaurants, and official resources for the federal capital.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~2,000", icon: "👥" },
  { label: "Language", value: "Swiss German", icon: "🗣️" },
  { label: "Canton", value: "Bern", icon: "🏛️" },
  { label: "Key Feature", value: "Embassy of India", icon: "🇮🇳" },
];

const facts = [
  "Bern is Switzerland's federal capital — home to the Embassy of India in Switzerland, making it the primary location for Indian passport and visa services.",
  "The old city of Bern is a UNESCO World Heritage Site — the famous arcaded streets (Lauben) and Bear Park are must-sees.",
  "Bern has a smaller but close-knit Indian community, largely comprising embassy staff, government officials, and university professionals.",
  "The University of Bern and the Bern University of Applied Sciences attract Indian students, particularly in medicine and engineering.",
];

export default function BernPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Bern"
        subtitle="Switzerland's federal capital hosts the Embassy of India and a close-knit Indian community of diplomats and academics."
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
              <p className="text-base font-bold text-white">{h.value}</p>
              <p className="text-xs text-white/50">{h.label}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">What to Know</h2>
          <div className="space-y-4">
            {facts.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <p className="text-sm text-white/70">{f}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-yellow-500/20">
          <h3 className="text-base font-semibold text-yellow-400 mb-2">Embassy of India — Bern</h3>
          <p className="text-sm text-white/70">The Embassy of India in Bern provides consular services including passport renewal, OCI applications, visa services for Swiss nationals, and emergency assistance for Indian nationals in Switzerland.</p>
        </div>
      </div>
    </div>
  );
}
