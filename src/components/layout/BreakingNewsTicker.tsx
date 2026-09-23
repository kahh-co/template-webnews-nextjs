"use client";

import React from "react";
import Link from "next/link";
import { Berita } from "@/lib/types";
import { Flame, ChevronRight } from "lucide-react";

interface BreakingNewsTickerProps {
  beritaItems: Berita[];
}

export default function BreakingNewsTicker({ beritaItems }: BreakingNewsTickerProps) {
  if (!beritaItems || beritaItems.length === 0) return null;

  return (
    <div className="bg-red-700 text-white text-xs font-medium overflow-hidden border-b border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-10">
        {/* Label Flash */}
        <div className="shrink-0 flex items-center gap-1.5 bg-red-800/80 px-3 py-1 rounded-full text-white font-bold tracking-wide uppercase text-[11px] mr-3 shadow-xs">
          <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="hidden sm:inline">BREAKING NEWS</span>
          <span className="sm:hidden">TERKINI</span>
        </div>

        {/* Marquee Ticker */}
        <div className="flex-1 overflow-hidden relative group">
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-10">
            {beritaItems.concat(beritaItems).map((berita, idx) => (
              <Link
                key={`${berita.id}-${idx}`}
                href={`/berita/${berita.slug}`}
                className="inline-flex items-center gap-2 hover:underline hover:text-amber-200 transition-colors"
              >
                <span className="text-amber-300">•</span>
                <span className="font-semibold text-white truncate max-w-sm sm:max-w-md md:max-w-none">
                  {berita.judul}
                </span>
                <ChevronRight className="w-3 h-3 text-red-300 inline" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
