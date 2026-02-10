import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
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
];

export default function ProductList() {
    return (
        <section className="min-h-screen bg-white px-6 py-24 md:px-20 text-black font-mori">
            <div className="mx-auto max-w-full md:max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-8xl font-semibold leading-tight">
                        Explore <br />
                        <span className="italic font-normal font-alegreya">Pure Potency</span>
                    </h1>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.45em] font-normal mb-10 opacity-70">
                        Two Essentials
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-28 grid grid-cols-1 gap-12 md:grid-cols-2">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group relative rounded-[28px] bg-[#FAFAFA] hover:bg-[#F2F2F2] transition-colors duration-500 p-6 md:p-8"
                        >
                            <div className="flex h-64 items-center justify-center mb-8">
                                <div className="relative h-64 w-48 transition-transform duration-700 group-hover:scale-105">
                                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 delay-100">
                                        <div className="relative h-full w-full">
                                            <div className="absolute left-1/2 top-0 h-56 w-32 -translate-x-1/2 rounded-[26px] border border-black/10 bg-gradient-to-b from-white to-[#F9F9F9] shadow-lg" />
                                            <div className="absolute left-1/2 bottom-2 h-10 w-24 -translate-x-1/2 rounded-[12px] border border-black/5 bg-white shadow-sm" />
                                            <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em]">
                                                Pure
                                            </div>
                                            <div className="absolute left-1/2 top-16 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-black/70 font-alegreya italic">
                                                Potency
                                            </div>
                                            <div className="absolute left-1/2 top-28 -translate-x-1/2 text-[9px] text-black/50">
                                                30 ml
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="relative h-full w-full -rotate-3 transition-transform duration-500 group-hover:-rotate-6">
                                            <div className="absolute left-1/2 top-0 h-56 w-32 -translate-x-1/2 rounded-[26px] border border-black/20 bg-gradient-to-b from-[#F2F2F2] to-[#EAEAEA] shadow-xl" />
                                            <div className="absolute left-1/2 bottom-2 h-10 w-24 -translate-x-1/2 rounded-[12px] border border-black/10 bg-[#EFEFEF]" />
                                            <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em]">
                                                Pure
                                            </div>
                                            <div className="absolute left-1/2 top-16 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-black/70 font-alegreya italic">
                                                Potency
                                            </div>
                                            <div className="absolute left-1/2 top-28 -translate-x-1/2 text-[9px] text-black/50">
                                                30 ml
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-black/10 pt-6">
                                <div className="flex items-center justify-between text-lg md:text-xl">
                                    <span className="font-medium">{product.name}</span>
                                    <span className="font-normal font-alegreya italic">{product.price}</span>
                                </div>
                            </div>

                            <div className="mt-6 border-t border-black/10 pt-6">
                                <div className="grid grid-cols-2 gap-6 text-xs text-black/80">
                                    <div>
                                        <p className="uppercase tracking-[0.25em] mb-3 opacity-60">
                                            {product.left.title}
                                        </p>
                                        <div className="space-y-1">
                                            {product.left.lines.map((line) => (
                                                <p key={line}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="uppercase tracking-[0.25em] mb-3 opacity-60">
                                            {product.right.title}
                                        </p>
                                        <div className="space-y-1">
                                            {product.right.lines.map((line) => (
                                                <p key={line}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-8 w-full border border-black/90 py-4 text-[11px] uppercase tracking-[0.35em] transition-all bg-black text-white hover:bg-transparent hover:text-black hover:tracking-[0.45em]">
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
