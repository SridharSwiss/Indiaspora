import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "IndiaSwiss privacy policy and cookie information.",
  alternates: { canonical: "https://indiaswiss.ch/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: 1 January 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">1. Who we are</h2>
        <p>IndiaSwiss Community Hub (&ldquo;IndiaSwiss&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the website at <strong>indiaswiss.ch</strong>. We are based in Switzerland and comply with the Swiss Federal Act on Data Protection (nDSG) and, where applicable, the EU General Data Protection Regulation (GDPR).</p>
        <p className="mt-2">Contact: <a href="mailto:hello@indiaswiss.ch" className="text-orange-400 hover:underline">hello@indiaswiss.ch</a></p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">2. Data we collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Email address (newsletter sign-up, contact form)</li>
          <li>Name (contact form, optional)</li>
          <li>Usage data via server logs (IP address, browser type, pages visited)</li>
          <li>Analytics data (anonymised, via privacy-respecting tools)</li>
        </ul>
        <p className="mt-3">We do not sell personal data to third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">3. How we use your data</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Send the newsletter you subscribed to</li>
          <li>Respond to enquiries</li>
          <li>Improve site performance and content</li>
          <li>Fulfil legal obligations</li>
        </ul>
      </section>

      <section className="mb-8" id="cookies">
        <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
        <p>We use only strictly necessary cookies required for the site to function. We do not use third-party advertising cookies. Analytics, if any, are configured to anonymise IP addresses.</p>
        <p className="mt-2">You may delete cookies at any time via your browser settings.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">5. Your rights</h2>
        <p>Under the nDSG and GDPR you have the right to access, rectify, erase, or restrict processing of your personal data. To exercise these rights, email <a href="mailto:hello@indiaswiss.ch" className="text-orange-400 hover:underline">hello@indiaswiss.ch</a>. You also have the right to lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">6. Data retention</h2>
        <p>Newsletter emails are retained until you unsubscribe. Contact form submissions are deleted after 12 months. Server logs are retained for 30 days.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">7. Changes to this policy</h2>
        <p>We may update this policy occasionally. Material changes will be announced on this page.</p>
      </section>
    </main>
  );
}
