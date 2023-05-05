import React, { useState } from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import Image from "next/image";
import {
  AiFillPauseCircle,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import BasicInfoCard from "@/components/molecules/BasicInfoCard";
import SubmissionCard from "@/components/molecules/SubmissionCard";
import Details from "@/components/molecules/Details";
import Todo from "@/components/molecules/Todo";
import Priority from "@/components/molecules/Priority";
import MissionFormData from "@/utils/MissionFormData";
import { supabase } from "@/utils/supabaseClient";
const MissionCreationFormPage = () => {
  const obj = MissionFormData();
  const [OpenMission, setOpenMission] = useState(false);
  var wallet_id: null;
  if (typeof window !== "undefined") {
    const storedJsonData = localStorage.getItem("data");
    const jsonData = JSON.parse(storedJsonData ?? "{}");
    wallet_id = jsonData.wallet_id;
  }
  async function onCreateClick() {
    // setMissionId(generateRandom());
    // setOpenMission(!OpenMission);
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
      if (rowData.missions == null) mission = [obj];
      else {
        mission.push(obj);
      }
      // Update the row with the new missions
      const { data, error: updateError } = await supabase
        .from("community_data")
        .upsert({
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
  return (
    <>
      <div className="min-h-screen  bg-[#171C23]">
        <div className="h-full flex ">
          <Sidebar />
          <div className="h-full w-full">
            <Header />
            <div className="w-full h-[115px]  border-b-[1px] border-[#353B43] px-6 py-7">
              <div className="h-full w-full">
                <h1 className="font-medium text-[14px] leading-[18.9px] mb-2 text-[#A6A6A6]">
                  Missions/Create
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
              <div className="w-full h-full mt-[28px] flex justify-center ">
                <div>
                  <BasicInfoCard />

                  <SubmissionCard />

                  <Details />
                </div>
              </div>

              {/* Right Section */}
              <div className="min-h-screen w-[437px] border-l-[1px] border-[#353B43] pt-[37px] pl-[30px] pr-[24px]">
                <div>
                  {/* Status */}
                  <Todo />

                  {/* Priority */}
                  <Priority />

                  {/* Tags */}
                  <h1 className="font-medium text-[16px] mt-6 leading-[22px] text-white mb-[10px]">
                    Tags
                  </h1>
                  <div className="w-[383px] h-[41px] flex justify-start items-center bg-[#232B35] rounded-[8px] pr-3 pl-[23px] ">
                    <div className="flex gap-[6.13px]">
                      <div className="inline-flex gap-[4.33px] bg-[#363C44] px-[5px] py-[1px] rounded-[2.0348px] justify-center items-center">
                        <Image
                          width={11}
                          height={10}
                          alt=""
                          src="Icons/✍️.svg"
                        />
                        <h1 className="font-normal text-[10.2174px] text-white font-open-sans">
                          Writing
                        </h1>
                      </div>
                      <div className="inline-flex gap-[4.33px] bg-[#363C44] px-[5px] py-[1px] rounded-[2.0348px] justify-center items-center">
                        <Image
                          width={11}
                          height={10}
                          alt=""
                          src="Icons/📢.svg"
                        />
                        <h1 className="font-normal text-[10.2174px] text-white font-open-sans">
                          Marketing
                        </h1>
                      </div>
                    </div>
                    <AiOutlinePlusCircle
                      size={16}
                      className="ml-[13px] cursor-pointer text-[#757575]"
                    />
                  </div>

                  {/* Recurrence */}
                  <h1 className="font-medium text-[16px] mt-6 leading-[22px] text-white mb-[10px]">
                    Recurrence
                  </h1>
                  <div className="flex gap-[14px]">
                    <button className="px-[11px] py-[8px] hover:bg-[#232B35] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                      Once
                    </button>
                    <button className="px-[11px] py-[8px] hover:bg-[#232B35] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                      Twice
                    </button>
                    <button className="px-[11px] py-[8px] hover:bg-[#232B35] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                      Weekly
                    </button>
                    <button className="px-[11px] py-[8px] hover:bg-[#232B35] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">
                      Monthly
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionCreationFormPage;
