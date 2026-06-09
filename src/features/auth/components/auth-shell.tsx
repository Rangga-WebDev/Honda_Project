/** @format */

import type { ReactNode } from "react";

import { Activity, BellRing, BrainCircuit, ShieldCheck } from "lucide-react";

import { Logo } from "@/components/shared/logo";
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
    icon: Activity,
  },
  {
    label: "Latihan kognitif",
    icon: BrainCircuit,
  },
  {
    label: "Pengingat obat",
    icon: BellRing,
  },
  {
    label: "Respon darurat",
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
        "grid min-h-screen bg-background p-4 text-foreground lg:grid-cols-[1.05fr_0.95fr] lg:p-6",
        className,
      )}
    >
      <section className="relative hidden overflow-hidden rounded-[2rem] bg-sidebar p-10 text-sidebar-foreground lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,110,55,0.42),transparent_28rem)]" />
        <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative z-10">
          <Logo
            imageClassName="size-16 rounded-3xl bg-white"
            textClassName="text-white"
          />

          <div className="mt-20 max-w-xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-primary">
              Platform kesehatan lansia
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
              LatiOtak membantu lansia tetap sehat, aktif, dan aman.
            </h1>
            <p className="mt-6 text-base leading-8 text-white/72">
              Satu platform untuk monitoring kesehatan, latihan otak,
              pengelolaan obat, koneksi keluarga, dan tombol SOS darurat.
            </p>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          {authHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur"
              >
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-white">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex items-center justify-center px-2 py-10 sm:px-6 lg:px-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Portal LatiOtak
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>

          {children}
        </div>
      </section>
    </main>
  );
}
