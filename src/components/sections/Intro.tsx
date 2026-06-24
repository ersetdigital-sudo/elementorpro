import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Intro — bridging section antara Hero dan Fitur.
 * Desain: card dengan border subtle + gradient accent, teks dibagi jadi 3 blok visual.
 */
export function Intro() {
  return (
    <section className="bg-ink py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-2xl border border-white/10 bg-surface p-8 sm:p-10 md:p-12">
            {/* Subtle glow accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/50 to-transparent"
            />

            <div className="space-y-6 text-center">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Banyak pengguna WordPress sudah kenal{" "}
                <span className="font-medium text-text">Elementor</span> —
                simpel dan hasilnya terlihat profesional.
              </p>

              <div className="mx-auto h-px w-16 bg-white/10" />

              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Masalahnya, lisensi Elementor Pro sering terasa{" "}
                <span className="font-medium text-text">berat untuk pebisnis pemula</span>.
                Tanpa fitur Pro, form dan popup pun jadi serba terbatas.
              </p>

              <div className="mx-auto h-px w-16 bg-white/10" />

              <p className="text-base leading-relaxed text-brand sm:text-lg">
                Untungnya, ada cara yang lebih praktis untuk tetap mendapatkan
                semua fitur itu.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
