import Link from 'next/link'

type EncounterPageProps = {
  title: string
  videoSrc: string
  text: string
  nextHref: string
}

export default function EncounterPage({
  title,
  videoSrc,
  text,
  nextHref,
}: EncounterPageProps) {
  return (
    <main
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#000',
        fontFamily: 'Georgia, serif',
      }}
    >
      <section style={{ width: '80%', background: '#000' }}>
        <video
          key={videoSrc}
          autoPlay
          muted
          playsInline
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </section>

      <aside
        style={{
          width: '20%',
          background: '#f4efe6',
          color: '#2f2a26',
          display: 'flex',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.45rem', fontWeight: 400 }}>
            {title}
          </h1>

          <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
            {text}
          </p>

          <div style={{ marginTop: '2rem', display: 'grid', gap: '0.8rem' }}>
            <Link href={nextHref}>Forward →</Link>
            <Link href="/">Home</Link>
          </div>
        </div>
      </aside>
    </main>
  )
}