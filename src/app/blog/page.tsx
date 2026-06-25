import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Tips WordPress & Elementor Pro",
  description:
    "Artikel, tutorial, dan tips seputar WordPress, Elementor Pro, landing page, dan optimasi website untuk bisnis Indonesia.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
        <Link href="/" className="hover:text-text">Beranda</Link>
        <span className="mx-2">/</span>
        <span className="text-text">Blog</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Blog
      </h1>
      <p className="mt-3 text-muted">
        Tips, tutorial, dan insight seputar WordPress &amp; Elementor Pro.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-center text-muted">
          Belum ada artikel. Segera hadir!
        </p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
            >
              {post.featuredImage && (
                <div className="mb-4 aspect-video overflow-hidden rounded-xl bg-surface-2">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <span className="inline-block w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                {post.category}
              </span>

              <h2 className="mt-3 text-lg font-semibold text-text group-hover:text-brand transition-colors">
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
    </section>
  );
}
