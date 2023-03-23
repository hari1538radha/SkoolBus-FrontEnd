import Image from 'next/image';
import FilterOptions from '../filter';
import SearchBar from './SearchBar';
import Sort from './Sort';
import TeacherCard from './teacherCard';
type Props = {};

const Teachers: React.FC<Props> = (props) => {
  return (
    <div className="">
      <Image
        src="/teachers/teacherBanner.svg"
        alt=""
        className="w-full"
        width={2}
        height={2}
      />
      <SearchBar />
      <div className="flex flex-row">
        <FilterOptions />
        <div className="px-5 w-full">
          <Sort />
          <div className="flex flex-row flex-wrap w-full justify-around px-5">
            <TeacherCard
              name="Charlotte Mia"
              teacherIamge="img.svg"
              subject="Mathematics"
            />
            <TeacherCard
              name="Adweta Olivia"
              teacherIamge="mockteacher.svg"
              subject="Art"
            />
            <TeacherCard
              name="William Mahmud"
              teacherIamge="img-2.svg"
              subject="History"
            />
            <TeacherCard
              name="Charlotte Mia "
              teacherIamge="img-3.svg"
              subject="Science"
            />
            <TeacherCard
              name="Adweta Olivia"
              teacherIamge="mockteacher.svg"
              subject="Art"
            />
            <TeacherCard
              name="William Mahmud"
              teacherIamge="img-2.svg"
              subject="History"
            />
          </div>
          <button
            className="w-full shadow-md border-2 rounded-full border-[#FF4A6C] text-[18px] h-[60px] text-[#FF4A6C] my-8 px-10"
            style={{ fontWeight: 500 }}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
