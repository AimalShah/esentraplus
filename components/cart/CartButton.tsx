'use client';

import { useCartStore } from '@/lib/store';
import { ShoppingCart } from 'lucide-react';

export default function CartButton() {
  const totalItems = useCartStore((state) => state.totalItems);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);
  const items = totalItems();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative flex items-center gap-2 hover:bg-[#2D1F1B]/5 px-3 py-2 rounded-full transition-colors"
    >
      <ShoppingCart className="w-5 h-5 text-[#2D1F1B]" />
      <span className="font-mono font-semibold text-[#2D1F1B]">
        Cart
      </span>
      {items > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#819076] text-white text-xs font-mono font-bold rounded-full flex items-center justify-center">
          {items > 99 ? '99+' : items}
        </span>
      )}
    </button>
  );
}
