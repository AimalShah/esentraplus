"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
	const [active, setActive] = useState(false);

	useEffect(() => {
		const updateActive = () => {
			setActive(window.scrollY > 50);
		};
		window.addEventListener("scroll", updateActive);
		return () => window.removeEventListener("scroll", updateActive);
	}, []);

	const navLinks = [
		{ title: "Products", href: "#products" },
		{ title: "Benefits", href: "#benefits" },
		{ title: "Review", href: "#reviews" },
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${active ? "py-4" : "py-8"}`}
		>
			<div className={`mx-auto  px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${active ? "bg-white/10 backdrop-blur-md rounded-full shadow-sm border border-white/20 p-4" : ""}`}>

				{/* Logo */}
				<div className="flex items-center gap-2">
					<h1 className={`font-mori font-bold text-2xl uppercase tracking-widest ${active ? "text-black" : "text-white mix-blend-difference"}`}>
						Esentra
					</h1>
				</div>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link, i) => (
						<a
							key={i}
							href={link.href}
							className={`font-mori text-sm uppercase tracking-widest relative group overflow-hidden ${active ? "text-black" : "text-white mix-blend-difference"}`}
						>
							<span className="block transition-transform duration-300 group-hover:-translate-y-full">
								{link.title}
							</span>
							<span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:0">
								{link.title}
							</span>
						</a>
					))}
				</nav>

				{/* Cart / Menu Button */}
				<div className="flex items-center gap-4">
					<button className={`font-mori text-sm uppercase tracking-widest px-6 py-2 rounded-full border transition-all ${active ? "border-black text-black hover:bg-black hover:text-white" : "border-white text-white mix-blend-difference hover:bg-white hover:text-black"}`}>
						Cart (0)
					</button>
				</div>
			</div>
		</motion.header>
	);
}
