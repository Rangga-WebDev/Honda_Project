/** @format */

import type { LucideIcon } from "lucide-react";

export interface DashboardNavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  badge?: string;
}

export interface DashboardStat {
  title: string;
  value: string;
  description: string;
  status: "normal" | "warning" | "danger";
  icon: LucideIcon;
}
