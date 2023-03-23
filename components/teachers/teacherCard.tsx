import Image from 'next/image';
import Comment from '../../public/teachers/commentpink.svg';
import Group from '../../public/teachers/Group.svg';
import Dashboard from '../../public/teachers/databoard.svg';
import Star from '../../assests/star.svg';
type Props = { name: string; teacherIamge: string; subject: string };

const TeacherCard: React.FC<Props> = ({ subject, teacherIamge, name }) => {
  return (
    <div className="relative drop-shadow-xl m-5 w-[300px] h-[382px] mt-[15%]">
      <Image
        src="/teachers/teacherbackground.svg"
        alt=""
        className="rounded-lg "
        objectFit="contain"
        width={300}
        height={336}
      />
      <Image
        src={`/teachers/${teacherIamge}`}
        alt=""
        className="absolute left-3 bottom-[28%] z-0"
        objectFit="contain"
        width={272}
        height={402}
      />
      <div className="flex w-fit absolute top-[45%] justify-center items-center p-2 rounded-r-lg bg-white">
        <Star />
        <small className=" mr-3 ml-1 text-[#12A35C] text-[15px]">10</small>
      </div>
      <div className="absolute bottom-0 bg-white z-10 w-[300px] rounded-b-lg p-4">
        <h1 className="text-[20px] mt-2" style={{ fontWeight: 600 }}>
          {name}
        </h1>
        <h1 className="text-[16px] text-[#70747E] mb-2">{subject}</h1>
        <div className="flex flex-row flex-wrap items-center ">
          <div className="flex flex-row flex-wrap items-center w-1/2 py-2.5">
            <Comment />
            <h1 className="600 text-[12px] text-[#70747E] mx-2">
              133 Followers
            </h1>
          </div>
          <div className="flex flex-row flex-wrap items-center  w-1/2 py-2.5">
            <Group />
            <h1 className="600 text-[12px] text-[#70747E] mx-2">89 Courses</h1>
          </div>
          <div className="flex flex-row flex-wrap items-center  w-1/2 py-2.5">
            <Dashboard />
            <h1 className="600 text-[12px] text-[#70747E] mx-2">
              203 Testimonials
            </h1>
          </div>
          <div className="flex flex-row flex-wrap items-center  w-1/2 py-2.5">
            <Dashboard />
            <h1 className="600 text-[12px] text-[#70747E] mx-2">
              203 Testimonials
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
