import React from 'react';
import Books from '../../public/Course/bookslight.svg';
import ClassCard from '../class/ClassCard';
import ClassDecsriptionCard from './ClassDecsriptionCard';
type Props = {};

const Classes: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col pl-[8%] pb-[3%] h-full bg-[#FDF6F2]">
      <h1
        className="text-[30px] my-[1.5%] font-bold"
        style={{ fontWeight: 600 }}
      >
        Classes
      </h1>
      <div className="flex flex-row w-full">
        <ClassDecsriptionCard
          title={'Photographhy'}
          classIcon="claritycamera"
        />
        <ClassDecsriptionCard title={'Sanskrit'} classIcon="sanskrit" />
        <ClassDecsriptionCard title={'Vedic Maths'} classIcon="chefhat" />
        <ClassDecsriptionCard title={'Tamil'} classIcon="Aaa" />
      </div>
    </div>
  );
};

export default Classes;
