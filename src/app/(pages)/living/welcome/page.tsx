import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const steps = [
  {
    day: "Day 1–3",
    color: "from-orange-500 to-amber-500",
    tasks: [
      { title: "Get a Swiss SIM card", desc: "Sunrise, Salt or Swisscom available at airports and supermarkets (Coop, Migros). Prepaid or contract.", url: "https://www.salt.ch" },
      { title: "Get CHF cash", desc: "Withdraw CHF at the airport ATM (Bancomat). Credit cards widely accepted but CHF cash needed for some shops and markets." },
      { title: "Locate your Gemeinde", desc: "Your local municipality office (Gemeinde/Einwohnerkontrolle) is where you register. Find it on your city's official website.", url: "https://www.ch.ch/en/registration/" },
    ],
  },
  {
    day: "Day 4–14: Register at Gemeinde",
    color: "from-blue-500 to-indigo-600",
    tasks: [
      { title: "Anmeldung (Registration)", desc: "Register at your cantonal Einwohnerkontrolle within 14 days. Bring: passport, work contract or university admission letter, rental contract.", url: "https://www.ch.ch/en/registration/" },
      { title: "Receive your Ausländerausweis", desc: "After Gemeinde registration, you'll receive your residence permit card (L, B, C, or G permit) by post within 2–6 weeks.", url: "https://www.sem.admin.ch/en/" },
      { title: "Find your cantonal Migration Office", desc: "Each canton has its own Migrationsamt. They process your permit application after Gemeinde registration.", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/auslaender.html" },
    ],
  },
  {
    day: "Week 2–4: Health Insurance",
    color: "from-rose-500 to-pink-600",
    tasks: [
      { title: "Sign up for KVG/LAMal Health Insurance", desc: "Mandatory within 3 months. You'll be backdated to arrival date. Compare on priminfo.admin.ch (official) or comparis.ch.", url: "https://priminfo.admin.ch" },
      { title: "Choose your model", desc: "Standard, HMO (GP network) or Telmed (phone triage first). HMO/Telmed save 15–25% on premiums. Major insurers: CSS, Helsana, SWICA, Sanitas, Concordia.", url: "https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung.html" },
    ],
  },
  {
    day: "Week 2–6: Bank Account",
    color: "from-teal-500 to-cyan-600",
    tasks: [
      { title: "Open a Swiss Bank Account", desc: "PostFinance: easiest to open with just passport + Gemeinde registration confirmation. Neon (digital) also fast. ZKB for Zurich residents. UBS for comprehensive services.", url: "https://www.postfinance.ch/en/" },
      { title: "Set up IBAN and standing orders", desc: "Most rent, insurance and utility payments in Switzerland use IBAN bank transfers (not direct debit). Set up e-banking immediately.", url: "https://www.six-group.com/en/products-services/banking-services/payment-standardization/iban.html" },
    ],
  },
  {
    day: "Month 1–2: Essentials",
    color: "from-purple-500 to-violet-600",
    tasks: [
      { title: "Get a Half-Fare Card (Halbtax)", desc: "CHF 185/year. Halves the cost of all SBB trains, trams, buses and lake boats. Pays for itself after 4–5 trips. Buy at any SBB counter or online.", url: "https://www.sbb.ch/en/tickets-offers/tickets/all-offers/half-fare-travelcard.html" },
      { title: "Register children at school", desc: "Contact your Schulverwaltung (school administration) in your Gemeinde. Children are assigned to local public school by address. Free and excellent.", url: "https://www.ch.ch/en/education/" },
      { title: "Register for language courses", desc: "Learning German/French opens doors in Switzerland. Migros Klubschule and VHS (Volkshochschule) are affordable and widely available.", url: "https://www.klubschule.ch" },
      { title: "Notify Indian Embassy", desc: "Register yourself with the Embassy of India in Bern or the Consulate General in Zurich/Geneva. Important for emergencies, OCI/passport services.", url: "https://www.eoibern.gov.in" },
    ],
  },
];

export default function WelcomePage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Welcome to Switzerland"
        subtitle="Your step-by-step guide for the first weeks after arrival. Follow this checklist to get settled quickly and correctly."
        badge="✈️ New Arrival Guide"
        breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Welcome Guide" }]}
      />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        {steps.map((phase) => (
          <div key={phase.day} className="glass rounded-2xl overflow-hidden">
            <div className={`bg-gradient-to-r ${phase.color} px-6 py-3`}>
              <h2 className="font-bold text-white text-sm">{phase.day}</h2>
            </div>
            <div className="p-5 space-y-5">
              {phase.tasks.map((task) => (
                <div key={task.title} className="flex gap-4">
                  <div className={`w-2 rounded-full bg-gradient-to-b ${phase.color} shrink-0 mt-1 self-stretch min-h-[40px]`} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm mb-1">{task.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-2">{task.desc}</p>
                    {task.url && (
                      <a href={task.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors">
                        Official link <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="glass rounded-2xl p-5 sm:p-6 border border-orange-500/20">
          <h3 className="font-bold text-orange-400 text-sm mb-2">🇮🇳 Indian Government Contacts</h3>
          <div className="space-y-3 text-xs text-slate-400">
            <div><span className="text-white font-medium">Embassy of India, Bern</span> — <a href="https://www.eoibern.gov.in" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">eoibern.gov.in</a> | +41 31 351 1110</div>
            <div><span className="text-white font-medium">Consulate General of India, Zurich</span> — <a href="https://www.cgizurich.gov.in" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">cgizurich.gov.in</a> | +41 44 253 2800</div>
            <div><span className="text-white font-medium">Consulate General of India, Geneva</span> — <a href="https://www.cgigeneva.gov.in" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">cgigeneva.gov.in</a> | +41 22 906 8686</div>
            <div><span className="text-white font-medium">Emergency (Police/Fire/Ambulance)</span> — Call 112 (EU standard) or 117 (Police), 118 (Fire), 144 (Ambulance)</div>
          </div>
        </div>
      </section>
    </div>
  );
}
