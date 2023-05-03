import Image from "next/image";
import router from "next/router";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
declare var window: any;
var name = "user";
if (typeof window !== "undefined") {
  const storedJsonData = localStorage.getItem("data");
  const jsonData = JSON.parse(storedJsonData ?? "{}");
  if (jsonData.name) name = jsonData.name;
  console.log("->", jsonData);
}

console.log(name);
const Sidebar = () => {
  const [hideMenu, setHideMenu] = useState(false);
  return (
    <>
      {hideMenu ? (
        <div className="max-w-[98px] min-h-screen border-r-[1px] border-[#353B43] bg-[#171C23] transition duration-500 ease-in-out">
          <div className="px-5">
            {/* Navbar */}
            <nav className="flex w-full items-center justify-center mt-[40px] mb-[54px]">
              <button
                onClick={() => {
                  setHideMenu(!hideMenu);
                }}
              >
                <div className="flex relative h-[18px] w-[18px] text-center">
                  <Image
                    height={6.75}
                    width={13.5}
                    src="Icons/Arrow_Left_1.svg"
                    alt="not found"
                    className="origin-center rotate-180 absolute right-[12px]"
                  />
                  <Image
                    height={6.75}
                    width={13.5}
                    src="Icons/Arrow_Left.svg"
                    alt="not found"
                    className="origin-center rotate-180 absolute right-[6px]"
                  />
                </div>
              </button>
            </nav>

            {/* Menu */}
            <ul className="text-center">
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <Image width={24} height={24} src="Icons/box.svg" alt="" />
              </li>
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <Image
                  src="Icons/bar-line-chart.svg"
                  alt="not found"
                  height={24}
                  width={24}
                />
              </li>
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <Image width={24} height={24} src="Icons/icons.svg" alt="" />
              </li>
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <Image height={24} width={24} src="Icons/members.svg" alt="" />
              </li>
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <Image height={24} width={24} src="Icons/misson.svg" alt="" />
              </li>
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <Image
                  width={24}
                  height={24}
                  src="Icons/Fire_Scrolls.svg"
                  alt="not found"
                />
              </li>
            </ul>

            <hr className="text-[#353B43] border-[1px] mb-[29px] mt-[15px] border-[#353B43]" />

            {/* Second menu */}
            <ul className="text-center">
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <Image
                  width={24}
                  height={24}
                  src="Icons/help_center.svg"
                  alt="not found"
                />
              </li>
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <Image
                  width={24}
                  height={24}
                  src="Icons/setting.svg"
                  alt="not found"
                />
              </li>
              <li className="h-[57px] w-[53px]  cursor-pointer rounded-[10px] flex justify-center items-center hover:bg-gray-700">
                <AiOutlineEye
                size={34}
                 
                  color="white"
                 
                />
              </li>
              
            </ul>
          </div>
        </div>
      ) : (
        <div className="max-w-[266px] min-h-screen border-r-[1px] border-[#353B43] bg-[#171C23] transition duration-500 ease-in-out">
          <div className="px-5">
            <nav className="flex justify-between mb-[54px] mt-[18px]">
              <Image
                width={152}
                height={53.63}
                src="/Icons/logo.svg"
                alt="not found"
              />
              <button
                onClick={() => {
                  setHideMenu(!hideMenu);
                }}
              >
                <div className="flex relative h-[18px] w-[18px] text-center">
                  <Image
                    height={6.75}
                    width={13.5}
                    src="Icons/Arrow_Left.svg"
                    alt="not found"
                    className=" absolute right-[12px]"
                  />
                  <Image
                    height={6.75}
                    width={13.5}
                    src="Icons/Arrow_Left_1.svg"
                    alt="not found"
                    className=" absolute right-[6px]"
                  />
                </div>
              </button>
            </nav>
            {/* Menu */}
            <ul>
              <li className="w-[226px] h-[57px] pl-[14px]  cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <Image width={24} height={24} src="Icons/box.svg" alt="" />
                <span
                  onClick={() => router.push("/NewDashboard")}
                  className="text-white font-semibold text-base "
                >
                  {name}&apos;s Space
                </span>
              </li>
              <li className="w-[226px] h-[57px] cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <Image
                  height={24}
                  width={24}
                  src="Icons/bar-line-chart.svg"
                  alt="not found"
                  className="ml-[14px]"
                />
                <span
                  onClick={() => router.push("/AnalyticsScreen")}
                  className="text-white font-semibold text-base"
                >
                  Analytics
                </span>
              </li>
              <li className="w-[226px] h-[57px] pl-[14px] cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <Image width={24} height={24} src="Icons/icons.svg" alt="" />
                <span
                  onClick={() => router.push("/MissionMain")}
                  className="text-white font-semibold text-base"
                >
                  Missions
                </span>
              </li>
              <li className="w-[226px] h-[57px]  cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <Image
                  height={24}
                  width={24}
                  src="Icons/members.svg"
                  alt=""
                  className="ml-[14px]"
                />
                <span
                  onClick={() => router.push("/MemberScreen")}
                  className="text-white font-semibold text-base"
                >
                  Members
                </span>
              </li>
              <li className="w-[226px] h-[57px]  pl-[14px] cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <Image height={24} width={24} src="Icons/misson.svg" alt="" />
                <span
                  onClick={() => router.push("/LeaderBoardScreen")}
                  className="text-white font-semibold text-base"
                >
                  Leaderboard
                </span>
              </li>
              <li className="w-[226px] h-[57px]  cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <Image
                  width={24}
                  height={24}
                  src="Icons/Fire_Scrolls.svg"
                  alt="not found"
                  className="ml-[14px]"
                />
                <span
                  onClick={() => router.push("/MissionReview")}
                  className="text-white font-semibold text-base"
                >
                  Fire Scrolls
                </span>
              </li>
            </ul>

            <hr className="text-[#353B43] border-[1px] mb-[29px] mt-[15px] border-[#353B43]" />

            {/* Second menu */}
            <ul>
              <li className="w-[226px] h-[57px]  cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <Image
                  width={24}
                  height={24}
                  src="Icons/help_center.svg"
                  alt="not found"
                  className="ml-[14px]"
                />
                <span
                  onClick={() => router.push("/HelpCentre")}
                  className="text-white font-semibold text-base"
                >
                  Help Centre
                </span>
              </li>
              <li className="w-[226px] h-[57px] cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <Image
                  width={24}
                  height={24}
                  src="Icons/setting.svg"
                  alt="not found"
                  className="ml-[14px]"
                />
                <span
                  onClick={() => router.push("/AdminSetting")}
                  className="text-white font-semibold text-base"
                >
                  Settings
                </span>
              </li>
              <li className="w-[226px] h-[57px] cursor-pointer rounded-[10px] flex gap-[14px] items-center hover:bg-gray-700">
                <AiOutlineEye
                   size={34}
                   color="white"
                   className="ml-[11px]"
                />
                <span
                  onClick={() => router.push("/AdminSetting")}
                  className="text-white font-semibold text-base"
                >
                  Review
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
