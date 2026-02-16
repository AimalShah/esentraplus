export default function ProductSection() {
  return (
    <div className="mt-15 md:max-w-[82rem] mx-auto mb-40">
      <div className="w-full flex justify-center">
        <p className="bg-white font-mono font-bold text-sm px-4 py-2 rounded-full">
          PRODUCTS
        </p>
      </div>
      <div className="md:space-y-4 mt-4">
        <h2 className="text-center font-mono font-bold text-3xl">
          Our Most-Loved Essentials
        </h2>
        <div className="flex justify-center">
          <p className="text-center font-sans text-lg md:w-1/2">
            Carefully selected by you — discover the skincare favorites that
            glow beyond expectations.
          </p>
        </div>
      </div>

      {/* PRODUCT CARD SECTION */}
      <div className="flex item-center justify-center gap-8 flex-wrap">
        <ProductCard
          title="Night Cream"
          price={3500}
          description="Silky cream for instant hypdration"
          src="https://cdn.prod.website-files.com/68d2f473aab486428aeb7d43/68daca9c1dee445e59b861a5_Product%20Img%20(25).webp"
        />
        <ProductCard
          title="Glowing Serum"
          price={5500}
          description="A glowing-enhanced serum infused"
          src="https://cdn.prod.website-files.com/68d2f473aab486428aeb7d43/68dacadfa9d81b3b29ed3cce_Product%20Img%20(23).webp"
        />
      </div>
    </div>
  );
}

export function ProductCard({
  title,
  price,
  description,
  src,
}: {
  title: string;
  price: number;
  description: string;
  src: string;
}) {
  return (
    <div className="mt-12 flex items-center justify-center px-4">
      <div className="group p-2 md:min-h-96 w-full  bg-white rounded-2xl md:w-96 flex flex-col gap-4 cursor-pointer">
        <div className="h-full overflow-hidden rounded-2xl">
          <img
            src={src}
            alt="product-1"
            className="transition-all group-hover:scale-125 group-hover:rotate-12 w-full h-full duration-500"
          />
        </div>
        <div>
          <div className="flex justify-between font-sans px-2">
            <h2 className="font-semibold font-mono">{title}</h2>
            <p>Rs {price}</p>
          </div>
          <div className="px-2 text-gray-600">{description}</div>
        </div>
      </div>
    </div>
  );
}
