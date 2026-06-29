import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import AtmosphericHeader from '@/components/AtmosphericHeader'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

// /foundation — "The Foundation of AwakenArts" (2026-06-28).
//
// A permanent statement of the theological and artistic framework
// AwakenArts is offered within. Per Susan's directive: accessible but
// not intrusive — linked from the footer and quietly from /about, but
// not placed in primary navigation and not inserted into the main
// visitor journey. Same typography and cream/dark palette tokens used
// everywhere else (see .foundation-* rules in globals.css).
//
// 2026-06-28 revision, per Susan: added the standard Atmospheric
// Header — an open book and quiet window light, chosen from the
// public/images/library folder (specifically Foundations-page.png,
// cropped to remove its baked-in caption text so it reads as a plain
// threshold image, consistent with the site-wide "no text baked into
// the image" rule already used for every other AtmosphericHeader).
// The column was also changed from centered to left-aligned, and the
// copy was tightened into plainer, more direct language — this page
// is a statement of belief, not devotional writing, so it reads more
// clearly when it says what it means without literary flourish.
export const metadata: Metadata = {
  title: 'The Foundation of AwakenArts | Christian Symbolic Art and Reflection',
  description:
    'AwakenArts is offered from within the historic Christian faith, with Christ as center and Scripture as final authority. The symbolic art, poems, and reflections are creative works of invitation, not doctrine.',
  alternates: { canonical: '/foundation' },
  openGraph: {
    url: '/foundation',
    title: 'The Foundation of AwakenArts',
    description:
      'AwakenArts is offered from within the historic Christian faith, with Christ as center and Scripture as final authority.',
  },
}

export default function FoundationPage() {
  return (
    <>
      <Nav />

      <AtmosphericHeader
        src="/images/headers/foundation.jpg"
        alt="An open book, a cup, and a sprig of greenery on a sunlit windowsill table — a quiet place to read."
        fadeTo="#f5f0e8"
      />

      <div className="foundation-page">
        <main className="foundation-main">
          <p className="eyebrow foundation-eyebrow">Foundation</p>
          <h1 className="foundation-h1">The Foundation of AwakenArts</h1>

          <p className="foundation-body">
            AwakenArts is offered from within the historic Christian faith.
          </p>
          <p className="foundation-body">
            Jesus Christ is the incarnate Son of God, the one true God, the
            King of Kings and Lord of Lords. He is the center of this work.
          </p>
          <p className="foundation-body">
            The Holy Scriptures are the final authority for faith and life.
          </p>
          <p className="foundation-body">
            The images, poems, and reflections on this site are not
            doctrine, revelation, or spiritual authority. They are creative
            works meant to encourage reflection, conversation, and a closer
            look at our own lives in light of Scripture.
          </p>
          <p className="foundation-body">
            Jesus often taught using parables and figurative language.
            AwakenArts follows that same pattern&mdash;not to replace
            Scripture, but to help readers see and reflect more clearly on
            the realities of life and faith.
          </p>
          <p className="foundation-body">
            Our hope is that this work leads to humility, wisdom,
            compassion, and a deeper love for God and for one another.
          </p>

          <div className="foundation-credo">
            <p>Christ is the center.</p>
            <p>Scripture is the authority.</p>
            <p>The artistic work is an invitation to reflect.</p>
          </div>
        </main>
      </div>

      <WayfindingBand />
      <Footer />
    </>
  )
}
