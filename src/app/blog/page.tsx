import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Tips WordPress & Elementor Pro",
  description:
    "Artikel, tutorial, dan tips seputar WordPress, Elementor Pro, landing page, dan optimasi website untuk bisnis Indonesia.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getAllPosts();

  const featured = posts[0] ?? null;
  const gridPosts = posts.slice(1);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted">
        <Link href="/" className="hover:text-text transition">
          Beranda
        </Link>
        <span className="mx-2 text-white/20">/</span>
        <span className="text-text">Blog</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Blog &amp; Tutorial
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Panduan, tips, dan insight seputar WordPress &amp; Elementor Pro
          untuk membangun website profesional.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="mt-16 text-center text-muted">
          Belum ada artikel. Segera hadir!
        </p>
      ) : (
        <>
          {/* Featured Post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-12 block overflow-hidden rounded-2xl border border-white/8 bg-surface-2 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_rgba(197,245,24,0.15)]"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[16/10] md:aspect-auto">
                  {featured.featuredImage ? (
                    <img
                      src={featured.featuredImage}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-brand/10 via-surface-3 to-surface">
                      <span className="text-6xl font-bold text-brand/20">
                        {featured.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                  <span className="inline-block w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                    {featured.category}
                  </span>
                  <h2 className="mt-4 text-xl font-bold leading-tight text-text group-hover:text-brand transition-colors sm:text-2xl lg:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3 sm:text-base">
                    {featured.description}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-muted sm:text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {new Date(featured.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {featured.readingTime} menit baca
                    </span>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-brand group-hover:gap-3 transition-all">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          {gridPosts.length > 0 && (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-white/8 bg-surface-2 transition-all duration-300 hover:border-brand/30 hover:shadow-[0_0_30px_-10px_rgba(197,245,24,0.1)]"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand/8 via-surface-3 to-surface">
                        <span className="text-4xl font-bold text-brand/15">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold leading-snug text-text group-hover:text-brand transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted line-clamp-2">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4 text-[11px] text-muted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-white/10">|</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readingTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
