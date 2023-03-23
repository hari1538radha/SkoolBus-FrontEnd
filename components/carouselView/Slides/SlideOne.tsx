import * as React from 'react';
import Image from 'next/image';
const SlideOne = () => (
  <div className=" relative w-screen flex flex-row h-[600px]">
    <div className='pt-[12%] pl-[8%] z-10'>
      <h1 className="text-[42px] " style={{ fontWeight: 700 }}>
        Highly Skilled Teachers
      </h1>
      <p
        className="text-[18px] text-[#393939] my-5 w-3/4 "
        style={{ fontWeight: 400 }}
      >
        Connect with world wide teachers who are subject matter experts and
        approved by SkoolBus
      </p>
      <button
        className="bg-[#FF4A6C] text-[16px] text-white w-[190px] h-[50px] rounded-full z-20"
        style={{ fontWeight: 600 }}
      >
        Know More
      </button>
    </div>
    <Image
      src={`/Slides/illustration.svg`}
      alt=""
      className="pr-10"
      objectFit="contain"
      objectPosition="center"
      width={736}
      height={525}
    />
    <Image
      src={`/Slides/Ellipse1.svg`}
      alt=""
      className="absolute bottom-0 z-0"
      objectFit="contain"
      objectPosition="center"
      width={200}
      height={80}
    />
    <Image
      src={`/Slides/Ellipse2.svg`}
      alt=""
      className="absolute z-0 left-1/4"
      objectFit="contain"
      objectPosition="center"
      width={494}
      height={70}
    />
  </div>
);

export default SlideOne;
