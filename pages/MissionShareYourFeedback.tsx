import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import TextInput from "@/components/atoms/TextInput";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import TextArea from "@/components/atoms/TextArea";
import ShareFeedbackCard from "@/components/molecules/ShareFeedbackCard";
export default function MissionShareYourFeedback() {
  const [input, setInput] = useState("");

  function handleInput(e: any) {
    setInput(e.target.value);
  }

  const bucket_name = "Store";
  async function handleUpload() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg";
    input.hidden = true;
    input.addEventListener("change", async () => {
      const files = input.files;
      if (files && files.length > 0) {
        const file = files[0];
        console.log(file);
        const { data, error } = await supabase.storage
          .from(bucket_name)
          .upload(`feedback_share/${file.name}`, file, {
            cacheControl: "3600",
            upsert: false,
          });
        if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
      }
    });
    input.click();
  }
  return (
    <div>
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
            <div className="mx-[-60px] my-[50px] left-[40vh]">
              <TextInput
                placeholder="Write your Feedback Here"
                label="Share Your Feedback"
                className="relative top-[-40px] left-[100px] w-[500px] h-[41px]"
                classNameInput="w-[500px] h-[41px] bg-[#2E363F] text-white"
                classNameLabel="font-medium text-white leading-6 text-white font-generalsans w-[250px] h-[22px] mb-2"
                handleChange2={handleInput}
                handleValue={input}
              />

              <div className="mx-[100px] my-[10px]">
                <h2 className="mb-[10px]">Upload a Screenshot</h2>
                <div className="flex items-center">
                  {/* <input type="file" accept="image/*" className="mb-[10px]" /> */}
                  <button
                    onClick={handleUpload}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
            <ShareFeedbackCard
              feedback="Share your feedback for Firebond"
              tag = {['Writing','Marketing']}
              val="2.9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
