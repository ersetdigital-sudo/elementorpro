/**
 * Services data — dipakai di Services section.
 * Keyword secondary + supporting muncul natural di sini.
 */
import {
  Download,
  Settings,
  Gauge,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Download,
    title: "Instalasi & Aktivasi Elementor Pro",
    description:
      "Pemasangan dan aktivasi plugin Elementor Pro di website WordPress Anda secara aman dan benar, siap digunakan.",
  },
  {
    icon: Settings,
    title: "Setup WordPress + Elementor",
    description:
      "Konfigurasi awal WordPress dan Elementor Pro agar optimal, ringan, dan mudah dikelola sendiri setelah selesai.",
  },
  {
    icon: Gauge,
    title: "Konfigurasi & Optimasi",
    description:
      "Pengaturan performa dan struktur halaman agar website cepat dimuat serta nyaman diakses dari perangkat mobile.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Page Elementor",
    description:
      "Pembuatan landing page profesional dengan Elementor Pro yang dirancang untuk menarik perhatian dan meningkatkan konversi.",
  },
];
