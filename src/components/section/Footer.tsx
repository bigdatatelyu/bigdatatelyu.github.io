"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-green-300 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {/* Kolom 1 - Logo / About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-green-400">Big Data Lab</h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            Telkom University <br /> Bandung, Indonesia
          </p>
        </motion.div>

        {/* Kolom 2 - Kontak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-green-400">Kontak</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="mailto:bigdata@telkomuniversity.ac.id"
                className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-green-600 dark:text-neutral-300"
              >
                <Mail className="h-4 w-4" /> bigdata@telkomuniversity.ac.id
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/bigdata.lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-green-600 dark:text-neutral-300"
              >
                <Instagram className="h-4 w-4" /> @bigdata.lab
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Jl.+Telekomunikasi+No.1+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-green-600 dark:text-neutral-300"
              >
                <MapPin className="h-4 w-4" /> Jl. Telekomunikasi No.1 Bandung
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Kolom 3 - Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-green-400">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-neutral-700 transition-colors hover:text-green-600 dark:text-neutral-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                className="text-neutral-700 transition-colors hover:text-green-600 dark:text-neutral-300"
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className="text-neutral-700 transition-colors hover:text-green-600 dark:text-neutral-300"
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                href="/recruitment"
                className="text-neutral-700 transition-colors hover:text-green-600 dark:text-neutral-300"
              >
                Recruitment
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-xs text-neutral-500 dark:text-neutral-400"
      >
        © {new Date().getFullYear()} Big Data Laboratory - Telkom University
      </motion.p>
    </footer>
  );
}
