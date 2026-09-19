"use client";

import React, { useState } from "react";
import Link from "next/link";
import { kategoriList } from "@/lib/data/kategori";
import {
  Newspaper,
  Mail,
  Send,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Globe,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800 transition-colors">
      {/* Top Banner / Newsletter */}
      <div className="border-b border-zinc-800/80 bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/60 border border-red-800/60 px-3 py-1 rounded-full mb-3">
                <Mail className="w-3.5 h-3.5" /> Buletin Harian
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Dapatkan Rangkuman Berita Pilihan Setiap Pagi
              </h3>
              <p className="text-sm text-zinc-400 mt-2">
                Analisis mendalam, peristiwa nasional, dan kabar global terpenting langsung ke kotak masuk email Anda. Bebas spam, berhenti berlangganan kapan saja.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[400px]">
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-xl text-sm font-medium animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Terima kasih! Anda telah terdaftar dalam buletin harian kami.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Masukkan alamat email Anda..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 text-sm font-semibold bg-red-600 hover:bg-red-500 text-white rounded-xl flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all cursor-pointer"
                  >
                    <span>Daftar</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/30">
                <Newspaper className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 font-serif font-black text-2xl tracking-tight text-white">
                <span>NUSANTARA</span>
                <span className="text-red-500">KINI</span>
              </div>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Media berita digital independen menyajikan informasi aktual, berimbang, dan berwawasan untuk masyarakat Indonesia. Mengutamakan integritas jurnalistik dan kecepatan informasi.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Terverifikasi Dewan Pers
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
                <Globe className="w-4 h-4 text-blue-400" />
                Jaringan Nasional
              </span>
            </div>
          </div>

          {/* Kolom Kategori */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-l-2 border-red-500 pl-2">
              Kategori Berita
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {kategoriList.map((k) => (
                <li key={k.id}>
                  <Link
                    href={`/kategori/${k.slug}`}
                    className="hover:text-red-400 transition-colors inline-block py-0.5"
                  >
                    {k.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Navigasi Redaksi */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-l-2 border-red-500 pl-2">
              Perusahaan & Redaksi
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/tentang" className="hover:text-red-400 transition-colors inline-block py-0.5">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/tentang#susunan-redaksi" className="hover:text-red-400 transition-colors inline-block py-0.5">
                  Susunan Redaksi
                </Link>
              </li>
              <li>
                <Link href="/tentang#pedoman" className="hover:text-red-400 transition-colors inline-block py-0.5">
                  Pedoman Media Siber
                </Link>
              </li>
              <li>
                <Link href="/tentang#kontak" className="hover:text-red-400 transition-colors inline-block py-0.5">
                  Kontak & Pengaduan
                </Link>
              </li>
              <li>
                <Link href="/cari" className="hover:text-red-400 transition-colors inline-block py-0.5">
                  Indeks Berita
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom Legal & Media Sosial */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 border-l-2 border-red-500 pl-2">
              Ikuti Kami
            </h4>
            <p className="text-xs text-zinc-400 mb-3">
              Ikuti kabar kilat dan multimedia melalui jejaring sosial resmi:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
              >
                <span>Instagram</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
              >
                <span>X / Twitter</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
              >
                <span>YouTube</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
              >
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} NusantaraKini. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4">
            <Link href="/tentang" className="hover:text-zinc-300 transition-colors">
              Kebijakan Privasi
            </Link>
            <span>•</span>
            <Link href="/tentang" className="hover:text-zinc-300 transition-colors">
              Syarat & Ketentuan
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1 text-zinc-400">
              Dibuat dengan <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" /> untuk Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
