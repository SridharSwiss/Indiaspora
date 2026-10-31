"use client";

import { useEffect, useState, useCallback } from "react";
import { Mail, Send, FlaskConical, Loader2, Wand2 } from "lucide-react";

type Type = "digest" | "login_nudge" | "festival" | "custom";
type Audience = "not_logged_in" | "members" | "subscribers" | "everyone";
type Meta = {
  counts: Record<Audience, number>;
  history: { id: string; type: string; subject: string; audience: string; status: string; recipients: number; failed: number; ai_model: string | null; created_at: string }[];
  festivals: { id: string; name: string; emoji: string; fixed: string | null }[];
};

const TYPES: { id: Type; emoji: string; label: string; hint: string; audience: Audience }[] = [
  { id: "digest", emoji: "📰", label: "Weekly digest", hint: "Events, site updates, diaspora news and big-newsroom reads", audience: "everyone" },
  { id: "login_nudge", emoji: "👋", label: "Login follow-up", hint: "Invite members who haven't logged in yet", audience: "not_logged_in" },
  { id: "festival", emoji: "🪔", label: "Festival wishes", hint: "Diwali, Holi, Eid, Christmas, national days…", audience: "everyone" },
  { id: "custom", emoji: "✍️", label: "Custom note", hint: "Your own message in the Indiaspora template", audience: "everyone" },
];
const AUD_LABEL: Record<Audience, string> = {
  not_logged_in: "Members who haven't logged in", members: "All approved members (opted in)",
  subscribers: "Newsletter subscribers", everyone: "Everyone (members + subscribers)",
};

const card = { background: "var(--surface)", borderRadius: 16, border: "1px solid var(--border)", padding: 20 } as const;
const input = { width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border-2)", background: "var(--surface-2)", color: "var(--text)", fontSize: 13, outline: "none", boxSizing: "border-box", fontFamily: "inherit" } as const;

export default function CampaignComposer() {
  const [meta, setMeta] = useState<Meta | null>(null);
  const [type, setType] = useState<Type>("digest");
  const [audience, setAudience] = useState<Audience>("everyone");
  const [festivalId, setFestivalId] = useState("diwali");
  const [notes, setNotes] = useState("");
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [model, setModel] = useState<string | null>(null);
  const [social, setSocial] = useState<{ whatsapp: string; linkedin: string; instagram: string } | null>(null);
  const [copied, setCopied] = useState("");
  const [busy, setBusy] = useState<"" | "gen" | "test" | "send">("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const load = useCallback(async () => {
    const r = await fetch("/api/admin/campaigns");
    if (r.ok) setMeta(await r.json());
  }, []);
  useEffect(() => { load(); }, [load]);

  const pick = (t: Type) => { setType(t); setAudience(TYPES.find(x => x.id === t)!.audience); setHtml(""); setMsg(null); };

  const generate = async () => {
    setBusy("gen"); setMsg(null);
    const r = await fetch("/api/admin/campaigns", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "generate", type, festivalId, notes }) });
    const j = await r.json();
    setBusy("");
    if (!r.ok) return setMsg({ ok: false, text: j.error ?? "Could not generate" });
    setSubject(j.subject); setHtml(j.html); setModel(j.model ?? null); setSocial(j.social ?? null);
  };

  const send = async (testOnly: boolean) => {
    const n = meta?.counts[audience] ?? 0;
    if (!testOnly && !confirm(`Send "${subject}" to ${n} recipient${n === 1 ? "" : "s"} (${AUD_LABEL[audience]})? This cannot be undone.`)) return;
    setBusy(testOnly ? "test" : "send"); setMsg(null);
    const r = await fetch("/api/admin/campaigns", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "send", type, subject, html, audience, testOnly, aiModel: model }) });
    const j = await r.json();
    setBusy("");
    setMsg(r.ok ? { ok: j.ok, text: testOnly ? "Test email sent to your admin address." : `Sent to ${j.sent} recipient(s)${j.failed ? `, ${j.failed} failed` : ""}.` } : { ok: false, text: j.error ?? "Send failed" });
    if (!testOnly) load();
  };

  return (
    <div style={{ ...card, marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <div style={{ padding: 8, borderRadius: 10, background: "rgba(249,115,22,0.12)" }}><Mail size={16} style={{ color: "var(--sf)", display: "block" }} /></div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>Email campaigns</div>
          <div style={{ fontSize: 12, color: "var(--text-3)" }}>Signed &ldquo;Swiss Indiaspora Team&rdquo; · every email has an unsubscribe link</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10, marginBottom: 16 }}>
        {TYPES.map(t => (
          <button key={t.id} onClick={() => pick(t.id)} style={{ textAlign: "left", padding: 14, borderRadius: 12, cursor: "pointer", border: type === t.id ? "2px solid var(--sf)" : "1px solid var(--border-2)", background: type === t.id ? "rgba(249,115,22,0.06)" : "var(--surface-2)", color: "var(--text)" }}>
            <div style={{ fontSize: 20 }}>{t.emoji}</div>
            <div style={{ fontWeight: 700, fontSize: 13, marginTop: 4 }}>{t.label}</div>
            <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2, lineHeight: 1.4 }}>{t.hint}</div>
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12, marginBottom: 12 }}>
        <label style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Audience
          <select value={audience} onChange={e => setAudience(e.target.value as Audience)} style={{ ...input, marginTop: 6 }}>
            {(Object.keys(AUD_LABEL) as Audience[]).map(a => <option key={a} value={a}>{AUD_LABEL[a]} ({meta?.counts[a] ?? "…"})</option>)}
          </select>
        </label>
        {type === "festival" && (
          <label style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Festival
            <select value={festivalId} onChange={e => setFestivalId(e.target.value)} style={{ ...input, marginTop: 6 }}>
              {(meta?.festivals ?? []).map(f => <option key={f.id} value={f.id}>{f.emoji} {f.name}{f.fixed ? ` (${f.fixed})` : ""}</option>)}
            </select>
          </label>
        )}
      </div>

      <label style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {type === "custom" ? "Your message" : type === "digest" ? "What's new on Indiaspora (optional)" : "Add a personal line (optional)"}
        <textarea rows={3} value={notes} onChange={e => setNotes(e.target.value)} placeholder={type === "digest" ? "e.g. New Living Guide pages for taxes; community directory now open for submissions" : "Anything you want mentioned"} style={{ ...input, marginTop: 6, resize: "vertical" }} />
      </label>

      <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
        <button onClick={generate} disabled={!!busy} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#F97316,#DC2626)", color: "#fff", fontWeight: 700, fontSize: 13, cursor: busy ? "default" : "pointer", opacity: busy ? 0.7 : 1 }}>
          {busy === "gen" ? <Loader2 size={14} className="animate-spin" /> : <Wand2 size={14} />} {html ? "Regenerate draft" : "Generate draft"}
        </button>
      </div>

      {msg && <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 10, fontSize: 13, background: msg.ok ? "rgba(5,150,105,0.1)" : "rgba(220,38,38,0.1)", color: msg.ok ? "#059669" : "#DC2626" }}>{msg.text}</div>}

      {html && (
        <div style={{ marginTop: 18 }}>
          <label style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Subject
            <input value={subject} onChange={e => setSubject(e.target.value)} style={{ ...input, marginTop: 6 }} />
          </label>
          <div style={{ marginTop: 12, borderRadius: 12, overflow: "hidden", border: "1px solid var(--border-2)" }}>
            <iframe title="Email preview" srcDoc={html.replace(/\{\{UNSUB\}\}/g, "#").replace(/\{\{NAME\}\}/g, "Priya")} style={{ width: "100%", height: 560, border: "none", background: "#F7F6F2" }} sandbox="" />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <button onClick={() => send(true)} disabled={!!busy} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 10, border: "1px solid var(--border-2)", background: "var(--surface)", color: "var(--text-2)", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {busy === "test" ? <Loader2 size={14} className="animate-spin" /> : <FlaskConical size={14} />} Send test to me
            </button>
            <button onClick={() => send(false)} disabled={!!busy || !subject.trim()} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 10, border: "none", background: "#059669", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {busy === "send" ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />} Send to {meta?.counts[audience] ?? 0} recipient{(meta?.counts[audience] ?? 0) === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      )}

      {html && social && (
        <div style={{ marginTop: 22, borderTop: "1px solid var(--border)", paddingTop: 16 }}>
          <div style={{ fontWeight: 800, fontSize: 14, color: "var(--text)", marginBottom: 4 }}>Social share kit</div>
          <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 12 }}>Ready-to-post copy from the same verified items. Edit, then paste.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12 }}>
            {([["whatsapp", "WhatsApp broadcast", "#15803D"], ["linkedin", "LinkedIn post", "#0A66C2"], ["instagram", "Instagram caption", "#C2410C"]] as const).map(([k, label, color]) => (
              <div key={k} style={{ border: "1px solid var(--border-2)", borderRadius: 12, padding: 12, background: "var(--surface-2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color }}>{label}</span>
                  <button onClick={async () => { try { await navigator.clipboard.writeText(social[k]); setCopied(k); setTimeout(() => setCopied(""), 1500); } catch {} }} style={{ fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 999, border: "1px solid var(--border-2)", background: "var(--surface)", color: "var(--text-2)", cursor: "pointer" }}>{copied === k ? "Copied" : "Copy"}</button>
                </div>
                <textarea rows={7} value={social[k]} onChange={e => setSocial({ ...social, [k]: e.target.value })} style={{ ...input, resize: "vertical", fontSize: 12, lineHeight: 1.5 }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {!!meta?.history.length && (
        <div style={{ marginTop: 22, borderTop: "1px solid var(--border)", paddingTop: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Recently sent</div>
          {meta.history.slice(0, 6).map(h => (
            <div key={h.id} style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: 12, padding: "6px 0", color: "var(--text-2)" }}>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{h.subject}</span>
              <span style={{ color: "var(--text-3)", whiteSpace: "nowrap" }}>{h.recipients} sent · {new Date(h.created_at).toLocaleDateString("en-GB")}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
