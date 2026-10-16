import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Convert Indian Driving License in Switzerland — Kontrollfahrt Guide",
  description: "How to convert your Indian driving license in Switzerland. The Kontrollfahrt (practical driving test) must be passed within 12 months of arrival. One attempt only — step-by-step guide for Zurich, Basel, Geneva, and Bern.",
  keywords: ["convert Indian driving license Switzerland", "Kontrollfahrt Switzerland Indians", "Indian driving license Switzerland 12 months", "Swiss driving test Strassenverkehrsamt", "driving instructor Zurich English Hindi", "Indian license exchange Switzerland", "Kontrollfahrt guide", "Führerausweis India Switzerland"],
  openGraph: {
    title: "Convert Indian Driving License in Switzerland | IndiaSwiss",
    description: "Complete guide to converting your Indian driving license via the Kontrollfahrt — one attempt, 12-month deadline.",
  },
};

const drivingSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert an Indian Driving License in Switzerland (Kontrollfahrt)",
  "description": "Step-by-step guide for Indian nationals to convert their Indian driving license to a Swiss Führerausweis via the mandatory Kontrollfahrt practical driving test.",
  "totalTime": "PT2M",
  "step": [
    { "@type": "HowToStep", "name": "Verify your 12-month deadline", "text": "Your 12-month period starts from your official Swiss arrival/residence date (Anmeldedatum). Check your Anmeldung confirmation letter for this date. After 12 months, you must pass both theory and practical tests like any new driver." },
    { "@type": "HowToStep", "name": "Get your Indian license officially translated", "text": "Translate your Indian driving license into German, French, or Italian via a sworn translator (vereidigter Übersetzer). Do NOT use Google Translate." },
    { "@type": "HowToStep", "name": "Take 5–8 driving lessons with a local instructor", "text": "The Kontrollfahrt tests your knowledge of Swiss road rules and local test routes. An instructor familiar with your Strassenverkehrsamt test routes is essential." },
    { "@type": "HowToStep", "name": "Apply at your canton Strassenverkehrsamt", "text": "Submit your application at the cantonal Strassenverkehrsamt (Road Traffic Office). Bring: Indian driving license (original + translation), passport, residence permit, passport photos, and application fee (~CHF 150–220)." },
    { "@type": "HowToStep", "name": "Pass the Kontrollfahrt (one attempt only)", "text": "A designated examiner drives with you for 45–60 minutes. You are assessed on Swiss road rules, right-of-way, roundabouts, highway driving, and parking. You get exactly ONE attempt." },
  ]
};

export default function DrivingLicensePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(drivingSchema) }} />
      <div>
        <PageHeader
          title="Converting Your Indian Driving License in Switzerland"
          subtitle="Everything you need to know about the Kontrollfahrt — the mandatory practical driving test you must pass within 12 months of arrival."
          badge="🚗 Driving Guide"
          gradient="from-blue-500 to-indigo-600"
          breadcrumbs={[
            { label: "Living in Switzerland", href: "/living" },
            { label: "Driving License Conversion" },
          ]}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass rounded-2xl p-5 mb-10 border border-red-500/30">
            <p className="text-sm font-semibold text-red-400 mb-1">⚠️ Critical Deadline — 12 Months, One Attempt</p>
            <p className="text-sm" style={{ color: "var(--text-2)" }}>
              You have exactly <strong>12 months from your official Swiss arrival date</strong> (your Anmeldedatum) to convert your Indian driving license. You get <strong>only one attempt</strong> at the Kontrollfahrt. After 12 months without conversion, you must start the full Swiss licensing process from scratch (theory + practical), which takes 6–12 months and costs CHF 2,000+.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              { step: "1", title: "Verify Your 12-Month Deadline", content: "Your 12-month period starts from your Anmeldedatum (registration date at your Gemeinde). Check your Anmeldung confirmation letter. If you registered at Gemeinde on 15 March, your deadline is 14 March the following year.", tip: "Set a phone reminder 6 months and 9 months after arrival to ensure you start preparation on time." },
              { step: "2", title: "Get Your Indian License Officially Translated", content: "Your Indian driving license must be translated into German (for ZH/BS/BE/AG/ZG), French (for GE/VD), or Italian (TI) by a sworn translator (vereidigter Übersetzer). Translation costs ~CHF 80–150.", tip: "Some Strassenverkehrsamt offices accept English translations in addition to the official languages — call ahead to confirm." },
              { step: "3", title: "Take 5–8 Driving Lessons First", content: "The Kontrollfahrt is not trivial. Swiss road rules differ significantly from India — priority from the right (Rechtsvortritt), roundabout rules, right-of-way at unmarked intersections, speed limits (50/80/120 km/h), and motorway entry/exit protocol.", tip: "Ask for an instructor who knows the specific test routes used by your local Strassenverkehrsamt. Practice the Kontrollfahrt route beforehand." },
              { step: "4", title: "Submit Application at Strassenverkehrsamt", content: "Bring to your canton's Strassenverkehrsamt: Indian driving license (original), certified German translation, passport, Swiss residence permit (Aufenthaltsbewilligung), biometric passport photos (2), and the application fee (~CHF 150–220 depending on canton).", tip: "In Zurich: strassenverkehrsamt.zh.ch | In Geneva: ge.ch/deen | In Basel: bl.ch/motorfahrzeugkontrolle | In Bern: pom.be.ch/strassenverkehrs-und-schifffahrtsamt" },
              { step: "5", title: "Pass the Kontrollfahrt", content: "A cantonal examiner accompanies you for 45–60 minutes of driving in local traffic. You are assessed on: Swiss priority rules, roundabouts, motorway merging, parking, and safe driving behaviour. The examiner does not give instructions — you drive as you would normally.", tip: "Remain calm. The examiner has seen hundreds of Indian drivers. Indicate every lane change, check mirrors, and drive at the correct speed limit. Overconfidence (driving 'like in India') is the most common cause of failure." },
            ].map((s) => (
              <div key={s.step} className="glass rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm flex items-center justify-center">{s.step}</span>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: "var(--text)" }}>{s.title}</h3>
                    <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>{s.content}</p>
                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-emerald-400">
                      <strong>💡 Tip:</strong> {s.tip}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-6 border border-blue-500/20">
            <h3 className="font-semibold mb-3" style={{ color: "var(--text)" }}>Canton Strassenverkehrsamt Contacts</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { canton: "Zurich (ZH)", url: "https://www.strassenverkehrsamt.zh.ch", city: "Zurich" },
                { canton: "Geneva (GE)", url: "https://www.ge.ch/deen", city: "Geneva" },
                { canton: "Basel-Stadt (BS)", url: "https://www.kantonales-laboratorium.bs.ch", city: "Basel" },
                { canton: "Bern (BE)", url: "https://www.pom.be.ch/strassenverkehrs-und-schifffahrtsamt", city: "Bern" },
                { canton: "Vaud (VD)", url: "https://www.vd.ch/tc", city: "Lausanne" },
                { canton: "Zug (ZG)", url: "https://www.zg.ch/behoerden/sicherheitsdirektion/strassenverkehrsamt", city: "Zug" },
              ].map((c) => (
                <a key={c.canton} href={c.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg border hover:border-blue-400 transition-colors" style={{ borderColor: "var(--border)" }}>
                  <span className="text-blue-400">🏛️</span>
                  <div>
                    <div className="font-medium" style={{ color: "var(--text)" }}>{c.canton}</div>
                    <div className="text-xs" style={{ color: "var(--text-3)" }}>{c.url.replace("https://www.", "")}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
