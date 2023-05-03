import React from "react";
import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import Image from "next/image";
import MissionMainCard from "../components/molecules/MissionMainCard";
import ActivityCard from "@/components/molecules/ActivityCardNewDashboard";
const MissionMain = () => {
  return (
    <div className="h-full bg-[#171C23]">
      {/* Main Div */}
      <div className="h-full w-full flex">
        {/* Sidebar */}
        <Sidebar />
        <div className="w-full h-full overflow-scroll scrollbar-hide">
          <Header />
          {/* Main Section & Right Side Section */}
          <div>
          <h1 className="text-white text-2xl font-bold m-2">Satoshi's Space</h1>
          <h3 className="text-white text-l font-bold m-2">Here's what's happening with your community</h3>
          </div>
          <div className="bg-black  width-[1200px] height-[270px] left-[290px] top-[200px]">
          <div><Image src="/leadericon.png" alt="hell" width={137} height={54} className=" bg-black width-[156.21px] height-[137px] left-[54px] top-[66px]"/ ></div>
          <div className="flex flex-col justify-end items-center w-full">
            .................................................................
        </div>
          </div>
          <div className="bg-[#232B35]  width-[1200px] height-[352px] left-[290px] top-[494px] m-5 p-5">
            <div className="flex">
          <div className="bg-bg-[#232B35] m-5 p-5"><u className="">
            <li className="bg-[#171C23] text-white text-xl width-[350px] height-[50px] left-[343px] top-[529px] m-2">Connect Your Twitter</li>
            <li className="bg-[#171C23] text-white text-xl width-[350px] height-[50px] left-[343px] top-[587px] m-2">Connect Your Wallet</li>
            <li className="bg-[#171C23] text-white text-xl width-[350px] height-[50px] left-[343px] top-[703px] m-2">Connect your Discord</li>
            <li className="bg-[#171C23] text-white text-xl width-[350px] height-[50px] left-[343px] top-[761px] m-2">Complete a Mission</li>
            <li className="bg-[#171C23] text-white text-xl width-[350px] height-[50px] left-[343px] top-[761px] m-2">Make a Referral</li>
            </u></div>
            <div className="m-4 bg-[#232B35]">
            <Image src="/form 4-1.png" alt="hell" width={360} height={220} className=" bg-black width-[360.76px] height-[220px] left-[747px] top-[566px]"/ >
            </div>
            <div className=" m-5 p-5 text-white text-2xl font-bold m-2 width-[276px] height-[35px] left-[1163px] top-[596px]">Make a Referral Bonus</div>
          </div>
          </div>
          <div className="m-5 flex justify-between ">
            {/* Main Section */}
            <div className="flex justify-center scrollbar-hide p-6 ">
              <div className="m-5 p-5">
                <div className="flex">
                <div className="left-[290px] width-[339px] height-[325px] top-[870px]">
                <div className="flex">
                <h1 className=" left-[322 px] text-white text-2xl font-bold ">Transactions</h1>
                <h1 className=" left-[322 px] text-white text-2xl font-bold ">See All</h1>
                </div>
                <ul className=" m-5 p-5 text-white text-2xl font-bold">
                    <li>Firebond mission</li>
                    <li>Top member</li>
                    <li>Write a blog mission</li>
                    <li>Follow mission</li>
                </ul>
                </div>
                <div className=" width-[841px] height-[325px] left-[649px] top-[870px]"><ActivityCard/></div>
                </div>
                <div className=" w-[1200px] h-[539px] left-[290px] top-[1219px]">
                <div className="flex m-100 p-10">
                <h1 className=" left-[322 px] text-white text-2xl font-bold ">Available Missions</h1>
                <h1 className=" left-[1275 px] text-white text-2xl font-bold " >View All </h1>
                </div>
                <div className=" grid grid-cols-3 gap-3">
                  <MissionMainCard profileUrl1={""} profileUrl2={""} profileUrl3={""} profileUrl4={""} submission={0} daysLeft={0} usdc={0} title={""} />
                  <MissionMainCard profileUrl1={""} profileUrl2={""} profileUrl3={""} profileUrl4={""} submission={0} daysLeft={0} usdc={0} title={""} />
                  <MissionMainCard profileUrl1={""} profileUrl2={""} profileUrl3={""} profileUrl4={""} submission={0} daysLeft={0} usdc={0} title={""} />
                  <MissionMainCard profileUrl1={""} profileUrl2={""} profileUrl3={""} profileUrl4={""} submission={0} daysLeft={0} usdc={0} title={""} />
                  <MissionMainCard profileUrl1={""} profileUrl2={""} profileUrl3={""} profileUrl4={""} submission={0} daysLeft={0} usdc={0} title={""} />
                  <MissionMainCard profileUrl1={""} profileUrl2={""} profileUrl3={""} profileUrl4={""} submission={0} daysLeft={0} usdc={0} title={""} />
                </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default MissionMain;
