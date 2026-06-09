/** @format */

import Link from "next/link";

import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldAlert,
} from "lucide-react";

import {
  sosContacts,
  sosLogs,
  sosSummaryCards,
  sosWorkflowSteps,
} from "@/features/sos/constants/sos-data";
import type {
  SosContactStatus,
  SosEventStatus,
} from "@/features/sos/types/sos.types";
import { cn } from "@/lib/utils";

const contactStatusClassName: Record<SosContactStatus, string> = {
  primary: "bg-[#D2232A]/10 text-[#D2232A]",
  backup: "bg-[#E95B30]/10 text-[#E95B30]",
  medical: "bg-[#1A2B49]/10 text-[#1A2B49]",
};

const eventStatusClassName: Record<SosEventStatus, string> = {
  active: "bg-[#D2232A]/10 text-[#D2232A]",
  resolved: "bg-emerald-50 text-emerald-600",
  pending: "bg-[#1A2B49]/10 text-[#1A2B49]/55",
};

const eventStatusLabel: Record<SosEventStatus, string> = {
  active: "Aktif",
  resolved: "Selesai",
  pending: "Tidak Aktif",
};

export function SosPage() {
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
            <SosHeader />
            <EmergencyButtonPanel />
            <SosSummaryGrid />
            <EmergencyWorkflow />
            <SosHistoryTable />
          </div>

          <aside className="space-y-5 border-t border-[#1A2B49]/10 bg-[#FDFBF7] p-5 sm:p-8 xl:border-l xl:border-t-0">
            <EmergencyContactPanel />
            <LocationPanel />
          </aside>
        </div>
      </section>
    </div>
  );
}

function SosHeader() {
  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#D2232A]">
        SOS Darurat
      </p>

      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A2B49] md:text-4xl">
        Bantuan Cepat untuk Kondisi Darurat
      </h1>

      <p className="mt-2 max-w-3xl text-base font-semibold leading-7 text-[#1A2B49]/60">
        Fitur ini dirancang untuk membantu lansia mengirim alert darurat kepada
        keluarga, caregiver, instansi, dan kontak medis dengan alur yang jelas.
      </p>
    </div>
  );
}

function EmergencyButtonPanel() {
  return (
    <div className="rounded-[34px] border border-[#D2232A]/20 bg-[#D2232A]/10 p-6 text-center md:p-8">
      <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-white text-[#D2232A] shadow-[0_18px_36px_rgba(210,35,42,0.18)]">
        <ShieldAlert className="size-12" aria-hidden="true" />
      </div>

      <h2 className="mt-5 text-3xl font-extrabold text-[#D2232A]">
        Tombol SOS Darurat
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-base font-semibold leading-7 text-[#1A2B49]/65">
        Tekan tombol ini hanya saat terjadi kondisi gawat darurat seperti jatuh,
        pingsan, nyeri mendadak, atau membutuhkan bantuan segera.
      </p>

      <button className="mt-7 inline-flex min-h-24 w-full max-w-md items-center justify-center gap-4 rounded-[28px] bg-[#D2232A] px-8 text-3xl font-extrabold text-white shadow-[0_20px_42px_rgba(210,35,42,0.30)] transition duration-300 hover:scale-[1.02]">
        <AlertTriangle className="size-9" aria-hidden="true" />
        TEKAN SOS
      </button>

      <p className="mt-4 text-sm font-bold text-[#D2232A]/80">
        Mode demo: tombol belum mengirim notifikasi real.
      </p>
    </div>
  );
}

function SosSummaryGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {sosSummaryCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-[26px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm"
          >
            <div className="flex size-13 items-center justify-center rounded-2xl bg-[#D2232A]/10 text-[#D2232A]">
              <Icon className="size-6" aria-hidden="true" />
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

function EmergencyWorkflow() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-extrabold text-[#1A2B49]">
        Cara Kerja Fitur SOS
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {sosWorkflowSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="rounded-[24px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-4"
            >
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#D2232A] shadow-sm">
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-extrabold text-[#1A2B49]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#1A2B49]/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SosHistoryTable() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-extrabold text-[#1A2B49]">Riwayat SOS</h2>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead>
            <tr className="border-b border-[#1A2B49]/10 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1A2B49]/45">
              <th className="py-4">Tanggal</th>
              <th className="py-4">Waktu</th>
              <th className="py-4">Jenis Kejadian</th>
              <th className="py-4">Lokasi</th>
              <th className="py-4">Ditangani Oleh</th>
              <th className="py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {sosLogs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-[#1A2B49]/5 text-sm font-bold text-[#1A2B49]/70"
              >
                <td className="py-4 text-[#1A2B49]">{log.date}</td>
                <td className="py-4">{log.time}</td>
                <td className="py-4">{log.type}</td>
                <td className="py-4">{log.location}</td>
                <td className="py-4">{log.handledBy}</td>
                <td className="py-4">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-extrabold",
                      eventStatusClassName[log.status],
                    )}
                  >
                    {eventStatusLabel[log.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EmergencyContactPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#1A2B49]">Kontak Darurat</h2>

      <div className="mt-5 space-y-4">
        {sosContacts.map((contact) => (
          <div key={contact.id} className="rounded-2xl bg-[#FDFBF7] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-[#1A2B49]">
                  {contact.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
                  {contact.relation} · {contact.phone}
                </p>
              </div>

              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-extrabold",
                  contactStatusClassName[contact.status],
                )}
              >
                {contact.priority}
              </span>
            </div>

            <button className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1A2B49] px-4 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
              <Phone className="size-4" aria-hidden="true" />
              Hubungi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function LocationPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
          <MapPin className="size-7" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-[#1A2B49]">
            Lokasi Terakhir
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
            Rumah · Ruang keluarga. Data lokasi ini masih demo dan akan
            diintegrasikan dengan GPS pada tahap backend/mobile.
          </p>
        </div>
      </div>

      <div className="mt-5 flex min-h-[180px] items-center justify-center rounded-[24px] border border-dashed border-[#1A2B49]/20 bg-[#FDFBF7] text-center">
        <div>
          <MapPin
            className="mx-auto size-10 text-[#E95B30]"
            aria-hidden="true"
          />
          <p className="mt-3 text-sm font-extrabold text-[#1A2B49]/65">
            Map Preview Placeholder
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
        <CheckCircle2 className="size-5 text-emerald-600" aria-hidden="true" />
        <p className="text-sm font-extrabold text-emerald-700">
          Status saat ini aman
        </p>
      </div>
    </div>
  );
}
