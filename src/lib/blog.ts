import { supabase, type BlogPostRow } from "@/lib/supabase";

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

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function rowToPost(row: BlogPostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    category: row.category,
    featuredImage: row.featured_image,
    date: row.created_at,
    content: row.content,
    readingTime: calculateReadingTime(row.content),
  };
}

/**
 * Get all published blog posts sorted by date (newest first).
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data.map(rowToPost);
}

/**
 * Get a single post by slug (published only).
 */
export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) return undefined;
  return rowToPost(data);
}

/**
 * Get latest N published posts.
 */
export async function getLatestPosts(count: number = 3): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(count);

  if (error || !data) return [];
  return data.map(rowToPost);
}

/**
 * Get ALL posts (including drafts) — for admin panel.
 */
export async function getAllPostsAdmin(): Promise<BlogPostRow[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data;
}
