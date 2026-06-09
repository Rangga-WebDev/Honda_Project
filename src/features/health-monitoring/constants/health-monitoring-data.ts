/** @format */

import { Activity, CalendarCheck, HeartPulse, Scale } from "lucide-react";

import type {
  HealthInsight,
  HealthMetricCard,
  HealthRecord,
} from "@/features/health-monitoring/types/health-monitoring.types";

export const healthMetricCards: HealthMetricCard[] = [
  {
    title: "Tekanan Darah",
    value: "120/80",
    unit: "mmHg",
    description: "Normal hari ini",
    status: "normal",
    icon: HeartPulse,
  },
  {
    title: "Gula Darah",
    value: "110",
    unit: "mg/dL",
    description: "Stabil setelah sarapan",
    status: "normal",
    icon: Activity,
  },
  {
    title: "Berat Badan",
    value: "60",
    unit: "kg",
    description: "Tidak berubah signifikan",
    status: "normal",
    icon: Scale,
  },
  {
    title: "Kepatuhan Cek",
    value: "4/5",
    unit: "hari",
    description: "Satu hari belum tercatat",
    status: "warning",
    icon: CalendarCheck,
  },
];

export const healthRecords: HealthRecord[] = [
  {
    id: "record-001",
    date: "19 Mei 2026",
    time: "08.00",
    bloodPressure: "120/80",
    bloodSugar: "110",
    weight: "60 kg",
    status: "normal",
    note: "Kondisi stabil, tidak ada keluhan.",
  },
  {
    id: "record-002",
    date: "18 Mei 2026",
    time: "08.15",
    bloodPressure: "125/82",
    bloodSugar: "118",
    weight: "60 kg",
    status: "normal",
    note: "Gula darah masih dalam batas aman.",
  },
  {
    id: "record-003",
    date: "17 Mei 2026",
    time: "09.00",
    bloodPressure: "140/90",
    bloodSugar: "132",
    weight: "60.5 kg",
    status: "warning",
    note: "Perlu pemantauan ulang setelah istirahat.",
  },
  {
    id: "record-004",
    date: "16 Mei 2026",
    time: "08.05",
    bloodPressure: "119/78",
    bloodSugar: "108",
    weight: "60 kg",
    status: "normal",
    note: "Aktivitas ringan berjalan baik.",
  },
];

export const healthInsights: HealthInsight[] = [
  {
    title: "Kondisi umum stabil",
    description:
      "Mayoritas data kesehatan Ibu Ani berada pada rentang normal dalam empat hari terakhir.",
    status: "normal",
  },
  {
    title: "Perlu konsistensi pencatatan",
    description:
      "Satu jadwal cek belum tercatat. Caregiver perlu mengingatkan pencatatan harian.",
    status: "warning",
  },
  {
    title: "Pantau tekanan darah tinggi",
    description:
      "Terdapat satu catatan tekanan darah meningkat. Jika berulang, konsultasi medis diperlukan.",
    status: "warning",
  },
];
