"use client";

import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart City Data Platform",
    desc: "Platform integrasi data untuk mendukung smart city berbasis IoT & Big Data.",
  },
  {
    title: "AI Chatbot for Education",
    desc: "Chatbot pintar untuk membantu mahasiswa dalam pembelajaran interaktif.",
  },
  {
    title: "Big Data Analytics Dashboard",
    desc: "Dashboard interaktif untuk visualisasi dan analisis data berskala besar.",
  },
  {
    title: "Predictive Maintenance System",
    desc: "Machine learning untuk memprediksi potensi kerusakan mesin industri.",
  },
  {
    title: "E-Learning Recommendation Engine",
    desc: "Sistem rekomendasi konten belajar berbasis preferensi mahasiswa.",
  },
  {
    title: "Healthcare Data Mining",
    desc: "Analisis data kesehatan untuk deteksi dini penyakit.",
  },
];

export default function ResearchPage() {
  return (
    <main className="mx-auto mt-20 max-w-6xl px-6 py-20">
      {/* Hero */}
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

      {/* Projects Grid */}
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
                  {/* Title */}
                  <h3 className="pb-1 text-xl font-bold leading-snug text-slate-800 transition-colors group-hover:text-emerald-500 dark:text-slate-100">
                    {p.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-3 grow leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.desc}
                  </p>

                  {/* Hover Accent */}
                  <span className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-gradient-to-r from-emerald-400 to-green-500 transition-transform duration-300 group-hover:scale-x-100" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="mt-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={projects.length + 1}
          className="text-2xl font-semibold text-slate-800 dark:text-slate-200 leading-tight pb-1"
        >
          Punya ide atau ingin berkolaborasi dengan kami?
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={projects.length + 2}
        >
          <Link href="/contact">
            <Button className="mt-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500">
              Hubungi Kami
            </Button>
          </Link>
        </motion.div>
      </section> */}
    </main>
  );
}
