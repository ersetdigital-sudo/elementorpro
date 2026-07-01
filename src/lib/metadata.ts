import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Pusat metadata — pakai helper generateMetadata() di tiap halaman.
 * Jangan define metadata inline di banyak file.
 *
 * Title:  Primary Keyword + Benefit + Brand  (max 60 char)
 * Desc:   Keyword + Benefit + CTA           (120-155 char)
 */

const titleTemplate = `%s | ${siteConfig.name}`;

const defaultTitle =
  "Jasa Instal Elementor Pro - Terpercaya & Bergaransi | Elementor Pro ID";
const defaultDescription =
  "Jasa instal Elementor Pro original lisensi resmi, auto update, garansi 30 hari + bonus Essential Addons Pro. Hubungi via WhatsApp sekarang.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: defaultTitle, template: titleTemplate },
  description: defaultDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  verification: {
    google: [
      "jbiszvPIv_WYxLUeUQtOo9SS_FwNu1nEMH7Tp3WLhtE",
      "hGyyMWsTE5lwmNE_wMO7XIiqhoF81betSf-neC34BT0",
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Jasa Instal Elementor Pro - Terpercaya & Bergaransi | Elementor Pro ID",
    description:
      "Jasa instal Elementor Pro original lisensi resmi, auto update, garansi 30 hari + bonus Essential Addons Pro. Hubungi via WhatsApp sekarang.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jasa Instal Elementor Pro Original untuk Website WordPress Indonesia",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Instal Elementor Pro - Terpercaya & Bergaransi | Elementor Pro ID",
    description:
      "Jasa instal Elementor Pro original lisensi resmi, auto update, garansi 30 hari + bonus Essential Addons Pro. Hubungi via WhatsApp sekarang.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

/** Helper untuk generate metadata per-halaman. */
export function generateMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  return {
    ...baseMetadata,
    title: title ? { absolute: `${title} | ${siteConfig.name}` } : undefined,
    description: description ?? baseMetadata.description,
    alternates: { canonical: path },
    openGraph: {
      ...baseMetadata.openGraph,
      title: title
        ? `${title} | ${siteConfig.name}`
        : baseMetadata.openGraph?.title,
      description: description ?? baseMetadata.openGraph?.description,
      url: path,
    },
  };
}
