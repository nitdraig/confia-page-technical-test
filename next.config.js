/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['assets.maccarianagency.com'],
  },
};

module.exports = nextConfig;
