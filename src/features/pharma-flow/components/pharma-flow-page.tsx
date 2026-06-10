/** @format */

import Link from "next/link";

import {
  AlertTriangle,
  ArrowLeft,
  BellRing,
  CheckCircle2,
  Clock3,
  Plus,
  Save,
  XCircle,
} from "lucide-react";

import {
  medicationGuides,
  medicationHistory,
  medicationSchedules,
  medicationSummaryCards,
} from "@/features/pharma-flow/constants/pharma-flow-data";
import type { MedicationStatus } from "@/features/pharma-flow/types/pharma-flow.types";
import { cn } from "@/lib/utils";

const statusLabel: Record<MedicationStatus, string> = {
  taken: "Sudah",
  pending: "Menunggu",
  missed: "Terlewat",
};

const statusClassName: Record<MedicationStatus, string> = {
  taken: "bg-emerald-50 text-emerald-600",
  pending: "bg-[#E95B30]/10 text-[#E95B30]",
  missed: "bg-[#D2232A]/10 text-[#D2232A]",
};

export function PharmaFlowPage() {
  return (
    <div className="mx-auto max-w-[1180px] space-y-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02]"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Kembali ke Dashboard
      </Link>

      <section className="overflow-hidden rounded-[34px] border border-[#1A2B49]/10 bg-white shadow-[0_18px_45px_rgba(26,43,73,0.10)]">
        <div className="grid gap-0 xl:grid-cols-[1fr_360px]">
          <div className="space-y-6 p-5 sm:p-8">
            <PharmaHeader />
            <SummaryGrid />
            <TodaySchedule />
            <QuickInputPanel />
            <MedicationHistoryTable />
          </div>

          <aside className="space-y-5 border-t border-[#1A2B49]/10 bg-[#FDFBF7] p-5 sm:p-8 xl:border-l xl:border-t-0">
            <AdherencePanel />
            <MedicationGuidePanel />
          </aside>
        </div>
      </section>
    </div>
  );
}

function PharmaHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#E95B30]">
          PharmaFlow
        </p>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A2B49] md:text-4xl">
          Jadwal dan Riwayat Obat Ibu Besse&apos;
        </h1>

        <p className="mt-2 max-w-2xl text-base font-semibold leading-7 text-[#1A2B49]/60">
          Kelola jadwal obat, dosis, waktu konsumsi, dan konfirmasi minum obat
          agar kepatuhan penggunaan obat lebih mudah dipantau.
        </p>
      </div>

      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E95B30] px-5 text-base font-extrabold text-white shadow-[0_12px_28px_rgba(233,91,48,0.24)] transition duration-300 hover:scale-[1.02]">
        <Plus className="size-5" aria-hidden="true" />
        Tambah Obat
      </button>
    </div>
  );
}

function SummaryGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {medicationSummaryCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-[26px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
                <Icon className="size-6" aria-hidden="true" />
              </div>

              <StatusPill status={card.status} />
            </div>

            <p className="mt-5 text-sm font-bold text-[#1A2B49]/55">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#1A2B49]">
              {card.value}
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function TodaySchedule() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#1A2B49]">
            Jadwal Obat Hari Ini
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
            Konfirmasi obat yang sudah diminum agar riwayat tercatat.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-[#E95B30]/10 px-4 py-2 text-sm font-extrabold text-[#E95B30]">
          <BellRing className="size-4" aria-hidden="true" />
          Pengingat aktif
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        {medicationSchedules.map((schedule) => (
          <div
            key={schedule.id}
            className="grid gap-4 rounded-[24px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-4 md:grid-cols-[90px_1fr_auto]"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#E95B30] shadow-sm">
                <Clock3 className="size-6" aria-hidden="true" />
              </div>
              <p className="text-lg font-extrabold text-[#1A2B49]">
                {schedule.time}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-[#1A2B49]">
                {schedule.name} {schedule.dose}
              </h3>
              <p className="mt-1 text-sm font-semibold leading-6 text-[#1A2B49]/60">
                {schedule.instruction}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <StatusPill status={schedule.status} />

              <button className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A2B49] px-5 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
                Konfirmasi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickInputPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#1A2B49]">
            Input Obat Baru
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
            Form masih demo frontend. Data obat akan tersimpan setelah backend
            dan database dibuat.
          </p>
        </div>

        <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1A2B49] px-5 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
          <Save className="size-4" aria-hidden="true" />
          Simpan Demo
        </button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        <DemoInput label="Nama Obat" value="Metformin" />
        <DemoInput label="Dosis" value="500 mg" />
        <DemoInput label="Waktu" value="12.00" />
        <DemoInput label="Instruksi" value="Setelah Makan" />
      </div>
    </div>
  );
}

function DemoInput({ label, value }: { label: string; value: string }) {
  return (
    <label className="space-y-2">
      <span className="text-sm font-extrabold text-[#1A2B49]/65">{label}</span>
      <input
        defaultValue={value}
        className="h-12 w-full rounded-2xl border border-[#1A2B49]/10 bg-white px-4 text-base font-semibold text-[#1A2B49] outline-none transition duration-300 focus:border-[#E95B30]/50 focus:ring-2 focus:ring-[#E95B30]/20"
      />
    </label>
  );
}

function MedicationHistoryTable() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-2xl font-extrabold text-[#1A2B49]">
          Riwayat Konsumsi Obat
        </h2>
        <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
          Data demo riwayat konsumsi obat beberapa hari terakhir.
        </p>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead>
            <tr className="border-b border-[#1A2B49]/10 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1A2B49]/45">
              <th className="py-4">Tanggal</th>
              <th className="py-4">Waktu</th>
              <th className="py-4">Nama Obat</th>
              <th className="py-4">Dosis</th>
              <th className="py-4">Status</th>
              <th className="py-4">Catatan</th>
            </tr>
          </thead>

          <tbody>
            {medicationHistory.map((history) => (
              <tr
                key={history.id}
                className="border-b border-[#1A2B49]/5 text-sm font-bold text-[#1A2B49]/70"
              >
                <td className="py-4 text-[#1A2B49]">{history.date}</td>
                <td className="py-4">{history.time}</td>
                <td className="py-4">{history.name}</td>
                <td className="py-4">{history.dose}</td>
                <td className="py-4">
                  <StatusPill status={history.status} />
                </td>
                <td className="max-w-[240px] py-4 leading-6">{history.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdherencePanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-[#1A2B49]">
            Kepatuhan Obat
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
            Kepatuhan hari ini cukup baik, tetapi satu jadwal masih menunggu
            konfirmasi.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-[#FDFBF7] p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-extrabold text-[#1A2B49]/65">
            Progress hari ini
          </p>
          <p className="text-sm font-extrabold text-[#E95B30]">67%</p>
        </div>

        <div className="mt-3 h-3 rounded-full bg-[#1A2B49]/10">
          <div className="h-3 w-[67%] rounded-full bg-[#E95B30]" />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <SummaryRow label="Sudah diminum" value="2" />
        <SummaryRow label="Menunggu" value="1" />
        <SummaryRow label="Terlewat" value="0 hari ini" />
      </div>
    </div>
  );
}

function MedicationGuidePanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#1A2B49]">
        Panduan Aman Obat
      </h2>

      <div className="mt-5 space-y-4">
        {medicationGuides.map((guide) => (
          <div
            key={guide.title}
            className="rounded-2xl border border-[#1A2B49]/10 bg-[#FDFBF7] p-4"
          >
            <div className="flex items-start gap-3">
              {guide.status === "taken" ? (
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
              ) : (
                <AlertTriangle
                  className="mt-0.5 size-5 shrink-0 text-[#E95B30]"
                  aria-hidden="true"
                />
              )}

              <div>
                <h3 className="font-extrabold text-[#1A2B49]">{guide.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#1A2B49]/60">
                  {guide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
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

function StatusPill({ status }: { status: MedicationStatus }) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-extrabold",
        statusClassName[status],
      )}
    >
      {status === "taken" ? (
        <CheckCircle2 className="mr-1 inline size-3" aria-hidden="true" />
      ) : null}

      {status === "pending" ? (
        <Clock3 className="mr-1 inline size-3" aria-hidden="true" />
      ) : null}

      {status === "missed" ? (
        <XCircle className="mr-1 inline size-3" aria-hidden="true" />
      ) : null}

      {statusLabel[status]}
    </span>
  );
}
