import type { Metadata, Viewport } from 'next'
import './globals.css'

// Canonical URL of the production site. All Open Graph, Twitter card,
// canonical, and JSON-LD URLs are resolved against this.
const SITE_URL = 'https://awakenarts.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C2B3A',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AwakenArts — When Language Shapes a Path',
    template: '%s | AwakenArts',
  },
  description:
    'AwakenArts is a growing collection of works that join image and language the way Scripture itself so often does — through parable, poetry, and symbol — made to be returned to slowly, again and again. By Susan Ann Shepler.',
  applicationName: 'AwakenArts',
  authors: [{ name: 'Susan Ann Shepler', url: SITE_URL + '/about' }],
  creator: 'Susan Ann Shepler',
  publisher: 'AwakenArts',
  keywords: [
    'AwakenArts',
    'Susan Ann Shepler',
    'Christian tradition',
    'Biblical imagery',
    'parable and poetry',
    'concrete poetry',
    'symbolic imagery',
    'symbolic figures',
    'figurative language',
    'Whispers of Awareness',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'AwakenArts',
    type: 'website',
    url: SITE_URL,
    title: 'AwakenArts — When Language Shapes a Path',
    description:
      'AwakenArts is a growing collection of works that join image and language the way Scripture itself so often does — through parable, poetry, and symbol — made to be returned to slowly, again and again. By Susan Ann Shepler.',
    locale: 'en_US',
    images: [
      {
        url: '/images/brand/queen-ann-hero-desktop.jpg',
        width: 1600,
        height: 1100,
        alt: 'Queen Ann — a painted figure standing within a symbolic narrative, central to the AwakenArts identity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AwakenArts — When Language Shapes a Path',
    description:
      'AwakenArts is a growing collection of works that join image and language the way Scripture itself so often does — through parable, poetry, and symbol — made to be returned to slowly, again and again. By Susan Ann Shepler.',
    images: ['/images/brand/queen-ann-hero-desktop.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

// JSON-LD structured data — Person + Organization + WebSite.
// Embedded once at the root so every page carries the identity graph.
// Search engines and AI tools use these blocks to disambiguate the site
// (which Susan, which AwakenArts) and to surface rich results.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Susan Ann Shepler',
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/images/about/susan-ann-shepler.jpg`,
      jobTitle: 'Artist and Writer',
      description:
        'Artist and writer. Creator of AwakenArts and the Within the Circle series of concrete poems and readings, working in the literary-symbolic tradition Scripture itself has always used — parable, image, and figure. Author of Whispers of Awareness (2025).',
      knowsLanguage: ['en', 'es'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Georgetown',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Webster University',
      },
      hasCredential: [
        'Master in Counseling Psychology — Spirituality and Play Therapy',
        'Certified Transformative Language Artist',
        'Certified Journal Instructor',
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'AwakenArts',
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand/logo.png`,
      founder: { '@id': `${SITE_URL}/#person` },
      description:
        'Concrete poetry and symbolic form — language given shape in the same literary mode Scripture itself uses: parable, image, and figure. By Susan Ann Shepler.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'AwakenArts',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // JSON-LD must be injected as a string; Next.js does not parse
          // the object for us when emitting <script> tags.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
