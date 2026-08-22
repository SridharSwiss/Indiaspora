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
    title: "Register at the Gemeinde (within 14 days)",
    description:
      "You must register at your local Gemeinde (municipality / commune) within 14 days of arrival. Bring your passport, residence permit (or visa), rental contract, and employment contract. You'll receive an Anmeldebestätigung (registration confirmation). Your AHV/AVS social security number is assigned automatically at this point or by your employer.",
    icon: "🏛️",
  },
  {
    step: "2",
    title: "Get Health Insurance (within 3 months)",
    description:
      "Mandatory Swiss health insurance (Krankenkasse / Grundversicherung) must be arranged within 3 months of arrival — it is backdated to your arrival date. Compare premiums by canton at priminfo.admin.ch (official Federal Office of Public Health tool) or comparis.ch. Popular providers: CSS, Helsana, Swica, Sanitas. Monthly premiums range from CHF 350–700 for adults depending on canton and deductible.",
    icon: "🏥",
  },
  {
    step: "3",
    title: "Open a Bank Account",
    description:
      "You'll need a Swiss bank account for salary deposits, rent, and utility payments. Neon and Yuh are the easiest digital options — open entirely via app with your permit and passport. PostFinance is the traditional go-to, with post office branches everywhere. UBS is good for full-service banking. Bring your permit, passport, and (if possible) a rental contract.",
    icon: "🏦",
  },
  {
    step: "4",
    title: "Get a Swiss SIM Card",
    description:
      "Sunrise, Salt, and Swisscom are the three main mobile operators. Salt often offers the most competitive plans for new arrivals. Aldi Talk, Migros Natel, and M-Budget Mobile offer budget MVNO options. Buy SIMs at their shops or online with your passport and residence permit.",
    icon: "📱",
  },
  {
    step: "5",
    title: "Set Up Your Transport Pass",
    description:
      "Switzerland's public transport (SBB trains, city trams, buses) is world-class. Get a Half-Fare Travelcard (Halbtax) for CHF 190/year — it halves the price of all tickets nationwide and pays for itself within a few trips. Heavy commuters should consider the GA Travelcard for unlimited travel. Buy via the SBB app (sbb.ch) or any SBB counter.",
    icon: "🚆",
  },
  {
    step: "6",
    title: "Register with the Indian Embassy",
    description:
      "Register as an Indian national residing in Switzerland with the Embassy of India in Bern (Thunstrasse 5, 3005 Bern; Tel: +41 31 350 11 10) or the Consulate General of India in Geneva. Registration ensures you can receive consular services, emergency assistance, and official notifications. Online registration is available at indembassybern.gov.in.",
    icon: "🇮🇳",
  },
];

const tips = [
  "Learn at least basic greetings in the local language (German: Grüezi / Hallo; French: Bonjour / Merci) — it genuinely helps in daily interactions and is appreciated by locals.",
  "Swiss supermarkets (Migros, Coop) close at 8–9 pm on weekdays and 6–8 pm on Saturdays. Most shops are closed on Sundays — plan your grocery shopping accordingly.",
  "Recycling rules are strict and varied by Gemeinde. Coloured bags (Kehrichtsack) must be used for general waste in most German-speaking cantons and are purchased in supermarkets. Familiarise yourself with your local sorting rules early.",
  "Noise rules (Ruhezeit) are strictly observed in residential buildings — avoid loud activities after 10 pm, before 7 am, and during Sundays and public holidays. This includes running washing machines in some buildings.",
  "Join local Indian community groups on Facebook, WhatsApp, and platforms like Glocals.com — fellow Indians are invaluable for settling-in advice, local deals, and a social network.",
  "Get an Halbtax (Half-Fare Travelcard) before your first big train journey — it pays for itself within one or two inter-city return trips.",
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

        <div className="glass rounded-2xl p-6 border border-green-500/20">
          <h3 className="text-base font-semibold text-green-400 mb-2">Indian Embassy & Consulate Contacts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70">
            <div>
              <p className="font-semibold text-white mb-1">Embassy of India, Bern</p>
              <p>Thunstrasse 5, 3005 Bern</p>
              <p>Tel: +41 31 350 11 10</p>
              <p className="text-green-400">indembassybern.gov.in</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Consulate General of India, Geneva</p>
              <p>9 rue du Valais, 1202 Geneva</p>
              <p>Tel: +41 22 906 86 86</p>
              <p className="text-green-400">cgigeneva.gov.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
