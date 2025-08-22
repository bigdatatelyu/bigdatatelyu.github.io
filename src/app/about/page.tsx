"use client";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import { BookOpen, Cpu, LineChart, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative mx-auto mt-20 max-w-6xl px-6 py-20">
      {/* Hero Section */}
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

      {/* Visi & Misi */}
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
            Menjadi pusat unggulan dalam pengembangan teknologi data dan
            komputasi, serta menghasilkan inovasi yang berdampak luas bagi
            masyarakat dan industri.
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
            <li>
              Mengembangkan penelitian inovatif di bidang data & komputasi.
            </li>
            <li>
              Mendorong kolaborasi dengan industri, akademisi, dan masyarakat.
            </li>
            <li>
              Membimbing mahasiswa untuk siap menghadapi tantangan teknologi.
            </li>
            <li>Menyediakan solusi nyata untuk permasalahan di dunia nyata.</li>
          </ul>
        </motion.div>
      </section>

      {/* Research Area */}
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Cpu className="h-8 w-8" />,
              title: "Kecerdasan Buatan",
              desc: "Penelitian AI & Machine Learning untuk solusi cerdas.",
            },
            {
              icon: <LineChart className="h-8 w-8" />,
              title: "Data Science",
              desc: "Analisis data untuk menemukan pola dan insight baru.",
            },
            {
              icon: <BookOpen className="h-8 w-8" />,
              title: "Pembelajaran",
              desc: "Mendukung pembelajaran mahasiswa melalui riset.",
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Kolaborasi",
              desc: "Bekerja sama dengan berbagai pihak dalam riset & pengembangan.",
            },
          ].map((item, idx) => (
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

      {/* CTA */}
      <section className="mt-24 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={10}
          className="pb-1 text-2xl font-bold leading-tight text-slate-800 dark:text-slate-200"
        >
          Tertarik untuk bergabung atau berkolaborasi?
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={11}
        >
          <Link href="/contact">
            <Button className="mt-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500">
              Hubungi Kami
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
