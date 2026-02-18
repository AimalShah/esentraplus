'use client';

import { motion } from 'framer-motion';
import { Reveal, ScaleIn, SlideIn } from './animations/Reveal';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function NewsLetter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2D1F1B] to-[#3d2d27] py-24 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[60rem] h-[60rem] rounded-full border border-[#819076]/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[50rem] h-[50rem] rounded-full border border-[#819076]/10"
        />
      </div>

      <div className="relative md:max-w-[82rem] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <SlideIn direction="left">
              <div className="flex items-center gap-2 text-[#819076]">
                <Sparkles className="w-5 h-5" />
                <span className="font-mono text-sm uppercase tracking-wider">Newsletter</span>
              </div>
            </SlideIn>

            <Reveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white leading-tight">
                Stay in the
                <span className="block text-[#819076]">Loop</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-lg font-sans text-white/60 max-w-md">
                Be the first to know about new products, exclusive offers, and skincare tips 
                delivered straight to your inbox.
              </p>
            </Reveal>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: '10K+', label: 'Subscribers' },
                { value: 'Weekly', label: 'Updates' },
                { value: '100%', label: 'Spam-free' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-left"
                >
                  <p className="text-2xl font-mono font-bold text-white">{stat.value}</p>
                  <p className="text-sm font-sans text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <ScaleIn delay={0.3}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="font-mono text-sm text-white/60">Email Address</label>
                  <motion.input
                    type="email"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white font-sans placeholder:text-white/30 focus:outline-none focus:border-[#819076] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-sm text-white/60">First Name</label>
                  <motion.input
                    type="text"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white font-sans placeholder:text-white/30 focus:outline-none focus:border-[#819076] transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#819076] text-white font-mono font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#6b785f] transition-colors group"
                >
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-center text-sm font-sans text-white/40">
                  By subscribing, you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
