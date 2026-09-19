# Product Requirements Document (PRD)
## Website Berita Harian — Next.js Template Modern
**Platform Target:** Antigravity  
**Framework:** Next.js 14 (App Router)  
**Tipe:** Template Website Berita Publik (tanpa CMS, data statis/mock)  
**Versi Dokumen:** 1.0  
**Tanggal:19 September 2026

---

## 1. OVERVIEW PRODUK

### 1.1 Deskripsi Singkat
Website berita harian berbasis Next.js dengan tampilan modern dan kekinian (dark/light mode, card layout, kategori berita) yang siap dijalankan sebagai template di platform Antigravity. Tidak memerlukan backend atau CMS — data berita menggunakan mock data statis yang mudah diganti dengan API nyata di masa depan.

### 1.2 Tujuan Produk
- Menyediakan template website berita yang siap pakai, modern, dan responsif
- Mudah dikustomisasi (ganti nama media, warna, logo, data berita)
- Performa tinggi karena memanfaatkan fitur SSG (Static Site Generation) Next.js
- Siap deploy di platform Antigravity tanpa konfigurasi tambahan yang rumit

### 1.3 Target Pengguna
- Developer yang butuh starter template website berita
- Media lokal/komunitas yang ingin punya website berita sederhana
- Mahasiswa yang belajar Next.js dengan studi kasus nyata

---

## 2. TECH STACK

| Kebutuhan | Teknologi |
|---|---|
| Framework | Next.js 14 (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS |
| Komponen UI | shadcn/ui |
| Icons | Lucide React |
| Font | Google Fonts (Inter + Playfair Display) |
| Data | Mock data (JSON statis, siap diganti API) |
| Deploy | Antigravity (export static / Node server) |

---

## 3. STRUKTUR HALAMAN

### 3.1 Daftar Halaman

| Halaman | URL | Deskripsi |
|---|---|---|
| Home / Beranda | `/` | Headline utama + berita terbaru per kategori |
| Halaman Kategori | `/kategori/[slug]` | Daftar berita berdasarkan kategori |
| Detail Berita | `/berita/[slug]` | Isi lengkap artikel berita |
| Halaman Pencarian | `/cari` | Hasil pencarian berita berdasarkan keyword |
| Halaman About | `/tentang` | Profil singkat media/redaksi |

### 3.2 Kategori Berita Default
- Nasional
- Internasional
- Olahraga
- Teknologi
- Hiburan
- Ekonomi

---

## 4. FITUR & KOMPONEN

### 4.1 Navbar / Header
- Logo media (teks + ikon, mudah diganti)
- Menu navigasi kategori (horizontal, scroll horizontal di mobile)
- Tombol toggle Dark/Light Mode
- Search bar (ikon kaca pembesar, expand saat diklik)
- Tanggal & jam real-time (update setiap menit)

### 4.2 Halaman Beranda (Home)
**Hero Section:**
- 1 berita headline utama (full width, gambar besar, judul besar, excerpt)
- Badge kategori + timestamp

**Grid Berita Terbaru:**
- Layout: 1 berita besar kiri + 3 berita kecil kanan (desktop)
- Layout: stack vertikal (mobile)
- Setiap card: gambar, kategori badge, judul, excerpt singkat, waktu terbit

**Berita Per Kategori:**
- Section terpisah per kategori (Nasional, Olahraga, Teknologi, dll)
- Tampil 4 card berita per kategori
- Tombol "Lihat Semua" yang menuju halaman kategori

**Breaking News Ticker:**
- Bar merah di bawah navbar
- Teks berjalan (marquee/animation) menampilkan judul berita terbaru

**Sidebar (desktop):**
- Berita Populer (top 5, dengan nomor urut)
- Tag/topik trending
- Widget iklan placeholder (kotak kosong dengan label "Iklan")

### 4.3 Card Berita
Komponen reusable yang dipakai di seluruh halaman:
- Gambar thumbnail (dengan fallback placeholder kalau gambar error)
- Badge kategori (warna berbeda tiap kategori)
- Judul berita (2 baris, truncate jika lebih)
- Excerpt (3 baris, truncate jika lebih)
- Nama penulis + waktu terbit (format "2 jam lalu", "kemarin", dst)
- Hover effect: scale up tipis + shadow

### 4.4 Halaman Detail Berita
- Judul artikel (besar, font serif — Playfair Display)
- Meta: kategori, penulis, tanggal, estimasi waktu baca
- Gambar utama (full width + caption)
- Isi artikel (typography yang nyaman dibaca, line-height lega)
- Share button: WhatsApp, Twitter/X, Copy Link
- Berita terkait (3 card di bawah artikel, kategori sama)
- Breadcrumb navigasi (Home > Kategori > Judul)

### 4.5 Halaman Kategori
- Header kategori (nama + deskripsi singkat + jumlah artikel)
- Grid berita: 3 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile)
- Pagination sederhana (Previous / Next)

### 4.6 Halaman Pencarian
- Input search bar (autofocus saat halaman dibuka)
- Tampilkan hasil pencarian berdasarkan judul & excerpt
- Tampilkan "X hasil ditemukan untuk 'keyword'"
- State kosong: ilustrasi + teks "Tidak ada berita ditemukan"

### 4.7 Footer
- Logo + tagline media
- Kolom link navigasi (Kategori, Tentang, Kontak, Kebijakan Privasi)
- Social media icons (Instagram, Twitter/X, YouTube, TikTok)
- Copyright text

---

## 5. DESAIN & UI

### 5.1 Gaya Visual
- **Tone:** Modern, bersih, profesional — referensi visual: The Verge, Detik.com versi baru, Reuters
- **Typography:** 
  - Heading: Playfair Display (serif, kesan editorial/berita)
  - Body: Inter (sans-serif, mudah dibaca)
- **Warna Default (Light Mode):**
  - Primary: `#DC2626` (merah — identik media berita)
  - Background: `#FFFFFF`
  - Text: `#111827`
  - Card bg: `#F9FAFB`
  - Border: `#E5E7EB`
- **Warna Dark Mode:**
  - Background: `#0F172A`
  - Card bg: `#1E293B`
  - Text: `#F1F5F9`
  - Border: `#334155`

### 5.2 Responsif
| Breakpoint | Layout |
|---|---|
| Mobile (< 640px) | 1 kolom, navbar collapse jadi hamburger menu |
| Tablet (640-1024px) | 2 kolom grid, sidebar tersembunyi |
| Desktop (> 1024px) | 3 kolom grid + sidebar kanan |

### 5.3 Animasi & Transisi
- Page transition: fade in halus saat navigasi antar halaman
- Card hover: `transform scale-105` + `shadow-lg` — transisi 200ms
- Breaking news ticker: CSS animation marquee, bisa di-pause saat hover
- Dark mode toggle: transisi warna 300ms smooth

---

## 6. STRUKTUR FOLDER PROJECT

```
klub-berita/
├── app/
│   ├── layout.tsx              # Root layout (navbar + footer)
│   ├── page.tsx                # Halaman Home
│   ├── tentang/
│   │   └── page.tsx            # Halaman About
│   ├── cari/
│   │   └── page.tsx            # Halaman Pencarian
│   ├── kategori/
│   │   └── [slug]/
│   │       └── page.tsx        # Halaman Kategori Dinamis
│   └── berita/
│       └── [slug]/
│           └── page.tsx        # Halaman Detail Berita
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── BreakingNewsTicker.tsx
│   ├── ui/
│   │   ├── NewsCard.tsx        # Card berita (reusable)
│   │   ├── CategoryBadge.tsx   # Badge warna per kategori
│   │   ├── SearchBar.tsx
│   │   └── ThemeToggle.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── LatestNews.tsx
│       ├── CategorySection.tsx
│       └── Sidebar.tsx
├── lib/
│   ├── data/
│   │   ├── berita.ts           # Mock data semua artikel
│   │   └── kategori.ts         # Data kategori
│   └── utils.ts                # Helper functions (format tanggal, slug, dll)
├── public/
│   ├── images/                 # Gambar placeholder berita
│   └── logo.svg
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 7. DATA MOCK (Contoh Struktur)

```typescript
// lib/data/berita.ts
export interface Berita {
  id: string;
  slug: string;
  judul: string;
  excerpt: string;
  isi: string;
  gambar: string;
  kategori: string;
  penulis: string;
  tanggalTerbit: string;  // ISO 8601: "2026-09-13T08:00:00Z"
  populer: boolean;
  tags: string[];
}

export const beritaList: Berita[] = [
  {
    id: "1",
    slug: "timnas-indonesia-lolos-piala-dunia",
    judul: "Timnas Indonesia Resmi Lolos ke Piala Dunia 2030",
    excerpt: "Sebuah sejarah baru tercipta saat Timnas Indonesia...",
    isi: "Isi artikel lengkap di sini...",
    gambar: "/images/berita-1.jpg",
    kategori: "olahraga",
    penulis: "Redaksi",
    tanggalTerbit: "2026-09-13T07:00:00Z",
    populer: true,
    tags: ["timnas", "piala-dunia", "sepakbola"]
  },
  // ... tambah minimal 20 data berita mock
]
```

---

## 8. KONFIGURASI ANTIGRAVITY

### 8.1 Mode Deploy yang Direkomendasikan
Karena data masih statis (mock), gunakan **Static Export** Next.js:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',         // Static export untuk Antigravity
  trailingSlash: true,      // Penting untuk routing static
  images: {
    unoptimized: true       // Karena static export tidak support next/image optimization
  }
}
module.exports = nextConfig
```

### 8.2 Build Command untuk Antigravity
```
Build Command  : npm run build
Output Directory: out
Install Command : npm install
Node Version   : 18.x atau 20.x
```

### 8.3 Environment Variables (opsional, untuk pengembangan lanjutan)
```
NEXT_PUBLIC_SITE_NAME=NamaMedia
NEXT_PUBLIC_SITE_URL=https://domain-kamu.com
NEXT_PUBLIC_API_URL=         # Kosongkan dulu, isi kalau sudah pakai API
```

---

## 9. PERINTAH SETUP AWAL (Langkah Menjalankan)

```bash
# 1. Buat project Next.js baru
npx create-next-app@latest klub-berita --typescript --tailwind --app --src-dir=false

# 2. Masuk ke folder project
cd klub-berita

# 3. Install dependensi tambahan
npm install lucide-react class-variance-authority clsx tailwind-merge

# 4. Install shadcn/ui
npx shadcn@latest init

# 5. Install komponen shadcn yang dipakai
npx shadcn@latest add button badge card separator

# 6. Jalankan di localhost
npm run dev
# Buka http://localhost:3000

# 7. Build untuk production / Antigravity
npm run build
```

---

## 10. PRIORITAS PENGERJAAN (Urutan Development)

| Fase | Yang Dikerjakan | Estimasi |
|---|---|---|
| **Fase 1** | Setup project + mock data + layout (Navbar, Footer) | Hari 1 |
| **Fase 2** | Halaman Home (Hero + Grid berita + Breaking ticker) | Hari 2 |
| **Fase 3** | Halaman Detail Berita + Halaman Kategori | Hari 3 |
| **Fase 4** | Halaman Pencarian + Dark Mode + Responsif | Hari 4 |
| **Fase 5** | Polish UI, animasi, testing, build & deploy Antigravity | Hari 5 |

---

## 11. KRITERIA SELESAI (Definition of Done)

- [ ] Semua 5 halaman bisa diakses dan tidak ada error
- [ ] Dark mode dan light mode berfungsi dengan baik
- [ ] Tampilan responsif di mobile, tablet, dan desktop
- [ ] Breaking news ticker berjalan smooth
- [ ] Halaman pencarian menampilkan hasil yang relevan
- [ ] Build `npm run build` tidak ada error
- [ ] Berhasil di-deploy dan diakses di platform Antigravity
- [ ] Gambar placeholder tampil dengan baik (tidak broken)
- [ ] Waktu load halaman Home < 3 detik (localhost)

---

## 12. FUTURE DEVELOPMENT (Tidak Wajib di Template Ini)

- Integrasi dengan headless CMS (Sanity / Strapi / Contentful)
- Komentar pembaca (Disqus / sistem komentar sendiri)
- Newsletter subscription form
- Google Analytics / tracking
- AMP (Accelerated Mobile Pages) untuk SEO berita
- Sistem tag dan filter berita lanjutan
- Infinite scroll menggantikan pagination

---

*Dokumen ini dibuat sebagai panduan pengembangan template. Semua nama, data berita, dan konten yang digunakan bersifat fiktif untuk keperluan demonstrasi.*
