'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Reveal, ScaleIn, SlideIn } from './animations/Reveal';

const easeOut = [0.25, 0.1, 0.25, 1] as const;

function HeroButton({ 
  href, 
  children, 
  variant = 'primary',
  delay = 0
}: { 
  href: string; 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary';
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden px-6 py-3 md:px-8 font-semibold rounded-full w-full sm:w-auto min-w-[180px] text-center font-mono cursor-pointer inline-block ${
        variant === 'primary' 
          ? 'bg-white text-[#2D1F1B] shadow-sm' 
          : 'bg-transparent border-2 border-[#2D1F1B] text-[#2D1F1B]'
      }`}
    >
      {/* Animated Background */}
      <motion.span
        className={`absolute inset-0 rounded-full ${variant === 'primary' ? 'bg-[#819076]' : 'bg-[#2D1F1B]'}`}
        initial={{ y: '100%' }}
        animate={{ y: isHovered ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: easeOut }}
      />
      
      {/* Button Text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <motion.span
          animate={{ color: isHovered ? '#ffffff' : (variant === 'primary' ? '#2D1F1B' : '#2D1F1B') }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        <motion.svg 
          className="w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          animate={{ x: isHovered ? 4 : 0, color: isHovered ? '#ffffff' : 'currentColor' }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      </span>
    </motion.a>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div ref={heroRef} className="min-h-screen md:space-y-24 space-y-18 md:p-12 p-6 mx-auto md:max-w-[84rem] w-full pt-[12vh]">
      {/* Content Section */}
      <div className="flex md:gap-12 gap-6 md:flex-nowrap flex-wrap">
        {/* Left Side - Heading */}
        <SlideIn direction="left" delay={0.2}>
          <div>
            <h1 className="md:text-4xl text-2xl font-mono font-bold leading-tight">
              Revitalize your look with vibrance{" "}
              <span className="text-[#819076]">essentials</span>
            </h1>
          </div>
        </SlideIn>

        {/* Right Side - Description and Buttons */}
        <div className="md:space-y-8 space-y-4">
          <Reveal direction="up" delay={0.3}>
            <p className="lowercase md:text-xl text-lg font-sans text-[#2D1F1B]/70">
              our essentials are designed to nourish, protect, and your beauty
              journey.
            </p>
          </Reveal>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <HeroButton href="#products" variant="primary" delay={0.5}>
              See Products
            </HeroButton>
            
            <HeroButton href="#contact" variant="secondary" delay={0.6}>
              Contact Us
            </HeroButton>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <ScaleIn delay={0.4}>
        <motion.div 
          className="bg-[#EAE4D7] rounded-2xl overflow-hidden"
          style={{ y: imageY }}
        >
          <motion.img
            src="https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67eaab97771fefca4ce06633_Hero-Image-Logo.avif"
            alt="product image"
            style={{ scale: imageScale }}
            className="w-full md:h-[65vh] h-[35vh] object-cover rounded-2xl"
          />
        </motion.div>
      </ScaleIn>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center mt-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-[#2D1F1B]/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-1.5 bg-[#2D1F1B]/50 rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </div>
  );
}
