/** @format */

import type { LucideIcon } from "lucide-react";

export type SosContactStatus = "primary" | "backup" | "medical";
export type SosEventStatus = "active" | "resolved" | "pending";

export interface SosContact {
  id: string;
  name: string;
  relation: string;
  phone: string;
  priority: string;
  status: SosContactStatus;
}

export interface SosLog {
  id: string;
  date: string;
  time: string;
  type: string;
  location: string;
  status: SosEventStatus;
  handledBy: string;
}

export interface SosWorkflowStep {
  title: string;
  description: string;
  icon: LucideIcon;
}
