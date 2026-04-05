import Nav from '@/components/Nav'

export default function ExperiencePage() {
  return (
    <>
      <Nav />

      <main
        style={{
          padding: '6rem 2rem 4rem',
          textAlign: 'center',
          maxWidth: '760px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          Make Your Own Word Art
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.8',
            margin: '0 auto 1.75rem',
            maxWidth: '600px',
          }}
        >
          Bring your own words and watch them take shape.
        </p>

        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: '1.85',
            margin: '0 auto 1.75rem',
            maxWidth: '620px',
          }}
        >
          At AwakenArts, words are more than language alone. They can become form,
          image, and presence. The figures and symbols throughout this site are part
          of that process: language shaping itself into something visible.
        </p>

        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: '1.85',
            margin: '0 auto 2.25rem',
            maxWidth: '620px',
          }}
        >
          Here, you can try that process for yourself. Begin with a few words that
          feel meaningful, interesting, or simply close at hand, and see what takes
          shape.
        </p>

        <img
          src="/images/experiences/butterfly-wordart.png"
          alt="Butterfly formed from words"
          style={{
            maxWidth: '520px',
            width: '100%',
            margin: '2.5rem auto',
            display: 'block',
          }}
        />

        <a
          href="https://wordart.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.85rem 2.5rem',
            border: '1px solid #1C2B3A',
            textDecoration: 'none',
            fontSize: '1.05rem',
            letterSpacing: '0.08em',
            marginTop: '0.5rem',
          }}
        >
          Open WordArt
        </a>

        <div
  style={{
    margin: '2.5rem auto 0',
    maxWidth: '560px',
    textAlign: 'center',
  }}
>
  <p
    style={{
      fontSize: '1.05rem',
      lineHeight: '1.9',
      marginBottom: '1.5rem',
    }}
  >
    In WordArt, start by selecting <strong>Dashboard</strong>, then press <strong>Create</strong>. Enter a word or a short group of words. Press <strong>Enter</strong> after each so it appears in the list. Choose a shape, then press <strong>Generate</strong>. If the interface feels unfamiliar, begin simply: use a small word set, one shape, and one or two colors. You can adjust the font, layout, and palette after the image appears. The clearest results often come from a few words, repeated words, and a simple shape. Try a few variations rather than trying to perfect everything at once.
  </p>

  <p
    style={{
      fontSize: '1.05rem',
      lineHeight: '1.9',
      marginTop: '1.5rem',
      marginBottom: '1.2rem',
      fontStyle: 'italic',
    }}
  >
    Tip: If your result looks crowded, reduce the number of words and try again.
  </p>

  <p
    style={{
      fontSize: '1.05rem',
      lineHeight: '1.8',
      marginBottom: '0.6rem',
    }}
  >
    You might begin with:
  </p>

  <p
    style={{
      fontSize: '1.05rem',
      lineHeight: '2',
      color: '#5a4a3a',
      letterSpacing: '0.03em',
    }}
  >
    Change · Balance · Center · Light · Open · Return
  </p>
</div>

      </main>
    </>
  )
}