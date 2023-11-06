type Props = {};

export default function ResearchesPage({}: Props) {
  return (
    <main className="container mx-auto mt-40 md:px-32">
      <section className="mb-16">
        <h1 className="text-5xl font-extrabold">Researches</h1>
        <h3 className="mt-3 text-lg font-medium text-slate-800 dark:text-slate-300/80">
          {/* TODO: Change the description */}
          Some of the researches are from work and some are on my own time.
        </h3>
      </section>
      <hr />
    </main>
  );
}
