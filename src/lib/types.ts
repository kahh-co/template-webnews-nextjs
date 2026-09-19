export interface Kategori {
  id: string;
  slug: string;
  nama: string;
  deskripsi: string;
  warna: {
    bg: string;
    text: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
}

export interface Berita {
  id: string;
  slug: string;
  judul: string;
  excerpt: string;
  isi: string[];
  gambar: string;
  captionGambar?: string;
  kategori: string; // matches Kategori.slug
  penulis: {
    nama: string;
    avatar?: string;
    peran?: string;
  };
  tanggalTerbit: string; // ISO 8601: e.g. "2026-09-16T08:00:00Z"
  estimasiBaca: string; // e.g. "4 menit"
  populer: boolean;
  headline?: boolean;
  trending?: boolean;
  tags: string[];
}
