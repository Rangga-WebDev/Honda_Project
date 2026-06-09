/** @format */

import {
  Activity,
  BellRing,
  BrainCircuit,
  HeartPulse,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HEALTH_STATUS } from "@/constants";

const featureCards = [
  {
    title: "Monitoring Kesehatan",
    description:
      "Pantau tekanan darah, gula darah, berat badan, dan kondisi harian lansia.",
    icon: HeartPulse,
  },
  {
    title: "CogniSync",
    description:
      "Latihan harian, permainan memori, senam jari, dan tantangan logika.",
    icon: BrainCircuit,
  },
  {
    title: "PharmaFlow",
    description:
      "Kelola jadwal obat, dosis, pengingat minum obat, dan riwayat konsumsi.",
    icon: BellRing,
  },
  {
    title: "Keluarga",
    description:
      "Hubungkan keluarga dan caregiver untuk memantau kondisi lansia.",
    icon: UsersRound,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-5 py-6 md:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Button className="rounded-full">Masuk Dashboard</Button>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <StatusBadge
            status={HEALTH_STATUS.NORMAL}
            label="Platform kesehatan lansia"
          />

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Latihan otak, kesehatan, obat, dan keluarga dalam satu platform.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            LatiOtak membantu lansia, caregiver, keluarga, dan instansi dalam
            memantau kesehatan, menjalankan latihan kognitif, mengelola obat,
            serta mengakses bantuan SOS saat keadaan darurat.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full">
              Mulai Sekarang
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Lihat Fitur
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden rounded-[2rem] border-primary/20 bg-white/85 shadow-2xl shadow-primary/10">
          <CardHeader className="border-b bg-sidebar text-sidebar-foreground">
            <div className="flex items-center justify-between">
              <CardTitle>Dashboard Ibu Ani</CardTitle>
              <StatusBadge
                status={HEALTH_STATUS.NORMAL}
                label="Normal"
                className="border-white/20 bg-white/15 text-white"
              />
            </div>
          </CardHeader>

          <CardContent className="space-y-5 p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-secondary/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <Activity className="size-4 text-primary" />
                  Tekanan Darah
                </div>
                <p className="mt-3 text-2xl font-bold">120/80</p>
                <p className="text-sm text-emerald-600">Normal</p>
              </div>

              <div className="rounded-2xl border bg-secondary/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <HeartPulse className="size-4 text-primary" />
                  Gula Darah
                </div>
                <p className="mt-3 text-2xl font-bold">110</p>
                <p className="text-sm text-emerald-600">mg/dL</p>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-5">
              <p className="text-sm font-bold text-primary">CogniSync</p>
              <h3 className="mt-2 text-xl font-bold">
                Latihan memori harian siap dimulai
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Sesi hari ini berisi permainan memori ringan dan senam jari
                untuk menjaga fokus serta koordinasi.
              </p>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-destructive px-5 py-4 text-sm font-bold text-destructive-foreground shadow-lg shadow-red-500/20 transition hover:opacity-90">
              <ShieldAlert className="size-5" />
              SOS DARURAT
            </button>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl pb-16">
        <SectionHeading
          eyebrow="Fitur utama"
          title="Modul inti LatiOtak"
          description="Design system ini menjadi dasar untuk halaman login, dashboard individu, dashboard instansi, dan semua modul fitur berikutnya."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="rounded-3xl border-primary/10 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
