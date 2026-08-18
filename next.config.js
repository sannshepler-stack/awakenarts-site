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
      // /begin → /  (retired route, homepage is now the threshold)
      { source: '/begin',          destination: '/',       permanent: true },
      // /forms-prototype → /studio  (Forms integrated into Studio)
      { source: '/forms-prototype', destination: '/studio', permanent: true },
      // /journal-prototype and v2 → /journal  (canonical journal is live)
      { source: '/journal-prototype',    destination: '/journal', permanent: true },
      { source: '/journal-prototype-v2', destination: '/journal', permanent: true },
      // /primer → /awakenarts-path (2026-07-27, per Susan's "no Primer
      // anywhere" directive — the route, folder, filenames, and labels
      // all moved off "Primer" terminology onto "Path." This route was
      // live on main, so the redirect is permanent rather than a
      // silent removal.)
      { source: '/primer', destination: '/awakenarts-path', permanent: true },
      // New AwakenArts Paradigm (2026-08-18): Edition purchase pages
      // belonged to the former facilitator-product model. Preserve every
      // inbound URL with a one-hop redirect to its Edition's workshop-
      // centered detail page.
      {
        source: '/editions/:slug/purchase',
        destination: '/editions/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
