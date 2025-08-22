"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="px-6 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-3xl font-extrabold leading-tight text-transparent md:text-4xl"
      >
        Ingin Berkolaborasi?
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-200"
      >
        Mari bersama membangun masa depan dengan riset dan inovasi berbasis{" "}
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
          Big Data
        </span>{" "}
        &{" "}
        <span className="font-semibold text-green-600 dark:text-green-400">
          Artificial Intelligence
        </span>
        .
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <a
            href="https://instagram.com/bigdata.lab" // ganti dengan akun IG kamu
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500">
              Hubungi Kami
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
