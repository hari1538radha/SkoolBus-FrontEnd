import Link from 'next/link';
import React from 'react';
import Facebook from '../../assests/facebook.svg';
import Google from '../../assests/google.svg';
import { bannerText, rowStyle } from './constants';

type Props = {
  title: string;
  inputField1: string;
  inputField2: string;
  buttonName: string;
  actionName: string;
  action: string;
  isLogin: Boolean;
  backgroundImage: string;
};

const SignInRegister: React.FC<Props> = (props) => {
  return (
    <div
      className={props.isLogin ? rowStyle[0] : rowStyle[1]}
      style={{
        backgroundImage: `url('${props.backgroundImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className={props.isLogin ? rowStyle[2] : rowStyle[3]}>
        <h1 className="text-4xl font-bold mb-4 ">{props.title}</h1>
        <input
          placeholder={props.inputField1}
          className="text-gray-900 border h-[2.5rem] w-full text-sm rounded-full p-1.5 mb-4"
        />
        <input
          placeholder={props.inputField2}
          className="text-gray-900 border h-[2.5rem] w-full text-sm rounded-full p-1.5 "
        />
        {props.isLogin ? (
          <a
            href="#"
            className="text-[#00AFFF] text-sm w-full items-start my-6 justify-start"
          >
            Forgot password?
          </a>
        ) : (
          <div className="flex flex-row w-full items-center my-6 justify-start">
            <input type="checkbox" className="checkbox checkbox-[#00AFFF]" />
            <a href="#" className="text-[#828282] text-sm ml-3">
              I agree to the Terms of Service.
            </a>
          </div>
        )}
        <button className="bg-[#12A35C] w-full text-white font-bold h-[2.5rem] rounded-full">
          {props.buttonName}
        </button>
        <div className="flex flex-row items-center my-1">
          <hr className="my-4 mx-auto w-12 h-0.5 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700 mr-3" />
          <h1 className="mr-3 text-[#828282] text-xs">or continue with</h1>
          <hr className="my-4 mx-auto w-12 h-0.5 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
        </div>
        <div className="flex flex-row  justify-center mb-4">
          <div className="mx-4">
            <Google />
          </div>
          <Facebook />
        </div>
        <div className="flex flex-row  font-[500]">
          <h1 className="text-[#828282]">{props.action}</h1>
          {props.isLogin? <Link href="/register" className="text-[#FF4A6C] ml-1">
            {props.actionName}
          </Link>: <Link href="/login" className="text-[#FF4A6C] ml-1">
            {props.actionName}
          </Link> }
        </div>
      </div>
        <div className="w-[40rem] mt-[15%]">
          <h5 className="text-white text-4xl w-[70%] font-bold mb-[4%]">
            {props.isLogin ? bannerText[0] : bannerText[2]}
          </h5>
          <h1 className="text-white text-base">
            {props.isLogin ? bannerText[1] : bannerText[3]}
          </h1>
        </div>
      </div>
  );
};

export default SignInRegister;
