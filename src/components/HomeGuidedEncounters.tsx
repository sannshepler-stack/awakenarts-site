import Link from 'next/link'
import TextLink, { TextLinkRow } from '@/components/TextLink'
import { guidedEncounters, themeLine } from '@/data/guidedEncounters'

// HomeGuidedEncounters — homepage section 5 (Rebuild Plan §3, D3).
// Replaces the former Workshops band (HomeSection2), keeping its dark navy
// treatment. 2026-10-05, Susan: a Guided Encounter is anchored to a figure,
// not to the Edition created for that figure; links go to the presentation.

export default function HomeGuidedEncounters() {
  const current = guidedEncounters.find((g) => g.status === 'open')
  return (
    <section className="section2" aria-label="Guided Encounters">
      <div className="section2-dark">
        {/* 2026-10-07: the Collection image now has its own section just
            above (HomeCollection); this band continues from it. */}
        <div className="section2-dark__inner" style={{ maxWidth: 980 }}>
          <p className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold-lt)' }}>Guided Encounters</p>
          <h2 className="section2-dark__title" style={{ marginTop: '1rem' }}>Images can reveal what experience has been trying to tell&nbsp;us.</h2>
          <p className="section2-dark__worlds">
            Each Encounter brings an AwakenArts figure into conversation through image, poetry, and reflection.
          </p>

          {current && (
            <Link
              href={`/presentations/${current.slug}`}
              data-cta="home-current-encounter"
              style={{
                display: 'grid',
                width: '100%',
                boxSizing: 'border-box',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.75rem',
                alignItems: 'center',
                textAlign: 'left',
                textDecoration: 'none',
                margin: '2.5rem auto',
                maxWidth: 760,
                border: '1px solid rgba(201, 168, 76, 0.35)',
                padding: '1.25rem',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={current.image} alt={current.imageAlt} loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }} />
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-lt)' }}>
                  Now offering{current.length ? ` · ${current.length}` : ''}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'var(--t-card)', color: 'var(--cream)', margin: '0.3rem 0 0.15rem' }}>
                  {current.title}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1.35, color: 'var(--gold-lt)', margin: '0 0 0.75rem' }}>
                  A Guided Encounter
                </span>
                {/* Themes stacked, one per line — no separator dots (2026-10-05, Susan). */}
                {themeLine(current)
                  .split(' · ')
                  .map((t) => (
                    <span key={t} style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.5, color: 'rgba(250, 246, 236, 0.8)' }}>
                      {t}
                    </span>
                  ))}
              </span>
            </Link>
          )}

          {current && (
            <p className="section2-dark__worlds" style={{ marginTop: 0 }}>
              Experience {current.title}. Inquire about bringing the presentation to a library, club, or community group.
            </p>
          )}
          <TextLinkRow center>
            {current && (
              <TextLink href={`/presentations/${current.slug}`} tone="light" cta="home-guided-explore-current">
                Explore {current.title}
              </TextLink>
            )}
            <TextLink href={current ? `/presentations/${current.slug}#inquire` : '/presentations#inquire'} tone="light" cta="home-guided-inquire">
              Register or Inquire
            </TextLink>
          </TextLinkRow>
        </div>
      </div>
    </section>
  )
}
