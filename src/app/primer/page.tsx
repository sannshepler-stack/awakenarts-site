import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import ProtectedImage from '@/components/ProtectedImage'

export const metadata: Metadata = {
  title: 'The AwakenArts Path — The Digital Primer — AwakenArts',
  description:
    'The AwakenArts Path: Poetry, Image, and the Practice of Recognition — the AwakenArts Digital Primer. An illustrated introduction to the symbolic language, images, poetry, and reflective approach behind AwakenArts. Read or download it free.',
  alternates: { canonical: '/primer' },
  openGraph: {
    url: '/primer',
    title: 'The AwakenArts Path — The Digital Primer',
    description:
      'Poetry, Image, and the Practice of Recognition — an illustrated introduction to the symbolic language, images, poetry, and reflective approach behind AwakenArts.',
  },
}

/*
 * /primer — the Digital Primer housing page.
 *
 * Built 2026-07-25 per Susan's "Integrate the AwakenArts Digital Primer"
 * directive, then substantially revised the same day per her "AwakenArts
 * Primer Housing Page — Revision Directive":
 *
 *   - The Primer card that briefly lived on /encounters is removed --
 *     Encounters is "already one of the strongest pages on the site,"
 *     its five-part Journey/Deep/Table/Word/Continue sequence a complete
 *     experience in its own right, not to be interrupted or restructured.
 *   - /primer is now reached directly: "Explore the Path" (Nav + the
 *     homepage hero CTA) links here first, not to /encounters. See
 *     src/components/Nav.tsx and src/app/page.tsx.
 *   - This page's own closing section now hands the visitor onward to
 *     Encounters ("Begin the Encounter Sequence"), completing the
 *     sequence itself: Home -> Explore the Path -> Primer -> Encounters.
 *   - Public title changed to "The AwakenArts Path / Poetry, Image, and
 *     the Practice of Recognition" -- explicitly not "The AwakenArts
 *     Method" (the source PDF's own internal title), per Susan's
 *     directive.
 *
 * Editorial roles (per the same directive, governing this page's voice):
 * Primer = orientation, Encounters = experience, Seek & Find = sustained
 * practice, Collection = exploration of the larger body of work. This
 * page's job is orientation only -- it explains the language of
 * AwakenArts, then hands off to the experience.
 *
 * Structure still mirrors /editions/[slug] (hero eyebrow + title, cover
 * image, purpose copy, action row) rather than inventing new page
 * furniture -- see primer-hero / primer-cover / primer-about /
 * primer-actions / primer-closing in globals.css.
 *
 * Access: per Susan's explicit direction, both Read and Download are
 * open and ungated -- no EmailGateDownload. The Primer is the
 * instructional gateway to understanding AwakenArts and should not
 * require an email address before a visitor can read it.
 */
export default function PrimerPage() {
  return (
    <>
      <Nav />

      <main className="primer-page">
        <section className="primer-hero">
          <p className="eyebrow primer-hero__eyebrow">The Digital Primer</p>
          <h1 className="primer-hero__title">The AwakenArts Path</h1>
          <p className="primer-hero__subtitle">
            Poetry, Image, and the Practice of Recognition
          </p>
        </section>

        <section className="primer-cover-section">
          <ProtectedImage
            src="/images/primer/when-language-shapes-a-path-cover.jpg"
            alt="The AwakenArts Path — cover of the AwakenArts Digital Primer"
            className="primer-cover-img"
            loading="eager"
          />
        </section>

        <section className="primer-about">
          <p className="primer-about__body">
            Begin here with an illustrated introduction to the symbolic
            language, images, poetry, and reflective approach behind
            AwakenArts.
          </p>
          <p className="primer-about__body">
            Learn how an image invites attention, how a poem gives
            language to what is noticed, and how meaning can arrive
            through recognition rather than explanation.
          </p>
        </section>

        <section className="primer-actions">
          <a
            href="/files/primer/AwakenArts_Path_Digital_Primer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primer-actions__link"
          >
            Read the Primer <span aria-hidden="true">↗</span>
          </a>
          <a
            href="/files/primer/AwakenArts_Path_Digital_Primer.pdf"
            download="AwakenArts_Path_Digital_Primer.pdf"
            className="primer-actions__link"
          >
            Download the Primer <span aria-hidden="true">↓</span>
          </a>
        </section>

        {/* ── Begin the Encounter Sequence ──────────────────────────
            2026-07-25, per Susan's Revision Directive: the page's one
            closing handoff, onward into Encounters -- replaces the
            earlier non-clickable "Seek & Find -- Coming Soon" block,
            since this page's sequence now ends at Encounters, not Seek
            & Find (which remains a separate destination -- "sustained
            practice" -- not chained after the Primer). A single
            purpose per element: one closing invitation, not two. */}
        <section className="primer-closing">
          <h2 className="primer-closing__title">Ready to begin?</h2>
          <p className="primer-closing__body">
            Continue into the Encounter Sequence, where image, language,
            reflection, and Scripture unfold through five movements.
          </p>
          <Link href="/encounters" className="primer-closing__cta">
            Begin the Encounter Sequence <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
