import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/gated-preview", "/admin", "/api/"] },
    sitemap: "https://indiaspora.ch/sitemap.xml",
  };
}
