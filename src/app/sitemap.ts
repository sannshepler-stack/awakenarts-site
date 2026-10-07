import type { MetadataRoute } from 'next'

// sitemap.xml — generated programmatically by Next.js.
// Only finished, public-ready pages appear here. The individual
// encounter sub-pages are deliberately omitted while the encounter
// path is still being shaped; they'll be added when ready.

const SITE_URL = 'https://awakenarts.com'

type Entry = {
  path: string
  changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency']
  priority?: number
}

const ENTRIES: Entry[] = [
  { path: '/',                                                   changeFrequency: 'weekly',  priority: 1.0 },
  // 2026-10-05 rebuild: Symbols (card collection) + Guided Encounters + Books.
  { path: '/symbols',                                           changeFrequency: 'weekly',  priority: 0.95 },
  { path: '/collection',                                          changeFrequency: 'monthly', priority: 0.95 },
  ...['grismere', 'dragon', 'queen-ann', 'bowls', 'ballerina', 'poppy'].map((s) => ({
    path: `/collection/${s}`, changeFrequency: 'monthly' as const, priority: 0.8,
  })),
  { path: '/presentations/grismere',                            changeFrequency: 'monthly', priority: 0.9 },
  { path: '/explore',                                           changeFrequency: 'monthly', priority: 0.9 },
  { path: '/presentations',                                     changeFrequency: 'monthly', priority: 0.9 },
  { path: '/books',                                             changeFrequency: 'monthly', priority: 0.85 },
  ...['shape-symbol-and-story', 'where-you-stand', 'whispers-of-awareness'].map((s) => ({
    path: `/books/${s}`, changeFrequency: 'monthly' as const, priority: 0.75,
  })),
  { path: '/stay-connected',                                    changeFrequency: 'yearly',  priority: 0.5 },
  { path: '/christian-symbols',                                 changeFrequency: 'monthly', priority: 0.8 },
  { path: '/gallery',                                           changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about',                                              changeFrequency: 'monthly', priority: 0.9 },
  { path: '/awakenarts-path',                                   changeFrequency: 'monthly', priority: 0.9 },
  { path: '/foundation',                                        changeFrequency: 'monthly', priority: 0.7 },
  // Encounters architecture (2026-06-25) — /encounters is now the
  // primary entrance in its own right, not a transitional doorway, plus
  // each of the five locked encounters.
  { path: '/encounters',                                         changeFrequency: 'monthly', priority: 0.9 },
  { path: '/encounters/journey',                                 changeFrequency: 'monthly', priority: 0.8 },
  { path: '/encounters/deep',                                    changeFrequency: 'monthly', priority: 0.8 },
  { path: '/encounters/table',                                   changeFrequency: 'monthly', priority: 0.8 },
  { path: '/encounters/word',                                    changeFrequency: 'monthly', priority: 0.8 },
  { path: '/encounters/continue',                                changeFrequency: 'monthly', priority: 0.8 },
  { path: '/studio',                                             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/studio/silhouettes',                                 changeFrequency: 'monthly', priority: 0.7 },
  // /path, /path/ann, /path/grismere, /path/ballerina, /begin, /journey
  // all permanently redirect to /studio or / — omitted from sitemap.
  // /library route renamed /poems (June 2026); theme sub-pages retired.
  // Journal restored to primary navigation (2026-06-25, "Retire Gallery
  // and Reinstate Journal" directive) — Gallery is retired and was never
  // listed here, so no entry needs to be removed for it.
  { path: '/journal',                                            changeFrequency: 'monthly', priority: 0.8 },
  // /quotes — Scripture and the Christian literary tradition; part of
  // the site's foundational interpretive framework (June 2026).
  { path: '/quotes',                                             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/experience',                                         changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy',                                            changeFrequency: 'yearly',  priority: 0.2 },
  { path: '/terms',                                              changeFrequency: 'yearly',  priority: 0.2 },
  { path: '/disclaimer',                                         changeFrequency: 'yearly',  priority: 0.2 },
  { path: '/copyright',                                          changeFrequency: 'yearly',  priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
