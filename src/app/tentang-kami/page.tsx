import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Zap, HeadphonesIcon, Users, Building2 } from "lucide-react";
import { aboutPageSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tentang Kami — Elementor Pro ID | Layanan Spesialis NexaPlus",
  description:
    "Elementor Pro ID adalah layanan spesialis lisensi Elementor Pro original di bawah naungan NexaPlus. Tim berpengalaman, aktivasi aman, dukungan teknis WordPress.",
  alternates: { canonical: "/tentang-kami" },
};

export default function TentangKamiPage() {
  const jsonLd = aboutPageSchemas();

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/" className="hover:text-text">Beranda</Link>
          <span className="mx-2">/</span>
          <span className="text-text">Tentang Kami</span>
        </nav>

        {/* H1 */}
        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
          Tentang Elementor Pro ID
        </h1>

        <p className="mt-4 text-lg font-medium text-brand">
          Solusi Lisensi Elementor Pro Original &amp; Dukungan Teknis WordPress Terpercaya
        </p>

        {/* Intro */}
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            Elementor Pro ID hadir untuk membantu pemilik website, UMKM, freelancer, hingga agensi di Indonesia mendapatkan akses ke fitur premium Elementor Pro secara legal, aman, dan didukung oleh tim teknis berpengalaman.
          </p>
          <p>
            Kami memahami bahwa website merupakan aset digital yang penting. Karena itu, kami tidak hanya menyediakan layanan aktivasi lisensi Elementor Pro Original, tetapi juga memastikan proses instalasi dilakukan dengan benar agar website tetap stabil, aman, dan berfungsi optimal.
          </p>
        </div>

        {/* Didukung oleh NexaPlus */}
        <h2 className="mt-14 text-2xl font-bold text-text">Didukung oleh NexaPlus</h2>
        <div className="mt-5 space-y-5 text-base leading-relaxed text-muted">
          <p>
            Elementor Pro ID merupakan layanan spesialis yang berada di bawah naungan{" "}
            <a href="https://nexaplus.web.id" target="_blank" rel="noopener noreferrer" className="font-medium text-brand hover:brightness-125">
              NexaPlus
            </a>
            , sebuah agensi digital yang berfokus pada pengembangan website, WordPress, landing page, serta solusi digital untuk bisnis.
          </p>
          <p>
            Dengan pengalaman menangani berbagai proyek website, tim NexaPlus memahami kebutuhan teknis WordPress secara menyeluruh. Keahlian tersebut menjadi fondasi utama dalam setiap proses instalasi, aktivasi, maupun dukungan teknis yang kami berikan kepada pelanggan.
          </p>
          <p>
            Bagi kami, menjual lisensi bukanlah tujuan utama. Kami ingin memastikan setiap pelanggan memperoleh solusi yang aman, legal, dan dapat digunakan dengan nyaman dalam jangka panjang.
          </p>
        </div>

        {/* Mengapa Memilih */}
        <h2 className="mt-14 text-2xl font-bold text-text">Mengapa Memilih Elementor Pro ID?</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <Shield className="h-8 w-8 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-text">Lisensi Elementor Pro Original</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Kami hanya menggunakan lisensi original melalui metode aktivasi resmi. Kami tidak menyediakan file nulled, GPL, maupun hasil modifikasi yang berpotensi membahayakan website.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <Zap className="h-8 w-8 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-text">Aktivasi Aman</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Proses aktivasi dilakukan langsung oleh tim teknis menggunakan metode Connect &amp; Activate sesuai standar yang berlaku sehingga risiko kesalahan instalasi dapat diminimalkan.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <HeadphonesIcon className="h-8 w-8 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-text">Dukungan Teknis</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Setelah aktivasi selesai, pelanggan tetap mendapatkan bantuan teknis apabila mengalami kendala terkait penggunaan Elementor Pro.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <Users className="h-8 w-8 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-text">Tim Berpengalaman</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Seluruh proses ditangani oleh tim yang berpengalaman dalam pengembangan website WordPress sehingga setiap instalasi dilakukan dengan standar terbaik.
            </p>
          </div>
        </div>

        {/* Bagian dari Ekosistem */}
        <div className="mt-8 rounded-2xl border border-brand/20 bg-brand/5 p-6">
          <Building2 className="h-8 w-8 text-brand" aria-hidden="true" />
          <h3 className="mt-4 text-base font-semibold text-text">Bagian dari Ekosistem NexaPlus</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Sebagai bagian dari NexaPlus, kami berkomitmen memberikan layanan profesional dengan mengutamakan kualitas, keamanan, transparansi, dan kepuasan pelanggan.
          </p>
        </div>

        {/* Misi Kami */}
        <h2 className="mt-14 text-2xl font-bold text-text">Misi Kami</h2>
        <div className="mt-5 space-y-5 text-base leading-relaxed text-muted">
          <p>
            Kami percaya bahwa setiap bisnis berhak memiliki website profesional tanpa harus mengeluarkan biaya yang tidak efisien.
          </p>
          <p>
            Melalui Elementor Pro ID, kami ingin membantu lebih banyak UMKM, freelancer, kreator, dan perusahaan membangun website yang cepat, modern, aman, dan mudah dikelola menggunakan Elementor Pro Original.
          </p>
          <p>
            Karena bagi kami, website yang baik bukan hanya menarik secara visual, tetapi juga stabil, aman, dan mampu mendukung pertumbuhan bisnis.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-brand/30 bg-surface p-8 text-center">
          <h2 className="text-xl font-bold text-text sm:text-2xl">
            Siap Menggunakan Elementor Pro Original?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
            Dapatkan layanan aktivasi Elementor Pro Original dengan proses cepat, dukungan teknis, dan pendampingan dari tim NexaPlus.
          </p>
          <div className="mt-6">
            <Link
              href="/#harga"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 font-semibold text-brand-foreground transition hover:scale-105 hover:shadow-lg hover:shadow-brand/30 hover:brightness-110"
            >
              Lihat Paket Elementor Pro
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-sm text-brand hover:brightness-125">
            &larr; Kembali ke Beranda
          </Link>
        </div>
      </article>
    </>
  );
}
