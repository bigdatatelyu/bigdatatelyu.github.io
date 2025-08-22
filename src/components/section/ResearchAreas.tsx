"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Database,
  FileText,
  FolderKanban,
  Layers,
  Share2,
} from "lucide-react";
import { useState } from "react";

type Area = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const areas: Area[] = [
  {
    title: "Big Data Application",
    icon: Layers,
    description:
      "Fokus pada penerapan big data lintas-domain untuk menghasilkan solusi nyata dan berdampak.",
  },
  {
    title: "Data Warehouse",
    icon: Database,
    description:
      "Perancangan dan pengelolaan gudang data terstruktur guna mendukung analitik dan pengambilan keputusan.",
  },
  {
    title: "Document Oriented",
    icon: FileText,
    description:
      "Riset sistem basis data berorientasi dokumen untuk penyimpanan data yang fleksibel dan cepat.",
  },
  {
    title: "Generative AI",
    icon: Brain,
    description:
      "Pengembangan model AI generatif untuk menghasilkan teks, gambar, maupun konten multimodal.",
  },
  {
    title: "Graph Database",
    icon: Share2,
    description:
      "Eksplorasi database graf untuk memodelkan serta menganalisis relasi kompleks antar entitas.",
  },
  {
    title: "Key Value",
    icon: FolderKanban,
    description:
      "Studi database key-value berperforma tinggi untuk aplikasi berskala besar dan latensi rendah.",
  },
  {
    title: "Relational DB",
    icon: BarChart3,
    description:
      "Penelitian sistem basis data relasional sebagai fondasi utama manajemen data modern.",
  },
];

export default function ResearchAreas() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleAreas = showAll ? areas : areas.slice(0, 3);

  return (
    <section className="px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-center text-3xl font-extrabold leading-tight text-transparent md:text-4xl"
      >
        Bidang Riset & Keahlian
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleAreas.map(({ title, icon: Icon, description }, i) => (
          <motion.div
            key={title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative h-64 w-full cursor-pointer [perspective:1200px]"
            onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
            role="button"
            aria-label={`Kartu ${title}`}
            aria-expanded={flippedIndex === i}
          >
            <div
              className={`relative h-full w-full transform-gpu transition-transform duration-700 [transform-style:preserve-3d] ${
                flippedIndex === i ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front */}
              <Card className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-slate-700/40 bg-white/5 p-8 text-center shadow-md backdrop-blur-sm transition [backface-visibility:hidden] hover:shadow-lg hover:shadow-emerald-500/20 dark:bg-slate-900/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                  <Icon className="h-10 w-10 text-emerald-400" />
                </div>
                <p className="mt-4 pb-1 font-semibold leading-snug text-slate-800 dark:text-green-100">
                  {title}
                </p>
              </Card>

              {/* Back */}
              <Card className="absolute inset-0 flex items-center justify-center rounded-2xl border border-emerald-600/20 bg-emerald-500/10 p-6 text-center shadow-md backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-emerald-400/20 dark:bg-emerald-400/10">
                <p className="max-w-[28ch] text-sm leading-relaxed text-slate-800 dark:text-gray-200">
                  {description}
                </p>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 space-x-4 text-center">
        {!showAll ? (
          <Button
            onClick={() => setShowAll(true)}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-2 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500"
          >
            Tampilkan Lainnya
          </Button>
        ) : (
          <Button
            onClick={() => setShowAll(false)}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-2 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500"
          >
            Tutup
          </Button>
        )}
      </div>
    </section>
  );
}
