/** @format */

import {
  BrainCircuit,
  CalendarCheck,
  Gamepad2,
  Hand,
  Puzzle,
  Trophy,
} from "lucide-react";

import type {
  CognitiveActivity,
  CognitiveProgress,
  CognitiveSchedule,
} from "@/features/cogni-sync/types/cogni-sync.types";

export const cognitiveActivities: CognitiveActivity[] = [
  {
    id: "daily-training",
    title: "Latihan Harian",
    category: "Rutinitas",
    description:
      "Latihan singkat untuk menjaga fokus, perhatian, dan kebiasaan berpikir aktif.",
    duration: "10 menit",
    level: "mudah",
    progress: 80,
    icon: CalendarCheck,
  },
  {
    id: "memory-game",
    title: "Permainan Memori",
    category: "Daya Ingat",
    description:
      "Aktivitas mencocokkan pola dan mengingat gambar sederhana secara bertahap.",
    duration: "12 menit",
    level: "sedang",
    progress: 65,
    icon: Gamepad2,
  },
  {
    id: "finger-exercise",
    title: "Senam Jari",
    category: "Motorik Halus",
    description:
      "Gerakan ringan untuk melatih koordinasi tangan, fokus, dan kelincahan jari.",
    duration: "8 menit",
    level: "mudah",
    progress: 90,
    icon: Hand,
  },
  {
    id: "logic-challenge",
    title: "Tantangan Logika",
    category: "Berpikir",
    description:
      "Soal sederhana untuk melatih penalaran, urutan, dan pemecahan masalah.",
    duration: "15 menit",
    level: "menantang",
    progress: 45,
    icon: Puzzle,
  },
];

export const cognitiveProgress: CognitiveProgress[] = [
  {
    label: "Skor Fokus",
    value: "82%",
    description: "Meningkat dari sesi sebelumnya",
    progress: 82,
  },
  {
    label: "Konsistensi",
    value: "5 hari",
    description: "Latihan aktif minggu ini",
    progress: 72,
  },
  {
    label: "Aktivitas Selesai",
    value: "3/4",
    description: "Satu latihan tersisa hari ini",
    progress: 75,
  },
];

export const cognitiveSchedules: CognitiveSchedule[] = [
  {
    time: "08.30",
    title: "Latihan Harian",
    description: "Sesi fokus pagi",
    status: "selesai",
  },
  {
    time: "10.00",
    title: "Senam Jari",
    description: "Koordinasi tangan ringan",
    status: "selesai",
  },
  {
    time: "15.30",
    title: "Permainan Memori",
    description: "Latihan daya ingat sore",
    status: "menunggu",
  },
];

export const cognitiveBadges = [
  {
    title: "Konsisten",
    description: "Latihan aktif 5 hari",
    icon: Trophy,
  },
  {
    title: "Fokus Baik",
    description: "Skor fokus di atas 80%",
    icon: BrainCircuit,
  },
];
