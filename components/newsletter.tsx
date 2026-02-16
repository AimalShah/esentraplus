export default function NewsLetter() {
  return (
    <div className="h-[60vh] bg-[#D6C9B2] grid place-items-center">
      <div className="space-y-8">
        <p className="text-4xl font-bold font-mono text-center text-primary-text">
          Subscribe to Our <br /> Newsletter
        </p>
        <form className="flex flex-col gap-2 w-full">
          <input
            type="email"
            placeholder="Email"
            className="border-2 p-2 text-2xl border-primary-text rounded-full w-[40vw]"
          />
          <button className="px-6 py-2 font-medium font-mono text-2xl w-full bg-primary-text rounded-full text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            Subscribe{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
