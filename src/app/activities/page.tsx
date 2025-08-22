"use client";

import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Workshop Machine Learning",
    date: "Juni 2025",
    desc: "Pelajari dasar hingga lanjutan Machine Learning dengan praktek langsung.",
  },
  {
    title: "Bootcamp Big Data Visualization",
    date: "Mei 2025",
    desc: "Intensif 5 hari membangun dashboard interaktif untuk data besar.",
  },
  {
    title: "Seminar AI & Data Ethics",
    date: "Maret 2025",
    desc: "Diskusi mendalam tentang etika penggunaan AI dalam industri modern.",
  },
  {
    title: "Hackathon Data Science",
    date: "Februari 2025",
    desc: "Kompetisi kolaboratif 48 jam membangun solusi berbasis data.",
  },
  {
    title: "Guest Lecture: Future of AI",
    date: "Januari 2025",
    desc: "Kuliah tamu bersama pakar AI dari industri global.",
  },
];

export default function ActivitiesPage() {
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
          Kegiatan & Acara
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          Rangkaian workshop, seminar, bootcamp, dan acara menarik yang menjadi
          wadah pembelajaran, kolaborasi, dan inovasi di bidang data & AI.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="relative mt-20">
        {/* Line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-400 to-green-500 md:block" />

        <div className="space-y-12">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              className={`relative flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Content Card */}
              <div
                className={`w-full md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="rounded-2xl border border-emerald-400/20 bg-white/70 p-6 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-emerald-400/20 dark:bg-slate-900/50">
                  <p className="text-sm font-medium leading-relaxed text-emerald-600 dark:text-emerald-400">
                    {a.date}
                  </p>
                  <h3 className="mt-2 pb-1 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
                    {a.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                    {a.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <span className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-emerald-500 shadow-md dark:border-slate-900 md:block" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
