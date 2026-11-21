import type { Metadata } from "next";
import DeleteAccount from "./DeleteAccount";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "Delete your Indiaspora account and personal data, on the website or in the Android app.",
};

export default function DeleteAccountPage() {
  return (
    <section style={{ maxWidth: 680, margin: "0 auto", padding: "120px 16px 80px" }}>
      <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2.2rem", color: "var(--text)", marginBottom: 16 }}>Delete your account</h1>
      <p style={{ color: "var(--text-2)", lineHeight: 1.7, marginBottom: 12 }}>
        You can delete your Indiaspora account at any time, here or in the Indiaspora Android app (Me tab &rarr; Delete my account).
      </p>
      <p style={{ color: "var(--text-2)", lineHeight: 1.7, marginBottom: 8 }}>Deleting your account removes, immediately and permanently:</p>
      <ul style={{ color: "var(--text-2)", lineHeight: 1.8, paddingLeft: 20, marginBottom: 12 }}>
        <li>your login and member profile</li>
        <li>your newsletter subscription</li>
        <li>your login history and any listings you created</li>
      </ul>
      <p style={{ color: "var(--text-2)", lineHeight: 1.7, marginBottom: 24 }}>
        Website usage statistics are kept without any link to you. Messages you sent through our forms (advice, contact, event submissions) are kept for up to 2 years as described in our <a href="/privacy" style={{ color: "var(--in)" }}>privacy policy</a>; ask us via the <a href="/contact" style={{ color: "var(--in)" }}>contact form</a> to remove them sooner.
      </p>
      <DeleteAccount />
    </section>
  );
}
