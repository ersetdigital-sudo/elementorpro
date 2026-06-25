"use client";

import { useEffect, useState } from "react";
import { supabase, type BlogPostRow } from "@/lib/supabase";
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X, LogIn } from "lucide-react";

const ADMIN_PASSWORD = "elementorpro2026";

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

  useEffect(() => {
    if (authed) fetchPosts();
  }, [authed]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem("admin_auth", "true");
    } else {
      alert("Password salah!");
    }
  }

  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    setPosts(data || []);
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
  }

  function handleEdit(post: BlogPostRow) {
    setIsNew(false);
    setEditing({ ...post });
  }

  async function handleSave() {
    if (!editing) return;
    setLoading(true);

    const payload = {
      title: editing.title,
      slug: editing.slug || editing.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
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

  // Login screen
  if (!authed) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-surface p-8"
        >
          <h1 className="text-xl font-bold text-text">Admin Login</h1>
          <p className="mt-2 text-sm text-muted">Masukkan password admin untuk melanjutkan.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-6 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-text placeholder:text-muted/50 focus:border-brand focus:outline-none"
          />
          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground transition hover:brightness-110"
          >
            <LogIn className="h-4 w-4" />
            Masuk
          </button>
        </form>
      </div>
    );
  }

  // Editor screen
  if (editing) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-text">
            {isNew ? "Artikel Baru" : "Edit Artikel"}
          </h1>
          <button
            onClick={() => { setEditing(null); setIsNew(false); }}
            className="rounded-xl p-2 text-muted hover:bg-surface-2 hover:text-text"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-muted">Judul</label>
            <input
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              className="mt-1 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-text focus:border-brand focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-muted">Slug (URL)</label>
            <input
              value={editing.slug}
              onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
              placeholder="otomatis-dari-judul"
              className="mt-1 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-text placeholder:text-muted/50 focus:border-brand focus:outline-none"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-muted">Kategori</label>
              <input
                value={editing.category}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-text focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted">Featured Image URL</label>
              <input
                value={editing.featured_image}
                onChange={(e) => setEditing({ ...editing, featured_image: e.target.value })}
                placeholder="https://..."
                className="mt-1 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-text placeholder:text-muted/50 focus:border-brand focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted">Deskripsi (SEO)</label>
            <textarea
              value={editing.description}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              rows={2}
              className="mt-1 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-text focus:border-brand focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-muted">Konten (Markdown)</label>
            <textarea
              value={editing.content}
              onChange={(e) => setEditing({ ...editing, content: e.target.value })}
              rows={16}
              className="mt-1 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 font-mono text-sm text-text focus:border-brand focus:outline-none resize-y"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={editing.published}
                onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
                className="peer sr-only"
              />
              <div className="h-6 w-11 rounded-full bg-surface-3 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition peer-checked:bg-brand peer-checked:after:translate-x-full" />
            </label>
            <span className="text-sm text-muted">
              {editing.published ? "Published" : "Draft"}
            </span>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={handleSave}
            disabled={loading || !editing.title}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground transition hover:brightness-110 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
          <button
            onClick={() => { setEditing(null); setIsNew(false); }}
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-muted hover:text-text"
          >
            Batal
          </button>
        </div>
      </div>
    );
  }

  // Post list screen
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Admin — Blog Posts</h1>
        <button
          onClick={handleNew}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition hover:brightness-110"
        >
          <Plus className="h-4 w-4" />
          Artikel Baru
        </button>
      </div>

      {posts.length === 0 ? (
        <p className="mt-12 text-center text-muted">Belum ada artikel.</p>
      ) : (
        <div className="mt-8 space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-surface px-5 py-4"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-text">{post.title}</p>
                <p className="mt-1 text-xs text-muted">
                  {post.category} &middot;{" "}
                  {new Date(post.created_at).toLocaleDateString("id-ID")} &middot;{" "}
                  <span className={post.published ? "text-brand" : "text-red-400"}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  onClick={() => togglePublish(post)}
                  title={post.published ? "Unpublish" : "Publish"}
                  className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-text"
                >
                  {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => handleEdit(post)}
                  title="Edit"
                  className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-text"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  title="Hapus"
                  className="rounded-lg p-2 text-muted hover:bg-red-500/20 hover:text-red-400"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
