import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { pricingPlans, checkIcon } from "@/lib/data/pricing";
import { whatsappLink } from "@/lib/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Pricing — 3 paket: Starter, Multisite (highlighted), Agency.
 */
export function Pricing() {
  return (
    <section id="harga" className="scroll-mt-20 bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Harga Jasa Install Elementor Pro
          </h2>
          <p className="mt-4 text-muted">
            Pilih paket sesuai kebutuhan website Anda. Semua paket termasuk
            Elementor Pro original dengan garansi aktivasi.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const Check = checkIcon;
            return (
              <ScrollReveal
                key={plan.name}
                delay={i * 0.1}
                className={`relative flex flex-col rounded-2xl border p-6 transition sm:p-8 ${
                  plan.highlighted
                    ? "border-brand bg-surface-2 shadow-lg shadow-brand/10"
                    : "border-white/10 bg-ink"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-brand-foreground">
                    <Star className="h-3 w-3" aria-hidden="true" />
                    Paket Terlaris
                  </span>
                )}

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-3xl font-bold text-text sm:text-4xl">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted">{plan.priceNote}</span>
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
                </div>

                <a
                  href={whatsappLink(
                    `Halo, saya tertarik dengan paket ${plan.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-brand text-brand-foreground hover:scale-105 hover:shadow-lg hover:shadow-brand/30 hover:brightness-110"
                      : "border border-brand/40 bg-brand/10 text-brand hover:bg-brand hover:text-brand-foreground"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>

                {plan.detailHref && (
                  <Link
                    href={plan.detailHref}
                    className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-muted transition hover:border-white/20 hover:text-text"
                  >
                    Lihat Detail
                  </Link>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
