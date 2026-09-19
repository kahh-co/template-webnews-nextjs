import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { kategoriList, getKategoriBySlug } from "@/lib/data/kategori";
import { getBeritaByKategori } from "@/lib/data/berita";
import NewsCard from "@/components/ui/NewsCard";
import Sidebar from "@/components/sections/Sidebar";
import { getBeritaPopuler } from "@/lib/data/berita";
import { ArrowLeft, ChevronLeft, ChevronRight, Layers, Home } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return kategoriList.map((k) => ({
    slug: k.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kategori = getKategoriBySlug(slug);

  if (!kategori) {
    return {
      title: "Kategori Tidak Ditemukan — NusantaraKini",
    };
  }

  return {
    title: `Berita ${kategori.nama} Terkini — NusantaraKini`,
    description: kategori.deskripsi,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kategori = getKategoriBySlug(slug);

  if (!kategori) {
    notFound();
  }

  const berita = getBeritaByKategori(slug);
  const populer = getBeritaPopuler(5);

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:text-red-600 flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          Beranda
        </Link>
        <span>/</span>
        <span className="text-zinc-400">Kategori</span>
        <span>/</span>
        <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
          {kategori.nama}
        </span>
      </nav>

      {/* Category Header Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-6 sm:p-10 border border-zinc-800 shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            Kategori Berita
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            Kabar {kategori.nama}
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {kategori.deskripsi}
          </p>

          <div className="pt-2 text-xs text-zinc-400 font-medium">
            Menampilkan <span className="text-white font-bold">{berita.length}</span> artikel berita terverifikasi
          </div>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
      </div>

      {/* Main Grid + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: News Grid */}
        <div className="lg:col-span-8 space-y-6">
          {berita.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {berita.map((item) => (
                <NewsCard key={item.id} berita={item} variant="default" />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <p className="text-zinc-500">Belum ada berita dalam kategori ini.</p>
              <Link
                href="/"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
              </Link>
            </div>
          )}

          {/* Pagination mockup */}
          {berita.length > 0 && (
            <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <button
                disabled
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Sebelumnya
              </button>

              <div className="flex items-center gap-1 text-xs font-semibold">
                <span className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-xs">
                  1
                </span>
              </div>

              <button
                disabled
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed"
              >
                Selanjutnya
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 sticky top-28">
          <Sidebar beritaPopuler={populer} />
        </div>
      </div>
    </div>
  );
}
