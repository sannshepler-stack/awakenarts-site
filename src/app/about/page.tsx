import Nav from '@/components/Nav'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ padding: '6rem 2rem 4rem', maxWidth: '720px', margin: '0 auto' }}>

        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8a7a6a', marginBottom: '1.5rem' }}>
          About
        </p>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Susan Ann Shepler</h1>

        <p style={{ fontSize: '1.1rem', color: '#8a7a6a', marginBottom: '3rem', fontStyle: 'italic' }}>
          Artist · Writer · Facilitator · Depth-Oriented Counselor
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          AwakenArts began not as a platform but as a practice — a lifelong inquiry into the symbolic life of the soul. Susan Ann Shepler has spent decades working at the intersection of language, image, and the interior world, drawing from Jungian depth psychology, the Christian mystical tradition, and the transformative power of the word made visible.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          With a Master in Counseling Psychology from Webster University — specializing in Spirituality and Play Therapy — and certifications as both a Transformative Language Artist and a Journal Instructor, Susan brings a rare combination of clinical grounding and creative vision to her work. She has provided over a thousand hours of individual and group therapy, integrating bibliotherapy, journaling, and creative modalities with traditional counseling.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          Her concrete poetry is the visible form of this method. Words become figures. Figures become mirrors. The Queen Ann word-figure at the heart of this site is not decoration — it is a demonstration of what language can do when it is shaped rather than merely spoken. Shaping words is one method, the AwakenArts method, and it becomes a path for healing.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          Susan is the author of Whispers of Awareness (2025), an anthology combining poetry, art, and Jungian psychology, and the creator of the 52-card AwakenArts Guidance Deck — a symbolic tool for reflection, growth, and creative practice. She is bilingual in English and Spanish and is based in Georgetown, Texas.
        </p>

        <div style={{ borderTop: '1px solid #e0d8cc', paddingTop: '2.5rem', marginTop: '3rem' }}>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#5a4a3a', fontStyle: 'italic' }}>
            Art has a way of carrying what language alone cannot. These cards began there — in image, in symbol, in the poem beneath awareness. Shaping words is one method, the AwakenArts method, and it becomes a path for healing.
          </p>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.1em', color: '#8a7a6a', marginTop: '1rem' }}>
            — SUSAN ANN SHEPLER, AWAKENARTS
          </p>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <Link href="/begin" style={{ fontSize: '1rem', letterSpacing: '0.08em', color: '#1C2B3A', textDecoration: 'none', borderBottom: '1px solid #1C2B3A', paddingBottom: '2px' }}>
            Begin Here
          </Link>
        </div>

      </main>
    </>
  )
}
