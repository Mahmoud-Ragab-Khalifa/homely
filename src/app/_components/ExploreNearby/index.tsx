import MainHeading from "@/components/MainHeading";
import { ExploreNearbyItem } from "@/types/exploreNearby";
import ExploreNearbyCard from "./ExploreNearbyCard";
import { getExploreData } from "@/server/db/exploreNearby";

const ExploreNearby = async () => {
  const exploreData: ExploreNearbyItem[] = await getExploreData();

  return (
    <section className="section-gap" id="explore-nearby">
      <div className="container">
        <MainHeading title="Explore Nearby" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {exploreData.map((item: ExploreNearbyItem) => (
            <ExploreNearbyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreNearby;
