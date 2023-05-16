import Image from "next/image";
import React from "react";
import Photo from "../atoms/Photo";
import router from "next/router";

function Mission(props: any) {
  return (
    <div
      className="w-full h-full bg-[#232A35] rounded-[20px] overflow-hidden flex items-end"
      style={{ boxShadow: "20px 35px 50px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="w-full h-[285px] bg-[#404A5473] rounded-[20px] p-6">
        <div className="w-full h-full">
          <div className="flex justify-between items-center mb-[55px]">
            <h1 className="text-white font-semibold text-2xl">Missions</h1>
            <Image
              src="Icons/add.svg"
              height={29}
              width={29}
              alt=""
              className="cursor-pointer"
              onClick={() => router.push("/MissionCreationFormPage")}
            />
          </div>

          <div className="flex justify-between items-center mb-[64px]">
            <button className="w-[195px] h-[52px] rounded-[10px] border border-[#FFFFFF3B] bg-[#FFFFFF24] flex items-center">
              <p className=" text-white font-open-sans font-semibold text-2xl px-[23px]">
                {props.progress ? props.progress : 0}{" "}
                <span className="font-extralight text-xs">in progress</span>
              </p>
            </button>
            <button className="w-[195px] h-[52px] rounded-[10px] border border-[#FFFFFF3B] bg-[#FFFFFF24] flex items-center">
              <p className=" text-white font-open-sans font-semibold text-2xl px-[23px]">
                {props.review ? props.review : 0}{" "}
                <span className="font-extralight text-xs">in review</span>
              </p>
            </button>
          </div>

          <div className="flex gap-[11px] items-center">
            <Photo />
            <p className="text-[#757575] font-normal text-base">
              {props.submission ? props.submission : 0} submissions from{" "}
              <span className="text-white">
                {props.contibutors ? props.contributors : 0}+ contributors
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="card card-side shadow-xl absolute w-[469px] h-[275px] bg-[#404A54] flex justify-center items-center rounded-3xl">
    //   {/* Heading */}
    //   <div className="absolute top-0 flex items-center justify-between w-full h-16 bg-[#404A54] text-white-800 rounded-t-3xl">
    //     <h1 className="text-2xl text-white font-bold ml-6">Missions</h1>
    //     <Image src="Icons/add.svg" alt="" height={29} width={29}/>
    //     {/* <FaPlusCircle className="mr-8 text-3xl bg-gray-300 rounded-full p-1 text-gray-800 hover:text-gray-500 cursor-pointer" /> */}
    //   </div>
    //   <input
    //     type="text"
    //     placeholder= '0 in progress'
    //     className="input input-bordered input-error w-[170px] left-[-50px] mr-8 max-w-xs bg-[#404A54]  text-white placeholder-gray-300 placeholder-opacity-45 border-white border-1 font-bold"
    //   />
    //   <input
    //     type="text"
    //     placeholder="0 in review"
    //     className="input input-bordered input-error w-[170px] left-[-50px] max-w-xs bg-[#404A54] placeholder-white placeholder-opacity-45 border-white border-1 font-bold"
    //   />

    //   {/* 4 circular images and submission count */}
    //   <div className="absolute bottom-4 left-4 flex items-center">
    //     <div className="relative w-10 h-10 border-2 border-white rounded-full overflow-hidden">
    //       <img
    //         src="https://source.unsplash.com/200x200/?portrait"
    //         alt="person 1"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <div className="-ml-2 relative w-10 h-10 border-2 border-white rounded-full overflow-hidden">
    //       <img
    //         src="https://source.unsplash.com/200x200/?portrait"
    //         alt="person 2"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <div
    //       className="-ml-4 relative w-10 h-10 border-2 border-white r
    //     ounded-full overflow-hidden"
    //     >
    //       <img
    //         src="https://source.unsplash.com/200x200/?portrait"
    //         alt="person 3"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <div className="-ml-4 relative w-10 h-10 border-2 border-white rounded-full overflow-hidden">
    //       <img
    //         src="https://source.unsplash.com/200x200/?portrait"
    //         alt="person 4"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <div className="ml-4 text-normal">
    //       <span className="text-gray-300">
    //         {props.submission} submissions from
    //       </span>{" "}
    //       <span className="text-white">{props.contributors} contributors</span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Mission;
