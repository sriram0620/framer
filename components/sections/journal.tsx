import React from 'react';
import Image from 'next/image';

const JOURNAL_POSTS = [
  {
    id: 1,
    title: 'How AI is Transforming Design in 2025',
    category: 'AI DESIGN',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/r1Q4APz4TNMV5x9oKRYscAL06c-11.jpg',
    aspect: 'square',
  },
  {
    id: 2,
    title: 'How to Choose the Right Palette for Your Brand',
    category: 'VISUAL DESIGN',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/PWNFxFRREdvfApytv3KFyOq9fcQ-15.jpg',
    aspect: 'square',
  },
  {
    id: 3,
    title: '10 Web Design Trends That Will Dominate This Year',
    category: 'TRENDS',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/BYTBcqFikmPNhvjQYU7pi3ciyI-12.jpg',
    aspect: 'square',
  },
];

const Journal = () => {
  return (
    <section className="bg-black py-[20px] px-[20px]">
      <div className="section-card mx-auto max-w-[1440px] bg-[#121212] rounded-[80px] p-[60px] md:p-[60px] sm:p-[30px] sm:rounded-[40px]">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-[60px] gap-[40px]">
          <h2 className="text-[48px] md:text-[64px] font-pixel text-white uppercase leading-[1.1] m-0">
            JOURNAL
          </h2>
          <div className="max-w-[400px]">
            <p className="text-[#999999] text-[18px] leading-[1.6] font-sans">
              Our journal is where design meets thought leadership. From industry trends to creative breakthroughs, we share insights that inspire, challenge, and push the boundaries of design.
            </p>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {JOURNAL_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-[40px] mb-[24px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] grayscale group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Text Content */}
              <div className="text-center px-4">
                <h3 className="text-white text-[18px] font-sans font-medium mb-4 leading-snug line-clamp-2 min-h-[50px]">
                  {post.title}
                </h3>
                <p className="text-[#999999] text-[12px] font-pixel uppercase tracking-widest">
                  {post.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;