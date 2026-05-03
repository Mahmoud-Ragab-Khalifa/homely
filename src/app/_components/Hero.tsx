import { ChevronsDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-section min-h-[calc(100vh-80px)] relative">
      <Image
        src={"https://images.unsplash.com/photo-1505761671935-60b3a7427bad"}
        alt="Hero-Image"
        fill
        className="object-cover object-left"
        loading="eager"
        priority={true}
      />

      <div className="absolute z-50 top-1/2 left-1/2 -translate-1/2 text-center w-full">
        <p className="text-xl font-medium md:text-3xl md:font-semibold mb-5 md:mb-6 italic text-white text-shadow-neutral-600 drop-shadow-lg text-shadow-lg">
          Not Sure Where To Go? Perfect.
        </p>

        <button
          type="button"
          className="bg-linear-to-r from-purple-500 to-main hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 active:scale-105 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-fuchsia-300"
        >
          I am Flexable
        </button>
      </div>

      <a
        href="#"
        className="absolute z-50 animate-bounce bottom-5 left-1/2 -translate-1/2"
      >
        <ChevronsDown
          className="text-[#d845a8] md:text-[#d845a8]/60 hover:text-[#d845a8] active:text-[#d845a8] w-9 h-9 md:w-12.5 md:h-12.5 transition-colors duration-300"
          strokeWidth={3}
        />
      </a>
    </section>
  );
};

export default Hero;
