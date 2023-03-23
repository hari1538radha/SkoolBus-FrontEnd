import React from 'react';
import User from '../../../assests/icon-user.svg';
import Mail from '../../../assests/icon-mail.svg';

type Props = {};

const ContactUs: React.FC<Props> = (props) => {
  return (
    <div>
      <h1 className="text-xs font-bold text-gray-300 mb-2">EMAIL US</h1>
      <h1 className="text-rose-500 text-3xl font-bold mb-12">
        info@skoolbus.com
      </h1>
      <div>
        <h1 className="text-xs font-bold text-gray-300 mb-2">KEEP IN TOUCH</h1>
        <div className="flex flex-row bg-[rgba(194, 194, 194, 0.24]">
          <div className=" bg-[rgba(194, 194, 194, 0.24)] h-10 w-[13rem] mr-3 rounded-lg flex flex-row">
            <User />
            <input
              placeholder="Your name"
              className="bg-[rgba(194, 194, 194, 0.24)] opacity-25 w-full text-gray-900 text-sm rounded-lg placeholder-black"
            />
          </div>
          <div className=" bg-[rgba(194, 194, 194, 0.24)] h-10 w-[13rem]  rounded-lg flex flex-row">
            <Mail/>
            <input
              placeholder="E-mail"
              className="bg-[rgba(194, 194, 194, 0.24)] opacity-25 w-full text-gray-900 text-sm rounded-lg placeholder-black"
            />
          </div>
        </div>
        <div className="flex flex-row mt-8 ">
          <input
            placeholder="Leave us Message"
            className="bg-[rgba(194, 194, 194, 0.24)] opacity-25 items-center boder-purple placeholder-black border-2 pl-3 h-16 w-[17rem] rounded-lg mr-6"
          />
          <button className="bg-rose-500 rounded-lg h-16 w-[8rem] text-lg text-white font-bold shadow-lg">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
