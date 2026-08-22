import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { Plane, Home, Heart, GraduationCap, Building2, Train, Scale, Languages } from "lucide-react";

const guides = [
  { icon: Plane, label: "Welcome Guide", href: "/living/welcome", desc: "First steps — registration, permits, SIM card, bank account in your first 2 weeks", color: "from-orange-500 to-amber-500" },
  { icon: Home, label: "Housing & Real Estate", href: "/living/housing", desc: "Finding an apartment, required documents, rights as a tenant and useful portals", color: "from-blue-500 to-indigo-600" },
  { icon: Heart, label: "Healthcare", href: "/living/healthcare", desc: "Mandatory health insurance, choosing your insurer, doctors and emergencies", color: "from-rose-500 to-pink-600" },
  { icon: GraduationCap, label: "Education & Schools", href: "/living/education", desc: "Swiss school system, international schools, universities and Indian weekend schools", color: "from-purple-500 to-violet-600" },
  { icon: Building2, label: "Banking & Finance", href: "/living/banking", desc: "Opening a bank account, digital banks, sending money to India and taxes", color: "from-teal-500 to-cyan-600" },
  { icon: Train, label: "Transport", href: "/living/transport", desc: "SBB trains, local networks, Half-Fare card, GA Travelcard and travel apps", color: "from-green-500 to-emerald-600" },
  { icon: Scale, label: "Legal & Immigration", href: "/living/legal", desc: "Residence permits, OCI cards, naturalization, family reunification and work permits", color: "from-amber-500 to-orange-600" },
  { icon: Languages, label: "Language Learning", href: "/living/language", desc: "German, French or Italian — courses, apps, integration classes and community practice", color: "from-cyan-500 to-blue-600" },
];

export default function LivingPage() {
  return (
    <div>
      <PageHeader
        title="Living in Switzerland"
        subtitle="Your complete guide to every aspect of life in Switzerland — from arriving with a suitcase to raising a family and planning your future."
        badge="🇨🇭 The Complete Guide"
        gradient="from-blue-500 to-indigo-600"
        breadcrumbs={[{ label: "Living in Switzerland" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {guides.map((g) => (
            <Link key={g.label} href={g.href} className="glass rounded-2xl p-6 card-hover group block">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${g.color} mb-4`}>
                <g.icon className="w-5 h-5" style={{ color: "var(--text)" }} />
              </div>
              <h2 className="font-bold text-base mb-2 group-hover:text-orange-400 transition-colors leading-snug" style={{ color: "var(--text)" }}>{g.label}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{g.desc}</p>
            </Link>
          ))}
        </div>

        {/* Quick facts */}
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-5" style={{ color: "var(--text)" }}>Key Facts for Indian Residents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              ["🗺 Register at Gemeinde", "Within 14 days of moving to a new address — mandatory for all residents"],
              ["🏥 Health Insurance", "Mandatory within 3 months. Fine: CHF 50-300/month for late enrolment"],
              ["💳 Bank Account", "PostFinance and Neon easiest to open for new arrivals without Swiss salary history"],
              ["🚄 Half-Fare Card", "CHF 185/year. Halves the price of all SBB, tram, bus and lake boat tickets"],
              ["📋 Betreibungsauszug", "Debt register extract — needed for apartment rentals. Free from your Gemeindeverwaltung"],
              ["🌐 Official Info Portal", "ch.ch is the official Swiss government portal for residents — available in English"],
            ].map(([title, desc]) => (
              <div key={title as string} className="flex gap-3">
                <div className="text-lg">{(title as string).split(' ')[0]}</div>
                <div>
                  <div className="font-medium text-sm" style={{ color: "var(--text)" }}>{(title as string).substring(2)}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-2)" }}>{desc as string}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
