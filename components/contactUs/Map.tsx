import React from 'react';
import ContactUsBanner from '../../public/contactusBanner.svg'
type Props = {};

const Map: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="font-[500] text-[22px]">Find Us on Map</h1>
      <h1 className="font-[400] text-[16px] my-4 opacity-40">
        Via Salaria, 243, 00199 Rome
      </h1>
    </div>
  );
};

export default Map;
