"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/woocommerce";
import { useCartStore } from "@/lib/store";
import { WooProduct } from "@/types/woocommerce";
import { ShoppingBag, Loader2 } from "lucide-react";
import {
  Reveal,
  RevealText,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "./animations/Reveal";

async function fetchProducts(): Promise<WooProduct[]> {
  try {
    const response = await fetch("/api/products?per_page=8");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return getDemoProducts();
  }
}

export default function ProductSection() {
  const [products, setProducts] = useState<WooProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
        setProducts(getDemoProducts());
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="mt-15 md:max-w-[82rem] mx-auto mb-40">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-[#819076]" />
        </div>
      </div>
    );
  }

  return (
    <div id="products" className="mt-15 md:max-w-[82rem] mx-auto mb-40">
      <ScaleIn className="w-full flex justify-center">
        <p className="bg-white font-mono font-bold text-sm px-4 py-2 rounded-full shadow-sm">
          PRODUCTS
        </p>
      </ScaleIn>
      <div className="md:space-y-4 mt-4">
        <Reveal direction="up" delay={0.1}>
          <h2 className="text-center font-mono font-bold text-3xl md:text-4xl">
            Our Most-Loved Essentials
          </h2>
        </Reveal>
        <div className="flex justify-center">
          <RevealText
            delay={0.2}
            className="text-center font-sans text-lg md:w-1/2 text-[#2D1F1B]/70"
          >
            Carefully selected by you — discover the skincare favorites that
            glow beyond expectations.
          </RevealText>
        </div>
      </div>

      {/* PRODUCT CARD SECTION */}
      <StaggerContainer
        staggerDelay={0.1}
        delayChildren={0.3}
        className="flex item-center justify-center gap-8 flex-wrap px-4"
      >
        {products.map((product) => (
          <StaggerItem key={product.id}>
            <ProductCard
              product={product}
              onAddToCart={() => addToCart(product, 1)}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {error && (
        <p className="text-center font-sans text-red-500 mt-4 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

function ProductCard({
  product,
  onAddToCart,
}: {
  product: WooProduct;
  onAddToCart: () => void;
}) {
  const [isAdding, setIsAdding] = useState(false);
  const imageUrl = product.images[0]?.src || "";
  const price = parseFloat(product.price) || 0;
  const regularPrice = parseFloat(product.regular_price) || price;

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart();
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        layout
        whileHover={{ y: -5 }}
        className="group p-2 md:min-h-[28rem] w-full bg-white rounded-2xl md:w-80 flex flex-col gap-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden rounded-2xl bg-[#F6F5F0]">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="transition-all group-hover:scale-110 w-full h-full object-cover duration-500"
            />
          ) : (
            <div className="w-full h-full bg-[#EAE4D7] flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-[#2D1F1B]/20" />
            </div>
          )}

          {/* Sale Badge */}
          {product.on_sale && regularPrice > price && (
            <div className="absolute top-3 left-3 bg-[#819076] text-white font-mono text-xs font-bold px-3 py-1 rounded-full">
              SALE
            </div>
          )}

          {/* Quick Add Button */}
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-3 right-3 w-12 h-12 bg-[#2D1F1B] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
          >
            {isAdding ? (
              <span className="text-xs font-mono">✓</span>
            ) : (
              <ShoppingBag className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="px-2 pb-2 flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-2">
            <h2 className="font-semibold font-mono text-[#2D1F1B] line-clamp-1">
              {product.name}
            </h2>
            <div className="flex flex-col items-end">
              {product.on_sale && regularPrice > price ? (
                <>
                  <span className="font-sans text-[#819076] font-semibold">
                    {formatPrice(price)}
                  </span>
                  <span className="font-sans text-sm text-[#2D1F1B]/40 line-through">
                    {formatPrice(regularPrice)}
                  </span>
                </>
              ) : (
                <span className="font-sans font-semibold text-[#2D1F1B]">
                  {formatPrice(price)}
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-600 font-sans text-sm line-clamp-2 mt-1">
            {product.short_description?.replace(/<[^>]*>/g, "") ||
              "Premium skincare product"}
          </p>

          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto pt-4 w-full py-3 bg-[#F6F5F0] text-[#2D1F1B] font-mono font-semibold rounded-xl hover:bg-[#2D1F1B] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isAdding ? (
              <>
                <span className="text-green-400">✓</span>
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// Demo products for development/fallback
function getDemoProducts(): WooProduct[] {
  return [
    {
      id: 1,
      name: "Night Cream",
      slug: "night-cream",
      permalink: "#",
      date_created: "",
      date_modified: "",
      type: "simple",
      status: "publish",
      featured: true,
      catalog_visibility: "visible",
      description: "Silky cream for instant hydration",
      short_description:
        "Silky cream for instant hydration and overnight skin repair.",
      sku: "NC001",
      price: "3500",
      regular_price: "4000",
      sale_price: "3500",
      date_on_sale_from: null,
      date_on_sale_to: null,
      on_sale: true,
      purchasable: true,
      total_sales: 0,
      virtual: false,
      downloadable: false,
      downloads: [],
      download_limit: 0,
      download_expiry: 0,
      external_url: "",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      manage_stock: false,
      stock_quantity: null,
      stock_status: "instock",
      backorders: "no",
      backorders_allowed: false,
      backordered: false,
      sold_individually: false,
      weight: "",
      dimensions: { length: "", width: "", height: "" },
      shipping_required: true,
      shipping_taxable: true,
      shipping_class: "",
      shipping_class_id: 0,
      reviews_allowed: true,
      average_rating: "0",
      rating_count: 0,
      related_ids: [],
      upsell_ids: [],
      cross_sell_ids: [],
      parent_id: 0,
      purchase_note: "",
      categories: [{ id: 1, name: "Skincare", slug: "skincare" }],
      tags: [],
      images: [
        {
          id: 1,
          date_created: "",
          date_modified: "",
          src: "https://cdn.prod.website-files.com/68d2f473aab486428aeb7d43/68daca9c1dee445e59b861a5_Product%20Img%20(25).webp",
          name: "Night Cream",
          alt: "Night Cream Product",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      meta_data: [],
      _links: { self: [], collection: [] },
    },
    {
      id: 2,
      name: "Glowing Serum",
      slug: "glowing-serum",
      permalink: "#",
      date_created: "",
      date_modified: "",
      type: "simple",
      status: "publish",
      featured: true,
      catalog_visibility: "visible",
      description: "A glow-enhancing serum infused with vitamin C",
      short_description:
        "A glow-enhancing serum infused with vitamin C for radiant skin.",
      sku: "GS001",
      price: "5500",
      regular_price: "5500",
      sale_price: "",
      date_on_sale_from: null,
      date_on_sale_to: null,
      on_sale: false,
      purchasable: true,
      total_sales: 0,
      virtual: false,
      downloadable: false,
      downloads: [],
      download_limit: 0,
      download_expiry: 0,
      external_url: "",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      manage_stock: false,
      stock_quantity: null,
      stock_status: "instock",
      backorders: "no",
      backorders_allowed: false,
      backordered: false,
      sold_individually: false,
      weight: "",
      dimensions: { length: "", width: "", height: "" },
      shipping_required: true,
      shipping_taxable: true,
      shipping_class: "",
      shipping_class_id: 0,
      reviews_allowed: true,
      average_rating: "0",
      rating_count: 0,
      related_ids: [],
      upsell_ids: [],
      cross_sell_ids: [],
      parent_id: 0,
      purchase_note: "",
      categories: [{ id: 1, name: "Skincare", slug: "skincare" }],
      tags: [],
      images: [
        {
          id: 2,
          date_created: "",
          date_modified: "",
          src: "https://cdn.prod.website-files.com/68d2f473aab486428aeb7d43/68dacadfa9d81b3b29ed3cce_Product%20Img%20(23).webp",
          name: "Glowing Serum",
          alt: "Glowing Serum Product",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      meta_data: [],
      _links: { self: [], collection: [] },
    },
  ];
}
