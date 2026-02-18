"use client";

import Hero from "@/components/Hero";
import ProductSection from "@/components/product-section";
import PhilosophySection from "@/components/philosophy-section";
import ContactSection from "@/components/contact-section";
import { SlideIn } from "@/components/animations/Reveal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <ProductSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Why Choose Us Section */}
      <div className="md:max-w-[82rem] mx-auto px-4 py-16 md:py-20">
        <div className="flex md:flex-row-reverse flex-col md:gap-28">
          <SlideIn direction="right" className="w-full flex flex-col md:justify-center gap-6 md:gap-8">
            <h2 className="text-2xl md:text-3xl md:text-start text-center font-mono font-bold">
              Why Choose <span className="text-[#819076]">Us</span>
            </h2>
            <p className="text-base md:text-lg md:text-start text-center font-sans text-[#2D1F1B]/70">
              Our attention to details and satisfaction of our clients is what
              sets us apart from others in the Wellness industry.
            </p>
          </SlideIn>
          <SlideIn direction="left">
            <div className="md:p-10 md:mt-0 mt-8">
              <div className="rounded-2xl relative overflow-hidden">
                <motion.div 
                  className="absolute w-full h-full rounded-2xl bg-[#EAE4D7] z-[-1] -rotate-6"
                  whileHover={{ rotate: -3 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src="https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f38c443f2affc4bcbaa355_our-spa.avif"
                  alt="image of product"
                  className="rounded-2xl z-20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </SlideIn>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
