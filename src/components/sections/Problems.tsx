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
    desc: "Elementor Pro menyediakan ratusan template profesional yang dapat digunakan untuk website bisnis, landing page, toko online, hingga company profile. Anda tidak perlu membuat desain dari nol sehingga proses pembuatan website menjadi lebih cepat.",
  },
  {
    icon: FileText,
    title: "Form Builder Profesional",
    desc: "Buat formulir kontak, formulir konsultasi, hingga formulir pengumpulan leads langsung di WordPress tanpa perlu plugin tambahan.",
  },
  {
    icon: Bell,
    title: "Popup Builder",
    desc: "Tampilkan promo, diskon, formulir newsletter, atau pengingat checkout dengan mudah tanpa harus melakukan coding.",
  },
  {
    icon: Layout,
    title: "Theme Builder Lengkap",
    desc: "Atur header, footer, halaman produk, blog, dan berbagai bagian website WordPress secara visual dengan sistem drag and drop.",
  },
];

export function Problems() {
  return (
    <section className="border-t border-white/5 bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Kenapa Banyak Pengguna WordPress Memilih Elementor Pro?
          </h2>
          <p className="mt-4 text-muted">
            Bagi banyak pemilik website WordPress, Elementor versi gratis
            memang sudah cukup untuk membuat halaman sederhana. Namun saat
            website mulai digunakan untuk bisnis, promosi, atau penjualan
            online, kebutuhan fitur biasanya semakin berkembang.
          </p>
          <p className="mt-3 text-muted">
            Karena itu, banyak pengguna beralih ke Elementor Pro untuk
            mendapatkan fitur yang lebih lengkap dan fleksibel.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 0.1}
              className="rounded-2xl border border-white/10 bg-surface p-7 transition hover:border-brand/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
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
