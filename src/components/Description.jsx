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
	const lg = useTransform(scrollYProgress, [0, 1], [0, -1200]);

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
			className="flex justify-center my-40 font-mori h-screen items-center w-full"
			ref={container}
		>
			<div></div>
			<motion.p
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="absolute text-2xl md:text-[4.0vw] uppercase text-center max-w-[90vw] md:max-w-[50vw] leading-none z-10 mix-blend-difference  text-black
				md:text-black"
			>
				Where advanced{" "}
				<span className="font-alegreya italic">{" dermatology "}</span>
				meets the quiet luxury of nature.
			</motion.p>
			<div className={"flex w-full justify-center relative mt-[5vh]"}>
				{images.map(({ src, y, x }, i) => {
					return (
						<motion.div
							style={{
								y: y,
								x: x,
							}}
							key={`i_${i}`}
							className={"absolute h-[25vh] w-[18vh] md:h-[36vh] md:w-[26vh] hidden md:block"}
						>
							<img
								src={src}
								className="object-cover w-full h-full grayscale-0 hover:grayscale-0 transition-all duration-700 hidden md:block"
								alt="image"
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
