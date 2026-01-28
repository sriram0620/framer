"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Navbar component - A floating pill-shaped navigation dock fixed at the bottom.
 * Features hero session switcher and contact button.
 */
interface NavbarProps {
  activeHero?: string;
  onHeroChange?: (hero: string) => void;
}

export default function Navbar({ activeHero = "hero", onHeroChange }: NavbarProps) {
  const heroOptions = [
    { id: "hero", label: "Home" },
    { id: "hero2", label: "Vision AI" },
    { id: "hero3", label: "Private LLMs" },
    { id: "hero4", label: "Voice AI" },
  ];

  // Dynamic color scheme based on active hero
  const heroColors: Record<string, { bg: string; hover: string; shadow: string }> = {
    hero: { 
      bg: "#81E6B2", 
      hover: "#6ed4a0", 
      shadow: "rgba(129, 230, 178, 0.3)" 
    },
    hero2: { 
      bg: "#81E6B2", 
      hover: "#6ed4a0", 
      shadow: "rgba(129, 230, 178, 0.3)" 
    },
    hero3: { 
      bg: "#FFFFFF", 
      hover: "#E5E5E5", 
      shadow: "rgba(255, 255, 255, 0.3)" 
    },
    hero4: { 
      bg: "#9D59FF", 
      hover: "#8B4FE6", 
      shadow: "rgba(157, 89, 255, 0.3)" 
    },
  };

  const currentColors = heroColors[activeHero] || heroColors.hero;

  const handleHeroClick = (heroId: string) => {
    if (onHeroChange) {
      onHeroChange(heroId);
    }
    // Scroll to top when switching heroes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div 
        className="flex items-center gap-4 md:gap-6 px-4 md:px-6 py-3 rounded-[40px] border border-white/10 shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: "rgba(18, 18, 18, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Profile Avatar - Enhanced */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full flex-shrink-0 border-2 border-white/20 shadow-lg ring-2 ring-white/10 transition-transform duration-300 hover:scale-110">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/ZNnj2toPGisdyf6eClzPnuV72fM-13.jpg"
            alt="Profile Avatar"
            fill
            className="object-cover object-center"
            sizes="56px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </div>

        {/* Hero Session Switcher */}
        <div className="hidden lg:flex items-center gap-2 px-2 border-l border-r border-white/10 mx-2">
          {heroOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleHeroClick(option.id)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 ${
                activeHero === option.id
                  ? "bg-white/20 text-white"
                  : "text-white/50 hover:text-white/80 hover:bg-white/5"
              }`}
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Mobile Hero Switcher Dropdown */}
        <div className="lg:hidden relative">
          <select
            value={activeHero}
            onChange={(e) => handleHeroClick(e.target.value)}
            className="px-2 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase bg-white/10 text-white border border-white/20 appearance-none cursor-pointer"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {heroOptions.map((option) => (
              <option key={option.id} value={option.id} className="bg-[#1a1a1a]">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Contact CTA - Dynamic Color */}
        <div className="flex-shrink-0">
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 ease-out overflow-hidden shadow-lg"
            style={{
              backgroundColor: currentColors.bg,
              boxShadow: `0 10px 25px ${currentColors.shadow}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentColors.hover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentColors.bg;
            }}
          >
            <div className="relative h-[18px] md:h-[20px] overflow-hidden flex flex-col">
              <span 
                className="text-[14px] md:text-[16px] font-semibold leading-[18px] md:leading-[20px] translate-y-0 group-hover:-translate-y-full transition-transform duration-300 text-black"
              >
                Contact
              </span>
              <span 
                className="absolute top-0 text-[14px] md:text-[16px] font-semibold leading-[18px] md:leading-[20px] translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-black"
              >
                Contact
              </span>
            </div>
            <div className="relative w-3.5 h-3.5 md:w-4 md:h-4 overflow-hidden">
               <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-full h-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-black"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}