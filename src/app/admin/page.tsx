"use client";

import { useState } from "react";
import { supabase, type BlogPostRow } from "@/lib/supabase";
import {
  Plus, Edit2, Trash2, Eye, EyeOff, Save, LogIn,
  LayoutDashboard, FileText, ArrowLeft, Search,
  Bold, Italic, Underline, Heading2, Heading3,
  List, ListOrdered, Link2, Quote, Minus,
} from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import UnderlineExtension from "@tiptap/extension-underline";

const ADMIN_PASSWORD = "elementorpro2026";

// ─── Rich Text Editor Component ───
function RichEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      LinkExtension.configure({ openOnClick: false }),
      UnderlineExtension,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[300px] px-4 py-3 text-white text-sm leading-relaxed focus:outline-none prose prose-invert prose-sm max-w-none",
      },
    },
  });

  if (!editor) return null;

  const btnClass = (active: boolean) =>
    `rounded-lg p-2 transition ${
      active
        ? "bg-brand/20 text-brand"
        : "text-[#666] hover:bg-white/5 hover:text-white"
    }`;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-white/10 px-3 py-2">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btnClass(editor.isActive("bold"))}>
          <Bold className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btnClass(editor.isActive("italic"))}>
          <Italic className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={btnClass(editor.isActive("underline"))}>
          <Underline className="h-4 w-4" />
        </button>
        <span className="mx-1 h-5 w-px bg-white/10" />
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btnClass(editor.isActive("heading", { level: 2 }))}>
          <Heading2 className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btnClass(editor.isActive("heading", { level: 3 }))}>
          <Heading3 className="h-4 w-4" />
        </button>
        <span className="mx-1 h-5 w-px bg-white/10" />
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btnClass(editor.isActive("bulletList"))}>
          <List className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btnClass(editor.isActive("orderedList"))}>
          <ListOrdered className="h-4 w-4" />
        </button>
        <span className="mx-1 h-5 w-px bg-white/10" />
        <button
          type="button"
          onClick={() => {
            const url = window.prompt("URL:");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          className={btnClass(editor.isActive("link"))}
        >
          <Link2 className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btnClass(editor.isActive("blockquote"))}>
          <Quote className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()} className="rounded-lg p-2 text-[#666] hover:bg-white/5 hover:text-white transition">
          <Minus className="h-4 w-4" />
        </button>
      </div>
      {/* Editor content */}
      <EditorContent editor={editor} />
    </div>
  );
}

// ─── Main Admin Page ───
export default function AdminPage() {
  const [authed, setAuthed] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("admin_auth") === "true";
    }
    return false;
  });
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPostRow[]>([]);
  const [editing, setEditing] = useState<BlogPostRow | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"posts" | "editor">("posts");
  const [hasFetched, setHasFetched] = useState(false);

  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    setPosts(data || []);
  }

  // Fetch posts when authed changes - using ref to avoid lint issues
  if (authed && !hasFetched) {
    setHasFetched(true);
    fetchPosts();
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem("admin_auth", "true");
    } else {
      alert("Password salah!");
    }
  }

  function handleNew() {
    setIsNew(true);
    setEditing({
      id: "",
      title: "",
      slug: "",
      description: "",
      content: "",
      category: "Tutorial",
      featured_image: "",
      published: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    setActiveTab("editor");
  }

  function handleEdit(post: BlogPostRow) {
    setIsNew(false);
    setEditing({ ...post });
    setActiveTab("editor");
  }

  async function handleSave() {
    if (!editing) return;
    setLoading(true);

    const slug =
      editing.slug ||
      editing.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const payload = {
      title: editing.title,
      slug,
      description: editing.description,
      content: editing.content,
      category: editing.category,
      featured_image: editing.featured_image,
      published: editing.published,
      updated_at: new Date().toISOString(),
    };

    if (isNew) {
      await supabase.from("posts").insert(payload);
    } else {
      await supabase.from("posts").update(payload).eq("id", editing.id);
    }

    setEditing(null);
    setIsNew(false);
    setActiveTab("posts");
    await fetchPosts();
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Hapus artikel ini?")) return;
    await supabase.from("posts").delete().eq("id", id);
    await fetchPosts();
  }

  async function togglePublish(post: BlogPostRow) {
    await supabase
      .from("posts")
      .update({ published: !post.published })
      .eq("id", post.id);
    await fetchPosts();
  }

  // ─── Login Screen ───
  if (!authed) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0d1117] p-8 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20">
              <LayoutDashboard className="h-5 w-5 text-brand" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Admin Panel</h1>
              <p className="text-xs text-[#666]">Elementor Pro ID</p>
            </div>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password"
            className="mt-8 w-full rounded-xl border border-white/10 bg-[#161b22] px-4 py-3 text-sm text-white placeholder:text-[#444] focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
          >
            <LogIn className="h-4 w-4" />
            Masuk
          </button>
        </form>
      </div>
    );
  }

  // ─── Dashboard Layout ───
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-white/10 bg-[#0d1117] lg:flex">
        <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-xs font-bold text-black">
            E
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Elementor Pro ID</p>
            <p className="text-[10px] text-[#666]">Admin Panel</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          <button
            onClick={() => { setActiveTab("posts"); setEditing(null); }}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
              activeTab === "posts"
                ? "bg-white/5 font-medium text-white"
                : "text-[#888] hover:bg-white/5 hover:text-white"
            }`}
          >
            <FileText className="h-4 w-4" />
            Blog Posts
          </button>
        </nav>
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs text-[#888]">Online</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-56">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-white/10 bg-[#0d1117]/80 px-4 backdrop-blur-lg sm:px-6">
          <h2 className="text-sm font-semibold text-white">
            {activeTab === "editor"
              ? isNew
                ? "Tulis Artikel Baru"
                : "Edit Artikel"
              : "Blog Posts"}
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs text-[#888]">Online</span>
          </div>
        </header>

        <div className="p-4 sm:p-6">
          {/* ─── Editor View ─── */}
          {activeTab === "editor" && editing && (
            <div className="mx-auto max-w-4xl space-y-6">
              {/* Back button */}
              <button
                onClick={() => { setActiveTab("posts"); setEditing(null); }}
                className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-white transition"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </button>

              {/* Title */}
              <div>
                <label className="text-xs font-medium text-[#888]">Judul Artikel *</label>
                <input
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  placeholder="Masukkan judul atau topik artikel"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#161b22] px-4 py-3 text-white placeholder:text-[#444] focus:border-brand focus:outline-none"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="text-xs font-medium text-[#888]">Slug (URL)</label>
                <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-[#161b22]">
                  <span className="px-4 text-sm text-[#666]">/blog/</span>
                  <input
                    value={editing.slug}
                    onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                    placeholder="slug-artikel"
                    className="flex-1 bg-transparent py-3 pr-4 text-white placeholder:text-[#444] focus:outline-none"
                  />
                </div>
              </div>

              {/* Category + Thumbnail */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-[#888]">Kategori</label>
                  <input
                    value={editing.category}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#161b22] px-4 py-3 text-white focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#888]">Thumbnail URL</label>
                  <input
                    value={editing.featured_image}
                    onChange={(e) => setEditing({ ...editing, featured_image: e.target.value })}
                    placeholder="https://res.cloudinary.com/..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#161b22] px-4 py-3 text-white placeholder:text-[#444] focus:border-brand focus:outline-none"
                  />
                </div>
              </div>

              {/* Rich Text Editor */}
              <div>
                <label className="text-xs font-medium text-[#888]">Konten Artikel</label>
                <div className="mt-2">
                  <RichEditor
                    content={editing.content}
                    onChange={(html) => setEditing({ ...editing, content: html })}
                  />
                </div>
                <p className="mt-2 text-xs text-[#555]">
                  Tips: Gunakan H2 untuk sub-judul utama, H3 untuk sub-sub judul.
                </p>
              </div>

              {/* SEO Meta Section */}
              <div className="rounded-xl border border-white/10 bg-[#0d1117] p-5">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-brand" />
                  <h3 className="text-sm font-semibold text-white">SEO Meta</h3>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-medium text-[#888]">Meta Title</label>
                      <span className="text-xs text-[#555]">
                        {editing.title.length}/60
                      </span>
                    </div>
                    <input
                      value={editing.title}
                      onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                      placeholder="Judul untuk mesin pencari (ideal max 60 karakter)"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-[#161b22] px-4 py-3 text-sm text-white placeholder:text-[#444] focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-medium text-[#888]">Meta Description</label>
                      <span className="text-xs text-[#555]">
                        {editing.description.length}/155
                      </span>
                    </div>
                    <textarea
                      value={editing.description}
                      onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                      rows={3}
                      placeholder="Deskripsi untuk mesin pencari (ideal max 155 karakter)"
                      className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-[#161b22] px-4 py-3 text-sm text-white placeholder:text-[#444] focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Footer: Status + Save */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0d1117] px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#888]">Status:</span>
                  <select
                    value={editing.published ? "published" : "draft"}
                    onChange={(e) =>
                      setEditing({ ...editing, published: e.target.value === "published" })
                    }
                    className="rounded-lg border border-white/10 bg-[#161b22] px-3 py-1.5 text-xs text-white focus:border-brand focus:outline-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => { setActiveTab("posts"); setEditing(null); }}
                    className="rounded-lg px-4 py-2 text-sm text-[#888] hover:text-white transition"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={loading || !editing.title}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-50"
                  >
                    <Save className="h-4 w-4" />
                    {loading ? "Menyimpan..." : "Simpan Artikel"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ─── Posts List View ─── */}
          {activeTab === "posts" && (
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#888]">{posts.length} artikel</p>
                <button
                  onClick={handleNew}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  <Plus className="h-4 w-4" />
                  Artikel Baru
                </button>
              </div>

              {posts.length === 0 ? (
                <div className="mt-16 text-center">
                  <FileText className="mx-auto h-12 w-12 text-[#333]" />
                  <p className="mt-4 text-sm text-[#666]">Belum ada artikel. Klik &quot;Artikel Baru&quot; untuk mulai.</p>
                </div>
              ) : (
                <div className="mt-6 space-y-2">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1117] px-5 py-4 transition hover:border-white/10"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">
                          {post.title}
                        </p>
                        <div className="mt-1 flex items-center gap-3 text-xs text-[#666]">
                          <span>{post.category}</span>
                          <span>&middot;</span>
                          <span>
                            {new Date(post.created_at).toLocaleDateString("id-ID")}
                          </span>
                          <span>&middot;</span>
                          <span
                            className={
                              post.published ? "text-green-400" : "text-yellow-400"
                            }
                          >
                            {post.published ? "Published" : "Draft"}
                          </span>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-1 opacity-0 transition group-hover:opacity-100">
                        <button
                          onClick={() => togglePublish(post)}
                          title={post.published ? "Unpublish" : "Publish"}
                          className="rounded-lg p-2 text-[#666] hover:bg-white/5 hover:text-white"
                        >
                          {post.published ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                        <button
                          onClick={() => handleEdit(post)}
                          title="Edit"
                          className="rounded-lg p-2 text-[#666] hover:bg-white/5 hover:text-white"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          title="Hapus"
                          className="rounded-lg p-2 text-[#666] hover:bg-red-500/10 hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
