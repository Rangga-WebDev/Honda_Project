/** @format */

import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  PackageCheck,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

type ElderlyStatus = "stable" | "warning" | "danger";
type StockStatus = "safe" | "low";

interface ElderlyRow {
  name: string;
  room: string;
  health: string;
  cognitive: string;
  caregiver: string;
  status: ElderlyStatus;
}

interface InstitutionStat {
  title: string;
  value: string;
  note: string;
  icon: LucideIcon;
  tone: "normal" | "warning" | "danger";
}

interface StockItemData {
  title: string;
  value: string;
  percent: number;
  status: StockStatus;
}

const institutionStats: InstitutionStat[] = [
  {
    title: "Total Lansia",
    value: "52",
    note: "+3 baru bulan ini",
    icon: UsersRound,
    tone: "normal",
  },
  {
    title: "Staf/Kader Aktif",
    value: "12",
    note: "Rasio pemantauan 1:4",
    icon: ClipboardList,
    tone: "normal",
  },
  {
    title: "Cognitive Kit",
    value: "48",
    note: "15 unit stok tersedia",
    icon: BrainCircuit,
    tone: "normal",
  },
  {
    title: "SOS Aktif",
    value: "2",
    note: "Butuh respon segera",
    icon: ShieldAlert,
    tone: "danger",
  },
];

const elderlyRows: ElderlyRow[] = [
  {
    name: "Ibu Besse' S.",
    room: "Kamar A-02",
    health: "Stabil · 120/80",
    cognitive: "75% Brain Gym",
    caregiver: "Siti Rahma",
    status: "stable",
  },
  {
    name: "Bpk. Slamet",
    room: "Kamar B-10",
    health: "Gula darah tinggi",
    cognitive: "40% belum latihan",
    caregiver: "Andi Pratama",
    status: "warning",
  },
  {
    name: "Ibu Fatimah",
    room: "Kamar A-05",
    health: "SOS · Risiko jatuh",
    cognitive: "Belum tersedia",
    caregiver: "Tim Darurat",
    status: "danger",
  },
  {
    name: "Bpk. Yusuf",
    room: "Kamar C-01",
    health: "Stabil",
    cognitive: "90% selesai",
    caregiver: "Nur Aisyah",
    status: "stable",
  },
];

const stockItems: StockItemData[] = [
  {
    title: "Smart Kit Level 1",
    value: "12 dari 15 unit tersedia",
    percent: 78,
    status: "safe",
  },
  {
    title: "Buku Panduan Brain Gym",
    value: "3 unit tersisa",
    percent: 32,
    status: "low",
  },
  {
    title: "Sensor Monitoring Dasar",
    value: "8 unit siap pakai",
    percent: 64,
    status: "safe",
  },
];

export function InstitutionDashboard() {
  return (
    <div className="mx-auto max-w-[1180px] space-y-6">
      <section className="overflow-hidden rounded-[34px] border border-[#1A2B49]/10 bg-white p-5 shadow-[0_18px_45px_rgba(26,43,73,0.10)] sm:p-8">
        <InstitutionHeader />
        <InstitutionStatGrid />

        <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_330px]">
          <MonitoringTable />
          <InstitutionSidePanel />
        </div>
      </section>
    </div>
  );
}

function InstitutionHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#E95B30]">
          Dashboard Instansi
        </p>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A2B49] md:text-4xl">
          Panti Sejahtera Abadi
        </h1>

        <p className="mt-2 max-w-2xl text-base font-semibold leading-7 text-[#1A2B49]/60">
          Monitoring lansia, staf, SOS, dan cognitive kit dalam satu dashboard
          pengelola yang ringkas dan mudah dipantau.
        </p>
      </div>

      <div className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#1A2B49]/10 bg-[#FDFBF7] px-5 text-sm font-extrabold text-[#1A2B49]">
        <CheckCircle2 className="size-5 text-[#E95B30]" aria-hidden="true" />
        Admin Utama
      </div>
    </div>
  );
}

function InstitutionStatGrid() {
  return (
    <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {institutionStats.map((stat) => (
        <InstitutionStatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
}

function InstitutionStatCard({ stat }: { stat: InstitutionStat }) {
  const Icon = stat.icon;

  return (
    <div
      className={
        stat.tone === "danger"
          ? "rounded-[24px] border border-[#D2232A]/20 bg-white p-5 shadow-sm"
          : "rounded-[24px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm"
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#1A2B49]/55">{stat.title}</p>

          <h3 className="mt-2 text-3xl font-extrabold text-[#1A2B49]">
            {stat.value}
          </h3>

          <p
            className={
              stat.tone === "danger"
                ? "mt-2 text-sm font-extrabold text-[#D2232A]"
                : "mt-2 text-sm font-extrabold text-emerald-600"
            }
          >
            {stat.note}
          </p>
        </div>

        <div
          className={
            stat.tone === "danger"
              ? "flex size-12 items-center justify-center rounded-2xl bg-[#D2232A]/10 text-[#D2232A]"
              : "flex size-12 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]"
          }
        >
          <Icon className="size-6" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function MonitoringTable() {
  return (
    <div className="rounded-[28px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#1A2B49]">
            Monitoring Kondisi Lansia
          </h2>

          <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
            Pantauan kesehatan, aktivitas kognitif, caregiver, dan status
            prioritas.
          </p>
        </div>

        <button className="min-h-11 rounded-full bg-[#E95B30]/10 px-5 text-sm font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02]">
          Lihat Semua Data
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[820px] text-left">
          <thead>
            <tr className="border-b border-[#1A2B49]/10 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1A2B49]/45">
              <th className="py-4 pr-4">Nama Lansia</th>
              <th className="py-4 pr-4">Lokasi</th>
              <th className="py-4 pr-4">Kesehatan</th>
              <th className="py-4 pr-4">Kognitif</th>
              <th className="py-4 pr-4">Caregiver</th>
              <th className="py-4 pr-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {elderlyRows.map((row) => (
              <tr
                key={row.name}
                className="border-b border-[#1A2B49]/5 text-sm font-bold text-[#1A2B49]/70"
              >
                <td className="py-4 pr-4 text-[#1A2B49]">{row.name}</td>
                <td className="py-4 pr-4">{row.room}</td>
                <td className="py-4 pr-4">{row.health}</td>
                <td className="py-4 pr-4">{row.cognitive}</td>
                <td className="py-4 pr-4">{row.caregiver}</td>
                <td className="py-4 pr-4">
                  <StatusPill status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InstitutionSidePanel() {
  return (
    <aside className="space-y-5">
      <EmergencyAlertCard />
      <StockPanel />
      <OperationalSummary />
    </aside>
  );
}

function EmergencyAlertCard() {
  return (
    <div className="rounded-[24px] border border-[#D2232A]/20 bg-[#D2232A]/10 p-5">
      <div className="flex gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#D2232A] text-white">
          <AlertTriangle className="size-6" aria-hidden="true" />
        </div>

        <div>
          <h3 className="font-extrabold text-[#D2232A]">Emergency Alert</h3>

          <p className="mt-1 text-sm font-semibold leading-6 text-[#1A2B49]/65">
            Kamar A-05 mengirim sinyal SOS. Tim caregiver perlu melakukan
            pengecekan segera.
          </p>

          <button className="mt-4 min-h-11 rounded-full bg-[#D2232A] px-5 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
            Respon Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

function StockPanel() {
  return (
    <div className="rounded-[28px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
          <PackageCheck className="size-6" aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-[#1A2B49]">
            Stok Cognitive Kit
          </h3>
          <p className="text-sm font-semibold text-[#1A2B49]/55">
            Pantau stok alat pendukung.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {stockItems.map((item) => (
          <StockItem key={item.title} item={item} />
        ))}
      </div>

      <button className="mt-5 min-h-12 w-full rounded-2xl bg-[#1A2B49] text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
        Pesan Tambahan Kit
      </button>
    </div>
  );
}

function StockItem({ item }: { item: StockItemData }) {
  return (
    <div className="rounded-2xl bg-[#FDFBF7] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-extrabold text-[#1A2B49]">{item.title}</p>
          <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
            {item.value}
          </p>
        </div>

        <span
          className={
            item.status === "low"
              ? "rounded-full bg-[#E95B30]/10 px-3 py-1 text-xs font-extrabold text-[#E95B30]"
              : "rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-600"
          }
        >
          {item.status === "low" ? "Rendah" : "Aman"}
        </span>
      </div>

      <div className="mt-3 h-2 rounded-full bg-[#1A2B49]/10">
        <div
          className={
            item.status === "low"
              ? "h-2 rounded-full bg-[#E95B30]"
              : "h-2 rounded-full bg-emerald-500"
          }
          style={{ width: `${item.percent}%` }}
        />
      </div>
    </div>
  );
}

function OperationalSummary() {
  return (
    <div className="rounded-[28px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
          <HeartPulse className="size-6" aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-[#1A2B49]">
            Ringkasan Operasional
          </h3>
          <p className="text-sm font-semibold text-[#1A2B49]/55">
            Kondisi umum hari ini.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <SummaryRow label="Lansia stabil" value="46" />
        <SummaryRow label="Perlu pengecekan" value="4" />
        <SummaryRow label="Alert prioritas" value="2" />
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#FDFBF7] p-4">
      <p className="text-sm font-extrabold text-[#1A2B49]/65">{label}</p>
      <p className="text-sm font-extrabold text-[#E95B30]">{value}</p>
    </div>
  );
}

function StatusPill({ status }: { status: ElderlyStatus }) {
  if (status === "danger") {
    return (
      <span className="rounded-full bg-[#D2232A]/10 px-3 py-1 text-xs font-extrabold text-[#D2232A]">
        Darurat
      </span>
    );
  }

  if (status === "warning") {
    return (
      <span className="rounded-full bg-[#E95B30]/10 px-3 py-1 text-xs font-extrabold text-[#E95B30]">
        Perlu Cek
      </span>
    );
  }

  return (
    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-600">
      Stabil
    </span>
  );
}
