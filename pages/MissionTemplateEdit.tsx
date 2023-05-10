import React, { useState } from "react";
import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import Image from "next/image";
import Modal from "@material-ui/core/Modal";
import { supabase } from "@/utils/supabaseClient";
import CopyLinkPopUpFormBuilder from "@/components/molecules/CopyLinkPopUpFormBuilder";
import Todo from "@/components/molecules/Todo";
import Priority from "@/components/molecules/Priority";
import Tags from "@/components/molecules/Tags";
import Reccurence from "@/components/molecules/Reccurence";
import BasicInfoCard from "@/components/molecules/BasicInfoCard";
import Details2 from "@/components/molecules/Details2";
import EditMission from "@/utils/EditMission";
import MissionFormData from "@/utils/MissionFormData";
declare var window: any;
var name = "user";
if (typeof window !== "undefined") {
  const storedJsonData = localStorage.getItem("data");
  // console.log(storedJsonData)
  const jsonData = JSON.parse(storedJsonData ?? "{}");
  if (jsonData.name) name = jsonData.name;

  console.log("->", jsonData);
}
const MissionTemplateEdit = () => {
  const obj = MissionFormData();
  const obj2 = EditMission();
  const [OpenMission, setOpenMission] = useState(false);
  const [MissionId, setMissionId] = useState("");
  const [input1, setInput1] = useState(obj2.heading1);
  const [input2, setInput2] = useState(obj2.description1);
  const [input3, setInput3] = useState(obj2.heading2);
  const [input4, setInput4] = useState(obj2.description2);
  const [selectedButton, setSelectedButton] = useState(null);

  var wallet_id = "";
  if (typeof window !== "undefined") {
    const storedJsonData = localStorage.getItem("data");
    // console.log(storedJsonData)
    const jsonData = JSON.parse(storedJsonData ?? "{}");
    wallet_id = jsonData.wallet_id;
    console.log(jsonData);
  }

  // random string generator
  const generateRandom = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(23).substring(2, 5);

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
      if (rowData.missions == null) mission = obj;
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
  function handleInput1(e: any) {
    setInput1(e.target.value);
  }
  function handleInput2(e: any) {
    setInput2(e.target.value);
  }
  function handleInput3(e: any) {
    setInput3(e.target.value);
  }
  function handleInput4(e: any) {
    setInput4(e.target.value);
  }
  const handleButtonClick = (buttonNumber: any) => {
    setSelectedButton(buttonNumber === selectedButton ? null : buttonNumber);
  };

  const title = obj2.title;
  const description = obj2.description;

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
        <div className="absolute m-[auto] top-[30vh] left-[40vw]">
          <CopyLinkPopUpFormBuilder
            url={`https://firebond.com/${name}/${MissionId}`}
            forWhichComponent="mission"
          />
        </div>
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
                  <BasicInfoCard title={title} />

                  <div className="w-[749px] h-auto bg-[#232B35] rounded-[20px] mb-6">
                    <div className="h-[72px] border-b-[0.5px] border-[#474C52] pt-6 pl-6">
                      <h1 className="font-normal text-[20px] leading-[27px] text-white">
                        Submission type
                      </h1>
                    </div>
                    <div className="h-auto w-full p-6">
                      <div className="h-auto flex gap-5">
                        <button
                          onClick={() => handleButtonClick(1)}
                          className={`px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px] ${
                            selectedButton === 1
                              ? "bg-black text-white"
                              : "bg-[#2E363F]"
                          }`}
                        >
                          File
                        </button>
                        <button
                          onClick={() => handleButtonClick(2)}
                          className={`px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px] ${
                            selectedButton === 2
                              ? "bg-black text-white"
                              : "bg-[#2E363F]"
                          }`}
                        >
                          Link
                        </button>
                        <button
                          onClick={() => handleButtonClick(3)}
                          className={`px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px] ${
                            selectedButton === 3
                              ? "bg-black text-white"
                              : "bg-[#2E363F]"
                          }`}
                        >
                          Invite
                        </button>
                        <button
                          onClick={() => handleButtonClick(4)}
                          className={`px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px] ${
                            selectedButton === 4
                              ? "bg-black text-white"
                              : "bg-[#2E363F]"
                          }`}
                        >
                          Empty
                        </button>
                        <button
                          onClick={() => handleButtonClick(5)}
                          className={`px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px] ${
                            selectedButton === 5
                              ? "bg-black text-white"
                              : "bg-[#2E363F]"
                          }`}
                        >
                          Text
                        </button>
                        <button
                          onClick={() => handleButtonClick(6)}
                          className={`px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px] ${
                            selectedButton === 6
                              ? "bg-black text-white"
                              : "bg-[#2E363F]"
                          }`}
                        >
                          Join Telegram
                        </button>
                        <button
                          onClick={() => handleButtonClick(7)}
                          className={`px-[11px] py-[8px] hover:bg-[#171C23] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px] ${
                            selectedButton === 7
                              ? "bg-black text-white"
                              : "bg-[#2E363F]"
                          }`}
                        >
                          Discord Invite
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-[749px] h-auto  bg-[#232B35] rounded-[20px] mb-6">
                    <div className="h-[72px] border-b-[0.5px] border-[#474C52] pl-6"></div>
                    <div className="h-auto w-full p-6">
                      <div className="h-auto relative top-[-97px] left-[-20px]">
                        <Details2 description={description} />

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
                              <div className="w-[578px] h-[41px]  flex items-center  bg-[#2E363F] rounded-[8px]">
                                <div className="w-full h-[41px] bg-[#2E363F] ">
                                  <input
                                    className="w-full h-full px-6 overflow-hidden text-ellipsis outline-none bg-inherit text-white text-base font-medium"
                                    value={input1}
                                    onChange={handleInput1}
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h1 className="font-medium text-[14px] leading-[19px] text-white mb-[11px]">
                                Sub heading
                              </h1>
                              <div className="w-[578px] h-[41px]  flex items-center  bg-[#2E363F] rounded-[8px]">
                                <div className="w-full h-[41px] bg-[#2E363F] ">
                                  <input
                                    className="w-full h-full px-6 overflow-hidden text-ellipsis outline-none bg-inherit text-white text-base font-medium"
                                    value={input2}
                                    onChange={handleInput2}
                                    placeholder=""
                                  />
                                </div>
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
                              <div className="w-[578px] h-[41px]  flex items-center  bg-[#2E363F] rounded-[8px]">
                                <div className="w-full h-[41px] bg-[#2E363F] ">
                                  <input
                                    className="w-full h-full px-6 overflow-hidden text-ellipsis outline-none bg-inherit text-white text-base font-medium"
                                    value={input3}
                                    onChange={handleInput3}
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h1 className="font-medium text-[14px] leading-[19px] text-white mb-[11px]">
                                sub Heading
                              </h1>
                              <div className="w-[578px] h-[41px]  flex items-center  bg-[#2E363F] rounded-[8px]">
                                <div className="w-full h-[41px] bg-[#2E363F] ">
                                  <input
                                    className="w-full h-full px-6 overflow-hidden text-ellipsis outline-none bg-inherit text-white text-base font-medium"
                                    value={input4}
                                    onChange={handleInput4}
                                    placeholder=""
                                  />
                                </div>
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

export default MissionTemplateEdit;
