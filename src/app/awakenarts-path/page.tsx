import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import ProtectedImage from '@/components/ProtectedImage'

export const metadata: Metadata = {
  title: 'The AwakenArts Path — An Introduction to AwakenArts',
  description:
    'The AwakenArts Path: Poetry, Image, and Seeing Your Life — an illustrated introduction to the symbolic language, images, poetry, and reflective approach behind AwakenArts. Read or download it free.',
  alternates: { canonical: '/awakenarts-path' },
  openGraph: {
    url: '/awakenarts-path',
    title: 'The AwakenArts Path — An Introduction to AwakenArts',
    description:
      'Poetry, Image, and Seeing Your Life — an illustrated introduction to the symbolic language, images, poetry, and reflective approach behind AwakenArts.',
  },
}

/*
 * /awakenarts-path — the AwakenArts Path housing page.
 *
 * Built 2026-07-25 per Susan's "Integrate the AwakenArts Digital Primer"
 * directive, then substantially revised the same day per her "AwakenArts
 * Primer Housing Page — Revision Directive," and renamed 2026-07-27 per
 * her "no Primer anywhere" directive: the route moved from /primer to
 * /awakenarts-path (a permanent redirect from the old route lives in
 * next.config.js), the underlying asset moved from public/files/primer/
 * to public/files/path/, and every label/filename/class name that used
 * to read "Primer" now reads "Path." The document's own title, on the
 * page and inside the PDF, has always been "The AwakenArts Path" --
 * "Primer" was only ever internal, technical naming, and Susan asked
 * that it be retired everywhere, not just in what visitors see.
 *
 *   - The card that briefly lived on /encounters is removed --
 *     Encounters is "already one of the strongest pages on the site,"
 *     its five-part Journey/Deep/Table/Word/Continue sequence a complete
 *     experience in its own right, not to be interrupted or restructured.
 *   - This page is reached directly: "The Path" (Nav + the homepage hero
 *     invitation) links here first, not to /encounters. See
 *     src/components/Nav.tsx and src/app/page.tsx.
 *   - This page's own closing section hands the visitor onward to
 *     Encounters: a thin gold divider and a single quiet text link,
 *     "Experience the Encounters" -- no heading, no explanatory
 *     sentence, no filled button, no arrow. The visitor has already
 *     begun by reading the Path; the closing shouldn't restart or
 *     overexplain that.
 *   - Public title is "The AwakenArts Path / Poetry, Image, and the
 *     Practice of Recognition" -- explicitly not "The AwakenArts
 *     Method," an earlier internal working title.
 *
 * Editorial roles (governing this page's voice): the Path = orientation,
 * Encounters = experience, Seek & Find = sustained practice, Collection
 * = exploration of the larger body of work. This page's job is
 * orientation only -- it explains the language of AwakenArts, then
 * hands off to the experience.
 *
 * Structure still mirrors /editions/[slug] (hero eyebrow + title, cover
 * image, purpose copy, action row) rather than inventing new page
 * furniture -- see path-intro-hero / path-intro-cover / path-intro-about /
 * path-intro-actions / path-intro-btn / path-intro-close in globals.css.
 *
 * Access: per Susan's explicit direction, both Read and Download are
 * open and ungated -- no EmailGateDownload. The Path is the
 * instructional gateway to understanding AwakenArts and should not
 * require an email address before a visitor can read it.
 */
export default function AwakenArtsPathPage() {
  return (
    <>
      <Nav />

      <main className="path-intro-page">
        {/* 2026-08-19, per the Rework Pass 2 Implementation Standard:
            subtitle changed from "...the Practice of Recognition" --
            "recognition" no longer names AwakenArts' fuller model
            (engage/relate/teach/train/inspire/move forward), and the
            phrase told a visitor nothing about what they'd get. Note:
            this same phrase likely still appears inside the PDF itself
            (its page 4 heading is "Learning the Language of
            Recognition") -- the PDF asset is unchanged in this pass,
            so a small mismatch between this page and the document it
            introduces exists until the PDF is revisited separately. */}
        <section className="path-intro-hero">
          <p className="eyebrow path-intro-hero__eyebrow">An Introduction to AwakenArts</p>
          <h1 className="path-intro-hero__title">The AwakenArts Path</h1>
          <p className="path-intro-hero__subtitle">
            Poetry, Image, and Seeing Your Life
          </p>
        </section>

        <section className="path-intro-cover-section">
          <ProtectedImage
            src="/images/path/when-language-shapes-a-path-cover.jpg"
            alt="The AwakenArts Path — cover"
            className="path-intro-cover-img"
            loading="eager"
          />
        </section>

        <section className="path-intro-about">
          {/* 2026-08-19, per the Rework Pass 2 Implementation Standard:
              prior copy asked the visitor to "learn" AwakenArts'
              internal vocabulary (symbolic language, recognition vs.
              explanation) before explaining what the Path actually
              does for them. Rewritten to name the real, concrete
              movement -- story/image draws you in, a poem gives it
              words, reflection helps without dictating meaning -- per
              Section 7's "Path / core explanation" standard. */}
          <p className="path-intro-about__body">
            This is a short introduction to how AwakenArts works — read
            it before your first Encounter or workshop.
          </p>
          <p className="path-intro-about__body">
            A story or image draws you in. A poem gives it words.
            Reflection helps you see what you already sensed but hadn&rsquo;t
            quite named — without anyone telling you what it has to mean.
          </p>
        </section>

        {/* 2026-07-25, per Susan's "Primer Action System" refinement:
            arrows removed, dark solid fill replaced with the shared
            .path-intro-btn treatment -- Read and Download share one
            outlined style, differing only in destination. Destinations/
            behavior (target, download attr) unchanged.
            2026-07-26, per Susan's "consistent gold-outline system"
            directive: .path-intro-btn--primary / --secondary (which added
            pale-gold-tint and plain-cream background fills on top of
            the shared style) are removed -- both buttons now render
            identically via bare .path-intro-btn (transparent background,
            gold border and text, pale gold hover only, no navy/brown
            fill in any state). Hierarchy was never meant to live in
            fill color; width alone still distinguishes .path-intro-btn
            from the narrower .path-intro-btn--quiet used below.
            2026-07-27, per Susan's "no Primer anywhere" directive: labels
            changed from "Read the Primer" / "Download the Primer" to
            "Read the Path" / "Download the Path"; the linked file moved
            to /files/path/AwakenArts_Path_Intro.pdf. */}
        <section className="path-intro-actions">
          <a
            href="/files/path/AwakenArts_Path_Intro.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="path-intro-btn"
          >
            Read the Path
          </a>
          <a
            href="/files/path/AwakenArts_Path_Intro.pdf"
            download="AwakenArts_Path_Intro.pdf"
            className="path-intro-btn"
          >
            Download the Path
          </a>
        </section>

        {/* ── Closing ───────────────────────────────────────────────
            2026-07-25, per Susan's "Homepage Hero and Primer Closing
            Revision" directive: no heading, no explanatory sentence, no
            arrow, no reference to an "Encounter Sequence" or to
            beginning/readiness -- the visitor has already begun by
            reading the Path. The complete closing idea, per her own
            framing: gold line -> pause -> Experience the Encounters.
            2026-07-25, later the same day, per her "Primer Action
            System" refinement: the link now uses .path-intro-btn--quiet
            (the same unified style as Read/Download, just narrower)
            instead of .hero-invitation__title -- that treatment's own
            underline stacked with this section's divider into a double-
            rule effect; removed in favor of one consistent action
            language across all three.
            2026-07-26, per Susan's navigation-ecosystem directive: this
            CTA is retained verbatim -- "after learning the language and
            framework of AwakenArts, the natural next step is to enter
            the Encounters." Encounters carries the reciprocal invitation
            back to The Path in its own closing section (see
            src/app/encounters/page.tsx). */}
        <section className="path-intro-close">
          <div className="path-intro-close-divider" aria-hidden="true" />
          <Link href="/encounters" className="path-intro-btn path-intro-btn--quiet">
            Experience the Encounters
          </Link>
        </section>
      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
