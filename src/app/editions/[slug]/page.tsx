import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import ProtectedImage from '@/components/ProtectedImage'
import { editions } from '@/data/editions'

export function generateStaticParams() {
  return editions.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const edition = editions.find((e) => e.slug === params.slug)
  if (!edition) return {}
  return {
    title: `${edition.title} — Figure Edition — AwakenArts`,
    description: `The ${edition.title} Figure Edition, an AwakenArts published work.`,
    alternates: { canonical: `/editions/${edition.slug}` },
  }
}

/*
 * Individual edition page — third tier of the Collection's visual hierarchy
 * (Collection Banner → Edition Preview Sheets → Individual Figure Pages).
 * Deliberately minimal: the edition itself does the work. No explanatory
 * copy beyond what's necessary to orient and offer the PDF.
 */
export default function EditionPage({ params }: { params: { slug: string } }) {
  const edition = editions.find((e) => e.slug === params.slug)
  if (!edition) return notFound()

  return (
    <>
      <Nav />
      <main className="edition-page">
        <section className="edition-hero">
          <p className="eyebrow edition-hero__eyebrow">{edition.kicker}</p>
          <h1 className="edition-hero__title">{edition.title}</h1>
        </section>

        <section className="edition-sheet-section">
          <ProtectedImage
            src={edition.contactSheet}
            alt={edition.contactSheetAlt}
            className="edition-sheet-img"
            loading="lazy"
          />
        </section>

        <section className="edition-actions">
          <a href={edition.pdf} className="edition-actions__link" target="_blank" rel="noopener noreferrer">
            View the Figure Edition (PDF) <span aria-hidden="true">→</span>
          </a>
          <Link href="/collection" className="edition-actions__back">
            ← Back to the Collection
          </Link>
        </section>
      </main>

      <footer className="edition-footer">
        <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
      </footer>
    </>
  )
}
