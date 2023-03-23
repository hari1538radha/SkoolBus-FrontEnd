import Image from 'next/image';
import About from './About';
import TeacherRatingCard from './TeacherRatingCard';
type Props = {};

const TeacherInfo: React.FC<Props> = (props) => {
  return (
    <div className="">
        <Image
        src="/teacherinfo/teacherInfoBanner.svg"
        alt=""
        className="w-full"
        objectFit="contain"
        objectPosition="center"
        width={2}
        height={2}
      />
      <div className='flex flex-row px-[8%]' ><TeacherRatingCard/><About/></div>
      
    </div>
  );
};

export default TeacherInfo;
