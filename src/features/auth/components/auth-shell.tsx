/** @format */

import Link from "next/link";
import type { ReactNode } from "react";

import {
  Activity,
  ArrowLeft,
  BellRing,
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuthShellProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

const authHighlights = [
  {
    label: "Monitoring kesehatan",
    description: "Pantau kondisi harian lansia.",
    icon: Activity,
  },
  {
    label: "Latihan kognitif",
    description: "Brain Gym dan CogniSync.",
    icon: BrainCircuit,
  },
  {
    label: "Pengingat obat",
    description: "Jadwal konsumsi obat lebih teratur.",
    icon: BellRing,
  },
  {
    label: "Respon darurat",
    description: "Akses cepat tombol SOS.",
    icon: ShieldCheck,
  },
];

export function AuthShell({
  title,
  description,
  children,
  className,
}: AuthShellProps) {
  return (
    <main
      className={cn(
        "relative grid min-h-screen overflow-hidden bg-[#FDFBF7] text-[#1A2B49] lg:grid-cols-[1.05fr_0.95fr]",
        className,
      )}
    >
      <div className="absolute left-0 top-0 -z-10 size-[30rem] rounded-full bg-[#E95B30]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 size-[26rem] rounded-full bg-[#D2232A]/10 blur-3xl" />

      {/* Left Brand Panel - Desktop */}
      <section className="relative hidden overflow-hidden bg-[#1A2B49] p-8 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,91,48,0.42),transparent_30rem)]" />
        <div className="absolute -bottom-32 -right-24 size-80 rounded-full bg-[#E95B30]/20 blur-3xl" />

        <div className="relative z-10">
          <Button
            asChild
            variant="ghost"
            className="mb-10 min-h-12 rounded-full px-5 text-[18px] font-bold text-white/85 transition duration-300 hover:scale-[1.02] hover:bg-white/10 hover:text-white"
          >
            <Link href="/" aria-label="Kembali ke landing page LatiOtak">
              <ArrowLeft className="size-5" aria-hidden="true" />
              Kembali ke Beranda
            </Link>
          </Button>

          <Logo
            imageClassName="size-16 rounded-3xl bg-white"
            textClassName="text-white"
          />

          <div className="mt-16 max-w-xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-[#E95B30]">
              Portal LatiOtak
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
              Satu akses untuk lansia, keluarga, caregiver, dan instansi.
            </h1>

            <p className="mt-6 text-base leading-8 text-white/72">
              Login sebagai individu atau instansi untuk mengakses monitoring
              kesehatan, latihan kognitif, pengelolaan obat, keluarga, dan SOS
              darurat.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
            <CheckCircle2
              className="size-4 text-[#E95B30]"
              aria-hidden="true"
            />
            UI demo siap disambungkan ke backend pada tahap berikutnya
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          {authHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur transition duration-300 hover:bg-white/[0.1]"
              >
                <Icon className="size-6 text-[#E95B30]" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold text-white">
                  {item.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/55">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form Panel */}
      <section className="flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile and Form-side Header */}
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link href="/" aria-label="Kembali ke landing page LatiOtak">
              <Logo imageClassName="size-12 rounded-2xl" showText={false} />
            </Link>

            <Button
              asChild
              variant="outline"
              className="min-h-12 rounded-full border-[#1A2B49]/10 bg-white px-5 text-[16px] font-extrabold text-[#1A2B49] shadow-sm transition duration-300 hover:scale-[1.02] hover:border-[#E95B30]/40 hover:text-[#E95B30]"
            >
              <Link href="/">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Beranda
              </Link>
            </Button>
          </div>

          <div className="rounded-[2rem] border border-[#1A2B49]/10 bg-white/90 p-5 shadow-2xl shadow-[#E95B30]/10 backdrop-blur sm:p-7">
            <div className="mb-7">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#E95B30]">
                Akses Akun
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#1A2B49] md:text-4xl">
                {title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#1A2B49]/65">
                {description}
              </p>
            </div>

            {children}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-sm font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02] hover:text-[#E95B30]/80"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Kembali ke Landing Page
            </Link>
          </div>

          <p className="mt-4 text-center text-xs leading-6 text-[#1A2B49]/55">
            Dengan melanjutkan, pengguna menyetujui penggunaan platform untuk
            kebutuhan demo dan pengembangan LatiOtak.
          </p>
        </div>
      </section>
    </main>
  );
}
