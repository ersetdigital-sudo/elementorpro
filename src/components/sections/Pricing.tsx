import { ArrowRight } from "lucide-react";
import { pricingPlans, checkIcon } from "@/lib/data/pricing";
import { whatsappLink } from "@/lib/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Pricing — H2 = "Harga Jasa Install Elementor Pro".
 * ⚠️ Trust rule: harga pakai data NYATA. Saat ini placeholder "Hubungi Kami"
 *    (transparan, bukan angka fiktif). Ganti di lib/data/pricing.ts sebelum production.
 */
export function Pricing() {
  return (
    <section id="harga" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Harga Jasa Install Elementor Pro
          </h2>
          <p className="mt-4 text-muted">
            Pilih cakupan layanan sesuai kebutuhan. Estimasi harga transparan
            diberikan setelah konsultasi singkat — tanpa biaya tersembunyi.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const Check = checkIcon;
            return (
              <ScrollReveal
                key={plan.name}
                delay={i * 0.1}
                className={`relative flex flex-col rounded-2xl border p-7 transition ${
                  plan.highlighted
                    ? "border-brand bg-surface-2 shadow-lg shadow-brand/10"
                    : "border-white/10 bg-ink"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                    Paling Diminati
                  </span>
                )}

                <h3 className="text-lg font-semibold text-text">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <p className="text-2xl font-bold text-text">{plan.price}</p>
                  <p className="mt-1 text-xs text-muted">{plan.priceNote}</p>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(
                    `Halo, saya tertarik dengan paket ${plan.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-brand text-brand-foreground hover:brightness-110"
                      : "border border-brand/40 bg-brand/10 text-brand hover:bg-brand hover:text-brand-foreground"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
