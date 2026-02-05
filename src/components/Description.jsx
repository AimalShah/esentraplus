"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Description() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 2], [200, -400]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [210, -990]);

  const images = [
    {
      src: "https://images.pexels.com/photos/29675494/pexels-photo-29675494.jpeg",
      y: lg,
      x: "-148%",
    },
    {
      src: "https://images.pexels.com/photos/12851388/pexels-photo-12851388.jpeg",
      y: sm,
      x: "94%",
    },
  ];
  return (
    <div
      className="flex justify-center my-40 font-mori h-screen items-center"
      ref={container}
    >
      <div></div>
      <p className="absolute text-[4.0vw] uppercase text-center max-w-[50vw] leading-none">
        Where advanced{" "}
        <span className="font-alegreya italic">{" dermatology "}</span>
        meets the quiet luxury of nature.
      </p>
      <div className={"flex w-full justify-center relative mt-[5vh]"}>
        {images.map(({ src, y, x }, i) => {
          return (
            <motion.div
              style={{
                y: y,
                x: x,
              }}
              key={`i_${i}`}
              className={"absolute"}
            >
              <img
                src={src}
                className="object-cover h-[36vh] z-20"
                alt="image"
                fill
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
