import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Hero — H1 = primary keyword.
 * Paragraf hero mengandung "jasa install elementor pro" natural.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            Jasa Install Elementor Pro Indonesia
          </span>

          {/* H1 — primary keyword */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
            Jasa Install <GradientText>Elementor Pro</GradientText> Indonesia
            Terpercaya &amp; Bergaransi
          </h1>

          {/* Subheadline — keyword natural + benefit */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Jasa install Elementor Pro original untuk website WordPress, landing
            page, toko online, dan company profile di seluruh Indonesia.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 font-semibold text-brand-foreground transition hover:brightness-110 sm:w-auto"
            >
              Konsultasi Gratis via WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#layanan"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 font-medium text-text transition hover:bg-surface-2 sm:w-auto"
            >
              Lihat Layanan
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" />
            Dipercaya lebih dari 500+ website WordPress di seluruh Indonesia
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
