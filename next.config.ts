import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/buttercream-studio',
  assetPrefix: '/buttercream-studio',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
