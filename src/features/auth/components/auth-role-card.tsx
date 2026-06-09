/** @format */

import type { InputHTMLAttributes } from "react";

import { Building2, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  USER_ROLES,
  type AuthRoleOption,
  type UserRole,
} from "@/features/auth/types/auth.types";
import { cn } from "@/lib/utils";

interface AuthRoleCardProps {
  option: AuthRoleOption;
  isSelected: boolean;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

const roleIcons: Record<UserRole, LucideIcon> = {
  [USER_ROLES.INDIVIDUAL]: UserRound,
  [USER_ROLES.INSTITUTION]: Building2,
};

export function AuthRoleCard({
  option,
  isSelected,
  inputProps,
}: AuthRoleCardProps) {
  const Icon = roleIcons[option.role];

  return (
    <label
      className={cn(
        "group cursor-pointer rounded-3xl border bg-white p-4 shadow-sm transition duration-300",
        "hover:-translate-y-0.5 hover:border-[#E95B30]/50 hover:shadow-lg hover:shadow-[#E95B30]/10",
        isSelected &&
          "border-[#E95B30] bg-[#E95B30]/5 ring-2 ring-[#E95B30]/15",
      )}
    >
      <input type="radio" className="sr-only" {...inputProps} />

      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-2xl transition",
            isSelected
              ? "bg-[#E95B30] text-white"
              : "bg-[#E95B30]/10 text-[#E95B30]",
          )}
        >
          <Icon className="size-6" aria-hidden="true" />
        </div>

        <div>
          <span
            className={cn(
              "inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold",
              isSelected
                ? "bg-[#E95B30] text-white"
                : "bg-[#E95B30]/10 text-[#E95B30]",
            )}
          >
            {option.badge}
          </span>

          <span className="mt-3 block text-base font-extrabold text-[#1A2B49]">
            {option.title}
          </span>

          <span className="mt-1 block text-xs leading-5 text-[#1A2B49]/65">
            {option.description}
          </span>
        </div>
      </div>
    </label>
  );
}
