/**
 * Pricing data — harga jasa install Elementor Pro.
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
  },
  {
    name: "Agency",
    price: "Rp349.000",
    priceNote: "/tahun",
    description: "Untuk developer atau agency dengan volume tinggi.",
    features: [
      "Elementor Pro Original 10 Domain",
      "Auto Update via Dashboard",
      "Garansi Aktivasi 30 Hari",
      "Support WhatsApp Dedicated",
    ],
    cta: "Pesan Agency",
  },
];

export const checkIcon = Check;
