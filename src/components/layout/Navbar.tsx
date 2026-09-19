"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { kategoriList } from "@/lib/data/kategori";
import ThemeToggle from "../ui/ThemeToggle";
import {
  Search,
  Menu,
  X,
  Newspaper,
  TrendingUp,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      };
      setCurrentTime(new Intl.DateTimeFormat("id-ID", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/cari?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs transition-colors duration-300">
      {/* Top utility bar */}
      <div className="hidden md:block bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200/60 dark:border-zinc-800/60 py-1.5 text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-red-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {currentTime || "Rabu, 16 September 2026"}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300 font-medium">
              <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
              <span>Trending: #IKN #PialaAsia #SatelitNusantara #AllEngland</span>
            </div>
            <div className="h-3 w-[1px] bg-zinc-300 dark:bg-zinc-700" />
            <Link
              href="/tentang"
              className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              Tentang Redaksi
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <Newspaper className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-serif font-black text-xl sm:text-2xl tracking-tight text-zinc-950 dark:text-white">
                  NUSANTARA
                </span>
                <span className="font-serif font-black text-xl sm:text-2xl tracking-tight text-red-600 dark:text-red-500">
                  KINI
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-zinc-500 dark:text-zinc-400 -mt-1 flex items-center gap-1">
                Portal Berita Terpercaya <Sparkles className="w-2.5 h-2.5 text-amber-500 inline" />
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Cari berita terkini, topik, atau peristiwa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white dark:focus:bg-zinc-950 transition-all"
              />
              <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-zinc-400" />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 px-2.5 py-1 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-full transition-colors"
              >
                Cari
              </button>
            </form>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              type="button"
              className="md:hidden p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none"
              aria-label="Cari Berita"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dark/Light Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input Expansion */}
        {isSearchOpen && (
          <div className="md:hidden pb-3 pt-1">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                autoFocus
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-16 py-2 text-sm bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
              <button
                type="submit"
                className="absolute right-2 top-1.5 px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-md"
              >
                Cari
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Category Navigation Bar (Horizontal scrollable on mobile) */}
      <nav className="border-t border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/50 dark:bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-2 text-sm font-semibold tracking-wide">
            <Link
              href="/"
              className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                pathname === "/"
                  ? "bg-red-600 text-white shadow-xs"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/70 dark:hover:bg-zinc-800"
              }`}
            >
              Beranda
            </Link>

            {kategoriList.map((kat) => {
              const isActive = pathname === `/kategori/${kat.slug}`;
              return (
                <Link
                  key={kat.id}
                  href={`/kategori/${kat.slug}`}
                  className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-red-600 text-white shadow-xs"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/70 dark:hover:bg-zinc-800"
                  }`}
                >
                  {kat.nama}
                </Link>
              );
            })}

            <div className="h-4 w-[1px] bg-zinc-300 dark:bg-zinc-700 mx-1 shrink-0" />

            <Link
              href="/tentang"
              className={`px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                pathname === "/tentang"
                  ? "bg-red-600 text-white shadow-xs"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/70 dark:hover:bg-zinc-800"
              }`}
            >
              Tentang Redaksi
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 space-y-3 shadow-lg">
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider px-2">
            Kategori Berita
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600"
            >
              Beranda
            </Link>
            {kategoriList.map((kat) => (
              <Link
                key={kat.id}
                href={`/kategori/${kat.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600"
              >
                {kat.nama}
              </Link>
            ))}
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3 flex flex-col gap-2">
            <Link
              href="/cari"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Pencarian Berita Lengkap
            </Link>
            <Link
              href="/tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Tentang Redaksi & Pedoman Media
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
