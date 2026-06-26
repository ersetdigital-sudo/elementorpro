import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { join } from "path";

// Load .env.local manually
const envPath = join(__dirname, "..", ".env.local");
const envContent = readFileSync(envPath, "utf-8");
const envVars: Record<string, string> = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eqIdx = trimmed.indexOf("=");
  if (eqIdx === -1) continue;
  envVars[trimmed.slice(0, eqIdx)] = trimmed.slice(eqIdx + 1);
}

const supabaseUrl = envVars["NEXT_PUBLIC_SUPABASE_URL"];
const supabaseAnonKey = envVars["NEXT_PUBLIC_SUPABASE_ANON_KEY"];
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Read the markdown file
const filePath = join(
  __dirname,
  "..",
  "content",
  "blog",
  "elementor-pro-indonesia-panduan-lengkap.md"
);
const raw = readFileSync(filePath, "utf-8");

// Parse frontmatter
const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
if (!frontmatterMatch) {
  console.error("Could not parse frontmatter");
  process.exit(1);
}

const frontmatter = frontmatterMatch[1];
const contentBody = frontmatterMatch[2].trim();

function getFrontmatterValue(key: string): string {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*"?(.*?)"?$`, "m"));
  return match ? match[1].replace(/^"|"$/g, "") : "";
}

const post = {
  title: getFrontmatterValue("title"),
  slug: "elementor-pro-indonesia-panduan-lengkap",
  description: getFrontmatterValue("description"),
  content: contentBody,
  category: getFrontmatterValue("category"),
  featured_image: "",
  published: true,
};

async function main() {
  console.log("Inserting post:", post.title);
  console.log("Slug:", post.slug);
  console.log("Content length:", post.content.length, "chars");

  const { data, error } = await supabase
    .from("posts")
    .upsert(post, { onConflict: "slug" })
    .select();

  if (error) {
    console.error("Error inserting post:", error.message);
    process.exit(1);
  }

  console.log("Success! Post inserted/updated:");
  console.log(data);
}

main();
