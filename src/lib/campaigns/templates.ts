import type { FeedItem } from "./feeds";
import type { Festival } from "./festivals";

export const SITE = "https://indiaspora.ch";
export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const paras = (t: string) => t.split(/\n{2,}/).map(p => `<p style="font-size:15px;color:#3F3832;line-height:1.7;margin:0 0 16px">${esc(p).replace(/\n/g, "<br>")}</p>`).join("");

// {{UNSUB}} is replaced per recipient at send time.
function shell(opts: { colors: [string, string]; emoji: string; title: string; sub: string; body: string; cta?: { label: string; href: string }; share?: string }) {
  const [c1, c2] = opts.colors;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#EFE9DF;font-family:system-ui,-apple-system,'Segoe UI',sans-serif">
<div style="max-width:600px;margin:32px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.06)">
  <div style="background:linear-gradient(135deg,${c1},${c2});padding:36px;text-align:center">
    <div style="font-size:42px;line-height:1;margin-bottom:10px">${opts.emoji}</div>
    <div style="display:inline-block;padding:4px 12px;border-radius:999px;background:rgba(0,0,0,.22);color:#fff;font-size:11px;font-weight:700;letter-spacing:.08em;margin-bottom:12px">${esc(new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }).toUpperCase())}</div>
    <h1 style="margin:0;color:#fff;font-size:28px;line-height:1.15;font-weight:800;letter-spacing:-.02em">${esc(opts.title)}</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,.88);font-size:13px">${esc(opts.sub)}</p>
  </div>
  <div style="padding:32px 34px">${opts.body}
    ${opts.share ?? ""}${opts.cta ? `<a href="${opts.cta.href}" style="display:block;text-align:center;background:linear-gradient(135deg,${c1},${c2});color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:700;font-size:15px;margin-top:8px">${esc(opts.cta.label)}</a>` : ""}
    <p style="font-size:14px;color:#3F3832;line-height:1.6;margin:28px 0 0">Warm regards,<br><strong style="color:#1A1410">Swiss Indiaspora Team</strong></p>
  </div>
  <div style="padding:22px 34px;border-top:1px solid #F2F0EB;text-align:center">
    <p style="font-size:12px;color:#A1A1AA;margin:0;line-height:1.7">© ${new Date().getFullYear()} Indiaspora · Switzerland<br>
    <a href="${SITE}/privacy" style="color:#F97316;text-decoration:none">Privacy</a> · <a href="{{UNSUB}}" style="color:#F97316;text-decoration:none">Unsubscribe</a></p>
  </div>
</div></body></html>`;
}

export function shareRow(text: string) {
  const u = encodeURIComponent(SITE), t = encodeURIComponent(text);
  const btn = (href: string, label: string, bg: string) =>
    `<a href="${href}" style="display:inline-block;margin:4px 3px;padding:9px 16px;border-radius:999px;background:${bg};color:#fff;font-size:12px;font-weight:700;text-decoration:none">${label}</a>`;
  return `<div style="margin-top:28px;padding:20px;border-radius:14px;background:#FBF3E8;text-align:center">
    <div style="font-size:14px;font-weight:700;color:#1A1410;margin-bottom:4px">Know someone who'd like this?</div>
    <div style="font-size:12px;color:#5C524A;margin-bottom:10px">Share Indiaspora with friends and family in Switzerland.</div>
    ${btn(`https://wa.me/?text=${t}%20${u}`, "WhatsApp", "#15803D")}${btn(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`, "LinkedIn", "#0A66C2")}${btn(`https://twitter.com/intent/tweet?text=${t}&url=${u}`, "X", "#1A1410")}${btn(`mailto:?subject=${encodeURIComponent("Indiaspora")}&body=${t}%20${u}`, "Email", "#C2410C")}
    <div style="margin-top:10px"><a href="https://www.linkedin.com/company/swiss-indiaspora/" style="font-size:12px;color:#C2410C;font-weight:700;text-decoration:none">Follow Swiss Indiaspora on LinkedIn</a></div>
  </div>`;
}

const h2 = (t: string) => `<h2 style="margin:28px 0 12px;font-size:12px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#1A1410">${esc(t)}</h2>`;
const link = (i: FeedItem) =>
  `<div style="padding:10px 0;border-top:1px solid #F2F0EB"><a href="${esc(i.url)}" style="color:#1A1410;font-weight:600;font-size:14px;text-decoration:none;line-height:1.45">${esc(i.title)}</a><div style="font-size:11px;color:#A1A1AA;margin-top:3px">${esc(i.source)}</div></div>`;

export type DigestEvent = { title: string; date: string; location: string; organiser?: string; url?: string; day?: string; mon?: string };

export function digestHtml(p: { intro: string; events: DigestEvent[]; diaspora: FeedItem[]; switzerland: FeedItem[]; newsrooms: FeedItem[]; changes: string }) {
  let body = paras(p.intro);
  if (p.events.length) {
    body += h2("Coming up in the community") + p.events.map(e => {
      const title = e.url ? `<a href="${esc(e.url)}" style="color:#1A1410;text-decoration:none">${esc(e.title)}</a>` : esc(e.title);
      return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;border:1px solid #EAE4DA;border-radius:12px"><tr>
        <td width="64" align="center" valign="middle" style="padding:12px 0 12px 12px"><div style="background:#C2410C;border-radius:10px;padding:8px 0;width:52px"><div style="font-size:20px;font-weight:800;color:#fff;line-height:1">${esc(e.day ?? "")}</div><div style="font-size:10px;font-weight:700;color:#FED7AA;letter-spacing:.08em;margin-top:3px">${esc(e.mon ?? "")}</div></div></td>
        <td valign="middle" style="padding:12px 14px"><div style="font-weight:700;font-size:15px;color:#1A1410;line-height:1.35">${title}</div>
        <div style="font-size:12px;color:#5C524A;margin-top:4px;line-height:1.5">${esc(e.location)}${e.organiser ? ` · ${esc(e.organiser)}` : ""}</div></td></tr></table>`;
    }).join("");
  }
  if (p.changes.trim()) body += h2("New on Indiaspora") + paras(p.changes);
  if (p.diaspora.length) body += h2("Indian diaspora · Switzerland & Europe") + p.diaspora.map(link).join("");
  if (p.switzerland.length) body += h2("Life in Switzerland") + p.switzerland.map(link).join("");
  if (p.newsrooms.length) body += h2("Worth reading from the big newsrooms") + p.newsrooms.map(link).join("");
  body += `<div style="height:20px"></div>`;
  return shell({ colors: ["#F97316", "#DC2626"], emoji: "🪔", title: "Indiaspora Weekly", sub: "Your week in the Indian community in Switzerland", body, cta: { label: "Log in to the community", href: `${SITE}/login` }, share: shareRow("Indiaspora: the hub for Indians in Switzerland") });
}

export function loginNudgeHtml(p: { message: string }) {
  return shell({ colors: ["#4F46E5", "#7C3AED"], emoji: "👋", title: "Your community is waiting", sub: "Indiaspora · Switzerland's Indian Community Hub", body: paras(p.message), cta: { label: "Log in to Indiaspora ", href: `${SITE}/login` } });
}

export function festivalHtml(f: Festival, p: { message: string }) {
  return shell({ colors: f.colors, emoji: f.emoji, title: f.greeting, sub: f.fixed ? `${f.name} · ${f.fixed}` : f.name, body: paras(p.message), cta: { label: "Find celebrations near you", href: `${SITE}/events` }, share: shareRow(`${f.greeting} from Swiss Indiaspora`) });
}

export function customHtml(p: { title: string; message: string }) {
  return shell({ colors: ["#F97316", "#DC2626"], emoji: "🪔", title: p.title, sub: "Indiaspora", body: paras(p.message), cta: { label: "Visit Indiaspora ", href: SITE } });
}
