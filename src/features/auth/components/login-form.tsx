/** @format */

"use client";

import Link from "next/link";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AUTH_ROLE_OPTIONS } from "@/features/auth/constants/auth-options";
import { AuthRoleCard } from "@/features/auth/components/auth-role-card";
import { PasswordField } from "@/features/auth/components/password-field";
import { USER_ROLES } from "@/features/auth/types/auth.types";

const loginSchema = z.object({
  role: z.enum([USER_ROLES.INDIVIDUAL, USER_ROLES.INSTITUTION]),
  identifier: z.string().min(3, "ID atau email minimal 3 karakter."),
  password: z.string().min(6, "Kata sandi minimal 6 karakter."),
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: USER_ROLES.INDIVIDUAL,
      identifier: "",
      password: "",
      rememberMe: false,
    },
    mode: "onTouched",
  });

  const selectedRole = watch("role");

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    setSubmitMessage(null);

    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 650);
    });

    const target =
      values.role === USER_ROLES.INSTITUTION
        ? "dashboard instansi"
        : "dashboard individu";

    setSubmitMessage(
      `Login demo berhasil. Setelah Tahap 3 selesai, akun akan diarahkan ke ${target}.`,
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {AUTH_ROLE_OPTIONS.map((option) => (
          <AuthRoleCard
            key={option.role}
            option={option}
            isSelected={selectedRole === option.role}
            inputProps={{
              value: option.role,
              ...register("role"),
            }}
          />
        ))}
      </div>

      <div className="rounded-3xl border border-[#E95B30]/15 bg-[#E95B30]/10 p-4">
        <div className="flex gap-3">
          <ShieldCheck
            className="mt-0.5 size-5 shrink-0 text-[#E95B30]"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-extrabold text-[#1A2B49]">
              Mode demo frontend
            </p>
            <p className="mt-1 text-xs leading-5 text-[#1A2B49]/65">
              Login belum memeriksa database. Validasi akun asli akan dibuat
              pada tahap backend dan database.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="identifier">ID / Email</Label>

        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#1A2B49]/45"
            aria-hidden="true"
          />
          <Input
            id="identifier"
            placeholder="Contoh: LATI-00001 atau email"
            className="h-12 rounded-2xl border-[#1A2B49]/10 bg-white pl-11 text-base shadow-sm focus-visible:ring-[#E95B30]/30"
            {...register("identifier")}
          />
        </div>

        {errors.identifier ? (
          <p className="text-xs font-semibold text-[#D2232A]">
            {errors.identifier.message}
          </p>
        ) : null}
      </div>

      <PasswordField
        id="password"
        label="Kata Sandi"
        placeholder="Masukkan kata sandi"
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="flex items-center justify-between gap-4">
        <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#1A2B49]/70">
          <input
            type="checkbox"
            className="size-4 rounded border-[#1A2B49]/20 text-[#E95B30] accent-[#E95B30]"
            {...register("rememberMe")}
          />
          Ingat saya
        </label>

        <Link
          href="#"
          className="text-sm font-extrabold text-[#E95B30] transition hover:text-[#E95B30]/80"
        >
          Lupa kata sandi?
        </Link>
      </div>

      {submitMessage ? (
        <div className="rounded-2xl border border-[#E95B30]/20 bg-[#E95B30]/10 px-4 py-3 text-sm font-semibold leading-6 text-[#E95B30]">
          {submitMessage}
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-2xl bg-[#E95B30] text-base font-extrabold text-white shadow-[0_12px_28px_rgba(233,91,48,0.24)] transition duration-300 hover:scale-[1.02] hover:bg-[#E95B30]/95"
      >
        {isSubmitting ? "Memproses..." : "Masuk Dashboard"}
        {!isSubmitting ? (
          <ArrowRight className="size-5" aria-hidden="true" />
        ) : null}
      </Button>

      <p className="text-center text-sm text-[#1A2B49]/65">
        Belum punya akun?{" "}
        <Link
          href="/register"
          className="font-extrabold text-[#E95B30] hover:underline"
        >
          Daftar sekarang
        </Link>
      </p>
    </form>
  );
}
