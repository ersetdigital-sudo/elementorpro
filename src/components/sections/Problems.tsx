import { Layout, FileText, Bell, Palette } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * WhyElementorPro — alasan pengguna WordPress memilih Elementor Pro.
 * Fokus keyword: jasa instal elementor pro.
 */
const features = [
  {
    icon: Palette,
    title: "Template Website Siap Pakai",
    desc: "Ratusan template profesional untuk website bisnis, landing page, toko online, hingga company profile — tanpa desain dari nol.",
  },
  {
    icon: FileText,
    title: "Form Builder Profesional",
    desc: "Buat formulir kontak, konsultasi, hingga pengumpulan leads langsung di WordPress tanpa plugin tambahan.",
  },
  {
    icon: Bell,
    title: "Popup Builder",
    desc: "Tampilkan promo, diskon, atau formulir newsletter tanpa coding.",
  },
  {
    icon: Layout,
    title: "Theme Builder Lengkap",
    desc: "Atur header, footer, halaman produk, dan blog secara visual dengan drag and drop.",
  },
];

export function Problems() {
  return (
    <section className="bg-ink py-20 md:py-28">
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

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

        <ScrollReveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-muted">
            Dengan berbagai fitur tersebut, Elementor Pro membantu pemilik
            bisnis membangun website yang lebih profesional, responsif, dan
            siap digunakan untuk mendukung pertumbuhan usaha.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
