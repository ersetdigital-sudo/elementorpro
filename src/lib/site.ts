/**
 * Central site config — single source of truth.
 * Semua data sensitif mengambil dari env, jangan hardcode di tempat lain.
 */

function requiredEnv(key: string, fallback: string): string {
  const value = process.env[key]?.trim();
  if (!value) {
    console.warn(
      `[site] Env "${key}" belum di-set. Memakai fallback: "${fallback}". Ganti di .env.local sebelum production.`
    );
    return fallback;
  }
  return value;
}

export const siteConfig = {
  name: requiredEnv("NEXT_PUBLIC_BRAND_NAME", "Elementor Pro ID"),
  parentBrand: requiredEnv("NEXT_PUBLIC_PARENT_BRAND", "NexaPlus"),
  domain: "www.jasaelementorpro.web.id",
  url: requiredEnv(
    "NEXT_PUBLIC_SITE_URL",
    "https://www.jasaelementorpro.web.id"
  ).replace(/\/$/, ""),
  email: requiredEnv("NEXT_PUBLIC_EMAIL", "halo@jasaelementorpro.web.id"),
  whatsappNumber: requiredEnv("NEXT_PUBLIC_WHATSAPP_NUMBER", "6281573059442"),
  description:
    "Spesialis jasa install Elementor Pro untuk pengguna WordPress Indonesia.",
} as const;

/** Build URL WhatsApp dengan pesan default. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      `Halo ${siteConfig.name}, saya mau tanya soal jasa install Elementor Pro.`
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

/** Mailto link dengan subject default. */
export function emailLink(subject?: string): string {
  const s = encodeURIComponent(
    subject ?? "Tanya Jasa Install Elementor Pro"
  );
  return `mailto:${siteConfig.email}?subject=${s}`;
}
