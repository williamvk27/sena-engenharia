/** @type {import('next').NextConfig} */
const repo = "sena-engenharia";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
}

export default nextConfig
