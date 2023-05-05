import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@/components/atoms/TextInput";
import { useState } from "react";
export default function MissionAMAQuestion() {
  const [link, setLink] = useState("");
  const [secret, setSecret] = useState("");

  function handleLinkChange(event: any) {
    setLink(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    // code to submit the form with the link input
  }

  function handleSecret(e: any) {
    setSecret(e.target.value);
  }
  return (
    <div>
      <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1100px] w-[1400px] md:grid-cols-[auto,1fr]">
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
              <div className="font-[600] text-[24px] text-[#ffffff] my-[20px]">
                Submit An AMA Question
              </div>
              <div className="font-[500] text-[16px] text-[#D9D9D9]">
                To complete this mission, please complete the survey form in the
                link:
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray p-4 rounded-lg shadow-md"
                >
                  <div className="flex flex-col mb-2">
                  <TextInput
                    placeholder="Paste Your Link here"
                    label="Enter the Link"
                    className="w-full h-[41px]"
                    classNameInput="w-[426px] h-[41px] bg-[#2E363F] rounded-lg text-white font-[General Sans] font-medium"
                    classNameLabel="font-medium text-base leading-6 text-white font-[General Sans] w-full h-[22px]"
                    handleChange2={handleLinkChange}
                    handleValue={link}
                  />
                  </div>
                  <TextInput
                    placeholder="Your code"
                    label="Write your secret Code here"
                    className="relative  w-full h-[41px] mt-8"
                    classNameInput="w-[426px] h-[41px] bg-[#2E363F] rounded-lg text-white font-[General Sans] font-medium"
                    classNameLabel="font-medium text-base leading-6 text-white font-[General Sans] w-full h-[22px]"
                    handleChange2={handleSecret}
                    handleValue={secret}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-10 rounded-lg transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
            <BeAchamp val="1000" />
          </div>
        </div>
      </div>
    </div>
  );
}
