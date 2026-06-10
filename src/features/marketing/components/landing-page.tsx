/** @format */

import Link from "next/link";

import {
  ArrowRight,
  Heart,
  HeartPulse,
  Home,
  Mail,
  MapPin,
  Phone,
  Play,
  Quote,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MarketingNavbar } from "@/features/marketing/components/marketing-navbar";
import Image from "next/image";
interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FooterLink {
  label: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: "Wellness & Health",
    description:
      "Monitoring kesehatan, catatan kondisi harian, dan pengelolaan obat yang mudah dipahami.",
    icon: HeartPulse,
  },
  {
    title: "Community & Connection",
    description:
      "Keluarga dan caregiver tetap terhubung untuk memantau kondisi lansia dengan lebih tenang.",
    icon: UsersRound,
  },
  {
    title: "Comfort & Convenience",
    description:
      "Latihan otak, Brain Gym, CogniSync, dan akses SOS dibuat sederhana untuk penggunaan harian.",
    icon: Home,
  },
];

const quickLinks: FooterLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A2B49]">
      <MarketingNavbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <JoinSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20 lg:px-10 lg:py-24"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#E95B30]/10 px-5 py-3 text-[18px] font-extrabold text-[#E95B30]">
            Senior wellness made simple
          </p>

          <h1 className="max-w-3xl text-[44px] font-extrabold leading-[1.05] tracking-tight text-[#1A2B49] sm:text-[58px] lg:text-[76px]">
            Live Well. Thrive Together.
          </h1>

          <p className="mt-7 max-w-2xl text-[20px] leading-9 text-[#1A2B49]/75 sm:text-[22px]">
            LatiOtak membantu lansia, keluarga, caregiver, dan instansi menjaga
            kesehatan, melatih fungsi kognitif, mengatur obat, serta mengakses
            bantuan darurat dengan lebih mudah.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex min-h-20 items-center justify-center gap-4 rounded-full bg-[#E95B30] px-10 text-[12px] font-extrabold text-white shadow-[0_16px_36px_rgba(233,91,48,0.28)] transition duration-300 hover:scale-[1.02]"
            >
              <Heart className="size-8" aria-hidden="true" />
              SCHEDULE A TOUR
            </Link>

            <Link
              href="/login"
              className="inline-flex min-h-20 items-center justify-center gap-3 rounded-full border border-[#1A2B49]/15 bg-white px-8 text-[18px] font-extrabold text-[#1A2B49] shadow-[0_12px_28px_rgba(26,43,73,0.08)] transition duration-300 hover:scale-[1.02] hover:border-[#E95B30]/40"
            >
              Masuk Dashboard
              <ArrowRight className="size-6" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      className="relative min-h-[520px] overflow-hidden rounded-[40px] border border-[#1A2B49]/10 bg-white shadow-[0_18px_45px_rgba(26,43,73,0.10)]"
      aria-label="Visual pasangan lansia aktif dan bahagia"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#FDFBF7_42%,#FFE7DC_100%)]" />

      <div className="absolute left-8 top-8 z-10 rounded-full bg-white px-5 py-3 text-[18px] font-extrabold text-[#E95B30] shadow-[0_12px_28px_rgba(26,43,73,0.08)]">
        Happy & Active
      </div>

      <div className="absolute right-8 top-8 z-10 rounded-full bg-[#1A2B49] px-5 py-3 text-[18px] font-extrabold text-white">
        LatiOtak Care
      </div>

      <div className="absolute inset-x-8 bottom-18 z-10 rounded-[34px] bg-[#FDFBF7]/95 p-6 shadow-[0_18px_45px_rgba(26,43,73,0.12)]">
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Image
            src="/images/LansiaPria.png"
            alt="Elderly Man"
            className="rounded-[20px] object-cover"
            width={220}
            height={220}
          />

          <Image
            src="/images/LansiaWanita.png"
            alt="Elderly Woman"
            className="rounded-[20px] object-cover"
            width={220}
            height={220}
          />
        </div>
      </div>

      <div className="absolute bottom-40 left-14 h-28 w-28 rounded-full bg-[#E95B30]/15 blur-2xl" />
      <div className="absolute right-14 top-28 h-32 w-32 rounded-full bg-[#1A2B49]/10 blur-2xl" />
    </div>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y border-[#1A2B49]/10 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[18px] font-extrabold uppercase tracking-[0.22em] text-[#E95B30]">
            Our Services
          </p>
          <h2 className="mt-4 text-[40px] font-extrabold leading-tight text-[#1A2B49] sm:text-[54px]">
            Support for Your Best Life
          </h2>
          <p className="mt-5 text-[20px] leading-8 text-[#1A2B49]/70">
            Layanan dibuat sederhana, jelas, dan ramah lansia agar mudah
            digunakan setiap hari.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <article className="rounded-[34px] border border-[#1A2B49]/10 bg-[#FDFBF7] p-8 text-center shadow-[0_14px_35px_rgba(26,43,73,0.08)] transition duration-300 hover:scale-[1.02]">
      <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[#E95B30]/10 text-[#E95B30]">
        <Icon className="size-12" aria-hidden="true" />
      </div>

      <h3 className="mt-7 text-[26px] font-extrabold text-[#1A2B49]">
        {service.title}
      </h3>

      <p className="mt-4 text-[18px] leading-8 text-[#1A2B49]/70">
        {service.description}
      </p>

      <a
        href="#contact"
        className="mt-7 inline-flex items-center gap-2 text-[18px] font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02]"
      >
        LEARN MORE
        <ArrowRight className="size-5" aria-hidden="true" />
      </a>
    </article>
  );
}

function TestimonialSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_420px] lg:px-10">
        <div>
          <Quote
            className="size-20 fill-[#E95B30] text-[#E95B30]"
            aria-hidden="true"
          />

          <blockquote className="mt-4 max-w-3xl text-[32px] font-extrabold leading-tight text-[#1A2B49] sm:text-[42px]">
            LatiOtak membuat pendampingan terasa lebih tenang. Aktivitas harian,
            jadwal obat, dan keluarga terhubung dalam satu tempat yang mudah
            dipahami.
          </blockquote>

          <div className="mt-8 h-1 w-24 rounded-full bg-[#ffffff]" />

          <p className="mt-6 text-[22px] font-extrabold text-[#E95B30]">
            BESSE&apos;
          </p>
          <p className="mt-1 text-[18px] font-semibold text-[#1A2B49]/70">
            55 Tahun.
          </p>
        </div>

        <div
          className="mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center rounded-full border-[14px] border-white bg-[#fff]"
          aria-label="Foto resident"
        >
          <div className="text-center">
            <Image
              src="/images/Orang_Tua.png"
              alt="Elderly Man"
              className="rounded-full object-cover top-20"
              width={330}
              height={330}
            />
            <p className="mt-6 text-[18px] font-extrabold text-[#1A2B49]/70">
              Besse, 55 Tahun
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section className="bg-[#1A2B49] px-5 py-20 text-center text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-[40px] font-extrabold leading-tight sm:text-[56px]">
          Ready to Live Your Best Life?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-[20px] leading-8 text-white/80">
          Bergabung dengan komunitas pendamping lansia yang mendukung kesehatan,
          kemandirian, koneksi keluarga, dan rasa aman setiap hari.
        </p>

        <Link
          href="/register"
          className="mt-10 inline-flex min-h-20 items-center justify-center gap-4 rounded-full bg-white px-10 text-[22px] font-extrabold text-[#E95B30] shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02]"
        >
          <Heart className="size-8" aria-hidden="true" />
          JOIN OUR COMMUNITY TODAY
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-[#1A2B49]/10 px-5 py-14 md:px-8 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="mt-5 text-[18px] leading-8 text-[#1A2B49]/70">
            Platform pendamping lansia untuk kesehatan, latihan kognitif,
            pengelolaan obat, keluarga, dan SOS darurat.
          </p>
        </div>

        <div>
          <h3 className="text-[20px] font-extrabold text-[#1A2B49]">
            CONTACT US
          </h3>

          <ul className="mt-5 space-y-4 text-[18px] text-[#1A2B49]/70">
            <li className="flex gap-3">
              <Phone
                className="mt-1 size-5 shrink-0 text-[#E95B30]"
                aria-hidden="true"
              />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex gap-3">
              <Mail
                className="mt-1 size-5 shrink-0 text-[#E95B30]"
                aria-hidden="true"
              />
              <span>info@latiotak.id</span>
            </li>
            <li className="flex gap-3">
              <MapPin
                className="mt-1 size-5 shrink-0 text-[#E95B30]"
                aria-hidden="true"
              />
              <span>Makassar, Indonesia</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[20px] font-extrabold text-[#1A2B49]">
            QUICK LINKS
          </h3>

          <ul className="mt-5 space-y-3 text-[18px] text-[#1A2B49]/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition duration-300 hover:text-[#E95B30]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[20px] font-extrabold text-[#1A2B49]">
            FOLLOW US
          </h3>

          <div className="mt-5 flex gap-4">
            <SocialIcon label="Facebook" text="f" />
            <SocialIcon label="Instagram" text="◎" />
            <SocialIcon label="YouTube" icon={Play} />
          </div>

          <p className="mt-5 text-[18px] leading-8 text-[#1A2B49]/70">
            Ikuti kabar terbaru, kegiatan komunitas, dan perkembangan fitur
            LatiOtak.
          </p>
        </div>
      </div>

      <div className="px-5 py-6 text-center">
        <p className="text-[16px] font-medium text-[#1A2B49]/60">
          © 2026 LatiOtak Senior Wellness Community. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({
  label,
  text,
  icon: Icon,
}: {
  label: string;
  text?: string;
  icon?: LucideIcon;
}) {
  return (
    <a
      href="#contact"
      aria-label={label}
      className="flex size-14 items-center justify-center rounded-full bg-[#E95B30]/10 text-[20px] font-extrabold text-[#E95B30] transition duration-300 hover:scale-[1.02]"
    >
      {Icon ? <Icon className="size-6" aria-hidden="true" /> : text}
    </a>
  );
}
