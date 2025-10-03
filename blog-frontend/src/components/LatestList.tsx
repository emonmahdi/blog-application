"use client";

import Link from "next/link";

const latestPosts = [
  {
    id: 1,
    title: "Why Your Personal Brand Isn’t Working",
    meta: "Success / 1 week ago",
    img: "/images/br-1.png",
  },
  {
    id: 2,
    title: "Find Peace in a Chaotic World",
    meta: "Life / 2 weeks ago",
    img: "/images/br-2.png",
  },
  {
    id: 3,
    title: "Start Your Day with Purpose",
    meta: "Motivation / 3 days ago",
    img: "/images/br-3.png",
  },
];

export default function LatestList() {
  return (
    <aside className="lg:col-span-3 space-y-6">
      {/* Section Heading */}
      <h2 className="flex items-center justify-center gap-2 font-semibold text-gray-800 uppercase text-sm tracking-widest">
        <span className="flex-1 h-px bg-gray-300"></span>
        <span className="text-cyan-600 font-bold">Latest</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>

      {/* Latest Post Cards */}
      <div className="space-y-4">
        {latestPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="flex gap-4 items-center bg-white rounded-lg shadow p-3 hover:shadow-md transition-transform hover:-translate-y-1"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="text-xs text-gray-500 mb-1">{post.meta}</p>
              <h6 className="text-sm font-semibold text-gray-800 hover:text-cyan-600">
                {post.title}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
