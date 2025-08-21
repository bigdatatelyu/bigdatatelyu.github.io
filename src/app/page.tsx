import Image from "next/image";

export default function Home() {
  return (
    <div className="background-topography min-h-screen">
      <main className="container mx-auto flex h-screen flex-col items-center justify-center gap-6 px-6 md:flex-row md:gap-12 md:px-32">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-lg font-bold text-slate-900 dark:text-slate-300">
            Welcome to
          </p>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Big Data{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              Laboratory
            </span>
          </h1>

          <h3 className="mt-3 text-lg font-medium text-slate-800/60 dark:text-slate-200/70">
            Telkom University, Bandung, Indonesia
          </h3>

          <p className="mt-4 max-w-lg text-slate-700 dark:text-slate-300">
            Empowering Innovation with Big Data &amp; Artificial Intelligence.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="rounded-xl bg-emerald-500 px-6 py-3 text-white shadow-md transition hover:bg-emerald-600">
              Learn More
            </button>
            <button className="rounded-xl border border-slate-400 px-6 py-3 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700">
              Contact Us
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            src="/logos/bigdata.png"
            alt="Big Data Illustration"
            width={192}
            height={192}
          />
        </div>
      </main>
    </div>
  );
}
