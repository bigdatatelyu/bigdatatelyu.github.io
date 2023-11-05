'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

import { Personnel } from '@/data/our-teams/types';
import { cn } from '@/lib/utils';

type Props = {
  personnel: Personnel;
};

export default function MemberCard({ personnel }: Props) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative overflow-hidden rounded-lg border border-slate-200 py-6 dark:border-slate-700 md:gap-8"
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10  bg-gradient-to-br via-zinc-100/10  opacity-100  transition duration-1000 group-hover:opacity-50 "
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      {/* children */}
      <div className="flex flex-col items-center ">
        <Image
          src={personnel.image}
          alt={personnel.name}
          width={120}
          height={120}
          className="mb-2 rounded-full dark:brightness-75"
        />
        <h1 className="text-center text-xl font-bold dark:text-slate-300/90">
          {personnel.name}
        </h1>
        <h3 className="text-sm font-bold text-emerald-500">
          {personnel.major}
        </h3>

        <p className="mt-6 px-6 text-center text-sm text-slate-800/70 dark:text-slate-200/80">
          {personnel.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 px-3">
          {personnel.positions.map((position, index) => (
            <p
              key={index}
              className={cn(
                'rounded-full px-2 py-1 text-xs font-bold',
                position === 'Laboratory Assistant'
                  ? 'bg-gradient-to-br from-emerald-500 to-sky-500 text-white'
                  : 'border border-emerald-500 text-slate-700 dark:text-slate-300'
              )}
            >
              {position}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
