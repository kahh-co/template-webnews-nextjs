"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Berita } from "@/lib/types";
import { formatWaktuRelatif, cn } from "@/lib/utils";
import CategoryBadge from "./CategoryBadge";
import { Clock, User } from "lucide-react";

interface NewsCardProps {
  berita: Berita;
  variant?: "default" | "horizontal" | "compact" | "overlay";
  className?: string;
}

export default function NewsCard({
  berita,
  variant = "default",
  className,
}: NewsCardProps) {
  const [imgSrc, setImgSrc] = useState(berita.gambar);

  const handleImageError = () => {
    // Fallback gradient/placeholder if external image fails
    setImgSrc(
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80"
    );
  };

  if (variant === "horizontal") {
    return (
      <article
        className={cn(
          "group flex flex-col sm:flex-row gap-4 p-3.5 bg-white border border-zinc-200/80 rounded-xl hover:border-red-500/40 hover:shadow-md transition-all duration-300",
          className
        )}
      >
        <div className="relative w-full sm:w-44 sm:h-32 h-48 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
          <Image
            src={imgSrc}
            alt={berita.judul}
            fill
            sizes="(max-width: 640px) 100vw, 180px"
            onError={handleImageError}
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-2 left-2">
            <CategoryBadge categorySlug={berita.kategori} size="sm" />
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <Link href={`/berita/${berita.slug}`} className="block focus:outline-none">
              <h3 className="font-serif font-bold text-base sm:text-lg text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                {berita.judul}
              </h3>
            </Link>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-700 line-clamp-2 leading-relaxed">
              {berita.excerpt}
            </p>
          </div>

          <div className="flex items-center gap-3 mt-3 pt-2 text-xs text-zinc-600 border-t border-zinc-100">
            <span className="flex items-center gap-1 font-medium truncate max-w-[120px]">
              <User className="w-3.5 h-3.5 shrink-0" />
              {berita.penulis.nama}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 shrink-0">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              {formatWaktuRelatif(berita.tanggalTerbit)}
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article
        className={cn(
          "group flex items-start gap-3 py-3 border-b border-zinc-200/60 last:border-b-0",
          className
        )}
      >
        <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md bg-zinc-100">
          <Image
            src={imgSrc}
            alt={berita.judul}
            fill
            sizes="80px"
            onError={handleImageError}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-1">
            <CategoryBadge categorySlug={berita.kategori} size="sm" />
          </div>
          <Link href={`/berita/${berita.slug}`} className="block">
            <h4 className="font-serif font-bold text-sm text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
              {berita.judul}
            </h4>
          </Link>
          <span className="block text-[11px] text-zinc-600 mt-1">
            {formatWaktuRelatif(berita.tanggalTerbit)}
          </span>
        </div>
      </article>
    );
  }

  if (variant === "overlay") {
    return (
      <article
        className={cn(
          "group relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl",
          className
        )}
      >
        <Image
          src={imgSrc}
          alt={berita.judul}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={handleImageError}
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div>
            <CategoryBadge categorySlug={berita.kategori} size="sm" />
          </div>

          <div>
            <Link href={`/berita/${berita.slug}`} className="block group">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-red-300 transition-colors line-clamp-2 leading-snug drop-shadow-sm">
                {berita.judul}
              </h3>
            </Link>
            <div className="flex items-center gap-3 mt-3 text-xs text-zinc-300">
              <span className="font-medium">{berita.penulis.nama}</span>
              <span>•</span>
              <span>{formatWaktuRelatif(berita.tanggalTerbit)}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default vertical card
  return (
    <article
      className={cn(
        "group flex flex-col h-full bg-white border border-zinc-200/80 rounded-2xl overflow-hidden hover:border-red-500/40 hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <div className="relative w-full aspect-video overflow-hidden bg-zinc-100">
        <Image
          src={imgSrc}
          alt={berita.judul}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={handleImageError}
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge categorySlug={berita.kategori} size="sm" />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <Link href={`/berita/${berita.slug}`} className="block focus:outline-none">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
              {berita.judul}
            </h3>
          </Link>
          <p className="mt-2 text-sm text-zinc-700 line-clamp-3 leading-relaxed">
            {berita.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 mt-5 pt-3 border-t border-zinc-100 text-xs text-zinc-600">
          <span className="flex items-center gap-1.5 font-medium truncate max-w-[140px]">
            <User className="w-3.5 h-3.5 shrink-0" />
            {berita.penulis.nama}
          </span>
          <span className="flex items-center gap-1 shrink-0">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            {formatWaktuRelatif(berita.tanggalTerbit)}
          </span>
        </div>
      </div>
    </article>
  );
}
