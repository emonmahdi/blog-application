// app/(user)/create-post/page.tsx
"use client";
import { useState } from "react";
import { apiFetch } from "@/lib/fetcher";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      const post = await apiFetch("/posts", { method: "POST", body: JSON.stringify({ title, content, excerpt: content.slice(0,150) }) });
      setMsg("Post submitted for review ✅");
      setTitle(""); setContent("");
    } catch (err: any) {
      setMsg(err.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">নতুন পোস্ট লিখুন</h2>
      {msg && <div className="mb-3 text-sm">{msg}</div>}
      <form onSubmit={submit} className="space-y-4">
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="শিরোনাম" className="w-full p-3 border rounded" required/>
        <textarea value={content} onChange={(e)=>setContent(e.target.value)} rows={10} placeholder="কনটেন্ট..." className="w-full p-3 border rounded" required/>
        <button disabled={loading} className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition-colors">{loading ? "Submitting..." : "Submit for Review"}</button>
      </form>
    </div>
  );
}
