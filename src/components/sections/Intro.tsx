import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Intro — bridging section antara Hero dan Fitur.
 * Menjelaskan masalah lisensi Elementor Pro buat pebisnis pemula.
 */
export function Intro() {
  return (
    <section className="bg-ink py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="space-y-5 text-center text-base leading-relaxed text-muted sm:text-lg">
          <p>
            Banyak pengguna WordPress sudah kenal Elementor — simpel dan
            hasilnya terlihat profesional.
          </p>
          <p>
            Masalahnya, lisensi Elementor Pro sering terasa berat untuk
            pebisnis pemula. Tanpa fitur Pro, form dan popup pun jadi serba
            terbatas.
          </p>
          <p>
            Untungnya, ada cara yang lebih praktis untuk tetap mendapatkan
            semua fitur itu.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
