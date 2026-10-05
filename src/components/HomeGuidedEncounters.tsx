import Link from 'next/link'
import CollectionBanner from '@/components/CollectionBanner'
import TextLink, { TextLinkRow } from '@/components/TextLink'
import { guidedEncounters, editionPhrase } from '@/data/guidedEncounters'

// HomeGuidedEncounters — homepage section 5 (Rebuild Plan §3, D3).
// Replaces the former Workshops band (HomeSection2), keeping its dark navy
// treatment. Copy per Susan, 2026-10-05: the Edition is the source work;
// a Guided Encounter is one way to experience that Edition.

// 2026-10-05, per Susan: no Scripture citation in the card's theme line
// (unless every Guided Encounter card later carries one). The Edition data
// keeps the reference; only this card leaves it out.
const SCRIPTURE_REF = /^(?:[1-3]\s)?[A-Z][a-z]+\s\d+:\d+/

export default function HomeGuidedEncounters() {
  const current = guidedEncounters.find((g) => g.status === 'open')
  return (
    <section className="section2" aria-label="Guided Encounters">
      <div className="section2-dark">
        {/* The Collection image opens the section, as it did originally:
            the body of work first, then the Editions experienced through it. */}
        <CollectionBanner />
        <div className="section2-dark__inner" style={{ maxWidth: 980 }}>
          <p className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold-lt)' }}>Guided Encounters</p>
          <h2 className="section2-dark__title" style={{ marginTop: '1rem' }}>Images can reveal what experience has been trying to tell&nbsp;us.</h2>
          <p className="section2-dark__worlds">
            Each Guided Encounter brings an AwakenArts Edition into conversation through image, poetry, reflection, and
            discussion.
          </p>

          {current && (
            <Link
              href={`/guided-encounters/${current.slug}`}
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
                  A Guided Encounter with {editionPhrase(current.title)}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.5, color: 'rgba(250, 246, 236, 0.8)' }}>
                  {current.themes.filter((t) => !SCRIPTURE_REF.test(t)).join(' · ')}
                </span>
              </span>
            </Link>
          )}

          {current && (
            <p className="section2-dark__worlds" style={{ marginTop: 0 }}>
              Experience {current.title} in a Guided Encounter, or bring the encounter to your church, club, retreat, or
              group.
            </p>
          )}
          <TextLinkRow center>
            {current && (
              <TextLink href={`/guided-encounters/${current.slug}`} tone="light" cta="home-guided-explore-current">
                Explore {current.title}
              </TextLink>
            )}
            <TextLink href="/guided-encounters#inquire" tone="light" cta="home-guided-inquire">
              Register or Inquire
            </TextLink>
          </TextLinkRow>
        </div>
      </div>
    </section>
  )
}
