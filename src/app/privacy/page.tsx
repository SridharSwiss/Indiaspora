import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Indiaspora",
  description: "How Indiaspora collects, uses, and protects your personal data — Swiss nDSG and EU GDPR compliant.",
  alternates: { canonical: "https://indiaspora.ch/privacy" },
};

const GOLD = "#CEB07A";

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mb-8">
      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 10, marginTop: 0, fontFamily: "'Playfair Display', Georgia, serif" }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", marginBottom: 6, fontFamily: "'Playfair Display', Georgia, serif" }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 32, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        Last updated: 1 September 2026
      </p>

      <div style={{ padding: "14px 18px", borderRadius: 12, background: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.22)", marginBottom: 36 }}>
        <p style={{ fontSize: 13, color: "var(--text-2)", margin: 0, lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Indiaspora operates from Zurich, Switzerland and complies with the Swiss Federal Act on Data Protection (nDSG) and, where applicable, the EU General Data Protection Regulation (GDPR). We do not sell personal data to third parties.
        </p>
      </div>

      <Section title="1. Who We Are">
        <p>Indiaspora Community Hub (&ldquo;Indiaspora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates <strong>indiaspora.ch</strong>, a community platform for Indians living in or relocating to Switzerland. Contact: <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a></p>
      </Section>

      <Section title="2. Data We Collect">
        <p style={{ marginBottom: 10 }}>We collect personal data only when you voluntarily provide it:</p>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 5 }}><strong>Seek Advice form:</strong> name, email, phone (optional), city/canton, topic, and your query.</li>
          <li style={{ marginBottom: 5 }}><strong>Advertise With Us form:</strong> name, email, phone, company name, website, campaign details.</li>
          <li style={{ marginBottom: 5 }}><strong>Event submission:</strong> event details and your contact information.</li>
          <li style={{ marginBottom: 5 }}><strong>Newsletter sign-up:</strong> email address only.</li>
          <li><strong>Usage data:</strong> anonymised analytics (page views, referral source). We do not use invasive tracking or advertising cookies.</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Data">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 5 }}>To respond to your advice enquiry or advertising request.</li>
          <li style={{ marginBottom: 5 }}>To send the newsletter (if subscribed — unsubscribe any time).</li>
          <li style={{ marginBottom: 5 }}>To review and publish community event submissions.</li>
          <li>To improve the platform using anonymised analytics.</li>
        </ul>
        <p style={{ marginTop: 10 }}>We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes. We do not use it for automated profiling or decision-making.</p>
      </Section>

      <Section title="4. Legal Basis for Processing">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 5 }}><strong>Your consent</strong> — provided via the checkbox on our forms. You may withdraw consent at any time.</li>
          <li style={{ marginBottom: 5 }}><strong>Legitimate interest</strong> — to operate the community platform and respond to enquiries.</li>
          <li><strong>Contractual necessity</strong> — for advertising engagements.</li>
        </ul>
      </Section>

      <Section title="5. Data Storage & Security">
        <p>Data is stored with Supabase (EU-hosted infrastructure). We apply industry-standard security measures including encryption at rest and in transit. Access to personal data is restricted to authorised administrators only.</p>
      </Section>

      <Section title="6. Data Retention">
        <p>Advice and advertising enquiries are retained for up to 2 years or until you request deletion, whichever comes first. Newsletter data is retained until you unsubscribe. Event submissions are retained while they remain relevant to the platform.</p>
      </Section>

      <Section title="7. Your Rights">
        <p style={{ marginBottom: 10 }}>Under Swiss nDSG and EU GDPR, you have the right to:</p>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 5 }}><strong>Access</strong> the personal data we hold about you.</li>
          <li style={{ marginBottom: 5 }}><strong>Rectify</strong> inaccurate or incomplete data.</li>
          <li style={{ marginBottom: 5 }}><strong>Erasure</strong> (&ldquo;right to be forgotten&rdquo;) — request deletion of your data.</li>
          <li style={{ marginBottom: 5 }}><strong>Data portability</strong> — receive your data in a machine-readable format.</li>
          <li style={{ marginBottom: 5 }}><strong>Object</strong> to processing based on legitimate interest.</li>
          <li><strong>Withdraw consent</strong> at any time without affecting prior lawful processing.</li>
        </ul>
        <p style={{ marginTop: 10 }}>To exercise any right, email <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a>. We respond within 30 days.</p>
      </Section>

      <Section title="8. Cookies" id="cookies">
        <p>We use only strictly necessary cookies required for the site to function (session management). We do not use advertising or third-party tracking cookies. You may disable cookies in your browser, though this may affect site functionality.</p>
      </Section>

      <Section title="9. Third-Party Services">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 5 }}><strong>Supabase</strong> — database (EU-hosted). <a href="https://supabase.com/privacy" style={{ color: GOLD }}>Privacy policy</a></li>
          <li style={{ marginBottom: 5 }}><strong>Vercel</strong> — website hosting (edge network, EU/US). <a href="https://vercel.com/legal/privacy-policy" style={{ color: GOLD }}>Privacy policy</a></li>
          <li><strong>Google Fonts</strong> — typeface delivery (may log IP). <a href="https://policies.google.com/privacy" style={{ color: GOLD }}>Privacy policy</a></li>
        </ul>
      </Section>

      <Section title="10. Contact & Complaints">
        <p>Privacy questions or to exercise your rights: <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a></p>
        <p style={{ marginTop: 8 }}>If you believe your rights have not been respected, you may lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC) at <strong>edoeb.admin.ch</strong>.</p>
      </Section>
    </main>
  );
}
