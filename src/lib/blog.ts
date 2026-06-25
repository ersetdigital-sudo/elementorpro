import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  featuredImage: string;
  date: string;
  content: string;
  readingTime: number;
}

/**
 * Calculate estimated reading time (words per minute = 200 for Indonesian text).
 */
function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Get all blog posts sorted by date (newest first).
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      category: data.category || "Umum",
      featuredImage: data.featuredImage || "",
      date: data.date || "",
      content,
      readingTime: calculateReadingTime(content),
    } satisfies BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single post by slug.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

/**
 * Get latest N posts.
 */
export function getLatestPosts(count: number = 3): BlogPost[] {
  return getAllPosts().slice(0, count);
}
