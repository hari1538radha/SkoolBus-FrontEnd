import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  imagePath: string;
};

const MenuIcons: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col px-5 ml-[1%]">
      <div className="flex flex-row ">
        <Image src={props.imagePath} alt="" width={16} height={16} />
        <h1 className="text-xs font-[500] mx-2">{props.title}</h1>
      </div>
    </div>
  );
};

export default MenuIcons;
