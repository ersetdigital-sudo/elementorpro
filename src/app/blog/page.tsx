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

  // Split: featured (first post) + sidebar posts (next 4) + rest grouped by category
  const featured = posts[0] ?? null;
  const sidebarPosts = posts.slice(1, 5);
  const remainingPosts = posts.slice(5);

  // Group remaining by category
  const categories = new Map<string, typeof posts>();
  for (const post of remainingPosts) {
    const cat = post.category || "Lainnya";
    if (!categories.has(cat)) categories.set(cat, []);
    categories.get(cat)!.push(post);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
        <Link href="/" className="hover:text-text">
          Beranda
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text">Blog</span>
      </nav>

      {/* Header */}
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">
          Blog &amp; Tutorial
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Tips WordPress &amp; Elementor Pro
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Artikel, tutorial, dan insight untuk membangun website profesional
          dengan Elementor Pro di Indonesia.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="mt-12 text-center text-muted">
          Belum ada artikel. Segera hadir!
        </p>
      ) : (
        <>
          {/* Featured + Sidebar Layout */}
          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {/* Featured Post — Large (3 cols) */}
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-brand/30 lg:col-span-3"
              >
                {featured.featuredImage && (
                  <div className="mb-4 aspect-video overflow-hidden rounded-xl bg-surface-2">
                    <img
                      src={featured.featuredImage}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                {!featured.featuredImage && (
                  <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5">
                    <span className="text-4xl font-bold text-brand/40">
                      {featured.title.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="inline-block w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {featured.category}
                </span>
                <h2 className="mt-3 text-xl font-bold text-text group-hover:text-brand transition-colors sm:text-2xl">
                  {featured.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                  {featured.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {new Date(featured.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {featured.readingTime} menit baca
                  </span>
                </div>
              </Link>
            )}

            {/* Sidebar Posts — Small list (2 cols) */}
            {sidebarPosts.length > 0 && (
              <div className="flex flex-col gap-4 lg:col-span-2">
                {sidebarPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex gap-4 rounded-xl border border-white/10 bg-surface p-4 transition-all duration-300 hover:border-brand/30"
                  >
                    {/* Thumbnail */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-brand/5">
                      {post.featuredImage ? (
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="h-full w-full rounded-lg object-cover"
                        />
                      ) : (
                        <span className="text-lg font-bold text-brand/50">
                          {post.title.charAt(0)}
                        </span>
                      )}
                    </div>
                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-text group-hover:text-brand transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          {new Date(post.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-brand/70">{post.category}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Category Sections */}
          {categories.size > 0 && (
            <div className="mt-16 space-y-14">
              {Array.from(categories.entries()).map(([category, catPosts]) => (
                <div key={category}>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-text">{category}</h2>
                  </div>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {catPosts.slice(0, 6).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-2xl border border-white/10 bg-surface p-5 transition-all duration-300 hover:border-brand/30"
                      >
                        <span className="inline-block w-fit rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-medium text-brand">
                          {post.category}
                        </span>
                        <h3 className="mt-2 text-sm font-semibold text-text group-hover:text-brand transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted line-clamp-2">
                          {post.description}
                        </p>
                        <div className="mt-3 flex items-center gap-3 text-[11px] text-muted">
                          <span>
                            {new Date(post.date).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span>·</span>
                          <span>{post.readingTime} menit baca</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {catPosts.length > 6 && (
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center gap-1 rounded-full border border-brand/30 px-4 py-2 text-xs font-medium text-brand">
                        Lihat Semua
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* All posts grid (when no category sections / fewer than 5 posts) */}
          {categories.size === 0 && posts.length > 1 && posts.length <= 5 && (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-surface p-5 transition-all duration-300 hover:border-brand/30"
                >
                  <span className="inline-block w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-text group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readingTime} menit baca
                    </span>
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
