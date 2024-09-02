/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Export as a static site
    images: {
      unoptimized: true, // Disable image optimization for GitHub Pages
    },
    basePath: '/track',
    assetPrefix: '/track/', 
  };
  
  export default nextConfig;
  