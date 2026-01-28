import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Beyond Time",
    category: "Art Direction",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/vDS2R7LCoOompxmBq9rV6LicTqI-2.webp",
    alt: "Beyond Time",
  },
  {
    title: "Brand Redefine",
    category: "Brand Identity",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/qWafyJa8F6xJsc3zslvSVczRiac-3.webp",
    alt: "Brand Redefine",
  },
  {
    title: "Every Second",
    category: "Ad Campaign",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/vLFNQftWxn8GlWaCrxJpZKWD10-4.webp",
    alt: "Every Second",
  },
  {
    title: "Timeless Mastery",
    category: "Art Direction",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/mq1HgIRqnDetOlR0yUFJ40kEIT4-5.webp",
    alt: "Timeless Mastery",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group relative w-full aspect-[4/3] md:aspect-[1.15/1] overflow-hidden rounded-[40px] md:rounded-[80px] cursor-pointer">
      {/* Background Image with hover effect */}
      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 filter grayscale-[100%] group-hover:grayscale-0">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Glassmorphic Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
        <div className="relative flex flex-col items-center justify-center w-full max-w-[320px] md:max-w-[480px] aspect-square rounded-[40px] md:rounded-[60px] bg-white/5 backdrop-blur-[20px] border border-white/10 text-center transition-opacity duration-500">
          <h5 className="font-sans text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-white opacity-80 mb-2 md:mb-4">
            {project.category}
          </h5>
          <h2 className="font-display text-[24px] md:text-[48px] lg:text-[56px] leading-[1.1] text-white uppercase break-words px-4">
            {project.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsGrid() {
  return (
    <section className="bg-black py-[10px] md:py-[20px] px-[10px] md:px-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[20px] max-w-[1440px] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}