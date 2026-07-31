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
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/book-online',
        destination: '/book',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      }
    ]
  },
}

export default nextConfig
