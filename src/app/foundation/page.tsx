import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WayfindingBand from '@/components/WayfindingBand'
import Footer from '@/components/Footer'

// /foundation — "The Foundation of AwakenArts" (2026-06-28).
//
// A permanent statement of the theological and artistic framework
// AwakenArts is offered within. Per Susan's directive: accessible but
// not intrusive — linked from the footer and quietly from /about, but
// not placed in primary navigation and not inserted into the main
// visitor journey. Visual treatment is the most restrained on the
// site: single centered narrow column, no imagery, same typography
// and cream/dark palette tokens used everywhere else (see
// .foundation-* rules in globals.css).
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
            The symbolic images, poems, and reflections presented through
            AwakenArts are not offered as doctrine, revelation, or spiritual
            authority. They are creative works intended to encourage careful
            observation, honest reflection, meaningful conversation, and
            deeper recognition of the human experience in the light of
            Scripture.
          </p>
          <p className="foundation-body">
            Jesus often taught through parables and figurative language.
            AwakenArts follows that artistic pattern&mdash;not to replace
            biblical truth, but to invite readers to see, reflect, and engage
            more deeply with the realities of life and faith.
          </p>
          <p className="foundation-body">
            Our hope is that these encounters cultivate humility, wisdom,
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
