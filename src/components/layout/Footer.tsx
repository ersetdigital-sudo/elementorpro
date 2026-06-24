import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { emailLink, siteConfig, whatsappLink } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Brand */}
        <div className="space-y-3">
          <p className="text-lg font-semibold text-text">{siteConfig.name}</p>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Jasa Install Elementor Pro Indonesia untuk Website WordPress, Landing Page, dan Toko Online.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Tautan footer">
          <p className="mb-4 text-sm font-semibold text-text">Tautan</p>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
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
        </nav>

        {/* Contact */}
        <div>
          <p className="mb-4 text-sm font-semibold text-text">Kontak</p>
          <ul className="space-y-3">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={emailLink()}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-6 text-center text-xs text-muted sm:px-6 lg:px-8">
          <p>
            © 2026 Elementor Pro ID | Spesialis Jasa Install Elementor Pro untuk WordPress Indonesia | Powered by{" "}
            <a
              href="https://www.nexaplus.web.id/"
              className="font-medium text-brand transition hover:brightness-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              NexaPlus
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
