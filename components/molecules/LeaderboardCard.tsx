import React from 'react'
import Image from 'next/image';
const LeaderboardCard = (props:any) => {
  return (
    <div className="
    bg-black absolute w-230 h-270 left-290 top-195">
          <div className="flex m-2">
          <div><Image src="/leadericon.png" alt="hell" width={66} height={24} className="m-4 p-0 bg-black"/ ></div>
          <div className=" w-61 h-24 font-sans italic font-extrabold text-5xl leading-14 bg-gradient-to-b from-orange-500 to-orange-700 bg-clip-text text-transparent">{props.rank}</div>
          </div>
          <div className="w-22 h-19 left-156 top-10 bg-white bg-clip-text text-transparent">{props.name}</div>
          <div className="m-3 w-22 h-19 left-156 top-10 bg-white bg-clip-text text-transparent">{props.point}</div>
        </div>
  )
}
export default LeaderboardCard;