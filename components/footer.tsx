'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Shop',
      links: ['All Products', 'Skincare', 'Body Care', 'Gift Sets'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Story', 'Sustainability', 'Careers'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'FAQs', 'Shipping', 'Returns'],
    },
  ];

  return (
    <footer className="bg-[#2D1F1B] text-white">
      {/* Main Footer */}
      <div className="md:max-w-[82rem] mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="font-mono text-2xl font-bold tracking-tight">
                ESENTRA<span className="text-[#819076]">+</span>
              </h2>
            </Link>
            <p className="font-sans text-white/70 leading-relaxed">
              Pure care for radiant skin. Nourish your skin with formulas inspired by nature and perfected by science.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#819076] hover:border-[#819076] transition-all duration-300"
                >
                  <span className="font-mono text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-mono font-bold text-sm uppercase tracking-wider text-[#819076]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="md:max-w-[82rem] mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-white/50">
              © {currentYear} ESENTRA+. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-sm text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-sans text-sm text-white/50 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
