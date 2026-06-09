/** @format */

import type { LucideIcon } from "lucide-react";

export type HealthRecordStatus = "normal" | "warning" | "danger";

export interface HealthMetricCard {
  title: string;
  value: string;
  unit: string;
  description: string;
  status: HealthRecordStatus;
  icon: LucideIcon;
}

export interface HealthRecord {
  id: string;
  date: string;
  time: string;
  bloodPressure: string;
  bloodSugar: string;
  weight: string;
  status: HealthRecordStatus;
  note: string;
}

export interface HealthInsight {
  title: string;
  description: string;
  status: HealthRecordStatus;
}
