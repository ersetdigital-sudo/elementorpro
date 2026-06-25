"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig, whatsappLink } from "@/lib/site";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
] as const;

function MobileMenu({ onClose }: { onClose: () => void }) {
  // Prevent scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div
      id="mobile-menu-portal"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          padding: "0 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Link href="/" onClick={onClose}>
          <Image
            src="/logo.png"
            alt="Layanan Jasa Install Elementor Pro Indonesia"
            width={200}
            height={50}
            style={{ height: "48px", width: "auto" }}
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup menu"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Nav links */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4px",
          padding: "32px 20px",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "18px 20px",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.06)",
              backgroundColor: "rgba(255,255,255,0.03)",
              transition: "background-color 0.2s",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          padding: "20px",
          paddingBottom: "32px",
        }}
      >
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            minHeight: "52px",
            padding: "16px 24px",
            borderRadius: "9999px",
            backgroundColor: "#c5f518",
            color: "#000000",
            fontSize: "15px",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(197,245,24,0.2)",
          }}
        >
          Hubungi via WhatsApp
        </a>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            marginTop: "12px",
          }}
        >
          Konsultasi gratis, tanpa kewajiban
        </p>
      </div>
    </div>,
    document.body
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
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
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Jasa Install Elementor Pro Indonesia - Elementor Pro ID"
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
            onClick={() => setOpen(true)}
            aria-label="Buka menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-text transition hover:bg-white/10 md:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile menu rendered via portal to document.body */}
      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </>
  );
}
