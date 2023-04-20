import React, { ReactElement } from "react";
import ProfileIcon from "../atoms/ProfileAvatar";

type TopContentCardProps = {
  userid: string;
  username: string;
  time: number;
  tag?: String;
  profileUrl: string;
  className?: string;
  discription: string;
};

const TopContentCard = ({
  userid,
  username,
  time,
  tag,
  profileUrl,
  className,
  discription,
}: TopContentCardProps): ReactElement => {
  return (
    <div className="absolute w-[452px] h-[102px] bg-[#232B35] border-[1px] border-solid border-[#404A54] rounded-2xl">
      <div className="flex gap-3 px-6 py-[18px]">
        <ProfileIcon size={40} imageUrl=""/>
        <div>
          <h1 className="font-normal text-[15px] leading-5 text-[#8899A6]">
            <span className="text-white font-semibold">{username}</span>{" "}
            @{userid}{" "}<span className="relative bottom-[3px]">.</span>{" "}23s
          </h1>
          <p className="text-white font-normal text-[15px] leading-5 min-h-[40px] max-w-[300px] break-words">
            {discription}
           {" "}<span className="text-[#64CFF6]">{tag}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopContentCard;
