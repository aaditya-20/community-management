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

export default function MissionDiscord() {
  const [file, setFile] = useState("");

  function handleFileSelect(e: any) {
    setFile(e.target.value);
  }
  function handleUpload() {}
  return (
    <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1500px] w-[1400px] md:grid-cols-[auto,1fr]">
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
            Discord Mission
          </div>
          <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
            <p>* Get a Discord Role and introduce yourself to the community</p>
            <p className="mt-0">GUIDE:</p>
            <ol className="mt-2">
              <li>Join our discord if you have not done that yet.</li>
              <li>You will then get a verified role.</li>
              <li>
                Write a message telling us who you are and what your top skills
                you have!.
              </li>
              <li>
                Post it in the #introduce-yourself channelDo all this and then
                you will have access to the Quests that require a role.
              </li>
            </ol>
          </div>
          
          <div className="absolute top-[200px] left-[1120px]  text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
            <ShareFeedbackCard
              feedback="Discord Mission for Firebond"
              tag={["Writing", "Marketing"]}
              val="2.9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

