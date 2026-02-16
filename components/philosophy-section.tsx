export default function PhilosophySection() {
  return (
    <div className="mt-15 md:max-w-[82rem] mx-auto mb-20 md:px-0 px-4">
      <div className="mt-15 md:max-w-[82rem] mx-auto mb-10">
        <div className="w-full flex justify-center">
          <p className="bg-white font-mono font-bold text-sm px-4 py-2 rounded-full">
            PHILOSOPHY
          </p>
        </div>
        <div className="md:space-y-4 mt-4">
          <h2 className="text-center font-mono font-bold text-3xl">
            Story Behind <span className="text-[#819076]">Our Products</span>
          </h2>
          <div className="flex justify-center">
            <p className="text-center font-sans text-lg md:w-1/2">
              Guided by purpose, crafted with intention, and devoted to timeless
              skin health.
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-28">
        <div className="w-full flex flex-col md:justify-center gap-8">
          <h2 className="md:text-3xl text-xl md:text-start text-center font-mono font-bold">
            Our Philosophy of Thoughtful,{" "}
            <span className="text-[#819076]">Intentional Skincare</span>
          </h2>
          <p className="text-lg md:text-start text-center">
            We believe skincare should be simple, intentional, and effective.
            Every formula is thoughtfully crafted to support your skin’s natural
            balance, delivering care that nurtures confidence, clarity, and a
            healthy, lasting glow.
          </p>
        </div>
        <div>
          <div className="md:p-10 md:mt-0 mt-10">
            <div className="rounded-2xl relative">
              <div className="absolute w-full h-full rounded-2xl bg-[#EAE4D7] z-[-1] -rotate-6" />
              <img
                src="https://cdn.prod.website-files.com/68c9bb14e6fa155edae89723/68dee94f02707893be18c3b3_About%20Img-p-2000.webp"
                alt="image of prodcut"
                className="rounded-2xl z-20                   "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
