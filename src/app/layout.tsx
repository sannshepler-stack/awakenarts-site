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
    'AwakenArts is a literary-symbolic workshop practice conducted by Susan Ann Shepler. Figure Editions, Encounters, Symbols, poetry, imagery, and journals support recognition, reflection, and conscious language.',
  applicationName: 'AwakenArts',
  authors: [{ name: 'Susan Ann Shepler', url: SITE_URL + '/about' }],
  creator: 'Susan Ann Shepler',
  publisher: 'AwakenArts',
  keywords: [
    'AwakenArts',
    'Susan Ann Shepler',
    'Figure Editions',
    'Encounters',
    'symbolic language',
    'figurative language',
    'symbolic imagery',
    'Christian reflection',
    'Christian art',
    'original artwork',
    'image and poem',
    'visual poetry',
    'literary art',
    'reflective journaling',
    'workshops',
    'Georgetown Texas artist',
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
      'AwakenArts is a literary-symbolic workshop practice conducted by Susan Ann Shepler. Each Figure Edition opens a different symbolic world within a consistent experience of recognition and reflection.',
    locale: 'en_US',
    images: [
      {
        url: '/images/brand/og-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Chess Ann — a symbolic word-figure central to the AwakenArts collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AwakenArts — When Language Shapes a Path',
    description:
      'Explore literary-symbolic workshops conducted by Susan Ann Shepler, with changing Figure Editions and a consistent practice of recognition and reflection.',
    images: ['/images/brand/og-hero.jpg'],
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
  /* Favicon/emblem identity system, locked 2026-07-14 per Susan's
   * "Favicon and Emblem Export Directive" and its approval ("the emblem
   * now behaves as a genuine identity system — from browser favicon
   * through mobile icon to large brand application"). Every file below
   * is rendered directly from the single approved vector master
   * (brand-assets/vector-masters/AwakenArts-Emblem-A-Outlined.svg) —
   * see brand-assets/favicon-masters/ for the build and the legibility
   * proofs. favicon.svg is listed first so SVG-capable browsers use the
   * true vector source at any pixel density; the ICO and sized PNGs are
   * the fallback chain for everything else. */
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
      jobTitle: 'Artist, Writer, and Workshop Practitioner',
      description:
        'Artist, writer, and practitioner who conducts AwakenArts literary-symbolic workshops. Creator of the Within the Circle series of concrete poems and readings, and author of Whispers of Awareness (2025).',
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
      // These are Susan's verified public profiles, already exposed in
      // the global footer with rel="me". Keep them on the Person entity
      // rather than implying that separate AwakenArts organization
      // accounts have been established.
      sameAs: [
        'https://www.instagram.com/s.shepler/',
        'https://www.pinterest.com/sshepler/',
        'https://www.linkedin.com/in/sannshepler/',
      ],
      // Corrected 2026-07-15 per the AwakenArts Legal and Risk Standards
      // package, Stage 1 item 3: the credential previously read "Master
      // in Counseling Psychology — Spirituality and Play Therapy."
      // "Play Therapy" is explicit clinical-modality language,
      // prohibited under Section 6 of the standard regardless of
      // context (the same phrase was already flagged and rejected on
      // Susan's Instagram bio — see 06-External-Profile-Register.md).
      // This field now states only the factual degree, per Section 5's
      // credential standard: the master's degree may appear factually,
      // but not framed as an active clinical-practice credential.
      hasCredential: [
        "Master's degree in Counseling",
        'Certified Transformative Language Artist',
        'Certified Journal Instructor',
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'AwakenArts',
      url: SITE_URL,
      // Corrected 2026-07-15 per the AwakenArts Legal and Risk
      // Standards package, Stage 1 item 7: this pointed at
      // /images/brand/logo.png, a file dated Jul 12 — before the Jul
      // 14 favicon/emblem identity system was locked as the approved
      // standard (see brand-assets/README.md). That old file had no
      // other reference anywhere in the codebase. Now points at the
      // current approved square emblem export, live since approval.
      logo: `${SITE_URL}/android-chrome-512x512.png`,
      founder: { '@id': `${SITE_URL}/#person` },
      description:
        'A literary-symbolic workshop practice conducted by Susan Ann Shepler. Figure Editions, Encounters, Symbols, poetry, imagery, and journals support and extend the experience.',
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
