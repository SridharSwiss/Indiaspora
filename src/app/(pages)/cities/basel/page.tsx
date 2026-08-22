import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Basel — Community Guide",
  description: "Basel's 3,000+ Indian community — pharma professionals, Novartis/Roche employees, associations, and restaurants.",
  openGraph: {
    title: "Indians in Basel — Community Guide | IndiaSwiss",
    description: "Basel's 3,000+ Indian community — pharma professionals, Novartis/Roche employees, associations, and restaurants.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~3,000", icon: "👥" },
  { label: "Language", value: "Swiss German", icon: "🗣️" },
  { label: "Canton", value: "Basel-Stadt", icon: "🏛️" },
  { label: "Key Employers", value: "Novartis, Roche, Lonza", icon: "🏢" },
];

const facts = [
  "Basel sits at the tri-border point of Switzerland, Germany, and France — Indian residents often live across the border in Freiburg or Mulhouse for cheaper rents.",
  "The Indian community is heavily concentrated in life sciences and pharma — Novartis and Roche are headquartered here and employ thousands of Indians.",
  "Art Basel (June) and Fasnacht (February/March) are Basel's biggest annual events.",
  "Basel has excellent tram connections into Germany and France — a BVB day pass covers all three countries in the tri-border area.",
];

export default function BaselPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Basel"
        subtitle="Basel's compact, walkable city punches above its weight — home to global pharma giants and a tight-knit Indian professional community."
        badge="City Guide"
        gradient="from-orange-600 to-amber-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Basel" },
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
