import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EditionReader from '@/components/EditionReader/EditionReader'
import { editions } from '@/data/editions'

export function generateStaticParams() {
  return editions.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const edition = editions.find((e) => e.slug === params.slug)
  if (!edition) return {}
  return {
    title: `Read ${edition.title} — AwakenArts`,
    description: `Read the ${edition.title} Figure Edition — image and word, paced one screen at a time.`,
    alternates: { canonical: `/editions/${edition.slug}/read` },
  }
}

/*
 * The Reader — Implementation Spec v1.0, Section 5. Deliberately bare: no
 * <Nav />, no WayfindingBand, no <footer>. The Reader's own top bar (built
 * inside EditionReader) is the only chrome while reading; the landing page
 * at /editions/[slug] is where all of that returns.
 */
export default function EditionReadPage({ params }: { params: { slug: string } }) {
  const edition = editions.find((e) => e.slug === params.slug)
  if (!edition) return notFound()

  return <EditionReader edition={edition} />
}
