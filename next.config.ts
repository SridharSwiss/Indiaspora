import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  async rewrites() {
    // Android App Links verification file is generated from env vars (see /api/assetlinks)
    return [{ source: "/.well-known/assetlinks.json", destination: "/api/assetlinks" }];
  },
};

export default nextConfig;
