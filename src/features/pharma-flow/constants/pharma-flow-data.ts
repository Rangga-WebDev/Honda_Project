/** @format */

import { BellRing, CalendarCheck, Clock3, Pill } from "lucide-react";

import type {
  MedicationGuide,
  MedicationHistory,
  MedicationSchedule,
  MedicationSummaryCard,
} from "@/features/pharma-flow/types/pharma-flow.types";

export const medicationSummaryCards: MedicationSummaryCard[] = [
  {
    title: "Obat Hari Ini",
    value: "3",
    description: "Total jadwal konsumsi obat",
    status: "pending",
    icon: Pill,
  },
  {
    title: "Sudah Diminum",
    value: "2/3",
    description: "Kepatuhan hari ini 67%",
    status: "taken",
    icon: CalendarCheck,
  },
  {
    title: "Jadwal Berikutnya",
    value: "12.00",
    description: "Metformin 500 mg",
    status: "pending",
    icon: Clock3,
  },
  {
    title: "Pengingat Aktif",
    value: "ON",
    description: "Notifikasi obat aktif",
    status: "taken",
    icon: BellRing,
  },
];

export const medicationSchedules: MedicationSchedule[] = [
  {
    id: "schedule-001",
    time: "08.00",
    name: "Amlodipin",
    dose: "5 mg",
    instruction: "1 tablet setelah sarapan",
    status: "taken",
  },
  {
    id: "schedule-002",
    time: "12.00",
    name: "Metformin",
    dose: "500 mg",
    instruction: "1 tablet saat makan siang",
    status: "pending",
  },
  {
    id: "schedule-003",
    time: "20.00",
    name: "Simvastatin",
    dose: "10 mg",
    instruction: "1 tablet sebelum tidur",
    status: "pending",
  },
];

export const medicationHistory: MedicationHistory[] = [
  {
    id: "history-001",
    date: "19 Mei 2026",
    time: "08.00",
    name: "Amlodipin",
    dose: "5 mg",
    status: "taken",
    note: "Dikonfirmasi oleh caregiver.",
  },
  {
    id: "history-002",
    date: "18 Mei 2026",
    time: "20.00",
    name: "Simvastatin",
    dose: "10 mg",
    status: "taken",
    note: "Diminum sesuai jadwal.",
  },
  {
    id: "history-003",
    date: "18 Mei 2026",
    time: "12.00",
    name: "Metformin",
    dose: "500 mg",
    status: "missed",
    note: "Belum ada konfirmasi.",
  },
  {
    id: "history-004",
    date: "18 Mei 2026",
    time: "08.00",
    name: "Amlodipin",
    dose: "5 mg",
    status: "taken",
    note: "Dikonfirmasi tepat waktu.",
  },
];

export const medicationGuides: MedicationGuide[] = [
  {
    title: "Minum obat sesuai instruksi",
    description:
      "Pastikan nama obat, dosis, dan waktu konsumsi sesuai arahan tenaga kesehatan.",
    status: "taken",
  },
  {
    title: "Jangan menggandakan dosis",
    description:
      "Jika satu jadwal terlewat, jangan langsung menggandakan dosis tanpa konsultasi.",
    status: "pending",
  },
  {
    title: "Simpan obat dengan aman",
    description:
      "Letakkan obat pada tempat kering, tertutup, dan jauh dari jangkauan anak-anak.",
    status: "taken",
  },
];
