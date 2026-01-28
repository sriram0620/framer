"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Hero4 - Voice AI component with default sky background and chat animation
 * Features dynamic sidebar with Voice AI projects (v1, v2, v3, v4)
 */

const projectData = [
  {
    id: "voice-assistant",
    title: "Voice Assistant — Conversational AI",
    services: ["Voice AI", "NLP"],
    description: "Intelligent voice assistants that understand natural language and context. Build conversational experiences that feel natural and human-like for customer service and automation.",
    image: "/v1.avif",
  },
  {
    id: "speech-recognition",
    title: "Speech Recognition — Real-Time Transcription",
    services: ["Voice AI", "Speech Processing"],
    description: "Advanced speech recognition technology that converts voice to text with high accuracy. Support for multiple languages and dialects with real-time processing.",
    image: "/v2.avif",
  },
  {
    id: "voice-synthesis",
    title: "Voice Synthesis — Natural Text-to-Speech",
    services: ["Voice AI", "TTS"],
    description: "Natural-sounding text-to-speech systems that generate human-like voices. Custom voice cloning and emotional expression for engaging audio experiences.",
    image: "/v3.avif",
  },
  {
    id: "call-automation",
    title: "Call Automation — Intelligent Routing",
    services: ["Voice AI", "Automation"],
    description: "Intelligent call center automation that routes calls, handles inquiries, and provides 24/7 customer support. Reduce wait times and improve customer satisfaction.",
    image: "/v4.png",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Default sky background URL
  const defaultSkyBackground = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/84dc3f31-1caa-493e-bd20-f78cd5761f9e-fluence-framer-website/assets/images/vkYLURkIQB3wgCJUD4m2MGdbKg-1.png";
  
  // Get current background image based on activeIndex
  const getBackgroundImage = () => {
    if (activeIndex === 0) {
      return defaultSkyBackground; // Default sky background for Voice Assistant
    }
    // For other items (1, 2, 3), use their respective images
    return projectData[activeIndex].image;
  };

  return (
    <>
      {/* Dynamic Background - Changes based on activeIndex */}
      <div className="fixed inset-0 z-0 w-full h-full">
        {/* Default Sky Background - Always present, fades when other images are active */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeIndex === 0 ? "opacity-100" : "opacity-0"
        }`}>
          <Image
            src={defaultSkyBackground}
            alt="Sky Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        
        {/* Dynamic Backgrounds for items 1, 2, 3 */}
        {projectData.slice(1).map((project, index) => {
          const actualIndex = index + 1; // Map to actual index (1, 2, 3)
          return (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeIndex === actualIndex ? "opacity-100" : "opacity-0"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/40" />
            </div>
          );
        })}
      </div>
      
      <header
        id="hero"
        className="relative w-full h-screen max-h-screen flex flex-col items-center justify-center py-4 md:py-6 overflow-hidden bg-transparent z-10"
      >
        <div className="container relative z-10 w-full h-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 px-4 md:px-6 lg:px-12">
          
          {/* Left Column: Badge, Headline, Description & Chat UI */}
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-[600px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className={`mb-2 md:mb-3 flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full border backdrop-blur-md flex-shrink-0 ${
              activeIndex === 0 
                ? "border-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.4)]" 
                : "border-white/20 bg-white/10"
            }`}>
              <div className="w-3 h-3 md:w-4 md:h-4 text-[#9D59FF]">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.83 8.67L22 9.27L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.27L9.17 8.67L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <span className={`text-[12px] md:text-[14px] font-medium tracking-wide uppercase ${
                activeIndex === 0 ? "text-[#160D1F]" : "text-white"
              }`}>
                Voice AI Technology
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className={`max-w-[1000px] mb-2 md:mb-3 text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-[1.1] tracking-[-0.02em] ${
              activeIndex === 0 ? "text-[#160D1F]" : "text-white"
            }`}>
              Natural Voice{" "}
              <span className={activeIndex === 0 ? "text-shine-dark" : "text-shine-white"}>Intelligence</span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p variants={itemVariants} className={`max-w-[640px] mb-3 md:mb-4 text-[13px] md:text-[15px] lg:text-[16px] leading-[1.5] ${
              activeIndex === 0 ? "text-[#4D4D4D]" : "text-white/90"
            }`}>
              Intelligent voice interfaces that understand context, intent, and emotion. Build conversational experiences that feel natural and human-like.
            </motion.p>

            {/* Floating Glassmorphism Chat UI Mockup - Only show for Voice Assistant (index 0) */}
            {activeIndex === 0 && (
            <motion.div 
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[800px] h-[240px] md:h-[280px] lg:h-[320px] rounded-[20px] md:rounded-[24px] border border-white/60 bg-white/20 backdrop-blur-[24px] shadow-2xl overflow-hidden flex-shrink-0 mt-4"
            >
              {/* Decorative Blobs/Cubes */}
              <div className="absolute top-3 right-3 md:top-6 md:right-6 animate-vertical-bounce">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/84dc3f31-1caa-493e-bd20-f78cd5761f9e-fluence-framer-website/assets/images/B0V3gNPI0mHpDUqWHR41pDhDfMs-3.png"
                  alt="Floating Cube"
                  width={120}
                  height={120}
                  className="opacity-80 w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
                />
              </div>
              <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 animate-vertical-bounce delay-700">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/84dc3f31-1caa-493e-bd20-f78cd5761f9e-fluence-framer-website/assets/images/mNO89ys2gWfzwt1uvhnoJyIgupY-2.png"
                  alt="Translucent Shape"
                  width={100}
                  height={100}
                  className="opacity-60 w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
                />
              </div>

              {/* Chat Bubble Interface */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-4 lg:p-6">
                <div className="w-full max-w-[480px] md:max-w-[550px] flex flex-col gap-2 md:gap-3 lg:gap-4">
                  {/* User Message */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex items-end justify-end gap-2 self-end max-w-[85%]"
                  >
                    <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-[16px] md:rounded-[20px] rounded-br-[4px] bg-white border border-white/80 shadow-sm text-[#0D0D0D] text-[11px] md:text-[13px]">
                      How can I set up voice commands?
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/84dc3f31-1caa-493e-bd20-f78cd5761f9e-fluence-framer-website/assets/icons/8xPKr1A96oFIM4WCr0MnFTRZZdg-1.png" 
                        alt="User" width={32} height={32} 
                      />
                    </div>
                  </motion.div>

                  {/* Bot Message */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="flex items-start gap-2 self-start max-w-[85%]"
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#9D59FF] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                    </div>
                    <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-[16px] md:rounded-[20px] rounded-bl-[4px] bg-[#160D1F] text-white shadow-xl text-[11px] md:text-[13px]">
                      I'll help you integrate voice commands! Our Voice AI understands natural language and can handle complex interactions.
                    </div>
                  </motion.div>

                  {/* Input Area Mockup */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    className="mt-2 md:mt-3 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white/40 border border-white/60 backdrop-blur-md flex items-center justify-between text-[#4D4D4D]"
                  >
                    <span className="text-[11px] md:text-[12px]">Speak or type...</span>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-0.5 bg-white/60 rounded-lg text-[9px] md:text-[10px] border border-white/80">Voice AI</div>
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#160D1F] text-white flex items-center justify-center">
                        <svg width="10" height="10" className="md:w-3 md:h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                    className="flex flex-wrap gap-1.5 justify-center"
                  >
                    <button className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/50 border border-white text-[9px] md:text-[11px] font-medium text-[#160D1F]">Voice Commands</button>
                    <button className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/50 border border-white text-[9px] md:text-[11px] font-medium text-[#160D1F]">Setup Bot</button>
                    <button className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/50 border border-white text-[9px] md:text-[11px] font-medium text-[#160D1F]">Test Voice</button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            )}
          </motion.div>

          {/* Right Column: Dynamic Project Info & Sidebar Navigation */}
          <div className="lg:w-[420px] bg-black/20 backdrop-blur-xl border border-white/10 p-8 rounded-[24px] animate-in fade-in slide-in-from-right-8 duration-1000">
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

        <style jsx>{`
          .text-shine-dark {
            background: linear-gradient(to right, #160D1F 20%, #9D59FF 40%, #9D59FF 60%, #160D1F 80%);
            background-size: 200% auto;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            animation: shine 3.5s linear infinite;
          }
          .text-shine-white {
            background: linear-gradient(to right, #FFFFFF 20%, #9D59FF 40%, #9D59FF 60%, #FFFFFF 80%);
            background-size: 200% auto;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            animation: shine 3.5s linear infinite;
          }
          @keyframes shine {
            to { background-position: 200% center; }
          }
          @keyframes vertical-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-vertical-bounce {
            animation: vertical-bounce 6s ease-in-out infinite;
          }
          .delay-700 {
            animation-delay: 0.7s;
          }
        `}</style>
      </header>
    </>
  );
};

export default HeroSection;
