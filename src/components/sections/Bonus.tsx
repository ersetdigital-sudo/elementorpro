import { Check, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Bonus — Essential Addons Pro included gratis di semua paket.
 */
const addons = [
  "Tabel Data Canggih (Advanced Data Table)",
  "Tab Interaktif (Advanced Tabs)",
  "Accordion Dinamis (Advanced Accordion)",
  "Widget Khusus Toko Online (WooCommerce Widgets)",
  "Konten Buka-Tutup Otomatis (Content Toggle)",
  "Promo Menarik (Interactive Promo)",
  "Konten yang Update Sendiri (Dynamic Content)",
  "Dan 95+ Widget Premium Lainnya",
];

export function Bonus() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-10 md:p-12">
            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
                <Star className="h-3.5 w-3.5" aria-hidden="true" />
                Bonus Eksklusif
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-center text-xl font-bold tracking-tight text-text sm:text-2xl md:text-3xl">
              Essential Addons Pro — 110+ Widget &amp; 6.500+ Template
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted sm:text-base">
              Selain Elementor Pro, Anda juga mendapatkan{" "}
              <strong className="text-text">Essential Addons Pro</strong> secara
              cuma-cuma. Plugin add-on terpopuler dengan ratusan widget tambahan
              dan ribuan template siap pakai. Di tempat lain jasa install EA Pro
              saja mulai Rp50.000, di sini{" "}
              <strong className="text-brand">sudah include gratis</strong>.
            </p>

            {/* Feature grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {addons.map((addon) => (
                <div
                  key={addon}
                  className="flex items-start gap-2.5 text-sm text-muted"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span>{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
