import type { FeedItem } from "./feeds";
import type { Festival } from "./festivals";

export const SITE = "https://indiaspora.ch";
export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const paras = (t: string) => t.split(/\n{2,}/).map(p => `<p style="font-size:15px;color:#52525C;line-height:1.7;margin:0 0 16px">${esc(p).replace(/\n/g, "<br>")}</p>`).join("");

// {{UNSUB}} is replaced per recipient at send time.
function shell(opts: { colors: [string, string]; emoji: string; title: string; sub: string; body: string; cta?: { label: string; href: string } }) {
  const [c1, c2] = opts.colors;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F6F2;font-family:system-ui,-apple-system,'Segoe UI',sans-serif">
<div style="max-width:600px;margin:32px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.06)">
  <div style="background:linear-gradient(135deg,${c1},${c2});padding:36px;text-align:center">
    <div style="font-size:38px;margin-bottom:6px">${opts.emoji}</div>
    <h1 style="margin:0;color:#fff;font-size:25px;font-weight:800;letter-spacing:-.02em">${esc(opts.title)}</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,.88);font-size:13px">${esc(opts.sub)}</p>
  </div>
  <div style="padding:32px 34px">${opts.body}
    ${opts.cta ? `<a href="${opts.cta.href}" style="display:block;text-align:center;background:linear-gradient(135deg,${c1},${c2});color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:700;font-size:15px;margin-top:8px">${esc(opts.cta.label)}</a>` : ""}
    <p style="font-size:14px;color:#52525C;line-height:1.6;margin:28px 0 0">Warm regards,<br><strong style="color:#09090D">Swiss Indiaspora Team</strong></p>
  </div>
  <div style="padding:22px 34px;border-top:1px solid #F2F0EB;text-align:center">
    <p style="font-size:12px;color:#A1A1AA;margin:0;line-height:1.7">© ${new Date().getFullYear()} Indiaspora · Switzerland<br>
    <a href="${SITE}/privacy" style="color:#F97316;text-decoration:none">Privacy</a> · <a href="{{UNSUB}}" style="color:#F97316;text-decoration:none">Unsubscribe</a></p>
  </div>
</div></body></html>`;
}

const h2 = (t: string) => `<h2 style="margin:28px 0 12px;font-size:12px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#09090D">${esc(t)}</h2>`;
const link = (i: FeedItem) =>
  `<div style="padding:10px 0;border-top:1px solid #F2F0EB"><a href="${esc(i.url)}" style="color:#09090D;font-weight:600;font-size:14px;text-decoration:none;line-height:1.45">${esc(i.title)}</a><div style="font-size:11px;color:#A1A1AA;margin-top:3px">${esc(i.source)}</div></div>`;

export type DigestEvent = { title: string; date: string; location: string; organiser?: string; url?: string };

export function digestHtml(p: { intro: string; events: DigestEvent[]; diaspora: FeedItem[]; switzerland: FeedItem[]; newsrooms: FeedItem[]; changes: string }) {
  let body = paras(p.intro);
  if (p.events.length) {
    body += h2("Coming up in the community") + p.events.map(e =>
      `<div style="padding:12px 14px;margin-bottom:8px;background:#F7F6F2;border-radius:12px">
        <div style="font-weight:700;font-size:14px;color:#09090D">${e.url ? `<a href="${esc(e.url)}" style="color:#09090D;text-decoration:none">${esc(e.title)} ↗</a>` : esc(e.title)}</div>
        <div style="font-size:12px;color:#52525C;margin-top:3px">📅 ${esc(e.date)} · 📍 ${esc(e.location)}${e.organiser ? ` · ${esc(e.organiser)}` : ""}</div></div>`).join("");
  }
  if (p.changes.trim()) body += h2("New on Indiaspora") + paras(p.changes);
  if (p.diaspora.length) body += h2("Indian diaspora · Switzerland & Europe") + p.diaspora.map(link).join("");
  if (p.switzerland.length) body += h2("Life in Switzerland") + p.switzerland.map(link).join("");
  if (p.newsrooms.length) body += h2("Worth reading from the big newsrooms") + p.newsrooms.map(link).join("");
  body += `<div style="height:20px"></div>`;
  return shell({ colors: ["#F97316", "#DC2626"], emoji: "🪔", title: "Indiaspora Weekly", sub: "Your week in the Indian community in Switzerland", body, cta: { label: "Log in to the community →", href: `${SITE}/login` } });
}

export function loginNudgeHtml(p: { message: string }) {
  return shell({ colors: ["#4F46E5", "#7C3AED"], emoji: "👋", title: "Your community is waiting", sub: "Indiaspora · Switzerland's Indian Community Hub", body: paras(p.message), cta: { label: "Log in to Indiaspora →", href: `${SITE}/login` } });
}

export function festivalHtml(f: Festival, p: { message: string }) {
  return shell({ colors: f.colors, emoji: f.emoji, title: f.greeting, sub: f.fixed ? `${f.name} · ${f.fixed}` : f.name, body: paras(p.message), cta: { label: "Find celebrations near you →", href: `${SITE}/events` } });
}

export function customHtml(p: { title: string; message: string }) {
  return shell({ colors: ["#F97316", "#DC2626"], emoji: "🪔", title: p.title, sub: "Indiaspora", body: paras(p.message), cta: { label: "Visit Indiaspora →", href: SITE } });
}
