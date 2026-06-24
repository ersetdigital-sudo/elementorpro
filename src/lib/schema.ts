import { siteConfig } from "@/lib/site";
import { faq } from "@/lib/data/faq";

/**
 * JSON-LD Schema pusat.
 * WAJIB 5 schema: LocalBusiness, Service, FAQPage, BreadcrumbList, WebSite.
 * JANGAN tambah Review/AggregateRating/Product/Course/Recipe kecuali data nyata.
 *
 * FAQ schema HARUS sama persis dengan FAQ section (source: lib/data/faq.ts).
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description:
      "Jasa install Elementor Pro Indonesia untuk website WordPress, landing page, toko online, dan company profile. Proses cepat, aman, dan bergaransi.",
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
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
      telephone: `+${siteConfig.whatsappNumber}`,
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
    priceRange: "Estimasi via WhatsApp",
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/#service`,
    serviceType: "Jasa Install Elementor Pro",
    name: "Jasa Install Elementor Pro",
    description:
      "Jasa install Elementor Pro original untuk website WordPress, landing page, toko online, dan company profile di seluruh Indonesia.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paket Jasa Install Elementor Pro",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter",
          description: "Elementor Pro Original 1 Domain",
          priceCurrency: "IDR",
          price: "99000",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/#harga`,
        },
        {
          "@type": "Offer",
          name: "Multisite",
          description: "Elementor Pro Original 3 Domain",
          priceCurrency: "IDR",
          price: "149000",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/#harga`,
        },
        {
          "@type": "Offer",
          name: "Agency",
          description: "Elementor Pro Original 10 Domain",
          priceCurrency: "IDR",
          price: "349000",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/#harga`,
        },
      ],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description:
      "Jasa install Elementor Pro Indonesia untuk website WordPress, landing page, toko online, dan company profile.",
    email: siteConfig.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.whatsappNumber}`,
      contactType: "customer service",
      availableLanguage: "Indonesian",
      areaServed: "ID",
    },
    sameAs: [],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faqpage`,
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
    localBusinessSchema(),
    serviceSchema(),
    faqSchema(),
    breadcrumbSchema(),
    websiteSchema(),
  ];
}
