import { siteConfig } from "@/lib/site";
import { faq } from "@/lib/data/faq";

/**
 * JSON-LD Schema pusat — optimized for GEO (AI Search visibility).
 * Schemas: Organization, Service+Offer, FAQPage, LocalBusiness, BreadcrumbList, WebSite.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elementor Pro ID",
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-815-7305-9442",
      contactType: "customer support",
      availableLanguage: "Indonesian",
    },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa Install Elementor Pro Original",
    description:
      "Jasa install Elementor Pro original berlisensi resmi untuk website WordPress di seluruh Indonesia. Instalasi selesai 1-3 jam, auto update, garansi aktivasi 30 hari.",
    provider: {
      "@type": "Organization",
      name: "Elementor Pro ID",
      url: `${siteConfig.url}/`,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Paket Starter \u2014 1 Domain",
        description:
          "Elementor Pro Original 1 domain, auto update, garansi aktivasi 30 hari, support WhatsApp.",
        price: "99000",
        priceCurrency: "IDR",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "Paket Multisite \u2014 3 Domain",
        description:
          "Elementor Pro Original 3 domain, auto update, garansi aktivasi 30 hari, prioritas support WhatsApp.",
        price: "149000",
        priceCurrency: "IDR",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "Paket Agency \u2014 10 Domain",
        description:
          "Elementor Pro Original 10 domain, auto update, garansi aktivasi 30 hari, dedicated support WhatsApp.",
        price: "349000",
        priceCurrency: "IDR",
        priceValidUntil: "2026-12-31",
      },
    ],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description:
      "Jasa install Elementor Pro Indonesia untuk website WordPress, landing page, toko online, dan company profile. Proses cepat, aman, dan bergaransi.",
    url: siteConfig.url,
    telephone: "+62-815-7305-9442",
    email: siteConfig.email,
    image: `${siteConfig.url}/og.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Indonesia",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-815-7305-9442",
      contactType: "customer service",
      availableLanguage: "Indonesian",
      areaServed: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    priceRange: "Rp99.000 - Rp349.000",
  };
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/#breadcrumblist`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteConfig.url,
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "id-ID",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/** Render semua schema sebagai <script> tag (inject di layout). */
export function allSchemas() {
  return [
    organizationSchema(),
    serviceSchema(),
    faqSchema(),
    localBusinessSchema(),
    breadcrumbSchema(),
    websiteSchema(),
  ];
}
