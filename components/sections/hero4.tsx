"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Hero4 - Clean and simple hero with elegant design
 * Features minimal layout with focus on content and imagery
 */
export default function Hero4() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-0 w-full lg:w-auto">
          <div className={`max-w-2xl space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm w-fit">
              <Sparkles className="w-3 h-3 text-[#81E6B2]" />
              <span className="text-[11px] font-medium text-white/80 uppercase tracking-wider">
                Voice AI Technology
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-white">
              Natural Voice
              <br />
              <span className="bg-gradient-to-r from-[#81E6B2] via-white to-[#81E6B2] bg-clip-text text-transparent">
                Intelligence
              </span>
              <br />
              For Everyone
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              Intelligent voice interfaces that understand context, intent, and emotion. Build conversational experiences that feel natural and human-like. 
              From voice assistants to call center automation, our <strong className="text-white">Voice AI</strong> enables seamless, 
              multilingual interactions that transform how customers engage with your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-[#81E6B2] hover:bg-[#6ed4a0] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden shadow-lg shadow-[#81E6B2]/20 hover:shadow-[#81E6B2]/40"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Parallax */}
        <div className="flex-1 relative overflow-hidden h-full w-full lg:w-auto">
          <div 
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)`,
            }}
          >
            <Image
              src="https://framerusercontent.com/images/m2ftsl8holCuJBbeaL8Li0qbm6M.jpg?scale-down-to=4096"
              alt="Hero Visual"
              fill
              className="object-cover"
              priority
              quality={95}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>

          {/* Subtle Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#81E6B2]/10 rounded-full blur-3xl animate-pulse" />
          <div 
            className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" 
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/40 uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
