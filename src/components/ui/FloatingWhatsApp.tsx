"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";

/**
 * Tombol WhatsApp floating, muncul setelah scroll sedikit.
 * Punya tooltip + aksesibel (aria-label, keyboard focusable).
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi via WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={reduceMotion ? undefined : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
          <span className="sr-only">WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// Re-export untuk konsistensi import (kalau nanti butuh icon close)
export { X };
