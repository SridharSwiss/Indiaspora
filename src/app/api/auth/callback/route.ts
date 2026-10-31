import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { parseUA } from "@/lib/ua";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { device, browser, os } = parseUA(request.headers.get("user-agent"));
          await createAdminClient().from("user_logins").insert({
            user_id: user.id, email: user.email ?? null,
            provider: (user.app_metadata?.provider as string | undefined) ?? null,
            country: request.headers.get("x-vercel-ip-country"), device, browser, os,
          });
        }
      } catch { /* logging must never block login */ }
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`);
}
