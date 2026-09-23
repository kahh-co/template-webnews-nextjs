import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { beritaList, getBeritaBySlug, getBeritaTerkait, getBeritaPopuler } from "@/lib/data/berita";
import { getKategoriBySlug } from "@/lib/data/kategori";
import { formatTanggalLengkap } from "@/lib/utils";
import CategoryBadge from "@/components/ui/CategoryBadge";
import ShareButtons from "@/components/ui/ShareButtons";
import NewsCard from "@/components/ui/NewsCard";
import Sidebar from "@/components/sections/Sidebar";
import { Clock, Home, User, Tag, Sparkles, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return beritaList.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);

  if (!berita) {
    return {
      title: "Berita Tidak Ditemukan — NusantaraKini",
    };
  }

  return {
    title: `${berita.judul} — NusantaraKini`,
    description: berita.excerpt,
    openGraph: {
      title: berita.judul,
      description: berita.excerpt,
      images: [{ url: berita.gambar }],
    },
  };
}

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);

  if (!berita) {
    notFound();
  }

  const kategori = getKategoriBySlug(berita.kategori);
  const terkait = getBeritaTerkait(berita.slug, berita.kategori, 3);
  const populer = getBeritaPopuler(5);

  return (
    <div className="space-y-10">
      {/* 1. Breadcrumb Nav */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-red-600 flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          Beranda
        </Link>
        <span>/</span>
        <Link
          href={`/kategori/${berita.kategori}`}
          className="hover:text-red-600 uppercase font-semibold"
        >
          {kategori ? kategori.nama : berita.kategori}
        </Link>
        <span>/</span>
        <span className="text-zinc-400 truncate max-w-xs sm:max-w-md">
          {berita.judul}
        </span>
      </nav>

      {/* Main Content (8 cols) + Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Article Column */}
        <article className="lg:col-span-8 space-y-6">
          {/* Header Area */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CategoryBadge categorySlug={berita.kategori} size="md" />
              {berita.headline && (
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                  Headline
                </span>
              )}
            </div>

            <h1 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-950 leading-[1.18] tracking-tight">
              {berita.judul}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              {berita.excerpt}
            </p>

            {/* Author & Meta Box */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-zinc-200 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-zinc-200 shrink-0">
                  <Image
                    src={
                      berita.penulis.avatar ||
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    }
                    alt={berita.penulis.nama}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-zinc-900">
                    {berita.penulis.nama}
                  </div>
                  <div className="text-zinc-500 text-xs">
                    {berita.penulis.peran || "Jurnalis Redaksi"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-500 text-xs">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{formatTanggalLengkap(berita.tanggalTerbit)}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{berita.estimasiBaca} baca</span>
                </div>
              </div>
            </div>

            {/* Top Share Buttons */}
            <div className="flex items-center justify-between py-1">
              <ShareButtons title={berita.judul} />
            </div>
          </div>

          {/* Main Article Image */}
          <div className="space-y-2">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-zinc-100 shadow-md">
              <Image
                src={berita.gambar}
                alt={berita.judul}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            {berita.captionGambar && (
              <p className="text-xs text-zinc-500 italic px-1 text-center sm:text-left">
                Foto: {berita.captionGambar}
              </p>
            )}
          </div>

          {/* Article Body */}
          <div className="max-w-none text-zinc-800 text-base sm:text-lg leading-relaxed space-y-6 pt-2">
            {berita.isi.map((paragraf, index) => {
              // Highlight or blockquote mid-article
              if (index === 1) {
                return (
                  <React.Fragment key={index}>
                    <p className="leading-relaxed">{paragraf}</p>
                    <blockquote className="my-6 p-4 sm:p-6 bg-red-50/70 border-l-4 border-red-600 rounded-r-xl not-italic">
                      <p className="font-serif font-bold text-base sm:text-xl text-zinc-900 leading-snug m-0">
                        &ldquo;Informasi yang valid dan berimbang adalah kunci utama pembangunan masyarakat yang cerdas dan kritis.&rdquo;
                      </p>
                    </blockquote>
                  </React.Fragment>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {paragraf}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-zinc-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider">
              <Tag className="w-4 h-4" />
              Topik Terkait:
            </div>
            <div className="flex flex-wrap gap-2">
              {berita.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/cari?q=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 hover:bg-red-600 hover:text-white transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Share Bar */}
          <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-serif font-bold text-sm text-zinc-900">
              Suka artikel ini? Bagikan ke jejaring Anda!
            </span>
            <ShareButtons title={berita.judul} />
          </div>

          {/* Related Articles Section (3 cards) */}
          <div className="pt-10 border-t-2 border-zinc-200 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-xl text-zinc-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-600" />
                Berita Terkait Lainnya
              </h3>
              <Link
                href={`/kategori/${berita.kategori}`}
                className="text-xs sm:text-sm font-semibold text-red-600 hover:underline"
              >
                Lihat di Kategori {kategori?.nama} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {terkait.map((item) => (
                <NewsCard key={item.id} berita={item} variant="default" />
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-8">
          <Sidebar beritaPopuler={populer} tags={berita.tags} />
        </aside>
      </div>
    </div>
  );
}
