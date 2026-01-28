"use client";

import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="relative w-full min-h-[855px] px-5 py-5 sm:px-[20px] sm:py-[20px] bg-black overflow-hidden">
      <div className="relative w-full h-[815px] rounded-[40px] md:rounded-[80px] overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/WDp2Zq4B8pE5m242xYYTOrQA4-14.webp"
            alt="Car taillights background"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center mb-12 lg:mb-0">
            <h1 className="font-display text-white text-[64px] md:text-[100px] lg:text-[120px] leading-[0.9] mb-8 select-none">
              GET IN <br /> TOUCH
            </h1>
            <p className="max-w-[420px] text-white text-[16px] md:text-[18px] leading-[1.6] opacity-90">
              Have a project in mind? Whether you’re launching a brand, designing a product, or elevating your digital presence, we’re here to bring your vision to life.
            </p>
          </div>

          {/* Right Contact Form Overlay */}
          <div className="w-full lg:w-[540px] glass-card rounded-[40px] md:rounded-[60px] p-8 md:p-12 border border-white/10">
            <div className="mb-8">
              <span className="font-sans text-[12px] font-medium tracking-widest text-white/50 uppercase">
                contact Us.25
              </span>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] uppercase tracking-wider text-white/50 block">First name</label>
                  <input 
                    type="text" 
                    placeholder="Jane"
                    className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] uppercase tracking-wider text-white/50 block">Last name</label>
                  <input 
                    type="text" 
                    placeholder="Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] uppercase tracking-wider text-white/50 block">Email</label>
                  <input 
                    type="email" 
                    placeholder="jane@framer.com"
                    className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] uppercase tracking-wider text-white/50 block">Phone no.</label>
                  <input 
                    type="tel" 
                    placeholder="(347)-000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full h-[60px] bg-white text-black font-sans font-bold text-[14px] uppercase tracking-widest rounded-full hover:bg-white/90 transition-all duration-300 transform active:scale-[0.98] mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;