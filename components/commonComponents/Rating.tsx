import React from 'react';
import Comment from '../../assests/comment.svg';
import Star from '../../assests/star.svg';

type Props = {
  rating: number;
  comment: number;
};

const Rating: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row items-center w-full mr-[4%] my-2 px-3">
    <Star />
    <small className="mr-[6%] ml-[2%] text-[#12A35C]">{props.rating}</small>
    <Comment />
    <small className="ml-[2%]">{props.comment}</small>
  </div>
  );
};

export default Rating;
