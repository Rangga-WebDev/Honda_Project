/** @format */

import Link from "next/link";

import {
  BellRing,
  CheckCircle2,
  HeartPulse,
  Pill,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

export function DashboardHome() {
  return (
    <div className="mx-auto max-w-[1180px]">
      <section className="overflow-hidden rounded-[34px] border border-[#1A2B49]/10 bg-white shadow-[0_18px_45px_rgba(26,43,73,0.10)]">
        <div className="grid min-h-[720px] lg:grid-cols-[1fr_360px]">
          <div className="space-y-6 p-5 sm:p-8">
            <DashboardHeader />

            <div className="grid gap-5 md:grid-cols-2">
              <MetricCard
                title="Tekanan Darah"
                value="120/80"
                note="Normal"
                icon={HeartPulse}
                tone="blue"
              />
              <MetricCard
                title="Gula Darah"
                value="110"
                note="mg/dL"
                icon={HeartPulse}
                tone="orange"
              />
            </div>

            <article className="overflow-hidden rounded-[28px] border border-[#1A2B49]/10 bg-white shadow-sm">
              <div className="flex min-h-[170px] items-center justify-center bg-[#1A2B49]/5">
                <div className="flex size-20 items-center justify-center rounded-full bg-white text-[#E95B30] shadow-sm">
                  <HeartPulse className="size-10" aria-hidden="true" />
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E95B30]">
                  Tips Kesehatan Hari Ini
                </p>
                <h2 className="mt-3 text-xl font-extrabold text-[#1A2B49]">
                  5 Makanan Terbaik untuk Menjaga Daya Ingat Lansia
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
                  Ketahui jenis nutrisi yang membantu otak tetap aktif dan
                  mendukung aktivitas kognitif harian.
                </p>

                <Link
                  href="/dashboard/cogni-sync"
                  className="mt-4 inline-flex text-sm font-extrabold text-[#E95B30]"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </article>

            <div className="rounded-[28px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#1A2B49]">
                Jadwal Obat Terdekat
              </h3>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#FDFBF7] p-4">
                <div className="flex items-center gap-4">
                  <p className="text-lg font-extrabold text-[#1A2B49]">12.00</p>
                  <div>
                    <p className="font-extrabold text-[#1A2B49]">
                      Metformin 500 mg
                    </p>
                    <p className="text-sm font-semibold text-[#1A2B49]/55">
                      1 Tablet · Saat makan
                    </p>
                  </div>
                </div>

                <BellRing
                  className="size-5 text-[#E95B30]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <aside className="space-y-5 border-t border-[#1A2B49]/10 bg-[#FDFBF7] p-5 sm:p-8 lg:border-l lg:border-t-0">
            <Link
              href="/dashboard/sos"
              className="flex min-h-20 w-full items-center justify-center gap-3 rounded-[24px] bg-[#D2232A] text-xl font-extrabold text-white shadow-[0_18px_36px_rgba(210,35,42,0.24)] transition duration-300 hover:scale-[1.02]"
            >
              <ShieldAlert className="size-7" aria-hidden="true" />
              SOS DARURAT
            </Link>

            <div className="rounded-[28px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#1A2B49]">
                Keluarga Terhubung
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
                  <UsersRound className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-extrabold text-[#1A2B49]">Budi Anak</p>
                  <p className="text-sm font-semibold text-emerald-600">
                    Aktif memantau
                  </p>
                </div>
              </div>

              <button className="mt-5 min-h-12 w-full rounded-2xl border-2 border-dashed border-[#E95B30]/50 text-sm font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02] hover:bg-[#E95B30]/10">
                + Tambah Keluarga
              </button>
            </div>

            <div className="rounded-[28px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#1A2B49]">
                Ringkasan Aktivitas
              </h3>

              <div className="mt-5 space-y-3">
                <ActivityItem label="Brain Gym" value="75%" />
                <ActivityItem label="PharmaFlow" value="2/3 obat" />
                <ActivityItem label="Monitoring" value="Stabil" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1A2B49] md:text-4xl">
          Selamat Pagi, Ibu Ani 👋
        </h1>
        <p className="mt-2 text-base font-semibold text-[#1A2B49]/55">
          Pantau kesehatan, obat, keluarga, dan latihan kognitif hari ini.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-sm font-bold text-[#1A2B49]/50">
          Senin, 19 Mei 2026
        </p>
        <div className="flex size-12 items-center justify-center rounded-full bg-[#FDFBF7] text-[#E95B30]">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  note,
  icon: Icon,
  tone,
}: {
  title: string;
  value: string;
  note: string;
  icon: typeof HeartPulse;
  tone: "blue" | "orange";
}) {
  return (
    <div className="rounded-[24px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={
            tone === "blue"
              ? "flex size-14 items-center justify-center rounded-2xl bg-[#1A2B49]/10 text-[#1A2B49]"
              : "flex size-14 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]"
          }
        >
          <Icon className="size-7" aria-hidden="true" />
        </div>

        <div>
          <p className="text-sm font-bold text-[#1A2B49]/55">{title}</p>
          <div className="mt-1 flex items-end gap-2">
            <p className="text-2xl font-extrabold text-[#1A2B49]">{value}</p>
            <p className="pb-1 text-sm font-extrabold text-emerald-600">
              {note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#FDFBF7] p-4">
      <p className="text-sm font-extrabold text-[#1A2B49]">{label}</p>
      <p className="text-sm font-extrabold text-[#E95B30]">{value}</p>
    </div>
  );
}
