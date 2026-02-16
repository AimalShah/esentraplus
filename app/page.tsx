"use client";
import ProductSection from "@/components/product-section";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/philosophy-section";
import { RevealLinks } from "@/components/links";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <PhilosophySection />
      <div className="md:max-w-[82rem] mx-auto">
        <div className="flex md:flex-row-reverse flex-col md:gap-28">
          <div className="w-full flex flex-col md:justify-center gap-8">
            <h2 className="md:text-3xl text-xl md:text-start text-center font-mono font-bold">
              Why Choose <span className="text-[#819076]">Us</span>
            </h2>
            <p className="text-lg md:text-start text-center">
              Our attention to details and satisfaction of our clients is what
              sets us apart from others in the Wellness industry.{" "}
            </p>
          </div>
          <div>
            <div className="md:p-10 md:mt-0 mt-10">
              <div className="rounded-2xl relative">
                <div className="absolute w-full h-full rounded-2xl bg-[#EAE4D7] z-[-1] -rotate-6" />
                <img
                  src="https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f38c443f2affc4bcbaa355_our-spa.avif"
                  alt="image of prodcut"
                  className="rounded-2xl z-20                   "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-15 md:max-w-[82rem] mx-auto mb-10">
        <div className="w-full flex justify-center">
          <p className="bg-white font-mono font-bold text-sm px-4 py-2 rounded-full">
            CONTACT
          </p>
        </div>
        <div className="md:space-y-4 mt-4">
          <h2 className="text-center font-mono font-bold text-3xl">
            Get in <span className="text-[#819076]">Touch</span>
          </h2>
          <div className="flex justify-center">
            <p className="text-center font-sans text-lg md:w-1/2"></p>
          </div>
        </div>
        <RevealLinks />
      </div>
    </>
  );
}
