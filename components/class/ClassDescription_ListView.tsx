import React from 'react';
import Personcount from '../../public/Classes/personcount.svg';
import Time from '../../public/Classes/carbon_time.svg';
import Calendar from '../../public/Classes/carbon_calendar.svg';
import Image from 'next/image';
import BuyNow from '../commonComponents/BuyNow';
import Avatar from '../courses/Avatar';
import Rupee from '../../assests/currencyRupee.svg';
type Props = {
  title: string;
  classIcon: string;
  // description: string;
  // rating: number;
  // comment: number;
  // userName: string;
  // userAvatar: string;
};

const ClassDescriptionListView: React.FC<Props> = ({ title, classIcon }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg justify-center border-b-2 shadow-lg my-[3%] w-full">
      <div className="flex flex-row w-full items-center justify-between p-3 h-[64px]">
        <div className="flex flex-row items-center">
          <Image
            src={`/Course/${classIcon}.svg`}
            alt=""
            className=""
            width={36}
            height={40}
          />
          <h1 className="text-xl font-bold mx-4">{title}</h1>
        </div>
        <div className="px-3">
          <div className="flex flex-row items-center px-3 mb-3">
            <h1 className="text-[14px] font-bold " style={{ fontWeight: 500 }}>
              Available Seats
            </h1>
            <h1
              className="text-[10px] font-bold mx-2"
              style={{ fontWeight: 400 }}
            >
              (3 out of 6)
            </h1>
            <Personcount />
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-gray-500 dark:bg-gray-700 opacity-20 px-0" />
      <div className="flex items-center w-full justify-between">
        <div className='flex flex-row p-4'>
        <Image
          src={`/Classes/mockclasscard.svg`}
          alt=""
          className="flex items-center justify-center "
          width={268}
          height={120}
        />
        <div className="flex flex-col mx-2">
          <h1 className="text-[18px] px-3 mb-1" style={{ fontWeight: 500 }}>
            {' '}
            A Complete Guide to Photography
          </h1>
          <Avatar name="Nicholas Albert" />
          <div className="flex flex-row my-2 px-2">
            <Calendar />
            <h1
              className="text-[14px] font-bold mx-3 text-[#464646] opacity-60"
              style={{ fontWeight: 400 }}
            >
              Date: 11st June 2022
            </h1>
            <Time />
            <h1
              className="text-[14px] font-bold mx-3 text-[#464646] opacity-60"
              style={{ fontWeight: 400 }}
            >
              Time: 11.00 AM to 1.00 PM IST
            </h1>
          </div>
        </div>
        </div>
        
        <div className="bg-[#ECF7F3] flex flex-col justify-center h-full items-center px-10">
          <div className="flex flex-row items-center mb-1">
            <Rupee />
            <h1 className="font-[600] text-[34px]">1490</h1>
          </div>
          <button className="bg-[#12A35C] font-bold text-white w-full h-[50px] rounded-full px-14">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassDescriptionListView;
