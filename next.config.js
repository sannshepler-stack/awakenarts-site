/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },

  async redirects() {
    return [
      // Retired routes — all resolve to the clarified architecture.
      // /path and sub-pages → /studio (figures now live under Studio)
      { source: '/path',           destination: '/studio', permanent: true },
      { source: '/path/grismere',  destination: '/studio', permanent: true },
      { source: '/path/ballerina', destination: '/studio', permanent: true },
      { source: '/path/ann',       destination: '/studio', permanent: true },
      // /journey → /studio  (retired route, content folded into Studio)
      { source: '/journey',        destination: '/studio', permanent: true },
      // /forms-prototype → /studio  (Forms integrated into Studio)
      { source: '/forms-prototype', destination: '/studio', permanent: true },
    ]
  },
}

module.exports = nextConfig
