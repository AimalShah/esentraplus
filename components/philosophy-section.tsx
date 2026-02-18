'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealText, ScaleIn, SlideIn } from './animations/Reveal';

export default function PhilosophySection() {
  return (
    <div className="mt-15 md:max-w-[82rem] mx-auto mb-20 md:px-0 px-4">
      {/* Section Header */}
      <div className="mt-15 md:max-w-[82rem] mx-auto mb-10">
        <ScaleIn className="w-full flex justify-center">
          <p className="bg-white font-mono font-bold text-sm px-4 py-2 rounded-full shadow-sm">
            PHILOSOPHY
          </p>
        </ScaleIn>
        <div className="md:space-y-4 mt-4">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-center font-mono font-bold text-3xl md:text-4xl">
              Story Behind <span className="text-[#819076]">Our Products</span>
            </h2>
          </Reveal>
          <div className="flex justify-center">
            <RevealText delay={0.2} className="text-center font-sans text-lg md:w-1/2 text-[#2D1F1B]/70">
              Guided by purpose, crafted with intention, and devoted to timeless skin health.
            </RevealText>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex md:flex-row flex-col md:gap-28">
        <SlideIn direction="left" delay={0.2} className="w-full flex flex-col md:justify-center gap-8">
          <h2 className="md:text-3xl text-xl md:text-start text-center font-mono font-bold">
            Our Philosophy of Thoughtful,{" "}
            <span className="text-[#819076]">Intentional Skincare</span>
          </h2>
          <p className="text-lg md:text-start text-center font-sans text-[#2D1F1B]/70">
            We believe skincare should be simple, intentional, and effective.
            Every formula is thoughtfully crafted to support your skin's natural
            balance, delivering care that nurtures confidence, clarity, and a
            healthy, lasting glow.
          </p>
        </SlideIn>
        
        <SlideIn direction="right" delay={0.3}>
          <div className="md:p-10 md:mt-0 mt-10">
            <div className="rounded-2xl relative overflow-hidden">
              <motion.div 
                className="absolute w-full h-full rounded-2xl bg-[#EAE4D7] z-[-1] -rotate-6"
                whileHover={{ rotate: -3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://cdn.prod.website-files.com/68c9bb14e6fa155edae89723/68dee94f02707893be18c3b3_About%20Img-p-2000.webp"
                alt="image of product"
                className="rounded-2xl z-20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
