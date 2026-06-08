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
  { path: '/about',                                              changeFrequency: 'monthly', priority: 0.9 },
  // /encounters itself is a transitional intro video (the doorway).
  // It's intentionally absent from the sitemap so search results point
  // visitors directly at the Mermaid encounter — the real content.
  { path: '/encounters/mermaid',                                 changeFrequency: 'monthly', priority: 0.8 },
  { path: '/studio',                                             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/studio/silhouettes',                                 changeFrequency: 'monthly', priority: 0.7 },
  // /path, /path/ann, /path/grismere, /path/ballerina, /begin, /journey
  // all permanently redirect to /studio or / — omitted from sitemap.
  // /library/figures/*, /library/foundations/*, /library/voices, /gallery,
  // and /deck were an orphaned, self-referencing page tree with no links
  // from the live site (and no redirects) — removed entirely (June 2026).
  { path: '/library',                                            changeFrequency: 'monthly', priority: 0.8 },
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
