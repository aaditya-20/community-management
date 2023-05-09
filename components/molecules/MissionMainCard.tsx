import React from "react";
import Image from "next/image";

interface MissionMainCardProps {
  profileUrl1 :string,
  profileUrl2 :string,
  profileUrl3 : string,
  profileUrl4 : string,
  submission : number,
  daysLeft: any,
  usdc: number,
  title: string,
  tags:[],
}



const MissionMainCard: React.FC<MissionMainCardProps> = ({
  daysLeft,
  profileUrl1,
  profileUrl2,
  profileUrl3,
  profileUrl4,
  submission,
  usdc,
  title,
  tags,
}) => {
  return (
    <div className="h-[190px] w-[340px] bg-[#232B36] rounded-[20px] relative">
      <div className="p-6">
        <div className="flex justify-between gap-[42px]">
          <h1 className="font-semibold text-[16px] font-['General Sans'] font-[600] text-white break-words">
            {(title!=null||title==="")?title:"Mission title"}
          </h1>
          <button className="w-12 h-[30px] bg-[#FE702A5C]/[36%] rounded-[8px] ">
            <h1 className=" font-bold text-[10px] text-center bg-gradient-to-r from-[#FD241C] to-[#FE702A] bg-clip-text text-transparent">
              {usdc}{" "}USDC
            </h1>
          </button>
        </div>
        {/* for tags */}
        <div className="flex gap-[6.13px]">
        {(tags!=null&&tags.length>0)? tags.map((item:any, index) => {
                      return (
                        <div className="inline-flex gap-[4.33px] bg-[#363C44] px-[5px] py-[1px] rounded-[2.0348px] justify-center items-center">
                        {/* <Image width={11} height={10} alt="" src="Icons/✍️.svg" /> */}
                        <h1 className="font-normal text-[10.2174px] text-white font-open-sans">
                          {item.title}
                        </h1>
                      </div>
                       
                      );
                    }):"NoTags"}
         
        </div>

        <div className="mt-[47.63px] flex justify-between">
          <div className="flex gap-[6.5px]">
            <div className="w-[52.5px] h-[21px] flex relative">
              <div className="h-[21px] w-[21px] overflow-hidden absolute flex rounded-full left-0 bg-yellow-400">
                <Image
                  src={profileUrl1}
                  height={21}
                  width={21}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="h-[21px] w-[21px] overflow-hidden absolute flex rounded-full right-[21px]">
                <Image
                  src={profileUrl2}
                  height={21}
                  width={21}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="h-[21px] w-[21px] overflow-hidden absolute flex rounded-full left-[21px] ">
                <Image
                  src={profileUrl3}
                  height={21}
                  width={21}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="h-[21px] w-[21px] overflow-hidden absolute flex rounded-full right-0">
                <Image
                  src={profileUrl4}
                  height={21}
                  width={21}
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="text-[#757575] font-normal text-xs">
              {submission}{" "}Submissions
            </h1>
          </div>

          <div className="flex gap-1 justify-center items-center">
            <Image width={14} height={14} src="Icons/timer (1).svg" alt="" />

            <h1 className="font-normal text-xs text-[#FE702A]">{daysLeft}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionMainCard;
