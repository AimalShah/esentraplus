"use client";

import ProductSection from "@/components/product-section";
import PhilosophySection from "@/components/philosophy-section";
import { RevealLinks } from "@/components/links";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText, RevealHeading, ScaleIn, SlideIn } from "@/components/animations/Reveal";

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
  hidden: { y: 100, opacity: 1 },
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
      <div ref={heroRef} className="h-screen p-0 m-0 relative overflow-hidden">
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
        <motion.div 
          style={{ y: textY, opacity: heroOpacity }}
          className="absolute z-20 inset-0 flex flex-col gap-4 justify-center items-center"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={parent}
              initial="hidden"
              animate="show"
              className="md:text-8xl font-mono text-white font-bold text-center text-wrap overflow-hidden flex gap-2"
            >
              {"Pure Care for".split(" ").map((word, index) => (
                <motion.h2 key={index} variants={child}>{word}</motion.h2>
              ))}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={parent1}
              initial="hidden"
              animate="show"
              className="md:text-8xl font-mono text-white font-bold text-center text-wrap overflow-hidden flex gap-4"
            >
              {"Radiant Skin".split(" ").map((word, index) => (
                <motion.h2 key={index} variants={child}>{word}</motion.h2>
              ))}
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: easeOut, duration: 0.8 }}
            className="font-sans text-white/70 md:w-[50%] text-center text-lg px-4"
          >
            Nourish your skin with formulas inspired by nature and perfected by
            science. Gentle, effective, and designed for real results — because
            healthy skin should look effortless.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, ease: easeOut, duration: 0.8 }}
            className="space-x-8 mt-12 font-mono"
          >
            <a 
              href="#products"
              className="border border-white text-white p-4 px-8 text-xl rounded-full font-semibold hover:bg-white hover:text-[#2D1F1B] transition-all duration-300 cursor-pointer inline-block"
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
      <div className="md:max-w-[82rem] mx-auto px-4 py-20">
        <div className="flex md:flex-row-reverse flex-col md:gap-28">
          <SlideIn direction="right" className="w-full flex flex-col md:justify-center gap-8">
            <h2 className="md:text-3xl text-xl md:text-start text-center font-mono font-bold">
              Why Choose <span className="text-[#819076]">Us</span>
            </h2>
            <p className="text-lg md:text-start text-center font-sans text-[#2D1F1B]/70">
              Our attention to details and satisfaction of our clients is what
              sets us apart from others in the Wellness industry.
            </p>
          </SlideIn>
          <SlideIn direction="left">
            <div className="md:p-10 md:mt-0 mt-10">
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
      <div className="mt-15 md:max-w-[82rem] mx-auto mb-10 px-4">
        <ScaleIn className="w-full flex justify-center">
          <p className="bg-white font-mono font-bold text-sm px-4 py-2 rounded-full shadow-sm">
            CONTACT
          </p>
        </ScaleIn>
        <div className="md:space-y-4 mt-4">
          <RevealHeading delay={0.2} className="text-center font-mono font-bold text-3xl md:text-5xl">
            Get in Touch
          </RevealHeading>
          <div className="flex justify-center">
            <RevealText delay={0.4} className="text-center font-sans text-lg md:w-1/2 text-[#2D1F1B]/60">
              We'd love to hear from you. Reach out and let's create something beautiful together.
            </RevealText>
          </div>
        </div>
        <Reveal delay={0.6}>
          <RevealLinks />
        </Reveal>
      </div>
    </>
  );
}
