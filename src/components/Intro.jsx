import React from "react";
import Image from "next/image";
import Background from "../../public/images/hero2.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Button from "./button";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="bg-black/20 absolute inset-0 z-20 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-white font-bold font-mori text-6xl text-center">
          <span>
            <span className="font-alegreya text-7xl font-normal italic">
              {"True "}
            </span>
            to Oneself
          </span>
          <br />
          <span>
            kind to
            <span className="font-alegreya text-7xl font-normal italic">
              {" Nature"}
            </span>
          </span>
        </h1>
        <p className="text-white font-mori text-center font-">
          Unreservedly honest products that truly be,
          <br />
          kind to skin and the planet – no exceptions!
        </p>
      </div>

      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          className="z-0"
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
