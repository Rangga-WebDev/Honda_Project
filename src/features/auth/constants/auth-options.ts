/** @format */

import {
  USER_ROLES,
  type AuthRoleOption,
} from "@/features/auth/types/auth.types";

export const AUTH_ROLE_OPTIONS: AuthRoleOption[] = [
  {
    role: USER_ROLES.INDIVIDUAL,
    title: "Individu",
    description: "Untuk lansia, caregiver, dan keluarga.",
    badge: "Lansia / Keluarga",
  },
  {
    role: USER_ROLES.INSTITUTION,
    title: "Instansi",
    description: "Untuk panti jompo, klinik, dan fasilitas kesehatan.",
    badge: "Panti / Klinik",
  },
];
