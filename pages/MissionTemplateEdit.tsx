import React, { useState } from "react";
import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import Image from "next/image";
import Router from "next/router";
import {
  AiFillPauseCircle,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import Modal from "@material-ui/core/Modal";
import MissionPopup from "./MissonPopup";
import TextInput from "@/components/atoms/TextInput";
import FormData from "@/utils/FormData";
import { supabase } from "@/utils/supabaseClient";
import CopyLinkPopUpFormBuilder from "@/components/molecules/CopyLinkPopUpFormBuilder";
import Todo from "@/components/molecules/Todo";
import Priority from "@/components/molecules/Priority";
import Tags from "@/components/molecules/Tags";
import Reccurence from "@/components/molecules/Reccurence";
import BasicInfoCard from "@/components/molecules/BasicInfoCard";
declare var window: any;
var name = "user";
if (typeof window !== "undefined") {
  const storedJsonData = localStorage.getItem("data");
  // console.log(storedJsonData)
  const jsonData = JSON.parse(storedJsonData ?? "{}");
  if(jsonData.name)
   name = jsonData.name;
   
  console.log("->",jsonData);
  
}
const MissionTemplateEdit = () => {
 
  const obj = FormData();
  const [status, setStatus] = useState(false);
  const [OpenMission, setOpenMission] = useState(false);
  const [MissionId, setMissionId] = useState("");
  const [input, setInput] = useState("");
  const email = "ayush@firebond.xyz";
  var wallet_id = "";
  if (typeof window !== "undefined") {
    const storedJsonData = localStorage.getItem("data");
    // console.log(storedJsonData)
    const jsonData = JSON.parse(storedJsonData ?? "{}");
    wallet_id = jsonData.wallet_id;
    console.log(jsonData);
  }
  
  // random string generator
  const generateRandom = () => Math.random().toString( 36 ).substring( 2, 15 ) + Math.random().toString( 23 ).substring( 2, 5 );

  async function onCreateClick() {
    
    setMissionId(generateRandom());
    setOpenMission(!OpenMission);
    try {
      // Fetch the community data row using the user's wallet_id as a filter condition
      const { data: rowData, error } = await supabase
        .from("community_data")
        .select("*")
        .eq("wallet_id", wallet_id)
        .single();
      if (error) {
        console.error(error);
        return;
      }
      var mission = rowData.missions;
      if (rowData.missions == null)
        mission = [
          {
            title: `${input}`,
          },
        ];
      else {
      mission.push([
        {
          title: `${input}`,
        },
      ]);
    }
      // Update the row with the new missions
      const { data, error: updateError } = await supabase
        .from("community_data")
        .update({
          missions: mission,
        })
        .eq("wallet_id", wallet_id); // specify the row to update using a filter condition
      if (updateError) {
        console.error(updateError);
      } else {
        console.log("Missions updated successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleInput(e: any) {
    setInput(e.target.value);
  }
  // const mission = retrieve(database);

  return (
    <>
      <Modal
        onClose={() => {
          setOpenMission(!OpenMission);
        }}
        open={OpenMission}
        style={{}}
      >
        <div className='absolute m-[auto] top-[30vh] left-[40vw]'><CopyLinkPopUpFormBuilder url={`https://firebond.com/${name}/${MissionId}`} forWhichComponent="mission"/></div>
      </Modal>

      <div className="min-h-screen  bg-[#171C23]">
        <div className="h-full flex ">
          <Sidebar />
          <div className="h-full w-full">
            <Header />
            <div className="w-full h-[115px] border-t-[1px] border-b-[1px] border-[#353B43] px-6 py-7">
              <div className="h-full w-full">
                <h1 className="font-medium text-[14px] leading-[18.9px] mb-2 text-[#A6A6A6]">
                  Missions/Invite 10 new community members
                </h1>
                <div className="h-full w-full flex justify-between items-center">
                  <h1 className="font-semibold text-2xl text-white">
                    Missions
                  </h1>
                  <div className="flex gap-3">
                    <button className="text-[14px] leading-[18.9px] w-[98px] h-[33px] flex justify-center items-center text-[#757575] border-[#757575] border-[1px] rounded-[8px] hover:bg-white hover:text-black hover:border-white">
                      Save
                    </button>
                    <button
                      className="text-[14px] leading-[18.9px] w-[98px] h-[33px] flex justify-center items-center text-[#757575] border-[#757575] border-[1px] rounded-[8px] hover:bg-white hover:text-black hover:border-white"
                      onClick={onCreateClick}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="h-full flex justify-between">
              {/* Left Section */}
              <div className="h-full w-full flex justify-center">
                <div className="h-auto w-auto mt-[28px]  ">
                  {/* Basic Info Section */}
                  <BasicInfoCard/>

                  <div className="w-[749px] h-auto bg-[#232B35] rounded-[20px] mb-6">
                    <div className="h-[72px] border-b-[0.5px] border-[#474C52] pt-6 pl-6">
                      <h1 className="font-normal text-[20px] leading-[27px] text-white">
                        Submission type
                      </h1>
                    </div>
                    <div className="h-auto w-full p-6">
                      <div className="h-auto flex gap-5">
                        <button className="px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                          File
                        </button>
                        <button className="px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                          Link
                        </button>
                        <button className="px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                          Invite
                        </button>
                        <button className="px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                          Empty
                        </button>
                        <button className="px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                          Text
                        </button>
                        <button className="px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                          Join Telegram
                        </button>
                        <button className="px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                          Discord Invite
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-[749px] h-auto bg-[#232B35] rounded-[20px] mb-6">
                    <div className="h-[72px] border-b-[0.5px] border-[#474C52] pt-6 pl-6">
                      <h1 className="font-normal text-[20px] leading-[27px] text-white">
                        Details
                      </h1>
                    </div>
                    <div className="h-auto w-full p-6">
                      <div className="h-auto">
                        <h1 className="font-medium text-[16px] leading-[21.6px] text-white mb-3">
                          Description
                        </h1>
                        <div className="bg-[#2E363F] rounded-[8px] py-[33px] px-[18px] mb-[68px]">
                          <h1 className="font-semibold text-2xl capitalize text-white mb-5">
                            Onboard 10 New Community Members
                          </h1>
                          <p className="w-[658px] font-medium text-[16px] leading-[21.6px] text-[#D9D9D9D9]">
                            This bounty is for onboarding 10 new people into
                            Firebond Discord community. You’d do that by
                            generating a new invite link (we’re not counting
                            past invitations) from our Discord and sharing it
                            with people who are genuinely mission aligned.
                          </p>
                          <p className="w-[635px] font-medium text-[16px] leading-[21.6px] text-[#D9D9D9D9]">
                            <ol>
                              <li>
                                No prize if it looks like you’re just gaming the
                                system by inviting random people who don’t care
                                about Próspera’s mission. So be thoughtful about
                                who you invite.
                              </li>
                              <li>
                                When they arrive they should introduce
                                themselves so we understand their story. This
                                also helps us know they’re not just friends
                                helping someone score a quick bounty.
                              </li>
                              <li>
                                When you reach 10 people, submit your claim and
                                we’ll review.
                              </li>
                            </ol>
                          </p>
                          <p className="w-[611px] font-medium text-[16px] leading-[21.6px] text-[#D9D9D9D9]">
                            For those who recruit the right people and help us
                            build out our community with high quality
                            participants, this bounty can extend beyond 20.
                          </p>
                        </div>

                        {/* Mission Steps Section */}
                        <h1 className="mb-[29px]">Mission steps</h1>
                        <div className="flex gap-[22.07px]">
                          {/* left section */}
                          <div>
                            <div className="w-[97.93px] h-[34px] bg-[#191F27] rounded-[4px] flex justify-center items-center">
                              <h1 className="font-medium text-xs text-white">
                                Step 1
                              </h1>
                            </div>
                            <div className=" w-full flex justify-center">
                              <div className="w-0 h-[182px] border-[1px] border-dashed border-[#44494F]"></div>
                            </div>
                          </div>
                          {/* right section */}
                          <div>
                            <div className="mb-6">
                              <h1 className="font-medium text-[14px] leading-[19px] text-white mb-[11px]">
                                Heading
                              </h1>
                              <div className="w-[578px] h-[41px] pl-[18.25px] flex items-center  bg-[#2E363F] rounded-[8px]">
                                <h1 className="text-white font-medium text-xs">
                                  Onboard 10 new members
                                </h1>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h1 className="font-medium text-[14px] leading-[19px] text-white mb-[11px]">
                                Sub heading
                              </h1>
                              <div className="w-[578px] h-[41px] pl-[18.25px] flex items-center  bg-[#2E363F] rounded-[8px]">
                                <h1 className="text-white font-medium text-xs">
                                  Invite new members
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-[22.07px]">
                          {/* left section */}
                          <div>
                            <div className="w-[97.93px] h-[34px] bg-[#191F27] rounded-[4px] flex justify-center items-center">
                              <h1 className="font-medium text-xs text-white">
                                Step 2
                              </h1>
                            </div>
                            <div className=" w-full flex justify-center">
                              <div className="w-0 h-[182px] border-[1px] border-dashed border-[#44494F]"></div>
                            </div>
                          </div>
                          {/* right section */}
                          <div>
                            <div className="mb-6">
                              <h1 className="font-medium text-[14px] leading-[19px] text-white mb-[11px]">
                                Heading
                              </h1>
                              <div className="w-[578px] h-[41px] pl-[18.25px] flex items-center  bg-[#2E363F] rounded-[8px]">
                                <h1 className="text-white font-medium text-xs">
                                  Onboard 10 new members
                                </h1>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h1 className="font-medium text-[14px] leading-[19px] text-white mb-[11px]">
                                sub Heading
                              </h1>
                              <div className="w-[578px] h-[41px] pl-[18.25px] flex items-center  bg-[#2E363F] rounded-[8px]">
                                <h1 className="text-white font-medium text-xs">
                                  Share the proof of work
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Image
                          src="Icons/plus1.svg"
                          alt=""
                          width={29}
                          height={29}
                          className="relative left-[35px] bottom-0 "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="min-h-screen w-[437px] border-l-[1px] border-[#353B43] pt-[37px] pl-[30px] pr-[24px]">
                <div>
                  {/* Status */}
                  <Todo/>

                  {/* Priority */}
                  <Priority/>

                  {/* Tags */}
                  <Tags/>

                  {/* Recurrence */}
                  <Reccurence/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionTemplateEdit;
