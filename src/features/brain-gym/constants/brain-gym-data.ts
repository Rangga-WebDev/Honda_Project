/** @format */

import {
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Dumbbell,
  Hand,
} from "lucide-react";

import type {
  BrainGymBenefit,
  BrainGymStep,
} from "@/features/brain-gym/types/brain-gym.types";

export const brainGymSteps: BrainGymStep[] = [
  {
    id: "step-001",
    step: "01",
    title: "Persiapan Duduk Nyaman",
    description:
      "Duduk tegak, rilekskan bahu, dan pastikan tangan berada di posisi yang nyaman.",
    duration: "1 menit",
    icon: CheckCircle2,
  },
  {
    id: "step-002",
    step: "02",
    title: "Brain Buttons",
    description:
      "Letakkan satu tangan di area dada atas dan tangan lain di perut, lalu lakukan gerakan ringan perlahan.",
    duration: "3 menit",
    icon: BrainCircuit,
  },
  {
    id: "step-003",
    step: "03",
    title: "Senam Jari",
    description:
      "Gerakkan jari secara bergantian untuk melatih koordinasi dan fokus motorik halus.",
    duration: "3 menit",
    icon: Hand,
  },
  {
    id: "step-004",
    step: "04",
    title: "Pernapasan Tenang",
    description:
      "Tarik napas perlahan, tahan sejenak, lalu hembuskan secara lembut untuk membantu relaksasi.",
    duration: "2 menit",
    icon: Clock3,
  },
];

export const brainGymBenefits: BrainGymBenefit[] = [
  {
    title: "Meningkatkan fokus",
    description: "Membantu lansia lebih siap mengikuti aktivitas harian.",
    icon: BrainCircuit,
  },
  {
    title: "Melatih koordinasi",
    description: "Gerakan ringan mendukung koordinasi tangan dan perhatian.",
    icon: Hand,
  },
  {
    title: "Membentuk rutinitas",
    description: "Latihan singkat dapat dilakukan secara teratur setiap hari.",
    icon: Dumbbell,
  },
];
