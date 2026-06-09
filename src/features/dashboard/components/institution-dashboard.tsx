/** @format */

import {
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

const elderlyRows = [
  {
    name: "Ibu Ani S.",
    room: "Kamar A-02",
    health: "Stabil (120/80)",
    cognitive: "75% Brain Gym",
    status: "Stabil",
  },
  {
    name: "Bpk. Slamet",
    room: "Kamar B-10",
    health: "Gula darah tinggi",
    cognitive: "40% Belum latihan",
    status: "Perlu Cek",
  },
  {
    name: "Ibu Fatimah",
    room: "Kamar A-05",
    health: "SOS - Terjatuh",
    cognitive: "-",
    status: "Darurat",
  },
  {
    name: "Bpk. Yusuf",
    room: "Kamar C-01",
    health: "Stabil",
    cognitive: "90% Selesai",
    status: "Stabil",
  },
];

export function InstitutionDashboard() {
  return (
    <div className="mx-auto max-w-[1180px]">
      <section className="overflow-hidden rounded-[34px] border border-[#1A2B49]/10 bg-white p-5 shadow-[0_18px_45px_rgba(26,43,73,0.10)] sm:p-8">
        <InstitutionHeader />

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <InstitutionStat
            title="Total Lansia"
            value="52"
            note="+3 baru bulan ini"
            icon={UsersRound}
            tone="normal"
          />
          <InstitutionStat
            title="Total Staf/Kader"
            value="12"
            note="Rasio 1:4 ideal"
            icon={UsersRound}
            tone="normal"
          />
          <InstitutionStat
            title="Smart Kit Terdistribusi"
            value="48"
            note="Sisa stok 15"
            icon={BrainCircuit}
            tone="normal"
          />
          <InstitutionStat
            title="SOS Aktif"
            value="2"
            note="Butuh respon segera"
            icon={ShieldAlert}
            tone="danger"
          />
        </div>

        <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_330px]">
          <div className="rounded-[28px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-[#1A2B49]">
                  Monitoring Kondisi Lansia
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
                  Pantauan kesehatan, aktivitas kognitif, dan status prioritas.
                </p>
              </div>

              <button className="min-h-11 rounded-full bg-[#E95B30]/10 px-5 text-sm font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02]">
                Lihat Semua Data
              </button>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[720px] text-left">
                <thead>
                  <tr className="border-b border-[#1A2B49]/10 text-xs font-extrabold uppercase tracking-[0.12em] text-[#1A2B49]/45">
                    <th className="py-4">Nama Lansia</th>
                    <th className="py-4">Lokasi/Kamar</th>
                    <th className="py-4">Kesehatan</th>
                    <th className="py-4">Aktivitas Kognitif</th>
                    <th className="py-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {elderlyRows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-[#1A2B49]/5 text-sm font-bold text-[#1A2B49]/75"
                    >
                      <td className="py-4 text-[#1A2B49]">{row.name}</td>
                      <td className="py-4">{row.room}</td>
                      <td className="py-4">{row.health}</td>
                      <td className="py-4">{row.cognitive}</td>
                      <td className="py-4">
                        <StatusPill status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[24px] border border-[#D2232A]/20 bg-[#D2232A]/10 p-5">
              <div className="flex gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#D2232A] text-white">
                  <AlertTriangle className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#D2232A]">
                    Emergency Alert!
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#1A2B49]/65">
                    Kamar A-05: Tombol SOS ditekan.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[#1A2B49]">
                Stok Cognitive Kit
              </h3>

              <div className="mt-5 space-y-4">
                <StockItem
                  title="Smart Kit Level 1"
                  value="Tersisa 12 dari 15 unit"
                  progress="w-[78%]"
                />
                <StockItem
                  title="Buku Panduan Brain Gym"
                  value="Hampir habis, 3 unit"
                  progress="w-[32%]"
                  warning
                />
              </div>

              <button className="mt-5 min-h-12 w-full rounded-2xl bg-[#1A2B49] text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
                Pesan Tambahan Kit
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function InstitutionHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1A2B49] md:text-4xl">
          Panti Sejahtera Abadi
        </h1>
        <p className="mt-2 text-base font-semibold text-[#1A2B49]/55">
          Dashboard pengelola institusi · Jakarta Selatan
        </p>
      </div>

      <button className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#1A2B49]/10 bg-[#FDFBF7] px-5 text-sm font-extrabold text-[#1A2B49]">
        <CheckCircle2 className="size-5 text-[#E95B30]" aria-hidden="true" />
        Admin Utama
      </button>
    </div>
  );
}

function InstitutionStat({
  title,
  value,
  note,
  icon: Icon,
  tone,
}: {
  title: string;
  value: string;
  note: string;
  icon: typeof UsersRound;
  tone: "normal" | "danger";
}) {
  return (
    <div
      className={
        tone === "danger"
          ? "rounded-[24px] border border-[#D2232A]/20 bg-white p-5 shadow-sm"
          : "rounded-[24px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm"
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#1A2B49]/55">{title}</p>
          <h3 className="mt-2 text-3xl font-extrabold text-[#1A2B49]">
            {value}
          </h3>
          <p
            className={
              tone === "danger"
                ? "mt-2 text-sm font-extrabold text-[#D2232A]"
                : "mt-2 text-sm font-extrabold text-emerald-600"
            }
          >
            {note}
          </p>
        </div>

        <div
          className={
            tone === "danger"
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

function StatusPill({ status }: { status: string }) {
  if (status === "Darurat") {
    return (
      <span className="rounded-full bg-[#D2232A]/10 px-3 py-1 text-xs font-extrabold text-[#D2232A]">
        Darurat
      </span>
    );
  }

  if (status === "Perlu Cek") {
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

function StockItem({
  title,
  value,
  progress,
  warning = false,
}: {
  title: string;
  value: string;
  progress: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-[#FDFBF7] p-4">
      <p className="font-extrabold text-[#1A2B49]">{title}</p>

      <div className="mt-3 h-2 rounded-full bg-[#1A2B49]/10">
        <div
          className={`h-2 rounded-full ${progress} ${
            warning ? "bg-[#E95B30]" : "bg-emerald-500"
          }`}
        />
      </div>

      <p className="mt-2 text-sm font-semibold text-[#1A2B49]/55">{value}</p>
    </div>
  );
}
