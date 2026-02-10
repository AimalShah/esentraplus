"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const lg = useTransform(scrollYProgress, [0, 1], [210, -490]);

  return (
    <main>
      <Intro />
      <Description />
      {/* <Section />*/}
      <hr></hr>
      <section className="min-h-screen bg-white px-6 py-16 text-black font-mori p-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-8xl font-semibold">
              Explore <br />
              <span className="italic font-normal">Pure Potency</span>
            </h1>
            <p className="mt-4 text-[11px] uppercase tracking-[0.45em] font-normal mb-10">
              Two Essentials
            </p>
          </div>

          <div className="mt-28 grid grid-cols-1 gap-10 md:grid-cols-2 ">
            {[
              {
                id: "pure-wash",
                name: "Active Face Wash",
                price: "$36.00",
                left: {
                  title: "Active",
                  lines: ["Provitamin B5", "Vitamin A"],
                },
                right: {
                  title: "Against",
                  lines: ["Dehydrated skin", "Elasticity loss"],
                },
              },
              {
                id: "pure-cream",
                name: "Night Cream",
                price: "$54.00",
                left: {
                  title: "Restorative",
                  lines: ["Ceramide NP", "Omega 3-6-9"],
                },
                right: {
                  title: "For",
                  lines: ["Barrier repair", "Softened texture"],
                },
              },
            ].map((product) => (
              <div
                key={product.id}
                className="group relative rounded-[28px]  bg-white p-4"
              >
                <div className="flex h-64 items-center justify-center">
                  <div className="relative h-56 w-40">
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                      <div className="relative h-56 w-40">
                        <div className="absolute left-1/2 top-0 h-44 w-24 -translate-x-1/2 rounded-[26px] border border-black bg-gradient-to-b from-white to-[#ededed]" />
                        <div className="absolute left-1/2 bottom-0 h-10 w-20 -translate-x-1/2 rounded-[12px] border border-black bg-white" />
                        <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[9px] uppercase tracking-[0.35em]">
                          Pure
                        </div>
                        <div className="absolute left-1/2 top-16 -translate-x-1/2 text-[9px] uppercase tracking-[0.25em] text-black/70">
                          Potency
                        </div>
                        <div className="absolute left-1/2 top-28 -translate-x-1/2 text-[9px] text-black/60">
                          30 ml
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="relative h-56 w-40 -rotate-6">
                        <div className="absolute left-1/2 top-0 h-44 w-24 -translate-x-1/2 rounded-[26px] border border-black bg-gradient-to-b from-[#f5f5f5] to-[#dadada]" />
                        <div className="absolute left-1/2 bottom-0 h-10 w-20 -translate-x-1/2 rounded-[12px] border border-black bg-[#f1f1f1]" />
                        <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[9px] uppercase tracking-[0.35em]">
                          Pure
                        </div>
                        <div className="absolute left-1/2 top-16 -translate-x-1/2 text-[9px] uppercase tracking-[0.25em] text-black/70">
                          Potency
                        </div>
                        <div className="absolute left-1/2 top-28 -translate-x-1/2 text-[9px] text-black/60">
                          30 ml
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-black pt-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-medium">{product.name}</span>
                    <span>{product.price}</span>
                  </div>
                </div>

                <div className="mt-4 border-t border-black pt-4">
                  <div className="grid grid-cols-2 gap-6 text-xs">
                    <div>
                      <p className="uppercase tracking-[0.3em]">
                        {product.left.title}
                      </p>
                      <div className="mt-3 space-y-2 text-black/70">
                        {product.left.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="uppercase tracking-[0.3em]">
                        {product.right.title}
                      </p>
                      <div className="mt-3 space-y-2 text-black/70">
                        {product.right.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full border border-black py-3 text-[11px] uppercase tracking-[0.4em] transition-colors bg-black text-white">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr></hr>

      <section ref={container} className="min-h-screen pt-40 bg-[#F5F5F5]">
        <h1 className="font-extrabold font-mori text-[172px] uppercase text-center leading-[0.8] mt-10">
          Radical Transparency.
        </h1>
        <div className="flex justify-between px-48 font-mori">
          <div>
            <h2 className="underline mt-20 text-2xl">
              Our <br /> Philosophy
            </h2>
          </div>
          <div>
            <h2 className="text-[168px] leading-[0.8] mt-2  italic font-alegreya">
              HIDE <br />
              <span>NOTHING</span>
            </h2>
          </div>
        </div>
        <div className="flex justify-between mt-32 relative pb-20">
          <div className="w-full flex-1">
            <motion.div
               style={{
                y: lg,
                x: 300,
              }}

            >

            <img
            style={{y : lg,}}
            src="https://plus.unsplash.com/premium_photo-1679046948909-ab47e96082e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
            alt="serum"
            className="h-[48vh] w-[22vw]  object-cover absolute top-0"
            />
            </motion.div>
          </div>
          <div className="grid grid-rows-w grid-cols-2 w-[60%] font-mori px-20 gap-12 text-gray-400">
            <div className="text-black">100% Transparent Formulas</div>
            <div>
              <span className="font-bold text-black">Highest Standards.</span>{" "}
              <br /> We formulate to the highest standards of efficacyand safety
              – using only proven, verifiedingredients in bio-compatible bases;
              and freefrom over 1800 questionable ingredients
            </div>
            <div className="text-black">Only Verified Ingredients</div>
            <div>
              <span className="font-bold text-black">Real Results.</span> <br />
              Skin care packed with anti oxidants, skinreplenishing and skin
              restoring agents instable pH levels that don’t promise
              miracles,but deliver real results.
            </div>
          </div>
        </div>
      </section>



      <section className="h-screen">
      </section>
    </main>
  );
}
