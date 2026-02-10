"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
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
			<ProductList />
			<Description />
			<hr></hr>

			<Benefits />

			<section ref={container} className="min-h-screen pt-20 md:pt-40 bg-[#F5F5F5] overflow-hidden">
				<motion.h1
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="font-extrabold font-mori text-5xl md:text-[172px] uppercase text-center leading-none md:leading-[0.8] mt-10 text-black"
				>
					Radical Transparency.
				</motion.h1>
				<div className="flex flex-col md:flex-row justify-between px-6 md:px-48 font-mori">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="underline mt-10 md:mt-20 text-2xl text-black">
							Our <br /> Philosophy
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-6xl md:text-[168px] leading-none md:leading-[0.8] mt-10 md:mt-2  italic font-alegreya text-black">
							HIDE <br />
							<span>NOTHING</span>
						</h2>
					</motion.div>
				</div>
				<div className="flex flex-col md:flex-row justify-between mt-16 md:mt-32 relative pb-20 px-6 md:px-0">
					<div className="w-full flex-1 relative h-[50vh] md:h-auto">
						<motion.div
							style={{
								y: lg,
								x: 0,
							}}
							className="md:absolute md:left-[20%]"
						>
							<img
								src="https://plus.unsplash.com/premium_photo-1679046948909-ab47e96082e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
								alt="serum"
								className="h-[40vh] w-full md:h-[48vh] md:w-[22vw] object-cover hover:scale-105 transition-transform duration-700 ease-out"
							/>
						</motion.div>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.2
								}
							}
						}}
						className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] font-mori md:px-20 gap-8 md:gap-12 text-gray-500 mt-10 md:mt-0"
					>
						<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-black">100% Transparent Formulas</motion.div>
						<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
							<span className="font-bold text-black">Highest Standards.</span>{" "}
							<br /> We formulate to the highest standards of efficacyand safety
							– using only proven, verifiedingredients in bio-compatible bases;
							and freefrom over 1800 questionable ingredients
						</motion.div>
						<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-black">Only Verified Ingredients</motion.div>
						<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
							<span className="font-bold text-black">Real Results.</span> <br />
							Skin care packed with anti oxidants, skinreplenishing and skin
							restoring agents instable pH levels that don’t promise
							miracles,but deliver real results.
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/*<Testimonials />*/}
			<Footer />



		</main >
	);
}
