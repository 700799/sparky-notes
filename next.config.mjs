/** @type {import('next').NextConfig} */

// `sparky-notes` is a GitHub *project* page, served from
// https://<user>.github.io/sparky-notes/, so we need a basePath/assetPrefix.
// Set BASE_PATH="" locally if you want to serve from the root during dev.
const basePath = process.env.NODE_ENV === 'production' ? '/sparky-notes' : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Surface the basePath to client code (e.g. for building internal links).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
