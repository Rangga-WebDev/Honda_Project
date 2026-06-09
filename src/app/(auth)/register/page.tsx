/** @format */

import { AuthShell } from "@/features/auth/components/auth-shell";
import { RegisterForm } from "@/features/auth/components/register-form";

export default function RegisterPage() {
  return (
    <AuthShell
      title="Buat Akun Baru"
      description="Daftar sebagai individu, keluarga, caregiver, atau instansi pendamping lansia."
    >
      <RegisterForm />
    </AuthShell>
  );
}
