import { motion } from "framer-motion";
import Image from "next/image";

import { Personnel } from "@/data/our-teams/types";
import { cn } from "@/lib/utils";

type Props = {
  personnel: Personnel;
  index?: number;
};

export default function MemberCard({ personnel, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/40 bg-white/5 py-6 shadow-md backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-emerald-500/20 dark:bg-slate-900/40"
    >
      {/* children */}
      <div className="flex flex-1 flex-col items-center">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image
            src={personnel.image}
            alt={personnel.name}
            width={120}
            height={120}
            className="mb-3 rounded-full ring-2 ring-emerald-400 transition-all group-hover:ring-emerald-300 dark:brightness-90 dark:group-hover:ring-emerald-500"
          />
        </motion.div>

        <h1 className="px-2 text-center text-xl font-bold text-slate-800 transition-colors group-hover:text-emerald-400 dark:text-slate-200 dark:group-hover:text-emerald-300">
          {personnel.name}
        </h1>

        <h3 className="text-sm font-semibold text-emerald-500 transition-colors group-hover:text-emerald-400 dark:text-emerald-400 dark:group-hover:text-emerald-300">
          {personnel.major}
        </h3>

        <p className="mt-5 px-6 text-center text-sm text-slate-600 transition-colors dark:text-slate-300 dark:group-hover:text-slate-200">
          {personnel.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 px-3">
          {personnel.positions.map((position, posIndex) => (
            <motion.p
              key={posIndex}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold shadow-sm transition-all",
                position === "Laboratory Assistant"
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-400 hover:to-green-500"
                  : "border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white dark:text-emerald-300 dark:hover:bg-emerald-400 dark:hover:text-slate-900"
              )}
            >
              {position}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
