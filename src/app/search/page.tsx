import { SearchResultItem } from "@/types/searchResultItem";
import { format } from "date-fns";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

const filters = [
  "Cancellation Flexibility",
  "Type Of Place",
  "price",
  "Rooms and Beds",
  "More Filters",
];

const searchResults = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Private room in central London",
    title: "Stay in a Spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
    long: -0.0022275,
    lat: 51.5421655,
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Modern studio in London",
    title: "Independent Luxury Studio Apartment",
    description: "2 guests · 1 bedroom · 1 bed · 1 bathroom · Wifi · Kitchen",
    star: 4.3,
    price: "£40 / night",
    total: "£157 total",
    long: -0.095091,
    lat: 51.48695,
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Apartment near downtown London",
    title: "Modern London Studio Apartments",
    description:
      "4 guests · 2 bedrooms · 4 beds · 2 bathrooms · Free parking · Washing machine",
    star: 3.8,
    price: "£35 / night",
    total: "£207 total",
    long: -0.135638,
    lat: 51.521916,
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Cozy apartment in East London",
    title: "30 Minutes to Oxford Street",
    description:
      "1 guest · 1 bedroom · 1 bed · 1 bathroom · Wifi · Kitchen · Free parking · Washing machine",
    star: 4.1,
    price: "£55 / night",
    total: "£320 total",
    long: -0.069961,
    lat: 51.472618,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Peaceful stay in central London",
    title: "Spacious Modern Bedroom",
    description:
      "3 guests · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry cleaning",
    star: 5,
    price: "£60 / night",
    total: "£450 total",
    long: -0.08472,
    lat: 51.510794,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Private room near London Bridge",
    title: "The Blue Room in London",
    description:
      "2 guests · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing machine",
    star: 4.23,
    price: "£65 / night",
    total: "£480 total",
    long: -0.094116,
    lat: 51.51401,
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    location: "Luxury apartment in London",
    title: "5-Star Luxury Apartment",
    description:
      "3 guests · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine",
    star: 3.85,
    price: "£90 / night",
    total: "£650 total",
    long: -0.109889,
    lat: 51.521245,
  },
];

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    location: string;
    startDate: string;
    endDate: string;
    numberOfGuests: string;
  }>;
}) => {
  const { location, startDate, endDate, numberOfGuests } = await searchParams;

  const info = `300+ Stays | ${format(new Date(startDate), "dd MMMM yy")} - ${format(new Date(endDate), "dd MMMM yy")} | For ${numberOfGuests} Guests in ${location[0].toUpperCase()}${location.slice(1)}`;

  return (
    <main>
      <section className="section-gap">
        <div className="container grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="List">
            <p className="text-xs text-secondary font-medium truncate">
              {info}
            </p>

            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold my-4">
              Stays in {location[0].toUpperCase()}
              {location.slice(1)}
            </h1>

            <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
              {filters.map((item, idx) => (
                <span
                  key={idx}
                  className="py-2.5 px-4 ring ring-section transition-all duration-300 hover:ring-2 active:ring-4 text-sm rounded-full whitespace-nowrap cursor-pointer hover:bg-section hover:ring-secondary/20"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 mt-5">
              {searchResults.map((item: SearchResultItem) => (
                <div key={item.id} className="ring ring-section rounded-xl">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative aspect-square w-full max-h-60 md:max-h-none md:max-w-50">
                      <Image
                        src={item.img}
                        alt={item.location}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover rounded-t-xl md:rounded-t-none md:rounded-tl-xl md:rounded-bl-xl ring ring-white"
                      />
                    </div>

                    <div className="flex flex-col gap-5 justify-between flex-1 p-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="capitalize text-gray-700 font-medium italic text-sm">
                            {item.location}
                          </p>
                          <Heart size={18} />
                        </div>

                        <p className="capitalize font-medium my-2">
                          {item.title}
                        </p>
                        <p className="text-sm text-secondary">
                          {item.description}
                        </p>
                      </div>

                      <div>
                        <span className="block font-bold text-end mb-0.5">
                          {item.price}
                        </span>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="fill-main text-main" size={18} />
                            <span className="text-sm font-medium">
                              {item.star}
                            </span>
                          </div>

                          <span className="text-secondary">{item.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-400">Map</div>
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
