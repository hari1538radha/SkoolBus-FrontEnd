import React from 'react';
import Books from '../../public/Course/bookslight.svg';
import ClassCard from '../class/ClassCard';
import CourseDescriptionCard from './CourseDecsriptionCard';
type Props = {};

const Course: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col pl-[8%] pb-[3%] h-full bg-[#F5FCFF] w-full">
      <h1
        className="text-[30px] my-[1.5%] font-bold"
        style={{ fontWeight: 600 }}
      >
        Courses
      </h1>
      <div className="flex flex-row w-full">
        <CourseDescriptionCard title={'Photographhy'} description=' A Complete Guide to Photography' userName='David Warner' comment={43} rating={4.5} price={1400}/>
        <div className="flex flex-row flex-wrap items-center w-full">
          <ClassCard name="Tamil" icon="Aaa" />
          <ClassCard name="Sanskrit" icon="sanskrit" />
          <ClassCard name="Photography" icon="claritycamera" />
          <ClassCard name="Culinary" icon="chefHat" />
          <ClassCard name="Art" icon="Paintroller" />
          <div className="flex flex-col p-7 mx-6 bg-[#C05698] w-[240px] h-[240px] shadow-lg rounded-lg justify-center items-center">
            <div className="bg-white opacity-10 p-5 rounded-lg ">
              <Books />
            </div>
            <h1
              className="text-[20px] my-2 mb-2 align-middle text-white w-3/4"
              style={{ fontWeight: 400 }}
            >
              987 Courses & 89 Subjects
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
