import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: /icons/, // Only convert SVGs in the icons directory
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['assets.aceternity.com'],
  },
};

export default nextConfig;