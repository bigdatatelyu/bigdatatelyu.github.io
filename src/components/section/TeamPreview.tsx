"use client";

import MemberCard from "@/components/member-card";
import { members } from "@/data/our-teams";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function TeamPreview() {
  const latestEra = members[0];

  return (
    <section className="container mx-auto my-20 md:px-32">
      {/* Header */}
      <div className="mb-10 text-center">
        <motion.h1
          className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Tim Kami
        </motion.h1>

        <motion.h3
          className="mt-3 text-lg font-medium text-slate-800 dark:text-slate-300/80"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Temui <strong>anggota terbaik kami</strong> yang menjunjung tinggi{" "}
          <strong>integritas</strong> serta membangun budaya{" "}
          <strong>keunggulan</strong> bersama.
        </motion.h3>
      </div>

      {/* Grid Member Preview */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latestEra.personnels.slice(0, 3).map((personnel, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index + 2}
          >
            <MemberCard personnel={personnel} />
          </motion.div>
        ))}
      </div>

      {/* Tombol Lihat Semua */}
      <div className="mt-10 flex justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
        >
          <Link href="/team">
            <Button className="mt-8 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 dark:from-emerald-400 dark:to-green-500">
              Lihat Semua Anggota
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
