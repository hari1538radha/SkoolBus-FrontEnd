import Image from 'next/image';
import Classes from '../../public/teacherInfo/classes.svg';
import Courses from '../../public/teacherInfo/courses.svg';
import Followers from '../../public/teacherInfo/followers.svg';
import Testimonials from '../../public/teacherInfo/testimonials.svg';
type Props = {};

const Highlights: React.FC<Props> = (props) => {
  return (
    <div className="">
      <h1 className="text-[30px] my-6" style={{ fontWeight: 600 }}>
        Key Highlights
      </h1>
      <div className="flex flex-col">
        <div className="flex flex-row  items-center">
          <Classes />
          <h1 className="600 text-[16px] text-[#000000] mb-3 " style={{ fontWeight: 400 }}>1344 Classes</h1>
        </div>
        <div className="flex flex-row  items-center">
          <Courses />
          <h1 className="600 text-[16px] text-[#000000] mx-3" style={{ fontWeight: 400 }}>89 Courses</h1>
        </div>
        <div className="flex flex-row  items-center">
          <Followers />
          <h1 className="600 text-[16px] text-[#000000] mx-3" style={{ fontWeight: 400 }}>
            2013 Followers
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <Testimonials />
          <h1 className="600 text-[16px] text-[#000000] mx-3" style={{ fontWeight: 400 }}>
            203 Testimonials
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
