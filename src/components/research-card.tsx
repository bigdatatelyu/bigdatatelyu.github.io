import { Research } from '@/data/researches/types';

type Props = {
  research: Research;
};

export default function ResearchCard({ research }: Props) {
  return (
    <a
      href={research.link}
      target="_blank"
      className="group relative rounded-xl border p-8 transition-all hover:border-emerald-500 dark:border dark:border-slate-700 dark:hover:border-emerald-500"
    >
      <h3 className="mb-1 text-sm font-medium text-emerald-500">
        {research.year}
      </h3>
      <h1 className="mb-2 text-xl font-bold">{research.title}</h1>
      <h2 className="text-sm font-medium text-slate-700 dark:text-slate-400">
        {research.authors.map((author, index) => (
          <span key={index}>
            {author}
            {index !== research.authors.length - 1 && '; '}
          </span>
        ))}
      </h2>
    </a>
  );
}
