import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Welcome to Switzerland — First Steps for Indians",
  description: "Step-by-step arrival guide — Gemeinde registration, health insurance, bank account, and SIM card in your first weeks.",
  openGraph: {
    title: "Welcome to Switzerland — First Steps for Indians | IndiaSwiss",
    description: "Step-by-step arrival guide — Gemeinde registration, health insurance, bank account, and SIM card in your first weeks.",
  },
};

const steps = [
  {
    step: "1",
    title: "Register at the Gemeinde",
    description:
      "Within 14 days of arrival, register at your local Gemeinde (municipality). Bring your passport, visa/permit, rental contract, and employment contract. You'll receive a Anmeldebestätigung (registration confirmation).",
    icon: "🏛️",
  },
  {
    step: "2",
    title: "Get Health Insurance",
    description:
      "Health insurance (Krankenkasse) is mandatory in Switzerland. You have 3 months from arrival to choose a provider. Compare premiums at priminfo.admin.ch. Popular options: CSS, Helsana, Swica, Sanitas.",
    icon: "🏥",
  },
  {
    step: "3",
    title: "Open a Bank Account",
    description:
      "You'll need a Swiss bank account for salary deposits and rent payments. PostFinance is the easiest to open (post office). Neon and Yuh are good digital alternatives with English-language apps.",
    icon: "🏦",
  },
  {
    step: "4",
    title: "Get a Swiss SIM Card",
    description:
      "Sunrise, Salt, and Swisscom are the main operators. Salt often has the best value plans. You can buy SIMs at their shops with your passport and residence permit.",
    icon: "📱",
  },
  {
    step: "5",
    title: "Set Up Your Transport Pass",
    description:
      "Switzerland's public transport is world-class. Get a Half-Fare Travelcard (Halbtax) for 185 CHF/year to halve all ticket prices. For heavy commuters, the GA (General Abonnement) covers all trains, buses, and trams.",
    icon: "🚆",
  },
  {
    step: "6",
    title: "Register with the Indian Embassy",
    description:
      "Register with the Embassy of India in Bern or the Consulate in Geneva as an Indian national resident in Switzerland. This ensures you receive consular services and emergency assistance.",
    icon: "🇮🇳",
  },
];

const tips = [
  "Learn at least basic greetings in the local language (German/French/Italian) — it makes daily life much smoother.",
  "Swiss supermarkets close early (usually 8–9 pm) and most shops are closed on Sundays.",
  "Recycling is taken very seriously — familiarise yourself with the local waste-sorting rules early.",
  "Noise rules (Ruhezeit) apply in most residential buildings — avoid loud activities after 10 pm and on Sundays.",
  "Join local Indian community groups on Facebook and WhatsApp — they're invaluable for settling in.",
];

export default function WelcomePage() {
  return (
    <div>
      <PageHeader
        title="Welcome to Switzerland"
        subtitle="Your first weeks in Switzerland can feel overwhelming. This step-by-step guide covers everything you need to do to settle in smoothly."
        badge="Getting Started"
        gradient="from-green-500 to-emerald-500"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Welcome Guide" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Your First 6 Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="glass card-hover rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-lg flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xs text-green-400 font-medium mb-1">Step {s.step}</p>
                    <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-white/60">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Practical Tips from the Community</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
