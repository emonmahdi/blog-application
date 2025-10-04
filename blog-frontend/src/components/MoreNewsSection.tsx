"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const latestPosts = [
  {
    img: "/images/br-1.png",
    category: "Success Advice / 1 day ago",
    title: "How “I Have a Dream” Became the Most Powerful Speech in History",
    slug: "i-have-a-dream-speech",
  },
  {
    img: "/images/br-2.png",
    category: "Life / 3 days ago",
    title: "The Subtle Signs You’re Losing Yourself and How to Find Your Way Back",
    slug: "losing-yourself-guide",
  },
  {
    img: "/images/br-3.png",
    category: "Change Your Mindset / 5 days ago",
    title: "How Top CEOs Solve Problems Differently to the Rest",
    slug: "top-ceos-problem-solving",
  },
];

const trendingPosts = [
  {
    img: "/images/br-5.png",
    category: "Success / 2 days ago",
    title: "Top 5 Habits of Wildly Successful Entrepreneurs",
    slug: "habits-of-successful-entrepreneurs",
  },
  {
    img: "/images/br-4.png",
    category: "Motivation / 4 days ago",
    title: "Why Discipline Beats Motivation Every Time",
    slug: "discipline-vs-motivation",
  },
  {
    img: "/images/br-3.png",
    category: "Tech / 6 days ago",
    title: "AI Trends in 2025: What to Expect",
    slug: "ai-trends-2025",
  },
];

export default function MoreNewsSection() {
  const [activeTab, setActiveTab] = useState<"latest" | "trending">("latest");

  const tabPosts = activeTab === "latest" ? latestPosts : trendingPosts;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h5 className="flex items-center gap-4 justify-center text-3xl font-bold mb-8">
          <span className="flex-1 h-[2px] max-w-[50%] bg-gray-300 rounded" />
          <span className="text-gray-800">MORE NEWS</span>
          <span className="flex-1 h-[2px] max-w-[50%] bg-gray-300 rounded" />
        </h5>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            {/* BLOG CARD 1 */}
            <div className="flex flex-col lg:flex-row bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300">
              <Image
                src="/images/bm-1.png"
                alt="Post Image"
                width={300}
                height={200}
                className="w-full lg:w-[300px] h-[200px] object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 transition-transform duration-300 hover:scale-[1.03]"
              />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Tech Startups / 1 week ago
                </div>
                <h5 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors mb-2">
                  <Link href="/blog/your-startups-greatest-risk">
                    Your Startup’s Greatest Risk May Be A Click, Not A Competitor
                  </Link>
                </h5>
                <p className="text-gray-600">
                  What they don’t expect is how one click, a single email link, a quick download...
                </p>
              </div>
            </div>

            {/* BLOG CARD 2 */}
            <div className="flex flex-col lg:flex-row bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300">
              <Image
                src="/images/bm-2.png"
                alt="Post Image"
                width={300}
                height={200}
                className="w-full lg:w-[300px] h-[200px] object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 transition-transform duration-300 hover:scale-[1.03]"
              />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Success Advice / 1 week ago
                </div>
                <h5 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors mb-2">
                  <Link href="/blog/personal-brand-issue">
                    The Real Reason Your Personal Brand Isn’t Working
                  </Link>
                </h5>
                <p className="text-gray-600">
                  When your brand is rooted in intention, it becomes compelling.
                </p>
              </div>
            </div>

            {/* BLOG CARD 3 */}
            <div className="flex flex-col lg:flex-row bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300">
              <Image
                src="/images/bm-3.png"
                alt="Post Image"
                width={300}
                height={200}
                className="w-full lg:w-[300px] h-[200px] object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 transition-transform duration-300 hover:scale-[1.03]"
              />
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Success Advice / 2 weeks ago
                </div>
                <h5 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors mb-2">
                  <Link href="/blog/leadership-lessons">
                    25 Leadership Lessons That Will Make You a Smarter, Stronger Leader
                  </Link>
                </h5>
                <p className="text-gray-600">
                  It blends emotional intelligence with strategic thinking, empathy and execution...
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (TABS) */}
          <div className="lg:col-span-4">
            {/* Tabs */}
            <div className="border rounded-lg">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("latest")}
                  className={`flex-1 py-2 text-center font-semibold border-b-2 transition-colors ${
                    activeTab === "latest"
                      ? "text-indigo-600 border-indigo-600"
                      : "text-gray-500 hover:text-indigo-600 border-transparent"
                  }`}
                >
                  Latest
                </button>
                <button
                  onClick={() => setActiveTab("trending")}
                  className={`flex-1 py-2 text-center font-semibold border-b-2 transition-colors ${
                    activeTab === "trending"
                      ? "text-indigo-600 border-indigo-600"
                      : "text-gray-500 hover:text-indigo-600 border-transparent"
                  }`}
                >
                  Trending
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-4 space-y-4">
                {tabPosts.map((post, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px] object-cover rounded-md"
                    />
                    <div>
                      <div className="text-xs font-semibold text-gray-500">
                        {post.category}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-semibold text-gray-800 hover:text-indigo-600 text-sm"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* END RIGHT CONTENT */}
        </div>
      </div>
    </section>
  );
}
