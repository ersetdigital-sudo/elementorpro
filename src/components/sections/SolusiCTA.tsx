import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * SolusiCTA — highlight box setelah section Masalahnya.
 * Border lime, CTA ke WhatsApp.
 */
export function SolusiCTA() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-2xl border border-brand/30 bg-surface p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Solusinya Bukan Beli License Sendiri — Pakai Jasa Install dari
              Kami Saja.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted">
              Anda bayar biaya jasa yang jauh lebih hemat, tapi tetap dapat
              plugin{" "}
              <strong className="text-text">Elementor Pro 100% original</strong>
              . Aktivasi resmi, auto update, dan support error. Tanpa ribet,
              tanpa takut.
            </p>
            <div className="mt-8">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 font-semibold text-brand-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-brand/30 hover:brightness-110"
              >
                Pesan Jasa Sekarang
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
