"use client";

import MemberCard from "@/components/MemberCard";
import { members } from "@/data/our-teams";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <section className="container mx-auto my-20 md:px-32">
      <div className="mb-10 mt-16 text-center">
        <motion.h1
          className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-4xl font-extrabold leading-tight text-transparent md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Tim Kami
        </motion.h1>

        <motion.h3
          className="mt-3 text-lg font-medium text-slate-800 dark:text-slate-300/80"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Kumpulan anggota terbaik dari setiap generasi ✨
        </motion.h3>
      </div>

      <div className="space-y-20">
        {members.map((era, eraIndex) => (
          <div key={eraIndex}>
            {/* Grid per era */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {era.personnels.map((personnel, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <MemberCard personnel={personnel} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
