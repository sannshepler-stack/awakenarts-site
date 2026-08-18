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
    description: `Explore ${edition.title}, a symbolic content world used within the AwakenArts workshop experience.`,
    alternates: { canonical: `/editions/${edition.slug}` },
  }
}

/*
 * Individual edition page — third tier of the Collection's visual hierarchy
 * (Collection Banner → Edition Preview Sheets → Individual Figure Pages).
 * Deliberately minimal: the edition itself does the work. No explanatory
 * copy beyond what's necessary to orient.
 *
 * 2026-06-29 — Edition Preview enrichment, per Susan's relayed brief ("Chat
 * has offered this for you"): "This page is an introduction to the work,
 * not a sales page." Added About This Edition and Themes.
 *
 * Revised same day, after a first draft of About leaned into interpretation
 * ("What does the Dragon mean?") rather than orientation. Susan's
 * correction, now the governing rule for this section across all six
 * Editions:
 *   - About This Edition -> describes the Edition as the changing symbolic
 *     world used within Susan's consistent workshop practice. It orients
 *     visitors without explaining what the figure means.
 *   - Themes -> suggests the territory in a few words, nothing more.
 *   - The Edition itself -> does the actual symbolic work. See `editions.ts`
 *     for the full rule as recorded against the data.
 * The redundant "What This Edition Includes" block (which restated the same
 * information as a second, separate list) was removed in this same pass —
 * About now does that job on its own.
 *
 * The former direct `View the Figure Edition (PDF)` link has also been
 * removed. It had been quietly handing over the complete Edition from the
 * Preview page itself, which contradicts the Preview's own governing
 * constraint, recorded in AwakenArts_Publishing_Platform_Architecture.md:
 * it "must increase desire without ever exposing the complete Edition." The
 * Under the 2026-08-18 workshop-centered paradigm, purchase routes redirect
 * here and the public action is an Edition-specific workshop inquiry.
 */
export default function EditionPage({ params }: { params: { slug: string } }) {
  const edition = editions.find((e) => e.slug === params.slug)
  if (!edition) return notFound()
  const workshopInquiry = `mailto:susan@shepler.us?subject=${encodeURIComponent(
    `${edition.title} AwakenArts Workshop Inquiry`,
  )}&body=${encodeURIComponent(
    `Hi Susan,\n\nI'd like to ask about an AwakenArts workshop using ${edition.title}.`,
  )}`

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

        <section className="edition-about">
          <p className="eyebrow edition-about__eyebrow">About This Edition</p>
          <p className="edition-about__body">{edition.about}</p>
          <p className="eyebrow edition-themes__eyebrow">Themes</p>
          <p className="edition-themes">
            {edition.themes.join(' · ')}
          </p>
        </section>

        <section className="edition-actions">
          <a href={workshopInquiry} className="edition-actions__link">
            Inquire About a Workshop Using {edition.title} <span aria-hidden="true">→</span>
          </a>
          <Link href="/workshops" className="edition-actions__link">
            Explore the Workshop Experience <span aria-hidden="true">→</span>
          </Link>
          <Link href="/workshops#workshop-worlds" className="edition-actions__back">
            ← Back to the Workshop Worlds
          </Link>
        </section>
      </main>

      <footer className="edition-footer">
        <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
      </footer>
    </>
  )
}
