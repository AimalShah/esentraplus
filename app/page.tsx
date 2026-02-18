"use client";

import ProductSection from "@/components/product-section";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/philosophy-section";
import { RevealLinks } from "@/components/links";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  show: {
    transition: {
      duration: 0.7,
      ease: "circInOut",
      staggerChildren: 0.15, // delay between spans
      delayChildren: 0.9, // delay before first span
    },
  },
};
const parent1 = {
  hidden: {},
  show: {
    transition: {
      duration: 0.7,
      ease: "circInOut",
      staggerChildren: 0.15, // delay between spans
      delayChildren: 1.2, // delay before first span
    },
  },
};

const child = {
  hidden: { y: 100 },
  show: { y: 0, opacity: 1, transition: { ease: "easeInOut" } },
};

export default function Home() {
  return (
    <>
      {/* <div className="h-screen  p-0 m-0 relative">
        <motion.div
          initial={{ y: 100, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-black/40 z-10"
        />
        <motion.div
          initial={{ y: 100, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/1502219/pexels-photo-1502219.jpeg"
            alt="img"
            style={{ zIndex: -1 }}
            className="w-full h-full object-cover "
          />
        </motion.div>
        <div className="absolute z-20 inset-0 flex flex-col gap-4 justify-center items-center z-20">
          <div className=" overflow-hidden">
            <motion.h1
              variants={parent}
              initial="hidden"
              animate="show"
              className="md:text-8xl font-mono text-white font-bold text-center text-wrap overflow-hidden flex gap-2 "
            >
              {"Pure Care for".split(" ").map((word, index) => (
                <motion.h2 variants={child}>{word}</motion.h2>
              ))}
            </motion.h1>
          </div>
          <div className=" overflow-hidden">
            <motion.h1
              variants={parent1}
              initial="hidden"
              animate="show"
              className="md:text-8xl font-mono text-white font-bold text-center text-wrap overflow-hidden flex gap-4 "
            >
              {"Radiant Skin".split(" ").map((word, index) => (
                <motion.h2 variants={child}>{word}</motion.h2>
              ))}
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "easeInOut", duration: 0.8 }}
            className="font-sans text-white/70 md:w-[50%] text-center text-lg"
          >
            Nourish your skin with formulas inspired by nature and perfected by
            science. Gentle, effective, and designed for real results — because
            healthy skin should look effortless.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: [0, 0, 1] }}
            transition={{ delay: 0.4, ease: "easeInOut", duration: 0.8 }}
            className="space-x-8 mt-12 font-mono"
          >
            <button
              className="border border-white text-white p-4 tex-xl rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300
              cursor-pointer
              "
            >
              View Products
            </button>
          </motion.div>
        </div>
      </div>*/}

      <Hero />
      <ProductSection />
      <PhilosophySection />
      <div className="md:max-w-[82rem] mx-auto">
        <div className="flex md:flex-row-reverse flex-col md:gap-28">
          <div className="w-full flex flex-col md:justify-center gap-8">
            <h2 className="md:text-3xl text-xl md:text-start text-center font-mono font-bold">
              Why Choose <span className="text-[#819076]">Us</span>
            </h2>
            <p className="text-lg md:text-start text-center">
              Our attention to details and satisfaction of our clients is what
              sets us apart from others in the Wellness industry.{" "}
            </p>
          </div>
          <div>
            <div className="md:p-10 md:mt-0 mt-10">
              <div className="rounded-2xl relative">
                <div className="absolute w-full h-full rounded-2xl bg-[#EAE4D7] z-[-1] -rotate-6" />
                <img
                  src="https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f38c443f2affc4bcbaa355_our-spa.avif"
                  alt="image of prodcut"
                  className="rounded-2xl z-20                   "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-15 md:max-w-[82rem] mx-auto mb-10">
        <div className="w-full flex justify-center">
          <p className="bg-white font-mono font-bold text-sm px-4 py-2 rounded-full">
            CONTACT
          </p>
        </div>
        <div className="md:space-y-4 mt-4">
          <h2 className="text-center font-mono font-bold text-3xl">
            Get in <span className="text-[#819076]">Touch</span>
          </h2>
          <div className="flex justify-center">
            <p className="text-center font-sans text-lg md:w-1/2"></p>
          </div>
        </div>
        <RevealLinks />
      </div>
    </>
  );
}
