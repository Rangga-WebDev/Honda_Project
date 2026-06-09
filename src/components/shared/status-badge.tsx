/** @format */

import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

import { HEALTH_STATUS, type HealthStatus } from "@/constants";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: HealthStatus;
  label: string;
  className?: string;
}

const statusStyles: Record<HealthStatus, string> = {
  [HEALTH_STATUS.NORMAL]: "border-emerald-200 bg-emerald-50 text-emerald-700",
  [HEALTH_STATUS.WARNING]: "border-amber-200 bg-amber-50 text-amber-700",
  [HEALTH_STATUS.DANGER]: "border-red-200 bg-red-50 text-red-700",
};

const statusIcons: Record<HealthStatus, React.ElementType> = {
  [HEALTH_STATUS.NORMAL]: CheckCircle2,
  [HEALTH_STATUS.WARNING]: Info,
  [HEALTH_STATUS.DANGER]: AlertTriangle,
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const Icon = statusIcons[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        statusStyles[status],
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}
