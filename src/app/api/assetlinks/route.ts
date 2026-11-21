import { NextResponse } from "next/server";

// Served at https://indiaspora.ch/.well-known/assetlinks.json (rewrite in next.config.ts).
// Lets the Android app open indiaspora.ch links (events, login callback) directly.
// Set in Vercel: ANDROID_PACKAGE_NAME (default ch.indiaspora.app) and
// ANDROID_SHA256_CERT_FINGERPRINTS = comma-separated SHA-256 fingerprints
// (Play Console > App integrity > App signing key, plus your upload/debug key while testing).
export const dynamic = "force-dynamic";

export function GET() {
  const pkg = process.env.ANDROID_PACKAGE_NAME || "ch.indiaspora.app";
  const fingerprints = (process.env.ANDROID_SHA256_CERT_FINGERPRINTS || "")
    .split(",").map(s => s.trim().toUpperCase()).filter(Boolean);
  const body = fingerprints.length
    ? [{ relation: ["delegate_permission/common.handle_all_urls"], target: { namespace: "android_app", package_name: pkg, sha256_cert_fingerprints: fingerprints } }]
    : [];
  return NextResponse.json(body, { headers: { "Cache-Control": "public, max-age=3600" } });
}
