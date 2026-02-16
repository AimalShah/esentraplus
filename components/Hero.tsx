export default function Hero() {
  return (
    <div className="h-screen md:space-y-24 space-y-18  md:p-12 p-6 mx-auto md:max-w-[84rem] w-full">
      <div className="flex md:gap-12 gap-6 md:flex-nowrap flex-wrap">
        <div>
          <h1 className="md:text-4xl text-2xl font-mono font-bold">
            Revitalize your look with vibrance{" "}
            <span className="text-[#819076]">essentials</span>
          </h1>
        </div>
        <div className="md:space-y-8 space-y-4">
          <p className="lowercase md:text-xl text-lg">
            OUR ESSENTIALS ARE DESIGNED TO NOURISH, PROTECT, AND YOUR BEAUTY
            JOURNEY.{" "}
          </p>
          <div className="flex md:gap-8 gap-4 md:flex-nowrap flex-wrap">
            <button
              className="px-8 py-2 font-semibold bg-white text-primary-text rounded-full hover:-rotate-12
                transition-all md:w-full w-[80%]"
            >
              See Products
            </button>
            <button
              className="px-8 py-2 font-semibold bg-background border-primary-text border-2 text-primary-text rounded-full hover:-rotate-12
                transition-all md:w-full w-[80%]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#EAE4D7] rounded-2xl">
        <img
          src="https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67eaab97771fefca4ce06633_Hero-Image-Logo.avif"
          alt="product image"
          className="w-full md:h-[65vh] h-[30vh] object-cover rounded-2xl -rotate-5 
            "
        />
      </div>
    </div>
  );
}
