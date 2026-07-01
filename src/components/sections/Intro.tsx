import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Intro — bridging section antara Hero dan Fitur.
 * Desain: card dengan border subtle + gradient accent, teks dibagi jadi 3 blok visual.
 */
export function Intro() {
  return (
    <section className="bg-ink py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-2xl border border-white/10 bg-surface p-8 sm:p-10 md:p-12">
            {/* Subtle glow accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/50 to-transparent"
            />

            <div className="space-y-6 text-center">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                <span className="font-medium text-text">Jasa instal Elementor Pro</span>{" "}
                adalah layanan pemasangan plugin Elementor Pro original
                berlisensi resmi ke website WordPress, lengkap dengan
                aktivasi dan bonus Essential Addons Pro. Banyak pemilik
                website WordPress sudah familiar dengan{" "}
                <span className="font-medium text-text">Elementor</span> —
                page builder visual yang memudahkan siapa saja membangun
                halaman profesional tanpa menulis kode. Namun begitu kebutuhan
                bertambah, seperti membuat toko online, popup promosi, atau
                header dan footer custom, versi gratis mulai terasa terbatas.
              </p>

              <div className="mx-auto h-px w-16 bg-white/10" />

              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Di sinilah <span className="font-medium text-text">Elementor Pro</span>{" "}
                dibutuhkan. Masalahnya, mengurus lisensi resmi secara mandiri
                sering terasa rumit — mulai dari cara aktivasi, menghubungkan
                lisensi ke akun, hingga menangani error saat instalasi. Belum
                lagi risiko tergiur versi bajakan yang justru membahayakan
                keamanan website.
              </p>

              <div className="mx-auto h-px w-16 bg-white/10" />

              <p className="text-base leading-relaxed text-muted sm:text-lg">
                <span className="font-medium text-text">Jasa instal Elementor Pro</span>{" "}
                dari kami hadir sebagai solusi praktis. Anda tidak perlu
                mengurus pembelian lisensi sendiri, konfigurasi teknis, atau
                khawatir salah langkah. Cukup berikan akses sementara ke
                WordPress Anda, dan tim kami menangani instalasi, aktivasi,
                hingga verifikasi — umumnya selesai dalam 1–3 jam.
              </p>

              <div className="mx-auto h-px w-16 bg-white/10" />

              <p className="text-base leading-relaxed text-brand sm:text-lg">
                Hasilnya, Anda mendapatkan Elementor Pro original berlisensi
                resmi, auto update, dan garansi aktivasi 30 hari — tanpa ribet
                dan tanpa risiko.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
