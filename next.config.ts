import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/mobile-tyre-fitting",
        destination: "/mobile-tyre-fitting-manchester",
        permanent: true,
      },
      {
        source: "/services/home-tyre-fitting",
        destination: "/home-tyre-fitting-manchester",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
