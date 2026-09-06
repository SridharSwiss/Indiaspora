import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Indiaspora",
  description: "Terms of use, disclaimer, and community advice policy for Indiaspora.",
  alternates: { canonical: "https://indiaspora.ch/terms" },
};

const GOLD = "#CEB07A";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 10, marginTop: 0, fontFamily: "'Playfair Display', Georgia, serif" }}>
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
    <main className="max-w-3xl mx-auto px-4 py-24">
      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", marginBottom: 6, fontFamily: "'Playfair Display', Georgia, serif" }}>
        Terms of Use
      </h1>
      <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 36, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        Last updated: 1 September 2026
      </p>

      <Section title="1. Acceptance">
        <p>By accessing indiaspora.ch you agree to these terms. If you do not agree, please do not use the site.</p>
      </Section>

      <Section title="2. Community Advice Disclaimer">
        <p>The &ldquo;Seek Advice&rdquo; feature provides <strong>community peer guidance only</strong> — not professional legal, financial, medical, immigration, or tax advice. Always consult a licensed professional for important decisions. Indiaspora accepts no liability for actions taken based on community responses.</p>
      </Section>

      <Section title="3. Content Accuracy">
        <p>Indiaspora provides community information in good faith. We do not guarantee the accuracy, completeness, or timeliness of listings, guides, or third-party content. Always verify critical information directly with the relevant organisation or official source.</p>
      </Section>

      <Section title="4. Acceptable Use">
        <p style={{ marginBottom: 10 }}>You agree not to:</p>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 5 }}>Submit false, misleading, or defamatory content.</li>
          <li style={{ marginBottom: 5 }}>Use the platform to spam, harass, or harm others.</li>
          <li style={{ marginBottom: 5 }}>Attempt to access restricted areas or systems.</li>
          <li>Reproduce or redistribute content without written permission.</li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p>All original content on this site is &copy; 2026 Indiaspora Community Hub. Community-contributed content (event listings) remains the contributor&apos;s property; by submitting it, you grant us a non-exclusive licence to publish it. You may share links but may not reproduce content without written permission.</p>
      </Section>

      <Section title="6. Advertising">
        <p>Sponsored or promoted content will be clearly labelled. Indiaspora is not responsible for advertisers&apos; products, services, or claims. Advertising enquiries: <a href="/advertise" style={{ color: GOLD }}>Advertise With Us</a>.</p>
      </Section>

      <Section title="7. External Links">
        <p>We link to third-party websites as a convenience. Indiaspora has no control over their content and accepts no liability for them. Linking does not constitute endorsement.</p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>To the fullest extent permitted by Swiss law, Indiaspora is not liable for any direct or indirect damages arising from your use of this site, including reliance on community advice or third-party listings.</p>
      </Section>

      <Section title="9. Changes to These Terms">
        <p>We may update these terms at any time. Continued use of the platform after changes are published constitutes acceptance. The &ldquo;last updated&rdquo; date at the top reflects the most recent revision.</p>
      </Section>

      <Section title="10. Governing Law">
        <p>These terms are governed by Swiss law. Any disputes shall be subject to the exclusive jurisdiction of the courts of the Canton of Zurich, Switzerland.</p>
      </Section>

      <Section title="11. Contact">
        <p>Questions about these terms: <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a></p>
      </Section>
    </main>
  );
}
