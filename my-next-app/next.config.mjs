/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/track', // Replace 'trac' with your repository name
    assetPrefix: '/track/' // Same as above
  };
  
  module.exports = nextConfig;
  