import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import styles from'../../styles/Home.module.css'
import { Pagination } from "swiper";
import SlideOne from './Slides/SlideOne';

type Props = {};

const Carousel: React.FC<Props> = (props) => {
  return (
    <div className={styles.mm}>
    <Swiper pagination={true} modules={[Pagination]}>
      <SwiperSlide ><SlideOne/></SwiperSlide>
      <SwiperSlide><SlideOne/></SwiperSlide>
      <SwiperSlide><SlideOne/></SwiperSlide>
    </Swiper>
  </div>
  );
};

export default Carousel;
