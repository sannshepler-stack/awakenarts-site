import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
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
            <p className="about-credentials">
              Artist · Writer · MA Counseling Psychology<br />
              Certified Transformative Language Artist
            </p>
            <p className="about-body">
              AwakenArts began through a long practice of working with language,
              image, and symbolic form. The works are shaped from language itself,
              where poetic structure and figure carry meaning together rather than
              one explaining the other.
            </p>
            <p className="about-body">
              Each work begins as a poem before any visual structure is considered.
              Through revision, rhythm, spacing, repetition, and arrangement, the
              language gradually gathers into visible form. The shape is not imposed
              afterward. The words construct the figure.
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
          <div className="about-body-section">
            <p className="about-body">
              The resulting works form a non-linear path through symbolic experience,
              tension, conflict, longing, recognition, and awareness. The figures are
              not fixed symbols with single meanings. They approach human experience
              through layered forms that often hold opposing realities at once —
              innocence and performance, beauty and fracture, fear and grace,
              concealment and revelation, strength and vulnerability.
            </p>
            <p className="about-body">
              Many of the works emerge from recurring patterns found across personal
              experience, culture, story, faith, inward conflict, and symbolic life.
              Rather than offering fixed interpretation, AwakenArts approaches these
              figures as forms to encounter, reflect upon, and gradually recognize.
            </p>
            <p className="about-body">
              We live among symbols whether we notice them or not. Images shape memory,
              stories organize identity, and language itself can take visible form.
              AwakenArts explores these realities through symbolic poetic forms,
              readings, and literary encounters shaped through image, figure, tension,
              and awareness.
            </p>
            <p className="about-body">
              The work draws from poetry, parable, allegory, archetype, and symbolic
              form while remaining attentive to the figurative language found
              throughout Scripture.
            </p>

            {/* 2026-06-28: quiet link to /foundation — per Susan's directive,
                findable near the section explaining AwakenArts' origins, but
                a single understated line, not a CTA competing with the prose
                above it. */}
            <p className="about-body about-body--quiet" style={{ marginBottom: '2.5rem' }}>
              <Link href="/foundation" className="text-link">
                Read the Foundation of AwakenArts →
              </Link>
            </p>

            <p className="about-body about-body--quiet">
              Susan holds an MA in Counseling Psychology from Webster University.
              She is a Certified Transformative Language Artist through the
              Transformative Language Arts Network and also earned certification
              as a Journal Instructor through the Center for Journal Therapy in
              Denver, Colorado.
            </p>
          </div>

        </main>
      </div>

      <WayfindingBand />
      <Footer />
    </>
  )
}
