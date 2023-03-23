import { useState } from 'react';
import Image from 'next/image';
import ArrowUp from '../../public/teachers/arrowup.svg';
import { RatingStar } from './constants';
type Props = {};

const Ratings: React.FC<Props> = (props) => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="w-full items-center ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[22px] my-2" style={{ fontWeight: 700 }}>
          Rating
        </h1>
        <div
          className={`${effect && 'origin-center transform rotate-90'}`}
          onClick={() => {
            setEffect(!effect);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          <ArrowUp />
        </div>
      </div>
      {RatingStar.map((item, index) => (
        <div className={effect ? 'hidden' : 'flex flex-row'} key={index}>
          <input type="checkbox" className=''/>
          <Image
            src={`/teachers/${item}`}
            alt=""
            className="my-1.5 mx-2 "
            objectFit="contain"
            width={100}
            height={18}
          />
        </div>
      ))}
      <hr className="w-full h-[1.5px] bg-gray-500 my-1 rounded border-0 dark:bg-gray-700 mr-3 opacity-20" />
    </div>
  );
};

export default Ratings;
