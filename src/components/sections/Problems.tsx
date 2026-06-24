import { AlertTriangle, Clock, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Problems — pain points 3 segmen: UMKM, Freelancer, Bisnis Lokal.
 * Section header boleh berupa pertanyaan alami yang nyentil masalah.
 */
const problems = [
  {
    icon: AlertTriangle,
    title: "Tidak Bisa Install Sendiri",
    desc: "Banyak pengguna WordPress kesulitan memasang dan mengaktivasi Elementor Pro dengan benar, apalagi takut salah konfigurasi yang berisiko merusak website.",
  },
  {
    icon: Clock,
    title: "Butuh Cepat, Deadline Mengejar",
    desc: "Freelancer dan pelaku bisnis sering butuh Elementor Pro aktif secepatnya untuk mengejar deadline client tanpa drama teknis.",
  },
  {
    icon: Wrench,
    title: "Bingung Setup & Lisensi",
    desc: "Memahami lisensi, update, dan pengaturan optimal Elementor Pro memakan waktu. Padahal fokus Anda seharusnya mengembangkan bisnis, bukan berkutat di teknis.",
  },
];

export function Problems() {
  return (
    <section className="border-t border-white/5 bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Susah Install Elementor Pro Sendiri?
          </h2>
          <p className="mt-4 text-muted">
            Memasang plugin premium bukan sekadar klik upload. Banyak hal bisa
            gagal kalau tidak dikerjakan dengan benar. Inilah kendala yang
            paling sering kami temui.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((item, i) => (
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
      </div>
    </section>
  );
}
