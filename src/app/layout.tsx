import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BreakingNewsTicker from "@/components/layout/BreakingNewsTicker";
import { getBeritaTrending } from "@/lib/data/berita";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NusantaraKini — Portal Berita Terkini & Terpercaya",
  description:
    "Portal berita harian independen menyajikan informasi aktual, tajam, dan terpercaya seputar Nasional, Internasional, Ekonomi, Teknologi, Olahraga, dan Hiburan.",
  keywords: [
    "berita terkini",
    "berita indonesia",
    "berita hari ini",
    "nusantara kini",
    "portal berita",
    "teknologi",
    "ekonomi",
    "olahraga",
  ],
  authors: [{ name: "Redaksi NusantaraKini" }],
  openGraph: {
    title: "NusantaraKini — Portal Berita Terkini & Terpercaya",
    description: "Sajian berita harian terdepan, akurat, dan berimbang untuk seluruh penjuru Indonesia.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breakingNews = getBeritaTrending(6);

  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-red-600 selection:text-white">
        <ThemeProvider>
          <Navbar />
          <BreakingNewsTicker beritaItems={breakingNews} />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
