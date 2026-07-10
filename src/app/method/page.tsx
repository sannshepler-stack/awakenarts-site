import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

// ─── /method — "The AwakenArts Method" ─────────────────────────────────────
// AwakenArts · Unlisted page (2026-07-10).
//
// Built per Susan's "Production Objective: The AwakenArts Method is no
// longer a placeholder concept" directive — the standalone page the
// homepage's Method section (added earlier the same day) has been
// anticipating from the start. Structured like /foundation: a single-
// column editorial statement (AtmosphericHeader -> eyebrow -> h1 -> lede
// -> body sections -> closing link), not a product-browsing page, per her
// "timeless, not promotional, not instructional" design intent.
//
// Per the Unlisted Page System (see AwakenArts_Site_Architecture.md and
// /foundation's own precedent — itself one of the site's "foundational
// pages" while still unlisted from primary nav): built and live, reachable
// by direct URL and from the homepage Method section's CTA (now wired to a
// real <Link>, replacing the placeholder text it was held as until this
// page existed), but withheld from Nav/WayfindingBand/Footer and noindexed
// until Susan makes a separate decision to publish it into navigation —
// that decision is explicitly out of scope for this pass.
//
// Content follows Susan's suggested structure exactly: Hero, Introduction
// (opening on her "We often begin by explaining our lives..." line),
// Recognition Rather Than Explanation, A Practice of Attention, Living
// Symbols (conceptual only — no personal story), Image · Poem · Reflection,
// Workshops (the conceptual bridge into /workshops), and a closing
// Foundation acknowledgment linking to /foundation.
export const metadata: Metadata = {
  title: 'The AwakenArts Method | AwakenArts',
  description:
    'The practice of symbolic attention at the center of AwakenArts — noticing the images already present in ordinary life, before attempting to explain them.',
  alternates: { canonical: '/method' },
  robots: { index: false, follow: true },
  openGraph: {
    url: '/method',
    title: 'The AwakenArts Method',
    description:
      'The practice of symbolic attention at the center of AwakenArts — noticing the images already present in ordinary life, before attempting to explain them.',
  },
}

const ATTENTION_STEPS = [
  'Notice.',
  'Become curious.',
  'Remain with the image.',
  'Allow recognition to emerge.',
  'Do not force interpretation.',
]

const LIVING_SYMBOLS = ['A coat.', 'A doorway.', 'A table.', 'A bridge.', 'A garden.']

const FORMS = [
  { label: 'Image', desc: 'opens recognition.' },
  { label: 'Poem', desc: 'gives it language.' },
  { label: 'Reflection', desc: 'allows the experience to continue.' },
  { label: 'Conversation', desc: 'extends it into ordinary life.' },
]

export default function MethodPage() {
  return (
    <>
      <Nav />

      <AtmosphericHeader
        src="/images/headers/poetry-manuscript.jpg"
        alt="A handwritten manuscript page in warm, quiet light — language taking visible shape."
        fadeTo="#f5f0e8"
      />

      <div className="method-page">
        <main className="method-main">
          <p className="eyebrow method-eyebrow">Method</p>
          <h1 className="method-h1">The AwakenArts Method</h1>
          <p className="method-lede">
            People tell their stories with facts. They reveal their lives
            through images.
          </p>

          {/* Introduction — opens on Susan's addendum sentence, added
              2026-07-10 the same day as the rest of the page: "the heart
              of the AwakenArts Method," in her words, and the conceptual
              center the Encounters, Figure Editions, workshops, and
              conversation all grow from. */}
          <p className="method-opening">
            We often begin by explaining our lives. AwakenArts begins by
            noticing them.
          </p>
          <p className="method-body">
            Every life already speaks in images. Certain images
            return&mdash;in memory, in conversation, in relationships, in
            dreams, in ordinary experience, in art, in story. AwakenArts
            begins by noticing those images before attempting to explain
            them.
          </p>

          <h2 className="method-h2">Recognition Rather Than Explanation</h2>
          <p className="method-body">
            AwakenArts is not primarily about interpreting symbols. It is
            about learning to notice them. Recognition arises through
            sustained attention, not immediate explanation.
          </p>

          <h2 className="method-h2">A Practice of Attention</h2>
          <p className="method-body">
            The practice itself is simple to name, if not always simple to
            do:
          </p>
          <ul className="method-list" aria-label="A Practice of Attention">
            {ATTENTION_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <h2 className="method-h2">Living Symbols</h2>
          <p className="method-body">
            People naturally speak in images, often without noticing they
            are doing it:
          </p>
          <ul className="method-list method-list--inline" aria-label="Living Symbols">
            {LIVING_SYMBOLS.map((symbol) => (
              <li key={symbol}>{symbol}</li>
            ))}
          </ul>
          <p className="method-body">
            These images are often organizing the deeper meaning of an
            experience long before we consciously recognize them.
          </p>

          <h2 className="method-h2">Image &middot; Poem &middot; Reflection</h2>
          <p className="method-body">
            This is why every Figure Edition brings these forms together,
            each doing its own part of the work:
          </p>
          <ul className="method-forms" aria-label="Image, Poem, Reflection, Conversation">
            {FORMS.map((form) => (
              <li key={form.label}>
                <span className="method-forms__label">{form.label}</span>
                <span className="method-forms__desc">{form.desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="method-h2">Workshops</h2>
          <p className="method-body">
            Recognition deepens in the presence of others doing the same
            quiet work. The workshops are where participants learn to
            practice this way of seeing together&mdash;one figure, one
            poem, one conversation at a time.
          </p>
          <p className="method-body">
            <Link href="/workshops" className="text-link">
              Learn About the Workshops <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>

          <div className="method-credo">
            <p>
              This practice is not new. It is understood within the
              historic Christian tradition of figurative language and
              parable, where image and story have always carried what
              direct explanation cannot.
            </p>
            <Link href="/foundation" className="method-credo__link">
              Read the Foundation of AwakenArts <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </main>
      </div>

      <WayfindingBand />
      <Footer />
    </>
  )
}
