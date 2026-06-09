/** @format */

export const APP_COLORS = {
  primary: "#F16E37",
  primaryDark: "#E64A2E",
  accent: "#E95B30",
  danger: "#D2232A",
  background: "#FFF7F3",
  sidebar: "#2A1713",
  foreground: "#22110D",
} as const;

export const HEALTH_STATUS = {
  NORMAL: "normal",
  WARNING: "warning",
  DANGER: "danger",
} as const;

export type HealthStatus = (typeof HEALTH_STATUS)[keyof typeof HEALTH_STATUS];
