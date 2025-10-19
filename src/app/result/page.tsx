"use client";

import { Button } from "@/components/ui/button";
import recruitmentResults from "@/data/recruitmentResults";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState<"accepted" | "rejected" | null>(null);
  const [nim, setNim] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      router.push("/recruitment");
      return;
    }

    try {
      const decoded = atob(token);
      const [tokenNim, tokenName, tokenStatus] = decoded.split(":");

      const result = recruitmentResults[tokenNim];

      if (
        !result ||
        result.name !== tokenName ||
        result.status !== tokenStatus
      ) {
        router.push("/recruitment");
        return;
      }

      setIsValid(true);
      setNim(tokenNim);
      setName(tokenName);
      setStatus(result.status as "accepted" | "rejected");
    } catch (error) {
      router.push("/recruitment");
    }
  }, [searchParams, router]);

  if (!isValid) {
    return (
      <main className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <AlertTriangle className="mx-auto mb-6 h-24 w-24 text-yellow-500" />
        <h1 className="text-4xl font-extrabold">Memvalidasi...</h1>
      </main>
    );
  }

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
            className="text-4xl font-extrabold md:text-5xl"
          >
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Selamat
            </span>{" "}
            🎉
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            <span className="font-semibold">{name}</span> (NIM: {nim})
            dinyatakan <span className="font-bold text-emerald-500">LULUS</span>{" "}
            seleksi! Bergabunglah dengan grup WhatsApp resmi untuk informasi
            selanjutnya.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex gap-4"
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
            <Button
              onClick={() => router.push("/recruitment")}
              variant="outline"
              className="rounded-xl px-8 py-3 shadow-md transition hover:scale-105"
            >
              Kembali
            </Button>
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
            <XCircle className="mx-auto h-24 w-24 text-rose-500" />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl font-extrabold md:text-5xl"
          >
            <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
              Tetap Semangat
            </span>{" "}
            🙏
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            <span className="font-semibold">{name}</span> (NIM: {nim}) belum
            berhasil kali ini. Tetap semangat, masih banyak kesempatan hebat
            menanti 🚀
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
              className="rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              Kembali
            </Button>
          </motion.div>
        </>
      )}
    </main>
  );
}
