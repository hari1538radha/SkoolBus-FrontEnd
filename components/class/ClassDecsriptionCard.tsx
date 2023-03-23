import React from 'react';
import Personcount from '../../public/Classes/personcount.svg';
import Time from '../../public/Classes/carbon_time.svg';
import Calendar from '../../public/Classes/carbon_calendar.svg';
import Image from 'next/image';
import BuyNow from '../commonComponents/BuyNow';
import Avatar from '../courses/Avatar';

type Props = {
  title: string;
  classIcon: string;
  // description: string;
  // rating: number;
  // comment: number;
  // userName: string;
  // userAvatar: string;
};

const ClassDecsriptionCard: React.FC<Props> = ({ title, classIcon }) => {
  return (
    <div className="flex flex-col w-[300px] h-[570px] bg-white rounded-lg justify-center border-b-2 shadow-lg my-[3%]">
      
      <div className="flex flex-row w-full items-center p-3 h-[64px]">
        <Image
          src={`/Course/${classIcon}.svg`}
          alt=""
          className=""
          width={36}
          height={40}
        />
        <h1 className="text-xl font-bold mx-4">{title}</h1>
      </div>
      <hr className="w-full h-[2px] bg-gray-500 dark:bg-gray-700 opacity-20 px-0" />
      <div className='flex justify-center items-center w-full'>
      <Image
          src={`/Classes/mockclasscard.svg`}
          alt=""
          className="flex items-center my-5 justify-center "
          width={268}
          height={120}
        />
      </div>
      
      <div className='flex flex-row items-center px-3 mb-3'>
        <h1 className="text-[14px] font-bold " style={{ fontWeight: 500 }}>Available Seats</h1>
        <h1 className="text-[10px] font-bold mx-2" style={{ fontWeight: 400 }}>(3 out of 6)</h1>
      </div>
      <div className='px-3'><Personcount /></div>
      
      <h1 className="text-[18px] px-3 my-2" style={{ fontWeight: 500 }}>
        {' '}
        A Complete Guide to Photography
      </h1>
      <Avatar name="Nicholas Albert" />
      <div className='flex flex-row my-3 px-3'>
        <Calendar/>
        <h1 className="text-[14px] font-bold mx-3 text-[#464646] opacity-60" style={{ fontWeight: 400 }}>Date: 11st June 2022</h1>
      </div>
      <div className='flex flex-row mb-8 px-3'>
        <Time/>
        <h1 className="text-[14px] font-bold mx-3 text-[#464646] opacity-60" style={{ fontWeight: 400 }}>Time: 11.00 AM to 1.00 PM IST</h1>
      </div>
      <hr className="w-full h-[2px] bg-gray-500 dark:bg-gray-700 opacity-20 px-0" />
      <div className='px-3 my-4'><BuyNow Price={478} /></div>
    </div>
  );
};

export default ClassDecsriptionCard;
