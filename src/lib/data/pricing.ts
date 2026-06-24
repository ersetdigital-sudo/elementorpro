/**
 * Pricing data.
 *
 * ⚠️ TRUST RULE: Harga harus data NYATA. Ini placeholder aman.
 * Ganti angka dengan data resmi sebelum production, atau pakai opsi
 * "Hubungi untuk harga" jika belum final.
 */
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

export interface PricingPlan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  icon?: LucideIcon;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Instalasi",
    price: "Hubungi Kami",
    priceNote: "estimasi via WhatsApp",
    description:
      "Cocok untuk Anda yang sudah punya WordPress dan hanya butuh pemasangan Elementor Pro.",
    features: [
      "Instalasi plugin Elementor Pro",
      "Aktivasi & verifikasi",
      "Cek kompatibilitas tema",
      "Garansi pemasangan",
    ],
    cta: "Pesan Instalasi",
  },
  {
    name: "Setup Lengkap",
    price: "Hubungi Kami",
    priceNote: "estimasi via WhatsApp",
    description:
      "Paket favorit: install Elementor Pro plus konfigurasi WordPress agar siap pakai.",
    features: [
      "Semua di paket Instalasi",
      "Setup & konfigurasi awal",
      "Optimasi performa dasar",
      "Pengaturan struktur halaman",
      "Bantuan via WhatsApp",
    ],
    cta: "Pesan Setup Lengkap",
    highlighted: true,
  },
  {
    name: "Landing Page Custom",
    price: "Hubungi Kami",
    priceNote: "estimasi via WhatsApp",
    description:
      "Install Elementor Pro sekaligus pembuatan landing page profesional sesuai brand Anda.",
    features: [
      "Semua di paket Setup Lengkap",
      "Desain landing page custom",
      "Responsif mobile & desktop",
      "Siap konversi & SEO dasar",
      "Revisi sesuai kesepakatan",
    ],
    cta: "Pesan Landing Page",
  },
];

export const checkIcon = Check;
