import React from 'react';
import Image from 'next/image';
import ArrowRight from '../../public/Course/arrowRight.svg';
type Props = {
  name: string;
  icon:string
};

const ClassCard: React.FC<Props> = ({name,icon}) => {
  return (
    <div className="flex flex-col p-7 mx-6 bg-white w-[240px] h-[240px] shadow-lg rounded-lg">
      <Image
        src={`/Course/${icon}.svg`}
        alt=""
        className=""
        objectFit="contain"
        objectPosition="center"
        width={36}
        height={40}
      />
      <h1 className="text-[20px] mt-2" style={{fontWeight:600}}>{name}</h1>
      <h1 className="text-[12px] my-2 mb-1 opacity-50 text-[#464646] w-3/4" style={{fontWeight:400}}>Agency provides a full service range including technical skills, design.</h1>
      <ArrowRight/>
    </div>
  );
};

export default ClassCard;