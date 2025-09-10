import { Achievements } from "@/data/researches/types";


type Props = {
  achievements: Achievements;
};

export default function AchievementsCard({ achievements }: Props) {
  return (
    <a
      href={achievements.link}
      target="_blank"
      className="group relative rounded-xl border p-8 transition-all hover:border-emerald-500 dark:border dark:border-slate-700 dark:hover:border-emerald-500"
    >
      <h3 className="mb-1 text-sm font-medium text-emerald-500">
        {achievements.year}
      </h3>
      <h1 className="mb-2 text-xl font-bold">{achievements.title}</h1>
      <h2 className="text-sm font-medium text-slate-700 dark:text-slate-400">
        {achievements.authors.map((author, index) => (
          <span key={index}>
            {author}
            {index !== achievements.authors.length - 1 && "; "}
          </span>
        ))}
      </h2>
    </a>
  );
}
