import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ingredients = [
	{
		name: "Ceramide NP",
		description: "Reinforces the natural lipid barrier against moisture loss.",
	},
	{
		name: "Niacinamide",
		description: "Visibly minimises enlarged pores and improves uneven skin tone.",
	},
	{
		name: "Hyaluronic Acid",
		description: "Instantly hydrates and plumps skin for a dewy glow.",
	},
	{
		name: "Green Tea",
		description: "Potent antioxidant that soothes and protects against stressors.",
	},
];

export default function Benefits() {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

	return (
		<section ref={targetRef} className="relative h-[300vh]  text-black">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div style={{ x }} className="flex gap-20 px-10 md:px-20">
					<div className="flex w-[80vw] md:w-[60vw] flex-col justify-center shrink-0">
						<h2 className="font-mori text-6xl md:text-9xl font-bold uppercase leading-none">
							Pure <br />
							<span className="font-alegreya font-normal italic text-black">
								Ingredients
							</span>
						</h2>
						<p className="mt-8 max-w-md text-lg opacity-80">
							We believe in the power of nature, refined by science. Each ingredient is chosen for its efficacy and safety.
						</p>
					</div>
					{ingredients.map((item, index) => (
						<div
							key={index}
							className="group relative flex h-[60vh] w-[80vw] md:w-[40vw] flex-col justify-between border border-black p-8 md:p-12 transition-colors hover:bg-black hover:text-white shrink-0"
						>
							<span className="font-mori text-4xl md:text-6xl font-medium">0{index + 1}</span>
							<div>
								<h3 className="mb-4 font-mori text-3xl md:text-5xl font-light">
									{item.name}
								</h3>
								<p className="font-mori text-sm md:text-lg uppercase tracking-wider opacity-80 group-hover:opacity-100">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
