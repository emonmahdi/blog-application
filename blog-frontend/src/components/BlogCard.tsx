interface BlogCardProps {
    img: string;
    category: string;
    title: string;
  }
  
  export default function BlogCard({ img, category, title }: BlogCardProps) {
    return (
      <div className="relative rounded-lg overflow-hidden shadow group">
        <img
          src={img}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white space-y-1">
          <p className="text-xs uppercase tracking-wide">{category}</p>
          <h3 className="text-lg font-bold leading-snug">{title}</h3>
        </div>
      </div>
    );
  }
  