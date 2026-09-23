import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Newspaper,
  ShieldCheck,
  Award,
  Users,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Home,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Redaksi & Pedoman Media — NusantaraKini",
  description:
    "Profil resmi portal berita NusantaraKini, susunan redaksi, visi dan misi, pedoman media siber, serta kontak redaksi.",
};

const redaksiTeam = [
  {
    nama: "Prof. Dr. Hendra Gunawan",
    peran: "Pemimpin Redaksi / Penanggung Jawab",
    bio: "Wartawan senior dengan pengalaman 25 tahun di jurnalisme investigasi dan kebijakan publik.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
  },
  {
    nama: "Siti Rahmawati, M.I.Kom",
    peran: "Redaktur Pelaksana",
    bio: "Spesialis liputan nasional, hukum tata negara, dan dinamika pemindahan ibu kota baru.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  },
  {
    nama: "Bima Arya Prasetya",
    peran: "Redaktur Teknologi & Inovasi",
    bio: "Pengamat kecerdasan buatan, keamanan siber, dan perkembangan ekosistem startup digital.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    nama: "Doni Hermawan",
    peran: "Kepala Kompartemen Olahraga",
    bio: "Meliput sepak bola tanah air, bulu tangkis dunia, dan gelaran pesta olahraga multievent.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    nama: "Clara Anindya",
    peran: "Redaktur Seni & Pop Culture",
    bio: "Kritikus film dan pegiat kebudayaan Nusantara yang aktif meliput festival seni rupa dan musik.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    nama: "Hendrik Wijaya, CFA",
    peran: "Analis Pasar Modal & Ekonomi",
    bio: "Mantan analis riset perbankan yang kini mendedikasikan tulisan untuk literasi finansial publik.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
];

export default function TentangPage() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500">
        <Link href="/" className="hover:text-red-600 flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          Beranda
        </Link>
        <span>/</span>
        <span className="font-semibold text-zinc-900">
          Tentang Redaksi
        </span>
      </nav>

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white p-8 sm:p-12 border border-zinc-800 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-xs">
            <Newspaper className="w-3.5 h-3.5" />
            Profil Media
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Menyuarakan Kebenaran, Mengabarkan Masa Depan
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            NusantaraKini adalah media informasi digital independen yang berdedikasi menyajikan jurnalisme yang jernih, berimbang, dan berdaya guna bagi kemajuan peradaban Indonesia.
          </p>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-white border border-zinc-200 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-2xl text-zinc-900">
            Visi Kami
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Menjadi platform berita dan rujukan analitis digital terdepan di Asia Tenggara yang menjunjung tinggi kebenaran, mencerdaskan kehidupan bangsa, serta mempererat persatuan masyarakat dalam bingkai kebinekaan.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-zinc-200 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-2xl text-zinc-900">
            Misi Redaksi
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-zinc-600">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-red-600 mt-1 shrink-0" />
              <span>Menghadirkan liputan komprehensif yang cepat tanpa mengorbankan akurasi dan verifikasi data.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-red-600 mt-1 shrink-0" />
              <span>Menjadi ruang deliberasi publik yang inklusif untuk berbagai sudut pandang konstruktif.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-red-600 mt-1 shrink-0" />
              <span>Memanfaatkan teknologi kecerdasan buatan dan visual data untuk memudahkan pemahaman berita kompleks.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Susunan Redaksi */}
      <section id="susunan-redaksi" className="space-y-6 pt-4">
        <div className="border-b-2 border-red-600 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
            <Users className="w-4 h-4" />
            Struktur Organisasi
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-zinc-900 mt-1">
            Susunan Dewan Redaksi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {redaksiTeam.map((member) => (
            <div
              key={member.nama}
              className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3 text-center sm:text-left hover:border-red-500/40 transition-colors shadow-xs"
            >
              <div className="relative w-20 h-20 mx-auto sm:mx-0 rounded-full overflow-hidden bg-zinc-100">
                <Image
                  src={member.avatar}
                  alt={member.nama}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-zinc-900">
                  {member.nama}
                </h3>
                <p className="text-xs font-semibold text-red-600">
                  {member.peran}
                </p>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pedoman Pemberitaan Media Siber */}
      <section id="pedoman" className="space-y-6 p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
        <h2 className="font-serif font-bold text-2xl text-zinc-900">
          Pedoman Pemberitaan Media Siber (PPMS)
        </h2>
        <div className="prose prose-sm text-zinc-600 space-y-4 max-w-none">
          <p>
            Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi oleh Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB.
          </p>
          <p>
            NusantaraKini tunduk secara penuh pada Kode Etik Jurnalistik (KEJ) dan Pedoman Pemberitaan Media Siber yang ditetapkan oleh Dewan Pers Republik Indonesia:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Verifikasi dan Keberimbangan Berita:</strong> Setiap berita harus melalui proses klarifikasi dan uji silang sumber terpercaya.</li>
            <li><strong>Hak Jawab dan Hak Koreksi:</strong> Kami melayani hak jawab dan ralat berita secara proporsional sesegera mungkin jika ditemukan ketidakakuratan data faktual.</li>
            <li><strong>Perlindungan Privasi & Korban:</strong> Tidak mempublikasikan identitas anak yang berhadapan dengan hukum atau korban kejahatan asusila.</li>
            <li><strong>Pemberitahuan Konten Buatan Pengguna (UGC):</strong> Moderator redaksi berhak menyaring komentar atau opini publik yang mengandung unsur ujaran kebencian (SARA) atau hoaks.</li>
          </ul>
        </div>
      </section>

      {/* Kontak & Alamat Kantor */}
      <section id="kontak" className="space-y-6 pt-4">
        <div className="border-b-2 border-red-600 pb-3">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-zinc-900">
            Hubungi Redaksi & Layanan Pengaduan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-2">
            <MapPin className="w-5 h-5 text-red-600" />
            <h4 className="font-serif font-bold text-base text-zinc-900">
              Kantor Pusat Redaksi
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Gedung Pers Nusantara Lt. 8, Jl. Medan Merdeka Barat No. 12, Jakarta Pusat 10110, Indonesia
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-2">
            <Mail className="w-5 h-5 text-red-600" />
            <h4 className="font-serif font-bold text-base text-zinc-900">
              Surat Elektronik (Email)
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Redaksi: <span className="text-red-600 font-semibold">redaksi@nusantarakini.id</span><br />
              Pengaduan & Hak Jawab: <span className="text-red-600 font-semibold">ombudsman@nusantarakini.id</span><br />
              Iklan & Kerja Sama: <span className="text-red-600 font-semibold">iklan@nusantarakini.id</span>
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-2">
            <Phone className="w-5 h-5 text-red-600" />
            <h4 className="font-serif font-bold text-base text-zinc-900">
              Telepon & WhatsApp Media
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Hotline Redaksi: (021) 384-9000<br />
              WhatsApp Pengaduan: +62 812-8900-9900<br />
              Jam Operasional: 24 Jam (Liputan Khusus)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
