import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Cookie Policy",
  description: "IndiaSwiss Community Hub privacy policy, cookie policy, and data protection information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-white/40 text-sm mb-10">Last updated: June 2026</p>

      <div className="space-y-8 text-white/70 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">1. Who We Are</h2>
          <p>IndiaSwiss Community Hub (&ldquo;IndiaSwiss&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a community information platform connecting Indians living in Switzerland. We are based in Zurich, Switzerland. Contact: <a href="mailto:hello@indiaswiss.ch" className="text-orange-400 hover:text-orange-300">hello@indiaswiss.ch</a></p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">2. Data We Collect</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Newsletter sign-ups:</strong> Email address only. Used solely to send our weekly community newsletter.</li>
            <li><strong className="text-white">Usage data:</strong> We use privacy-respecting analytics to understand how visitors use the site. No personally identifiable information is collected.</li>
            <li><strong className="text-white">Contact enquiries:</strong> If you contact us by email, we store your email and message to respond to you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">3. How We Use Your Data</h2>
          <p>We use your data only to: send newsletters you have subscribed to; respond to your enquiries; improve the website. We do not sell, rent, or share your personal data with third parties.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3" id="cookies">4. Cookies</h2>
          <p className="mb-3">We use essential cookies required to operate the website and optional analytics cookies to understand visitor behaviour. We do not use advertising or tracking cookies.</p>
          <div className="glass rounded-xl p-4 space-y-2">
            <p><span className="text-white font-medium">Essential cookies:</span> Required for the site to function. Cannot be disabled.</p>
            <p><span className="text-white font-medium">Analytics cookies:</span> Optional. Help us understand how pages are used. No personal data stored.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">5. Your Rights (GDPR / nDSG)</h2>
          <p>Under Swiss data protection law (nDSG) and EU GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:hello@indiaswiss.ch" className="text-orange-400 hover:text-orange-300">hello@indiaswiss.ch</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">6. External Links</h2>
          <p>This site links to third-party websites (government portals, association websites, etc.). We are not responsible for the privacy practices of those sites.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
          <p>Questions about this policy? Email <a href="mailto:hello@indiaswiss.ch" className="text-orange-400 hover:text-orange-300">hello@indiaswiss.ch</a></p>
        </section>
      </div>
    </div>
  );
}
