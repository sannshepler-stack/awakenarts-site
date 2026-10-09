/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },

  async redirects() {
    return [
      // Retired routes — all resolve to the clarified architecture.
      // /path and sub-pages → /studio (figures now live under Studio)
      // 2026-10-09, Susan: /path now reaches The AwakenArts Path (was /studio).
      { source: '/path',           destination: '/awakenarts-path', permanent: true },
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
      // 2026-10-09: the Primer was the book, which now lives at /about/introduction.
      { source: '/primer', destination: '/about/introduction', permanent: true },
      // Figure Editions are now presented inside the workshop landscape,
      // rather than through a competing public Collection center.
      // 2026-10-05 rebuild: the Collection's Editions now live at /editions.
      // Temporary while the rebuild settles.
      // 2026-10-07 (Susan): "Editions" retired — the works are the
      // AwakenArts Collection, each a Figure, at /collection. The /editions
      // URLs (2026-10-05 to 10-07, never on main) forward here.
      { source: '/editions', destination: '/collection', permanent: false },
      { source: '/editions/:slug/purchase', destination: '/collection/:slug', permanent: false },
      { source: '/editions/:path*', destination: '/collection/:path*', permanent: false },
      // 2026-10-05: workshops are part of Presentations & Workshops, not Guided Encounters.
      // 2026-10-09, Susan: the Figure video encounters are retired
      // (archived in src/app/_archive/encounters-figures-2026-10).
      { source: '/encounters/dragon',    destination: '/encounters', permanent: true },
      { source: '/encounters/vase',      destination: '/encounters', permanent: true },
      { source: '/encounters/queen',     destination: '/encounters', permanent: true },
      { source: '/encounters/butterfly', destination: '/encounters', permanent: true },
      { source: '/encounters/mermaid',   destination: '/encounters', permanent: true },
      { source: '/encounters/continuum', destination: '/encounters', permanent: true },
      { source: '/workshops', destination: '/presentations', permanent: true },
      { source: '/presentations-workshops', destination: '/presentations', permanent: true },
      // 2026-10-05 (Susan): Guided Encounters are presentations. The old
      // /guided-encounters pages stay in the codebase (retire in cleanup)
      // but are reached through these temporary redirects.
      { source: '/guided-encounters', destination: '/presentations', permanent: false },
      { source: '/guided-encounters/grismere', destination: '/presentations/grismere', permanent: false },
      // Flyer QR address (2026-10-08, Susan): awakenarts.com/grismere. Temporary
      // on purpose — the printed address never changes, where it leads can.
      { source: '/grismere', destination: '/presentations/grismere?src=flyer', permanent: false },
      { source: '/guided-encounters/:slug', destination: '/collection/:slug', permanent: false },
      // 2026-10-05 (Susan): Edition = the work. /editions/:slug is the
      // Edition's own page again (the earlier redirect to Guided Encounters
      // is removed).
      // New AwakenArts Paradigm (2026-08-18): Edition purchase pages
      // belonged to the former facilitator-product model. Preserve every
      // inbound URL with a one-hop redirect to its Edition's workshop-
      // centered detail page.
      {
        source: '/collection/:slug/purchase',
        destination: '/collection/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
