/** @format */

import type { LucideIcon } from "lucide-react";

export type FamilyMemberStatus = "online" | "standby" | "offline";
export type FamilyReminderStatus = "done" | "pending";

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  phone: string;
  role: string;
  status: FamilyMemberStatus;
  lastSeen: string;
  avatarLabel: string;
}

export interface FamilyUpdate {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FamilyReminder {
  id: string;
  title: string;
  time: string;
  assignee: string;
  status: FamilyReminderStatus;
}
