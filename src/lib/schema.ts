import { siteConfig } from "@/lib/site";
import { faq } from "@/lib/data/faq";

/**
 * JSON-LD Schema — Unified @graph structure.
 *
 * Entity hierarchy:
 * - NexaPlus (Organization, parent) → https://nexaplus.web.id/#organization
 * - Elementor Pro ID (Brand)        → https://jasaelementorpro.web.id/#brand
 * - WebSite                         → https://jasaelementorpro.web.id/#website
 * - WebPage (homepage)              → https://jasaelementorpro.web.id/#webpage
 * - Service                         → https://jasaelementorpro.web.id/#service
 * - BreadcrumbList                  → https://jasaelementorpro.web.id/#breadcrumb
 * - FAQPage                         → https://jasaelementorpro.web.id/#faqpage
 */

const NEXAPLUS_ID = "https://nexaplus.web.id/#organization";
const BRAND_ID = `${siteConfig.url}/#brand`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const WEBPAGE_ID = `${siteConfig.url}/#webpage`;
const SERVICE_ID = `${siteConfig.url}/#service`;
const BREADCRUMB_ID = `${siteConfig.url}/#breadcrumb`;
const FAQPAGE_ID = `${siteConfig.url}/#faqpage`;
const LOGO_ID = `${siteConfig.url}/#logo`;

/**
 * Homepage @graph — rendered in layout.tsx
 */
export function allSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        // 1. NexaPlus — Parent Organization
        {
          "@type": "Organization",
          "@id": NEXAPLUS_ID,
          name: "NexaPlus",
          url: "https://nexaplus.web.id",
          description:
            "Agensi digital yang berfokus pada pengembangan website, WordPress, landing page, dan solusi digital untuk bisnis.",
          sameAs: [
            "https://www.instagram.com/nexaplus.id/",
            "https://www.tiktok.com/@nexaplus.id",
            "https://nexaplus.web.id/",
          ],
        },

        // 2. Elementor Pro ID — Brand (sub-entity of NexaPlus)
        {
          "@type": "Brand",
          "@id": BRAND_ID,
          name: "Elementor Pro ID",
          url: siteConfig.url,
          description:
            "Layanan spesialis jasa install Elementor Pro original berlisensi resmi untuk website WordPress di seluruh Indonesia.",
          logo: { "@id": LOGO_ID },
          parentOrganization: { "@id": NEXAPLUS_ID },
          sameAs: [
            "https://www.instagram.com/nexaplus.id/",
            "https://www.tiktok.com/@nexaplus.id",
            `${siteConfig.url}/`,
          ],
        },

        // 3. Logo as ImageObject
        {
          "@type": "ImageObject",
          "@id": LOGO_ID,
          url: `${siteConfig.url}/logo.png`,
          contentUrl: `${siteConfig.url}/logo.png`,
          caption: "Logo Elementor Pro ID - Jasa Install Elementor Pro Indonesia",
          inLanguage: "id",
        },

        // 4. WebSite
        {
          "@type": "WebSite",
          "@id": WEBSITE_ID,
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          inLanguage: "id",
          publisher: { "@id": NEXAPLUS_ID },
          about: { "@id": SERVICE_ID },
        },

        // 5. WebPage (homepage)
        {
          "@type": "WebPage",
          "@id": WEBPAGE_ID,
          name: "Jasa Install Elementor Pro Terpercaya & Bergaransi",
          url: siteConfig.url,
          description:
            "Jasa install Elementor Pro original berlisensi resmi untuk WordPress. Proses cepat 1-3 jam, auto update, dan gratis bonus Essential Addons Pro.",
          inLanguage: "id",
          isPartOf: { "@id": WEBSITE_ID },
          about: { "@id": SERVICE_ID },
          breadcrumb: { "@id": BREADCRUMB_ID },
          publisher: { "@id": NEXAPLUS_ID },
        },

        // 6. Service — Jasa Install Elementor Pro Original
        {
          "@type": "Service",
          "@id": SERVICE_ID,
          name: "Jasa Install Elementor Pro Original",
          serviceType: "Instalasi Plugin WordPress Premium",
          description:
            "Jasa install Elementor Pro original berlisensi resmi untuk website WordPress di seluruh Indonesia. Instalasi selesai 1-3 jam, auto update, garansi aktivasi 30 hari, gratis bonus Essential Addons Pro. Dipercaya lebih dari 6.000 pelanggan.",
          provider: { "@id": NEXAPLUS_ID },
          brand: { "@id": BRAND_ID },
          areaServed: {
            "@type": "Country",
            name: "Indonesia",
          },
          audience: {
            "@type": "Audience",
            audienceType:
              "Pemilik website WordPress, UMKM, freelancer, web developer, dan digital agency di Indonesia",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: siteConfig.url,
            servicePhone: "+62-815-7305-9442",
            availableLanguage: {
              "@type": "Language",
              name: "Indonesian",
              alternateName: "id",
            },
          },
          offers: [
            {
              "@type": "Offer",
              name: "Paket Starter — 1 Domain",
              description:
                "Elementor Pro Original 1 domain, auto update, garansi aktivasi 30 hari, support WhatsApp.",
              price: "99000",
              priceCurrency: "IDR",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/paket-starter`,
            },
            {
              "@type": "Offer",
              name: "Paket Multisite — 3 Domain",
              description:
                "Elementor Pro Original 3 domain, auto update, garansi aktivasi 30 hari, prioritas support WhatsApp.",
              price: "149000",
              priceCurrency: "IDR",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/paket-multisite`,
            },
            {
              "@type": "Offer",
              name: "Paket Agency — 10 Domain",
              description:
                "Elementor Pro Original 10 domain, auto update, garansi aktivasi 30 hari, dedicated support WhatsApp.",
              price: "349000",
              priceCurrency: "IDR",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/paket-agency`,
            },
          ],
        },

        // 7. BreadcrumbList
        {
          "@type": "BreadcrumbList",
          "@id": BREADCRUMB_ID,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Beranda",
              item: siteConfig.url,
            },
          ],
        },

        // 8. FAQPage
        {
          "@type": "FAQPage",
          "@id": FAQPAGE_ID,
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
          isPartOf: { "@id": WEBPAGE_ID },
        },
      ],
    },
  ];
}

/**
 * Tentang Kami page @graph — used in /tentang-kami
 */
export function aboutPageSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        // Reference parent org
        {
          "@type": "Organization",
          "@id": NEXAPLUS_ID,
          name: "NexaPlus",
          url: "https://nexaplus.web.id",
          sameAs: [
            "https://www.instagram.com/nexaplus.id/",
            "https://www.tiktok.com/@nexaplus.id",
            "https://nexaplus.web.id/",
          ],
        },

        // AboutPage
        {
          "@type": "AboutPage",
          "@id": `${siteConfig.url}/#about`,
          name: "Tentang Elementor Pro ID",
          url: `${siteConfig.url}/tentang-kami`,
          description:
            "Elementor Pro ID adalah layanan spesialis lisensi Elementor Pro original dan dukungan teknis WordPress terpercaya di Indonesia, di bawah naungan NexaPlus.",
          inLanguage: "id",
          isPartOf: { "@id": WEBSITE_ID },
          publisher: { "@id": NEXAPLUS_ID },
          about: { "@id": BRAND_ID },
          mainEntity: { "@id": SERVICE_ID },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Beranda",
                item: siteConfig.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tentang Kami",
                item: `${siteConfig.url}/tentang-kami`,
              },
            ],
          },
        },

        // Brand reference
        {
          "@type": "Brand",
          "@id": BRAND_ID,
          name: "Elementor Pro ID",
          url: siteConfig.url,
          parentOrganization: { "@id": NEXAPLUS_ID },
        },

        // Service reference
        {
          "@type": "Service",
          "@id": SERVICE_ID,
          name: "Jasa Install Elementor Pro Original",
          provider: { "@id": NEXAPLUS_ID },
          brand: { "@id": BRAND_ID },
        },
      ],
    },
  ];
}
