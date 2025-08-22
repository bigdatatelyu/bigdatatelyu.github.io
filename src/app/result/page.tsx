"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const status = searchParams.get("status"); // "accepted" | "rejected"
  const nim = searchParams.get("nim") || "";

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      {status === "accepted" ? (
        <>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6"
          >
            <CheckCircle2 className="mx-auto h-24 w-24 text-emerald-500" />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl"
          >
            Selamat 🎉
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            NIM <span className="font-semibold">{nim}</span> dinyatakan{" "}
            <span className="text-emerald-500 font-bold">LULUS</span> seleksi!
            Bergabunglah dengan grup WhatsApp resmi untuk informasi selanjutnya.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10"
          >
            <a
              href="https://chat.whatsapp.com/your-wa-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 hover:shadow-xl">
                Join WhatsApp Group
              </Button>
            </a>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6"
          >
            <XCircle className="mx-auto h-24 w-24 text-red-500" />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl"
          >
            Nice Try 🙏
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            NIM <span className="font-semibold">{nim}</span> belum berhasil kali
            ini. Tetap semangat, masih banyak kesempatan hebat menanti 🚀
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10"
          >
            <Button
              onClick={() => router.push("/recruitment")}
              className="rounded-xl bg-gradient-to-r from-slate-400 to-slate-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              Kembali
            </Button>
          </motion.div>
        </>
      )}
    </main>
  );
}
