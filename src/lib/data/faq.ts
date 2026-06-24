/**
 * FAQ data — SINGLE SOURCE OF TRUTH.
 * Dipakai oleh FAQ section (components/sections/FAQ.tsx) DAN FAQPage schema (lib/schema.ts).
 *
 * Aturan (spec):
 * - 8 pertanyaan wajib
 * - Jawaban 40-80 kata, jawab langsung di kalimat pertama
 * - Tidak boleh beda antara section & schema
 * - Data (harga/waktu) HARUS nyata — ganti placeholder sebelum production
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Berapa harga jasa install Elementor Pro?",
    answer:
      "Harga jasa install Elementor Pro bervariasi tergantung cakupan pekerjaan: instalasi saja, setup lengkap, atau pembuatan landing page. Kami memberikan estimasi transparan setelah konsultasi singkat, tanpa biaya tersembunyi. Hubungi kami via WhatsApp untuk mendapatkan penawaran sesuai kebutuhan website WordPress Anda.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer:
      "Instalasi dan aktivasi Elementor Pro umumnya selesai dalam 1 sampai 3 jam setelah akses diberikan. Untuk setup WordPress lengkap beserta konfigurasi, biasanya memakan waktu 1 hari kerja. Pengerjaan landing page custom membutuhkan 2 sampai 7 hari tergantung tingkat kerumitan desain yang Anda inginkan.",
  },
  {
    question: "Apakah ada garansi?",
    answer:
      "Ya, kami memberikan garansi aktif pemasangan selama periode tertentu. Jika terjadi kendala teknis akibat proses instalasi, kami akan memperbaikinya tanpa biaya tambahan. Garansi mencakup Elementor Pro tetap aktif dan berfungsi normal di website Anda. Detail periode garansi dijelaskan saat pemesanan.",
  },
  {
    question: "Apa perbedaan Elementor Free dan Pro?",
    answer:
      "Elementor Free adalah versi dasar dengan fitur desain terbatas dan tanpa widget premium. Elementor Pro membuka akses penuh ke ratusan widget lanjutan, theme builder, popup builder, form builder, dan WooCommerce builder. Versi Pro cocok untuk membuat website profesional secara visual tanpa menulis kode.",
  },
  {
    question: "Apakah harus punya hosting?",
    answer:
      "Ya, Anda memerlukan hosting aktif dan domain yang sudah terhubung untuk menginstall Elementor Pro. Jika belum punya, kami dapat membantu merekomendasikan hosting yang sesuai kebutuhan dan budget Anda. Kami juga bisa membantu proses pembelian dan setup hosting sebagai bagian dari layanan.",
  },
  {
    question: "Apakah bisa request landing page?",
    answer:
      "Bisa. Kami melayani pembuatan landing page custom menggunakan Elementor Pro sesuai brand, tujuan, dan target audiens Anda. Baik untuk promosi produk, penawaran jasa, maupun generasi leads. Desain dibuat responsif, cepat, dan siap konversi. Diskusikan referensi atau kebutuhan Anda via WhatsApp.",
  },
  {
    question: "Bagaimana cara memesan?",
    answer:
      "Cara memesan sangat mudah. Pertama, hubungi kami via WhatsApp untuk konsultasi gratis. Kedua, jelaskan kebutuhan website Anda. Ketiga, kami kirim penawaran dan estimasi waktu. Setelah disepakati, berikan akses sementara ke WordPress Anda, lalu pengerjaan dimulai sesuai jadwal yang ditentukan.",
  },
  {
    question: "Apakah support seluruh Indonesia?",
    answer:
      "Ya, kami melayani pengguna WordPress di seluruh Indonesia. Karena seluruh proses berbasis online, Anda bisa memesan dari Jakarta, Bandung, Surabaya, Medan, Makassar, maupun kota lain. Komunikasi dilakukan melalui WhatsApp dan dukungan teknis tersedia setelah pengerjaan selesai.",
  },
];
