import Image from 'next/image';
import BlogSidebar from '@/components/BlogSidebar';

interface BlogDetailsProps {
  params: { slug: string };
}

export default function BlogDetailsPage({ params }: BlogDetailsProps) {
  const { slug } = params;

  // Mock blog data (replace with API fetch)
  const blog = {
    category: 'SUCCESS ADVICE',
    title: 'How “I Have a Dream” Became the Most Powerful Speech in History',
    subtitle:
      'It’s a blueprint for how to speak truth with clarity, conviction, and compassion',
    author: {
      name: 'M.S. Rao',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      date: 'Aug 8, 2025',
    },
    image:
      'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80',
    content: [
      'The “I Have a Dream” speech by Dr. Martin Luther King Jr. remains one of the most influential pieces of oratory in American history.',
      'King’s speech resonated not only with the 250,000 people who gathered at the Lincoln Memorial but also with millions across the globe.',
      'Repetition played a vital role in reinforcing his vision...',
    ],
  };

  return (
    <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* MAIN CONTENT */}
      <div className="lg:col-span-8">
        <span className="bg-cyan-600 text-white px-3 py-1 text-xs rounded-md">
          {blog.category}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mt-4">{blog.title}</h1>
        <p className="text-gray-600 mt-2">{blog.subtitle}</p>

        {/* AUTHOR */}
        <div className="flex items-center gap-3 mt-6">
          <Image
            src={blog.author.image}
            alt={blog.author.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{blog.author.name}</p>
            <p className="text-xs text-gray-500">
              Published 1 day ago on {blog.author.date}
            </p>
          </div>
        </div>

        {/* MAIN IMAGE */}
        <div className="mt-6">
          <Image
            src={blog.image}
            alt="Blog"
            width={1200}
            height={600}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* CONTENT */}
        <article className="prose prose-lg mt-6 max-w-none">
          {blog.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <blockquote className="border-l-4 border-cyan-500 pl-4 text-gray-700 italic">
            “Now is the time to make justice a reality for all of God’s children.”
          </blockquote>

          <h2 className="mt-8 text-2xl font-bold">Rhetoric That Moves the Soul</h2>
          <p>
            King’s ability to blend logic, emotion, and ethical appeals made his
            speech a case study in the art of persuasion.
          </p>
        </article>
      </div>

      {/* SIDEBAR */}
      <div className="lg:col-span-4">
        <BlogSidebar />
      </div>
    </section>
  );
}
