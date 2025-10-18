import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['unsplash.com', 'images.unsplash.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
