import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getLatestPosts } from "@/lib/blog";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * LatestPosts — shows 3 latest blog posts on the homepage.
 */
export function LatestPosts() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Blog
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Artikel Terbaru
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-medium text-brand hover:brightness-125 sm:inline-flex"
          >
            Lihat Semua
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-brand/30"
              >
                <span className="inline-block w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {post.category}
                </span>

                <h3 className="mt-3 text-base font-semibold text-text group-hover:text-brand transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
                  {post.description}
                </p>

                <div className="mt-4 flex items-center gap-3 text-xs text-muted">
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
                    {post.readingTime} min
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:brightness-125"
          >
            Lihat Semua Artikel
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
