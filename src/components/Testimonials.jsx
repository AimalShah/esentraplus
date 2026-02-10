import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "The serum completely transformed my skin texture in just two weeks. It's liquid gold.",
        author: "Elena R.",
        role: "Verified Buyer",
    },
    {
        quote: "Finally, a brand that is transparent about what goes into the bottle. My sensitive skin loves it.",
        author: "Marcus T.",
        role: "Verified Buyer",
    },
    {
        quote: "The packaging, the scent, the feel—everything screams luxury without the markup.",
        author: "Sarah J.",
        role: "Verified Buyer",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-32 px-6 md:px-20">
            <div className="mb-20">
                <h2 className="font-mori text-5xl md:text-8xl font-bold uppercase text-center text-black">
                    Voices of <br />
                    <span className="font-alegreya font-normal italic text-gray-500">
                        Transformation
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-black pt-12">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between"
                    >
                        <p className="font-mori text-xl md:text-2xl leading-normal text-black mb-8">
                            &ldquo;{t.quote}&rdquo;
                        </p>
                        <div>
                            <p className="font-mori text-sm uppercase tracking-[0.2em] font-bold text-black border-b border-black/20 pb-2 inline-block">
                                {t.author}
                            </p>
                            <p className="font-mori text-xs uppercase tracking-widest text-black/50 mt-2">
                                {t.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
