"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Smart City Data Platform",
    desc: "Membangun platform integrasi data untuk mendukung smart city berbasis IoT & Big Data.",
  },
  {
    title: "AI Chatbot for Education",
    desc: "Mengembangkan chatbot pintar untuk membantu mahasiswa dalam pembelajaran interaktif.",
  },
  {
    title: "Big Data Analytics Dashboard",
    desc: "Dashboard interaktif untuk visualisasi dan analisis data berskala besar.",
  },
];

export default function ProjectsShowcase() {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-center text-3xl font-extrabold leading-tight text-transparent md:text-4xl"
      >
        Proyek Unggulan
      </motion.h2>

      {/* Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Card className="group flex h-full flex-col justify-between rounded-2xl border border-slate-700/40 bg-white/5 shadow-md backdrop-blur-sm transition hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 dark:bg-slate-900/40">
              <CardContent className="flex h-full flex-col p-6">
                <h3 className="pb-1 text-xl font-semibold leading-snug text-slate-800 transition group-hover:text-emerald-400 dark:text-green-100">
                  {p.title}
                </h3>
                <p className="mt-3 grow leading-relaxed text-slate-600 dark:text-green-200">
                  {p.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <motion.div whileHover={{ scale: 1.0 }}>
          <Button
            onClick={() => router.push("/research")}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500"
          >
            Lihat Semua Proyek
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
