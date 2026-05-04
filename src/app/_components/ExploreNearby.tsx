import { exploreNearby } from "@/types/exploreNearby";
import { Heart } from "lucide-react";
import Image from "next/image";

export const exploreData: exploreNearby[] = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Sharm El Sheikh",
    distance: "6-hour drive",
    tag: "Guest favorite",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Hurghada",
    distance: "5-hour drive",
    tag: "Guest favorite",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Dahab",
    distance: "7-hour drive",
    tag: "Guest favorite",
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Siwa Oasis",
    distance: "8-hour drive",
    tag: "Superhost",
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "El Gouna",
    distance: "5-hour drive",
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Marsa Alam",
    distance: "9-hour drive",
    tag: "Superhost",
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Alexandria",
    distance: "2-hour drive",
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Cairo",
    distance: "3-hour drive",
    tag: "Guest favorite",
  },
];

const ExploreNearby = () => {
  return (
    <section className="section-gap" id="explore-nearby">
      <div className="container">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-6 md:mb-8 xl:mb-10 text-shadow-md text-shadow-neutral-500 drop-shadow-md">
          Explore Nearby
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {exploreData.map((item: exploreNearby) => (
            <div key={item.id}>
              <div className="relative aspect-square w-full overflow-hidden rounded-xl cursor-pointer group">
                <Image
                  src={item.img}
                  alt={item.location}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {item.tag && (
                  <span className="absolute z-50 inset-s-3 top-3 text-xs rounded-full bg-white py-1 px-2.5 font-medium">
                    {item.tag}
                  </span>
                )}

                <Heart className="absolute z-50 inset-e-3 top-3 w-6 h-6 text-white fill-secondary transition-transform duration-300 hover:scale-110" />
              </div>

              <div className="mt-2 ps-1.5 text-sm font-medium">
                <p>{item.location}</p>
                <span className="text-secondary">{item.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreNearby;
