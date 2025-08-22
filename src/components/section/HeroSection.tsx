"use client";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFooter = (): void => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="container mx-auto mt-20 flex flex-col items-center justify-center gap-6 px-6 py-20 md:flex-row md:gap-12 md:px-32">
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg font-bold text-green-600 dark:text-green-400"
        >
          Welcome to
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl font-extrabold md:text-6xl"
        >
          Big Data{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
            Laboratory
          </span>
        </motion.h1>

        <motion.h3
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-3 text-lg font-medium text-slate-700/70 dark:text-slate-200/70"
        >
          Telkom University, Bandung, Indonesia
        </motion.h3>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-4 max-w-lg text-slate-700 dark:text-slate-300"
        >
          Empowering Innovation with{" "}
          <span className="font-semibold text-emerald-500">Big Data</span> &{" "}
          <span className="font-semibold text-green-500">
            Artificial Intelligence
          </span>
          .
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 flex gap-4"
        >
          {/* Tombol Learn More */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 text-white shadow-lg transition"
          >
            Learn More
          </motion.button>

          {/* Tombol Join Us */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/recruitment"
            className="rounded-xl border border-green-400 px-6 py-3 text-green-600 transition hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-900/30"
          >
            Join Us
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden md:block"
      >
        <Image
          src="/logos/bigdata.png"
          alt="Big Data Illustration"
          width={220}
          height={220}
          className="drop-shadow-lg"
        />
      </motion.div>
    </section>
  );
}
