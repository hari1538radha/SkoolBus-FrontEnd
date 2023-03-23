import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import CaretRightIcon from '../../public/chevronright.svg';
import CaretLetftIcon from '../../public/chevronleft.svg';
import mockCourseData from './constants';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperClass, { Pagination, Navigation } from 'swiper';
import { useCallback, useState } from 'react';

type Props = { title: string; arrowBgColor: string; backgroundColor: string };

const ClassSlide: React.FC<Props> = ({
  title,
  arrowBgColor,
  backgroundColor,
}) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);
  return (
    <div
      className={`relative flex flex-col pl-[8%] pb-[3%] bg-[${backgroundColor}] h-full`}
    >
      <h1
        className="text-[30px] my-[1.5%] font-bold"
        style={{ fontWeight: 600 }}
      >
        {title}
      </h1>
      <div className="absolute right-[14%] top-[6%] flex flex-row items-center justify-end ">
        <button
          onClick={handleLeftClick}
          className={`w-[50px] h-[50px] flex items-center justify-center bg-[${arrowBgColor}] rounded-full mx-2`}
        >
          <CaretLetftIcon />
        </button>
        <button
          onClick={handleRightClick}
          className={`w-[50px] h-[50px] flex items-center justify-center bg-[${arrowBgColor}] rounded-full`}
        >
          <CaretRightIcon />
        </button>
      </div>
      <div className=" ">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          onSwiper={setSwiperRef}
        >
          {mockCourseData.map((item,index) => (
            <SwiperSlide className="mt-[5%]" key={index}>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClassSlide;
