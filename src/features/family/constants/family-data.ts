/** @format */

import {
  BellRing,
  BrainCircuit,
  HeartPulse,
  Pill,
  ShieldCheck,
} from "lucide-react";

import type {
  FamilyMember,
  FamilyReminder,
  FamilyUpdate,
} from "@/features/family/types/family.types";

export const familyMembers: FamilyMember[] = [
  {
    id: "member-001",
    name: "Budi Santoso",
    relation: "Anak",
    phone: "0812-3456-7890",
    role: "Kontak utama",
    status: "online",
    lastSeen: "Aktif sekarang",
    avatarLabel: "BS",
  },
  {
    id: "member-002",
    name: "Siti Rahma",
    relation: "Anak",
    phone: "0821-1122-3344",
    role: "Pendamping obat",
    status: "standby",
    lastSeen: "10 menit lalu",
    avatarLabel: "SR",
  },
  {
    id: "member-003",
    name: "Andi Pratama",
    relation: "Cucu",
    phone: "0852-9988-7766",
    role: "Pemantau aktivitas",
    status: "offline",
    lastSeen: "2 jam lalu",
    avatarLabel: "AP",
  },
];

export const familyUpdates: FamilyUpdate[] = [
  {
    id: "update-001",
    time: "08.00",
    title: "Kesehatan stabil",
    description:
      "Tekanan darah Ibu Ani tercatat 120/80 dan gula darah 110 mg/dL.",
    icon: HeartPulse,
  },
  {
    id: "update-002",
    time: "08.30",
    title: "Brain Gym selesai",
    description: "Latihan pagi selesai dengan progress 80%.",
    icon: BrainCircuit,
  },
  {
    id: "update-003",
    time: "12.00",
    title: "Jadwal obat berikutnya",
    description: "Metformin 500 mg perlu dikonfirmasi saat makan siang.",
    icon: Pill,
  },
  {
    id: "update-004",
    time: "Hari ini",
    title: "Tidak ada SOS aktif",
    description: "Status darurat aman dan tidak ada alert prioritas tinggi.",
    icon: ShieldCheck,
  },
];

export const familyReminders: FamilyReminder[] = [
  {
    id: "reminder-001",
    title: "Cek tekanan darah sore",
    time: "16.00",
    assignee: "Budi Santoso",
    status: "pending",
  },
  {
    id: "reminder-002",
    title: "Konfirmasi obat siang",
    time: "12.00",
    assignee: "Siti Rahma",
    status: "pending",
  },
  {
    id: "reminder-003",
    title: "Latihan memori pagi",
    time: "08.30",
    assignee: "Caregiver",
    status: "done",
  },
];

export const familySummaryCards = [
  {
    title: "Keluarga Terhubung",
    value: "3",
    description: "Anggota aktif memantau",
    icon: BellRing,
  },
  {
    title: "Update Hari Ini",
    value: "4",
    description: "Aktivitas dibagikan",
    icon: ShieldCheck,
  },
  {
    title: "Reminder Bersama",
    value: "2",
    description: "Masih menunggu",
    icon: BellRing,
  },
] as const;
