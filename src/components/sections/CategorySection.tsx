import React from "react";
import Link from "next/link";
import { Berita } from "@/lib/types";
import { Kategori } from "@/lib/types";
import NewsCard from "../ui/NewsCard";
import { ArrowRight } from "lucide-react";

interface CategorySectionProps {
  kategori: Kategori;
  beritaList: Berita[];
}

export default function CategorySection({ kategori, beritaList }: CategorySectionProps) {
  if (beritaList.length === 0) return null;

  const mainItem = beritaList[0];
  const otherItems = beritaList.slice(1, 4);

  return (
    <section className="py-8 border-t border-zinc-200/80">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-zinc-200">
        <div className="flex items-center gap-2.5">
          <span className={`w-3 h-6 rounded-sm ${kategori.warna.bg}`} />
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-zinc-900">
            {kategori.nama}
          </h2>
        </div>

        <Link
          href={`/kategori/${kategori.slug}`}
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-red-600 transition-colors"
        >
          <span>Lihat Semua</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid Layout: 1 Hero/Large Card Left + 2 Cards Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Featured Card in this Category */}
        <div className="md:col-span-2 lg:col-span-2">
          <NewsCard berita={mainItem} variant="default" className="h-full" />
        </div>

        {/* 2 Other Cards in this Category */}
        {otherItems.slice(0, 2).map((item) => (
          <div key={item.id} className="col-span-1">
            <NewsCard berita={item} variant="default" className="h-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
