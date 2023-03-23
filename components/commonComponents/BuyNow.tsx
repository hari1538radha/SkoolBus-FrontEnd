import React from 'react';
import Rupee from '../../assests/currencyRupee.svg';
type Props = {
  Price: number;
};

const BuyNow: React.FC<Props> = ({ Price }) => {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-row items-center">
        <Rupee />
        <h1 className='font-[600] text-[34px]'>{Price}</h1>
      </div>
      <button className='bg-[#12A35C] font-bold text-white w-[128px] h-[50px] rounded-full'>Buy Now</button>
    </div>
  );
};

export default BuyNow;
