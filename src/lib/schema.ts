import { siteConfig } from "@/lib/site";
import { faq } from "@/lib/data/faq";

/**
 * JSON-LD Schema — Unified @graph structure (Entity SEO optimized).
 *
 * Entity hierarchy:
 * - Elementor Pro ID (Organization + Brand) → https://jasaelementorpro.web.id/#brand
 * - WebSite (publisher: Elementor Pro ID) → https://jasaelementorpro.web.id/#website
 * - WebPage (mainEntity: Service) → https://jasaelementorpro.web.id/#webpage
 * - Service (provider: Elementor Pro ID, brand: Elementor Pro ID) → https://jasaelementorpro.web.id/#service
 * - FAQPage → https://jasaelementorpro.web.id/#faqpage
 * - BreadcrumbList → https://jasaelementorpro.web.id/#breadcrumb
 * - ImageObject (logo, shared) → https://jasaelementorpro.web.id/#logo
 */

export const BRAND_ID = `${siteConfig.url}/#brand`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const WEBPAGE_ID = `${siteConfig.url}/#webpage`;
const SERVICE_ID = `${siteConfig.url}/#service`;
const BREADCRUMB_ID = `${siteConfig.url}/#breadcrumb`;
const FAQPAGE_ID = `${siteConfig.url}/#faqpage`;
const LOGO_ID = `${siteConfig.url}/#logo`;

const BRAND_DESCRIPTION =
  "Layanan spesialis jasa instal Elementor Pro original berlisensi resmi untuk website WordPress di seluruh Indonesia.";

/** Inline Organization object — dipakai untuk publisher/provider tanpa @id reference. */
function orgInline() {
  return {
    "@type": "Organization",
    name: "Elementor Pro ID",
    url: siteConfig.url,
    description: BRAND_DESCRIPTION,
    logo: { "@id": LOGO_ID },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-815-7305-9442",
      contactType: "customer support",
      availableLanguage: "Indonesian",
      areaServed: "ID",
    },
  };
}

/**
 * Homepage @graph — rendered in layout.tsx
 */
export function allSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        // 1. Elementor Pro ID — Organization + Brand (site entity)
        {
          "@type": ["Organization", "Brand"],
          "@id": BRAND_ID,
          name: "Elementor Pro ID",
          url: siteConfig.url,
          description: BRAND_DESCRIPTION,
          logo: { "@id": LOGO_ID },
          sameAs: [
            `https://wa.me/${siteConfig.whatsappNumber}`,
            `${siteConfig.url}/`,
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+62-815-7305-9442`,
            contactType: "customer support",
            availableLanguage: "Indonesian",
            areaServed: "ID",
          },
        },

        // 2. Logo — single ImageObject shared across entities
        {
          "@type": "ImageObject",
          "@id": LOGO_ID,
          url: `${siteConfig.url}/logo.png`,
          contentUrl: `${siteConfig.url}/logo.png`,
          width: "512",
          height: "512",
          caption:
            "Logo Elementor Pro ID - Jasa Instal Elementor Pro Indonesia",
          inLanguage: "id",
        },

        // 3. WebSite (publisher: Elementor Pro ID)
        {
          "@type": "WebSite",
          "@id": WEBSITE_ID,
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          inLanguage: "id",
          publisher: orgInline(),
          about: { "@id": SERVICE_ID },
        },

        // 4. WebPage — homepage (mainEntity: Service)
        {
          "@type": "WebPage",
          "@id": WEBPAGE_ID,
          name: "Jasa Instal Elementor Pro Terpercaya & Bergaransi",
          url: siteConfig.url,
          description:
            "Jasa instal Elementor Pro original berlisensi resmi untuk WordPress. Proses cepat 1-3 jam, auto update, dan gratis bonus Essential Addons Pro.",
          inLanguage: "id",
          isPartOf: { "@id": WEBSITE_ID },
          mainEntity: { "@id": SERVICE_ID },
          breadcrumb: { "@id": BREADCRUMB_ID },
          publisher: orgInline(),
        },

        // 5. Service — Jasa Instal Elementor Pro Original
        {
          "@type": "Service",
          "@id": SERVICE_ID,
          name: "Jasa Instal Elementor Pro Original",
          serviceType: "Instalasi Plugin WordPress Premium",
          description:
            "Jasa instal Elementor Pro original berlisensi resmi untuk website WordPress di seluruh Indonesia. Instalasi selesai 1-3 jam, auto update, garansi aktivasi 30 hari, gratis bonus Essential Addons Pro. Dipercaya lebih dari 6.000 pelanggan.",
          provider: orgInline(),
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
              name: "Paket Starter \u2014 1 Domain",
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
              name: "Paket Multisite \u2014 3 Domain",
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
              name: "Paket Agency \u2014 5 Domain",
              description:
                "Elementor Pro Original 5 domain, auto update, garansi aktivasi 30 hari, dedicated support WhatsApp.",
              price: "349000",
              priceCurrency: "IDR",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/paket-agency`,
            },
          ],
        },

        // 6. BreadcrumbList
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

        // 7. FAQPage (isPartOf: WebPage)
        {
          "@type": "FAQPage",
          "@id": FAQPAGE_ID,
          isPartOf: { "@id": WEBPAGE_ID },
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    },
  ];
}

/**
 * Tentang Kami page @graph — used in /tentang-kami
 * AboutPage.mainEntity → Brand (Elementor Pro ID).
 */
export function aboutPageSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        // Brand reference
        {
          "@type": "Brand",
          "@id": BRAND_ID,
          name: "Elementor Pro ID",
          url: siteConfig.url,
        },

        // AboutPage → mainEntity: Brand (Elementor Pro ID)
        {
          "@type": "AboutPage",
          "@id": `${siteConfig.url}/#about`,
          name: "Tentang Elementor Pro ID",
          url: `${siteConfig.url}/tentang-kami`,
          description:
            "Elementor Pro ID adalah layanan spesialis lisensi Elementor Pro original dan dukungan teknis WordPress terpercaya di Indonesia.",
          inLanguage: "id",
          isPartOf: { "@id": WEBSITE_ID },
          publisher: orgInline(),
          about: { "@id": BRAND_ID },
          mainEntity: { "@id": BRAND_ID },
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

        // Service reference
        {
          "@type": "Service",
          "@id": SERVICE_ID,
          name: "Jasa Instal Elementor Pro Original",
          provider: orgInline(),
          brand: { "@id": BRAND_ID },
        },

        // Logo reference
        {
          "@type": "ImageObject",
          "@id": LOGO_ID,
          url: `${siteConfig.url}/logo.png`,
          contentUrl: `${siteConfig.url}/logo.png`,
        },
      ],
    },
  ];
}
