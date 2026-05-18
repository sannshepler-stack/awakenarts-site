import Hero from '../../components/hero';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Susan Ann Shepler and the work of AwakenArts"
        text="AwakenArts brings together symbolic imagery, poetry, reflective practice, and depth-oriented awareness. This first version keeps the explanation clear and restrained while leaving room for fuller biography and project history later."
        imageSrc="/placeholders/swan-moon.jpeg"
      />
      <section className="section">
        <div className="container card">
          <h3>Working biography block</h3>
          <p>Susan Ann Shepler is a writer and artist whose work explores the symbolic language of images, dreams, and archetypes through poetry, amplified imagery, and reflective encounter. This section can be refined later without changing the build structure.</p>
        </div>
      </section>
    </main>
  );
}
