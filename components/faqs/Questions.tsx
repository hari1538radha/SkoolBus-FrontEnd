import React, { useState } from 'react';
import ArrowRight from '../../public/Faqs/arrowRightPink.svg';

type Props = {};

const Questions: React.FC<Props> = (props) => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="my-5 mx-10  border-2 p-4 rounded-lg ">
      <div className="flex flex-row ">
        <div
          className={`${effect && 'origin-center transform rotate-90'} absolute justify-center items-center`}
          onClick={() => {
            setEffect(!effect);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          <ArrowRight />
        </div>
        <div>
          <h1 className="font-[500] text-[20px] mx-6 ">
            Can I just enroll in a single course?
          </h1>
          <h1
            className={
              effect
                ? 'font-light text-[20px] pt-6 mx-6 my-3 border-t-2'
                : 'hidden'
            }
          >
            If you subscribed, you get a 7-day free trial during which you can
            cancel at no penalty. After that, we dont give refunds, but you can
            cancel your subscription at any time.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Questions;
