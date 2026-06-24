import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { whatsappLink } from "@/lib/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Services — keyword secondary + supporting muncul natural di sini.
 * jasa setup elementor pro, setup wordpress elementor, jasa landing page elementor.
 */
export function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Layanan Kami
          </h2>
          <p className="mt-4 text-muted">
            Solusi lengkap seputar pemasangan, setup, dan pembuatan landing page
            Elementor Pro untuk WordPress Anda.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.title}
              delay={i * 0.08}
              className="group rounded-2xl border border-white/10 bg-ink p-7 transition hover:border-brand/40 hover:bg-surface-2"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Section CTA */}
        <ScrollReveal className="mt-12 text-center">
          <a
            href={whatsappLink(
              "Halo, saya tertarik dengan layanan jasa setup Elementor Pro."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-6 py-3 text-sm font-medium text-brand transition hover:bg-brand hover:text-brand-foreground"
          >
            Tanya Layanan via WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
