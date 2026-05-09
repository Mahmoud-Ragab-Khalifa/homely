import { SearchResultItem } from "@/types/searchResultItem";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

const SearchResultCard = ({ item }: { item: SearchResultItem }) => {
  return (
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

            <p className="capitalize font-medium my-2">{item.title}</p>
            <p className="text-sm text-secondary">{item.description}</p>
          </div>

          <div>
            <span className="block font-bold text-end mb-0.5">
              {item.price}
            </span>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="fill-main text-main" size={18} />
                <span className="text-sm font-medium">{item.star}</span>
              </div>

              <span className="text-secondary">{item.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
