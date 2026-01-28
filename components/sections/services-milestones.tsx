import React from 'react';
import Image from 'next/image';

const ServicesMilestones = () => {
  return (
    <section className="bg-black py-[10px] md:py-[20px] px-[10px] md:px-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] max-w-[1440px] mx-auto">
        
        {/* Left Panel: Services */}
        <div className="bg-[#121212] rounded-[40px] md:rounded-[80px] p-[30px] md:p-[60px] flex flex-col items-center text-center">
          <h3 className="font-display text-[24px] uppercase tracking-wider mb-12 text-white">
            Services
          </h3>

          {/* Stackable Image Cards */}
          <div className="relative w-full max-w-[320px] h-[340px] mb-12 flex items-center justify-center">
            {/* Background Card 1 (Pear) */}
            <div className="absolute left-[10%] top-0 w-[180px] h-[220px] rounded-[20px] overflow-hidden transform -rotate-12 z-10 border border-white/10 shadow-2xl">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/LXvQdv3CUJ7wzpKt6xfhACOV5jQ-7.webp"
                alt="Strategy"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Background Card 2 (Perfume) */}
            <div className="absolute left-[30%] top-4 w-[180px] h-[220px] rounded-[20px] overflow-hidden transform -rotate-6 z-20 border border-white/10 shadow-2xl">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/H3KNH97QuI3MqCMMrAfkRwWSDAc-9.jpg"
                alt="Branding"
                fill
                className="object-cover"
              />
            </div>

            {/* Front Card (Portrait) */}
            <div className="absolute left-[20%] top-12 w-[220px] h-[280px] rounded-[20px] overflow-hidden transform rotate-0 z-30 border border-white/10 shadow-2xl">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/RRlaQhN002Od7y3IQySyvLv5WY-8.jpg"
                alt="Web Design"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-[#999999] text-[16px] leading-[1.6] max-w-[400px]">
            we craft digital experiences that elevate brands and engage audiences. Our services blend creativity with strategy, ensuring every design is not just visually striking but also results-driven.
          </p>
        </div>

        {/* Right Panel: Milestones */}
        <div className="bg-[#121212] rounded-[40px] md:rounded-[80px] p-[30px] md:p-[60px] flex flex-col items-center justify-center text-center">
          <h3 className="font-display text-[24px] uppercase tracking-wider mb-16 text-white self-center">
            Milestones
          </h3>

          <div className="w-full space-y-20">
            {/* Milestone 1 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[120px] md:text-[140px] font-medium leading-none text-white">1</span>
                <span className="text-[60px] md:text-[80px] font-light leading-none text-[#444444]">+</span>
              </div>
              <p className="text-[#999999] text-[14px] uppercase tracking-widest font-medium">
                Extensive Industry Experience
              </p>
            </div>

            {/* Divider */}
            <div className="w-[120px] h-[1px] bg-white/10 mx-auto"></div>

            {/* Milestone 2 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[120px] md:text-[140px] font-medium leading-none text-white">1</span>
                <span className="text-[60px] md:text-[80px] font-light leading-none text-[#444444]">+</span>
              </div>
              <p className="text-[#999999] text-[14px] uppercase tracking-widest font-medium">
                Projects Completed
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesMilestones;