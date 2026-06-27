import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://indiaswiss.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IndiaSwiss – The Swiss Indian Community Hub",
    template: "%s | IndiaSwiss",
  },
  description:
    "The definitive platform for 30,000+ Indians living in Switzerland. Discover restaurants, associations, events, business networks, temples, and everything you need to thrive in Switzerland.",
  keywords: [
    "Indians in Switzerland",
    "Swiss Indian community",
    "Indian expats Switzerland",
    "Indian restaurants Zurich",
    "Indian associations Switzerland",
    "Diwali Switzerland",
    "Indian community Zurich",
    "NRI Switzerland",
    "Indian community Geneva",
    "Indians living in Switzerland",
  ],
  authors: [{ name: "IndiaSwiss" }],
  creator: "IndiaSwiss",
  openGraph: {
    title: "IndiaSwiss – The Swiss Indian Community Hub",
    description: "Your definitive guide to Indian community life in Switzerland — 30,000+ Indians, 150+ associations, restaurants, events and living guides.",
    type: "website",
    locale: "en_CH",
    url: siteUrl,
    siteName: "IndiaSwiss",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IndiaSwiss – The Swiss Indian Community Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IndiaSwiss – The Swiss Indian Community Hub",
    description: "Your definitive guide to Indian community life in Switzerland.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IndiaSwiss",
  description:
    "The Swiss Indian Community Hub — connecting 30,000+ Indians across Switzerland with community, food, culture, business and living resources.",
  url: siteUrl,
  areaServed: { "@type": "Country", name: "Switzerland" },
  audience: {
    "@type": "Audience",
    audienceType: "Indians living in Switzerland, Indian expats, NRI Switzerland",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
