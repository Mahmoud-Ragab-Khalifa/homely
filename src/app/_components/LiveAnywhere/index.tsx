import MainHeading from "@/components/MainHeading";
import Swiper from "./Swiper";
import { LiveAnywhereItem } from "@/types/liveAnywhere";
import { getLiveData } from "@/server/db/liveAnywhere";

const LiveAnywhere = async () => {
  const liveData: LiveAnywhereItem[] = await getLiveData();

  return (
    <section className="section-gap" id="explore-nearby">
      <div className="container">
        <MainHeading title="Live Anywhere" />

        <Swiper liveData={liveData} />
      </div>
    </section>
  );
};

export default LiveAnywhere;
