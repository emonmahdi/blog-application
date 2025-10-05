// app/(user)/my-posts/page.tsx
"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/fetcher";

export default function MyPosts() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(()=> {
    (async()=> {
      try {
        const data = await apiFetch("/posts/me");
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">আমার পোস্টগুলো</h2>
      <div className="space-y-4">
        {posts.map(p => (
          <div key={p._id} className="p-4 border rounded bg-white">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-500">Created: {new Date(p.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <span className={`px-3 py-1 rounded text-sm ${p.status==="published" ? "bg-green-100 text-green-800" : p.status==="pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
                  {p.status}
                </span>
              </div>
            </div>
            {p.adminNote && <p className="text-sm text-red-600 mt-2">Admin Note: {p.adminNote}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
