import { createSign } from "crypto";

// Firebase Cloud Messaging (HTTP v1) without the firebase-admin dependency.
// Env: FIREBASE_SERVICE_ACCOUNT = the full service-account JSON (Firebase console >
// Project settings > Service accounts > Generate new private key). Keep it in Vercel env vars only.
type ServiceAccount = { project_id: string; client_email: string; private_key: string };

function account(): ServiceAccount | null {
  try {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) return null;
    const a = JSON.parse(raw);
    return a.project_id && a.client_email && a.private_key ? { ...a, private_key: String(a.private_key).replace(/\\n/g, "\n") } : null;
  } catch { return null; }
}

const b64 = (s: string | Buffer) => Buffer.from(s).toString("base64url");

async function accessToken(a: ServiceAccount): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64(JSON.stringify({
    iss: a.client_email, scope: "https://www.googleapis.com/auth/firebase.messaging",
    aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600,
  }))}`;
  const sig = createSign("RSA-SHA256").update(unsigned).sign(a.private_key);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${b64(sig)}` }),
  });
  const j = await res.json();
  if (!res.ok || !j.access_token) throw new Error(`FCM auth failed: ${j.error ?? res.status}`);
  return j.access_token;
}

export const topicSlug = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

/** Send to devices subscribed to any of the topics (max 5). Returns a message for the admin UI. */
export async function sendToTopics(topics: string[], n: { title: string; body: string; link: string; data?: Record<string, string> }) {
  const a = account();
  if (!a) return { ok: false, error: "FIREBASE_SERVICE_ACCOUNT is not set" };
  const condition = [...new Set(topics)].slice(0, 5).map(t => `'${topicSlug(t)}' in topics`).join(" || ");
  const token = await accessToken(a);
  const res = await fetch(`https://fcm.googleapis.com/v1/projects/${a.project_id}/messages:send`, {
    method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ message: {
      condition,
      notification: { title: n.title.slice(0, 100), body: n.body.slice(0, 200) },
      data: { link: n.link, ...(n.data ?? {}) },
      android: { priority: "high", notification: { channel_id: "events", click_action: "OPEN_LINK" } },
    } }),
  });
  if (!res.ok) return { ok: false, error: `FCM send failed (${res.status})` };
  return { ok: true };
}
