"use client";

import Link from "next/link";

interface BlogCardProps {
  img: string;
  category: string;
  title: string;
  slug: string; // 👈 new prop for dynamic routing
}

export default function BlogCard({
  img,
  category,
  title,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
        <img
          src={img}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white space-y-1">
          <p className="text-xs uppercase tracking-wide">{category}</p>
          <h3 className="text-lg font-bold leading-snug group-hover:underline">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
