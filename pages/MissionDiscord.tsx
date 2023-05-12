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
import RouteGuardAdmin from "@/utils/RouteGuardAdmin";

function MissionDiscord() {
  const title = "Discord Mission";
  const description = `Get a Discord Role and introduce yourself to the community
GUIDE 📚
1. Join our discord if you haven't done that yet.
2. You'll then get a verified role.
3. Write a message telling us who you are and what your top skills you have!
4. Post it in the #introduce-yourself channelDo all this and then you'll have access to the Quests that require a role.
SUBMISSION 📝
This quest will auto-validate when you claim it.`;
  const tags = ["onboarding"];
  const missionSteps = [
    "Join our Discord",
    "Join on Discord Channel and get verified",
    "Start a conversation ",
    "Start a conversation on any discord channel you like containing at least 10 characters",
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
        <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
          <Image
            src="/MissionPageBanner.png"
            width={800}
            height={1}
            alt="kjdfhah"
            className="mx-[10px] my-[10px]"
          />
          <div className="font-semibold text-2xl text-white mx-3">
            Discord Mission
          </div>
          <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
            <pre className="overflow-auto no-scrollbar">{description}</pre>
            <div className="my-[60px]">
              <MissionStepsCard
                heading1={"Join our Discord"}
                descp1={missionSteps[0]}
                heading2="Start a conversation"
                descp2={missionSteps[1]}
              />
            </div>
          </div>

         
        </div>
        <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
            <BeAchamp
              title="Discord Mission for Firebond"
              tags={["Writing", "Marketing"]}
              val="2.9"
            />
          </div>
      </div>
    </div>
  );
}

export default RouteGuardAdmin(MissionDiscord);