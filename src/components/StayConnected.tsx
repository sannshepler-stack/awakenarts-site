import EmailGateDownload from '@/components/EmailGateDownload'

// StayConnected — the one reusable, restrained email signup (Rebuild Plan
// §9, D6). Gift = the Encounter Journal. `source` tags where the signup
// came from in Kit (e.g. 'home', 'portal-lamp', 'guided-encounters').
// No popups — this only ever sits inline in a page.

export default function StayConnected({
  source,
  tone = 'light',
}: {
  source: string
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <section
      aria-label="Stay Connected"
      style={{
        background: dark ? 'var(--deep)' : 'var(--warm)',
        padding: 'var(--band-gap) 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 'var(--label-size)',
            fontWeight: 600,
            letterSpacing: 'var(--label-tracking)',
            textTransform: 'uppercase',
            color: dark ? 'var(--gold-lt)' : 'var(--gold)',
            margin: 0,
          }}
        >
          Stay Connected
        </p>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 'clamp(1.7rem, 3.2vw, 2.2rem)',
            color: dark ? 'var(--cream)' : 'var(--deep)',
            margin: '0.9rem 0 0.5rem',
          }}
        >
          The AwakenArts Encounter Journal
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--body-size)',
            lineHeight: 'var(--body-line)',
            color: dark ? 'rgba(250, 246, 236, 0.82)' : 'var(--mid)',
            margin: '0 0 1.5rem',
          }}
        >
          A self-guided companion to the Encounters.
        </p>
        <EmailGateDownload
          pdfHref="/files/free/AwakenArts_Encounter_Journal.pdf"
          fileName="AwakenArts_Encounter_Journal.pdf"
          source={source}
          itemLabel="the Journal"
          submitLabel="Send Me the Journal"
          thanksText="Welcome to AwakenArts. Your Encounter Journal is downloading now."
        />
      </div>
    </section>
  )
}
