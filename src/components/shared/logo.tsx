/** @format */

import { BrainCircuit } from "lucide-react";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}

export function Logo({ className, markClassName, textClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm",
          markClassName,
        )}
      >
        <BrainCircuit className="size-6" aria-hidden="true" />
      </div>

      <div className="leading-tight">
        <p className={cn("text-xl font-bold tracking-tight", textClassName)}>
          LatiOtak
        </p>
        <p className="text-xs font-medium text-muted-foreground">
          Lansia sehat, aktif, dan aman
        </p>
      </div>
    </div>
  );
}
