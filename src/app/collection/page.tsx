import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FooterSocial from '@/components/FooterSocial'

export const metadata: Metadata = {
  title: 'The Collection — AwakenArts',
  description:
    'The Collection is the primary resource and guide developed through AwakenArts — original visual-literary works, reflection prompts, discussion questions, and facilitator materials for workshops, retreats, and personal exploration.',
  alternates: { canonical: '/collection' },
  openGraph: {
    url: '/collection',
    title: 'The Collection — An AwakenArts Resource & Guide',
    description:
      'Original visual-literary works, methods, and materials for engaging the language of symbols through reflection, discussion, teaching, and exploration.',
  },
}

/*
 * The Collection page — rebuilt June 2026 around the Governance Framework.
 *
 * Hierarchy: Works → Language → Method → Resources → Workbook
 * The Collection is the product. The workbook is one expression of it.
 * Central purpose: recognition rather than explanation.
 *
 * Page structure:
 *   1. Hero — identity + entry point
 *   2. Publication — cover image + what The Collection is
 *   3. How it's used — applications and method
 *   4. The Works — foundation
 *   5. CTA
 */

export default function CollectionPage() {
  return (
    <>
      <Nav />

      <main className="col-page">

        {/* 1 ── HERO ─────────────────────────────────────────────────
            Entry point. Not explanatory — just enough to orient
            and invite. The cover image carries the visual weight
            in section 2, not here.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-hero">
          <div className="col-hero__inner">
            <p className="eyebrow col-hero__eyebrow">AwakenArts</p>
            <h1 className="col-hero__title">The Collection</h1>
            <p className="col-hero__sub">
              An AwakenArts Resource &amp; Guide
            </p>
            <p className="col-hero__body">
              A resource and guide built around original visual-literary works —
              designed to help people engage the language of symbols through
              image, reflection, discussion, teaching, and exploration.
            </p>
          </div>
        </section>

        {/* 2 ── PUBLICATION ─────────────────────────────────────────
            The cover image sits here, not on the homepage.
            This is where Resource & Guide language belongs.
            Split layout at larger screens; stacks on mobile.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-pub-section" aria-labelledby="col-pub-heading">
          <div className="col-pub-inner">

            <div className="col-pub-cover">
              <Image
                src="/images/collection/collection-cover-light.png"
                alt="The Collection — An AwakenArts Resource & Guide"
                width={340}
                height={440}
                className="col-pub-cover__img"
                loading="lazy"
              />
            </div>

            <div className="col-pub-text">
              <p className="eyebrow">The Resource &amp; Guide</p>
              <h2 id="col-pub-heading">
                Works. Language.<br />
                <em>Method. Resources.</em>
              </h2>
              <p>
                The Collection is the primary resource and guide developed
                through AwakenArts. Built around original visual-literary
                works shaped through image and language, it provides practical
                methods and materials for engaging the language of symbols.
              </p>
              <p>
                The works do not explain. They invite <em>recognition</em> —
                a way of approaching experiences that resist simple answers
                through figure, metaphor, and symbolic form.
              </p>
              <p>
                The Collection is larger than any single format. It can be
                expressed through the workbook, through retreat materials,
                through workshop guides, through individual use.
              </p>
            </div>

          </div>
        </section>

        {/* 3 ── HOW IT'S USED ───────────────────────────────────────
            Applications + method. The method is the bridge between
            the works and the resources. Presented accessibly,
            not as a framework dump.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-uses-section" aria-labelledby="col-uses-heading">
          <div className="col-uses-inner">

            <div className="col-uses-header">
              <p className="eyebrow">How It&rsquo;s Used</p>
              <h2 id="col-uses-heading">
                Reflection. Discussion.<br />
                <em>Teaching. Exploration.</em>
              </h2>
              <p className="col-uses-intro">
                The works in the Collection offer pathways into conversation
                and reflection on themes that are often difficult to approach
                directly — longing, identity, grace, exile, recognition,
                and transformation.
              </p>
            </div>

            <ul className="col-use-list">
              <li>Use them in workshops and facilitated group experiences.</li>
              <li>Use them in retreats and contemplative settings.</li>
              <li>Use them in literary and symbolic discussion.</li>
              <li>Use them in teaching — from introductory to advanced contexts.</li>
              <li>Use them in personal reflection and journaling.</li>
              <li>Use them as symbolic prompts when ordinary language falls short.</li>
            </ul>

            <div className="col-method">
              <p className="col-method__label">A method for engagement</p>
              <p className="col-method__steps">
                Observe &middot; Recognize &middot; Reflect &middot; Discuss &middot; Write &middot; Teach &middot; Facilitate
              </p>
            </div>

          </div>
        </section>

        {/* 4 ── THE WORKS ───────────────────────────────────────────
            Brief acknowledgment that the artwork is the foundation.
            The works live in Studio — this section bridges.
        ──────────────────────────────────────────────────────────── */}
        <section className="col-works-foundation" aria-labelledby="col-works-heading">
          <div className="col-works-foundation__inner">

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/collection/connection-all.png"
              alt="The AwakenArts Collection — symbolic concrete poetry — language becoming visible form"
              className="col-overview-img"
              loading="lazy"
            />

            <div className="col-works-foundation__text">
              <p className="eyebrow">The Works</p>
              <h2 id="col-works-heading">
                The works are the foundation.<br />
                <em>Everything else grows from them.</em>
              </h2>
              <p>
                These original visual-literary pieces serve as points of entry
                into reflection, discussion, recognition, and inquiry. They are
                not explanations — they are figures through which meaning
                may be approached and explored.
              </p>
              <p>
                <Link href="/studio" className="text-link">
                  View the works in the Studio <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>

          </div>
        </section>

        {/* 5 ── CTA ─────────────────────────────────────────────────── */}
        <section className="col-archive-cta">
          <Link href="/encounters" className="col-archive-cta__link">
            Enter Encounters <span aria-hidden="true">→</span>
          </Link>
        </section>

      </main>

      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AwakenArts home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo-reversed.svg"
                alt="AwakenArts"
                className="footer-logo"
                width={500}
                height={170}
                loading="lazy"
              />
            </Link>
            <p>
              An artistic body of work shaped through image and language.
              The works express emotion and meaning in symbolic form, where
              word and image reveal archetypal patterns of thought and
              inward experience. By Susan Ann Shepler.
            </p>
            <FooterSocial />
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><Link href="/studio/silhouettes">Symbolic Forms</Link></li>
              <li><Link href="/collection">The Collection</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>The Work</h4>
            <ul>
              <li><Link href="/encounters">Encounters</Link></li>
              <li><Link href="/poems">Poems</Link></li>
              <li><Link href="/journal">Journal</Link></li>
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
