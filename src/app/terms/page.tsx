import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "IndiaSwiss terms of use and disclaimer.",
  alternates: { canonical: "https://indiaswiss.ch/terms" },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-8">Terms of Use</h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: 1 January 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance</h2>
        <p>By accessing indiaswiss.ch you agree to these terms. If you do not agree, please do not use the site.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">2. Content and accuracy</h2>
        <p>IndiaSwiss provides community information in good faith. We do not guarantee the accuracy, completeness, or timeliness of third-party listings (restaurants, associations, services). Always verify critical information directly with the relevant organisation.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">3. External links</h2>
        <p>We link to third-party websites as a convenience. IndiaSwiss has no control over their content and accepts no liability for them. Linking does not constitute endorsement.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual property</h2>
        <p>All original content on this site is &copy; 2026 IndiaSwiss Community Hub. You may share links but may not reproduce content without written permission.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of liability</h2>
        <p>To the fullest extent permitted by Swiss law, IndiaSwiss is not liable for any direct or indirect damages arising from your use of this site.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">6. Governing law</h2>
        <p>These terms are governed by Swiss law. Any disputes shall be subject to the jurisdiction of the courts of the Canton of Zurich, Switzerland.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
        <p>Questions about these terms: <a href="mailto:hello@indiaswiss.ch" className="text-orange-400 hover:underline">hello@indiaswiss.ch</a></p>
      </section>
    </main>
  );
}
