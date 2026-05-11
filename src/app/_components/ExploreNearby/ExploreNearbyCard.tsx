import { ExploreNearbyItem } from "@/types/exploreNearby";
import { Heart } from "lucide-react";
import Image from "next/image";

const ExploreNearbyCard = ({ item }: { item: ExploreNearbyItem }) => {
  return (
    <div>
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
  );
};

export default ExploreNearbyCard;
