import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Lausanne — Community Guide",
  description: "Lausanne's Indian community — EPFL students and researchers, associations, restaurants, and official links.",
  openGraph: {
    title: "Indians in Lausanne — Community Guide | IndiaSwiss",
    description: "Lausanne's Indian community — EPFL students and researchers, associations, restaurants, and official links.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~2,500", icon: "👥" },
  { label: "Language", value: "French", icon: "🗣️" },
  { label: "Canton", value: "Vaud", icon: "🏛️" },
  { label: "Key Employer", value: "EPFL, Nestlé, Philip Morris", icon: "🏢" },
];

const facts = [
  "Lausanne is home to EPFL (École Polytechnique Fédérale de Lausanne), one of Europe's top technical universities — with one of the largest Indian student populations in Switzerland.",
  "The Indian Student Association at EPFL organises cultural events, Diwali, and academic networking throughout the year.",
  "Lausanne sits on the shores of Lake Geneva with stunning Alpine views. The city is hilly — locals are used to steep streets.",
  "Metro M2 (automated metro) connects the lakeside to the hilltop university areas, making commutes easy.",
  "Nearby Morges and Renens offer more affordable housing for EPFL students and researchers.",
];

export default function LausannePage() {
  return (
    <div>
      <PageHeader
        title="Indians in Lausanne"
        subtitle="Lausanne's Indian community is driven by EPFL — one of the world's top technical universities and a magnet for Indian researchers and students."
        badge="City Guide"
        gradient="from-violet-600 to-purple-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Lausanne" },
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
      </div>
    </div>
  );
}
