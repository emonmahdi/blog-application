"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/fetcher";

export default function PendingPostsAdmin() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ useEffect-এর মধ্যে async সরাসরি কল না করে ভেতরে ফাংশন declare করে কল করলাম
  useEffect(() => {
    const loadPending = async () => {
      await fetchPending();
    };
    loadPending();
  }, []);

  async function fetchPending() {
    try {
      setLoading(true);
      const data = await apiFetch("/posts/pending");
      setPosts(data);
    } catch (err) {
      console.error("Failed to load posts:", err);
    } finally {
      setLoading(false);
    }
  }

  async function approve(id: string) {
    try {
      await apiFetch(`/posts/${id}/approve`, { method: "PUT" });
      await fetchPending(); // approve হলে নতুন করে fetch করলাম
    } catch (err: any) {
      alert(err.message || "Error approving post");
    }
  }

  async function deny(id: string) {
    const note = prompt("Deny note (optional):") || "";
    try {
      await apiFetch(`/posts/${id}/deny`, {
        method: "PUT",
        body: JSON.stringify({ note }),
      });
      await fetchPending();
    } catch (err: any) {
      alert(err.message || "Error denying post");
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Pending Posts (Admin)</h2>

      {loading && <p className="text-gray-500">Loading pending posts...</p>}

      {!loading && posts.length === 0 && (
        <p className="text-gray-600">No pending posts found.</p>
      )}

      <div className="space-y-4">
        {posts.map((p) => (
          <div
            key={p._id}
            className="p-4 border rounded bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-500">
                  By: {p.author?.name} —{" "}
                  {new Date(p.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => approve(p._id)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => deny(p._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Deny
                </button>
              </div>
            </div>

            <p className="mt-3 text-gray-700">
              {p.excerpt || p.content?.slice(0, 200)}
              {p.content?.length > 200 && "..."}
            </p>

            {p.adminNote && (
              <p className="text-sm text-red-600 mt-2">
                Note: {p.adminNote}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
