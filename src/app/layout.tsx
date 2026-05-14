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
    default: 'AwakenArts — Where Symbol Meets Soul',
    template: '%s | AwakenArts',
  },
  description:
    'AwakenArts is a guided encounter with the symbolic life of the soul — rooted in the Christian tradition, in the language of image and symbol. Original concrete poetry, symbolic figures, and a 52-card guidance deck by Susan Ann Shepler.',
  applicationName: 'AwakenArts',
  authors: [{ name: 'Susan Ann Shepler', url: SITE_URL + '/about' }],
  creator: 'Susan Ann Shepler',
  publisher: 'AwakenArts',
  keywords: [
    'AwakenArts',
    'Susan Ann Shepler',
    'Christian tradition',
    'Christian mysticism',
    'concrete poetry',
    'symbolic imagery',
    'symbolic figures',
    'interior life',
    'transformational language arts',
    'guidance deck',
    'Whispers of Awareness',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'AwakenArts',
    type: 'website',
    url: SITE_URL,
    title: 'AwakenArts — Where Symbol Meets Soul',
    description:
      'A guided encounter with the symbolic life of the soul — rooted in the Christian tradition, in image and symbol. Original concrete poetry and symbolic figures by Susan Ann Shepler.',
    locale: 'en_US',
    images: [
      {
        url: '/images/brand/queen-ann-hero-desktop.jpg',
        width: 1600,
        height: 1100,
        alt: 'Queen Ann — a painted figure in contemplation, central to the AwakenArts identity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AwakenArts — Where Symbol Meets Soul',
    description:
      'A guided encounter with the symbolic life of the soul — rooted in the Christian tradition, in image and symbol. Original concrete poetry and symbolic figures.',
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
      jobTitle: 'Artist, Writer, Depth-Oriented Counselor',
      description:
        'Artist, writer, facilitator, and depth-oriented counselor. Creator of AwakenArts, author of Whispers of Awareness, and originator of the AwakenArts Guidance Deck.',
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
        'Original symbolic figures for the interior life — rooted in the Christian tradition, created through the transformative language arts process. By Susan Ann Shepler.',
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
