'use client';

import CartButton from './cart/CartButton';
import CartDrawer from './cart/CartDrawer';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F5F0]/90 backdrop-blur-md border-b border-[#819076]/20">
        <div className="h-[8vh] md:px-12 px-4 flex items-center justify-between max-w-[82rem] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="font-mono font-bold text-xl text-[#2D1F1B]">
              ESENTRA<span className="text-[#819076]">+</span>
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-mono text-sm font-medium text-[#2D1F1B] hover:text-[#819076] transition-colors">
              Home
            </Link>
            <Link href="#products" className="font-mono text-sm font-medium text-[#2D1F1B] hover:text-[#819076] transition-colors">
              Products
            </Link>
            <Link href="#about" className="font-mono text-sm font-medium text-[#2D1F1B] hover:text-[#819076] transition-colors">
              About
            </Link>
            <Link href="#contact" className="font-mono text-sm font-medium text-[#2D1F1B] hover:text-[#819076] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Cart Button */}
          <CartButton />
        </div>
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-[8vh]" />
      
      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}
