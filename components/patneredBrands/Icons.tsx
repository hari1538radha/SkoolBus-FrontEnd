import React from 'react';
import Amd from '../../assests/AMD.svg';
import Att from '../../assests/ATT.svg';
import Attlasian from '../../assests/Attlasian.svg';
import Disney from '../../assests/Disney.svg';
import Ebay from '../../assests/Ebay.svg';
import Forbes from '../../assests/Forbes.svg';
import Facebook from '../../assests/facebookp.svg';
type Props = {};

const Icons: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-center items-center w-full px-[20%] flex-wrap">
      <Amd />
      <Att />
      <Attlasian />
      <Disney />
      <Ebay />
      <Facebook />
      <Forbes />
    </div>
  );
};

export default Icons;
