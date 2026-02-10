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
			<div className="bg-black/15 absolute inset-0 z-20 flex flex-col gap-4 items-center justify-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="text-center relative z-30 mix-blend-difference"
				>
					<h1 className="text-white font-extrabold font-mori text-5xl md:text-8xl text-center leading-tight md:leading-normal mix-blend-difference">
						<span>
							<span className="font-alegreya text-5xl md:text-8xl font-normal italic">
								{"True "}
							</span>
							to Oneself
						</span>
						<br />
						<span>
							kind to
							<span className="font-alegreya text-4xl md:text-7xl font-normal italic">
								{" Nature"}
							</span>
						</span>
					</h1>
					<p className="text-white font-mori text-center font-normal text-sm md:text-lg max-w-[80vw] mx-auto mt-6 mix-blend-difference">
						Unreservedly honest products that truly be,
						<br className="hidden md:block" />
						kind to skin and the planet – no exceptions!
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="absolute bottom-20 md:bottom-auto md:top-[80%]"
				>
					<Button className="p-6 bg-transparent rounded-full border-white border flex items-center justify-center cursor-pointer text-white font-mori hover:bg-white hover:text-black transition-colors duration-300">
						<p className="m-0 relative z-10">Explore our products</p>
					</Button>
				</motion.div>
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
