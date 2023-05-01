import React, { useState } from "react";
import Sidebar from "@/components/molecules/Sidebar"; 
import Header from "@/components/atoms/Header"; 
import Image from "next/image";
import {
  AiFillPauseCircle,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";

const MissionCreationFormPage = () => {
  const [status, setStatus] = useState(false);
  const [OpenMission, setOpenMission] = useState(false);
  function onCreateClick() {
    setOpenMission(!OpenMission);
  }

  return (
    <>
      <div className="min-h-screen  bg-[#171C23]">
        <div className="h-full flex ">
          <Sidebar />
          <div className="h-full w-full">
            <Header />
            <div className="w-full h-[115px] border-t-[1px] border-b-[1px] border-[#353B43] px-6 py-7">
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
                  <div className="w-[749px] h-auto rounded-[20px] bg-[#232B35] p-6 relative mb-6">
                    <h1 className="font-normal text-[20px] leading-[27px] text-white">
                      Basic information
                    </h1>
                    <div className="w-full h-0 border-[0.5px] border-[#474C52] absolute top-[72px] left-0"></div>
                    <h1 className="font-medium text-base text-white mb-[10px] mt-[45px]">
                      Mission title
                    </h1>
                    <div className="w-full h-[41px] bg-[#2E363F] rounded-lg overflow-hidden mb-[29px]">
                      <input className="w-full h-full px-6 overflow-hidden text-ellipsis outline-none bg-inherit" />
                    </div>
                    <div className="w-full flex justify-between">
                      <button className="pt-[9px] pr-[19px] pl-4 pb-[9px] bg-[#171C23] hover:bg-white/[0.05] rounded-[4px] flex justify-center items-center">
                        <div className=" w-full h-full flex gap-[6.5px]">
                          <Image
                            src="Icons/calender.svg"
                            alt=""
                            height={13}
                            width={13}
                          />
                          <h1 className="font-normal text-[#D0D0D0CC] text-[14px] leading-[19px]">
                            Due Date
                          </h1>
                        </div>
                      </button>

                      <button className="pt-[9px] pr-[11px] pb-[9px] pl-[12px] bg-[#171C23] hover:bg-white/[0.05] rounded-[4px] flex justify-center items-center">
                        <div className=" w-full h-full flex gap-[7px]">
                          <Image
                            src="Icons/paper_pin.svg"
                            alt=""
                            height={16}
                            width={16}
                          />
                          <h1 className="font-normal text-[#D0D0D0CC] text-[14px] leading-[19px]">
                            Attachment
                          </h1>
                        </div>
                      </button>

                      <button className="pl-[11px] pr-[10px] pt-[9px] pb-[7px] bg-[#171C23] hover:bg-white/[0.05] rounded-[4px] flex justify-center items-center">
                        <div className="flex w-full h-full">
                          <Image
                            src="Icons/visible.svg"
                            alt=""
                            height={20}
                            width={20}
                          />
                          <h1 className="font-normal text-[#D0D0D0CC] text-[14px] leading-[19px] ml-3 mr-[19.28px]">
                            Public
                          </h1>
                          <Image
                            src="Icons/Arrow_Down.svg"
                            alt=""
                            height={3.72}
                            width={7.45}
                          />
                        </div>
                      </button>

                      <button className="pl-[9.52px] pr-[11px] pt-[8px] pb-[9px] bg-[#171C23] hover:bg-white/[0.05] rounded-[4px] flex justify-center items-center">
                        <div className=" w-full h-full flex items-center justify-center">
                          <Image
                            src="Icons/Star.svg"
                            alt=""
                            height={17.7}
                            width={20.22}
                          />
                          <h1 className="font-normal text-[#D0D0D0CC] text-[14px] leading-[19px] ml-[18.26px] mr-[30px]">
                            100 XP
                          </h1>
                          <div>
                            <Image
                              src="Icons/Polygon.svg"
                              height={7}
                              width={7}
                              alt=""
                            />
                            <Image
                              src="Icons/Polygon.svg"
                              height={7}
                              width={7}
                              alt=""
                              className="-rotate-180"
                            />
                          </div>
                        </div>
                      </button>

                      <button className="pl-[14px] pr-[17px] pt-[8.1px] pb-[9px] bg-[#171C23] hover:bg-white/[0.05] rounded-[4px] flex justify-center items-center">
                        <div className=" h-full w-full flex gap-2">
                          <Image
                            src="Icons/dollar.svg"
                            alt=""
                            height={18.05}
                            width={20}
                          />
                          <h1 className="font-normal text-[#D0D0D0CC] text-[14px] leading-[19px]">
                            Add Bounty
                          </h1>
                        </div>
                      </button>
                    </div>
                  </div>
                

                {/* Submission type */}
                <div className="w-[749px] h-auto rounded-[20px] bg-[#232B35] p-6 relative mb-6">
                  <h1 className="font-normal text-[20px] leading-[27px] text-white">
                    Submission type
                  </h1>
                  <div className="w-full h-0 border-[0.5px] border-[#474C52] absolute top-[72px] left-0"></div>

                  <div className="w-full mt-[45px] flex justify-between">
                    <button className="rounded-[4px] border border-[#757575] h-[36px] w-[49px] flex justify-center items-center">
                      <h1 className="font-normal text-sm text-[#AAAAAA]">
                        File
                      </h1>
                    </button>
                    <button className="rounded-[4px] border border-[#757575] h-[36px] w-[58px] flex justify-center items-center">
                      <h1 className="font-normal text-sm text-[#AAAAAA]">
                        Link
                      </h1>
                    </button>
                    <button className="rounded-[4px] border border-[#757575] h-[36px] w-[58px] flex justify-center items-center">
                      <h1 className="font-normal text-sm text-[#AAAAAA]">
                        Invite
                      </h1>
                    </button>
                    <button className="rounded-[4px] border border-[#757575] h-[36px] w-[65px] flex justify-center items-center">
                      <h1 className="font-normal text-sm text-[#AAAAAA]">
                        Empty
                      </h1>
                    </button>
                    <button className="rounded-[4px] border border-[#757575] h-[36px] w-[58px] flex justify-center items-center">
                      <h1 className="font-normal text-sm text-[#AAAAAA]">
                        Text
                      </h1>
                    </button>
                    <button className="rounded-[4px] border border-[#757575] h-[36px] w-[117px] flex justify-center items-center">
                      <h1 className="font-normal text-sm text-[#AAAAAA]">
                        Join Telegram
                      </h1>
                    </button>
                    <button className="rounded-[4px] border border-[#757575] h-[36px] w-[110px] flex justify-center items-center">
                      <h1 className="font-normal text-sm text-[#AAAAAA]">
                        Join Discord
                      </h1>
                    </button>
                  </div>
                </div>
                {/* Details */}
                <div className="w-[749px] h-auto rounded-[20px] bg-[#232B35] p-6 relative">
                  <h1 className="font-normal text-[20px] leading-[27px] text-white">
                    Details
                  </h1>
                  <div className="w-full h-0 border-[0.5px] border-[#474C52] absolute top-[72px] left-0"></div>
                  <h1 className="font-medium text-base text-white mb-[12px] mt-[45px]">
                    Description
                  </h1>
                  <div className="h-[103px] w-full bg-[#2E363F] overflow-hidden text-ellipsis rounded-lg mb-6">
                    <textarea
                      className="h-full w-full overflow-hidden text-ellipsis outline-none resize-none pt-[16.21px] px-[18.38px] bg-inherit text-[#D0D0D0A6] text-[12px] leading-[16.2px]"
                      placeholder="Add description to let the members know more about your mission"
                    />
                  </div>
                  <h1 className="font-medium text-base text-white mb-[22px] mt-[45px]">
                    Mission conditions
                  </h1>
                  <div className="flex gap-[10px]">
                    <Image src="Icons/add.svg" alt="" height={29} width={29} />
                    <Image src="Icons/Line.svg" alt="" height={0} width={659} />
                  </div>
                </div>

                </div>
              </div>

              {/* Right Section */}
              <div className="min-h-screen w-[437px] border-l-[1px] border-[#353B43] pt-[37px] pl-[30px] pr-[24px]">
                <div>
                  {/* Status */}
                  <h1 className="font-medium text-[16px] leading-[22px] text-white mb-[10px]">
                    Status
                  </h1>
                  <div className="w-[383px] h-[41px] flex justify-between items-center bg-[#232B35] rounded-[8px] pr-3 pl-[23px] ">
                    <div className="flex gap-[10.25px] justify-center items-center">
                      <div
                        className={`w-4 h-4 border-[1px] ml-[] border-white rounded-full cursor-pointer ${
                          status ? "bg-white" : "bg-inherit"
                        }`}
                        onClick={() => {
                          setStatus(!status);
                        }}
                      ></div>
                      <h1 className="font-normal text-[14px] leading-[19px] text-white">
                        To Do
                      </h1>
                    </div>
                    <Image
                      src="Icons/Arrow_Down.svg"
                      height={4.97}
                      width={9.83}
                      alt=""
                      className="cursor-pointer"
                    />
                  </div>

                  {/* Priority */}
                  <h1 className="font-medium text-[16px] mt-6 leading-[22px] text-white mb-[10px]">
                    Priority
                  </h1>
                  <div className="w-[383px] h-[41px] flex justify-between items-center bg-[#232B35] rounded-[8px] pr-3 pl-[23px] ">
                    <div className="flex gap-[10.25px] justify-center items-center">
                      <h1 className="font-normal text-[14px] leading-[19px] text-white">
                        High
                      </h1>
                    </div>
                    <Image
                      src="Icons/Arrow_Down.svg"
                      height={4.97}
                      width={9.83}
                      alt=""
                      className="cursor-pointer"
                    />
                  </div>

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
