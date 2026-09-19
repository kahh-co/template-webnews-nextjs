import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Berita } from "@/lib/types";
import { formatWaktuRelatif } from "@/lib/utils";
import CategoryBadge from "../ui/CategoryBadge";
import { Flame, TrendingUp, Tag, Sparkles, ExternalLink } from "lucide-react";

interface SidebarProps {
  beritaPopuler: Berita[];
  tags?: string[];
}

const defaultTags = [
  "IKN",
  "Piala Asia",
  "Satelit Nusantara",
  "All England",
  "AI Medis",
  "Mobil Listrik",
  "Bursa Saham",
  "KTT Iklim",
  "Pariwisata Bali",
  "Ekonomi Kreatif",
];

export default function Sidebar({ beritaPopuler, tags = defaultTags }: SidebarProps) {
  return (
    <aside className="space-y-8">
      {/* 1. Berita Populer (Top 5 dengan Nomor Urut) */}
      <div className="bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800">
          <h3 className="font-serif font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-600 fill-red-600" />
            Berita Terpopuler
          </h3>
          <span className="text-[11px] font-bold uppercase text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded">
            24 Jam
          </span>
        </div>

        <div className="space-y-4">
          {beritaPopuler.slice(0, 5).map((item, index) => {
            const rank = index + 1;
            const isTop3 = rank <= 3;

            return (
              <article
                key={item.id}
                className="group flex items-start gap-3.5 pb-3.5 border-b border-zinc-100 dark:border-zinc-800/60 last:border-b-0 last:pb-0"
              >
                {/* Number Badge */}
                <div
                  className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-serif font-black text-sm ${
                    isTop3
                      ? "bg-red-600 text-white shadow-xs"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {rank}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="mb-1">
                    <CategoryBadge categorySlug={item.kategori} size="sm" />
                  </div>
                  <Link href={`/berita/${item.slug}`} className="block">
                    <h4 className="font-serif font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                      {item.judul}
                    </h4>
                  </Link>
                  <span className="block text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                    {formatWaktuRelatif(item.tanggalTerbit)}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 2. Trending Topics / Tags */}
      <div className="bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800">
          <Tag className="w-4 h-4 text-red-600" />
          <h3 className="font-serif font-bold text-lg text-zinc-900 dark:text-white">
            Topik Hangat
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/cari?q=${encodeURIComponent(tag)}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all duration-200"
            >
              <TrendingUp className="w-3 h-3 opacity-60" />
              <span>#{tag}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Slot Iklan / Sponsor Placeholder */}
      <div className="relative overflow-hidden rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-6 text-center shadow-xs">
        <span className="absolute top-2 right-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider bg-zinc-200/60 dark:bg-zinc-800/80 px-2 py-0.5 rounded">
          Sponsor / Iklan
        </span>

        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>

        <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-white">
          Pasang Promosi Usaha Anda
        </h4>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
          Jangkau jutaan pembaca harian potensial di seluruh Indonesia dengan tarif sponsorship terjangkau.
        </p>

        <Link
          href="/tentang#kontak"
          className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-red-600 dark:hover:bg-red-700 rounded-xl transition-all shadow-sm"
        >
          <span>Hubungi Tim Iklan</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </aside>
  );
}
