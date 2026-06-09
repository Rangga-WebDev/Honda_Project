/** @format */

import type { LucideIcon } from "lucide-react";

export interface BrainGymStep {
  id: string;
  step: string;
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
}

export interface BrainGymBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}
