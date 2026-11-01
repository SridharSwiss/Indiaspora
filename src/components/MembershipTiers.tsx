"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { TIERS } from "@/lib/tiers";

/** Membership tiers with payment — shown only to visitors who are not signed in. */
export default function MembershipTiers() {
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    createClient().auth.getUser().then(({ data }) => setSignedIn(!!data.user)).catch(() => setSignedIn(false));
  }, []);

  if (signedIn !== false) return null;

  async function pay(tierId: string) {
    setMsg("");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) { setMsg("Enter a valid email address first."); return; }
    setBusy(tierId);
    try {
      const res = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tier: tierId, email }) });
      const data = await res.json();
      if (res.ok && data.url) { window.location.href = data.url; return; }
      setMsg(data.error === "payments_not_configured"
        ? "Online payment is being switched on. Create your free account now and choose this tier; we will send you the payment details."
        : "Payment could not be started. Please try again or create your account first.");
    } catch { setMsg("Network error. Please try again."); }
    setBusy(null);
  }

  return (
    <section id="membership" style={{ minWidth: 0 }}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Join the community — choose a membership</h2>
      <p className="mb-6 text-sm" style={{ color: "var(--text-2)" }}>
        Free to start. Paid tiers renew yearly and support the platform. Prices in CHF.
      </p>
      <div className="mb-4 max-w-sm">
        <label htmlFor="mt-email" className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: "var(--text-3)" }}>Your email (for payment receipt)</label>
        <input id="mt-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
          className="w-full rounded-xl px-3 py-2 text-sm" style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text)" }} />
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {TIERS.map((t) => (
          <div key={t.id} className="glass rounded-2xl p-6 flex flex-col" style={{ border: t.popular ? `2px solid ${t.color}` : undefined, minWidth: 0 }}>
            {t.popular && <span className="text-xs font-bold mb-2" style={{ color: t.color }}>MOST POPULAR</span>}
            <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>{t.label}</h3>
            <div className="text-2xl font-bold my-2" style={{ color: t.color }}>{t.price}</div>
            <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>{t.desc}</p>
            <ul className="text-sm space-y-1 mb-5" style={{ color: "var(--text-2)", paddingLeft: 18, listStyle: "disc" }}>
              {t.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            {t.amountChf === 0 ? (
              <Link href="/join" className="mt-auto text-center rounded-xl px-4 py-2.5 text-sm font-bold text-white" style={{ background: t.color }}>Join free</Link>
            ) : (
              <button type="button" onClick={() => pay(t.id)} disabled={busy === t.id} className="mt-auto rounded-xl px-4 py-2.5 text-sm font-bold text-white disabled:opacity-60" style={{ background: t.color }}>
                {busy === t.id ? "Opening payment…" : `Pay ${t.price}`}
              </button>
            )}
          </div>
        ))}
      </div>
      {msg && <p role="status" className="mt-4 text-sm" style={{ color: "var(--text-2)" }}>{msg} <Link href="/join" style={{ textDecoration: "underline" }}>Create account</Link></p>}
      <p className="mt-4 text-xs" style={{ color: "var(--text-3)" }}>
        Membership fees, tiers and benefits can change; Indiaspora reserves that right (see <Link href="/terms" style={{ textDecoration: "underline" }}>Terms, section 5B</Link>).
      </p>
    </section>
  );
}
