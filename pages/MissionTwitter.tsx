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
import {
  HiOutlineRocketLaunch,
  HiPencil,
  HiRocketLaunch,
} from "react-icons/hi2";

export default function MissionDiscord() {
  const title = "Twitter Mission";
  const description = `Write a tweet about Firebond
  1.Follow @firebondapp
  2.Write a thoughtful message about firebond on why we rock! Please note: Writing only Hi/Hello is not acceptable.
  3.Please send us a screenshot of where you completed this step by following all the instructions. 
  NOTE: Due to a high number of requests, reviews can take up to 72h.
  `;
  const tags = ["onboarding"];
  const missionSteps = [
    "Follow our Twitter handle",
    "Submit your work",
    "Follow us",
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
    <div className="min-h-screen min-w-fit bg-[#171C23] flex overflow-auto scrollbar-hide">
      <Sidebar />
      <div className="w-full h-full">
        <Header />

        {/* Edit Section */}
        <div className="h-[115px] w-full border-b border-[#353B43] px-6 py-[28px]">
          <div className="h-full w-full">
            <h1 className="mb-2 text-[#A6A6A6] text-sm font-medium">
              Missions/template
            </h1>
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold text-white">Missions</h1>
              <div className="flex gap-4">
                <button className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium">
                  Back
                </button>
                <button className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium">
                  <div className="flex justify-center items-center gap-2">
                    <HiRocketLaunch size={16} />
                    <h1>Publish</h1>
                  </div>
                </button>
                <button className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium">
                  <div className="flex items-center gap-2">
                    <HiPencil size={16} />
                    <h1>Edit</h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="mt-6 flex justify-center items-center">
          <div className="flex">
            <div className="text-[#ffffff] ml-[20px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
              <Image
                src="/MissionPageBanner.png"
                width={800}
                height={1}
                alt="alt"
                className="mx-[10px] my-[10px]"
              />
              <div className="font-semibold text-2xl text-white mx-3">
                Twitter Mission
              </div>
              <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
                <pre className="overflow-auto no-scrollbar">{description}</pre>
                <div className="my-[60px]">
                  <MissionStepsCard
                    heading1={"Follow our Twitter handle"}
                    descp1={missionSteps[0]}
                    heading2="Submit your work"
                    descp2={missionSteps[1]}
                  />
                </div>
              </div>
            </div>
            <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
              <BeAchamp
                title="Twitter Mission"
                tags={["Writing", "Marketing"]}
                val="2.9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1200px] w-full md:grid-cols-[auto,1fr]">
    //   <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
    //     <Sidebar />
    //   </div>
    //   <div className="border-b-[1px] border-b-[#353B43]">
    //     <Header />
    //   </div>
    //   <div className="">
    //     <NavbarMissionOnboarding
    //       title={title}
    //       description={description}
    //       heading1={missionSteps[0]}
    //       heading2={missionSteps[1]}
    //       subheading1={missionSteps[2]}
    //       subheading2={missionSteps[3]}
    //     />
    //   </div>
    //   <div className="flex">
    //     <div className="text-[#ffffff] ml-[20px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
    //       <Image
    //         src="/MissionPageBanner.png"
    //         width={800}
    //         height={1}
    //         alt="alt"
    //         className="mx-[10px] my-[10px]"
    //       />
    //       <div className="font-semibold text-2xl text-white mx-3">
    //         Twitter Mission
    //       </div>
    //       <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
    //         <pre className="overflow-auto no-scrollbar">{description}</pre>
    //         <div className="my-[60px]">
    //           <MissionStepsCard
    //             heading1={"Follow our Twitter handle"}
    //             descp1={missionSteps[0]}
    //             heading2="Submit your work"
    //             descp2={missionSteps[1]}
    //           />
    //         </div>
    //       </div>

    //     </div>
    //     <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
    //         <BeAchamp
    //           title="Twitter Mission"
    //           tags={["Writing", "Marketing"]}
    //           val="2.9"
    //         />
    //       </div>
    //   </div>
    // </div>
  );
}
