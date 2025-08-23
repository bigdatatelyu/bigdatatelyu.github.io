"use client";

import galleryItems from "@/data/galleryItems";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="mx-auto mt-20 max-w-7xl px-6 py-20">
      <section className="text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-4xl font-extrabold leading-tight text-transparent md:text-5xl"
        >
          Gallery Kegiatan
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          Dokumentasi momen terbaik dari berbagai acara, workshop, dan aktivitas
          lab kami.
        </motion.p>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={item.src}
              alt={item.title}
              className="h-72 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              width={500}
              height={500}
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
              <span className="px-3 pb-1 text-center text-lg font-semibold leading-snug text-white">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
