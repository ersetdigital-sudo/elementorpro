import { ShieldX, Bug, RefreshCcw } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Masalahnya — pain points dari license ilegal / nulled Elementor Pro.
 */
const problems = [
  {
    icon: ShieldX,
    title: "License Ilang Terus",
    desc: 'Beli license sendiri dari sumber tidak jelas, tiba-tiba status jadi "Missing". Gagal update, fitur Pro ngilang. Website jadi berantakan tanpa peringatan.',
  },
  {
    icon: Bug,
    title: "Website Down Gara-Gara Nulled",
    desc: 'Download file "Elementor Pro Full Gratis" malah bawa malware & backdoor. Website jadi lemot, di-blacklist Google, bahkan redirect ke situs judi.',
  },
  {
    icon: RefreshCcw,
    title: "Update Manual = Stress",
    desc: "Update Elementor Pro harus urut: Core dulu, Pro kemudian. Salah urutan? Website crash total. Harus restore dari backup — ribet dan makan waktu.",
  },
];

export function Masalahnya() {
  return (
    <section className="border-t border-white/5 bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Masalahnya
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl md:text-4xl">
            Harga Elementor Pro Resmi Mahal. Pake yang Bajakan? Siap-Siap
            Website Lenyap.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Banyak yang nyari &ldquo;Elementor Pro Gratis&rdquo; atau beli
            license murah dari forum, eh malah website kena fatal error,
            license diblokir, atau di-hack. Kami hadir sebagai jalan ketiga:{" "}
            <strong className="text-text">
              Elementor Pro original, instal rapi, harga jasa yang masuk akal.
            </strong>
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {problems.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 0.1}
              className="group relative rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/5 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition-colors group-hover:bg-red-500/20">
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
