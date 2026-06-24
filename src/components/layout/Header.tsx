"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, whatsappLink } from "@/lib/site";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock scroll saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Deteksi scroll buat background header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-ink/80 backdrop-blur-lg"
          : "border-transparent bg-ink/40 backdrop-blur"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={140}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground transition hover:brightness-110"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text transition hover:bg-surface-2 md:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80vw] flex-col gap-2 border-l border-white/10 bg-surface p-6 pt-20 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-text transition hover:bg-surface-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-brand px-5 py-3 text-center font-semibold text-brand-foreground transition hover:brightness-110"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
