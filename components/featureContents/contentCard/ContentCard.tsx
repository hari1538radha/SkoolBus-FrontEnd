import React from 'react';
import CameraPink from '../../../assests/camerapink.svg';
import Comment from '../../../assests/comment.svg';
import Star from '../../../assests/star.svg';
import Rating from '../../commonComponents/Rating';

type Props = {
  title: string;
  description: string;
  rating: number;
  comment: number;
  userName: string;
  userAvatar: string;
  categoryType:string;
};

const ContentCard: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col  w-[300px] bg-white rounded-lg justify-center items-start mr-[3%] p-[1%] shadow-lg">
      <img src="/mock.png" />
      <h1 className="text-xl font-bold rounded-xl w-full my-[7%]">
        {props.title}
      </h1>
      <Rating rating={4.2} comment={32}/>
      <div className="flex flex-row my-[5%] w-full items-center">
        <img src={props.userAvatar} className="mr-[3%]" />
        <h1 className="text-[#464646] text-xs opacity-60">{props.userName}</h1>
      </div>
      <h1 className="text-[12px] text-[#464646] opacity-60 w-full items-start my-[4%]">
        {props.description}
      </h1>
      <div className="flex flex-row my-[4.5%] w-full items-start">
        <CameraPink />
        <h1 className="text-[15px] text-[#FF4A6C] mx-[5.5%] ">
          {props.categoryType}
        </h1>
      </div>
    </div>
  );
};

export default ContentCard;
