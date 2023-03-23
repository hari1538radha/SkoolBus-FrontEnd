import { useState } from 'react';
import ArrowUp from '../../public/teachers/arrowup.svg';
import { SkillLevels } from './constants';
type Props = {};

const SkillLevel: React.FC<Props> = (props) => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="w-full items-center ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[22px] my-2" style={{ fontWeight: 700 }}>
        Skill Level
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
      {SkillLevels.map((item, index) => (
        <div className={effect?"hidden":"flex flex-row"} key={index}>
          <input type="checkbox"/>
          <h1
            className="font-[400] text-[14px] opacity-80 my-1.5 mx-2 flex flex-col justify-end"
            
          >
            {item}
          </h1>
        </div>
      ))}
      <h1 className="text-[12px] text-[#FF4A6C] my-1" style={{fontWeight:500}}> See More</h1>
      <hr className="w-full h-[1.5px] bg-gray-500 rounded border-0 dark:bg-gray-700 mr-3 opacity-20" />
    </div>
  );
};

export default SkillLevel;
