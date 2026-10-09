import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'
import TextLink, { TextLinkRow } from '@/components/TextLink'
import PathLearning, { PathContinue, PathPractice } from '@/components/path/PathLearning'

export const metadata: Metadata = {
  title: 'The AwakenArts Path — What Symbol Awareness Can Teach',
  // 2026-10-09, Susan: search description states what visitors will learn.
  description:
    'What symbol awareness can teach you: how to notice the symbols you already live with, see yourself more clearly, understand others, culture, and faith, and carry reflection into everyday life.',
  alternates: { canonical: '/awakenarts-path' },
  openGraph: {
    url: '/awakenarts-path',
    title: 'The AwakenArts Path — What Symbol Awareness Can Teach',
    description:
      'What symbol awareness can teach you: notice the symbols you already live with, see yourself more clearly, understand others, culture, and faith, and carry reflection into everyday life.',
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
        {/* 2026-10-09, Susan: header image — a stone path past an olive tree
            toward the valley at sunrise. Same treatment as Explore's header. */}
        <AtmosphericHeader
          src="/images/headers/awakenarts-path-landscape.jpg"
          alt="A stone path winding past an olive tree toward a misty valley and lake at sunrise"
          fadeTo="var(--cream)"
        />
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
        <section className="path-intro-hero" style={{ paddingTop: '1.5rem' }}>
          <h1 className="path-intro-hero__title">The AwakenArts Path</h1>
          <p className="path-intro-hero__subtitle">
            Poetry, Image, and Seeing Your Life
          </p>
        </section>

        {/* 2026-10-09, Susan: the book (cover, introduction line, Read and
            Download) moved to its own page, /about/introduction, so this
            page serves as the learning path. The opening paragraph stays. */}
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
            A story or image draws you in. A poem gives it words.
            Reflection helps you see what you already sensed but hadn&rsquo;t
            quite named — without anyone telling you what it has to mean.
          </p>
        </section>

        <PathLearning />

        <PathPractice />

        <PathContinue />

        {/* 2026-10-07, Susan: tie the Path and My Foundation together.
            2026-10-09, Susan: moved to the end of the page, after Where to
            Continue, so it closes the page rather than interrupting the
            movement from learning to application. Lines
            are verbatim from /foundation; the Foundation card leaves Explore. */}
        <section className="path-foundation" aria-labelledby="path-foundation-heading" style={{ paddingTop: '3.5rem' }}>
          <div className="path-intro-close-divider" aria-hidden="true" />
          <p className="eyebrow" style={{ justifyContent: 'center' }}>My Foundation</p>
          <h2 id="path-foundation-heading" className="path-foundation__line">
            Every life tells its story in ways that are often quieter than words.
          </h2>
          <p className="path-intro-about__body">
            Over time I came to understand that recognition is only the beginning. Awareness invites acceptance.
            Acceptance makes honest action possible.
          </p>
          <TextLinkRow center>
            <TextLink href="/foundation" cta="path-foundation">Read My Foundation</TextLink>
          </TextLinkRow>
        </section>

      </main>

      <WayfindingBand />
      <Footer />
    </>
  )
}
