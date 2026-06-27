import type { MetadataRoute } from 'next'

// robots.txt — generated programmatically by Next.js.
// Goal: be welcoming to mainstream search and AI crawlers, while
// keeping unfinished encounter sub-pages out of the index until
// they ship. The individual encounter pages (mermaid, dragon, etc.)
// are still reachable via the /encounters entry; we just don't want
// search engines surfacing them as standalone results yet.

const SITE_URL = 'https://awakenarts.com'

// AI / LLM crawlers we explicitly want to allow.
// Listing them by name (rather than relying on User-agent: *) makes
// the welcome unambiguous and survives future changes to defaults.
const ALLOWED_BOTS = [
  'GPTBot',          // OpenAI training crawler
  'ChatGPT-User',    // OpenAI on-demand fetches
  'OAI-SearchBot',   // OpenAI search
  'ClaudeBot',       // Anthropic training crawler
  'Claude-Web',      // Anthropic on-demand fetches
  'anthropic-ai',    // Anthropic legacy
  'PerplexityBot',   // Perplexity index
  'Perplexity-User', // Perplexity on-demand
  'Google-Extended', // Google AI training opt-in
  'Applebot',        // Apple / Siri
  'Applebot-Extended',
  'CCBot',           // Common Crawl (used by many models)
  'Amazonbot',
  'Bytespider',
  'DuckAssistBot',
]

// Encounters architecture (2026-06-25): the figure-tied encounters
// (dragon, vase/Bowls, queen, butterfly, continuum) and the old Mermaid
// route (now a redirect into /encounters/journey) are all set aside —
// not deleted, just unlinked from the new index — so they stay
// disallowed rather than indexed as standalone results.
//
// Unlisted Page System (2026-06-27): pages built and live on the site
// but deliberately left out of Nav/WayfindingBand/Footer, reachable only
// by direct URL until published into navigation. Listed here so search
// engines don't surface them early. See AwakenArts_Site_Architecture.md
// -> "Unlisted Page System" for the full convention.
const DISALLOWED_PATHS = [
  '/encounters/vase',
  '/encounters/dragon',
  '/encounters/queen',
  '/encounters/butterfly',
  '/encounters/continuum',
  '/encounters/mermaid',
  '/workshops',
  '/api/',
  '/_next/',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      ...ALLOWED_BOTS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: DISALLOWED_PATHS,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
