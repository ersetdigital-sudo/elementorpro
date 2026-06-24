import { Layout, FileText, Bell, Palette, Sparkles, Repeat, Database, Grid3X3 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * WhyElementorPro — alasan pengguna WordPress memilih Elementor Pro.
 * Fokus keyword: jasa instal elementor pro.
 */
const features = [
  {
    icon: Palette,
    title: "Theme Builder",
    desc: "Buat header, footer, single post, dan archive page custom tanpa coding.",
  },
  {
    icon: Bell,
    title: "Popup Builder",
    desc: "Desain popup promo, lead magnet, dan announcement dengan trigger canggih.",
  },
  {
    icon: FileText,
    title: "Form Builder",
    desc: "Form kontak, file upload, multi step, dan integrasi ke email marketing.",
  },
  {
    icon: Layout,
    title: "WooCommerce Builder",
    desc: "Kustom halaman produk, checkout, dan shop layout toko online Anda.",
  },
  {
    icon: Sparkles,
    title: "Motion Effects",
    desc: "Animasi scroll, parallax, mouse track, dan efek interaktif tanpa plugin tambahan.",
  },
  {
    icon: Repeat,
    title: "Loop Builder",
    desc: "Tampilkan daftar post, produk, atau portfolio dengan desain custom tanpa batas.",
  },
  {
    icon: Database,
    title: "Dynamic Content",
    desc: "Tampilkan data custom field, ACF, dan custom post type secara otomatis.",
  },
  {
    icon: Grid3X3,
    title: "Widget Premium",
    desc: "90+ widget tambahan seperti price table, flip box, testimonial carousel, dan progress tracker.",
  },
];

export function Problems() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Kenapa Elementor Pro
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Banyak Pengguna WordPress Beralih ke Elementor Pro
          </h2>
          <p className="mt-4 text-muted">
            Elementor gratis cukup untuk halaman sederhana. Tapi untuk website
            yang harus jualan, fitur dasar saja tidak cukup.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 0.1}
              className="group relative rounded-2xl border border-white/10 bg-surface p-8 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
