"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function DeleteAccount() {
  const [email, setEmail] = useState<string | null | undefined>(undefined);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => { createClient().auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null)); }, []);

  const del = async () => {
    if (!confirm("Permanently delete your Indiaspora account and data? This cannot be undone.")) return;
    setBusy(true);
    const r = await fetch("/api/account/delete", { method: "POST" });
    const j = await r.json().catch(() => ({}));
    setBusy(false);
    setMsg(r.ok ? { ok: true, text: "Your account has been deleted." } : { ok: false, text: j.error ?? "Something went wrong. Please contact us." });
    if (r.ok) setEmail(null);
  };

  if (email === undefined) return null;
  if (msg?.ok) return <p style={{ color: "#059669", fontWeight: 700 }}>{msg.text}</p>;
  if (!email) return (
    <p style={{ color: "var(--text-2)" }}>
      <a href="/login?next=/account/delete" style={{ color: "var(--in)", fontWeight: 700 }}>Log in</a> to delete your account. Can&apos;t log in? Send a deletion request through the <a href="/contact" style={{ color: "var(--in)", fontWeight: 700 }}>contact form</a> from the email address on your account.
    </p>
  );
  return (
    <div>
      <p style={{ color: "var(--text-2)", marginBottom: 12 }}>Signed in as <strong>{email}</strong>.</p>
      <button id="delete-account" onClick={del} disabled={busy}
        style={{ padding: "12px 22px", borderRadius: 10, border: "none", background: "#DC2626", color: "#fff", fontWeight: 700, cursor: busy ? "default" : "pointer", opacity: busy ? 0.7 : 1 }}>
        {busy ? "Deleting…" : "Delete my account"}
      </button>
      {msg && !msg.ok && <p style={{ color: "#DC2626", marginTop: 10 }}>{msg.text}</p>}
    </div>
  );
}
