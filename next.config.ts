import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Use basePath for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/Anjali-cv-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Anjali-cv-app/' : '',
};

export default nextConfig;
