import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paket Agency Elementor Pro - Rp349.000/Tahun | Elementor Pro ID",
  description:
    "Paket Agency: instalasi Elementor Pro original untuk 5 domain Rp349.000/tahun. Dedicated support, auto update, garansi aktivasi 30 hari.",
  alternates: { canonical: "/paket-agency" },
};

const features = [
  {
    title: "Elementor Pro Original 5 Domain",
    desc: "Solusi paling ekonomis per website untuk volume tinggi.",
  },
  {
    title: "Auto Update via Dashboard",
    desc: "Update langsung di semua domain tanpa instal ulang.",
  },
  {
    title: "Garansi Aktivasi 30 Hari",
    desc: "Berlaku menyeluruh untuk seluruh domain yang didaftarkan.",
  },
  {
    title: "Support WhatsApp Dedicated",
    desc: "Jalur komunikasi khusus untuk respon tercepat.",
  },
];

const faqs = [
  {
    q: "Apakah cocok untuk reseller jasa website?",
    a: "Sangat cocok. Banyak agency menggunakan paket ini untuk menekan biaya lisensi per klien.",
  },
  {
    q: "Bagaimana jika butuh lebih dari 5 domain?",
    a: "Hubungi kami via WhatsApp untuk penawaran custom di atas 5 domain dengan harga khusus.",
  },
];

export default function PaketAgencyPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      name: "Paket Agency — Jasa Instal Elementor Pro 5 Domain",
      description:
        "Elementor Pro Original 5 domain, auto update, garansi aktivasi 30 hari, dedicated support WhatsApp.",
      price: "349000",
      priceCurrency: "IDR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/paket-agency`,
      seller: {
        "@type": "Organization",
        name: "Elementor Pro ID",
        url: siteConfig.url,
        description:
          "Layanan spesialis jasa instal Elementor Pro original berlisensi resmi untuk website WordPress di seluruh Indonesia.",
        logo: `${siteConfig.url}/logo.png`,
        sameAs: [
          "https://www.instagram.com/nexaplus.id/",
          "https://www.tiktok.com/@nexaplus.id",
          `https://wa.me/${siteConfig.whatsappNumber}`,
          `${siteConfig.url}/`,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-815-7305-9442",
          contactType: "customer support",
          availableLanguage: "Indonesian",
          areaServed: "ID",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Harga", item: `${siteConfig.url}/#harga` },
        { "@type": "ListItem", position: 3, name: "Paket Agency", item: `${siteConfig.url}/paket-agency` },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/" className="hover:text-text">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#harga" className="hover:text-text">Harga</Link>
          <span className="mx-2">/</span>
          <span className="text-text">Paket Agency</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
          Paket Agency — Jasa Instal Elementor Pro Original untuk 5 Website
        </h1>

        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          Paket Agency adalah layanan instalasi Elementor Pro original untuk 5 domain dengan harga Rp349.000 per tahun. Ditujukan untuk web developer dan agency dengan volume proyek tinggi. Termasuk support WhatsApp dedicated, auto-update, dan garansi aktivasi 30 hari di seluruh domain.
        </p>

        {/* Cocok untuk Siapa */}
        <h2 className="mt-12 text-2xl font-bold text-text">Cocok untuk Siapa?</h2>
        <p className="mt-4 text-muted">
          Paket Agency dirancang untuk web developer profesional, digital agency, atau reseller yang rutin membangun banyak website klien. Dengan 5 domain, biaya per website jadi jauh lebih murah dibanding paket lain.
        </p>

        {/* Yang Anda Dapatkan */}
        <h2 className="mt-12 text-2xl font-bold text-text">Yang Anda Dapatkan</h2>
        <ul className="mt-6 space-y-4">
          {features.map((f) => (
            <li key={f.title} className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <strong className="text-text">{f.title}</strong>
                <span className="text-muted"> — {f.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* FAQ */}
        <h2 className="mt-12 text-2xl font-bold text-text">FAQ Paket Agency</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-white/10 bg-surface"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-medium text-text sm:text-base">{faq.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href={whatsappLink("Halo, saya mau pesan Paket Agency.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 font-semibold text-brand-foreground transition hover:scale-105 hover:shadow-lg hover:shadow-brand/30 hover:brightness-110 sm:w-auto"
          >
            Pesan Paket Agency via WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Internal links */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-sm font-semibold text-text">Bandingkan Paket Lain</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/paket-starter" className="rounded-full border border-white/10 px-5 py-2 text-sm text-muted transition hover:border-brand/30 hover:text-text">
              Paket Starter — 1 Domain
            </Link>
            <Link href="/paket-multisite" className="rounded-full border border-white/10 px-5 py-2 text-sm text-muted transition hover:border-brand/30 hover:text-text">
              Paket Multisite — 3 Domain
            </Link>
          </div>
          <Link href="/#harga" className="mt-4 inline-block text-sm text-brand hover:brightness-125">
            ← Kembali ke Semua Paket
          </Link>
          <p className="mt-6 text-sm text-muted">
            Butuh info lengkap soal{" "}
            <Link href="/" className="text-brand hover:brightness-125">
              jasa instal Elementor Pro original
            </Link>
            ?
          </p>
        </div>
      </section>
    </>
  );
}
