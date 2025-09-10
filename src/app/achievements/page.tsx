"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import achievements from "@/data/achievements";
import { cardVariants } from "@/lib/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function AchievementsPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? achievements : achievements.slice(0, 6);

  return (
    <main className="mx-auto mt-20 max-w-6xl px-6 py-20">
      {/* Header */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-4xl font-extrabold leading-tight text-transparent md:text-5xl"
        >
          Prestasi & Proyek Unggulan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-300"
        >
          Kumpulan{" "}
          <span className="font-semibold text-emerald-500">prestasi</span> yang
          telah diraih dalam berbagai kompetisi nasional maupun internasional,
          serta{" "}
          <span className="font-semibold text-emerald-500">
            proyek penelitian
          </span>{" "}
          dan inovasi berbasis data yang sedang kami kembangkan.
        </motion.p>
      </section>

      {/* Cards */}
      <section className="mt-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visibleData.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
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
          </AnimatePresence>
        </div>

        {/* Button muncul setelah card selesai */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: visibleData.length * 0.08 + 0.3, // delay sesuai jumlah card
          }}
          className="mt-12 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              onClick={() => setShowAll(!showAll)}
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500"
            >
              {showAll ? "Tutup" : "Lihat Semua"}
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
