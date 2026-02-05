"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const product1 = {
  id: "whitening-cream",
  name: "Luminous Radiance Complex",
  category: "Brightening Cream",
  price: "$78.00",
  description:
    "A revolutionary formula designed to target hyperpigmentation and uneven skin tone at the source. Infused with stabilized Vitamin C and Pearl extract, it delivers a porcelain finish while deeply hydrating.",
  ingredients: [
    "Niacinamide",
    "Vitamin C (THD Ascorbate)",
    "Pearl Extract",
    "Alpha Arbutin",
    "Squalane",
  ],
  benefits: [
    "Visibly fades dark spots",
    "Evens skin texture",
    "Boosts natural glow",
    "24-hour hydration",
  ],
  image: "https://images.pexels.com/photos/7795767/pexels-photo-7795767.jpeg",
  themeColor: "#F5E6D4",
};

const product2 = {
  id: "facewash",
  name: "Hydra-Purifying Cleanser",
  category: "Facial Wash",
  price: "$42.00",
  description:
    "A pH-balanced gel-to-milk cleanser that lifts away impurities without stripping the skin's natural moisture barrier. Formulated with organic Aloe Vera and botanical enzymes.",
  ingredients: [
    "Organic Aloe Vera",
    "Hyaluronic Acid",
    "Rosehip Oil",
    "Chamomile Extract",
    "Amino Acids",
  ],
  benefits: [
    "Deeply purifies pores",
    "Soothes irritation",
    "Maintains skin pH",
    "Leaves skin silky soft",
  ],
  image:
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
  themeColor: "#E2E8F0",
};

export default function ProductSection() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <div className="h-24" />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#DBD5CA] font-mori text-[3.5vw] flex flex-col items-center justify-center text-white"
    >
      <div
        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24`}
      >
        {/* Image Column */}
        <div className="flex-1 relative group w-full h-full bg-red-700">
          <img
            src={product1.image}
            alt={product1.name}
            className="w-full h-screen"
          />
          {/* <div className="absolute bottom-8 right-8 bg-white px-6 py-4 shadow-xl">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">
              Price
            </p>
            <p className="text-xl serif font-semibold">{product1.price}</p>
          </div>*/}
        </div>

        {/* Content Column */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {product1.category}
            </p>
            <h2 className="text-5xl md:text-6xl serif leading-tight">
              {product1.name}
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-light">
              {product1.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 py-8 border-y border-zinc-200">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                {product1.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-500 flex items-center"
                  >
                    <span className="w-1 h-1 bg-zinc-300 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">
                Core Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {product1.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-tighter border border-zinc-200 px-2 py-1 text-zinc-400"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex-1 bg-black text-white py-5 text-xs tracking-widest uppercase hover:bg-zinc-800 transition-all font-bold">
              Add to Bag
            </button>
            <button className="w-14 h-14 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div
        className={`flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 bg-[#DBD5CA] font-mori`}
      >
        {/* Image Column */}
        <div className="flex-1 relative group w-full h-full bg-red-700">
          <img
            src={product2.image}
            alt={product2.name}
            className="w-full h-screen"
          />
          {/* <div className="absolute bottom-8 right-8 bg-white px-6 py-4 shadow-xl">
                 <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">
                   Price
                 </p>
                 <p className="text-xl serif font-semibold">{product1.price}</p>
               </div>*/}
        </div>

        {/* Content Column */}
        <div className="flex-1 space-y-8 px-4">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {product2.category}
            </p>
            <h2 className="text-5xl md:text-6xl serif leading-tight text-white">
              {product2.name}
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-light">
              {product2.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 py-8 border-y border-zinc-200">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                {product2.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-500 flex items-center"
                  >
                    <span className="w-1 h-1 bg-zinc-300 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">
                Core Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {product2.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-tighter border border-zinc-200 px-2 py-1 text-zinc-400"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex-1 bg-black text-white py-5 text-xs tracking-widest uppercase hover:bg-zinc-800 transition-all font-bold">
              Add to Bag
            </button>
            <button className="w-14 h-14 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
