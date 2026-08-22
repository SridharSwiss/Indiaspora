import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://indiaswiss.ch";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/community`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/living`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/food`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/business`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/culture`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/cities`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
