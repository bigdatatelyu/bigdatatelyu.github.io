"use client";

import { Card, CardContent } from "@/components/ui/card";
import projects from "@/data/projects";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";

export default function ResearchPage() {
  return (
    <main className="mx-auto mt-20 max-w-6xl px-6 py-20">
      <section className="text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-4xl font-extrabold leading-tight text-transparent md:text-5xl"
        >
          Penelitian & Proyek Kami
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-300"
        >
          Kumpulan riset dan proyek unggulan yang sedang kami kembangkan untuk
          memberikan dampak nyata bagi masyarakat, industri, dan dunia akademik.
        </motion.p>
      </section>

      <section className="mt-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <Card className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-md backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20 dark:border-slate-800 dark:bg-slate-900/50">
                <CardContent className="flex h-full flex-col p-6">
                  <h3 className="pb-1 text-xl font-bold leading-snug text-slate-800 transition-colors group-hover:text-emerald-500 dark:text-slate-100">
                    {p.title}
                  </h3>
                  <p className="mt-3 grow leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.desc}
                  </p>
                  <span className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-gradient-to-r from-emerald-400 to-green-500 transition-transform duration-300 group-hover:scale-x-100" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
