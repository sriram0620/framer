import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black px-5 pb-5 pt-8">
      {/* Main Footer Card */}
      <div className="mx-auto max-w-[1440px] rounded-[80px] bg-[#121212] px-10 py-16 md:px-[60px] md:py-[80px] lg:px-[100px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Contact & Email */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-white">
                STAY CONNECTED.
              </span>
              <a 
                href="mailto:hi@magnetto.com" 
                className="block font-display text-[42px] leading-tight text-white hover:opacity-80 transition-opacity md:text-[56px]"
              >
                HI@MAGNETTO.COM
              </a>
              <p className="max-w-[420px] font-sans text-[14px] leading-[1.6] text-[#999999] md:text-[16px]">
                At Magnetto, we break boundaries to craft designs that stand out and deliver results. We blend creativity with strategy, turning bold ideas into digital experiences that captivate and inspire.
              </p>
              <div className="pt-8">
                <p className="font-sans text-[12px] text-[#999999]">
                  Made with Love by <span className="text-white">FutureThings.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Navigation */}
          <div className="lg:col-span-3">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="font-sans text-[22px] font-medium text-white transition-colors hover:text-[#999999] md:text-[24px]">Home</a>
              <a href="#" className="font-sans text-[22px] font-medium text-white transition-colors hover:text-[#999999] md:text-[24px]">About</a>
              <a href="#" className="group flex items-start gap-1 font-sans text-[22px] font-medium text-white transition-colors hover:text-[#999999] md:text-[24px]">
                Projects <span className="text-[12px] text-[#999999] mt-1">(06)</span>
              </a>
              <a href="#" className="group flex items-start gap-1 font-sans text-[22px] font-medium text-white transition-colors hover:text-[#999999] md:text-[24px]">
                Journal <span className="text-[12px] text-[#999999] mt-1">(05)</span>
              </a>
              <a href="#" className="font-sans text-[22px] font-medium text-white transition-colors hover:text-[#999999] md:text-[24px]">Contact us</a>
            </nav>
          </div>

          {/* Right Column: Social Media */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-sans text-[22px] font-medium text-white md:text-[24px]">Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white hover:text-black">
                <Twitter size={18} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white hover:text-black">
                <Instagram size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white hover:text-black">
                <Linkedin size={18} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white hover:text-black">
                <Youtube size={18} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

        {/* Large Pixelated Logo Section */}
        <div className="mt-24 border-t border-white/10 pt-16 text-center lg:mt-32">
          <h2 className="mb-4 font-display text-[80px] tracking-tight text-[#e0e0e0] opacity-90 md:text-[120px] lg:text-[160px]">
            Magnetto
          </h2>
          <p className="font-sans text-[12px] tracking-[0.05em] text-[#666666] uppercase">
            ©2025 MAGNETTO Studio. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;