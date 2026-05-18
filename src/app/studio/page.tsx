import Nav from '@/components/Nav'

export default function StudioPage() {
  return (
    <>
      <Nav />
      <main
        style={{
          padding: '6rem 2rem 4rem',
          maxWidth: '720px',
          margin: '0 auto',
          minHeight: '60vh',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Studio</h1>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          AwakenArts grew through years of poetry, journaling, concrete poetry, image-making, faith, reflection, and the ordinary unfolding of life.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          The forms did not begin as ideas to be explained. They emerged gradually through the work itself — through recurring images, symbols, language, memory, longing, and patterns that seemed to gather meaning. Much of the work arrived before full understanding. The creative process gradually became an effort to observe what was unfolding inwardly through image, experience, and encounters.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          That unfolding led more deeply toward center, where I was met by the symbolic language that accompanied a living relationship with Jesus Christ, and where grace, truth, mercy, and a lasting sense of orientation gradually became inseparable from the work itself.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          Language, symbol, art, suffering, beauty, memory, and reflection all carry traces of meaning and may illuminate portions of the inward life. Yet no system is identical to the living center toward which it points.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
          AwakenArts is offered simply as a gathered body of concrete poems, readings, encounters, and symbolic works shaped through lived experience.
        </p>
      </main>
    </>
  )
}
