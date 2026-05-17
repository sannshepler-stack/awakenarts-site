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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Studio</h1>
      </main>
    </>
  )
}
