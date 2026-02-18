'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CartButton from './cart/CartButton';
import CartDrawer from './cart/CartDrawer';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F6F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#819076]/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="h-[8vh] md:px-12 px-4 flex items-center justify-between max-w-[82rem] mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link href="/" className="flex items-center group">
              <h1 className="font-mono font-bold text-xl text-[#2D1F1B] group-hover:text-[#819076] transition-colors">
                ESENTRA<span className="text-[#819076]">+</span>
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.1, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
              >
                <Link 
                  href={link.href} 
                  className="font-mono text-sm font-medium text-[#2D1F1B] hover:text-[#819076] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#819076] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Cart Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <CartButton />
          </motion.div>
        </div>
      </motion.header>
      
      {/* Spacer for fixed header */}
      <div className="h-[8vh]" />
      
      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}
