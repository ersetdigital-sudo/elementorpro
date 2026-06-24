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
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
    email: siteConfig.email,
    image: `${siteConfig.url}/og.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
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
    priceRange: "$$",
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/#service`,
    serviceType: "Jasa Install Elementor Pro",
    name: "Jasa Install Elementor Pro",
    description: siteConfig.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/#pricing`,
    },
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
    localBusinessSchema(),
    serviceSchema(),
    faqSchema(),
    breadcrumbSchema(),
    websiteSchema(),
  ];
}
