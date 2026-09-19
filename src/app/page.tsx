import React from "react";
import Link from "next/link";
import {
  getHeadlineBerita,
  getBeritaTrending,
  getAllBerita,
  getBeritaPopuler,
  getBeritaByKategori,
} from "@/lib/data/berita";
import { kategoriList } from "@/lib/data/kategori";
import HeroSection from "@/components/sections/HeroSection";
import Sidebar from "@/components/sections/Sidebar";
import CategorySection from "@/components/sections/CategorySection";
import NewsCard from "@/components/ui/NewsCard";
import { Sparkles, Newspaper, ArrowRight } from "lucide-react";

export default function HomePage() {
  const headline = getHeadlineBerita();
  const trending = getBeritaTrending(5).filter((b) => b.id !== headline.id);
  const allBerita = getAllBerita();
  const populer = getBeritaPopuler(5);

  // Latest news excluding the headline
  const latestNews = allBerita.filter((b) => b.id !== headline.id).slice(0, 4);

  return (
    <div className="space-y-12">
      {/* 1. Hero Headline Section */}
      <HeroSection headline={headline} subHeadlines={trending} />

      {/* 2. Main Content Grid: Latest News (8 cols) + Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Latest News & Category Blocks */}
        <div className="lg:col-span-8 space-y-10">
          {/* Section Header: Berita Terbaru */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-red-600 dark:border-red-500">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400">
                  <Newspaper className="w-5 h-5" />
                </div>
                <h2 className="font-serif font-bold text-2xl text-zinc-900 dark:text-white">
                  Kabar Terbaru & Terhangat
                </h2>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Diperbarui Setiap Jam
              </span>
            </div>

            {/* Grid Berita Terbaru: 1 card besar atas + 3 card horizontal / grid */}
            <div className="space-y-4">
              {latestNews.length > 0 && (
                <NewsCard berita={latestNews[0]} variant="horizontal" />
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {latestNews.slice(1, 4).map((item) => (
                  <NewsCard key={item.id} berita={item} variant="default" />
                ))}
              </div>
            </div>
          </div>

          {/* 3. Per Category Sections */}
          <div className="space-y-6">
            {kategoriList.map((kat) => {
              const items = getBeritaByKategori(kat.slug);
              return (
                <CategorySection
                  key={kat.id}
                  kategori={kat}
                  beritaList={items}
                />
              );
            })}
          </div>
        </div>

        {/* Right Column: Sticky Sidebar on Desktop */}
        <div className="lg:col-span-4 sticky top-28">
          <Sidebar beritaPopuler={populer} />
        </div>
      </div>
    </div>
  );
}
