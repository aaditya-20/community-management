import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import ShareFeedbackCard from "@/components/molecules/ShareFeedbackCard";

export default function MissionKickassBlogPost() {
  const title = "Write a kickass blog post for Firebond";
  const description = `MISSION 🎯
Write an article about the project of at least 200 words.
GUIDE 📚
Be creative, be positive.
Type of article:
- information
- tutorial
- analyses
- cases studies
SUBMISSION 📝
Upload your piece of art on Google Drive (make it public!)`;
  const tags = ["onboarding"];

  const missionSteps = [
    " Write a kickass blog",
    "Write a blog",
    "Submit your work",
    "Share the proof of work",
  ];

  const reward = 1000;
  const coinType = "USDC";
  const [file, setFile] = useState("");

  function handleFileSelect(e: any) {
    setFile(e.target.value);
  }
  function handleUpload() {}
  return (
    <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1500px] w-full md:grid-cols-[auto,1fr]">
      <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
        <Sidebar />
      </div>
      <div className="border-b-[1px] border-b-[#353B43]">
        <Header />
      </div>
      <div className="">
      <NavbarMissionOnboarding title={title} description = {description} heading1={missionSteps[0]} heading2={missionSteps[1]} subheading1={missionSteps[2]} subheading2={missionSteps[3]}/>
      </div>
      <div className="flex">
        <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
          <Image
            src="/../public/Icons/MissionPageBanner.png"
            width={800}
            height={1}
            alt="kjdfhah"
            className="mx-[10px] my-[10px]"
          />
          <div className="font-semibold text-2xl text-white mx-3">{title}</div>
          <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
            <pre className="overflow-auto no-scrollbar">{description}</pre>
            <div className="my-[60px]">
              <MissionStepsCard
                heading1={"Write a kickass blog"}
                descp1={missionSteps[0]}
                heading2="Submit your work"
                descp2={missionSteps[1]}
              />
            </div>
          </div>

          <div className="absolute top-[200px] left-[1120px]  text-[#ffffff] w-[auto] h-[auto] ml-[20px] rounded-xl">
            <ShareFeedbackCard
              feedback="Write a kickass blog post for Firebond"
              tag={["Writing", "Marketing"]}
              val="2.9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
