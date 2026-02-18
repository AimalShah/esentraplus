'use client';

import { motion } from 'framer-motion';
import { Reveal, ScaleIn } from './animations/Reveal';

export default function NewsLetter() {
  return (
    <div className="h-[60vh] bg-[#D6C9B2] grid place-items-center overflow-hidden">
      <div className="space-y-8 px-4">
        <Reveal direction="up" delay={0.1}>
          <p className="text-4xl md:text-5xl font-bold font-mono text-center text-primary-text">
            Subscribe to Our <br /> Newsletter
          </p>
        </Reveal>
        
        <ScaleIn delay={0.3}>
          <form className="flex flex-col gap-4 w-full max-w-md">
            <motion.input
              type="email"
              placeholder="Enter your email"
              whileFocus={{ scale: 1.02 }}
              className="border-2 p-4 text-lg border-[#2D1F1B] rounded-full w-full bg-white/50 backdrop-blur-sm focus:outline-none focus:bg-white transition-colors font-sans"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 font-medium font-mono text-lg bg-[#2D1F1B] rounded-full text-white transition-all shadow-[4px_4px_0px_#819076] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
            >
              Subscribe
            </motion.button>
          </form>
        </ScaleIn>
      </div>
    </div>
  );
}
