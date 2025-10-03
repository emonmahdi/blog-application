export default function FeaturedPost() {
    return (
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
            What to do when your inner light dims, even when everything looks good on paper.
          </p>
        </div>
      </div>
    );
  }
  