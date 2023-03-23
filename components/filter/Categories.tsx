import { useState } from 'react';
import ArrowUp from '../../public/teachers/arrowup.svg';
import { CategoryItems } from './constants';
type Props = {};

const Categories: React.FC<Props> = (props) => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="w-full items-center ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[22px] my-2" style={{ fontWeight: 700 }}>
          Categories
        </h1>
        <div
          className={`${effect && 'origin-center transform rotate-90 transition ease-in-out delay-150 duration-500'}`}
          onClick={() => {
            setEffect(!effect);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          <ArrowUp />
        </div>
      </div>
      <div>
        {CategoryItems.map((item, index) => (
          <h1
            className={effect?'hidden':"font-[400] text-[14px] my-2 flex flex-col justify-end"}
            key={index}
          >
            {item}
          </h1>
        ))}
      </div>
      <h1 className="text-[12px] text-[#FF4A6C] my-1" style={{fontWeight:500}}> See More</h1>
      <hr className="w-full h-[1.5px] bg-gray-500 rounded border-0 dark:bg-gray-700 mr-3 opacity-20" />
    </div>
  );
};

export default Categories;
