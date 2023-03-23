import React from 'react';
import Globe from '../../public/ContactUs/globe.svg'
import Android from "../../public/ContactUs/android.svg"
type Props = {};

const ContactInfo: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col border-b-2 w-[380px]">
      <h1 className="font-[600] text-[40px]">You Can Mail Us</h1>
      <h1 className="font-[400] text-[16px] my-8 opacity-40">
        We appreciate each customer and we are proud that 60% of clients come
        back to work with us again.
      </h1>
      <div className="flex flex-row items-center my-2 ">
        <Android/>
        <h1 className="font-[500] text-[18px] mx-4" >+1 555 505 5050</h1>
      </div>
      <div className="flex flex-row items-center my-2 mb-10">
        <Globe/>
        <h1 className="font-[500] text-[18px] mx-4 " >info@designmodo.com</h1>
      </div>
    </div>
  );
};

export default ContactInfo;
