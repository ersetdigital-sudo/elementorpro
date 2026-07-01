import { Check, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * OriginalVsBajakan — perbandingan risiko nulled vs keamanan Elementor Pro original.
 * Sekaligus menjawab pertanyaan FAQ "Apa bedanya Elementor Pro original dan bajakan (nulled)?"
 */
const rows = [
  {
    aspect: "Update Keamanan",
    original: "Dapat update resmi langsung dari Elementor",
    bajakan: "Tidak bisa update, tertinggal patch keamanan",
  },
  {
    aspect: "Risiko Malware",
    original: "Aman, file asli tanpa modifikasi",
    bajakan: "Rawan disusupi backdoor & malware",
  },
  {
    aspect: "Stabilitas",
    original: "Stabil, teruji sebelum rilis resmi",
    bajakan: "Berisiko error tiba-tiba tanpa peringatan",
  },
  {
    aspect: "Dukungan Teknis",
    original: "Ada garansi aktivasi & support WhatsApp",
    bajakan: "Tidak ada dukungan resmi sama sekali",
  },
  {
    aspect: "Reputasi Website",
    original: "Aman dari blacklist Google",
    bajakan: "Berisiko diblokir/blacklist jika terdeteksi",
  },
];

export function OriginalVsBajakan() {
  return (
    <section className="border-t border-white/5 bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Perbandingan
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Elementor Pro Original vs Bajakan (Nulled)
          </h2>
          <p className="mt-4 text-muted">
            Elementor Pro original mendapat update resmi dan keamanan
            terjamin. Versi bajakan rawan malware dan tidak ada dukungan
            teknis. Berikut perbandingannya.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-[1fr_1.3fr_1.3fr] sm:divide-y-0">
            {/* Header row (desktop only) */}
            <div className="hidden bg-surface-2 px-5 py-4 text-sm font-semibold text-text sm:block">
              Aspek
            </div>
            <div className="hidden items-center gap-2 bg-brand/10 px-5 py-4 text-sm font-semibold text-brand sm:flex">
              <Check className="h-4 w-4" aria-hidden="true" />
              Elementor Pro Original
            </div>
            <div className="hidden items-center gap-2 bg-red-500/5 px-5 py-4 text-sm font-semibold text-red-400 sm:flex">
              <X className="h-4 w-4" aria-hidden="true" />
              Bajakan (Nulled)
            </div>

            {rows.map((row) => (
              <div
                key={row.aspect}
                className="grid grid-cols-1 divide-y divide-white/5 bg-ink sm:col-span-3 sm:grid-cols-[1fr_1.3fr_1.3fr] sm:divide-y-0 sm:border-t sm:border-white/5"
              >
                <div className="px-5 py-4 text-sm font-semibold text-text sm:bg-surface-2">
                  {row.aspect}
                </div>
                <div className="flex items-start gap-2 px-5 py-4 text-sm text-muted sm:bg-brand/[0.03]">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span>{row.original}</span>
                </div>
                <div className="flex items-start gap-2 px-5 py-4 text-sm text-muted sm:bg-red-500/[0.02]">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                    aria-hidden="true"
                  />
                  <span>{row.bajakan}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
