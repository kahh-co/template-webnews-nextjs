import React from "react";
import Link from "next/link";
import { getKategoriBySlug } from "@/lib/data/kategori";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  categorySlug: string;
  size?: "sm" | "md" | "lg";
  clickable?: boolean;
  className?: string;
}

export default function CategoryBadge({
  categorySlug,
  size = "sm",
  clickable = true,
  className,
}: CategoryBadgeProps) {
  const kategori = getKategoriBySlug(categorySlug);
  const displayName = kategori ? kategori.nama : categorySlug;

  const sizeClasses = {
    sm: "text-[11px] font-semibold px-2 py-0.5 rounded-sm tracking-wider uppercase",
    md: "text-xs font-semibold px-2.5 py-1 rounded-sm tracking-wider uppercase",
    lg: "text-sm font-bold px-3 py-1.5 rounded-md tracking-wider uppercase",
  };

  // Color mapping based on category slug (light-only, kontras aman di atas putih)
  const colorMap: Record<string, string> = {
    nasional: "bg-red-700 text-white",
    internasional: "bg-blue-700 text-white",
    ekonomi: "bg-emerald-700 text-white",
    teknologi: "bg-indigo-700 text-white",
    olahraga: "bg-amber-700 text-white",
    hiburan: "bg-pink-700 text-white",
  };

  const badgeStyle =
    colorMap[categorySlug.toLowerCase()] ||
    "bg-zinc-800 text-white";

  const content = (
    <span
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200 shadow-xs",
        sizeClasses[size],
        badgeStyle,
        clickable && "hover:opacity-90 hover:scale-105 active:scale-95",
        className
      )}
    >
      {displayName}
    </span>
  );

  if (clickable) {
    return (
      <Link href={`/kategori/${categorySlug.toLowerCase()}`} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
