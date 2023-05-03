import React from "react";
import Sidebar from "@/components/molecules/Sidebar"; 
import Header from "@/components/atoms/Header"; 
import Image from "next/image";
import SmallMissionCard from "@/components/molecules/SmallMissionCard"; 
import MissionShareYourFeedback from "./MissionShareYourFeedback";
var page = "";
const content = [
  {
    title: "#Twitter",
    text_color: "text-[#03A9F4]",
    card_Array: [
      {
        title: "Follow on Twitter",
        mission: "Follow us on twitter",
        usdc: "2.9",
        page: "/MissionShareYourFeedback",
      },
      {
        title: "Write a tweet about Firebond",
        mission:
          "Mission : Write a thoughtful message about firebond on why we rock!...",
        usdc: "2.9",
      },
    ],
  },
  {
    title: "#Discord",
    text_color: "text-[#6665D2]",
    card_Array: [
      {
        title: "Make Friends",
        mission: "Join discord channel and get veri..",
        usdc: "2.9",
      },
    ],
  },
  {
    title: "#Community",
    text_color: "text-[#6665D2]",
    card_Array: [
      {
        title: "Be A Champion",
        mission: "Follow firebond twitter and get ..",
        usdc: "2.9",
      },
      {
        title: "Feedback",
        mission:
          "Mission: Give your feedback regarding the project, if there any issue .....",
        usdc: "2.9",
        page: "./MissionShareYourFeedback",
      },
      {
        title: "Create a video",
        mission:
          "Mission : Create a video demonstrating how to deploy a blockchain validator....",
        usdc: "2.9",
      },

      {
        title: "Design our company digital mascot ",
        mission: "Mission : We want to distribute our NFT to .....",
        usdc: "2.9",
      },

      {
        title: "Write a kickass blog post for Firebond",
        mission: "Mission : Write a blog piece for firebond.....",
        usdc: "2.9",
        page: "./MissionKickassBlogPost",
      },
      {
        title: "Onboard 10 new community members",
        mission: "Mission : This mission is for onboarding .....",
        usdc: "2.9",
      },
    ],
  },
  {
    title: "#AskMeAnything",
    text_color: "text-[#98EC96]",
    card_Array: [
      {
        title: "Participating in AMA",
        mission: "Earn by participating in AMA...",
        usdc: "2.9",
      },
      {
        title: "Submit An AMA Question",
        mission: "Mission: Submit your questions regarding the AMA.....",
        usdc: "2.9",
      },
    ],
  },
];

const MissionTemplatePage = () => {
  return (
    <div className="min-h-screen bg-[#171C23] flex">
      <Sidebar />
      {/* Main Section */}
      <div className="w-full h-auto">
        {/* Header Section */}
        <div className="w-full h-[205px] border-b border-[#353B43]">
          <Header />
          <div className="flex gap-[3px] text-[#A6A6A6] font-normal text-base mb-2 mt-[29px] ml-6">
            <h1>Mission</h1>
            <h1>/Templates</h1>
          </div>
          <div className="w-full px-6 flex justify-between">
            <h1 className="text-white font-semibold text-2xl">Templates</h1>
            <button className="h-[33px] w-[95px] flex justify-center items-center border border-[#757575] rounded-lg">
              <div className="flex gap-[5.46px]">
                <Image src="Icons/add.svg" alt="" height={16} width={16} />
                <h1 className="font-medium text-sm text-[#757575]">Create</h1>
              </div>
            </button>
          </div>
        </div>

        {/* Main Section */}
        <div className="w-full h-auto flex justify-center items-center">
          <div className="mt-[40px] w-auto">
            {content.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className={`${item.text_color} font-medium text-base w-auto mb-6 `}>
                    {item.title}
                  </h1>
                  <div className="max-w-[1140px] flex flex-wrap gap-6 mb-6">
                    {item.card_Array.map((card, index) => {
                      return (
                        <div key={index}>
                          <SmallMissionCard
                            missionDiscription={card.mission}
                            missionTitle={card.title}
                            usdc={card.usdc}
                            page={card.page}
                          />
                        </div>
                      );
                    })}
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionTemplatePage;
