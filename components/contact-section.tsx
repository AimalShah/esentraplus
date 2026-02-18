'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Reveal, ScaleIn, SlideIn, StaggerContainer, StaggerItem } from './animations/Reveal';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@esentra.com',
    href: 'mailto:hello@esentra.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Visit',
    value: '123 Skincare Ave, NY',
    href: '#',
  },
];

const socialLinks = [
  { name: 'Instagram', href: '#', handle: '@esentra' },
  { name: 'Twitter', href: '#', handle: '@esentra' },
  { name: 'Facebook', href: '#', handle: '/esentra' },
  { name: 'LinkedIn', href: '#', handle: '/company/esentra' },
];

export default function ContactSection() {
  return (
    <section className="md:max-w-[82rem] mx-auto px-4 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Left Side */}
        <div className="space-y-8">
          <SlideIn direction="left">
            <span className="font-mono text-sm text-[#819076] uppercase tracking-wider">
              Contact Us
            </span>
          </SlideIn>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-[#2D1F1B] leading-tight">
              Let's Start a
              <span className="block text-[#819076]">Conversation</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-lg font-sans text-[#2D1F1B]/60 max-w-md">
              Have questions about our products or need personalized skincare advice? 
              We're here to help you on your journey to healthier skin.
            </p>
          </Reveal>

          {/* Contact Info Cards */}
          <StaggerContainer staggerDelay={0.1} className="space-y-4">
            {contactInfo.map((item) => (
              <StaggerItem key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#2D1F1B]/5 hover:border-[#819076]/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-[#F6F5F0] rounded-lg flex items-center justify-center group-hover:bg-[#819076]/10 transition-colors">
                    <item.icon className="w-5 h-5 text-[#819076]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs text-[#2D1F1B]/50 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-sans text-[#2D1F1B] font-medium">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#2D1F1B]/30 group-hover:text-[#819076] transition-colors" />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <SlideIn direction="right">
              <span className="font-mono text-sm text-[#819076] uppercase tracking-wider">
                Follow Us
              </span>
            </SlideIn>

            <Reveal direction="up" delay={0.2}>
              <p className="text-lg font-sans text-[#2D1F1B]/60 max-w-sm">
                Join our community for daily skincare inspiration and exclusive content.
              </p>
            </Reveal>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-[#F6F5F0] rounded-2xl overflow-hidden"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-[#819076] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                
                <div className="relative z-10">
                  <p className="font-mono font-bold text-lg text-[#2D1F1B] group-hover:text-white transition-colors">
                    {social.name}
                  </p>
                  <p className="font-sans text-sm text-[#2D1F1B]/50 group-hover:text-white/70 transition-colors mt-1">
                    {social.handle}
                  </p>
                </div>

                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-[#2D1F1B]/20 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <ScaleIn delay={0.6}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 block text-center py-5 bg-[#2D1F1B] text-white font-mono font-semibold rounded-full hover:bg-[#1a1210] transition-colors shadow-[4px_4px_0px_#819076] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              Schedule a Consultation
            </motion.a>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
