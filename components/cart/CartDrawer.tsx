'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/woocommerce';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    totalItems, 
    totalPrice,
    clearCart 
  } = useCartStore();

  const items = totalItems();
  const price = totalPrice();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#F6F5F0] z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#2D1F1B]/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#819076]" />
                <h2 className="font-mono text-xl font-bold text-[#2D1F1B]">
                  Your Cart ({items})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-[#2D1F1B]/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-[#2D1F1B]" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <ShoppingBag className="w-16 h-16 text-[#2D1F1B]/20" />
                  <p className="font-mono text-[#2D1F1B]/60 text-center">
                    Your cart is empty
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="font-mono text-sm px-6 py-3 bg-[#819076] text-white rounded-full hover:bg-[#6b785f] transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-xl p-4 flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#F6F5F0] flex-shrink-0">
                      {item.product.images[0] ? (
                        <img
                          src={item.product.images[0].src}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#EAE4D7] flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-[#2D1F1B]/30" />
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-mono font-semibold text-[#2D1F1B] truncate">
                        {item.product.name}
                      </h3>
                      <p className="font-sans text-sm text-[#2D1F1B]/60 mt-1">
                        {formatPrice(item.product.price)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-[#2D1F1B]/20 flex items-center justify-center hover:bg-[#2D1F1B]/5 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-[#2D1F1B]" />
                        </button>
                        <span className="font-mono font-semibold text-[#2D1F1B] w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-[#2D1F1B]/20 flex items-center justify-center hover:bg-[#2D1F1B]/5 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-[#2D1F1B]" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 hover:bg-red-50 rounded-full transition-colors self-start"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-[#2D1F1B]/10 p-6 space-y-4 bg-white">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#2D1F1B]/60">Subtotal</span>
                  <span className="font-mono font-bold text-xl text-[#2D1F1B]">
                    {formatPrice(price)}
                  </span>
                </div>
                <p className="font-sans text-sm text-[#2D1F1B]/50">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="w-full py-4 bg-[#2D1F1B] text-white font-mono font-semibold rounded-full hover:bg-[#1a1210] transition-all duration-300 shadow-[3px_3px_0px_#819076] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                  Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 border border-[#2D1F1B] text-[#2D1F1B] font-mono font-semibold rounded-full hover:bg-[#2D1F1B]/5 transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-sm text-red-500 font-sans hover:underline"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
