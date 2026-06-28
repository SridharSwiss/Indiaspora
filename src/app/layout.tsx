import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indiaswiss.ch"),
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
  ],
  openGraph: {
    title: "IndiaSwiss – The Swiss Indian Community Hub",
    description: "Your definitive guide to Indian community life in Switzerland",
    type: "website",
    locale: "en_CH",
    siteName: "IndiaSwiss",
    url: "https://indiaswiss.ch",
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
    canonical: "https://indiaswiss.ch",
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
      </head>
      <body className="min-h-full flex flex-col" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
