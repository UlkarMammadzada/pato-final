import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import EventItem from "./EventItem";

const Events = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <EventItem
            deadline="July, 10, 2023"
            img="event-1.webp"
            bgImg="bg-event-1.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventItem
            deadline="July, 20, 2023"
            img="event-2.webp"
            bgImg="bg-event-2.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventItem
            deadline="July, 30, 2023"
            img="event-3.webp"
            bgImg="bg-event-3.webp"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
