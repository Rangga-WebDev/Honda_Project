/** @format */

import {
  INDIVIDUAL_ACCOUNT_TYPES,
  INSTITUTION_TYPES,
  USER_ROLES,
  type AuthRoleOption,
  type IndividualAccountType,
  type InstitutionType,
  type SelectOption,
} from "@/features/auth/types/auth.types";

export const AUTH_ROLE_OPTIONS: AuthRoleOption[] = [
  {
    role: USER_ROLES.INDIVIDUAL,
    title: "Individu",
    description: "Untuk lansia, keluarga, dan caregiver.",
    badge: "Personal Care",
  },
  {
    role: USER_ROLES.INSTITUTION,
    title: "Instansi",
    description: "Untuk panti, klinik, dan fasilitas kesehatan.",
    badge: "Organization",
  },
];

export const INDIVIDUAL_TYPE_OPTIONS: SelectOption<IndividualAccountType>[] = [
  {
    value: INDIVIDUAL_ACCOUNT_TYPES.ELDERLY,
    label: "Lansia",
  },
  {
    value: INDIVIDUAL_ACCOUNT_TYPES.FAMILY,
    label: "Keluarga Lansia",
  },
  {
    value: INDIVIDUAL_ACCOUNT_TYPES.CAREGIVER,
    label: "Caregiver / Pendamping",
  },
];

export const INSTITUTION_TYPE_OPTIONS: SelectOption<InstitutionType>[] = [
  {
    value: INSTITUTION_TYPES.NURSING_HOME,
    label: "Panti Jompo",
  },
  {
    value: INSTITUTION_TYPES.CLINIC,
    label: "Klinik / Fasilitas Kesehatan",
  },
  {
    value: INSTITUTION_TYPES.HEALTH_CENTER,
    label: "Puskesmas / Layanan Kesehatan",
  },
  {
    value: INSTITUTION_TYPES.COMMUNITY,
    label: "Komunitas / Organisasi Sosial",
  },
];
