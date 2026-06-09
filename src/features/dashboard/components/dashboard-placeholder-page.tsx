/** @format */

import Link from "next/link";

import { ArrowLeft, LucideIcon } from "lucide-react";

interface DashboardPlaceholderPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status?: string;
}

export function DashboardPlaceholderPage({
  title,
  description,
  icon: Icon,
  status = "Akan dikembangkan pada tahap berikutnya",
}: DashboardPlaceholderPageProps) {
  return (
    <section className="space-y-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02]"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Kembali ke Dashboard
      </Link>

      <div className="rounded-[32px] border border-[#1A2B49]/10 bg-white p-8 shadow-[0_14px_35px_rgba(26,43,73,0.08)]">
        <div className="flex size-16 items-center justify-center rounded-3xl bg-[#E95B30]/10 text-[#E95B30]">
          <Icon className="size-8" aria-hidden="true" />
        </div>

        <h2 className="mt-6 text-3xl font-extrabold text-[#1A2B49] md:text-5xl">
          {title}
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#1A2B49]/65">
          {description}
        </p>

        <div className="mt-8 rounded-3xl border border-[#E95B30]/15 bg-[#E95B30]/10 p-5">
          <p className="text-base font-extrabold text-[#E95B30]">{status}</p>
          <p className="mt-2 text-sm leading-6 text-[#1A2B49]/65">
            Halaman ini sudah masuk ke shell dashboard. Isi fitur detail akan
            dikerjakan setelah layout dashboard stabil.
          </p>
        </div>
      </div>
    </section>
  );
}
