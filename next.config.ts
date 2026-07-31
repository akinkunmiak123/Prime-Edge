import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/services-2',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
