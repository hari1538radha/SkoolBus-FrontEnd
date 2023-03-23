import React from 'react';
import Icons from './Icons';
type Props = {};

const PatnerBrands: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-[2%]">
      <h1 className="font-bold text-[200] text-4xl my-[1.5%]">
        Trusted by over 500 great businesses
      </h1>
      <h1 className=" opacity-60 font-grey w-[50%] text-center">
        Startup Framework includes great form options for your startup projects.
        Each component is coded for web which makes creating a website quick and
        easy.
      </h1>
      <div className="my-[4%] ">
        {' '}
        <Icons />
      </div>
    </div>
  );
};

export default PatnerBrands;
