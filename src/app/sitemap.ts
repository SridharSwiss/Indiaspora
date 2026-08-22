import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://indiaspora.ch";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    // Community
    { url: `${base}/community`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/community/associations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/community/spiritual`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/community/students`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/community/women`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Living
    { url: `${base}/living`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/living/welcome`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/living/housing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/living/healthcare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/living/education`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/living/banking`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/living/transport`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/living/legal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/living/language`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Food
    { url: `${base}/food`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/food/restaurants`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/food/grocery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/food/catering`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/food/cooking`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Business
    { url: `${base}/business`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/business/networking`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/business/jobs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/business/startups`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/business/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Culture
    { url: `${base}/culture`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/culture/festivals`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/culture/arts`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/culture/fashion`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/culture/cinema`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Cities
    { url: `${base}/cities`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cities/zurich`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cities/geneva`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cities/bern`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cities/basel`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cities/lausanne`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Other
    { url: `${base}/events`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
