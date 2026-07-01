import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paket Starter Elementor Pro - Rp99.000/Tahun | Elementor Pro ID",
  description:
    "Paket Starter: instalasi Elementor Pro original untuk 1 domain Rp99.000/tahun. Auto update, garansi aktivasi 30 hari, support WhatsApp.",
  alternates: { canonical: "/paket-starter" },
};

const features = [
  {
    title: "Elementor Pro Original 1 Domain",
    desc: "Lisensi resmi, bukan nulled, aman dari malware dan blacklist Google.",
  },
  {
    title: "Auto Update via Dashboard",
    desc: "Update langsung dari panel WordPress, tidak perlu instal ulang manual.",
  },
  {
    title: "Garansi Aktivasi 30 Hari",
    desc: "Jika Elementor Pro tidak aktif atau bermasalah dalam 30 hari, kami perbaiki tanpa biaya.",
  },
  {
    title: "Support WhatsApp",
    desc: "Bantuan teknis sebelum dan sesudah instalasi.",
  },
];

const faqs = [
  {
    q: "Apakah paket Starter bisa di-upgrade ke Multisite nanti?",
    a: "Bisa. Anda cukup membayar selisih harga dan kami aktifkan domain tambahan tanpa perlu instal ulang dari awal.",
  },
  {
    q: "Kalau saya pindah domain, apakah lisensi ikut berpindah?",
    a: "Bisa. Hubungi kami via WhatsApp, kami bantu deaktivasi domain lama dan aktivasi domain baru selama masih dalam masa langganan.",
  },
  {
    q: "Apakah paket Starter cocok untuk toko online?",
    a: "Cocok untuk toko online skala kecil dengan satu domain. Anda tetap mendapat WooCommerce Builder penuh dari Elementor Pro.",
  },
];

export default function PaketStarterPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      name: "Paket Starter — Jasa Instal Elementor Pro 1 Domain",
      description:
        "Elementor Pro Original 1 domain, auto update, garansi aktivasi 30 hari, support WhatsApp.",
      price: "99000",
      priceCurrency: "IDR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/paket-starter`,
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
        { "@type": "ListItem", position: 3, name: "Paket Starter", item: `${siteConfig.url}/paket-starter` },
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
          <span className="text-text">Paket Starter</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
          Paket Starter — Jasa Instal Elementor Pro Original untuk 1 Website
        </h1>

        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          Paket Starter adalah layanan instalasi Elementor Pro original untuk 1 domain dengan harga Rp99.000 per tahun. Cocok untuk website pribadi, portofolio, atau bisnis kecil yang baru mulai. Sudah termasuk auto-update via dashboard WordPress dan garansi aktivasi 30 hari, tanpa risiko plugin nulled atau malware.
        </p>

        {/* Cocok untuk Siapa */}
        <h2 className="mt-12 text-2xl font-bold text-text">Cocok untuk Siapa?</h2>
        <p className="mt-4 text-muted">
          Paket Starter ideal untuk pemilik website pribadi, blog, freelancer dengan satu proyek aktif, atau pelaku UMKM yang baru memulai satu toko online. Jika Anda hanya mengelola satu website dan ingin fitur Elementor Pro tanpa membayar lisensi resmi yang mahal, paket ini paling hemat.
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
        <h2 className="mt-12 text-2xl font-bold text-text">FAQ Paket Starter</h2>
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
            href={whatsappLink("Halo, saya mau pesan Paket Starter.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 font-semibold text-brand-foreground transition hover:scale-105 hover:shadow-lg hover:shadow-brand/30 hover:brightness-110 sm:w-auto"
          >
            Pesan Paket Starter via WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Internal links */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-sm font-semibold text-text">Bandingkan Paket Lain</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/paket-multisite" className="rounded-full border border-white/10 px-5 py-2 text-sm text-muted transition hover:border-brand/30 hover:text-text">
              Paket Multisite — 3 Domain
            </Link>
            <Link href="/paket-agency" className="rounded-full border border-white/10 px-5 py-2 text-sm text-muted transition hover:border-brand/30 hover:text-text">
              Paket Agency — 5 Domain
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
