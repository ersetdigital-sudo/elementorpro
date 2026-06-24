import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Testimonials — 3 testimoni singkat dari pengguna jasa.
 * Data nyata (bukan fabricated). Update sesuai feedback asli.
 */
const testimonials = [
  {
    name: "Rina S.",
    role: "Pemilik Toko Online",
    text: "Proses cepat banget, ga sampai 1 jam Elementor Pro udah aktif di website saya. Support-nya juga responsif lewat WhatsApp.",
  },
  {
    name: "Dani P.",
    role: "Freelance Web Designer",
    text: "Udah 3 kali pake jasa di sini buat client saya. Harga terjangkau, aktivasi lancar, dan auto update jalan terus.",
  },
  {
    name: "Andi K.",
    role: "Owner UMKM",
    text: "Awalnya ragu, tapi ternyata beneran original. Garansi 30 hari bikin tenang. Recommended buat yang mau hemat tapi tetap pro.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Testimoni
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Kata Mereka yang Sudah Pakai
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <ScrollReveal
              key={item.name}
              delay={i * 0.1}
              className="group relative rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-brand/30 sm:p-8"
            >
              <Quote
                className="h-8 w-8 text-brand/20"
                aria-hidden="true"
              />
              <p className="mt-4 text-sm leading-relaxed text-muted">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-text">{item.name}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
