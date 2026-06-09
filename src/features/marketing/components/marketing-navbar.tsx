/** @format */

"use client";

import Link from "next/link";
import { useState } from "react";

import { ChevronDown, HeartPulse, Menu, Search, X } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

type DropdownKey = "Product" | "Solutions" | "Open Source";

const dropdowns: Record<DropdownKey, NavDropdown> = {
  Product: {
    label: "Product",
    items: [
      {
        title: "Monitoring Kesehatan",
        description:
          "Pantau kondisi lansia, tekanan darah, gula darah, dan aktivitas harian.",
        href: "#services",
      },
      {
        title: "CogniSync",
        description:
          "Latihan harian, permainan memori, senam jari, dan tantangan logika.",
        href: "#services",
      },
      {
        title: "PharmaFlow",
        description: "Kelola jadwal obat, dosis, dan riwayat konsumsi obat.",
        href: "#services",
      },
    ],
  },
  Solutions: {
    label: "Solutions",
    items: [
      {
        title: "Untuk Lansia",
        description:
          "Tampilan sederhana, tombol besar, dan alur yang mudah dipahami.",
        href: "#home",
      },
      {
        title: "Untuk Keluarga",
        description:
          "Pantau kondisi lansia dan terima update penting secara jelas.",
        href: "#about",
      },
      {
        title: "Untuk Instansi",
        description:
          "Dashboard monitoring terpusat untuk panti, klinik, dan caregiver.",
        href: "#contact",
      },
    ],
  },
  "Open Source": {
    label: "Open Source",
    items: [
      {
        title: "Dokumentasi",
        description:
          "Panduan pengembangan fitur dan struktur project LatiOtak.",
        href: "#services",
      },
      {
        title: "Komunitas",
        description:
          "Kolaborasi pengembangan untuk layanan lansia yang lebih inklusif.",
        href: "#about",
      },
      {
        title: "Roadmap",
        description: "Tahapan pengembangan dashboard, backend, dan database.",
        href: "#contact",
      },
    ],
  },
};

const dropdownKeys = Object.keys(dropdowns) as DropdownKey[];

export function MarketingNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(
    null,
  );
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((current) => !current);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1A2B49]/10 bg-[#FDFBF7]/95 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8 lg:px-10"
        aria-label="Navigasi utama"
      >
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Kembali ke halaman utama LatiOtak">
            <Logo
              imageClassName="size-13 rounded-2xl"
              textClassName="text-[#1A2B49]"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {dropdownKeys.map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={closeDropdown}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown((current) =>
                      current === key ? null : key,
                    )
                  }
                  className="inline-flex min-h-12 items-center gap-1 rounded-full px-4 text-[18px] font-semibold text-[#1A2B49]/80 transition duration-300 hover:bg-white hover:text-[#1A2B49]"
                  aria-expanded={activeDropdown === key}
                  aria-haspopup="true"
                >
                  {dropdowns[key].label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition duration-300",
                      activeDropdown === key && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>

                {activeDropdown === key ? (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-[420px] rounded-[28px] border border-[#1A2B49]/10 bg-white p-3 shadow-[0_22px_55px_rgba(26,43,73,0.14)]">
                      {dropdowns[key].items.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group block rounded-3xl p-4 transition duration-300 hover:bg-[#E95B30]/10"
                          onClick={closeDropdown}
                        >
                          <p className="text-[18px] font-extrabold text-[#1A2B49] transition duration-300 group-hover:text-[#E95B30]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[15px] leading-6 text-[#1A2B49]/65">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#1A2B49]/45"
              aria-hidden="true"
            />

            <input
              type="search"
              placeholder="Search..."
              className="h-12 w-[250px] rounded-full border border-[#1A2B49]/10 bg-white pl-12 pr-12 text-[18px] text-[#1A2B49] shadow-sm outline-none transition duration-300 placeholder:text-[#1A2B49]/40 focus:border-[#E95B30]/50 focus:ring-2 focus:ring-[#E95B30]/20"
              aria-label="Cari fitur LatiOtak"
            />

            <span className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#1A2B49]/10 bg-[#FDFBF7] text-sm font-bold text-[#1A2B49]/50">
              /
            </span>
          </div>

          <Link
            href="/login"
            className="flex min-h-12 items-center rounded-full px-4 text-[14px] font-bold text-[#1A2B49] transition duration-300 hover:bg-white hover:text-[#E95B30]"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="flex min-h-12 items-center gap-2 rounded-full bg-[#E95B30] px-4 text-[14px] font-extrabold text-white shadow-[0_12px_28px_rgba(233,91,48,0.24)] transition duration-300 hover:scale-[1.02] hover:bg-[#E95B30]/95"
          >
            <HeartPulse className="size-4" aria-hidden="true" />
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex size-12 items-center justify-center rounded-2xl border border-[#1A2B49]/10 bg-white text-[#1A2B49] shadow-sm transition duration-300 hover:scale-[1.02] hover:border-[#E95B30]/40 lg:hidden"
          aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-[#1A2B49]/10 bg-[#FDFBF7] transition-all duration-300 lg:hidden",
          isMobileOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto max-w-7xl space-y-5 px-5 py-5 md:px-8">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#1A2B49]/45"
              aria-hidden="true"
            />

            <input
              type="search"
              placeholder="Search..."
              className="h-14 w-full rounded-2xl border border-[#1A2B49]/10 bg-white pl-12 pr-12 text-[18px] text-[#1A2B49] shadow-sm outline-none transition duration-300 placeholder:text-[#1A2B49]/40 focus:border-[#E95B30]/50 focus:ring-2 focus:ring-[#E95B30]/20"
              aria-label="Cari fitur LatiOtak"
            />

            <span className="absolute right-4 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#1A2B49]/10 bg-[#FDFBF7] text-sm font-bold text-[#1A2B49]/50">
              /
            </span>
          </div>

          <div className="space-y-3">
            {dropdownKeys.map((key) => (
              <details
                key={key}
                className="rounded-3xl border border-[#1A2B49]/10 bg-white p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-[20px] font-extrabold text-[#1A2B49]">
                  {dropdowns[key].label}
                  <ChevronDown className="size-5" aria-hidden="true" />
                </summary>

                <div className="mt-4 space-y-2">
                  {dropdowns[key].items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block rounded-2xl bg-[#FDFBF7] p-4 transition duration-300 hover:bg-[#E95B30]/10"
                    >
                      <p className="text-[18px] font-bold text-[#1A2B49]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[15px] leading-6 text-[#1A2B49]/65">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              </details>
            ))}

            <a
              href="#pricing"
              onClick={() => setIsMobileOpen(false)}
              className="block rounded-3xl border border-[#1A2B49]/10 bg-white p-4 text-[20px] font-extrabold text-[#1A2B49] transition duration-300 hover:bg-[#E95B30]/10"
            >
              Pricing
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/login"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#1A2B49]/10 bg-white px-6 text-[18px] font-extrabold text-[#1A2B49] transition duration-300 hover:scale-[1.02] hover:border-[#E95B30]/40"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#E95B30] px-6 text-[18px] font-extrabold text-white shadow-[0_12px_28px_rgba(233,91,48,0.24)] transition duration-300 hover:scale-[1.02]"
            >
              <HeartPulse className="size-5" aria-hidden="true" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
