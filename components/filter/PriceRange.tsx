import { useState } from 'react';
import ArrowUp from '../../public/teachers/arrowup.svg';
import {CategoryItems} from './constants'
type Props = {};

const PriceRange: React.FC<Props> = (props) => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="w-full items-center ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[22px] my-2" style={{ fontWeight: 700 }}>
          Price Range
        </h1>
        <div
          className={`${effect && 'origin-center transform rotate-180'}`}
          onClick={() => {
            setEffect(!effect);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          <ArrowUp />
        </div>
      </div>
      <hr className="w-full h-[1.5px] bg-gray-500 rounded border-0 dark:bg-gray-700 mr-3  my-1 opacity-20" />
    </div>
  );
};

export default PriceRange;
