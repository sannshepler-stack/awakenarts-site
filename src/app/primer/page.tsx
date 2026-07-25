import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import ProtectedImage from '@/components/ProtectedImage'

export const metadata: Metadata = {
  title: 'When Language Shapes a Path — The Digital Primer — AwakenArts',
  description:
    'When Language Shapes a Path is the AwakenArts Digital Primer — an illustrated introduction to the symbolic language, images, poetry, and reflective approach behind AwakenArts. Read or download it free.',
  alternates: { canonical: '/primer' },
  openGraph: {
    url: '/primer',
    title: 'When Language Shapes a Path — The Digital Primer',
    description:
      'An illustrated introduction to the symbolic language, images, poetry, and reflective approach behind AwakenArts.',
  },
}

/*
 * /primer — the Digital Primer landing page.
 *
 * Built 2026-07-25 per Susan's "Integrate the AwakenArts Digital Primer"
 * directive and her follow-up refinements the same day. Reached as the
 * first substantial step of the "Explore the Path" pathway (Homepage ->
 * /encounters -> here), with a quiet transition onward to Seek & Find at
 * the bottom of this page -- not a second, competing "Explore the Path"
 * destination.
 *
 * Structure deliberately mirrors /editions/[slug] (the site's other
 * standalone "introduce a single published work" page: hero eyebrow +
 * title, cover image, purpose copy, action row) rather than inventing new
 * page furniture -- see primer-hero / primer-cover / primer-about /
 * primer-actions in globals.css. Scoped as its own primer-* classes
 * rather than reusing edition-* directly, since this isn't a Figure
 * Edition and shouldn't couple to that system's future changes.
 *
 * Access: per Susan's explicit direction, both Read and Download are
 * open and ungated -- no EmailGateDownload. The Primer is the
 * instructional gateway to understanding AwakenArts and should not
 * require an email address before a visitor can read it. (Voluntary,
 * separate email capture may be offered later; it must not obstruct
 * access.) "Read" opens the PDF directly in the browser's native reader
 * (new tab); "Download" triggers a save of the same file.
 *
 * Seek & Find: Volume I has no live product page yet, so the closing
 * section is a plain, non-interactive "Coming Soon" label -- not a
 * <Link>/<a>, no href, so there is no dead or misleading purchase
 * button. Swap for a real <Link> once /seek-and-find (or similar)
 * exists.
 */
export default function PrimerPage() {
  return (
    <>
      <Nav />

      <main className="primer-page">
        <section className="primer-hero">
          <p className="eyebrow primer-hero__eyebrow">The Digital Primer</p>
          <h1 className="primer-hero__title">When Language Shapes a Path</h1>
        </section>

        <section className="primer-cover-section">
          <ProtectedImage
            src="/images/primer/when-language-shapes-a-path-cover.jpg"
            alt="When Language Shapes a Path — cover of the AwakenArts Digital Primer"
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

        {/* ── Continue with Seek & Find ─────────────────────────────
            Non-clickable per Susan's explicit direction: Seek & Find
            Volume I has no live product page yet, so this is a plain
            label, not a link or button of any kind. */}
        <section className="primer-seekfind">
          <p className="eyebrow primer-seekfind__eyebrow">Continue with Seek & Find</p>
          <h2 className="primer-seekfind__title">Seek & Find Volume I</h2>
          <p className="primer-seekfind__body">
            A guided journal for noticing, recognizing, and responding to
            what an image and its language awaken.
          </p>
          <span className="primer-seekfind__badge" aria-disabled="true">
            Seek &amp; Find Volume I — Coming Soon
          </span>
        </section>

        <p className="primer-back">
          <Link href="/encounters" className="primer-back__link">
            ← Back to Explore the Path
          </Link>
        </p>
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
