"use client";
import { motion } from "framer-motion";

const footerLinks = [
	{ label: "Explore", items: ["Shop All", "Our Philosophy", "Ingredients", "Journal"] },
	{ label: "Follow", items: ["Instagram", "Pinterest", "Newsletter", "Community"] },
	{ label: "Contact", items: ["Help Center", "Shipping", "Returns", "hello@ensentraplus.com"] },
];

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-[#D8D0C4] text-[#1C1A16] font-mori">
			<div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#F0CBCE] opacity-70 blur-3xl" />
			<div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#E6DED3] opacity-70 blur-3xl" />

			<div className="relative z-10 px-8 pb-16 pt-24 md:px-16">
				<div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
					<div>
						<p className="text-xs uppercase tracking-[0.35em] text-black/50">
							True to oneself
						</p>
						<h2 className="mt-5 font-mori text-4xl md:text-5xl">
							Stay close to the ritual
						</h2>
						<p className="mt-4 max-w-md text-base text-black/60">
							Subscribe for first access to drops, care notes, and seasonal
							compositions.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<input
								type="email"
								placeholder="Email address"
								className="w-full flex-1 rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-black/20"
							/>
							<button className="rounded-full bg-[#1C1A16] px-6 py-3 text-xs font-bold uppercase tracking-[0.35em] text-white transition hover:bg-[#2A2722]">
								Join
							</button>
						</div>
					</div>

					<div className="grid gap-10 sm:grid-cols-3">
						{footerLinks.map((group) => (
							<div key={group.label}>
								<p className="text-xs uppercase tracking-[0.35em] text-black/50">
									{group.label}
								</p>
								<ul className="mt-4 space-y-3 text-sm text-black/60">
									{group.items.map((item) => (
										<li key={item} className="hover:text-black transition">
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div className="mt-16 flex flex-col gap-6 border-t border-black/10 pt-8 text-xs uppercase tracking-[0.35em] text-black/40 md:flex-row md:items-center md:justify-between">
					<p>2026 ESENTRAPLUS</p>
					<div className="flex flex-wrap gap-6">
						<motion.span whileHover={{ y: -3 }} className="cursor-pointer">
							Instagram
						</motion.span>
						<motion.span whileHover={{ y: -3 }} className="cursor-pointer">
							Facebook
						</motion.span>
						<motion.span whileHover={{ y: -3 }} className="cursor-pointer">
							YouTube
						</motion.span>
					</div>
				</div>
			</div>
		</footer>
	);
}
