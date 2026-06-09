/** @format */

export const USER_ROLES = {
  INDIVIDUAL: "individual",
  INSTITUTION: "institution",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export interface AuthRoleOption {
  role: UserRole;
  title: string;
  description: string;
  badge: string;
}

export interface LoginPayload {
  identifier: string;
  password: string;
  role: UserRole;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
}
