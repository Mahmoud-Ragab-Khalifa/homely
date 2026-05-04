import MainHeading from "@/components/MainHeading";
import Swiper from "./Swiper";

export const liveData = [
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    title: "Pet friendly",
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    title: "Cabins & cottages",
  },

  {
    id: "2",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    title: "Unique stays",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    title: "Entire homes",
  },

  {
    id: "6",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    title: "Beachfront",
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    title: "City apartments",
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    title: "Luxury villas",
  },
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop&q=80&auto=format&dpr=2",
    title: "Outdoor getaways",
  },
];

const LiveAnywhere = () => {
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
