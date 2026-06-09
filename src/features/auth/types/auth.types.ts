/** @format */

export const USER_ROLES = {
  INDIVIDUAL: "individual",
  INSTITUTION: "institution",
} as const;

export const INDIVIDUAL_ACCOUNT_TYPES = {
  ELDERLY: "elderly",
  FAMILY: "family",
  CAREGIVER: "caregiver",
} as const;

export const INSTITUTION_TYPES = {
  NURSING_HOME: "nursing_home",
  CLINIC: "clinic",
  HEALTH_CENTER: "health_center",
  COMMUNITY: "community",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export type IndividualAccountType =
  (typeof INDIVIDUAL_ACCOUNT_TYPES)[keyof typeof INDIVIDUAL_ACCOUNT_TYPES];

export type InstitutionType =
  (typeof INSTITUTION_TYPES)[keyof typeof INSTITUTION_TYPES];

export interface AuthRoleOption {
  role: UserRole;
  title: string;
  description: string;
  badge: string;
}

export interface SelectOption<TValue extends string> {
  value: TValue;
  label: string;
}

export interface LoginPayload {
  identifier: string;
  password: string;
  role: UserRole;
  rememberMe: boolean;
}

export interface RegisterPayload {
  role: UserRole;
  fullName?: string;
  relationRole?: IndividualAccountType;
  institutionName?: string;
  institutionType?: InstitutionType;
  picName?: string;
  email: string;
  phone: string;
  password: string;
}
