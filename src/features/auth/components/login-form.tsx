/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { AUTH_ROLE_OPTIONS } from "@/features/auth/constants/auth-options";
import { USER_ROLES } from "@/features/auth/types/auth.types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  role: z.enum([USER_ROLES.INDIVIDUAL, USER_ROLES.INSTITUTION]),
  identifier: z.string().min(3, "ID atau email minimal 3 karakter."),
  password: z.string().min(6, "Kata sandi minimal 6 karakter."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
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
    },
  });

  const selectedRole = watch("role");

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    setSubmitMessage(null);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 600);
    });

    const target =
      values.role === USER_ROLES.INSTITUTION
        ? "dashboard instansi"
        : "dashboard individu";

    setSubmitMessage(
      `Login demo berhasil. Setelah tahap dashboard selesai, akun ini akan diarahkan ke ${target}.`,
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {AUTH_ROLE_OPTIONS.map((option) => {
          const isSelected = selectedRole === option.role;

          return (
            <label
              key={option.role}
              className={cn(
                "cursor-pointer rounded-3xl border bg-white p-4 shadow-sm transition",
                "hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md",
                isSelected &&
                  "border-primary bg-primary/5 ring-2 ring-primary/20",
              )}
            >
              <input
                type="radio"
                value={option.role}
                className="sr-only"
                {...register("role")}
              />
              <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[11px] font-bold text-secondary-foreground">
                {option.badge}
              </span>
              <span className="mt-3 block text-base font-bold">
                {option.title}
              </span>
              <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                {option.description}
              </span>
            </label>
          );
        })}
      </div>

      <div className="space-y-2">
        <Label htmlFor="identifier">ID / Email</Label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="identifier"
            placeholder="Contoh: LATI-00001 atau email"
            className="h-12 rounded-2xl pl-11"
            {...register("identifier")}
          />
        </div>
        {errors.identifier ? (
          <p className="text-xs font-medium text-destructive">
            {errors.identifier.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Kata Sandi</Label>
          <Link
            href="#"
            className="text-xs font-semibold text-primary hover:text-primary/80"
          >
            Lupa kata sandi?
          </Link>
        </div>

        <div className="relative">
          <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan kata sandi"
            className="h-12 rounded-2xl px-11"
            {...register("password")}
          />
          <button
            type="button"
            aria-label={
              showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
            }
            onClick={() => setShowPassword((current) => !current)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="size-4" aria-hidden="true" />
            ) : (
              <Eye className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>

        {errors.password ? (
          <p className="text-xs font-medium text-destructive">
            {errors.password.message}
          </p>
        ) : null}
      </div>

      {submitMessage ? (
        <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
          {submitMessage}
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-2xl text-base font-bold"
      >
        {isSubmitting ? "Memproses..." : "Masuk Dashboard"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <Link
          href="/register"
          className="font-bold text-primary hover:underline"
        >
          Daftar sekarang
        </Link>
      </p>
    </form>
  );
}
