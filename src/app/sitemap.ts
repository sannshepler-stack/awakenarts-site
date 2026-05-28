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
  { path: '/library',                                            changeFrequency: 'monthly', priority: 0.8 },
  { path: '/library/foundations/process-in-and-of-images',       changeFrequency: 'monthly', priority: 0.6 },
  { path: '/library/foundations/the-mirror-and-the-map',         changeFrequency: 'monthly', priority: 0.6 },
  { path: '/library/foundations/allow-content-to-direct-the-shape', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/library/figures/the-dragon',                         changeFrequency: 'monthly', priority: 0.6 },
  { path: '/library/figures/merri-when-time-stops',              changeFrequency: 'monthly', priority: 0.6 },
  { path: '/library/figures/grismere',                           changeFrequency: 'monthly', priority: 0.6 },
  { path: '/library/figures/queen-ann-between-kingdoms',         changeFrequency: 'monthly', priority: 0.6 },
  { path: '/library/figures/ballerina',                          changeFrequency: 'monthly', priority: 0.6 },
  { path: '/library/voices',                                     changeFrequency: 'monthly', priority: 0.5 },
  { path: '/gallery',                                            changeFrequency: 'monthly', priority: 0.7 },
  { path: '/deck',                                               changeFrequency: 'monthly', priority: 0.7 },
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
