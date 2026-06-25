"use client";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          className="relative z-[70] flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={200}
            height={50}
            className="h-12 w-auto"
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
          className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-xl text-text transition hover:bg-white/10 md:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col md:hidden"
          style={{ backgroundColor: "#000000" }}
        >
          {/* Spacer for header height */}
          <div className="h-16 shrink-0" />

          {/* Nav links */}
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full rounded-xl py-4 text-center text-lg font-medium text-white transition hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button at bottom */}
          <div className="shrink-0 border-t border-white/10 p-6">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
