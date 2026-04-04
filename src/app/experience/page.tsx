export default function ExperiencePage() {
  return (
    <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Make Your Own Word Art</h1>

      <p style={{ margin: '2rem 0' }}>
        See what takes shape.
      </p>
      <img
        src="/images/experiences/word-form-spiral.png"
        alt="Word form"
        style={{ maxWidth: '500px', width: '100%', margin: '3rem auto 2rem auto', display: 'block' }}
      />
      <a
        href="https://wordart.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          border: '1px solid #1C2B3A',
          textDecoration: 'none'
        }}
      >
        Make My Own
      </a>

      <p style={{ marginTop: '3rem' }}>
        What do you notice?
      </p>
    </main>
  )
}