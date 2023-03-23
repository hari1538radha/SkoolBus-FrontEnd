import Image from 'next/image';
import Calendar from '../../public/Classes/carbon_calendar.svg';

type Props = {};

const ReviewCard: React.FC<Props> = (props) => {
  return (
    <div className=" flex flex-row w-[745px] shadow-xl h-[296px] bg-white">
      <Image
        src={`/Review/mockreview.svg`}
        alt=""
        className="mr-3"
        objectFit="contain"
        width={245}
        height={296}
      />
      <div className="flex flex-col h-[full] justify-around p-5">
        <h1
          className="text-[20px]  my-[1.5%] font-bold"
          style={{ fontWeight: 700 }}
        >
          Chad McDonald
        </h1>
        <h1 className="text-[12px] text-[#828282]" style={{ fontWeight: 400 }}>
          School of Design In New York
        </h1>
        <div className="flex flex-row items-center">
          <Image
            src={`/teachers/Stars-1.svg`}
            alt=""
            className="mr-3"
            objectFit="contain"
            width={100}
            height={18}
          />
          <Calendar />
          <h1
            className="text-[12px] font-bold mx-2 text-[#828282] opacity-60"
            style={{ fontWeight: 500 }}
          >
            11st June 2022
          </h1>
        </div>
        <h1
          className="text-[15px] text-[#828282] italic"
          style={{ fontWeight: 400 }}
        >
          I have a basic knowledge of art history, Im seeking to tie it all
          together with a better understanding of the economic and social
          factors throughout history, symbolisms and stories in art, to
          understand and appreciate art more, especially when visiting museums
          and other city.
        </h1>
      </div>
    </div>
  );
};

export default ReviewCard;
