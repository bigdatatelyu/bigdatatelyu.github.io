import Image from 'next/image';

import { members } from '@/data/our-teams';
import { cn } from '@/lib/utils';
import MemberCard from '@/components/member-card';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <section className="container mx-auto mb-28 mt-40 md:px-32">
        <h1 className="text-5xl font-extrabold">Members</h1>
        <h3 className="mt-3 text-lg font-medium text-slate-800 dark:text-slate-300/80">
          Our mission is to <strong>harmonize</strong> every moment, upholding{' '}
          <strong>integrity</strong> and fostering a culture of{' '}
          <strong>excellence</strong> together.
        </h3>
      </section>

      {members.map((era) => (
        <>
          <section
            key={era.year}
            className="background-polkadot flex flex-col items-center justify-center pb-6 pt-8"
          >
            <h2 className="mb-4 bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-4xl font-extrabold text-transparent">
              {era.year} Era
            </h2>

            <div className="flex w-screen flex-row justify-between gap-4 overflow-x-hidden py-8">
              {era.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${era.year} Era`}
                  width={320}
                  height={224}
                  className={cn(
                    index === 2 ? 'rotate-2' : '-rotate-2',
                    'rounded-lg shadow-lg dark:brightness-75 w-80 h-67'
                  )}
                />
              ))}
            </div>
          </section>
          <section className="container mx-auto my-14 md:px-32">
            <div className="grid gap-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
              {era.personnels.map((personnel, index) => (
                <MemberCard key={index} personnel={personnel} />
              ))}
            </div>
          </section>
        </>
      ))}
    </main>
  );
}
