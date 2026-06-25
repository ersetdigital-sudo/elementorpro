import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paket Multisite — Jasa Install Elementor Pro Original 3 Domain",
  description:
    "Paket Multisite: instalasi Elementor Pro original untuk 3 domain Rp149.000/tahun. Prioritas support, auto update, garansi aktivasi 30 hari.",
  alternates: { canonical: "/paket-multisite" },
};

const features = [
  {
    title: "Elementor Pro Original 3 Domain",
    desc: "Satu langganan untuk tiga website sekaligus.",
  },
  {
    title: "Auto Update via Dashboard",
    desc: "Update langsung di ketiga domain tanpa install ulang.",
  },
  {
    title: "Garansi Aktivasi 30 Hari",
    desc: "Berlaku untuk semua domain yang didaftarkan.",
  },
  {
    title: "Prioritas Support WhatsApp",
    desc: "Antrian bantuan didahulukan dibanding paket lain.",
  },
];

const faqs = [
  {
    q: "Apakah 3 domain harus didaftarkan sekaligus?",
    a: "Tidak. Anda bisa mengaktifkan domain secara bertahap selama total tidak melebihi 3 domain dalam masa langganan.",
  },
  {
    q: "Apakah domain bisa diganti di tengah jalan?",
    a: "Bisa. Selama jumlah aktif tidak lebih dari 3, Anda bebas mengganti domain kapan saja via WhatsApp.",
  },
];

export default function PaketMultisitePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      name: "Paket Multisite — Jasa Install Elementor Pro 3 Domain",
      description:
        "Elementor Pro Original 3 domain, auto update, garansi aktivasi 30 hari, prioritas support WhatsApp.",
      price: "149000",
      priceCurrency: "IDR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/paket-multisite`,
      seller: { "@type": "Organization", name: "Elementor Pro ID" },
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
        { "@type": "ListItem", position: 3, name: "Paket Multisite", item: `${siteConfig.url}/paket-multisite` },
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
          <span className="text-text">Paket Multisite</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
          Paket Multisite — Jasa Install Elementor Pro Original untuk 3 Website
        </h1>

        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          Paket Multisite adalah layanan instalasi Elementor Pro original untuk 3 domain dengan harga Rp149.000 per tahun. Dirancang untuk freelancer web atau pemilik beberapa website yang ingin menghemat biaya lisensi. Termasuk prioritas support WhatsApp, auto-update, dan garansi aktivasi 30 hari.
        </p>

        {/* Cocok untuk Siapa */}
        <h2 className="mt-12 text-2xl font-bold text-text">Cocok untuk Siapa?</h2>
        <p className="mt-4 text-muted">
          Paket Multisite paling pas untuk freelancer yang menangani beberapa klien sekaligus, agency kecil, atau pebisnis yang punya 2-3 website berbeda. Lebih hemat dibanding membeli paket Starter satu per satu.
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
        <h2 className="mt-12 text-2xl font-bold text-text">FAQ Paket Multisite</h2>
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
            href={whatsappLink("Halo, saya mau pesan Paket Multisite.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 font-semibold text-brand-foreground transition hover:scale-105 hover:shadow-lg hover:shadow-brand/30 hover:brightness-110"
          >
            Pesan Paket Multisite via WhatsApp
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
            <Link href="/paket-agency" className="rounded-full border border-white/10 px-5 py-2 text-sm text-muted transition hover:border-brand/30 hover:text-text">
              Paket Agency — 10 Domain
            </Link>
          </div>
          <Link href="/#harga" className="mt-4 inline-block text-sm text-brand hover:brightness-125">
            ← Kembali ke Semua Paket
          </Link>
        </div>
      </section>
    </>
  );
}
