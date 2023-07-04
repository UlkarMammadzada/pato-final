import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SlideItem from "./SlideItem";

const Slides = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <SlideItem
          img="/assets/slides-1.jpg"
          title="Welcome To"
          subTitle="Pato Place"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem
          img="/assets/slides-2.webp"
          title="Welcome To"
          subTitle="Pato Place"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem
          img="/assets/slides-3.webp"
          title="Welcome To"
          subTitle="Pato Place"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;
