import ResearchCard from '@/components/research-card';
import researches from '@/data/researches';

type Props = {};

export default function ResearchesPage({}: Props) {
  return (
    <main className="container mx-auto mt-40 md:px-32">
      <section>
        <h1 className="text-5xl font-extrabold">Researches</h1>
        <h3 className="mt-3 text-lg font-medium text-slate-800 dark:text-slate-300/80">
          {/* TODO: Change the description */}
          Some of the researches are from work and some are on my own time.
        </h3>
      </section>

      <div className="my-16 h-[1px] w-full bg-slate-800/10 dark:bg-slate-300/10"></div>

      {/* <section className="mb-16 grid gap-8 lg:grid lg:grid-cols-3"> */}
      <section className="mx-auto mb-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {researches.map((research, index) =>
            index % 3 === 0 ? (
              <ResearchCard key={index} research={research} />
            ) : null
          )}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {researches.map((research, index) =>
            index % 3 === 1 ? (
              <ResearchCard key={index} research={research} />
            ) : null
          )}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {researches.map((research, index) =>
            index % 3 === 2 ? (
              <ResearchCard key={index} research={research} />
            ) : null
          )}
        </div>
      </section>
    </main>
  );
}
