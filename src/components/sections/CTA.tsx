import { ArrowRight } from "lucide-react";
import { whatsappLink, emailLink } from "@/lib/site";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * CTA (Final) — strong CTA ke WhatsApp (utama) + Email (sekunder).
 * Ulang primary keyword natural di heading (SEO).
 * Ritme satu-baris untuk kontras/membaca cepat di akhir halaman.
 */
export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-surface py-20 md:py-28">
      {/* Background accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            Siap Menginstall <GradientText>Elementor Pro</GradientText>?
          </h2>

          {/* Ritme satu-baris */}
          <div className="mt-6 space-y-1 text-base leading-relaxed text-muted">
            <p>Website Anda tinggal selangkah lagi.</p>
            <p>Pemasangan aman, cepat, dan bergaransi.</p>
            <p>Konsultasi gratis, tanpa kewajiban.</p>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 font-semibold text-brand-foreground transition hover:brightness-110 sm:w-auto"
            >
              Konsultasi Gratis via WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={emailLink()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3.5 font-medium text-text transition hover:bg-surface-2 sm:w-auto"
            >
              Kirim Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
