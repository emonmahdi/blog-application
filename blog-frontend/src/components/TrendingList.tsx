"use client";

import Link from "next/link";

const trendingPosts = [
  {
    id: 1,
    title: "How to Stop the War in Your Head and Find Peace",
    meta: "Life / 2 weeks ago",
    img: "/images/bl-1.png",
  },
  {
    id: 2,
    title: "The Modern Blueprint for Success",
    meta: "Success / 4 weeks ago",
    img: "/images/bl-2.png",
  },
  {
    id: 3,
    title: "Why Passion, Not Profit, Builds Success",
    meta: "Entrepreneurs / 3 weeks ago",
    img: "/images/bl-3.png",
  },
];

export default function TrendingList() {
  return (
    <aside className="lg:col-span-3 space-y-6">
      <h2 className="flex items-center justify-center gap-2 font-semibold text-gray-800 uppercase text-sm tracking-widest">
        <span className="flex-1 h-px bg-gray-300"></span>
        <span className="text-cyan-600 font-bold">Trending</span>
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>

      <div className="space-y-4">
        {trendingPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="flex gap-4 bg-white rounded-lg shadow hover:shadow-md p-3 transition-transform hover:-translate-y-1"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-20 h-20 object-cover rounded-md flex-shrink-0"
            />
            <div className="flex flex-col justify-between">
              <p className="text-xs text-gray-500">{post.meta}</p>
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
