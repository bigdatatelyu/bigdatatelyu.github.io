"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import recruitmentResults from "@/data/recruitmentResults";
import { fadeUp } from "@/lib/motionVariants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function RecruitmentPage() {
  const [nim, setNim] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const router = useRouter();

  const showToast = (fn: () => void) => {
    if (isToastVisible) return;
    setIsToastVisible(true);
    fn();
    setTimeout(() => setIsToastVisible(false), 2500);
  };

  const handleSearch = () => {
    if (!nim.trim()) {
      showToast(() =>
        toast.error("Silakan masukkan NIM terlebih dahulu.", {
          position: "top-right",
          style: {
            background: "#fee2e2",
            color: "#b91c1c",
            fontWeight: 600,
          },
        })
      );
      return;
    }

    const result = recruitmentResults[nim];

    if (result === "accepted") {
      showToast(() =>
        toast.success(`Selamat! NIM ${nim} dinyatakan LULUS seleksi.`, {
          position: "top-right",
          style: {
            background: "#dcfce7",
            color: "#166534",
            fontWeight: 600,
          },
        })
      );
      router.push(`/result?status=accepted&nim=${nim}`);
    } else if (result === "rejected") {
      showToast(() =>
        toast.error(`Mohon maaf, NIM ${nim} dinyatakan TIDAK LULUS.`, {
          position: "top-right",
          style: {
            background: "#fee2e2",
            color: "#b91c1c",
            fontWeight: 600,
          },
        })
      );
      router.push(`/result?status=rejected&nim=${nim}`);
    } else {
      showToast(() =>
        toast.warning(`NIM ${nim} tidak ditemukan.`, {
          position: "top-right",
          style: {
            background: "#fef9c3",
            color: "#854d0e",
            fontWeight: 600,
          },
        })
      );
    }
  };

  return (
    <main className="mx-auto my-20 max-w-5xl px-6 py-20">
      <section className="mb-24 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl"
        >
          Recruitment Lab
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          Info lengkap mengenai recruitment, persyaratan, dan tata cara
          pendaftaran dapat dilihat melalui halaman resmi kami.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-10"
        >
          <Link
            href="https://instagram.com/bigdata.lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 text-white shadow-lg transition hover:scale-105 hover:shadow-xl dark:from-emerald-400 dark:to-green-500">
              Selengkapnya
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <section>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent md:text-4xl"
        >
          Cek Hasil Recruitment
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mx-auto mt-4 max-w-xl text-center text-slate-600 dark:text-slate-400"
        >
          Masukkan <span className="font-semibold text-emerald-500">NIM</span>{" "}
          kamu untuk mengetahui hasil seleksi recruitment.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-10 flex max-w-md items-center gap-3"
        >
          <Input
            placeholder="Masukkan NIM..."
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            className="rounded-xl border-slate-300 bg-white shadow-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800"
          />
          <Button
            onClick={handleSearch}
            disabled={isToastVisible}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 text-white shadow-md transition hover:scale-105 hover:shadow-xl disabled:opacity-50 dark:from-emerald-400 dark:to-green-500"
          >
            Cari
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
