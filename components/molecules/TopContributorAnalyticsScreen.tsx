import Image from "next/image";
import React, { useState } from "react";

const TopContributorAnalyticsScreen = () => {
  const [listItem, setListItem] = useState([
    {
      icon: "/Icons/funkyPic.svg",
      id: "@elilu#5690",
      xp: 433,
      rank: "1st",
    },
    {
      icon: "/Icons/funkyPic.svg",
      id: "@elilu#5690",
      xp: 343,
      rank: "2nd",
    },
    {
      icon: "/Icons/funkyPic.svg",
      id: "@elilu#5690",
      xp: 521,
      rank: "3rd",
    },
  ]);
  return (
    <div className="h-full w-full">
      <h1 className="px-6 pt-6 text-white text-2xl font-medium mb-[30px]">
        Top contributors
      </h1>
      <div className="w-full h-auto">
        {listItem.map((item, index) => {
          return (
            <div
              key={index}
              className="flex px-6 justify-between h-[83px] hover:bg-[#D9D9D90F] items-center cursor-pointer"
            >
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={item.icon}
                    height={48}
                    width={48}
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-medium text-white text-base mb-[5px]">
                    {item.id}
                  </h1>
                  <button className="w-[46px] h-[19px] rounded-[9.5px] bg-[#FFFFFF5C] flex justify-center items-center text-white font-medium text-xs">
                    {item.rank}
                  </button>
                </div>
              </div>

              <div>
                <h1 className="text-white font-medium text-base">
                  {item.xp} XP
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-full px-6 mt-[25px]">
        <button className=" w-full h-12 rounded-[10px] border border-white hover:bg-white hover:text-[#232B35] text-white font-normal text-base flex justify-center items-center">
          <h1>View leadership</h1>
        </button>
      </div>
    </div>
  );
};

export default TopContributorAnalyticsScreen;
