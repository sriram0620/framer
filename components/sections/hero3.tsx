import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen max-h-screen bg-black overflow-hidden flex flex-col">
      {/* Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[30px] md:left-[50px] top-0 w-px h-full bg-white/10" />
        <div className="absolute right-[30px] md:right-[50px] top-0 w-px h-full bg-white/10" />
      </div>

      {/* Main Content Wrap */}
      <div className="relative z-10 h-full flex flex-col px-4 md:px-8 lg:px-[50px]">
        {/* Top Header Labels */}
        <div className="w-full flex items-center justify-between py-3 md:py-4 lg:py-6 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-3 md:w-4 h-px bg-white/20" />
            <span className="text-[10px] md:text-[12px] uppercase tracking-widest text-[#999999] font-medium">
              LA, California
            </span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
             <span className="text-[10px] md:text-[12px] text-white/80 font-medium">
              Tuesday, 05:17 PM
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="text-[10px] md:text-[12px] text-[#999999] font-medium uppercase tracking-widest">
              (21.0278° N, 105.8342° E)
            </span>
            <div className="w-3 md:w-4 h-px bg-white/20" />
          </div>
        </div>

        {/* Hero Title and Main Visual Area */}
        <div className="flex-1 relative flex flex-col justify-center py-4 md:py-8 lg:py-12 min-h-0">
          {/* Large Background Robot Component */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] md:w-[55%] lg:w-[60%] h-full pointer-events-none">
             <Image 
                src="https://framerusercontent.com/images/SVpiB8hg7Q5zZKU3C5LOIio708o.png" 
                alt="Robot Hero"
                width={1800}
                height={1620}
                className="w-full h-full object-contain opacity-90 transition-transform duration-700 ease-out translate-x-5 md:translate-x-10 hover:translate-x-0"
                priority
             />
          </div>

          {/* Headline Container */}
          <div className="relative z-20 pointer-events-none">
            {/* PRIVATE Row */}
            <div className="flex items-center gap-2 md:gap-4 leading-[0.8] mb-2 md:mb-4">
                <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[180px] font-extrabold uppercase tracking-tighter text-white">
                    Private
                </h1>
                
                <div className="ml-auto pr-4 md:pr-10 lg:pr-20 text-right">
                   <h2 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[180px] font-extrabold uppercase tracking-tighter text-white/20 leading-none">LLM</h2>
                   <p className="text-[10px] md:text-[12px] text-[#999999] mt-1 md:mt-2 font-medium">©Since 2019</p>
                </div>
            </div>

            {/* SECURITY Row */}
            <div className="leading-[0.8]">
                <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[180px] font-extrabold uppercase tracking-tighter text-white">
                    Security
                </h1>
            </div>
          </div>

          {/* Subcontent & Socials Row */}
          <div className="mt-6 md:mt-10 lg:mt-12 flex justify-between items-end flex-shrink-0">
             <div className="max-w-[400px] md:max-w-[500px]">
                {/* Client Satisfaction */}
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                                <Image 
                                    src={`https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/412eb9d5-da99-4d0e-ba43-07883e4c8136-altrion-wbs-framer-website/assets/images/${i === 1 ? 'gDcaZH5xt6hqSU2VbK2snAw-2.jpg' : i === 2 ? 'Wu0ngxjedkJ31EstGJABQBoafk-3.jpg' : '5O8P63EQwkFO1m5OTR4jsw7hI8-4.jpg'}`} 
                                    alt="Avatar" 
                                    width={40} 
                                    height={40} 
                                />
                            </div>
                        ))}
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-[8px] md:text-[10px] font-bold text-black italic">
                            +51
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-0.5 mb-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <img key={s} src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/412eb9d5-da99-4d0e-ba43-07883e4c8136-altrion-wbs-framer-website/assets/svgs/a4BzyyjCIl3hcUL0na5FxQi1U-7.svg" alt="star" className="w-2.5 md:w-3" />
                            ))}
                        </div>
                        <p className="text-[10px] md:text-[12px] text-[#999999] uppercase tracking-wider font-semibold">Happy clients</p>
                    </div>
                </div>

                <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-white leading-[1.4] mb-4 md:mb-6 lg:mb-8 font-medium">
                    Deploy secure, on-premise language models that protect sensitive data while delivering enterprise-grade AI capabilities. 
                    <span className="text-white"> Custom-trained models</span> for your specific domain, running entirely within your infrastructure. 
                    <span className="text-[#999999]"> Zero data leakage, complete control, maximum security.</span>
                </p>

                {/* CTA Button */}
              
             </div>

             {/* Vertical Social Links */}
             <div className="flex flex-col gap-3 md:gap-4 pb-2 md:pb-4">
                {[
                    { icon: "xKyRo384uNICGWyDuVdYbi4EWNM-8.svg", url: "https://facebook.com" },
                    { icon: "P1o1pZtbI3YptHQv4xbE4NAEGY-9.svg", url: "https://x.com" },
                    { icon: "cxHtoSVkfrjiQUM2ECEOXYjAAMU-10.svg", url: "https://instagram.com" }
                ].map((social, idx) => (
                    <a 
                        key={idx}
                        href={social.url}
                        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group"
                    >
                        <img 
                            src={`https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/412eb9d5-da99-4d0e-ba43-07883e4c8136-altrion-wbs-framer-website/assets/svgs/${social.icon}`} 
                            alt="Social" 
                            className="w-4 md:w-5 opacity-60 group-hover:opacity-100 invert"
                        />
                    </a>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Prismatic/Background Blur Effects */}
      <div className="absolute top-[20%] left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] prismatic-leak opacity-20 pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] right-[0%] w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Decorative hairline at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
};

export default Hero;
