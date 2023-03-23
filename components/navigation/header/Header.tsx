import Logo from '../../../assests/Logo.svg';
export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}
import navBarMenu from './constants';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const router = useRouter();
  console.log(router);

  return (
    <div className="flex flex-row justify-around items-center h-[4rem] shadow-lg">
      <ul className="text-lg font-bold">
        {navBarMenu?.map((item, index) => (
          <Link
            key={index}
            href={item.pathName}
            className={`${
              router.pathname === item.pathName
                ? 'text-[#12A35C]'
                : 'text-black'
            } mr-10 text-[15px] tracking-[0.5px]`}
            style={{ fontWeight: 600 }}
          >
            {item.name}
          </Link>
        ))}

        <Link
          href="/login"
          className={`${
            router.pathname === '/login'
              ? 'text-white bg-[#FF4A6C] border-2 border-[#FF4A6C] text-[15px] rounded-full p-2 px-3'
              : 'text-[#FF4A6C] bg-white border-2 border-[#FF4A6C] text-[15px] rounded-full p-2 px-3'
          } text-[15px] rounded-full p-2 px-3`}
        >
          Login/Register
        </Link>

      </ul>
    </div>
  );
};

export default Header;
