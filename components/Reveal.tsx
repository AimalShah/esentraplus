"use client";

import { motion } from "framer-motion";

export default function Reveal() {
  return (
    <motion.div
      className="h-screen w-screen fixed z-40 bg-primary-text"
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      transition={{ delay: 1.5, duration: 0.7, ease: "easeInOut" }}
    >
      <div className="w-full h-full grid place-items-center">
        <div className="font-mono font-bold text-6xl flex text-background">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 70, opacity: 1 }}
              animate={{ y: [70, 0, 0, -70], opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              ESENTRA
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: -70, opacity: 1 }}
              animate={{ y: [-70, 0, 0, 70], opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              PLUS
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
