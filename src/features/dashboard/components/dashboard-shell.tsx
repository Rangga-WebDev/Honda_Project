/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

import { LogOut, Menu, Settings, X } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { dashboardNavItems } from "@/features/dashboard/constants/dashboard-nav";
import { cn } from "@/lib/utils";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A2B49]">
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-[280px] flex-col bg-[#1A2B49] text-white lg:flex">
        <SidebarContent pathname={pathname} />
      </aside>

      <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-[#1A2B49]/10 bg-[#FDFBF7]/95 px-5 backdrop-blur-xl lg:hidden">
        <Logo imageClassName="size-12 rounded-2xl" />

        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="flex size-12 items-center justify-center rounded-2xl border border-[#1A2B49]/10 bg-white text-[#1A2B49] shadow-sm transition duration-300 hover:scale-[1.02]"
          aria-label="Buka menu dashboard"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </header>

      <main className="min-h-screen px-4 py-5 sm:px-6 lg:pl-[300px] lg:pr-8 lg:pt-8">
        {children}
      </main>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[#1A2B49]/45 backdrop-blur-sm transition duration-300 lg:hidden",
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-[70] w-[300px] bg-[#1A2B49] text-white shadow-2xl transition-transform duration-300 lg:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          <Logo
            imageClassName="size-12 rounded-2xl bg-white"
            textClassName="text-white"
          />

          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="flex size-10 items-center justify-center rounded-2xl bg-white/10 text-white"
            aria-label="Tutup menu dashboard"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <SidebarContent
          pathname={pathname}
          onNavigate={() => setIsMobileOpen(false)}
        />
      </aside>
    </div>
  );
}

function SidebarContent({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      <div className="hidden h-24 items-center border-b border-white/10 px-6 lg:flex">
        <Link href="/dashboard" aria-label="Dashboard LatiOtak">
          <Logo
            imageClassName="size-12 rounded-2xl bg-white"
            textClassName="text-white"
          />
        </Link>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
        <p className="px-4 pb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white/35">
          Main Menu
        </p>

        {dashboardNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex min-h-14 items-center gap-3 rounded-2xl px-4 text-sm font-extrabold transition duration-300",
                isActive
                  ? "bg-[#E95B30] text-white shadow-[0_14px_30px_rgba(233,91,48,0.26)]"
                  : "text-white/65 hover:bg-white/10 hover:text-white",
              )}
            >
              <Icon className="size-5 shrink-0" aria-hidden="true" />

              <span className="flex flex-1 items-center justify-between gap-2">
                {item.title}
                {item.badge ? (
                  <span className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-extrabold">
                    {item.badge}
                  </span>
                ) : null}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <Link
          href="/dashboard"
          className="flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-extrabold text-white/65 transition duration-300 hover:bg-white/10 hover:text-white"
        >
          <Settings className="size-5" aria-hidden="true" />
          Pengaturan
        </Link>

        <Link
          href="/login"
          className="mt-2 flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-extrabold text-red-300 transition duration-300 hover:bg-red-500/10 hover:text-red-200"
        >
          <LogOut className="size-5" aria-hidden="true" />
          Keluar
        </Link>
      </div>
    </>
  );
}
