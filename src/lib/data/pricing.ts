/**
 * Pricing data — harga jasa instal Elementor Pro.
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
  detailHref?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Rp99.000",
    priceNote: "/tahun",
    description: "Untuk 1 website pribadi atau portofolio.",
    features: [
      "Elementor Pro Original 1 Domain",
      "Auto Update via Dashboard",
      "Garansi Aktivasi 30 Hari",
      "Support WhatsApp",
    ],
    cta: "Pesan Starter",
    detailHref: "/paket-starter",
  },
  {
    name: "Multisite",
    price: "Rp149.000",
    priceNote: "/tahun",
    description: "Untuk agency atau pemilik banyak website.",
    features: [
      "Elementor Pro Original 3 Domain",
      "Auto Update via Dashboard",
      "Garansi Aktivasi 30 Hari",
      "Prioritas Support WhatsApp",
    ],
    cta: "Pesan Multisite",
    highlighted: true,
    detailHref: "/paket-multisite",
  },
  {
    name: "Agency",
    price: "Rp349.000",
    priceNote: "/tahun",
    description: "Untuk developer atau agency dengan volume tinggi.",
    features: [
      "Elementor Pro Original 5 Domain",
      "Auto Update via Dashboard",
      "Garansi Aktivasi 30 Hari",
      "Support WhatsApp Dedicated",
    ],
    cta: "Pesan Agency",
    detailHref: "/paket-agency",
  },
];

export const checkIcon = Check;
