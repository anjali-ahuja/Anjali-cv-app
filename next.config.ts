import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/Anjali-cv-app',
  assetPrefix: '/Anjali-cv-app/',
};

export default nextConfig;
