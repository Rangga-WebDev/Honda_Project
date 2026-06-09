/** @format */

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Play,
} from "lucide-react";

import {
  cognitiveActivities,
  cognitiveBadges,
  cognitiveProgress,
  cognitiveSchedules,
} from "@/features/cogni-sync/constants/cogni-sync-data";
import type { CognitiveActivityLevel } from "@/features/cogni-sync/types/cogni-sync.types";

const levelClassName: Record<CognitiveActivityLevel, string> = {
  mudah: "bg-emerald-50 text-emerald-600",
  sedang: "bg-[#E95B30]/10 text-[#E95B30]",
  menantang: "bg-[#D2232A]/10 text-[#D2232A]",
};

export function CogniSyncPage() {
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
            <CogniHeader />
            <ActivityGrid />
            <ProgressPanel />
          </div>

          <aside className="space-y-5 border-t border-[#1A2B49]/10 bg-[#FDFBF7] p-5 sm:p-8 xl:border-l xl:border-t-0">
            <TodaySchedule />
            <AchievementPanel />
          </aside>
        </div>
      </section>
    </div>
  );
}

function CogniHeader() {
  return (
    <div className="rounded-[30px] bg-[#1A2B49] p-6 text-white md:p-8">
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#E95B30]">
        CogniSync
      </p>

      <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
        Latihan kognitif harian untuk menjaga fokus, memori, dan koordinasi.
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
        Pilih latihan sesuai kebutuhan lansia. Setiap aktivitas dibuat ringan,
        bertahap, dan mudah diikuti.
      </p>

      <Link
        href="/dashboard/brain-gym"
        className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#E95B30] px-6 text-base font-extrabold text-white transition duration-300 hover:scale-[1.02]"
      >
        Mulai Brain Gym
        <ArrowRight className="size-5" aria-hidden="true" />
      </Link>
    </div>
  );
}

function ActivityGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cognitiveActivities.map((activity) => {
        const Icon = activity.icon;

        return (
          <article
            key={activity.id}
            className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm transition duration-300 hover:scale-[1.02] hover:border-[#E95B30]/35"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
                <Icon className="size-7" aria-hidden="true" />
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-extrabold ${levelClassName[activity.level]}`}
              >
                {activity.level}
              </span>
            </div>

            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#E95B30]">
              {activity.category}
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-[#1A2B49]">
              {activity.title}
            </h2>

            <p className="mt-3 text-base leading-7 text-[#1A2B49]/65">
              {activity.description}
            </p>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1A2B49]/55">
                <Clock3 className="size-4" aria-hidden="true" />
                {activity.duration}
              </div>

              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1A2B49] px-5 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
                <Play className="size-4" aria-hidden="true" />
                Mulai
              </button>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-extrabold text-[#1A2B49]/55">
                <span>Progress</span>
                <span>{activity.progress}%</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-[#1A2B49]/10">
                <div
                  className="h-2 rounded-full bg-[#E95B30]"
                  style={{ width: `${activity.progress}%` }}
                />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ProgressPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-5">
      <h2 className="text-2xl font-extrabold text-[#1A2B49]">
        Ringkasan Progress
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {cognitiveProgress.map((item) => (
          <div
            key={item.label}
            className="rounded-[24px] bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-bold text-[#1A2B49]/55">{item.label}</p>
            <h3 className="mt-2 text-3xl font-extrabold text-[#1A2B49]">
              {item.value}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
              {item.description}
            </p>

            <div className="mt-4 h-2 rounded-full bg-[#1A2B49]/10">
              <div
                className="h-2 rounded-full bg-[#E95B30]"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TodaySchedule() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#1A2B49]">
        Jadwal Latihan Hari Ini
      </h2>

      <div className="mt-5 space-y-4">
        {cognitiveSchedules.map((item) => (
          <div
            key={`${item.time}-${item.title}`}
            className="rounded-2xl bg-[#FDFBF7] p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E95B30] shadow-sm">
                {item.status === "selesai" ? (
                  <CheckCircle2 className="size-6 text-emerald-600" />
                ) : (
                  <Clock3 className="size-6" />
                )}
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#E95B30]">
                  {item.time}
                </p>
                <h3 className="font-extrabold text-[#1A2B49]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#1A2B49]/60">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AchievementPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#1A2B49]">
        Capaian Minggu Ini
      </h2>

      <div className="mt-5 space-y-4">
        {cognitiveBadges.map((badge) => {
          const Icon = badge.icon;

          return (
            <div
              key={badge.title}
              className="flex items-center gap-4 rounded-2xl bg-[#FDFBF7] p-4"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
                <Icon className="size-6" aria-hidden="true" />
              </div>

              <div>
                <h3 className="font-extrabold text-[#1A2B49]">{badge.title}</h3>
                <p className="text-sm font-semibold text-[#1A2B49]/55">
                  {badge.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
