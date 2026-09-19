import { Kategori } from '../types';

export const kategoriList: Kategori[] = [
  {
    id: '1',
    slug: 'nasional',
    nama: 'Nasional',
    deskripsi: 'Kabar terkini seputar kebijakan politik, pemerintahan, hukum, dan peristiwa di seluruh penjuru Indonesia.',
    warna: {
      bg: 'bg-red-500',
      text: 'text-red-500',
      border: 'border-red-500',
      badgeBg: 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 dark:border-red-900/50',
      badgeText: 'text-red-700 dark:text-red-300',
    },
  },
  {
    id: '2',
    slug: 'internasional',
    nama: 'Internasional',
    deskripsi: 'Berita global dunia, hubungan diplomatik, geopolitik, dan dinamika isu internasional terhangat.',
    warna: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600',
      badgeBg: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-900/50',
      badgeText: 'text-blue-700 dark:text-blue-300',
    },
  },
  {
    id: '3',
    slug: 'ekonomi',
    nama: 'Ekonomi',
    deskripsi: 'Informasi pasar modal, perbankan, tren bisnis startup, investasi, inflasi, dan kebijakan fiskal.',
    warna: {
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      border: 'border-emerald-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900/50',
      badgeText: 'text-emerald-700 dark:text-emerald-300',
    },
  },
  {
    id: '4',
    slug: 'teknologi',
    nama: 'Teknologi',
    deskripsi: 'Inovasi kecerdasan buatan (AI), gadget terbaru, keamanan siber, dan perkembangan dunia digital.',
    warna: {
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      border: 'border-purple-600',
      badgeBg: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900/50',
      badgeText: 'text-purple-700 dark:text-purple-300',
    },
  },
  {
    id: '5',
    slug: 'olahraga',
    nama: 'Olahraga',
    deskripsi: 'Liputan sepak bola, bulu tangkis, balapan, esports, dan prestasi atlet tanah air maupun mancanegara.',
    warna: {
      bg: 'bg-amber-600',
      text: 'text-amber-600',
      border: 'border-amber-600',
      badgeBg: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900/50',
      badgeText: 'text-amber-700 dark:text-amber-300',
    },
  },
  {
    id: '6',
    slug: 'hiburan',
    nama: 'Hiburan',
    deskripsi: 'Dunia perfilman, musik, gaya hidup selebritas, ulasan seni, dan tren pop culture terkini.',
    warna: {
      bg: 'bg-pink-600',
      text: 'text-pink-600',
      border: 'border-pink-600',
      badgeBg: 'bg-pink-50 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300 dark:border-pink-900/50',
      badgeText: 'text-pink-700 dark:text-pink-300',
    },
  },
];

export function getKategoriBySlug(slug: string): Kategori | undefined {
  return kategoriList.find((k) => k.slug.toLowerCase() === slug.toLowerCase());
}
