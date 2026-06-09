/** @format */

import Link from "next/link";

import { ArrowLeft, ArrowRight, Clock3, Play } from "lucide-react";

import {
  brainGymBenefits,
  brainGymSteps,
} from "@/features/brain-gym/constants/brain-gym-data";

export function BrainGymPage() {
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
            <BrainGymHero />
            <StepList />
          </div>

          <aside className="space-y-5 border-t border-[#1A2B49]/10 bg-[#FDFBF7] p-5 sm:p-8 xl:border-l xl:border-t-0">
            <TimerPanel />
            <BenefitPanel />
          </aside>
        </div>
      </section>
    </div>
  );
}

function BrainGymHero() {
  return (
    <div className="rounded-[30px] bg-[#1A2B49] p-6 text-white md:p-8">
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#E95B30]">
        Brain Gym
      </p>

      <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
        Panduan latihan otak bertahap yang sederhana dan ramah lansia.
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
        Ikuti instruksi satu per satu. Latihan ini dirancang ringan agar dapat
        dilakukan secara mandiri atau didampingi caregiver.
      </p>

      <button className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#E95B30] px-6 text-base font-extrabold text-white transition duration-300 hover:scale-[1.02]">
        <Play className="size-5" aria-hidden="true" />
        Mulai Latihan
      </button>
    </div>
  );
}

function StepList() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-extrabold text-[#1A2B49]">
        Langkah Latihan
      </h2>

      <div className="mt-5 space-y-4">
        {brainGymSteps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.id}
              className="grid gap-4 rounded-[26px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-5 md:grid-cols-[70px_1fr_auto]"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#E95B30] text-lg font-extrabold text-white">
                {step.step}
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-[#E95B30]" aria-hidden="true" />
                  <h3 className="text-xl font-extrabold text-[#1A2B49]">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-2 text-base leading-7 text-[#1A2B49]/65">
                  {step.description}
                </p>
              </div>

              <div className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-extrabold text-[#1A2B49]/65 shadow-sm">
                <Clock3 className="size-4 text-[#E95B30]" aria-hidden="true" />
                {step.duration}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function TimerPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 text-center shadow-sm">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#E95B30]">
        Timer Latihan
      </p>

      <h2 className="mt-4 text-6xl font-extrabold text-[#1A2B49]">09:00</h2>

      <p className="mt-3 text-sm leading-6 text-[#1A2B49]/60">
        Estimasi total durasi latihan Brain Gym hari ini.
      </p>

      <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#1A2B49] px-5 text-sm font-extrabold text-white transition duration-300 hover:scale-[1.02]">
        Lanjutkan
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function BenefitPanel() {
  return (
    <div className="rounded-[30px] border border-[#1A2B49]/10 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#1A2B49]">Manfaat Latihan</h2>

      <div className="mt-5 space-y-4">
        {brainGymBenefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div key={benefit.title} className="rounded-2xl bg-[#FDFBF7] p-4">
              <div className="flex gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#E95B30]/10 text-[#E95B30]">
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-extrabold text-[#1A2B49]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#1A2B49]/60">
                    {benefit.description}
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
