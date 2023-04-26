import React, { useState } from "react";
import Sidebar from "../molecules/Sidebar";
import Header from "../atoms/Header";
import Image from "next/image";
import { AiFillPauseCircle, AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";

const MissionTemplateEdit = () => {
  const [status, setStatus] = useState(false);

  return (
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
                <h1 className="font-semibold text-2xl text-white">Missions</h1>
                <div className="flex gap-3">
                  <button className="text-[14px] leading-[18.9px] w-[98px] h-[33px] flex justify-center items-center text-[#757575] border-[#757575] border-[1px] rounded-[8px] hover:bg-white hover:text-black hover:border-white">
                    Save
                  </button>
                  <button className="text-[14px] leading-[18.9px] w-[98px] h-[33px] flex justify-center items-center text-[#757575] border-[#757575] border-[1px] rounded-[8px] hover:bg-white hover:text-black hover:border-white">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Section */}
          <div className="h-full flex justify-between">
            {/* Left Section */}
            <div className="h-screen w-full"></div>

            {/* Right Section */}
            <div className="h-screen w-[437px] border-l-[1px] border-[#353B43] pt-[37px] pl-[30px] pr-[24px]">
              <div>
                {/* Status */}
                <h1 className="font-medium text-[16px] leading-[22px] text-white mb-[10px]">
                  Status
                </h1>
                <div className="w-[383px] h-[41px] flex justify-between items-center bg-[#232B35] rounded-[8px] pr-3 pl-[23px] ">
                  <div className="flex gap-[10.25px] justify-center items-center">
                    <div
                      className={`w-4 h-4 border-[1px] ml-[] border-white rounded-full cursor-pointer ${status ? "bg-white" : "bg-inherit"}`}
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
                      <Image width={11} height={10} alt="" src="Icons/✍️.svg" />
                      <h1 className="font-normal text-[10.2174px] text-white font-open-sans">
                        Writing
                      </h1>
                    </div>
                    <div className="inline-flex gap-[4.33px] bg-[#363C44] px-[5px] py-[1px] rounded-[2.0348px] justify-center items-center">
                      <Image width={11} height={10} alt="" src="Icons/📢.svg" />
                      <h1 className="font-normal text-[10.2174px] text-white font-open-sans">
                        Marketing
                      </h1>
                    </div>
                  </div>
                    <AiOutlinePlusCircle size={16} className="ml-[13px] cursor-pointer text-[#757575]" />
                </div>

                {/* Recurrence */}
                <h1 className="font-medium text-[16px] mt-6 leading-[22px] text-white mb-[10px]">
                  Recurrence
                </h1>
                <div className="flex gap-[14px]">
                    <button className="px-[11px] py-[8px] hover:bg-[#232B35] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">Once</button>
                    <button className="px-[11px] py-[8px] hover:bg-[#232B35] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">Twice</button>
                    <button className="px-[11px] py-[8px] hover:bg-[#232B35] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">Weekly</button>
                    <button className="px-[11px] py-[8px] hover:bg-[#232B35] border-[1px] border-[#757575] rounded-[4px] text-white text-[14px] leading-[19px]">Monthly</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionTemplateEdit;
