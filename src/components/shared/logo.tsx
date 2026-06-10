/** @format */

import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export function Logo({
  className,
  imageClassName,
  textClassName,
  showText = true,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative size-14 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-primary/15",
          imageClassName,
        )}
      >
        <Image
          src="/images/LatiOtak.png"
          alt="Logo LatiOtak"
          fill
          priority
          sizes="56px"
          className="object-contain p-1.5"
        />
      </div>

      {showText ? (
        <div className="leading-tight">
          <p
            className={cn(
              "text-xl font-extrabold tracking-tight text-foreground",
              textClassName,
            )}
          >
            LatiOtak
          </p>
          <p className="text-xs font-medium text-muted-foreground">
            Lansia sehat, aktif, dan aman
          </p>
        </div>
      ) : null}
    </div>
  );
}
