import React from 'react'
import Image from 'next/image';
const LeaderboardCard = (props:any) => {
  return (
    <div className=" bg-black  w-[auto] h-[auto] rounded-[20px]">
          <div className="flex m-2">
          <div><Image src="/leadericon.png" alt="hell" width={106} height={92} className="m-4 p-0 bg-black"/ ></div>
          <div className=" w-61 h-24 m-[15px] font-sans italic font-extrabold text-5xl leading-14 bg-gradient-to-b from-orange-500 to-orange-700 bg-clip-text text-transparent">{props.rank}</div>
          </div>
          <div className="ml-[30px]  bg-white bg-clip-text text-transparent">{props.name}</div>
          <div className=" text-center m-[20px]  bg-white bg-clip-text text-transparent">{props.point} XP</div>
        </div>
  )
}
export default LeaderboardCard;
