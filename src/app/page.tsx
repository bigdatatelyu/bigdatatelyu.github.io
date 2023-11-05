export default function Home() {
  return (
    <main className="background-topography container mx-auto flex h-screen flex-col items-center justify-center gap-4 md:px-32">
      <p className="text-center text-lg font-bold text-slate-900 dark:text-slate-300">
        Welcome to
      </p>
      <h1 className="text-center text-6xl font-extrabold">
        Big Data{' '}
        <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
          Laboratory
        </span>
      </h1>
      <h3 className="text-center text-lg font-medium text-slate-800/60 dark:text-slate-200/70">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h3>
    </main>
  );
}
