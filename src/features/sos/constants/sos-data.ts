/** @format */

import {
  Ambulance,
  BellRing,
  MapPin,
  MessageCircleWarning,
  PhoneCall,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

import type {
  SosContact,
  SosLog,
  SosWorkflowStep,
} from "@/features/sos/types/sos.types";

export const sosContacts: SosContact[] = [
  {
    id: "contact-001",
    name: "Budi Santoso",
    relation: "Anak",
    phone: "0812-3456-7890",
    priority: "Prioritas 1",
    status: "primary",
  },
  {
    id: "contact-002",
    name: "Siti Rahma",
    relation: "Anak",
    phone: "0821-1122-3344",
    priority: "Prioritas 2",
    status: "backup",
  },
  {
    id: "contact-003",
    name: "Klinik Sehat Lansia",
    relation: "Tenaga Medis",
    phone: "021-555-1234",
    priority: "Medis",
    status: "medical",
  },
];

export const sosLogs: SosLog[] = [
  {
    id: "sos-log-001",
    date: "18 Mei 2026",
    time: "19.20",
    type: "Pusing mendadak",
    location: "Rumah · Ruang keluarga",
    status: "resolved",
    handledBy: "Budi Santoso",
  },
  {
    id: "sos-log-002",
    date: "12 Mei 2026",
    time: "09.45",
    type: "Hampir jatuh",
    location: "Teras depan",
    status: "resolved",
    handledBy: "Caregiver",
  },
  {
    id: "sos-log-003",
    date: "Hari ini",
    time: "Belum ada",
    type: "Tidak ada SOS aktif",
    location: "-",
    status: "pending",
    handledBy: "-",
  },
];

export const sosWorkflowSteps: SosWorkflowStep[] = [
  {
    title: "Kontak darurat dihubungi",
    description: "Keluarga atau caregiver prioritas menerima alert pertama.",
    icon: PhoneCall,
  },
  {
    title: "Notifikasi real-time dikirim",
    description: "Status darurat dikirim ke dashboard keluarga dan instansi.",
    icon: BellRing,
  },
  {
    title: "Lokasi terakhir dibagikan",
    description:
      "Lokasi demo ditampilkan agar keluarga mengetahui posisi lansia.",
    icon: MapPin,
  },
  {
    title: "Bantuan medis disiapkan",
    description:
      "Kontak medis dapat dihubungi jika kondisi membutuhkan tindakan.",
    icon: Ambulance,
  },
];

export const sosSummaryCards = [
  {
    title: "Status Darurat",
    value: "Aman",
    description: "Tidak ada SOS aktif",
    icon: ShieldAlert,
  },
  {
    title: "Kontak Siaga",
    value: "3",
    description: "Keluarga dan medis",
    icon: UsersRound,
  },
  {
    title: "Alert Terkirim",
    value: "0",
    description: "Hari ini",
    icon: MessageCircleWarning,
  },
] as const;
