import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.cache = false; 
    config.module.rules.push({
      test: /\.svg$/,
      include: /icons/, // Only convert SVGs in the icons directory
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;