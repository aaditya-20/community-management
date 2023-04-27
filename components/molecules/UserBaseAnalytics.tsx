import Image from "next/image";
import React from "react";


interface UserBaseAnalyticsProps {
    imageUrl:string,
    height:number,
    width:number,
    count:number,
    percentage:number,
    title:string,
    bgColor:string,
  }
  

const UserBaseAnalytics: React.FC<UserBaseAnalyticsProps> = (props) => {
  return (
    <div className="w-[321px] h-[126px] flex gap-[23px] justify-center items-center hover:border-[1px] hover:border-[#000000] rounded-[20px] shadow-[0,4px,4px,rgba(0,0,0,0.25)] bg-[#232B35]">
      <div className={`w-[45px] h-[45px] bg-[${props.bgColor}] rounded-[10px] flex justify-center items-center`}>
        <Image src={props.imageUrl} alt="" height={props.height} width={props.width} />
      </div>
      <div>
        <h1 className="text-[#8C89B4] font-normal text-[16px] leading-[21.6px]">
          {props.title}
        </h1>
        <div className="flex w-[202px] h-[32px] justify-between items-center">
          <h1 className="font-semibold text-2xl text-white">632</h1>
          <div className="w-[63px] h-[23px] bg-[#02B15A26] rounded-[10px] flex justify-center items-center">
            <h1 className="text-[#02B15A] font-normal text-[12px] leading-[14.52px]">
              +{props.percentage}%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBaseAnalytics;
