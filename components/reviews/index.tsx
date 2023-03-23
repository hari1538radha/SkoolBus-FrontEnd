import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ReviewCard from './ReviewCard';

type Props = {};

const Reviews: React.FC<Props> = (props) => {
  return (
    <div className="relative flex flex-col pl-[8%] pb-[3%] h-full">
      <div className="flex flex-row justify-between items-center">
        <h1
          className="text-[30px] my-[1.5%] font-bold"
          style={{ fontWeight: 600 }}
        >
          Featured Reviews
        </h1>
        <h1
          className="text-[15px] opacity-90 mr-10"
          style={{ fontWeight: 500 }}
        >
          View all reviews
        </h1>
      </div>
      <div className="relative flex flex-row justify-center items-center bg-[#FFF2F5] p-10 rounded-xl mr-24 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={-200}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Pagination]}
        className="mySwiper swiper"
      >
          <SwiperSlide><ReviewCard /></SwiperSlide>
          <SwiperSlide><ReviewCard /></SwiperSlide>
          <SwiperSlide><ReviewCard /></SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  );
};

export default Reviews;
