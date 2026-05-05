import Image from "next/image";

const GreatestOutdoors = () => {
  return (
    <section className="section-gap">
      <div className="container w-full">
        <div className="bg-section rounded-xl relative overflow-hidden h-100 group">
          <Image
            src={
              "https://res.cloudinary.com/djdhc5rlo/image/upload/v1777978543/ChatGPT_Image_May_5_2026_01_54_08_PM_z3l5p6.png"
            }
            alt="The-Greatest-Outdoors"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />

          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full z-50 text-center text-white text-shadow-lg text-shadow-neutral-700">
            <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold">
              The Greatest Outdoors
            </p>

            <p className="md:text-xl font-medium italic my-2">
              Wishlists Curated By
              <span className="font-extrabold text-main ps-1.5 animate-pulse">
                Homely
              </span>
            </p>

            <button className="py-2 px-3 bg-neutral-900 rounded-lg text-sm mt-1 shadow-xl shadow-neutral-800 cursor-pointer transition-all duration-300 active:scale-110 hover:shadow-neutral-900">
              Get Inspired
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreatestOutdoors;
