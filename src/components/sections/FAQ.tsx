import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/data/faq";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * FAQ — Server Component, jawaban ada di HTML sejak load (SEO/AEO friendly).
 * Accordion pakai native <details>/<summary> + CSS transition.
 */
export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            FAQ
          </h2>
          <p className="mt-4 text-muted">
            Pertanyaan yang paling sering ditanyakan seputar jasa install
            Elementor Pro.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => (
            <ScrollReveal key={item.question} delay={i * 0.05}>
              <details
                className="group rounded-2xl border border-white/10 bg-surface"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-medium text-text sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
