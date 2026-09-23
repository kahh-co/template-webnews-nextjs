import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Berita } from "@/lib/types";
import { formatWaktuRelatif } from "@/lib/utils";
import CategoryBadge from "../ui/CategoryBadge";
import { Clock, Flame, User, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  headline: Berita;
  subHeadlines: Berita[];
}

export default function HeroSection({ headline, subHeadlines }: HeroSectionProps) {
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Headline Hero (Left 8 cols on desktop) */}
        <div className="lg:col-span-8">
          <div className="group relative h-[320px] sm:h-[480px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-zinc-900">
            <Image
              src={headline.gambar}
              alt={headline.judul}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.75] group-hover:brightness-[0.82]"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-md">
                <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                Headline Utama
              </span>
              <CategoryBadge categorySlug={headline.kategori} size="md" />
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8">
              <Link href={`/berita/${headline.slug}`} className="block group">
                <h1 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-red-200 transition-colors leading-tight drop-shadow-lg">
                  {headline.judul}
                </h1>
              </Link>
              <p className="mt-3 text-sm sm:text-base text-zinc-100 line-clamp-2 sm:line-clamp-3 max-w-3xl leading-relaxed font-normal drop-shadow">
                {headline.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-white/20 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 font-medium text-white">
                    <User className="w-4 h-4 text-red-400" />
                    {headline.penulis.nama}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    {formatWaktuRelatif(headline.tanggalTerbit)}
                  </span>
                </div>

                <Link
                  href={`/berita/${headline.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-red-400 hover:text-white transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Headlines (Right 4 cols on desktop) */}
        <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
          <div className="flex items-center justify-between pb-2 border-b-2 border-red-600">
            <h2 className="font-serif font-bold text-lg text-zinc-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
              Sorotan Terkini
            </h2>
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Update Tercepat
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            {subHeadlines.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="group relative flex gap-3 p-3 rounded-xl bg-white border border-zinc-200/80 hover:border-red-500/50 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-28 h-24 sm:w-32 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={item.gambar}
                    alt={item.judul}
                    fill
                    sizes="120px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="mb-1">
                      <CategoryBadge categorySlug={item.kategori} size="sm" />
                    </div>
                    <Link href={`/berita/${item.slug}`} className="block">
                      <h3 className="font-serif font-bold text-sm sm:text-base text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                        {item.judul}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatWaktuRelatif(item.tanggalTerbit)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
