import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
export default function MissionShareYourFeedback() {
  const title = "Share Your Feedback";
  const description =
    "Share your feedback about our product on Product Hunt and upload a screenshot.";
  const tags = ["writing","marketing"];
  const missionSteps = [
    "Write Feedback about product",
    "Submit Mission",
    "           ",
    "Share the proof of work",
  ];
  const reward = 1000;
  const coinType = "USDC";
  return (
    <div>
      <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,130px,auto] h-[1500px] w-full md:grid-cols-[auto,1fr]">
        <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
          <Sidebar />
        </div>
        <div className="border-b-[1px] border-b-[#353B43]">
          <Header />
        </div>
        <div className="">
          <NavbarMissionOnboarding
            title={title}
            description={description}
            heading1={missionSteps[0]}
            heading2={missionSteps[1]}
            subheading1={missionSteps[2]}
            subheading2={missionSteps[3]}
          />
        </div>
        <div className="flex">
          <div className="text-[#ffffff] ml-[20px] mb-[550px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
            <Image
              src="/MissionPageBanner.png"
              width={800}
              height={1}
              alt="kjdfhah"
              className="mx-[10px] my-[10px]"
            />
            <div className="mx-[30px] my-[30px]">
              <div className="font-[600] text-[24px] text-[#ffffff]">
                Share your feedback
              </div>
              <div className="font-[500] text-[16px] text-[#D9D9D9]">
                Share your feedback about our product on Product Hunt and upload
                a screenshot.
              </div>
            </div>
            <div className="mx-[30px] my-[30px]">
              <MissionStepsCard
                className="mx-[20px]"
                heading1="Write Feedback about product"
                heading2="Submit mission"
                descp1="                  "
                descp2="Share the proof of work"
              />
            </div>
          </div>
          <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
            <BeAchamp
              val="1000"
              tags={tags}
              title="Share your feedback for Firebond"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
