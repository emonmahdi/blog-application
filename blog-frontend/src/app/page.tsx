// import React from "react";

import BlogCard from "@/components/BlogCard";
import FeaturedPost from "@/components/FeaturedPost";
import Hero from "@/components/Hero";
import LatestList from "@/components/LatestList";
import TrendingList from "@/components/TrendingList";

// export default function HomePage() {
//   return (
//     <section className="space-y-10">
//       <div className="text-center space-y-4">
//         <h1 className="text-4xl font-bold text-indigo-700">Welcome to MyApp</h1>
//         <p className="text-lg text-gray-600">
//           A modern Next.js 15 starter page with clean layout and responsive
//           design.
//         </p>
//         <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
//           Get Started
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//           <h3 className="text-lg font-semibold mb-2 text-indigo-600">Fast</h3>
//           <p className="text-gray-600 text-sm">
//             Built on Next.js 15 for optimized speed and performance.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//           <h3 className="text-lg font-semibold mb-2 text-indigo-600">
//             Responsive
//           </h3>
//           <p className="text-gray-600 text-sm">
//             Fully mobile-friendly design with Tailwind CSS.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//           <h3 className="text-lg font-semibold mb-2 text-indigo-600">
//             Easy to Customize
//           </h3>
//           <p className="text-gray-600 text-sm">
//             Minimal code structure that’s easy to scale.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <TrendingList />

        {/* Main Blog Section */}
        <section className="lg:col-span-6 space-y-6">
          <FeaturedPost />

          <div className="grid sm:grid-cols-2 gap-6">
            <BlogCard
              img="/images/bm-2.png"
              category="Success / 3 days ago"
              title="How Top CEOs Solve Problems Differently"
            />
            <BlogCard
              img="/images/bm-3.png"
              category="Entrepreneurs / 1 month ago"
              title="The 70-Year-Old Strategy That’s Still Working"
            />
          </div>
        </section>

        <LatestList />
      </div>
    </main>
  );
}
