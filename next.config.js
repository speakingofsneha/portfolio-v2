/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove output: 'export' for Vercel deployment
  // output: 'export', // Only needed for static export to GitHub Pages
  trailingSlash: true,
  images: {
    // Remove unoptimized: true for Vercel (Vercel optimizes images automatically)
    // unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: [
      'images.isbndb.com',
      'm.media-amazon.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize hot reloading
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
