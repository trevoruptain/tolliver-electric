"use client";

import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      {/* Locations section kept simple or refactored? I'll keep the original logic or simple text for now, 
          but wait, the footer has locations. 
          Let's add a simple locations map placeholder or list if needed. 
          The footer covers "Service Areas" links, but maybe a visual map section is nice.
          For now, the sections above are comprehensive enough for a sophisticated look.
      */}
      <CTASection />
    </div>
  );
}
