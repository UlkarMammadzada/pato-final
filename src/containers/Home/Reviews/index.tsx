import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Text from "../../../components/shared/Text";
import Title from "../../../components/shared/Title";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="py-32 px-6">
      <div className="text-center">
        <Text text="Customers Say" color="red" />
        <Title text="REVIEW" color="black" />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Review
            message="“We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui”"
            author="Marie Simmons ˗ New York"
            img="avatar-1.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            message="“We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui”"
            author="Marie Simmons ˗ New York"
            img="avatar-2.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            message="“We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui”"
            author="Marie Simmons ˗ New York"
            img="avatar-3.webp"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
