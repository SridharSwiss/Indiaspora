import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "IndiaSwiss Community Hub terms of use and disclaimer.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold text-white mb-2">Terms of Use</h1>
      <p className="text-white/40 text-sm mb-10">Last updated: June 2026</p>

      <div className="space-y-8 text-white/70 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p>By accessing IndiaSwiss Community Hub (&ldquo;the Site&rdquo;), you agree to these Terms of Use. If you do not agree, please do not use the Site.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">2. Purpose & Disclaimer</h2>
          <p>IndiaSwiss is a community information resource. Content is provided for general informational purposes only and does not constitute legal, financial, immigration, medical, or professional advice. Always verify information with official sources and qualified professionals.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">3. Accuracy of Information</h2>
          <p>We strive to keep information accurate and up to date. However, Swiss regulations, visa rules, and community listings change frequently. We make no warranty as to the accuracy, completeness, or currency of information on the Site. External links are provided for convenience and we are not responsible for third-party content.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">4. Intellectual Property</h2>
          <p>All original content on this Site is &copy; IndiaSwiss Community Hub 2026. You may share links to our pages but may not reproduce content without permission. Third-party trademarks and logos belong to their respective owners.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">5. Limitation of Liability</h2>
          <p>IndiaSwiss shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or reliance on information found on this Site.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">6. Governing Law</h2>
          <p>These terms are governed by the laws of Switzerland. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zurich, Switzerland.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
          <p>Questions about these terms? Contact us at <a href="mailto:hello@indiaswiss.ch" className="text-orange-400 hover:text-orange-300">hello@indiaswiss.ch</a></p>
        </section>
      </div>
    </div>
  );
}
