import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface LikeButtonProps {
  songId: string;
  className?: string;
  size?: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ songId, className, size }) => {
  const [hearted, setHearted] = useState(false)

  useEffect(() => {
    setHearted(() => songId === "like" ? true : false)
  }, [])
  
  const handleClick = () => {
    setHearted(!hearted)
  }

  return (
    <div className={twMerge(`cursor-pointer`, className)} onClick={handleClick}>
      {hearted ? (
        <AiFillHeart size={size}
          className='text-green-500'
        />
      ) : (
        <AiOutlineHeart size={size}
          className='text-neutral-400 hover:text-white'
        />
      )}
    </div>
  );
};

export default LikeButton;
