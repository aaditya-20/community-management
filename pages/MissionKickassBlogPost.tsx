import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import TextArea from "@/components/atoms/TextArea";
import { useState } from "react";
import TextInput from "@/components/atoms/TextInput";
import ShareFeedbackCard from "@/components/molecules/ShareFeedbackCard";

export default function MissionKickassBlogPost() {
  const [article, setArticle] = useState("");
  const [value, setValue] = useState("");

  function handleArea(e: any) {
    setArticle(e.target.value);
  }
  function handleInput(e: any) {
    setValue(e.target.value);
  }
  function handleSubmit() {}
  return (
    <div>
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
            <div className="mx-[30px] my-[30px]">
              <div className="font-[600] text-[24px] text-[#ffffff]">
                Write a kickass blog post for Firebond
              </div>
              <div className="font-[500] text-[16px] text-[#D9D9D9]">
                MISSION 🎯
                <TextArea
                  placeholder="Be Creative,Be Positive"
                  label="Write an article about the project of at least 200 words."
                  className="relative top-[20px] w-[650px] h-[250px]"
                  classNameInput="w-[550px] h-[250px] bg-[#2E363F] rounded-lg overflow-hidden font-small"
                  classNameLabel="font-small text-base leading-6 text-white  w-[400px] h-[12px] mb-5"
                  handleChange2={handleArea}
                  handleValue={article}
                />
                <TextInput
                  placeholder="Paste Link of Google Drive here"
                  label="Upload your piece of art on Google Drive (make it public!)"
                  className="relative top-[-25px]  w-full h-[41px]"
                  classNameInput="w-[426px] h-[41px] bg-[#2E363F] rounded-lg text-white font-[General Sans] font-medium"
                  classNameLabel="font-medium text-base leading-6 text-white font-[General Sans] w-full h-[22px] mb-3"
                  handleChange2={handleInput}
                  handleValue={value}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={handleSubmit}
                  className="relative left-[-320px] top-[25px] bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Submit here
                </button>
              </div>
            </div>
            <div className="absolute top-[200px] left-[1120px]  text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
              <ShareFeedbackCard
                feedback="Share your feedback for Firebond"
                tag={["Writing", "Marketing"]}
                val="2.9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
