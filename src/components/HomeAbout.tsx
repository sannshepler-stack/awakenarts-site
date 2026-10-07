import TextLink from '@/components/TextLink'

// HomeAbout — homepage section 8 (Rebuild Plan §3). Opening paragraph of
// the About page, verbatim, with a link to the full page.

export default function HomeAbout() {
  return (
    <section aria-labelledby="home-about-heading" style={{ background: '#fff', padding: 'var(--band-gap) 1.5rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center', justifyContent: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about/susan-ann-shepler-opt.jpg"
          alt="Susan Ann Shepler"
          loading="lazy"
          style={{ width: 200, height: 200, objectFit: 'cover', objectPosition: '50% 35%', borderRadius: '50%', border: '1px solid var(--gold-lt)', flex: '0 0 auto' }}
        />
        <div style={{ flex: '1 1 380px' }}>
          <p className="eyebrow">About</p>
          <h2 id="home-about-heading" style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'var(--t-section)', color: 'var(--deep)', margin: '0.8rem 0 1rem' }}>
            About AwakenArts
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-size)', lineHeight: 'var(--body-line)', color: 'var(--deep)', margin: '0 0 1.25rem' }}>
            AwakenArts explores human experience through symbolic poems, figures, and literary encounters. Rather than
            offering fixed interpretations, the work invites readers into a process of recognition through image,
            language, and reflection.
          </p>
          <TextLink href="/about" cta="home-about">Read More</TextLink>
        </div>
      </div>
    </section>
  )
}
