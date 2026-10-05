import Link from 'next/link'
import { guidedEncounters, editionPhrase } from '@/data/guidedEncounters'

// HomeGuidedEncounters — homepage section 5 (Rebuild Plan §3, D3).
// Replaces the former Workshops band (HomeSection2), keeping its dark navy
// treatment. Copy per Susan, 2026-10-05: the Edition is the source work;
// a Guided Encounter is one way to experience that Edition.

export default function HomeGuidedEncounters() {
  const current = guidedEncounters.find((g) => g.status === 'open')
  return (
    <section className="section2" aria-label="Guided Encounters">
      <div className="section2-dark">
        <div className="section2-dark__inner" style={{ maxWidth: 980 }}>
          <p className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold-lt)' }}>Guided Encounters</p>
          <h2 className="section2-dark__title" style={{ marginTop: '1rem' }}>Images can reveal what experience has been trying to tell&nbsp;us.</h2>
          <p className="section2-dark__worlds">
            Each Guided Encounter brings one AwakenArts Edition into conversation with lived experience through image,
            poetry, reflection, and discussion.
          </p>

          {current && (
            <Link
              href={`/guided-encounters/${current.slug}`}
              data-cta="home-current-encounter"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
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
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '2.1rem', color: 'var(--cream)', margin: '0.3rem 0 0.15rem' }}>
                  {current.title}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1.35, color: 'var(--gold-lt)', margin: '0 0 0.75rem' }}>
                  A Guided Encounter with {editionPhrase(current.title)}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.5, color: 'rgba(250, 246, 236, 0.8)' }}>
                  {current.themes.join(' · ')}
                </span>
              </span>
            </Link>
          )}

          {current && (
            <p className="section2-dark__worlds" style={{ marginTop: 0 }}>
              Experience {editionPhrase(current.title)} in a{current.length ? ` ${current.length.replace(' minutes', '-minute')}` : ''} Guided
              Encounter, or bring this experience to your church, club, retreat, or group.
            </p>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {current && (
              <Link href={`/guided-encounters/${current.slug}`} className="home-coll-cta" data-cta="home-guided-explore-current">
                Explore {current.title}
              </Link>
            )}
            <Link href="/guided-encounters#inquire" className="home-coll-cta" data-cta="home-guided-inquire">
              Register or Inquire
            </Link>
          </div>
          <p style={{ marginTop: '1.75rem' }}>
            <Link
              href="/guided-encounters"
              data-cta="home-guided-explore-all"
              style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-lt)' }}
            >
              Explore Guided Encounters →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
