import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BlogPostRow {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  featured_image: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}
