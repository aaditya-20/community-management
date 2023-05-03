import React from 'react'
import Image from 'next/image';
const LeaderboardCard = (props:any) => {
  return (
    <div className="
    bg-black absolute w-[230px] h-[270px]">
          <div className="flex m-2">
          <div><Image src="/leadericon.png" alt="hell" width={66} height={24} className="m-4 p-0 bg-black"/ ></div>
          <div className=" w-61 h-24 font-sans italic font-extrabold text-5xl leading-14 bg-gradient-to-b from-orange-500 to-orange-700 bg-clip-text text-transparent">{props.rank}</div>
          </div>
          <div className="absolute w-[92px] h-[24px] left-[28px] top-[157px] bg-white bg-clip-text text-transparent">{props.name}</div>
          <div className="abslute  w-[61px] h-[24px] left-[81px] top-[322px] bg-white bg-clip-text text-transparent">{props.point} XP</div>
        </div>
  )
}
export default LeaderboardCard;
