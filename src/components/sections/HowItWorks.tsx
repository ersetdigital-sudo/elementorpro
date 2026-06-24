import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * HowItWorks — AEO prinsip: angka spesifik (1-3 jam, 7 hari) + list/numbered.
 */
const steps = [
  {
    no: "1",
    title: "Hubungi via WhatsApp",
    desc: "Ceritakan kebutuhan website WordPress Anda. Konsultasi awal gratis dan tanpa kewajiban.",
  },
  {
    no: "2",
    title: "Kirim Akses Sementara",
    desc: "Setelah sepakat, berikan akses sementara ke WordPress Anda. Keamanan akun tetap kami jaga.",
  },
  {
    no: "3",
    title: "Install & Setup",
    desc: "Kami mulai pemasangan dan konfigurasi Elementor Pro. Instalasi umumnya selesai dalam 1–3 jam.",
  },
  {
    no: "4",
    title: "Selesai & Dukungan",
    desc: "Website siap dipakai. Anda tetap dapat dukungan teknis via WhatsApp setelah pengerjaan selesai.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Cara Kerja
          </h2>
          <p className="mt-4 text-muted">
            Prosesnya sederhana dan transparan. Cukup empat langkah sampai
            Elementor Pro aktif di website Anda.
          </p>
        </ScrollReveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.no}
              delay={i * 0.08}
              as="li"
              className="relative rounded-2xl border border-white/10 bg-surface p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
                {step.no}
              </span>
              <h3 className="mt-4 text-base font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
