"use client";

import React from 'react';
import Image from 'next/image';

/**
 * CLIENTS Section
 * Featuring a pixelated "CLIENTS" title, descriptive text, 
 * and a horizontal scrolling row of logo cards.
 */

const ClientsSection = () => {
  // Client logos data based on provided assets and structure
  // We duplicate the logos list to create a seamless infinite scroll effect
  const logos = [
    { id: 1, name: 'Wave Studios', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/svgs/KdMNQYLrg8zOxJbNubd1kKdOE4Q-1.svg' },
    { id: 2, name: 'Meridian', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/svgs/ZoIlzkbx4SFvVtBaEzODlurkUas-2.svg' },
    { id: 3, name: 'Arch', icon: null, placeholder: 'a.' }, // Based on screenshot having "arch."
    { id: 4, name: 'Oakley', icon: null, placeholder: 'OAKLEY' },
    { id: 5, name: 'Circle', icon: null, placeholder: '●' },
  ];

  // Combine for marquee effect
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-black px-[20px] py-[10px]">
      <div className="bg-[#121212] rounded-[40px] md:rounded-[80px] pt-[60px] pb-[80px] md:pt-[100px] md:pb-[120px] overflow-hidden">
        <div className="container mx-auto px-6 md:px-[60px]">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16 md:mb-24">
            <h1 className="font-display text-[48px] md:text-[80px] leading-none tracking-tight text-white uppercase m-0">
              CLIENTS
            </h1>
            
            <div className="max-w-[420px]">
              <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#999999] m-0">
                At Magnetto, we collaborate with forward-thinking brands, startups, and industry leaders who dare to challenge the norm.
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex animate-infinite-scroll whitespace-nowrap gap-5 px-5">
            {marqueeLogos.map((client, index) => (
              <div 
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-[200px] md:w-[280px] h-[160px] md:h-[220px] bg-[#1a1a1a] rounded-[30px] md:rounded-[40px] flex flex-col items-center justify-center gap-4 group transition-colors duration-300 hover:bg-[#222222] border border-white/5"
              >
                {client.icon ? (
                  <div className="w-16 h-16 md:w-20 md:h-20 relative opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <Image 
                      src={client.icon} 
                      alt={client.name}
                      fill
                      className="object-contain filter invert"
                    />
                  </div>
                ) : (
                  <span className="font-sans font-bold text-[24px] md:text-[32px] text-white/40 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
                    {client.placeholder}
                  </span>
                )}
                <span className="font-sans text-[12px] md:text-[14px] uppercase tracking-wider text-[#666666] group-hover:text-[#999999]">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;