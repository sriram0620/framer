import React from "react";
import Image from "next/image";

/**
 * Hero component for the Magnetto portfolio.
 * Features a pixelated title, a central portrait background, and a descriptive block.
 * Uses a fixed height layout with large rounded corners consistent with the "section-card" pattern.
 * Optimized to display completely in a single viewport.
 */
export default function Hero() {
  return (
    <section className="relative w-full px-2 py-2 md:px-4 md:py-4 bg-transparent touch-none">
      <div className="relative w-full h-screen max-h-screen overflow-hidden bg-[#F2F2F2] rounded-[40px] md:rounded-[156px] flex flex-col justify-between p-6 md:p-12 lg:p-16 xl:p-20">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/SQ2uUedRxIqO9jQCB4SXYQXRcQk-1.webp"
            alt="Maverick Portrait"
            fill
            className="object-cover object-center pointer-events-none grayscale"
            priority
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          
          {/* Top Section: Logo & Studio Label */}
          <div className="flex flex-col gap-1 md:gap-2 flex-shrink-0">
            <h1 className="font-display text-[48px] sm:text-[64px] md:text-[100px] lg:text-[120px] xl:text-[140px] leading-[0.8] tracking-[-0.04em] text-black uppercase">
              Vision AI
            </h1>
            <h5 className="font-sans font-medium text-[11px] md:text-[13px] uppercase tracking-[0.2em] text-black/60 translate-y-1 md:translate-y-2">
              Computer Vision・Image Recognition
            </h5>
          </div>

          {/* Bottom Section: Description Grid */}
          <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 flex-shrink-0 mt-auto">
            {/* Empty space for central alignment focus */}
            <div className="hidden md:block md:col-span-8" />
            
            {/* Description Text */}
            <div className="md:col-span-4 max-w-[400px]">
              <p className="font-sans text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] md:leading-[1.6] text-black font-medium text-balance">
                Advanced image analysis that understands context, detects objects, and extracts insights from visual data. 
                From facial recognition to quality control, our Vision AI processes millions of images with precision and speed, 
                enabling automated decision-making and enhanced user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative mask/canvas overlay (placeholder for Framer grain/noise if needed) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-noise" />
      </div>
    </section>
  );
}