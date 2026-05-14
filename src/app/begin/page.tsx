import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import SignupForm from '@/components/SignupForm'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'Begin Here — AwakenArts',
  description:
    'Orientation for those who need to understand a place before entering it. The welcome room of AwakenArts.',
  alternates: { canonical: '/begin' },
  openGraph: {
    url: '/begin',
    title: 'Begin Here — AwakenArts',
    description:
      'Orientation for those who need to understand a place before entering it. The welcome room of AwakenArts.',
  },
}

/*
 * /begin — The Orientation Room
 * Per Site Alignment Brief (April 2026):
 *   For visitors who need context before they can trust an invitation.
 *   Not the entry — the room just before the entry, for those who need it.
 *   Also a return destination after an encounter, for those who want to
 *   understand what happened.
 *
 * Structure:
 *   1. Welcoming opening
 *   2. Recognition moment — "Something has stayed with you"
 *   3. Three-threshold framing
 *   4. Three paths (image · question · understanding)
 *   5. Closing line
 *   6. A quiet offer: the Symbolic Interpretation Guide
 *
 * /begin remains the secondary path. Encounters is the primary door.
 */

const paths = [
  {
    eyebrow: 'Begin with an image',
    title: 'The Guidance Deck',
    body: 'Draw a card. See what meets you.',
    href: '/deck',
    label: 'Enter the Deck',
  },
  {
    eyebrow: 'Begin with a question',
    title: 'The Library',
    body: 'Enter through a figure, a symbol, or a question already present in you.',
    href: '/library',
    label: 'Enter the Library',
  },
  {
    eyebrow: 'Begin with understanding',
    title: 'The Path',
    body: 'Read how the work unfolds and how symbols function as guides.',
    href: '/path',
    label: 'Enter the Path',
  },
]

export default function BeginPage() {
  return (
    <>
      <Nav />

      <main className="begin-page">

        {/* ── 1. OPENING ─────────────────────────────
            Welcomes the visitor who needs orientation
            before they can trust an invitation.
        ──────────────────────────────────────────── */}
        <section className="begin-page__opening">
          <p className="begin-page__headline">BEGIN HERE</p>
          <h1 className="begin-page__sub">
            If you have come here first,
            <br />you are welcome.
          </h1>
          <p className="begin-page__body">
            Some people need to understand a place before they can enter it.
            <br />This page is for you.
          </p>
          <p className="begin-page__reveal">
            The symbol does not explain. It reveals.
          </p>
        </section>

        {/* ── 2. RECOGNITION ─────────────────────────
            The "Something has stayed with you" moment,
            relocated from the old homepage. The gate
            of recognition before the three thresholds.
        ──────────────────────────────────────────── */}
        <section
          className="begin-page__opening"
          aria-label="A moment of recognition"
        >
          <h2
            className="begin-page__sub"
            style={{ fontStyle: 'normal' }}
          >
            Something has <em style={{ fontStyle: 'italic' }}>stayed</em> with you.
          </h2>
          <p className="begin-page__body">
            A dream that lingered longer than dreams usually do.
            <br />An image that appeared in prayer, silence, or memory and did not leave.
            <br />A symbol that kept returning — in Scripture, in ordinary life,
            or at the edge of your understanding.
          </p>
          <p className="begin-page__reveal">
            It belongs to your tradition. It always has.
          </p>
          <p className="begin-page__body" style={{ marginTop: '2rem' }}>
            AwakenArts is a guided encounter with the symbolic life of the
            soul — rooted in the Christian tradition, and the language of
            image and symbol. It exists to help you approach symbolic material
            with reverence, clarity, and deeper recognition — not as
            decoration, but as a living language of awareness.
          </p>
        </section>

        {/* ── 3. THREE-THRESHOLD FRAMING ──────────── */}
        <section
          className="begin-page__orientation"
          aria-label="Three thresholds"
        >
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.05rem',
              fontStyle: 'italic',
              color: 'var(--deep)',
              lineHeight: 1.7,
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            There are different thresholds into this work.
            <br />Begin where something is already open in you.
          </p>
        </section>

        {/* ── 4. THREE PATHS ────────────────────────── */}
        <section className="begin-page__paths" aria-label="Entry paths">
          {paths.map(({ eyebrow, title, body, href, label }) => (
            <div key={title} className="begin-path">
              <p className="begin-path__eyebrow">{eyebrow}</p>
              <h2 className="begin-path__title">{title}</h2>
              <p className="begin-path__body">{body}</p>
              <Link href={href} className="tile-link begin-path__link">{label}</Link>
            </div>
          ))}
        </section>

        {/* ── 5. CLOSING LINE ───────────────────────── */}
        <p className="begin-page__closing">
          There is no correct order. Only the place that opens.
        </p>

        {/* ── 6. QUIET OFFER ────────────────────────
            The Symbolic Interpretation Guide signup,
            relocated from the old homepage. Placed
            last so it does not compete with Encounters
            or with the three paths as primary movement.
        ──────────────────────────────────────────── */}
        <section
          className="begin-section"
          style={{
            gridTemplateColumns: '1fr',
            maxWidth: 640,
            gap: '2rem',
            padding: '4rem 2rem 5rem',
          }}
          aria-label="Symbolic Interpretation Guide"
        >
          <div className="begin-form-wrap">
            <p className="eyebrow">A Companion for the Work</p>
            <h3>Receive the Symbolic Interpretation Guide.</h3>
            <p>
              A free guide for approaching symbols, images, and recurring inner
              material with more understanding and steadiness. Sent once, then
              quiet.
            </p>
            <SignupForm />
          </div>
        </section>

      </main>

      {/* ── FOOTER ─── */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo.png"
                alt="AwakenArts"
                className="footer-logo"
                loading="lazy"
              />
            </Link>
            <p>
              Original symbolic figures for the interior life — rooted in the
              Christian tradition, created through the transformative language
              arts process. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/deck">Guidance Deck</Link></li>
              <li><Link href="/library">The Library</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>The Library</h4>
            <ul>
              <li><Link href="/library#foundations">Foundations</Link></li>
              <li><Link href="/library#figures">Figures</Link></li>
              <li><Link href="/library/voices">Voices from the Tradition</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Formation &amp; Provenance</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AwakenArts · awakenarts.com · All Rights Reserved</span>
          <span>© Susan Ann Shepler · Confidential</span>
        </div>
      </footer>
    </>
  )
}
