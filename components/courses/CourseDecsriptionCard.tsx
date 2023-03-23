import React from 'react';
import Rating from '../commonComponents/Rating';
import Camera from '../../public/Course/claritycamera.svg';
import BuyNow from '../commonComponents/BuyNow';
import Avatar from './Avatar';
type Props = {
  title: string;
  description: string;
  rating: number;
  comment: number;
  userName: string;
  price:number;
};

const CourseDescriptionCard: React.FC<Props> = ({title,rating,comment,price,userName,description}) => {
  return (
    <div className="flex flex-col w-[300px] h-[525px] mr-5 bg-white rounded-lg justify-center border-b-2 shadow-xl">
      
        <div className="flex flex-row w-full items-center p-3 ">
          <Camera />
          <h1 className="text-xl font-bold mx-3">{title}</h1>
          
        </div>
        <div className="bg-gradient-to-b from-[#ECF7F3]">
        <hr className="w-full h-[1.5px] bg-gray-500 dark:bg-gray-700 px-0 opacity-20" />
        <h1 className="text-[18px] px-3 my-2" style={{ fontWeight: 500 }}>
          {' '}
         {description}
        </h1>
        
        <Rating rating={rating} comment={comment} />
      </div>
      <Avatar name={userName} />
      <hr className="w-full h-[1.5px] bg-gray-500 dark:bg-gray-700 opacity-20 px-0" />
      <div className="p-2">
        <div className="flex flex-row items-center justify-between px-3 pt-1">
          {' '}
          <h1 className="text-[14px] opacity-80" style={{ fontWeight: 600 }}>
            Lesson
          </h1>
          <h1 className="text-[14px] opacity-80" style={{ fontWeight: 600 }}>
            5.30
          </h1>
        </div>
        <h1
          className="text-[14px] text-[#464646] opacity-60 px-3 w-3/4"
          style={{ fontWeight: 400 }}
        >
          Shooting Portraits with a Wide vs. Telephoto Lens
        </h1>
        
      </div>
      <hr className="w-full h-[1.5px] bg-gray-500 dark:bg-gray-700 opacity-20 px-0" />
      <div className="p-2">
        <div className="flex flex-row items-center justify-between px-3 pt-1">
          {' '}
          <h1 className="text-[14px] opacity-80" style={{ fontWeight: 600 }}>
            Lesson
          </h1>
          <h1 className="text-[14px] opacity-80" style={{ fontWeight: 600 }}>
            5.30
          </h1>
        </div>
        <h1
          className="text-[14px] text-[#464646] opacity-60 px-3 w-3/4"
          style={{ fontWeight: 400 }}
        >
          Depth of Field & Aperture
        </h1>
      </div>
      <hr className="w-full h-[1.5px] bg-gray-500 dark:bg-gray-700 opacity-20 px-0" />
      <div className="px-3 py-2">
        <div className="flex flex-row items-center justify-between px-3 pt-1">
          {' '}
          <h1 className="text-[14px] opacity-80" style={{ fontWeight: 600 }}>
            Lesson
          </h1>
          <h1 className="text-[14px] opacity-80" style={{ fontWeight: 600 }}>
            5.30
          </h1>
        </div>
        <h1
          className="text-[14px] text-[#464646] opacity-60 px-3 w-3/4"
          style={{ fontWeight: 400 }}
        >
          Depth of Field & Aperture
        </h1>
      </div>
      <hr className="w-full h-[1.5px] p-0 bg-gray-500 dark:bg-gray-700 my-1 opacity-20 px-0" />
      <BuyNow Price={price} />
    </div>
  );
};

export default CourseDescriptionCard;
