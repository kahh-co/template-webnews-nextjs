"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getAllBerita, cariBerita } from "@/lib/data/berita";
import { kategoriList } from "@/lib/data/kategori";
import { Berita } from "@/lib/types";
import NewsCard from "@/components/ui/NewsCard";
import {
  Search,
  SlidersHorizontal,
  X,
  FileQuestion,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const initialKategori = searchParams.get("kategori") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedKategori, setSelectedKategori] = useState(initialKategori);
  const [results, setResults] = useState<Berita[]>([]);

  useEffect(() => {
    const q = searchParams.get("q") || "";
    const kat = searchParams.get("kategori") || "";
    setQuery(q);
    setSelectedKategori(kat);
    setResults(cariBerita(q, kat));
  }, [searchParams]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (selectedKategori) params.set("kategori", selectedKategori);
    router.push(`/cari?${params.toString()}`);
  };

  const handleKategoriFilter = (slug: string) => {
    const newKat = selectedKategori === slug ? "" : slug;
    setSelectedKategori(newKat);
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (newKat) params.set("kategori", newKat);
    router.push(`/cari?${params.toString()}`);
  };

  const clearFilter = () => {
    setQuery("");
    setSelectedKategori("");
    router.push("/cari");
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400">
          <Search className="w-3.5 h-3.5" />
          Pusat Indeks & Pencarian
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white">
          Cari Berita & Topik
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          Temukan artikel berita, opini, liputan khusus, dan arsip peristiwa terkini di seluruh Indonesia.
        </p>
      </div>

      {/* Search Input Box */}
      <form
        onSubmit={handleSearch}
        className="relative max-w-2xl mx-auto shadow-lg rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-2 flex items-center gap-2"
      >
        <Search className="w-5 h-5 text-zinc-400 ml-3 shrink-0" />
        <input
          type="text"
          autoFocus
          placeholder="Ketik kata kunci (contoh: IKN, AI, Olahraga, Saham)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 py-2 px-2 text-sm sm:text-base bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors shrink-0 shadow-sm cursor-pointer"
        >
          Cari
        </button>
      </form>

      {/* Category Filter Chips */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mr-1">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Filter Kategori:
        </span>
        <button
          type="button"
          onClick={() => handleKategoriFilter("")}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            selectedKategori === ""
              ? "bg-red-600 text-white shadow-xs"
              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          }`}
        >
          Semua
        </button>
        {kategoriList.map((kat) => (
          <button
            key={kat.id}
            type="button"
            onClick={() => handleKategoriFilter(kat.slug)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedKategori === kat.slug
                ? "bg-red-600 text-white shadow-xs"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            }`}
          >
            {kat.nama}
          </button>
        ))}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between pt-4 border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Ditemukan <span className="font-bold text-red-600">{results.length}</span> hasil
          {query && (
            <span>
              {" "}
              untuk kata kunci <span className="font-bold text-zinc-900 dark:text-white">&ldquo;{query}&rdquo;</span>
            </span>
          )}
          {selectedKategori && (
            <span>
              {" "}
              pada kategori <span className="font-bold uppercase text-zinc-900 dark:text-white">{selectedKategori}</span>
            </span>
          )}
        </div>

        {(query || selectedKategori) && (
          <button
            onClick={clearFilter}
            className="text-xs text-red-600 hover:underline font-semibold cursor-pointer"
          >
            Reset Filter
          </button>
        )}
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((berita) => (
            <NewsCard key={berita.id} berita={berita} variant="default" />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center">
            <FileQuestion className="w-8 h-8" />
          </div>
          <h3 className="font-serif font-bold text-xl text-zinc-900 dark:text-white">
            Tidak Ada Berita Ditemukan
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            Maaf, kami tidak menemukan berita yang cocok dengan kata kunci atau filter yang Anda pilih. Coba gunakan kata kunci umum lainnya.
          </p>
          <div className="pt-2">
            <button
              onClick={clearFilter}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors shadow-xs cursor-pointer"
            >
              <span>Lihat Semua Berita</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CariPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-zinc-500">
          Memuat data pencarian berita...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
