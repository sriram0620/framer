"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Hero component cloning the immersive landing section.
 * Features a dynamic background switcher controlled by a vertical project navigation.
 */

const projectData = [
  {
    id: "private-llms",
    title: "Private LLMs — Enterprise Intelligence",
    services: ["Private LLMs", "AI Infrastructure"],
    description: "Deploy secure, on-premise language models that protect sensitive data while delivering enterprise-grade AI capabilities. Custom-trained models for your specific domain.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eeed5571-73ca-4e90-a825-4ddef08ce5fb-catchup-framer-website/assets/images/u3nH40BXnXGuvt2HcEa11xbaag-4.jpg",
  },
  {
    id: "vision-ai",
    title: "Vision AI — Image Recognition",
    services: ["Vision AI", "Computer Vision"],
    description: "Advanced image analysis and recognition systems that understand context, detect objects, and extract meaningful insights from visual data at scale.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eeed5571-73ca-4e90-a825-4ddef08ce5fb-catchup-framer-website/assets/images/XdRM8ESxgDfBjm1f3rYrQs81JCM-3.jpg",
  },
  {
    id: "voice-ai",
    title: "Voice AI — Natural Language",
    services: ["Voice AI", "NLP"],
    description: "Intelligent voice interfaces that understand context, intent, and emotion. Build conversational experiences that feel natural and human-like.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eeed5571-73ca-4e90-a825-4ddef08ce5fb-catchup-framer-website/assets/images/RQYRGYX9933aKAGzZPggeGrnnyI-2.jpg",
  },
  {
    id: "ai-platform",
    title: "AI Platform — Integrated Solutions",
    services: ["AI Platform", "Full Stack"],
    description: "Unified AI platform combining Private LLMs, Vision AI, and Voice AI for comprehensive intelligent solutions that transform business operations.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eeed5571-73ca-4e90-a825-4ddef08ce5fb-catchup-framer-website/assets/images/m2ftsl8holCuJBbeaL8Li0qbm6M-1.jpg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black text-white">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/30" />
          </div>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          
          {/* Left Column: Heading & CTAs */}
          <div className="max-w-[720px] space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full">
              <span className="text-[12px] font-medium tracking-wide leading-none py-1">
                AI-Powered Solutions for Modern Business
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-[72px] font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm">
              Intelligent AI <br /> & Enterprise Solutions
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 max-w-[540px] leading-relaxed">
              Private LLMs for secure intelligence, Vision AI for image recognition, and Voice AI for natural interactions — 
              transforming businesses with cutting-edge technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="pill-button bg-white text-black hover:bg-[#81E6B2] transition-colors group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/services"
                className="pill-button bg-[#81E6B2] text-black hover:bg-white transition-colors inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Project Info & Sidebar Navigation */}
          <div className="lg:w-[420px] bg-black/20 backdrop-blur-xl border border-white/10 p-8 rounded-[24px] lg:mb-4 animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Active Project Card */}
            <div className="mb-10 min-h-[140px]">
              <div className="flex items-center gap-3 mb-3">
                {projectData[activeIndex].services.map((service, i) => (
                  <React.Fragment key={service}>
                    <span className="text-[14px] font-medium text-white/70">{service}</span>
                    {i < projectData[activeIndex].services.length - 1 && (
                      <div className="w-1 h-1 rounded-full bg-white/40" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-[18px] leading-snug text-white font-normal mb-8">
                {projectData[activeIndex].description}
              </p>
              <div className="w-full h-[180px] relative rounded-xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src={projectData[activeIndex].image}
                  alt={projectData[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Navigation List */}
            <ul className="space-y-4">
              {projectData.map((project, index) => (
                <li key={project.id}>
                  <button
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left py-2 px-1 transition-all duration-300 border-b ${
                      index === activeIndex 
                        ? "text-white border-white" 
                        : "text-white/40 border-white/10 hover:text-white/70 hover:border-white/40"
                    }`}
                  >
                    <span className="text-[15px] font-medium tracking-wide uppercase">
                      {project.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-[#81E6B2] to-transparent blur-3xl opacity-30" />
      </div>
    </section>
  );
}
