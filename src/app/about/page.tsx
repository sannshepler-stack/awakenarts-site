import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Susan Ann Shepler — AwakenArts',
  description:
    'Susan Ann Shepler — artist and writer, and the creator of AwakenArts. Author of Whispers of Awareness and the AwakenArts Guidance Deck, working at the intersection of language, image, and the literary-symbolic tradition of Scripture.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: '/about',
    title: 'About Susan Ann Shepler — AwakenArts',
    description:
      'Artist and writer. Creator of AwakenArts, author of Whispers of Awareness, and creator of the AwakenArts Guidance Deck.',
    images: [
      {
        url: '/images/about/susan-ann-shepler.jpg',
        alt: 'Portrait of Susan Ann Shepler',
      },
    ],
  },
  twitter: {
    description:
      'Original works of image and language by Susan Ann Shepler, working in the literary-symbolic tradition of Scripture — parable, poetry, and image — made to be returned to over time.',
  },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <main style={{ padding: '6rem 2rem 5rem', maxWidth: '820px', margin: '0 auto' }}>

        <p style={{ fontSize: '0.95rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a6a', marginBottom: '1.5rem' }}>
          About
        </p>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Susan Ann Shepler</h1>

        <p style={{ fontSize: '1.15rem', color: '#8a7a6a', marginBottom: '2rem', fontStyle: 'italic' }}>
          Artist · Writer · Creator of AwakenArts
        </p>

        {/* Portrait */}
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/susan-ann-shepler.jpg"
            alt="Susan Ann Shepler"
            style={{
              width: '100%',
              maxWidth: '420px',
              borderRadius: '6px',
              boxShadow: '0 8px 32px rgba(28,43,58,0.13)',
              display: 'block',
            }}
          />
        </div>

        <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2rem' }}>
          AwakenArts began not as a project but as a practice — a long, ongoing attention to language and image, and to the literary-symbolic tradition Scripture itself has always worked in: parable, poem, type, and figure. Susan Ann Shepler has spent decades working at that intersection, shaping image-shaped poetic forms in which language and figure carry meaning together rather than one explaining the other.
        </p>

        <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2rem' }}>
          She holds a Master&rsquo;s in Counseling Psychology from Webster University, with certifications as a Transformative Language Artist and a Journal Instructor — training that sharpened her ear for how language carries what plain statement cannot, and shapes how she builds each piece. But that isn&rsquo;t where AwakenArts is grounded. The deeper foundation is older and more specific: the literary-symbolic tradition of Scripture itself, where parable, image, and poem have always carried meaning through figure, type, and narrative shape.
        </p>

        <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2rem' }}>
          Her work gives that tradition visible form — figures, silhouettes, and narrative shapes built from language itself. Queen Ann — the figure at the center of this site — isn&rsquo;t decoration. She&rsquo;s an example of what happens when language is shaped rather than simply spoken: a form you can stand in front of, return to, and recognize a little more of each time.
        </p>

        <div style={{ borderTop: '1px solid #e0d8cc', paddingTop: '2.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.95rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a6a', marginBottom: '1.75rem' }}>
            The Method
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            Each poem began not as an image but as a poem — written without intention toward any particular shape. Then the centering began. Line by line, word by word, working in Microsoft Word without automated tools, pushing and pulling the language — alliteration by alliteration, rhyme by rhyme, content by content — until an image emerged from within the poem itself.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            The shape was not imposed. It was revealed. Language is the architecture of the figure — the words do not describe the queen or the mermaid or the angel. They build her.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            This is the same discipline behind acrostic psalms and Hebrew chiasm — form and meaning made inseparable, structure carrying significance rather than merely housing it. Craft (meter, rhyme, structure) and image rose together, neither one decorating the other. The process enacts what the poems themselves picture: shape and sense arriving as one thing, not two joined afterward.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '0' }}>
            This is why the work cannot be reduced to either poetry or visual art. It is what happens when language and image are not illustrated but integrated — when the center is reached not by going directly toward it, but by circling it, word by word, until the form reveals itself.
          </p>
        </div>

        {/* Merriweather — illustrates the symbolic figure method described above */}
        <div style={{ marginBottom: '3rem', marginTop: '1rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/merri-art.png"
            alt="Merri — Eternal Life, an AwakenArts symbolic figure"
            style={{
              width: '100%',
              borderRadius: '4px',
              boxShadow: '0 6px 24px rgba(28,43,58,0.10)',
              display: 'block',
            }}
          />
          <p style={{ fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a7a6a', marginTop: '0.75rem', textAlign: 'center' }}>
            Merri — Eternal Life. A work from the AwakenArts Collection.
          </p>
        </div>

        <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2rem' }}>
          Susan is the author of Whispers of Awareness (2025), a collection of poetry, art, and reflection, and the creator of the 52-card AwakenArts Guidance Deck — made for quiet use in reflection and creative practice. She is bilingual in English and Spanish, and lives in Georgetown, Texas.
        </p>

        <div style={{ borderLeft: '2px solid #c9a84c', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', color: '#2a2520', marginBottom: '0.4rem' }}>
            &ldquo;Art carries some things that language alone can&rsquo;t reach. The deck began there — in image, in the poem beneath the words, in the long practice of shaping language until it could finally hold what it needed to.&rdquo;
          </p>
          <p style={{ fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a7a6a' }}>— Susan Ann Shepler, AwakenArts</p>
        </div>


        {/* ── Theological foundation ── */}
        <div style={{ borderTop: '1px solid #e0d8cc', paddingTop: '3rem', marginTop: '4rem' }}>

          <p style={{ fontSize: '0.95rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a6a', marginBottom: '1.75rem' }}>
            A Literary Inheritance
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            AwakenArts works inside a tradition far older than itself. Scripture speaks continually through image rather than argument — through parable, poem, type, vision, and figure. The Psalms are built as poetry. The prophets were given visions, not proofs. &ldquo;He did not say anything to them without using a parable&rdquo; (Matthew 13:34). The symbolic forms gathered here extend that same mode: meaning made visible, met rather than explained.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            Each figure works the way a parable works. A queen crossing through fire is not a riddle to solve — she is an image that does its own work, the way the prodigal son or the woman at the well do theirs: by being encountered, not decoded. Fear, exile, longing, grace, courage, division, temptation, identity — these arrive in story and shape, the way Scripture has always presented them, not as concepts requiring a key.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2.5rem' }}>
            This is the same practice the Bible itself models: the Proverbs drawing the deep waters of the heart to the surface, the Psalms moving between confession and praise, the prophets speaking in vision because plain statement wasn&rsquo;t enough. AwakenArts simply continues that practice in visual-poetic form — each passage below speaks in the same key the work tries to hold:
          </p>

          {/* Scripture anchors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', borderLeft: '2px solid #c9a84c', paddingLeft: '1.5rem', marginBottom: '2rem' }}>

            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', color: '#2a2520', marginBottom: '0.4rem' }}>
                &ldquo;The purposes of a person&rsquo;s heart are deep waters, but one who has insight draws them out.&rdquo;
              </p>
              <p style={{ fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a7a6a' }}>Proverbs 20:5</p>
            </div>

            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', color: '#2a2520', marginBottom: '0.4rem' }}>
                &ldquo;Search me, God, and know my heart… See if there is any offensive way in me, and lead me in the way everlasting.&rdquo;
              </p>
              <p style={{ fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a7a6a' }}>Psalm 139:23–24</p>
            </div>

            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', color: '#2a2520', marginBottom: '0.4rem' }}>
                &ldquo;Be transformed by the renewing of your mind.&rdquo;
              </p>
              <p style={{ fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a7a6a' }}>Romans 12:2</p>
            </div>

            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', color: '#2a2520', marginBottom: '0.4rem' }}>
                &ldquo;Man looks at the outward appearance, but the Lord looks at the heart.&rdquo;
              </p>
              <p style={{ fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a7a6a' }}>1 Samuel 16:7</p>
            </div>

            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', color: '#2a2520', marginBottom: '0.4rem' }}>
                &ldquo;That Christ may dwell in your hearts through faith…&rdquo;
              </p>
              <p style={{ fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a7a6a' }}>Ephesians 3:16–19</p>
            </div>

          </div>

          <p style={{ fontSize: '0.95rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a6a', margin: '3rem 0 1.75rem' }}>
            Held in Tension
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            This kind of tension is native to the literary forms Scripture itself uses — parable, type, poetic structure — where a single image holds more than one truth at once: the lion that is also the lamb, the vine and the branches, the bridegroom who is also the judge. A figure doesn&rsquo;t resolve into one meaning; it carries several, the way Scripture&rsquo;s own images do.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            The forms within AwakenArts are not fixed symbols with singular meanings. They often carry beauty and danger, innocence and illusion, strength and vulnerability, longing and fear at the same time. A figure may attract and unsettle simultaneously. A form may conceal what it reveals. Grace may stand beside fragility. A reckoning may arrive by way of confusion.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            This layered structure reflects how Scripture itself speaks of the human heart — identity, memory, desire, fear, love, suffering, and longing, rarely arriving one at a time. The figures here stay alive for the same reason a good parable does: they keep moving between realities instead of settling into a single, simple meaning.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '0' }}>
            AwakenArts approaches symbolic concrete poetry as a parabolic language — the kind Scripture has always used to hold such tensions visibly: through image, form, rhythm, and figure.
          </p>

        </div>


      </main>
      </div>
    </>
  )
}
