/**
 * FAQ data — SINGLE SOURCE OF TRUTH.
 * Dipakai oleh FAQ section (components/sections/FAQ.tsx) DAN FAQPage schema (lib/schema.ts).
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Berapa harga jasa install Elementor Pro?",
    answer:
      "Harga jasa install Elementor Pro: Rp99.000/tahun (1 domain), Rp149.000/tahun (3 domain), Rp349.000/tahun (5 domain). Semua paket sudah termasuk Elementor Pro original berlisensi resmi, auto update via dashboard, garansi aktivasi 30 hari, dan bonus Essential Addons Pro gratis.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer:
      "Instalasi Elementor Pro umumnya selesai dalam 1\u20133 jam. Setup lengkap membutuhkan sekitar satu hari kerja. Setelah selesai, website langsung siap digunakan.",
  },
  {
    question: "Apakah ada garansi?",
    answer:
      "Ya, tersedia garansi aktivasi 30 hari. Jika Elementor Pro tidak aktif atau bermasalah dalam 30 hari setelah pemasangan, kami akan memperbaikinya tanpa biaya tambahan.",
  },
  {
    question: "Apa perbedaan Elementor Free dan Pro?",
    answer:
      "Elementor Free hanya menyediakan fitur dasar untuk halaman sederhana. Elementor Pro menambahkan Theme Builder, Popup Builder, Form Builder, WooCommerce Builder, Motion Effects, Loop Builder, Dynamic Content, dan 85+ widget premium yang dibutuhkan untuk website jualan dan bisnis.",
  },
  {
    question: "Apakah harus punya hosting?",
    answer:
      "Ya, diperlukan hosting dan domain WordPress aktif sebelum proses instalasi dimulai. Jika belum punya, tim kami bisa membantu merekomendasikan hosting yang sesuai.",
  },
  {
    question: "Bagaimana cara memesan?",
    answer:
      "Hubungi kami via WhatsApp di nomor +62-815-7305-9442. Konsultasi awal gratis, pilih paket yang sesuai, berikan akses sementara ke WordPress Anda, dan instalasi akan selesai dalam 1\u20133 jam.",
  },
  {
    question: "Apakah support seluruh Indonesia?",
    answer:
      "Ya, layanan kami melayani seluruh wilayah Indonesia. Proses dilakukan secara remote via akses WordPress, sehingga lokasi pelanggan tidak menjadi kendala.",
  },
];
