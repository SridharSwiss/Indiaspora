import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder",
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    if (!user) {
      return NextResponse.redirect(new URL(`/login?redirect=/admin`, request.url));
    }
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && user.email !== adminEmail) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Members-only sub-pages: signed-out visitors (and search engines) get an open SEO summary
  // rendered by app/(pages)/gated-preview (a rewrite, so the full page is never sent); members get the full page. SEO target pages stay fully open.
  const GATED_ROOTS = ["/community", "/living", "/food", "/business", "/culture", "/events", "/cities", "/resources"];
  const FULLY_PUBLIC = [
    "/food/grocery", "/food/zurich", "/food/geneva", "/food/basel", "/food/bern", "/food/lausanne",
    "/living/indian-passport-renewal-switzerland", "/cities/zurich",
  ];
  const path = pathname.replace(/\/$/, "");
  const isSubPage = GATED_ROOTS.some(root => path.startsWith(root + "/"));
  if (isSubPage && !user && !FULLY_PUBLIC.includes(path)) {
    const url = request.nextUrl.clone();
    url.pathname = "/gated-preview";
    url.search = `?path=${encodeURIComponent(path)}`;
    const res = NextResponse.rewrite(url);
    supabaseResponse.cookies.getAll().forEach(c => res.cookies.set(c));
    return res;
  }

  return supabaseResponse;
}
