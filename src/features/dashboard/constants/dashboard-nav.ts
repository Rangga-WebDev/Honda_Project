/** @format */

import {
  BrainCircuit,
  Building2,
  Dumbbell,
  HeartPulse,
  Home,
  Pill,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

import type { DashboardNavItem } from "@/features/dashboard/types/dashboard.types";

export const dashboardNavItems: DashboardNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    description: "Ringkasan aktivitas dan kesehatan lansia.",
  },
  {
    title: "Monitoring",
    href: "/dashboard/health-monitoring",
    icon: HeartPulse,
    description: "Pantau tekanan darah, gula darah, dan berat badan.",
  },
  {
    title: "CogniSync",
    href: "/dashboard/cogni-sync",
    icon: BrainCircuit,
    description: "Latihan fokus, memori, koordinasi, dan logika.",
  },
  {
    title: "Brain Gym",
    href: "/dashboard/brain-gym",
    icon: Dumbbell,
    description: "Panduan latihan otak dan motorik ringan.",
  },
  {
    title: "PharmaFlow",
    href: "/dashboard/pharma-flow",
    icon: Pill,
    description: "Jadwal obat, dosis, dan riwayat konsumsi.",
  },
  {
    title: "Keluarga",
    href: "/dashboard/family",
    icon: UsersRound,
    description: "Keluarga dan caregiver terhubung.",
  },
  {
    title: "SOS",
    href: "/dashboard/sos",
    icon: ShieldAlert,
    description: "Akses bantuan cepat saat darurat.",
    badge: "Darurat",
  },
  {
    title: "Instansi",
    href: "/dashboard/institution",
    icon: Building2,
    description: "Dashboard monitoring panti/klinik.",
  },
];
