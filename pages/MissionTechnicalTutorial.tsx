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
export default function MissionTechnicalTutorial() {
  const [input, setInput] = useState("");

  function handleInput(e: any) {
    setInput(e.target.value);
  }

  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileSelect(event: any) {
    setSelectedFile(event.target.files[0]);
  }

  const bucket_name = "Store";
  async function handleUpload() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".mp4";
    input.hidden = true;
    input.addEventListener("change", async () => {
      const files = input.files;
      if (files && files.length > 0) {
        const file = files[0];
        console.log(file);
        const { data, error } = await supabase.storage
          .from(bucket_name)
          .upload(`tutorial/${file.name}`, file, {
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
      <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-full w-full md:grid-cols-[auto,1fr]">
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
              Technical Tutorials for Firebond
            </div>
            <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
              <p>
                Web3 education is still in its early stages, and we're looking
                to educate more budding developers to build in the Web3 space.
                Our platform is seeking individuals who are proficient in The
                Graph Protocol and have a flair for creating technical tutorials
                suitable for beginners looking to create and deploy a Subgraph.
                The tutorials should provide thorough explanations to help
                learners gain a full understanding of the functionality of their
                code.
              </p>
              <p className="mt-4">
                We're open to negotiating compensation based on your experience
                and the quality of your tutorial. To be considered, please
                include the following:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>A link to your tutorial on Google Drive (set to public)</li>
                <li>A link to your Twitter/Github profile</li>
              </ul>
            </div>

            <div className="mx-[10px] my-[40px]">
              {/* <h2 className="mb-[10px]">Upload a Screenshot</h2> */}
              <div className="flex items-center">
                {/* <input type="file" accept="image/*" className="mb-[10px]" /> */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                  Follow Firebond on Twitter
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                {/* <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="absolute left-[300px] mt-10 bg-gray-200 rounded-lg  py-2 text-gray-700 w-half "
                /> */}
                <button
                  onClick={handleUpload}
                  className="relative left-[-330px] bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-5 py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Upload Video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[200px] left-[1120px] ml-[20px]">
          <ShareFeedbackCard
            feedback="Technical Tutorials for Firebond"
            tag={["Writing", "Marketing"]}
            val="2.9"
          />
        </div>
      </div>
    </div>
  );
}

{
  /**
Web3 education is still in its early stages, and our platform is looking to educate more budding developers to build in the Web3 space. Our platform is looking for individuals who are proficient in The Graph Protocol and have a flair for creating technical tutorials suitable for beginners looking to Create and Deploy a Subgraph. The tutorials should provide thorough explanations to assist learners in gaining a full understanding of the functionality of their code.
In terms of compensation, we are open to negotiation based on your experience and also the quality of your tutorial.
include:
A link to a Graph Protocol tutorial that you have written before
Your Twitter/Github profile
If you do not include these two items, you will not be considered.
 */
}
