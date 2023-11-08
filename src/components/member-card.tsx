import Image from 'next/image';

import { Personnel } from '@/data/our-teams/types';
import { cn } from '@/lib/utils';

type Props = {
  personnel: Personnel;
};

export default function MemberCard({ personnel }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-200 py-6 transition-all dark:border-slate-700 md:gap-8">
      {/* children */}
      <div className="flex flex-col items-center">
        <Image
          src={personnel.image}
          alt={personnel.name}
          width={120}
          height={120}
          className="mb-2 rounded-full dark:brightness-75"
        />
        <h1 className="px-2 text-center text-xl font-bold dark:text-slate-300/90">
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
