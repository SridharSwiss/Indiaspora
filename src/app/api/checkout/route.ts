import { NextRequest, NextResponse } from "next/server";
import { TIERS } from "@/lib/tiers";

// Creates a Stripe Checkout session for a recurring membership (monthly or yearly, per the tier's price label) (Stripe REST API, no SDK).
// Requires STRIPE_SECRET_KEY. Without it the route answers 503 and the UI falls back to "join now, invoice later".
export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return NextResponse.json({ error: "payments_not_configured" }, { status: 503 });

  let body: { tier?: string; email?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }
  const tier = TIERS.find((t) => t.id === body.tier && t.amountChf > 0);
  const email = (body.email ?? "").trim();
  if (!tier) return NextResponse.json({ error: "invalid_tier" }, { status: 400 });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return NextResponse.json({ error: "invalid_email" }, { status: 400 });

  // Billing period follows the price label shown to visitors ("/mth" = monthly, otherwise yearly).
  const interval = /\/\s*(mth|mo|month)/i.test(tier.price) ? "month" : "year";
  const origin = process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin;
  const p = new URLSearchParams({
    mode: "subscription",
    customer_email: email,
    success_url: `${origin}/join?tier=${tier.id}&paid=1`,
    cancel_url: `${origin}/advertise?cancelled=1#membership`,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "chf",
    "line_items[0][price_data][unit_amount]": String(tier.amountChf * 100),
    "line_items[0][price_data][recurring][interval]": interval,
    "line_items[0][price_data][product_data][name]": `Indiaspora ${tier.label} membership`,
    "metadata[tier]": tier.id,
    "metadata[email]": email,
  });
  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: p,
  });
  const data = await res.json();
  if (!res.ok || !data.url) {
    console.error("stripe checkout error", data?.error?.message);
    return NextResponse.json({ error: "checkout_failed" }, { status: 502 });
  }
  return NextResponse.json({ url: data.url });
}
