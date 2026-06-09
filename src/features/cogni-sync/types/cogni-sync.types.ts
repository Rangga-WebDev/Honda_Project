/** @format */

import type { LucideIcon } from "lucide-react";

export type CognitiveActivityLevel = "mudah" | "sedang" | "menantang";

export interface CognitiveActivity {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: CognitiveActivityLevel;
  progress: number;
  icon: LucideIcon;
}

export interface CognitiveProgress {
  label: string;
  value: string;
  description: string;
  progress: number;
}

export interface CognitiveSchedule {
  time: string;
  title: string;
  description: string;
  status: "selesai" | "menunggu";
}
