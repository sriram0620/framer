import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section 
      id="about"
      className="relative w-full overflow-hidden"
      style={{
        padding: '20px 0',
        backgroundColor: '#000000',
      }}
    >
      <div 
        className="container mx-auto px-[20px]"
        style={{
          maxWidth: '1440px',
        }}
      >
        <div 
          className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-cover bg-center"
          style={{
            borderRadius: '80px',
            backgroundColor: '#121212',
          }}
        >
          {/* Background Image - Orange Gradient with Silhouette */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/7bhFM0Tg87FLW68G52hNOm91gg-6.webp"
              alt="About Maverick"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Central Glassmorphism Component */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-6 md:p-12">
            <div 
              className="relative w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-between px-10 py-16 md:px-20 md:py-24"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Left Decoration / Label */}
              <div className="hidden md:block absolute left-20 top-1/2 -translate-y-1/2">
                <span 
                  className="font-sans text-[12px] font-medium tracking-[0.1em] text-white opacity-60 uppercase"
                >
                  about Us.25
                </span>
              </div>

              {/* Central Pixel Heading */}
              <div className="flex-1 flex justify-center items-center">
                <h2 
                  className="font-display text-[60px] md:text-[80px] lg:text-[100px] leading-none text-white uppercase tracking-tight"
                  style={{
                    fontFamily: '"Silkscreen", cursive',
                  }}
                >
                  about
                </h2>
              </div>

              {/* Right Description Text */}
              <div className="mt-8 md:mt-0 md:max-w-[400px] text-center md:text-left">
                <p 
                  className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-white font-normal"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  At Magnetto, we craft designs that don’t just look stunning—they create impact. Blending creativity with strategy, we transform ideas into immersive digital experiences that captivate, engage, and convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;