import { useState } from 'react';
import ArrowUp from '../../public/teachers/arrowup.svg';
import { CategoryItems ,Durations} from './constants';
type Props = {};

const Duration: React.FC<Props> = (props) => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="w-full items-center">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[22px] my-2" style={{ fontWeight: 700 }}>
          Duration
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
      {Durations.map((item, index) => (
        <div className={effect?"hidden":"flex flex-row"} key={index}>
          <input type="checkbox"/>
          <h1
            className="font-[400] text-[14px] opacity-80 my-1.5 mx-2 flex flex-col justify-end"
            key={index}
          >
            {item}
          </h1>
        </div>
      ))}
      <hr className="w-full h-[1.5px] bg-gray-500 rounded border-0 dark:bg-gray-700 mr-3 my-1 opacity-20" />
    </div>
  );
};

export default Duration;
