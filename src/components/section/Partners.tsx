"use client";

import { motion } from "framer-motion";
import { GraduationCap, Factory, Microscope } from "lucide-react";

const partners = [
  { name: "Telkom University", icon: GraduationCap },
  { name: "Industry Partner", icon: Factory },
  { name: "Research Partner", icon: Microscope },
];

export default function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-center text-3xl font-extrabold text-transparent md:text-4xl"
      >
        Mitra & Kolaborasi
      </motion.h2>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-14">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="flex h-24 w-24 items-center justify-center rounded-2xl bg-emerald-100 shadow-md dark:bg-emerald-900/40"
            >
              <p.icon className="h-12 w-12 text-emerald-600 dark:text-emerald-300" />
            </motion.div>
            <p className="mt-3 font-medium text-slate-600 dark:text-green-200">
              {p.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
