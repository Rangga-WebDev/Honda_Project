/** @format */

import Link from "next/link";

import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Plus,
  Save,
} from "lucide-react";

import {
  healthInsights,
  healthMetricCards,
  healthRecords,
} from "@/features/health-monitoring/constants/health-monitoring-data";
import type { HealthRecordStatus } from "@/features/health-monitoring/types/health-monitoring.types";
import { cn } from "@/lib/utils";

const statusLabel: Record<HealthRecordStatus, string> = {
  normal: "Normal",
  warning: "Perlu Cek",
  danger: "Darurat",
};

const statusClassName: Record<HealthRecordStatus, string> = {
  normal: "bg-emerald-50 text-emerald-600",
  warning: "bg-[#E95B30]/10 text-[#E95B30]",
  danger: "bg-[#D2232A]/10 text-[#D2232A]",
};

export function HealthMonitoringPage() {
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
            <HealthHeader />
            <MetricGrid />
            <InputPanel />
            <RecordTable />
          </div>

          <aside className="space-y-5 border-t border-[#1A2B49]/10 bg-[#FDFBF7] p-5 sm:p-8 xl:border-l xl:border-t-0">
            <ConditionSummary />
            <InsightPanel />
          </aside>
        </div>
      </section>
    </div>
  );
}

function HealthHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#E95B30]">
          Monitoring Kesehatan
        </p>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A2B49] md:text-4xl">
          Catatan Kesehatan Ibu Ani
        </h1>

        <p className="mt-2 max-w-2xl text-base font-semibold leading-7 text-[#1A2B49]/60">
          Pantau tekanan darah, gula darah, berat badan, dan status harian agar
          keluarga atau caregiver dapat merespons perubahan kondisi lebih cepat.
        </p>
      </div>

      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E95B30] px-5 text-base font-extrabold text-white shadow-[0_12px_28px_rgba(233,91,48,0.24)] transition duration-300 hover:scale-[1.02]">
        <Plus className="size-5" aria-hidden="true" />
        Tambah Data
      </button>
    </div>
  );
}

function MetricGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {healthMetricCards.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.title}
            className="rounded-[26px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
                <Icon className="size-6" aria-hidden="true" />
              </div>

              <StatusPill status={metric.status} />
            </div>

            <p className="mt-5 text-sm font-bold text-[#1A2B49]/55">
              {metric.title}
            </p>

            <div className="mt-2 flex items-end gap-2">
              <h2 className="text-3xl font-extrabold text-[#1A2B49]">
                {metric.value}
              </h2>
              <p className="pb-1 text-sm font-extrabold text-[#1A2B49]/50">
                {metric.unit}
              </p>
            </div>

            <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
              {metric.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function InputPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#1A2B49]">
            Input Cepat Hari Ini
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
            Form ini masih demo frontend. Penyimpanan data akan dibuat pada
            tahap backend dan database.
          </p>
        </div>

        <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1A2B49] px-5 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
          <Save className="size-4" aria-hidden="true" />
          Simpan Demo
        </button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        <DemoInput label="Tekanan Darah" value="120/80" />
        <DemoInput label="Gula Darah" value="110" />
        <DemoInput label="Berat Badan" value="60" />
        <DemoInput label="Catatan" value="Kondisi stabil" />
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

function RecordTable() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#1A2B49]">
            Riwayat Monitoring
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
            Data demo pencatatan kesehatan beberapa hari terakhir.
          </p>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead>
            <tr className="border-b border-[#1A2B49]/10 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1A2B49]/45">
              <th className="py-4">Tanggal</th>
              <th className="py-4">Waktu</th>
              <th className="py-4">Tekanan Darah</th>
              <th className="py-4">Gula Darah</th>
              <th className="py-4">Berat</th>
              <th className="py-4">Status</th>
              <th className="py-4">Catatan</th>
            </tr>
          </thead>

          <tbody>
            {healthRecords.map((record) => (
              <tr
                key={record.id}
                className="border-b border-[#1A2B49]/5 text-sm font-bold text-[#1A2B49]/70"
              >
                <td className="py-4 text-[#1A2B49]">{record.date}</td>
                <td className="py-4">{record.time}</td>
                <td className="py-4">{record.bloodPressure}</td>
                <td className="py-4">{record.bloodSugar}</td>
                <td className="py-4">{record.weight}</td>
                <td className="py-4">
                  <StatusPill status={record.status} />
                </td>
                <td className="max-w-[220px] py-4 leading-6">{record.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ConditionSummary() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-[#1A2B49]">
            Kondisi Hari Ini
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
            Ibu Ani berada dalam status stabil. Jadwal monitoring berikutnya
            disarankan tetap dilakukan pada pagi hari.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <SummaryRow label="Risiko" value="Rendah" />
        <SummaryRow label="Kepatuhan catat" value="80%" />
        <SummaryRow label="Perlu tindakan" value="Tidak" />
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

function InsightPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#1A2B49]">
        Insight Kesehatan
      </h2>

      <div className="mt-5 space-y-4">
        {healthInsights.map((insight) => (
          <div
            key={insight.title}
            className="rounded-2xl border border-[#1A2B49]/10 bg-[#FDFBF7] p-4"
          >
            <div className="flex items-start gap-3">
              {insight.status === "normal" ? (
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
                <h3 className="font-extrabold text-[#1A2B49]">
                  {insight.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#1A2B49]/60">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: HealthRecordStatus }) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-extrabold",
        statusClassName[status],
      )}
    >
      {statusLabel[status]}
    </span>
  );
}
