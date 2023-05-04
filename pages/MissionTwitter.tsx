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

export default function MissionTwitter() {
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
        <NavbarMissionOnboarding />
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
          <div className="font-semibold text-2xl text-white mx-3">
            Twitter Mission
          </div>
          <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
            <p>* Write a Tweet about Firebond</p>
            <ol className="mt-2 list-decimal list-inside">
              <li className="mb-2">Follow @firebondapp</li>
              <li className="mb-2">
                Write a thoughtful message about firebond on why we rock! Please
                note: Writing only Hi/Hello is not acceptable
              </li>
              <li className="mb-2">
                Please send us a screenshot of where you completed this step by
                following all the instructions. NOTE: Due to a high number of
                requests, reviews can take up to 72h.
              </li>
             
            </ol>
          </div>
          <div className="flex items-center">
            {/* <input type="file" accept="image/*" className="mb-[10px]" /> */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 mt-10 ml-5">
              Follow @Firebond
            </button>
          </div>

          <h1 className="text-gray-100 text-2xl mt-5 ml-5">
            Did you wrote a thoughtful_message about firebond
          </h1>
          <div>
            <input
              type="file"
              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileSelect}
              className="relative left-[20px]   text-white font-semibold mt-5 py-2 px-4 rounded-lg transition-colors duration-300"
            />
            <button
              onClick={handleUpload}
              className="relative top-[60px] left-[-300px] bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-5 py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Share Proof
            </button>
          </div>
          <div className="absolute top-[200px] left-[1120px]  text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
            <ShareFeedbackCard
              feedback="Twitter Mission for Firebond"
              tag={["Writing", "Marketing"]}
              val="2.9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
