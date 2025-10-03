"use client";

import Link from "next/link";

interface FeaturedPostProps {
  img: string;
  category: string;
  title: string;
  excerpt: string;
  slug: string; // 👈 dynamic route slug
}

export default function FeaturedPost({
  img,
  category,
  title,
  excerpt,
  slug,
}: FeaturedPostProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <img
          src={img}
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white space-y-2">
          <p className="text-xs uppercase tracking-wide">{category}</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight group-hover:underline">
            {title}
          </h2>
          <p className="text-sm opacity-90 max-w-md">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
