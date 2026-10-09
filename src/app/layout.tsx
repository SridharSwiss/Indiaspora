import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import CookieBanner from "@/components/CookieBanner";
import BannerManager from "@/components/ui/BannerManager";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indiaspora.ch"),
  title: {
    default: "IndiaSwiss – The Swiss Indian Community Hub",
    template: "%s | IndiaSwiss",
  },
  description:
    "The definitive platform for 24,500+ Indians living in Switzerland. Discover restaurants, associations, events, business networks, temples, and everything you need to thrive in Switzerland.",
  keywords: [
    "Indians in Switzerland",
    "Swiss Indian community",
    "Indian expats Switzerland",
    "Indian restaurants Zurich",
    "Indian associations Switzerland",
    "Diwali Switzerland",
    "Indian community Zurich",
    "NRI Switzerland",
    "SwissDesi",
    "Swiss Indian portal",
    "Indian community hub Switzerland",
  ],
  openGraph: {
    title: "IndiaSwiss – The Swiss Indian Community Hub",
    description: "Your definitive guide to Indian community life in Switzerland",
    type: "website",
    locale: "en_CH",
    siteName: "IndiaSwiss",
    url: "https://indiaspora.ch",
  },
  twitter: {
    card: "summary_large_image",
    title: "IndiaSwiss – The Swiss Indian Community Hub",
    description: "Your definitive guide to Indian community life in Switzerland",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://indiaspora.ch",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IndiaSwiss — Indiaspora",
  "alternateName": ["Indiaspora", "IndiaSwiss", "Swiss Indian Community Hub"],
  "url": "https://indiaspora.ch",
  "logo": "https://indiaspora.ch/logo.svg",
  "description": "The definitive platform for 24,500+ Indians living in Switzerland. Indian community hub covering restaurants, events, temples, associations, business networking, and living guides.",
  "foundingLocation": { "@type": "Place", "name": "Switzerland" },
  "areaServed": { "@type": "Country", "name": "Switzerland" },
  "sameAs": [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "IndiaSwiss — Indiaspora",
  "url": "https://indiaspora.ch",
  "description": "The Swiss Indian community hub for 24,500+ Indians in Switzerland — restaurants, events, temples, associations, living guides.",
  "inLanguage": "en",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://indiaspora.ch/search?q={search_term_string}" },
    "query-input": "required name=search_term_string",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <CookieBanner />
        <AnalyticsTracker />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BottomNav />
        <BannerManager />
      </body>
    </html>
  );
}
