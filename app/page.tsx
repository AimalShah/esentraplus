"use client";

import ProductSection from "@/components/product-section";
import PhilosophySection from "@/components/philosophy-section";
import ContactSection from "@/components/contact-section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SlideIn } from "@/components/animations/Reveal";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const parent = {
  hidden: {},
  show: {
    transition: {
      duration: 0.7,
      ease: easeOut,
      staggerChildren: 0.15,
      delayChildren: 0.9,
    },
  },
};

const parent1 = {
  hidden: {},
  show: {
    transition: {
      duration: 0.7,
      ease: easeOut,
      staggerChildren: 0.15,
      delayChildren: 1.2,
    },
  },
};

const child = {
  hidden: { y: 60, opacity: 1 },
  show: { y: 0, opacity: 1, transition: { ease: easeOut } },
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="min-h-screen md:h-screen p-0 m-0 relative overflow-hidden">
        <motion.div
          initial={{ y: 100, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          className="absolute inset-0 bg-black/40 z-10"
        />
        <motion.div
          style={{ scale: heroScale }}
          initial={{ y: 100, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/1502219/pexels-photo-1502219.jpeg"
            alt="img"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div 
          style={{ y: textY, opacity: heroOpacity }}
          className="absolute z-20 inset-0 flex flex-col gap-3 md:gap-4 justify-center items-center px-4 py-20"
        >
          {/* First Line - Pure Care for */}
          <div className="overflow-hidden">
            <motion.h1
              variants={parent}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-mono text-white font-bold text-center flex flex-wrap justify-center gap-x-3 md:gap-x-4"
            >
              {"Pure Care for".split(" ").map((word, index) => (
                <motion.span key={index} variants={child} className="block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Second Line - Radiant Skin */}
          <div className="overflow-hidden">
            <motion.h1
              variants={parent1}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-mono text-white font-bold text-center flex flex-wrap justify-center gap-x-3 md:gap-x-4"
            >
              {"Radiant Skin".split(" ").map((word, index) => (
                <motion.span key={index} variants={child} className="block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: easeOut, duration: 0.8 }}
            className="font-sans text-white/70 text-center text-base sm:text-lg md:text-xl px-4 max-w-2xl md:max-w-[50%] mt-2 md:mt-4"
          >
            Nourish your skin with formulas inspired by nature and perfected by
            science. Gentle, effective, and designed for real results — because
            healthy skin should look effortless.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, ease: easeOut, duration: 0.8 }}
            className="mt-8 md:mt-12 font-mono"
          >
            <a 
              href="#products"
              className="border border-white text-white py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg md:text-xl rounded-full font-semibold hover:bg-white hover:text-[#2D1F1B] transition-all duration-300 cursor-pointer inline-block"
            >
              View Products
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-1.5 bg-white/70 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>

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
