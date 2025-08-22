"use client";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-24 text-center"
    >
      <motion.h2
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl"
      >
        Tentang Lab
      </motion.h2>

      <motion.p
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-200"
      >
        Laboratorium ini berfokus pada pengembangan, penelitian, dan penerapan
        teknologi terkini di bidang data dan komputasi. Melalui berbagai
        kegiatan riset dan kolaborasi, lab berperan sebagai wadah untuk inovasi,
        pembelajaran, dan kontribusi nyata dalam perkembangan ilmu pengetahuan
        serta pemecahan masalah di dunia nyata.
        <br />
        <span className="font-semibold text-emerald-500 dark:text-emerald-400">
          Kenali lab kami lebih lanjut melalui halaman berikut.
        </span>
      </motion.p>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <Link href="/about">
          <Button className="mt-8 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500">
            Selengkapnya
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
