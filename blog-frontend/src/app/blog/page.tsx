export default function BlogMainPage() {
    return (
      <main className="container mx-auto px-4 py-10"> 
  
        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Trending */}
          <aside className="lg:col-span-3 space-y-6">
            <h2 className="flex items-center justify-center gap-2 font-semibold text-gray-800 uppercase text-sm tracking-widest">
              <span className="flex-1 h-px bg-gray-300"></span>
              <span className="text-cyan-600 font-bold">Trending</span>
              <span className="flex-1 h-px bg-gray-300"></span>
            </h2>
  
            <div className="space-y-4">
              {[
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
              ].map((post) => (
                <div
                  key={post.id}
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
                      <a href="#">{post.title}</a>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </aside>
  
          {/* Main Blog Section */}
          <section className="lg:col-span-6 space-y-6">
            {/* Featured Blog Post */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/images/bm-1.png"
                alt="Featured Blog"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white space-y-2">
                <p className="text-xs uppercase tracking-wide">Life / 1 day ago</p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  The Subtle Signs You’re Losing Yourself
                </h2>
                <p className="text-sm opacity-90 max-w-md">
                  What to do when your inner light dims, even when everything
                  looks good on paper.
                </p>
              </div>
            </div>
  
            {/* Secondary Blog Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative rounded-lg overflow-hidden shadow group">
                <img
                  src="/images/bm-2.png"
                  alt="Blog 2"
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white space-y-1">
                  <p className="text-xs uppercase tracking-wide">
                    Success / 3 days ago
                  </p>
                  <h3 className="text-lg font-bold leading-snug">
                    How Top CEOs Solve Problems Differently
                  </h3>
                </div>
              </div>
  
              <div className="relative rounded-lg overflow-hidden shadow group">
                <img
                  src="/images/bm-3.png"
                  alt="Blog 3"
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white space-y-1">
                  <p className="text-xs uppercase tracking-wide">
                    Entrepreneurs / 1 month ago
                  </p>
                  <h3 className="text-lg font-bold leading-snug">
                    The 70-Year-Old Strategy That’s Still Working
                  </h3>
                </div>
              </div>
            </div>
          </section>
  
          {/* Right Sidebar - Latest */}
          <aside className="lg:col-span-3 space-y-6">
            <h2 className="flex items-center justify-center gap-2 font-semibold text-gray-800 uppercase text-sm tracking-widest">
              <span className="flex-1 h-px bg-gray-300"></span>
              <span className="text-cyan-600 font-bold">Latest</span>
              <span className="flex-1 h-px bg-gray-300"></span>
            </h2>
  
            <div className="space-y-4">
              {[
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
              ].map((post) => (
                <div
                  key={post.id}
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
                      <a href="#">{post.title}</a>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    );
  }
  