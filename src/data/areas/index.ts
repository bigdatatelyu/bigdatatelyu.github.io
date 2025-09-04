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
      "Topik ini membahas pemrosesan data skala besar menggunakan Hadoop, Spark, dan Kafka. Fokus pada batch & stream processing, pembangunan pipeline ETL dengan Apache Airflow, penyimpanan data ke database lokal, serta visualisasi menggunakan dashboard interaktif.",
  },
  {
    title: "Data Warehouse",
    icon: Database,
    description:
      "Topik ini membahas perancangan dan implementasi Data Warehouse untuk mendukung analisis data bisnis, mencakup arsitektur, pemodelan dimensional, proses ETL, dan visualisasi dengan BI tools. Kegiatan diakhiri dengan proyek pembangunan Data Warehouse berbasis cloud.",
  },
  {
    title: "Document Oriented",
    icon: FileText,
    description:
      "Topik ini membahas pemahaman dan praktik penggunaan MongoDB sebagai database document-oriented. Mulai dari instalasi, mengatur struktur data, CRUD, sampai mengerjakan query lanjutan dan integrasi dasar. Diakhiri dengan tugas akhir untuk memperdalam pemahaman konsep NoSQL secara menyeluruh.",
  },
  {
    title: "Generative AI",
    icon: Brain,
    description:
      "Topik ini membahas penerapan algoritma Generative AI dalam pengolahan teks, mulai dari Python, ANN, RNN/LSTM, hingga arsitektur transformer. Eksplorasi dilakukan terhadap model open/closed source dan penggunaan embedding dengan vector database. Diakhiri dengan pembangunan chatbot berbasis LangChain dan pendekatan RAG.",
  },
  {
    title: "Graph Database",
    icon: Share2,
    description:
      "Topik ini membahas dasar Graph Database dengan Neo4j, Cypher, dan optimasi performa. Dilanjutkan eksplorasi Graph Machine Learning, serta studi kasus Social Network Analysis dan Recommendation System. Diakhiri dengan proyek aplikasi berbasis graph.",
  },
  {
    title: "Key Value",
    icon: FolderKanban,
    description:
      "Topik ini membahas konsep dan praktik Key-Value Store seperti Redis, KeyDB, dan Memcached untuk caching, session, dan real-time analytics. Kamu bakal mempelajari struktur data, strategi optimasi, dan membangun sistem berperforma tinggi melalui studi kasus seperti e-commerce, notifikasi, dan data IoT.",
  },
  {
    title: "Relational DB",
    icon: BarChart3,
    description:
      "Topik ini membahas dasar hingga lanjutan penggunaan Relational Database, mulai dari perancangan ERD, normalisasi, dan query SQL, hingga optimasi performa, security, serta fitur seperti stored procedure dan trigger. Kamu akan membangun sistem database relasional yang efisien dan siap pakai melalui studi kasus nyata.",
  },
];

export default areas;
