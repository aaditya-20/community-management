import { Router, useRouter } from "next/router";
import React from "react";
interface SmallMissionCardProps {
  missionTitle: String;
  missionDiscription: String;
  usdc: String;
  page: any
}

const SmallMissionCard: React.FC<SmallMissionCardProps> = ({
  missionDiscription,
  missionTitle,
  usdc,
  page,
}) => {
  const router = useRouter();
  return (
    <div className="w-[364px] h-[95px] rounded-[10px] p-[19px] border-[1px] bg-[#232B35] border-[rgb(117,117,117)]/[0.04] flex justify-between items-center">
      <div className="h-full w-full flex justify-between" onClick={()=>router.push(page)}>
        <div className="h-full w-full">
          <h1 className="font-semibold text-[16px] leading-[21.6px] text-white mb-1 mx-h-[44px] overflow-hidden text-ellipsis break-words">{missionTitle}</h1>
          <h2 className="font-normal text-xs text-[#A6A6A6] h-full overflow-hidden text-ellipsis break-words">
            Mision: {missionDiscription}
          </h2>
        </div>
        <button onClick={() => {()=>{}
        }} className="w-[70px] h-[30px] bg-[rgb(255,186,3)]/[0.36] rounded-[8px] flex justify-center items-center">
          <h1 className="font-bold text-[12px] leading-[14px] text-[#FFBA03]">
            {usdc} USDC
          </h1>
        </button>
      </div>
    </div>
  );
};

export default SmallMissionCard;
