"use client";

import { LiveAnywhereItem } from "@/types/liveAnywhere";
import Image from "next/image";
import { FreeMode } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

const Swiper = ({ liveData }: { liveData: LiveAnywhereItem[] }) => {
  return (
    <SwiperComponent
      slidesPerView={"auto"}
      spaceBetween={15}
      speed={600}
      freeMode={{
        enabled: true,
        momentum: true,
        momentumBounce: true,
        momentumRatio: 1,
      }}
      modules={[FreeMode]}
    >
      {liveData.map((item: LiveAnywhereItem) => (
        <SwiperSlide key={item.id} className="w-60! md:w-80!">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl cursor-pointer group">
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />

            <div className="absolute inset-0 group-hover:bg-black/10 group-active:bg-black/10 transition-colors duration-300" />
          </div>

          <span className="block whitespace-nowrap mt-2 ps-1.5 text-sm font-medium">
            {item.title}
          </span>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default Swiper;
