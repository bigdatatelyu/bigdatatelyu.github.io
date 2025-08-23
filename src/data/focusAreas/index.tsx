import { BookOpen, Cpu, LineChart, Users } from "lucide-react";
import { FocusArea } from "./types";

const focusAreas: FocusArea[] = [
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Kecerdasan Buatan",
    desc: "Penelitian AI & Machine Learning untuk solusi cerdas.",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Data Science",
    desc: "Analisis data untuk menemukan pola dan insight baru.",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Pembelajaran",
    desc: "Mendukung pembelajaran mahasiswa melalui riset.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Kolaborasi",
    desc: "Bekerja sama dengan berbagai pihak dalam riset & pengembangan.",
  },
];

export default focusAreas;
