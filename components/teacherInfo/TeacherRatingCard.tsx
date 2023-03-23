import Image from 'next/image';
import Rupee from '../../assests/currencyRupee.svg';
import Plus from '../../public/teacherInfo/plusoutlined.svg'
type Props = {};

const TeacherRatingCard: React.FC<Props> = (props) => {
  return (
    <div className="absolute top-[45%] bg-white w-[300px] h-fit flex flex-col shadow-lg rounded-lg p-3 m-5">
        <Image
        src={`/teacherInfo/mockteacher.svg`}
        alt=""
        className="my-1.5"
        objectFit="contain"
        width={272}
        height={232}
      />
      <h1 className='text-[19px] my-2' style={{fontWeight:600}}>Instructor rating</h1>
      <Image
        src={`/teachers/Stars-1.svg`}
        alt=""
        className="my-1.5"
        objectFit="contain"
        width={100}
        height={18}
      />
      <small className='text-[14px] text-[#828282]'>13879 Ratings</small>
      <div className='flex flex-row items-center my-3'>
        <Rupee/>
        <strong className='text-[38px] mx-1' style={{fontWeight:600}}>1900</strong>
        <small className='text-[14px] mx-1 text-[#333333]'>Per day</small>
      </div>
      <div className='rounded-full border-[#828282] flex flex-row text-[#828282] border-2 h-[50px] my-2 items-center justify-center'   style={{fontWeight:500}}>
        <Plus />
        Follow</div>
      <button className='rounded-full bg-[#12A35C] text-white h-[50px] my-2'>Book Now</button>
    </div>
  );
};

export default TeacherRatingCard;
