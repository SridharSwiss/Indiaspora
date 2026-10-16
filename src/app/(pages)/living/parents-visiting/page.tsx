import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Parents Visiting Switzerland from India — Schengen Visa Guide & Companion Finder",
  description: "Complete guide for Indian parents visiting Switzerland on a Schengen visa: Verpflichtungserklärung, travel insurance, VFS application, and connecting visiting parents with Indian seniors near Zurich, Basel, and Geneva.",
  keywords: ["Indian parents visiting Switzerland", "Schengen visa parents India Switzerland", "Verpflichtungserklärung Switzerland", "parents visitor insurance Switzerland", "6 month visitor visa Switzerland India", "VFS Global India Switzerland visa", "Indian seniors Zurich companionship", "parents Schengen health insurance"],
  openGraph: {
    title: "Indian Parents Visiting Switzerland — Schengen Visa Guide | IndiaSwiss",
    description: "Schengen visa checklist for Indian parents visiting Switzerland, plus connecting visiting seniors with Indian community companions near their postcode.",
  },
};

const parentsSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for a Schengen Visa for Indian Parents Visiting Switzerland",
  "description": "Step-by-step guide for Swiss-based Indians to sponsor their parents' Schengen visa for visiting Switzerland.",
  "step": [
    { "@type": "HowToStep", "name": "Get Verpflichtungserklärung (financial guarantee)", "text": "Have your Gemeinde notarise a Verpflichtungserklärung declaring you will cover all costs of your parents' stay in Switzerland. Cost ~CHF 30–60 at most Gemeinde offices." },
    { "@type": "HowToStep", "name": "Obtain Schengen travel insurance for parents", "text": "Purchase travel insurance with minimum €30,000 medical coverage for the full duration of the visit. Swiss providers: Helsana, Zurich Insurance, AXA, or TCS. Cost ~CHF 80–200 for 90 days." },
    { "@type": "HowToStep", "name": "Prepare the visa application documents", "text": "Required: Completed Schengen visa form, passport (valid 6 months beyond travel dates), 2 recent photos, bank statements (3–6 months), invitation letter, your Swiss residence permit copy, Verpflichtungserklärung, flight bookings, and hotel/accommodation proof." },
    { "@type": "HowToStep", "name": "Apply at VFS Global in India", "text": "Submit at VFS Global Switzerland application centres in New Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad, Ahmedabad, or Chandigarh. Apply 3 months before travel (maximum). Current processing time: 15–30 working days." },
  ]
};

export default function ParentsVisitingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(parentsSchema) }} />
      <div>
        <PageHeader
          title="Your Parents Visiting Switzerland"
          subtitle="Schengen visa checklist, travel insurance, VFS application guide, and connecting your visiting parents with the Indian community near their postcode."
          badge="👪 Parents Visiting"
          gradient="from-rose-500 to-pink-600"
        heroImage="/hero-travel.jpg"
        heroImageAlt="Indian parents visiting Switzerland travel guide"
        heroImagePosition="center 35%"
          breadcrumbs={[
            { label: "Living in Switzerland", href: "/living" },
            { label: "Parents Visiting" },
          ]}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Intro */}
          <div className="glass rounded-2xl p-6 mb-10 border border-rose-500/20">
            <p className="text-sm" style={{ color: "var(--text-2)" }}>
              <strong style={{ color: "var(--text)" }}>One of the most heartfelt challenges in the Swiss-Indian community:</strong> When parents visit for 3–6 months, they often feel isolated during weekdays while their children are at work. This guide covers both the visa process and how to connect visiting parents with Indian seniors nearby for morning walks, chai, and temple visits.
            </p>
          </div>

          {/* Visa Section */}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text)" }}>Schengen Visa Application Checklist</h2>
            <div className="glass rounded-2xl p-5 mb-5 border border-amber-500/20">
              <p className="text-sm text-amber-400 font-semibold mb-1">⏱️ Apply 3 months before travel — processing takes 15–30 working days</p>
              <p className="text-xs" style={{ color: "var(--text-2)" }}>VFS Switzerland Switzerland centres are in: New Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad, Ahmedabad, Chandigarh, Jalandhar, Pune, Surat, Nagpur, Kochi, Thiruvananthapuram, Indore, Bhopal, Jaipur, Lucknow, and Patna.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "1. Verpflichtungserklärung (Financial Guarantee)",
                  required: true,
                  detail: "This is your formal written guarantee to the Swiss authorities that you will cover all costs of your parents' visit — accommodation, food, healthcare, and repatriation if needed. It must be notarised (beglaubigt) by your local Gemeinde.",
                  tip: "Cost: ~CHF 30–60 at most Gemeinde offices. Make an appointment in advance. Bring your Swiss residence permit, passport, and proof of your parents' identity.",
                  icon: "📋"
                },
                {
                  title: "2. Schengen Travel Insurance (Minimum €30,000)",
                  required: true,
                  detail: "Your parents must have travel insurance covering the entire Schengen period with a minimum medical coverage of €30,000. This must be valid in all 26 Schengen countries.",
                  tip: "Recommended Swiss providers: Helsana (helsana.ch/travel), TCS Travel Insurance (tcs.ch), AXA, or Zurich Insurance. Cost: ~CHF 80–200 for 90 days. Print the policy certificate — it must be included in the visa application.",
                  icon: "🏥"
                },
                {
                  title: "3. Your Invitation Letter",
                  required: true,
                  detail: "Write a formal invitation letter stating: relationship, purpose of visit, dates, your address in Switzerland, and your commitment to cover all costs. Include your Swiss permit details.",
                  tip: "The letter must be signed and dated. Include a copy of your Swiss residence permit (front and back) and a copy of your employment contract or payslips to prove financial stability.",
                  icon: "✉️"
                },
                {
                  title: "4. Bank Statements (3–6 months)",
                  required: true,
                  detail: "Both your Swiss bank statements AND your parents' Indian bank statements showing sufficient funds. Swiss statements demonstrate your ability to sponsor; Indian statements show they are not economic migrants.",
                  tip: "Parents' Indian account should ideally show CHF 2,000–5,000 equivalent balance. Fixed deposits also help. Get bank statements stamped and signed by the bank.",
                  icon: "🏦"
                },
                {
                  title: "5. Accommodation Proof",
                  required: true,
                  detail: "If parents stay with you, provide a copy of your rental agreement showing your address, and an ownership proof or landlord confirmation that you may have guests.",
                  tip: "If staying in a hotel for any part of the trip, include hotel booking confirmation. A full itinerary with accommodation details for each city strengthens the application.",
                  icon: "🏠"
                },
                {
                  title: "6. Flight Itinerary",
                  required: true,
                  detail: "Provide a flight booking (reservation, not full ticket purchase) showing entry and exit from the Schengen area. Return flights must be booked.",
                  tip: "Use a 'dummy ticket' booking service (costs ~INR 500–1000) for the visa application. Alternatively, use hold/reserve option on Emirates, Swiss, or Lufthansa.",
                  icon: "✈️"
                },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold" style={{ color: "var(--text)" }}>{item.title}</h3>
                        {item.required && <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/15 text-red-400">Required</span>}
                      </div>
                      <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>{item.detail}</p>
                      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-emerald-400">
                        <strong>💡 Tip:</strong> {item.tip}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Parents Companion Section */}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>The "Parents in Town" Community — Morning Walks & Chai</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>When parents visit for months, weekday isolation is a real challenge. The IndiaSwiss community is building a network to connect visiting seniors by language and neighbourhood.</p>

            <div className="glass rounded-2xl p-6 border border-purple-500/20 mb-6">
              <h3 className="font-semibold mb-3" style={{ color: "var(--text)" }}>Popular gathering points by city</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  { city: "Zurich — Oerlikon / Glattbrugg", spots: "Oerlikon Park (Max-Bill-Platz), Leutschenpark, Glattpark near Wallisellen", lang: "Hindi, Tamil, Telugu, Gujarati" },
                  { city: "Zurich — Adliswil / Kilchberg", spots: "Sihl riverside walks, Adliswil Zentrum", lang: "Hindi, Gujarati, Marathi" },
                  { city: "Basel — Riehen / Kleinhüningen", spots: "Riehen village walks, Rhine riverside (Rheinuferweg)", lang: "Hindi, Tamil, Gujarati" },
                  { city: "Geneva — Carouge / Vernier", spots: "Parc Bertrand, Lac Léman promenade, Carouge market area", lang: "Hindi, Tamil, Kannada, Telugu" },
                  { city: "Lausanne — Renens / Ecublens", spots: "Parc de Valency, EPFL campus lakefront, Ouchy promenade", lang: "Hindi, Tamil, Telugu" },
                  { city: "Bern — Köniz / Ostermundigen", spots: "Bernese Rose Garden (Rosengarten), Aare riverside loop", lang: "Hindi, Punjabi, Gujarati" },
                ].map((loc) => (
                  <div key={loc.city} className="rounded-lg p-3 border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                    <div className="font-semibold text-purple-400 mb-1">{loc.city}</div>
                    <div className="text-xs mb-1" style={{ color: "var(--text-2)" }}>📍 {loc.spots}</div>
                    <div className="text-xs" style={{ color: "var(--text-3)" }}>🗣️ Languages: {loc.lang}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-5 border border-orange-500/20">
              <p className="text-sm" style={{ color: "var(--text-2)" }}>
                <strong style={{ color: "var(--text)" }}>Connect your parents with the community:</strong> Post in the <a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">IAGZ community groups</a>, local WhatsApp groups (ask at your nearest temple), or the <a href="https://www.indembassybern.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Embassy of India Berne</a> diaspora networks. Arulmihu Sivan Temple Glattbrugg and ISKCON Zurich regularly welcome visiting seniors.
              </p>
            </div>
          </section>

          {/* Healthcare for visitors */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Healthcare for Visiting Parents</h2>
            <div className="glass rounded-xl p-5">
              <ul className="space-y-3 text-sm" style={{ color: "var(--text-2)" }}>
                <li><strong style={{ color: "var(--text)" }}>Travel insurance is mandatory</strong> for any medical treatment in Switzerland. Without it, a single emergency room visit can cost CHF 2,000–10,000+.</li>
                <li><strong style={{ color: "var(--text)" }}>Pre-existing conditions:</strong> Declare all pre-existing conditions when purchasing insurance. Some policies exclude them — read the fine print.</li>
                <li><strong style={{ color: "var(--text)" }}>Indian pharmacies in Zurich:</strong> Most Indian medicine names have Swiss equivalents. Ask your GP or pharmacist for the generic name. India-specific brands (Zandu, Dabur) are available at Indian stores.</li>
                <li><strong style={{ color: "var(--text)" }}>English-speaking GPs:</strong> Most Swiss doctors in urban centres (Zurich, Basel, Geneva) speak English. Your GP can provide referrals to Hindi-speaking specialists when needed.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
