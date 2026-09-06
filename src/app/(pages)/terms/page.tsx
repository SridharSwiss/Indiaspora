import PageHeader from "@/components/ui/PageHeader";
import { FileText } from "lucide-react";

const GOLD = "#CEB07A";
const GOLD_RGB = "201,169,110";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        title="Terms of Use"
        subtitle="Please read these terms carefully before using Indiaspora."
        badge="Legal"
        gradient="from-slate-500 to-slate-400"
        breadcrumbs={[{ label: "Terms of Use" }]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        <div style={{ padding: "16px 20px", borderRadius: 12, background: `rgba(${GOLD_RGB},0.06)`, border: `1px solid rgba(${GOLD_RGB},0.20)`, marginBottom: 40, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <FileText size={20} style={{ color: GOLD, marginTop: 2, flexShrink: 0 }} />
          <p style={{ fontSize: 13, color: "var(--text-2)", margin: 0, lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            <strong style={{ color: "var(--text)" }}>Last updated: 1 September 2026.</strong> By accessing or using indiaspora.ch, you agree to be bound by these Terms of Use.
          </p>
        </div>

        <Section title="1. About Indiaspora">
          <p>Indiaspora Community Hub (&ldquo;Indiaspora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a community information platform for Indians living in or relocating to Switzerland, operated from Zurich. Contact: <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a>.</p>
        </Section>

        <Section title="2. Use of the Platform">
          <p>You may use Indiaspora for lawful, personal, non-commercial purposes. You agree not to:</p>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}>Submit false, misleading, or defamatory content.</li>
            <li style={{ marginBottom: 6 }}>Use the platform to spam, harass, or harm others.</li>
            <li style={{ marginBottom: 6 }}>Attempt to access restricted areas or systems.</li>
            <li>Reproduce or redistribute content without permission.</li>
          </ul>
        </Section>

        <Section title="3. Community Advice Disclaimer">
          <p>The &ldquo;Seek Advice&rdquo; feature provides <strong>community peer guidance only</strong> — it is not professional legal, financial, medical, immigration, or tax advice. You should always consult a licensed professional for important decisions. Indiaspora accepts no liability for actions taken based on community responses.</p>
        </Section>

        <Section title="4. Content Accuracy">
          <p>We strive to keep information on this platform accurate and up to date. However, we make no representations or warranties about the completeness, accuracy, or reliability of any content. Information may change without notice. Use it at your own risk and verify important facts with official sources.</p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>All content, design, and branding on Indiaspora is our intellectual property or used under licence. You may not copy, reproduce, or redistribute it without our written consent. Community-contributed content (event listings, reviews) remains the contributor&apos;s property; by submitting it, you grant us a non-exclusive licence to publish it.</p>
        </Section>

        <Section title="6. Third-Party Links">
          <p>The platform may link to external websites. We are not responsible for the content, accuracy, or privacy practices of third-party sites. Links do not constitute endorsement.</p>
        </Section>

        <Section title="7. Advertising">
          <p>Sponsored or promoted content will be clearly labelled. Indiaspora is not responsible for advertisers&apos; products, services, or claims. Advertising enquiries: <a href="/advertise" style={{ color: GOLD }}>Advertise With Us</a>.</p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>To the fullest extent permitted by Swiss law, Indiaspora shall not be liable for any indirect, incidental, or consequential damages arising from use of or inability to use this platform, or from any errors or omissions in its content.</p>
        </Section>

        <Section title="9. Changes to These Terms">
          <p>We may update these terms at any time. Continued use of the platform after changes are published constitutes acceptance of the updated terms. We will note the &ldquo;last updated&rdquo; date at the top of this page.</p>
        </Section>

        <Section title="10. Governing Law">
          <p>These terms are governed by Swiss law. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zurich, Switzerland.</p>
        </Section>

        <Section title="11. Contact">
          <p>Questions about these terms? Email <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a>.</p>
        </Section>

      </div>
    </div>
  );
}
