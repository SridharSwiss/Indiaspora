import { MetadataRoute } from "next";

const siteUrl = "https://indiaswiss.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { url: "", priority: 1.0, changeFrequency: "weekly" },
    { url: "/community", priority: 0.9, changeFrequency: "weekly" },
    { url: "/community/associations", priority: 0.8, changeFrequency: "monthly" },
    { url: "/community/spiritual", priority: 0.8, changeFrequency: "monthly" },
    { url: "/community/women", priority: 0.8, changeFrequency: "monthly" },
    { url: "/community/students", priority: 0.8, changeFrequency: "monthly" },
    { url: "/culture", priority: 0.8, changeFrequency: "weekly" },
    { url: "/events", priority: 0.9, changeFrequency: "weekly" },
    { url: "/food", priority: 0.9, changeFrequency: "weekly" },
    { url: "/food/restaurants", priority: 0.8, changeFrequency: "monthly" },
    { url: "/food/grocery", priority: 0.7, changeFrequency: "monthly" },
    { url: "/food/catering", priority: 0.7, changeFrequency: "monthly" },
    { url: "/food/cooking", priority: 0.7, changeFrequency: "monthly" },
    { url: "/business", priority: 0.8, changeFrequency: "monthly" },
    { url: "/resources", priority: 0.8, changeFrequency: "monthly" },
    { url: "/living", priority: 0.9, changeFrequency: "monthly" },
    { url: "/living/welcome", priority: 0.8, changeFrequency: "monthly" },
    { url: "/living/housing", priority: 0.8, changeFrequency: "monthly" },
    { url: "/living/banking", priority: 0.8, changeFrequency: "monthly" },
    { url: "/living/healthcare", priority: 0.8, changeFrequency: "monthly" },
    { url: "/living/education", priority: 0.8, changeFrequency: "monthly" },
    { url: "/living/transport", priority: 0.7, changeFrequency: "monthly" },
    { url: "/living/language", priority: 0.7, changeFrequency: "monthly" },
    { url: "/living/legal", priority: 0.8, changeFrequency: "monthly" },
    { url: "/cities", priority: 0.9, changeFrequency: "monthly" },
    { url: "/cities/zurich", priority: 0.8, changeFrequency: "monthly" },
    { url: "/cities/geneva", priority: 0.8, changeFrequency: "monthly" },
    { url: "/cities/basel", priority: 0.7, changeFrequency: "monthly" },
    { url: "/cities/bern", priority: 0.7, changeFrequency: "monthly" },
    { url: "/cities/lausanne", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${siteUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
