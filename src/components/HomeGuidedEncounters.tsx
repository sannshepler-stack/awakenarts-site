import Link from 'next/link'
import { guidedEncounters } from '@/data/guidedEncounters'

// HomeGuidedEncounters — homepage section 5 (Rebuild Plan §3, D3).
// Replaces the former Workshops band (HomeSection2), keeping its dark navy
// treatment and its two lines, with "workshop" read as "Guided Encounter".

export default function HomeGuidedEncounters() {
  const current = guidedEncounters.find((g) => g.status === 'open')
  return (
    <section className="section2" aria-label="Guided Encounters">
      <div className="section2-dark">
        <div className="section2-dark__inner" style={{ maxWidth: 980 }}>
          <p className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold-lt)' }}>Guided Encounters</p>
          <h2 className="section2-dark__title" style={{ marginTop: '1rem' }}>Images can reveal what experience has been trying to tell&nbsp;us.</h2>
          <p className="section2-dark__worlds">
            Each Guided Encounter brings the work into conversation with our own experience.
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
              <img src={current.image} alt={current.imageAlt} loading="lazy" style={{ width: '100%', display: 'block', background: '#fff', padding: 8 }} />
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-lt)' }}>
                  Now offering{current.length ? ` · ${current.length}` : ''}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '2.1rem', color: 'var(--cream)', margin: '0.3rem 0 0.6rem' }}>
                  {current.title}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.5, color: 'rgba(250, 246, 236, 0.8)' }}>
                  {current.themes.join(' · ')}
                </span>
              </span>
            </Link>
          )}

          <p className="section2-dark__worlds" style={{ marginTop: 0 }}>
            Bring a Guided Encounter to your church, club, retreat, or group.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/guided-encounters" className="home-coll-cta" data-cta="home-guided-view">
              View Guided Encounters
            </Link>
            <Link href="/guided-encounters#inquire" className="home-coll-cta" data-cta="home-guided-inquire">
              Register or Inquire
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
