import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import MarkdownIt from "markdown-it";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
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

  // Extract FAQ from content for FAQPage schema
  const faqItems: { question: string; answer: string }[] = [];
  const faqRegex = /(?:^|\n)(?:#{1,4}\s*)?(?:Q\d*[:.]?\s*|(?:\*\*)?)(.*?\?)\s*(?:\*\*)?\n+(?:A[:.]?\s*)?([^#\n](?:[^\n]*(?:\n(?!(?:#{1,4}\s|Q\d|---|\*\*Q))[^\n]*)*)?)/gm;
  let faqMatch;
  while ((faqMatch = faqRegex.exec(post.content)) !== null) {
    const question = faqMatch[1].replace(/\*\*/g, '').trim();
    const answer = faqMatch[2].replace(/\*\*/g, '').trim();
    if (question && answer && question.length > 10 && answer.length > 20) {
      faqItems.push({ question, answer });
    }
  }

  // Add FAQPage schema if FAQ items found
  if (faqItems.length > 0) {
    (jsonLd["@graph"] as Record<string, unknown>[]).push({
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const contentHtml = (() => {
    const raw = post.content;
    // If content starts with an HTML tag, it's from Tiptap (HTML). Otherwise treat as Markdown.
    const isHtml = raw.trim().startsWith("<") && !raw.trim().startsWith("<script");
    if (!isHtml) {
      const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
      return md.render(raw);
    }
    return raw;
  })();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-16 md:py-24 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted sm:mb-8">
          <Link href="/" className="hover:text-text">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-text">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-text line-clamp-1">{post.title}</span>
        </nav>

        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          {post.category}
        </span>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-text sm:mt-4 sm:text-3xl md:text-4xl">
          {post.title}
        </h1>

        <div className="mt-2 flex items-center gap-4 text-xs text-muted sm:mt-4 sm:text-sm">
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

        <div
          className="mt-8 text-base leading-[1.8] text-muted sm:mt-12 sm:text-[17px] [&_h1]:mt-12 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-text [&_h1]:sm:text-3xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text [&_h2]:sm:text-2xl [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text [&_p]:mb-4 [&_p]:text-muted [&_p]:leading-[1.8] [&_strong]:text-text [&_strong]:font-semibold [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:brightness-125 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:text-muted [&_li]:leading-[1.7] [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-brand/40 [&_blockquote]:bg-brand/5 [&_blockquote]:rounded-r-lg [&_blockquote]:pl-5 [&_blockquote]:pr-4 [&_blockquote]:py-4 [&_blockquote]:italic [&_blockquote]:text-muted [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:border [&_table]:border-white/10 [&_thead]:bg-brand/5 [&_th]:border [&_th]:border-white/10 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-text [&_td]:border [&_td]:border-white/8 [&_td]:px-4 [&_td]:py-3 [&_td]:text-sm [&_tr:nth-child(even)]:bg-white/[0.02] [&_hr]:my-10 [&_hr]:border-white/8 [&_code]:rounded [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-brand/80 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-surface-3 [&_pre]:p-5 [&_pre]:text-sm [&_img]:my-6 [&_img]:rounded-xl [&_img]:w-full"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

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
