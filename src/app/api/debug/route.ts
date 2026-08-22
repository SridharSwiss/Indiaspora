import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return NextResponse.json({
    supabase_url_set: !!url && url !== "https://placeholder.supabase.co",
    supabase_url_prefix: url ? url.slice(0, 30) + "…" : "NOT SET",
    anon_key_set: !!key && key !== "placeholder",
    anon_key_prefix: key ? key.slice(0, 20) + "…" : "NOT SET",
    admin_email: process.env.ADMIN_EMAIL || "NOT SET",
    resend_key_set: !!process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "placeholder",
  });
}
