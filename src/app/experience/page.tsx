export default function ExperiencePage() {
  return (
    <main style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Make Your Own Word Art</h1>

      <p style={{ margin: '2rem 0 0.5rem', fontSize: '1.2rem' }}>
        Words are not just carriers of meaning — they are shapes. Forms. Living things.
      </p>
      <p style={{ margin: '0.5rem 0 2rem', fontSize: '1.2rem' }}>
        Here, you give them a body.
      </p>

      <p style={{ margin: '1.5rem 0' }}>
        AwakenArts begins with concrete poetry — the art of letting words become what they say.
        The Queen Ann figure at the heart of this site is made entirely of words. Her body <em>is</em> the poem.
      </p>

      <p style={{ margin: '1.5rem 0' }}>
        Now it's your turn. Type something true. See what form it takes.
      </p>

      <img
        src="/images/experiences/word-form-spiral.png"
        alt="Word form"
        style={{ maxWidth: '500px', width: '100%', margin: '3rem auto 2rem', display: 'block' }}
      />

      <p style={{ margin: '1.5rem 0' }}>
        Use WordArt to shape your words into a figure, a symbol, a creature, a crown —
        whatever wants to emerge.
      </p>

      
        href="https://wordart.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.75rem 2rem',
          border: '1px solid #1C2B3A',
          textDecoration: 'none',
          fontSize: '1rem',
          letterSpacing: '0.05em',
          marginTop: '1rem',
        }}
      >
        Create My Word Art →
      </a>

      <p style={{ marginTop: '3rem', fontStyle: 'italic' }}>
        What do you notice?
      </p>
    </main>
  )
}