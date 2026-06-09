/** @format */

import Link from "next/link";

import {
  ArrowLeft,
  BellRing,
  MessageCircle,
  Phone,
  Plus,
  UserPlus,
  UsersRound,
} from "lucide-react";

import {
  familyMembers,
  familyReminders,
  familySummaryCards,
  familyUpdates,
} from "@/features/family/constants/family-data";
import type {
  FamilyMemberStatus,
  FamilyReminderStatus,
} from "@/features/family/types/family.types";
import { cn } from "@/lib/utils";

const memberStatusClassName: Record<FamilyMemberStatus, string> = {
  online: "bg-emerald-50 text-emerald-600",
  standby: "bg-[#E95B30]/10 text-[#E95B30]",
  offline: "bg-[#1A2B49]/10 text-[#1A2B49]/55",
};

const memberStatusLabel: Record<FamilyMemberStatus, string> = {
  online: "Online",
  standby: "Standby",
  offline: "Offline",
};

const reminderClassName: Record<FamilyReminderStatus, string> = {
  done: "bg-emerald-50 text-emerald-600",
  pending: "bg-[#E95B30]/10 text-[#E95B30]",
};

const reminderLabel: Record<FamilyReminderStatus, string> = {
  done: "Selesai",
  pending: "Menunggu",
};

export function FamilyPage() {
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
            <FamilyHeader />
            <FamilySummaryGrid />
            <FamilyMemberGrid />
            <FamilyUpdateTimeline />
          </div>

          <aside className="space-y-5 border-t border-[#1A2B49]/10 bg-[#FDFBF7] p-5 sm:p-8 xl:border-l xl:border-t-0">
            <CommunicationPanel />
            <SharedReminderPanel />
          </aside>
        </div>
      </section>
    </div>
  );
}

function FamilyHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#E95B30]">
          Keluarga
        </p>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1A2B49] md:text-4xl">
          Keluarga Terhubung Ibu Ani
        </h1>

        <p className="mt-2 max-w-2xl text-base font-semibold leading-7 text-[#1A2B49]/60">
          Pantau kondisi lansia bersama keluarga dan caregiver dalam satu ruang
          informasi yang sederhana, jelas, dan mudah diakses.
        </p>
      </div>

      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E95B30] px-5 text-base font-extrabold text-white shadow-[0_12px_28px_rgba(233,91,48,0.24)] transition duration-300 hover:scale-[1.02]">
        <UserPlus className="size-5" aria-hidden="true" />
        Tambah Keluarga
      </button>
    </div>
  );
}

function FamilySummaryGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {familySummaryCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-[26px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm"
          >
            <div className="flex size-13 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
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

function FamilyMemberGrid() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#1A2B49]">
            Anggota Keluarga
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
            Kontak keluarga dan caregiver yang dapat menerima update kondisi.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {familyMembers.map((member) => (
          <article
            key={member.id}
            className="rounded-[26px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#1A2B49] text-base font-extrabold text-white">
                {member.avatarLabel}
              </div>

              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-extrabold",
                  memberStatusClassName[member.status],
                )}
              >
                {memberStatusLabel[member.status]}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-[#1A2B49]">
              {member.name}
            </h3>

            <p className="mt-1 text-sm font-semibold text-[#E95B30]">
              {member.relation} · {member.role}
            </p>

            <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
              {member.phone}
            </p>

            <p className="mt-1 text-xs font-bold text-[#1A2B49]/45">
              {member.lastSeen}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1A2B49] px-4 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
                <Phone className="size-4" aria-hidden="true" />
                Telepon
              </button>

              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02]">
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FamilyUpdateTimeline() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-extrabold text-[#1A2B49]">
        Update Kondisi Dibagikan
      </h2>

      <div className="mt-5 space-y-4">
        {familyUpdates.map((update) => {
          const Icon = update.icon;

          return (
            <div
              key={update.id}
              className="flex gap-4 rounded-[24px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-4"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E95B30] shadow-sm">
                <Icon className="size-6" aria-hidden="true" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#E95B30]">
                  {update.time}
                </p>
                <h3 className="font-extrabold text-[#1A2B49]">
                  {update.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#1A2B49]/60">
                  {update.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CommunicationPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
          <UsersRound className="size-7" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-[#1A2B49]">
            Ruang Koordinasi
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#1A2B49]/60">
            Keluarga dapat berbagi tugas pemantauan obat, kesehatan, latihan
            kognitif, dan respon darurat.
          </p>
        </div>
      </div>

      <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#1A2B49] px-5 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
        <MessageCircle className="size-5" aria-hidden="true" />
        Buka Chat Keluarga
      </button>
    </div>
  );
}

function SharedReminderPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-extrabold text-[#1A2B49]">
          Reminder Bersama
        </h2>

        <button className="flex size-10 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30] transition duration-300 hover:scale-[1.02]">
          <Plus className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {familyReminders.map((reminder) => (
          <div key={reminder.id} className="rounded-2xl bg-[#FDFBF7] p-4">
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E95B30]">
                <BellRing className="size-5" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-extrabold text-[#1A2B49]">
                  {reminder.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#1A2B49]/55">
                  {reminder.time} · {reminder.assignee}
                </p>

                <span
                  className={cn(
                    "mt-3 inline-flex rounded-full px-3 py-1 text-xs font-extrabold",
                    reminderClassName[reminder.status],
                  )}
                >
                  {reminderLabel[reminder.status]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
