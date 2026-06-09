/** @format */

import type { LucideIcon } from "lucide-react";

export type MedicationStatus = "taken" | "pending" | "missed";

export interface MedicationSummaryCard {
  title: string;
  value: string;
  description: string;
  status: MedicationStatus;
  icon: LucideIcon;
}

export interface MedicationSchedule {
  id: string;
  time: string;
  name: string;
  dose: string;
  instruction: string;
  status: MedicationStatus;
}

export interface MedicationHistory {
  id: string;
  date: string;
  time: string;
  name: string;
  dose: string;
  status: MedicationStatus;
  note: string;
}

export interface MedicationGuide {
  title: string;
  description: string;
  status: MedicationStatus;
}
