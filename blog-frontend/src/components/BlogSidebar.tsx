import Image from 'next/image';

export default function BlogSidebar() {
  const latestPosts = [
    {
      img: '/images/br-1.png',
      title: 'How “I Have a Dream” Became the Most Powerful Speech in History',
      meta: 'Success Advice / 1 day ago',
    },
    {
      img: '/images/br-2.png',
      title: 'The Subtle Signs You’re Losing Yourself...',
      meta: 'Life / 3 days ago',
    },
    {
      img: '/images/br-3.png',
      title: 'How Top CEOs Solve Problems Differently',
      meta: 'Change Your Mindset / 5 days ago',
    },
  ];

  return (
    <aside className="space-y-6">
      <div className="bg-white shadow-md rounded-lg p-5">
        <h3 className="text-xl font-bold border-b pb-2 mb-4">Latest Posts</h3>
        {latestPosts.map((post, idx) => (
          <div key={idx} className="flex gap-3 mb-4">
            <Image
              src={post.img}
              alt={post.title}
              width={60}
              height={60}
              className="rounded-md object-cover"
            />
            <div>
              <p className="text-sm text-gray-500">{post.meta}</p>
              <a
                href="#"
                className="text-sm font-semibold text-gray-800 hover:text-cyan-600"
              >
                {post.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
