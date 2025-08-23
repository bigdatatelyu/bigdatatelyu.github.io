"use client";

import CallToAction from "@/components/section/CallToAction";
import focusAreas from "@/data/focusAreas";
import { mission, vision } from "@/data/visionMission";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative mx-auto mt-20 max-w-6xl px-6 py-20">
      <section className="text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-4xl font-extrabold leading-tight text-transparent md:text-5xl"
        >
          Tentang Laboratorium
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          Kami adalah laboratorium riset dan pengembangan yang berfokus pada{" "}
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">
            data, komputasi, dan inovasi teknologi
          </span>
          . Melalui kolaborasi, pembelajaran, dan eksperimen, kami berkomitmen
          untuk memberikan kontribusi nyata bagi perkembangan ilmu pengetahuan
          serta solusi di dunia nyata.
        </motion.p>
      </section>

      <section className="mt-20 grid gap-10 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="rounded-2xl border border-emerald-200 bg-white/50 p-8 shadow-md backdrop-blur-sm dark:border-emerald-800 dark:bg-slate-900/40"
        >
          <h2 className="mb-4 pb-1 text-2xl font-bold leading-tight text-emerald-600 dark:text-emerald-400">
            Visi
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {vision.text}
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="rounded-2xl border border-emerald-200 bg-white/50 p-8 shadow-md backdrop-blur-sm dark:border-emerald-800 dark:bg-slate-900/40"
        >
          <h2 className="mb-4 pb-1 text-2xl font-bold leading-tight text-emerald-600 dark:text-emerald-400">
            Misi
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-gray-700 dark:text-gray-300">
            {mission.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="mt-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="pb-2 text-center text-3xl font-bold leading-tight text-emerald-600 dark:text-emerald-400"
        >
          Bidang Fokus Kami
        </motion.h2>
        <div className="mb-28 mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5 + idx}
              className="rounded-2xl border border-slate-200 bg-white/50 p-6 text-center shadow-md backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/40"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                {item.icon}
              </div>
              <h3 className="mb-2 pb-1 text-lg font-semibold leading-snug text-slate-800 dark:text-slate-200">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
