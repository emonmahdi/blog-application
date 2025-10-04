import TrendingList from "@/components/TrendingList";
import LatestList from "@/components/LatestList";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import MoreNewsSection from "@/components/MoreNewsSection";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-10 space-y-10">
      {/* Existing Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <TrendingList />

        {/* Main Blog Section */}
        <section className="lg:col-span-6 space-y-6">
          <FeaturedPost
            img="/images/bm-1.png"
            category="Life / 1 day ago"
            title="The Subtle Signs You’re Losing Yourself"
            excerpt="What to do when your inner light dims, even when everything looks good on paper."
            slug="the-subtle-signs-youre-losing-yourself"
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <BlogCard
              img="/images/bm-2.png"
              category="Success / 3 days ago"
              title="How Top CEOs Solve Problems Differently"
              slug="how-top-ceos-solve-problems-differently"
            />
            <BlogCard
              img="/images/bm-3.png"
              category="Entrepreneurs / 1 month ago"
              title="The 70-Year-Old Strategy That’s Still Working"
              slug="the-70-year-old-strategy-thats-still-working"
            />
          </div>
        </section>

        <LatestList />
      </div>

      {/* More News Section */}
      <MoreNewsSection />
    </main>
  );
}
