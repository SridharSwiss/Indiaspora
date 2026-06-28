import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
