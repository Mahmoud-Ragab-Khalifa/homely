import MainHeading from "@/components/MainHeading";
import { exploreNearby } from "@/types/exploreNearby";
import ExploreNearbyCard from "./ExploreNearbyCard";

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
        <MainHeading title="Explore Nearby" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {exploreData.map((item: exploreNearby) => (
            <ExploreNearbyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreNearby;
