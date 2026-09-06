import PageHeader from "@/components/ui/PageHeader";
import { Shield } from "lucide-react";

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

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="How Indiaspora collects, uses, and protects your personal data — in compliance with Swiss nDSG and EU GDPR principles."
        badge="Legal"
        gradient="from-slate-500 to-slate-400"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        <div style={{ padding: "16px 20px", borderRadius: 12, background: `rgba(${GOLD_RGB},0.06)`, border: `1px solid rgba(${GOLD_RGB},0.20)`, marginBottom: 40, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <Shield size={20} style={{ color: GOLD, marginTop: 2, flexShrink: 0 }} />
          <p style={{ fontSize: 13, color: "var(--text-2)", margin: 0, lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            <strong style={{ color: "var(--text)" }}>Last updated: 1 September 2026.</strong> This policy describes how Indiaspora Community Hub (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal data collected via indiaspora.ch and its associated services.
          </p>
        </div>

        <Section title="1. Who We Are">
          <p>Indiaspora Community Hub is a community platform operated from Zurich, Switzerland, connecting Indians living in or relocating to Switzerland. Contact: <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a></p>
        </Section>

        <Section title="2. What Data We Collect">
          <p style={{ marginBottom: 12 }}>We collect personal data only when you voluntarily provide it, including via our forms:</p>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}><strong>Seek Advice form:</strong> name, email, phone (optional), city/canton, topic, and your query.</li>
            <li style={{ marginBottom: 6 }}><strong>Advertise With Us form:</strong> name, email, phone, company, website, campaign details.</li>
            <li style={{ marginBottom: 6 }}><strong>Event submission form:</strong> event details and your contact information.</li>
            <li style={{ marginBottom: 6 }}><strong>Newsletter sign-up:</strong> email address only.</li>
            <li><strong>Usage data:</strong> We may collect anonymised analytics (page views, referral source) via privacy-respecting tools. We do not use invasive tracking.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}>To respond to your advice enquiry or advertising request.</li>
            <li style={{ marginBottom: 6 }}>To send the newsletter if you subscribed (you can unsubscribe at any time).</li>
            <li style={{ marginBottom: 6 }}>To review and publish community event submissions.</li>
            <li>To improve the platform using anonymised analytics.</li>
          </ul>
          <p style={{ marginTop: 12 }}>We do <strong>not</strong> sell your data to third parties. We do not use it for automated profiling or decision-making.</p>
        </Section>

        <Section title="4. Legal Basis for Processing">
          <p>Processing is based on:</p>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}><strong>Your consent</strong> — provided via the checkbox on our forms. You may withdraw consent at any time.</li>
            <li style={{ marginBottom: 6 }}><strong>Legitimate interest</strong> — to operate the community platform and respond to enquiries.</li>
            <li><strong>Contractual necessity</strong> — for advertising engagements.</li>
          </ul>
        </Section>

        <Section title="5. Data Storage & Security">
          <p>Data is stored securely with Supabase (infrastructure hosted in the EU/EEA). We apply industry-standard security measures. Access to personal data is restricted to authorised administrators.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>Advice and advertising enquiries are retained for up to 2 years or until you request deletion, whichever comes first. Newsletter data is retained until you unsubscribe. Event submissions are retained as long as they are relevant to the platform.</p>
        </Section>

        <Section title="7. Your Rights">
          <p style={{ marginBottom: 12 }}>Under Swiss nDSG and EU GDPR principles, you have the right to:</p>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}><strong>Access</strong> the personal data we hold about you.</li>
            <li style={{ marginBottom: 6 }}><strong>Rectify</strong> inaccurate data.</li>
            <li style={{ marginBottom: 6 }}><strong>Erasure</strong> — request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
            <li style={{ marginBottom: 6 }}><strong>Data portability</strong> — receive your data in a machine-readable format.</li>
            <li style={{ marginBottom: 6 }}><strong>Object</strong> to processing based on legitimate interest.</li>
            <li><strong>Withdraw consent</strong> at any time without affecting prior lawful processing.</li>
          </ul>
          <p style={{ marginTop: 12 }}>To exercise any right, email <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a>. We will respond within 30 days.</p>
        </Section>

        <Section title="8. Cookies" id="cookies">
          <p>We use only strictly necessary cookies required for the site to function. We do not use advertising or tracking cookies. You may disable cookies in your browser settings, though this may affect site functionality.</p>
        </Section>

        <Section title="9. Third-Party Services">
          <p>We use the following third-party services, each with their own privacy policies:</p>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 6 }}><strong>Supabase</strong> — database and backend (EU-hosted).</li>
            <li style={{ marginBottom: 6 }}><strong>Vercel</strong> — website hosting (edge network, EU/US).</li>
            <li><strong>Google Fonts</strong> — typeface delivery (may log IP; see Google&apos;s privacy policy).</li>
          </ul>
        </Section>

        <Section title="10. Contact & Complaints">
          <p>For any privacy concerns or to exercise your rights: <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a>.</p>
          <p style={{ marginTop: 8 }}>If you believe your rights have not been respected, you have the right to lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC) at <strong>edoeb.admin.ch</strong>.</p>
        </Section>

      </div>
    </div>
  );
}
