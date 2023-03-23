import React from 'react';
import ContactUsBanner from '../../public/contactusBanner.svg';
type Props = {};

const MessageUs: React.FC<Props> = (props) => {
  return (
    <div className="w-[480px] h-full">
      <h1 className="font-[600] text-[40px]">You Can Mail Us</h1>
      <h1 className="font-[400] text-[16px] my-8 opacity-40">
        We are always looking for a next great project.
      </h1>
      <div className="rounded-lg w-full bg-[rgba(235,234,237,0.3)] p-10">
        <h1 className="font-[400] text-[14px] my-2">E-MAIL</h1>
        <input placeholder="Your Email" className="rounded-full border-[2px] p-5 h-[50px] bg-white w-full mb-6" />
        <h1 className='font-[400] text-[14px] my-2'>MESSAGE</h1>
        <input placeholder="Drop us a line" className="rounded-lg h-[170px]  items-start justify-start  p-5 border-[2px] w-[380px] bg-white mb-6 " />
        <h1 className='font-[400] text-[14px] my-2'>NAME</h1>
        <div className='flex flex-row'>
        <input placeholder="Your Name" className="rounded-full border-[2px]  h-[50px] p-5 text-[15px] bg-white" />
        <button className=' w-[92px] text-white bg-[#FF4A6C]  rounded-full items-center mx-3 justify-center'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default MessageUs;
