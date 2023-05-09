import React, { useState } from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import Image from "next/image";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import BasicInfoCard from "@/components/molecules/BasicInfoCard";
import SubmissionCard from "@/components/molecules/SubmissionCard";
import Details from "@/components/molecules/Details";
import Todo from "@/components/molecules/Todo";
import Priority from "@/components/molecules/Priority";
import Tags from "@/components/molecules/Tags";
import Reccurence from "@/components/molecules/Reccurence";
import MissionFormData from "@/utils/MissionFormData";
import { supabase } from "@/utils/supabaseClient";
import { Modal } from "@material-ui/core";
import CopyLinkPopUpFormBuilder from "@/components/molecules/CopyLinkPopUpFormBuilder";
import RouteGuardAdmin from "@/utils/RouteGuardAdmin";

const MissionCreationFormPage = () => {
  const [OpenMission, setOpenMission] = useState(false);
  const obj = MissionFormData();
  const [MissionId, setMissionId] = useState("");
  var wallet_id: null;
  if (typeof window !== "undefined") {
    const storedJsonData = localStorage.getItem("data");
    const jsonData = JSON.parse(storedJsonData ?? "{}");
    wallet_id = jsonData.wallet_id;
  }
  const generateRandom = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(23).substring(2, 5);

  async function onCreateClick() {
    setMissionId(generateRandom());
    setOpenMission(!OpenMission)

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
      // console.log(rowData);
      var mission = rowData.missions;
      if (rowData.missions == null) mission = [obj];
      else {
        mission.push(obj);
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

  return (
    <>
      <Modal
        onClose={() => {
          setOpenMission(!OpenMission);
        }}
        open={OpenMission}
        style={{}}
      >
        <div className="absolute m-[auto] top-[30vh] left-[40vw]">
          <CopyLinkPopUpFormBuilder
            url={`https://firebond.com/${obj.title}/${MissionId}`}
            forWhichComponent="mission"
          />
        </div>
      </Modal>
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
                  {/* Basic Info */}
                  <BasicInfoCard />

                  {/* Submission type */}
                  <SubmissionCard />

                  {/* Details */}
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
                  <Tags />

                  {/* Recurrence */}
                  <Reccurence />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouteGuardAdmin(MissionCreationFormPage);
