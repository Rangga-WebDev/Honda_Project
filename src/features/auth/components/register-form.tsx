/** @format */

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Building2,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AUTH_ROLE_OPTIONS,
  INDIVIDUAL_TYPE_OPTIONS,
  INSTITUTION_TYPE_OPTIONS,
} from "@/features/auth/constants/auth-options";
import { AuthRoleCard } from "@/features/auth/components/auth-role-card";
import { PasswordField } from "@/features/auth/components/password-field";
import { USER_ROLES } from "@/features/auth/types/auth.types";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    role: z.enum([USER_ROLES.INDIVIDUAL, USER_ROLES.INSTITUTION]),

    fullName: z.string().optional(),
    relationRole: z.string().optional(),

    institutionName: z.string().optional(),
    institutionType: z.string().optional(),
    picName: z.string().optional(),

    email: z.string().email("Format email tidak valid."),
    phone: z
      .string()
      .min(10, "Nomor telepon minimal 10 karakter.")
      .regex(
        /^[0-9+\-\s()]+$/,
        "Nomor telepon hanya boleh berisi angka dan simbol telepon.",
      ),
    password: z.string().min(6, "Kata sandi minimal 6 karakter."),
    confirmPassword: z
      .string()
      .min(6, "Konfirmasi kata sandi minimal 6 karakter."),
    acceptTerms: z.boolean().refine((value) => value, {
      message: "Persetujuan wajib dicentang.",
    }),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Konfirmasi kata sandi tidak sama.",
      });
    }

    if (values.role === USER_ROLES.INDIVIDUAL) {
      if (!values.fullName?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["fullName"],
          message: "Nama lengkap wajib diisi.",
        });
      }

      if (!values.relationRole?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["relationRole"],
          message: "Jenis akun individu wajib dipilih.",
        });
      }
    }

    if (values.role === USER_ROLES.INSTITUTION) {
      if (!values.institutionName?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["institutionName"],
          message: "Nama instansi wajib diisi.",
        });
      }

      if (!values.institutionType?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["institutionType"],
          message: "Tipe instansi wajib dipilih.",
        });
      }

      if (!values.picName?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["picName"],
          message: "Nama penanggung jawab wajib diisi.",
        });
      }
    }
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: USER_ROLES.INDIVIDUAL,
      fullName: "",
      relationRole: "",
      institutionName: "",
      institutionType: "",
      picName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    mode: "onTouched",
  });

  const selectedRole = watch("role");
  const password = watch("password");

  const passwordChecks = useMemo(
    () => [
      {
        label: "Minimal 6 karakter",
        passed: password.length >= 6,
      },
      {
        label: "Mengandung huruf",
        passed: /[A-Za-z]/.test(password),
      },
      {
        label: "Mengandung angka",
        passed: /\d/.test(password),
      },
    ],
    [password],
  );
  const onSubmit: SubmitHandler<RegisterFormValues> = async (values) => {
    setSubmitMessage(null);

    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 650);
    });

    const targetPath =
      values.role === USER_ROLES.INSTITUTION
        ? "/dashboard/institution"
        : "/dashboard";

    router.push(targetPath);
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
              Pilih jenis akun dengan tepat
            </p>
            <p className="mt-1 text-xs leading-5 text-[#1A2B49]/65">
              Akun individu digunakan oleh lansia, keluarga, atau caregiver.
              Akun instansi digunakan oleh panti, klinik, atau fasilitas
              pendamping lansia.
            </p>
          </div>
        </div>
      </div>

      {selectedRole === USER_ROLES.INDIVIDUAL ? (
        <IndividualFields register={register} errors={errors} />
      ) : (
        <InstitutionFields register={register} errors={errors} />
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          id="email"
          label="Email"
          type="email"
          placeholder="nama@email.com"
          icon={Mail}
          error={errors.email?.message}
          inputProps={register("email")}
        />

        <TextField
          id="phone"
          label="Nomor Telepon"
          placeholder="08xxxxxxxxxx"
          icon={Phone}
          error={errors.phone?.message}
          inputProps={register("phone")}
        />
      </div>

      <PasswordField
        id="password"
        label="Kata Sandi"
        placeholder="Minimal 6 karakter"
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="grid gap-2 rounded-3xl border border-[#1A2B49]/10 bg-white p-4">
        {passwordChecks.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4 text-xs font-semibold"
          >
            <span className="text-[#1A2B49]/65">{item.label}</span>
            <span
              className={item.passed ? "text-emerald-600" : "text-[#1A2B49]/35"}
            >
              {item.passed ? "Terpenuhi" : "Belum"}
            </span>
          </div>
        ))}
      </div>

      <PasswordField
        id="confirmPassword"
        label="Konfirmasi Kata Sandi"
        placeholder="Ulangi kata sandi"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <label className="flex cursor-pointer items-start gap-3 rounded-3xl border border-[#1A2B49]/10 bg-white p-4 text-sm leading-6 text-[#1A2B49]/70">
        <input
          type="checkbox"
          className="mt-1 size-4 rounded border-[#1A2B49]/20 accent-[#E95B30]"
          {...register("acceptTerms")}
        />
        <span>
          Saya menyetujui penggunaan data untuk kebutuhan demo dan pengembangan
          platform LatiOtak.
          {errors.acceptTerms ? (
            <span className="mt-1 block font-semibold text-[#D2232A]">
              {errors.acceptTerms.message}
            </span>
          ) : null}
        </span>
      </label>

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
        {isSubmitting ? "Memproses..." : "Buat Akun"}
        {!isSubmitting ? (
          <ArrowRight className="size-5" aria-hidden="true" />
        ) : null}
      </Button>

      <p className="text-center text-sm text-[#1A2B49]/65">
        Sudah punya akun?{" "}
        <Link
          href="/login"
          className="font-extrabold text-[#E95B30] hover:underline"
        >
          Masuk di sini
        </Link>
      </p>
    </form>
  );
}

function IndividualFields({
  register,
  errors,
}: {
  register: ReturnType<typeof useForm<RegisterFormValues>>["register"];
  errors: ReturnType<typeof useForm<RegisterFormValues>>["formState"]["errors"];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <TextField
        id="fullName"
        label="Nama Lengkap"
        placeholder="Contoh: Ibu Ani"
        icon={UserRound}
        error={errors.fullName?.message}
        inputProps={register("fullName")}
      />

      <SelectField
        id="relationRole"
        label="Jenis Akun"
        placeholder="Pilih jenis akun"
        options={INDIVIDUAL_TYPE_OPTIONS}
        error={errors.relationRole?.message}
        selectProps={register("relationRole")}
      />
    </div>
  );
}

function InstitutionFields({
  register,
  errors,
}: {
  register: ReturnType<typeof useForm<RegisterFormValues>>["register"];
  errors: ReturnType<typeof useForm<RegisterFormValues>>["formState"]["errors"];
}) {
  return (
    <div className="space-y-4">
      <TextField
        id="institutionName"
        label="Nama Instansi"
        placeholder="Contoh: Panti Sejahtera Abadi"
        icon={Building2}
        error={errors.institutionName?.message}
        inputProps={register("institutionName")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          id="institutionType"
          label="Tipe Instansi"
          placeholder="Pilih tipe instansi"
          options={INSTITUTION_TYPE_OPTIONS}
          error={errors.institutionType?.message}
          selectProps={register("institutionType")}
        />

        <TextField
          id="picName"
          label="Nama Penanggung Jawab"
          placeholder="Contoh: Andini Amanah"
          icon={UserRound}
          error={errors.picName?.message}
          inputProps={register("picName")}
        />
      </div>
    </div>
  );
}

function TextField({
  id,
  label,
  placeholder,
  icon: Icon,
  error,
  inputProps,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  icon: typeof UserRound;
  error?: string;
  inputProps: ReturnType<
    typeof useForm<RegisterFormValues>
  >["register"] extends (name: infer TName) => infer TResult
    ? TResult
    : never;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>

      <div className="relative">
        <Icon
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#1A2B49]/45"
          aria-hidden="true"
        />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="h-12 rounded-2xl border-[#1A2B49]/10 bg-white pl-11 text-base shadow-sm focus-visible:ring-[#E95B30]/30"
          {...inputProps}
        />
      </div>

      {error ? (
        <p className="text-xs font-semibold text-[#D2232A]">{error}</p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  placeholder,
  options,
  error,
  selectProps,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  error?: string;
  selectProps: ReturnType<
    typeof useForm<RegisterFormValues>
  >["register"] extends (name: infer TName) => infer TResult
    ? TResult
    : never;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>

      <select
        id={id}
        className="h-12 w-full rounded-2xl border border-[#1A2B49]/10 bg-white px-4 text-base text-[#1A2B49] shadow-sm outline-none transition focus:border-[#E95B30]/50 focus:ring-2 focus:ring-[#E95B30]/20"
        {...selectProps}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="text-xs font-semibold text-[#D2232A]">{error}</p>
      ) : null}
    </div>
  );
}
