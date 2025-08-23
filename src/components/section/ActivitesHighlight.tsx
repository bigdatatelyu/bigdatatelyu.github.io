"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import activities from "@/data/activities";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ActivitiesHighlight() {
  const router = useRouter();

  return (
    <section className="px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text pb-2 text-center text-3xl font-extrabold leading-tight text-transparent md:text-4xl"
      >
        Kegiatan Terbaru
      </motion.h2>

      <Carousel
        plugins={[Autoplay({ delay: 3500 })]}
        className="mx-auto max-w-4xl"
      >
        <CarouselContent>
          {activities.map((a, i) => (
            <CarouselItem key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                onClick={() => router.push("/activities")}
                className="group cursor-pointer rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-white/20 to-emerald-50/10 p-8 text-center shadow-lg backdrop-blur-md transition-all hover:scale-[1.03] hover:border-emerald-500 hover:shadow-emerald-400/30 dark:from-slate-900/40 dark:to-slate-800/30"
              >
                <h3 className="pb-1 text-xl font-bold leading-snug text-slate-800 dark:text-green-100">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-green-200">
                  {a.date}
                </p>
                <p className="mt-4 leading-relaxed text-slate-700 dark:text-green-300">
                  {a.desc}
                </p>
                <span className="mt-5 inline-block pb-1 text-sm font-semibold leading-snug text-emerald-600 transition group-hover:underline dark:text-emerald-400">
                  Lihat Selengkapnya →
                </span>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
