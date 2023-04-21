import React from "react";
import Button from "../atoms/Button";
import Image from "next/image";
import ProfileIcon from "../atoms/ProfileAvatar";

const MissionMainCard = () => {
  return (
    <div className="h-[190px] w-[381px] bg-[#232B36] rounded-[20px] relative">
      <div className="p-6">
        <div className="flex justify-between gap-[42px]">
          <h1 className="font-semibold text-base text-white break-words">
            {" "}
            Write a Twitter Thread on Web3
          </h1>
          <button className="w-12 h-[30px] bg-[#FE702A5C]/[36%] rounded-[8px] ">
            <h1 className=" font-bold text-[10px] text-center bg-gradient-to-r from-[#FD241C] to-[#FE702A] bg-clip-text text-transparent">
              2 USDC
            </h1>
          </button>
        </div>
        <div className="flex gap-[6.13px]">
          <div className="inline-flex gap-[4.33px] bg-[#363C44] px-[5px] py-[1px] rounded-[2.0348px] justify-center items-center">
            <Image width={11} height={10} alt="" src="Icons/✍️.svg" />
            <h1 className="font-normal text-[10.2174px] text-white font-open-sans">
              Writing
            </h1>
          </div>
          <div className="inline-flex gap-[4.33px] bg-[#363C44] px-[5px] py-[1px] rounded-[2.0348px] justify-center items-center">
            <Image width={11} height={10} alt="" src="Icons/📢.svg" />
            <h1 className="font-normal text-[10.2174px] text-white font-open-sans">
              Marketing
            </h1>
          </div>
        </div>

        <div className="mt-[47.63px] flex justify-between">
          <div className="flex gap-[6.5px]">
            <div className="w-[52.5px] h-[21px] flex relative">
              <div className="absolute left-0">
                <ProfileIcon imageUrl="Icons/Ellipse_26.svg" size={21} />
              </div>
              <div className="absolute right-[21px]">
                <ProfileIcon imageUrl="Icons/Ellipse_27.svg" size={21} />
              </div>

              <div className="absolute left-[21px]">
                <ProfileIcon imageUrl="Icons/Ellipse_28.svg" size={21} />
              </div>
              <div className="absolute right-0">
                <ProfileIcon imageUrl="Icons/Ellipse_29.svg" size={21} />
              </div>
            </div>

            <h1 className="text-[#757575] font-normal text-xs">52 Submissions</h1>
          </div>

          <div className="flex gap-1 justify-center items-center">
            <Image width={14} height={14} src="Icons/timer (1).svg" alt="" />

            <h1 className="font-normal text-xs text-[#FE702A]">6 days left</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionMainCard;
