import { Clock, ShieldCheck, Headphones, Wallet, BadgeCheck, RefreshCw, Gift, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * WhyChooseUs ("Kenapa Memilih Kami?") — H2 dari heading structure.
 * Menggantikan Testimonials demi trust rule: TIDAK ada testimoni fiktif.
 * Value prop di sini nyata & terverifikasi (proses, garansi, transparansi, support).
 */
const reasons = [
  {
    icon: BadgeCheck,
    title: "Lisensi 100% Resmi",
    desc: "Elementor Pro original berlisensi resmi dari Elementor, bukan nulled atau bajakan. Aman dari malware dan risiko blacklist Google.",
  },
  {
    icon: RefreshCw,
    title: "Auto Update Selamanya",
    desc: "Update langsung dari dashboard WordPress setiap ada versi baru. Tidak perlu instal ulang manual atau khawatir tertinggal patch keamanan.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Aktivasi 30 Hari",
    desc: "Jika Elementor Pro tidak aktif atau bermasalah dalam 30 hari setelah instalasi, kami perbaiki tanpa biaya tambahan.",
  },
  {
    icon: Clock,
    title: "Proses Cepat 1–3 Jam",
    desc: "Instalasi dan aktivasi umumnya selesai dalam 1–3 jam setelah akses WordPress diterima. Website Anda tidak lama menunggu.",
  },
  {
    icon: Gift,
    title: "Bonus Essential Addons Pro",
    desc: "Setiap paket sudah termasuk Essential Addons Pro gratis — ratusan widget tambahan dan ribuan template siap pakai tanpa biaya ekstra.",
  },
  {
    icon: Users,
    title: "Dipercaya 6.000+ Pelanggan",
    desc: "Sudah membantu lebih dari 6.000 pemilik website di seluruh Indonesia mengaktifkan Elementor Pro dengan aman dan legal.",
  },
  {
    icon: Wallet,
    title: "Transparan Soal Biaya",
    desc: "Estimasi harga diberikan di awal setelah konsultasi. Tidak ada biaya tersembunyi maupun biaya tambahan di luar kesepakatan.",
  },
  {
    icon: Headphones,
    title: "Dukungan via WhatsApp",
    desc: "Komunikasi mudah lewat WhatsApp, sebelum dan sesudah pengerjaan. Tim kami siap membantu jika ada kendala teknis.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Kenapa Memilih Kami?
          </h2>
          <p className="mt-4 text-muted">
            Bukan sekadar instal. Kami pastikan Elementor Pro berjalan stabil,
            aman, dan website Anda siap berkembang.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 0.08}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-surface p-7"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
