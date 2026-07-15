import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — AwakenArts',
  description:
    'Susan Ann Shepler — artist, writer, and creator of AwakenArts. A body of work shaped through image, language, and symbolic form.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: '/about',
    title: 'About — AwakenArts',
    description:
      'Susan Ann Shepler — artist, writer, and creator of AwakenArts.',
    images: [{ url: '/images/about/susan-ann-shepler.jpg', alt: 'Susan Ann Shepler' }],
  },
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      <AtmosphericHeader
        src="/images/headers/about.jpg"
        alt="An open book, dried flowers, and a stack of well-worn books on a sunlit table overlooking a hillside at sunset — a quiet place to write and reflect."
        fadeTo="#f5f0e8"
      />

      <div className="about-page">
        <main className="about-main">

          {/* ── OPENING — portrait floats right within the prose ──────
              Image appears first in source so the float begins at
              the top of the block. Eyebrow, heading, credentials,
              and paragraphs flow naturally around it to the left.
              Portrait is modest — establishes authorship, not presence.
          ──────────────────────────────────────────────────────────── */}
          <div className="about-opening">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/susan-ann-shepler.jpg"
              alt="Susan Ann Shepler"
              className="about-portrait"
              loading="eager"
            />
            <p className="eyebrow">About</p>
            <h1 className="about-h1">Susan Ann Shepler</h1>
            {/* 2026-06-30, per Susan's revision: the two professional
                certifications now get their own lines, each with its
                governing body's acronym, beneath the unchanged
                "Artist · Writer · MA Counseling" line. Three lines
                instead of two — see .about-credentials in globals.css
                for the matching size reduction. */}
            <p className="about-credentials">
              Artist · Writer · MA Counseling<br />
              Certified Transformative Language Artist (TLAN)<br />
              Certified Journal Instructor (CJT)
            </p>
          </div>

          {/* ── MERRI — visual interrupt ───────────────────────────────
              Full column width. The visual anchor of the page.
              Placed directly after "the words construct the figure" —
              the image is the evidence of that statement.
          ──────────────────────────────────────────────────────────── */}
          <figure className="about-merri">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/merri-art.png"
              alt="Merriweather — a symbolic poetic form: figure, poem, and image as one constructed work"
              className="about-merri-img"
              loading="lazy"
            />
            <figcaption className="about-caption">
              Merriweather — figure, poem, and image constructed as one symbolic form.
            </figcaption>
          </figure>

          {/* ── CONTINUING PROSE ──────────────────────────────────── */}
          {/* 2026-07-07, per Susan's directive: full content replacement
              of the page body below the opening bio, organized into
              three named sections — About AwakenArts, How the Work
              Emerged, About the Author. Portrait, Merri image, and the
              closing Foundation/Sketchbook links are unchanged; only
              the prose content itself was replaced. */}
          <div className="about-body-section">
            <h2 className="about-h2">About AwakenArts</h2>
            <p className="about-body">
              AwakenArts explores human experience through symbolic poems, figures,
              and literary encounters. Rather than offering fixed interpretations,
              the work invites readers into a process of recognition through image,
              language, and reflection.
            </p>
            <p className="about-body">
              The figures approach experiences that often resist ordinary
              explanation&mdash;conflict and reconciliation, longing and belonging,
              strength and vulnerability, concealment and revelation. They are not
              presented as puzzles to solve, but as invitations to notice what feels
              deeply familiar before attempting to explain it.
            </p>
            <p className="about-body">
              The work draws from poetry, parable, allegory, archetypal patterns,
              and the rich figurative language found throughout Scripture. While
              informed by psychology and symbolic tradition, AwakenArts finds its
              deepest orientation in the Christian story, where recognition
              ultimately points toward reconciliation in Christ.
            </p>

            <h2 className="about-h2">How the Work Emerged</h2>
            <p className="about-body">
              The poems of AwakenArts emerged through a creative dialogue between
              image and language. Sometimes an image came first and called for
              words. At other times, the poem revealed something more about the
              image. Neither led for long. Each continually informed the other.
            </p>
            <p className="about-body">
              That creative process became a meeting place where symbolic patterns
              surfaced long before I could fully explain them. Carl Jung described
              this as the unconscious giving symbolic form to realities that lie
              beyond ordinary awareness. Whether understood psychologically,
              artistically, or spiritually, these images consistently revealed
              truths that required years of reflection to more fully articulate.
            </p>
            <p className="about-body">
              The poems themselves have remained remarkably unchanged. What
              matured over time was not the symbolic work, but the language
              surrounding it. The Figure Editions and Companions represent that
              continuing effort to accompany the poems with literary, psychological,
              and Christian reflection while remaining faithful to what they had
              expressed from the beginning.
            </p>

            <h2 className="about-h2">About the Author</h2>
            <p className="about-body about-body--quiet">
              Susan Ann Shepler holds a Master of Arts in Counseling Psychology from
              Webster University. She is a Certified Transformative Language Artist
              through the Transformative Language Arts Network and a Certified
              Journal Instructor through the Center for Journal Therapy in Denver,
              Colorado.
            </p>

            {/* 2026-06-30, per Susan's directive: the page's final
                expression is a quiet destination — not a "More About"
                section, not cards, no heading. The visitor finishes the
                narrative, then is offered a place to go next. Normal
                paragraph spacing only (no large gap) so this reads as a
                continuation of the page, not a new section.
                2026-07-15, per the AwakenArts Legal and Risk Standards
                package, Stage 1 item 6: the Sketchbook invitation
                (originally added alongside Foundation with identical
                treatment) is removed until that product area is ready
                and approved for public navigation. The /sketchbook
                route, its assets, and its robots.txt disallow entry are
                untouched — only this inline invitation is removed. */}
            <div className="about-links">
              <p className="about-links__item">
                <Link href="/foundation" className="text-link">
                  Read the Foundation of AwakenArts <span aria-hidden="true">→</span>
                </Link>
                <span className="about-links__desc">
                  The literary and biblical foundations of the work.
                </span>
              </p>
            </div>
          </div>

        </main>
      </div>

      <WayfindingBand />
      <Footer />
    </>
  )
}
