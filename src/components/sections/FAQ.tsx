"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faq } from "@/lib/data/faq";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * FAQ — accordion (use client).
 * H2 = "FAQ". Heading FAQ WAJIB pertanyaan lengkap (AEO).
 * Source: lib/data/faq.ts (sama persis dengan FAQPage schema — trust rule).
 */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-ink py-20 md:py-28">
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
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal
                key={item.question}
                delay={i * 0.05}
                className="overflow-hidden rounded-2xl border border-white/10 bg-surface"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-text sm:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            );
          })}
        </div>

        {/* End of FAQ */}
      </div>
    </section>
  );
}
