import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Susan Ann Shepler — AwakenArts',
  description:
    'Susan Ann Shepler — artist, writer, facilitator, and depth-oriented counselor. Master in Counseling Psychology (Webster University), certified Transformative Language Artist, author of Whispers of Awareness, and creator of the AwakenArts Within the Circle series of concrete poems and readings.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: '/about',
    title: 'About Susan Ann Shepler — AwakenArts',
    description:
      'Artist, writer, and depth-oriented counselor. Creator of AwakenArts and the Within the Circle series of concrete poems and readings.',
    images: [
      {
        url: '/images/about/susan-ann-shepler.jpg',
        alt: 'Portrait of Susan Ann Shepler',
      },
    ],
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
          Artist · Writer · Facilitator · Depth-Oriented Counselor
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
          AwakenArts began not as a project but as a practice. Susan Ann Shepler has spent decades working at the intersection of language, image, and the interior life — drawing from depth psychology, the Christian contemplative tradition, and the conviction that words shaped into visible form carry a kind of meaning that ordinary language cannot reach alone.
        </p>

        <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2rem' }}>
          With a Master in Counseling Psychology from Webster University — specializing in Spirituality and Play Therapy — and certifications as both a Transformative Language Artist and a Journal Instructor, Susan brings a rare combination of clinical grounding and creative vision to her work. She has provided over a thousand hours of individual and group therapy, integrating bibliotherapy, journaling, and creative modalities with traditional counseling.
        </p>

        <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2rem' }}>
          Her concrete poetry is the visible form of this method. Words become figures. Figures become mirrors. The Queen Ann word-figure at the heart of this site is not decoration — it is a demonstration of what language can do when it is shaped rather than merely spoken. Shaping words is one method, the AwakenArts method, and it becomes a path for healing.
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
            This process engaged both hemispheres simultaneously — the left brain in formal craft, meter, rhyme, and structure; the right brain in image, spatial intelligence, and symbolic recognition. The integration of the two in the act of making is itself the subject of the work. The process enacts what the poems describe: the movement toward center through the joining of what had been divided.
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
            alt="Merriweather — Eternal Life, an AwakenArts symbolic figure"
            style={{
              width: '100%',
              borderRadius: '4px',
              boxShadow: '0 6px 24px rgba(28,43,58,0.10)',
              display: 'block',
            }}
          />
          <p style={{ fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a7a6a', marginTop: '0.75rem', textAlign: 'center' }}>
            Merriweather · Eternal Life — AwakenArts Symbolic Figure
          </p>
        </div>

        <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2rem' }}>
          Susan is the author of Whispers of Awareness (2025), an anthology combining poetry, art, and Jungian psychology, and the creator of the AwakenArts Within the Circle series — fifty-two concrete poems and their card-form presentation. She is bilingual in English and Spanish and is based in Georgetown, Texas.
        </p>


        {/* ── Theological foundation ── */}
        <div style={{ borderTop: '1px solid #e0d8cc', paddingTop: '3rem', marginTop: '4rem' }}>

          <p style={{ fontSize: '0.95rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a6a', marginBottom: '1.75rem' }}>
            The Inner Journey
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            The inner journey in AwakenArts is not self-absorption or detached mysticism. It is the movement toward truthful self-understanding, discernment, wisdom, reconciliation, and orientation before God.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            The symbolic forms become mirrors through which a person encounters fear, division, longing, exile, temptation, transformation, courage, grace, and identity. This aligns with longstanding Biblical wisdom about the inner person, the heart, discernment, and the search for what is true beneath appearances.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '2.5rem' }}>
            The inner journey is the movement from surface identity toward truthful recognition of the deeper self before God — not escape from reality, not self-worship, not mystical vagueness, but deeper honesty, awareness, discernment, integration, and orientation toward what is true.
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
            Opposing Tensions
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            This direction aligns naturally with parable, myth, dream, Scripture, and human experience itself. Archetypal forms contain opposing energies simultaneously. This tension gives symbolic figures their depth, vitality, and psychological truth.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            The forms within AwakenArts are not fixed symbols with singular meanings. They often carry beauty and danger, innocence and illusion, strength and vulnerability, longing and fear at the same time. A figure may attract and unsettle simultaneously. A form may conceal what it reveals. Grace may exist beside fragility. Transformation may emerge through disorientation.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '1.75rem' }}>
            This layered structure reflects the nature of human experience itself, where identity, memory, desire, fear, love, suffering, and spiritual longing rarely exist in isolation from one another. The symbolic figures remain alive because they move between opposing realities rather than resolving into simplistic definitions.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.95', marginBottom: '0' }}>
            AwakenArts approaches symbolic concrete poetry as a contemplative and parabolic language capable of holding these tensions visibly — through image, form, rhythm, and embodiment.
          </p>

        </div>


      </main>
      </div>
    </>
  )
}
