"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Hero2 from "@/components/sections/hero2";
import Hero3 from "@/components/sections/hero3";
import Hero4 from "@/components/sections/hero4";
import ProjectsGrid from "@/components/sections/projects-grid";
import AboutSection from "@/components/sections/about";
import ClientsSection from "@/components/sections/clients";
import ServicesMilestones from "@/components/sections/services-milestones";
import Journal from "@/components/sections/journal";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [activeHero, setActiveHero] = useState("hero");

  // Load saved hero preference from localStorage
  useEffect(() => {
    const savedHero = localStorage.getItem("activeHero");
    if (savedHero) {
      setActiveHero(savedHero);
    }
  }, []);

  // Save hero preference to localStorage
  const handleHeroChange = (hero: string) => {
    setActiveHero(hero);
    localStorage.setItem("activeHero", hero);
  };

  const renderHero = () => {
    switch (activeHero) {
      case "hero2":
        return <Hero2 />;
      case "hero3":
        return <Hero3 />;
      case "hero4":
        return <Hero4 />;
      default:
        return <Hero />;
    }
  };

  return (
    <main id="main" className="min-h-screen bg-black">
      <Navbar activeHero={activeHero} onHeroChange={handleHeroChange} />
      <div className="transition-opacity duration-500">
        {renderHero()}
      </div>
      {/* <ProjectsGrid />
      <AboutSection />
      <ClientsSection />
      <ServicesMilestones />
      <Journal />
      <ContactSection />
      <Footer /> */}
    </main>
  );
}
