import {
  BarChart3,
  Brain,
  Database,
  FileText,
  FolderKanban,
  Layers,
  Share2,
} from "lucide-react";
import { Area } from "./types";

const areas: Area[] = [
  {
    title: "Big Data Application",
    icon: Layers,
    description:
      "Fokus pada penerapan big data lintas-domain untuk menghasilkan solusi nyata dan berdampak.",
  },
  {
    title: "Data Warehouse",
    icon: Database,
    description:
      "Perancangan dan pengelolaan gudang data terstruktur guna mendukung analitik dan pengambilan keputusan.",
  },
  {
    title: "Document Oriented",
    icon: FileText,
    description:
      "Riset sistem basis data berorientasi dokumen untuk penyimpanan data yang fleksibel dan cepat.",
  },
  {
    title: "Generative AI",
    icon: Brain,
    description:
      "Pengembangan model AI generatif untuk menghasilkan teks, gambar, maupun konten multimodal.",
  },
  {
    title: "Graph Database",
    icon: Share2,
    description:
      "Eksplorasi database graf untuk memodelkan serta menganalisis relasi kompleks antar entitas.",
  },
  {
    title: "Key Value",
    icon: FolderKanban,
    description:
      "Studi database key-value berperforma tinggi untuk aplikasi berskala besar dan latensi rendah.",
  },
  {
    title: "Relational DB",
    icon: BarChart3,
    description:
      "Penelitian sistem basis data relasional sebagai fondasi utama manajemen data modern.",
  },
];

export default areas;
