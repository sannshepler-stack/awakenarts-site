import Nav from '@/components/Nav'

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Make Your Own Word Art</h1>

      <p style={{ fontSize: '1.4rem', lineHeight: '1.7', margin: '0 auto 2rem', maxWidth: '560px' }}>
        Use your own words. Let them take shape.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: '0 auto 2rem', maxWidth: '580px' }}>
        This is where the AwakenArts experience becomes yours. Words are not just carriers of meaning —
        they are shapes, forms, living things. The Queen Ann figure at the heart of this site is made
        entirely of words. Her body <em>is</em> the poem.
      </p>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: '0 auto 2rem', maxWidth: '580px' }}>
        Now it is your turn. Choose words that matter to you — from your journal, your inner life,
        your questions, your knowing. Type them in. Watch them arrange themselves into something you
        have never seen before. This is how AwakenArts works: you bring the words, and the words
        bring you something back.
      </p>

      <img
        src="/images/experiences/word-form-spiral.png"
        alt="Word form spiral"
        style={{ maxWidth: '500px', width: '100%', margin: '2rem auto', display: 'block' }}
      />

      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: '0 auto 2rem', maxWidth: '560px' }}>
        Use WordArt to shape your words into a figure, a symbol, a creature, a crown —
        whatever wants to emerge. There is no wrong way. Only your way.
      </p>

      <a href="https://wordart.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.85rem 2.5rem', border: '1px solid #1C2B3A', textDecoration: 'none', fontSize: '1.05rem', letterSpacing: '0.08em', marginTop: '0.5rem' }}>
        Create My Word Art
      </a>

      <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '1.2rem', color: '#5a4a3a' }}>
        What do you notice?
      </p>

    </main>
    </>
  )
}