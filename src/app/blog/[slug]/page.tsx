import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}`,
      ],
    },
  };
}

/**
 * Simple markdown to HTML converter (handles headings, paragraphs, bold, italic, lists, links).
 */
function markdownToHtml(md: string): string {
  let html = md
    // Headings
    .replace(/^### (.+)$/gm, '<h3 class="mt-8 mb-3 text-lg font-semibold text-text">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 text-xl font-bold text-text">$1</h2>')
    // Bold & italic
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-text">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-muted">$1</li>')
    // Links
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-brand hover:brightness-125 underline">$1</a>'
    )
    // Paragraphs (lines that aren't already HTML)
    .replace(/^(?!<[hlua])(.*\S.*)$/gm, '<p class="text-muted leading-relaxed">$1</p>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(
    /(<li[^>]*>.*?<\/li>\n?)+/g,
    '<ul class="my-4 space-y-2">$&</ul>'
  );

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${siteConfig.url}/blog/${post.slug}/#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        wordCount: post.content.trim().split(/\s+/).length,
        inLanguage: "id",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        author: { "@id": "https://nexaplus.web.id/#organization" },
        publisher: { "@id": "https://nexaplus.web.id/#organization" },
        image: `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/blog/${post.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
        ],
      },
    ],
  };

  const contentHtml = markdownToHtml(post.content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/" className="hover:text-text">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-text">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-text line-clamp-1">{post.title}</span>
        </nav>

        {/* Category + Meta */}
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          {post.category}
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {new Date(post.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {post.readingTime} menit baca
          </span>
        </div>

        {/* Content */}
        <div
          className="prose-custom mt-10 space-y-4"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Back link */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand hover:brightness-125"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Kembali ke Blog
          </Link>
        </div>
      </article>
    </>
  );
}
