import React from 'react';
import UserImage from '../../public/avatar.svg';
type Props = {
  name: string;
};

const Avatar: React.FC<Props> = ({name}) => {
  return (
    <div className="flex flex-row items-center px-3 my-2 ">
      <UserImage />
      <h1 className="text-[12px] mx-2 opacity-50" style={{fontWeight:400}}>{name}</h1>
    </div>
  );
};

export default Avatar;
