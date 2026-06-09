/** @format */

"use client";

import { useState, type InputHTMLAttributes } from "react";

import { Eye, EyeOff, LockKeyhole } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PasswordFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  id: string;
  label: string;
  error?: string;
}

export function PasswordField({
  id,
  label,
  error,
  className,
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>

      <div className="relative">
        <LockKeyhole
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#1A2B49]/45"
          aria-hidden="true"
        />

        <Input
          id={id}
          type={showPassword ? "text" : "password"}
          className={`h-12 rounded-2xl border-[#1A2B49]/10 bg-white px-11 text-base shadow-sm focus-visible:ring-[#E95B30]/30 ${className ?? ""}`}
          {...props}
        />

        <button
          type="button"
          aria-label={
            showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
          }
          onClick={() => setShowPassword((current) => !current)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1A2B49]/45 transition hover:text-[#1A2B49]"
        >
          {showPassword ? (
            <EyeOff className="size-4" aria-hidden="true" />
          ) : (
            <Eye className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {error ? (
        <p className="text-xs font-semibold text-[#D2232A]">{error}</p>
      ) : null}
    </div>
  );
}
