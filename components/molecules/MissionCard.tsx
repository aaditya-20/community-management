import React from "react";
import { FaPlusCircle } from "react-icons/fa";

function Mission(props: any) {
  return (
    <div className="card card-side shadow-xl absolute w-[469px] h-[275px] bg-[#404A54] flex justify-center items-center rounded-3xl">
      {/* Heading */}
      <div className="absolute top-0 flex items-center justify-between w-full h-16 bg-[#404A54] text-white-800 rounded-t-3xl">
        <h1 className="text-2xl text-white font-bold ml-6">Missions</h1>
        <FaPlusCircle className="mr-8 text-3xl bg-gray-300 rounded-full p-1 text-gray-800 hover:text-gray-500 cursor-pointer" />
      </div>
      <input
        type="text"
        placeholder= '0 in progress'
        className="input input-bordered input-error w-[170px] left-[-50px] mr-8 max-w-xs bg-[#404A54]  text-white placeholder-gray-300 placeholder-opacity-45 border-white border-1 font-bold"
      />
      <input
        type="text"
        placeholder="0 in review"
        className="input input-bordered input-error w-[170px] left-[-50px] max-w-xs bg-[#404A54] placeholder-white placeholder-opacity-45 border-white border-1 font-bold"
      />

      {/* 4 circular images and submission count */}
      <div className="absolute bottom-4 left-4 flex items-center">
        <div className="relative w-10 h-10 border-2 border-white rounded-full overflow-hidden">
          <img
            src="https://source.unsplash.com/200x200/?portrait"
            alt="person 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="-ml-2 relative w-10 h-10 border-2 border-white rounded-full overflow-hidden">
          <img
            src="https://source.unsplash.com/200x200/?portrait"
            alt="person 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="-ml-4 relative w-10 h-10 border-2 border-white r
        ounded-full overflow-hidden"
        >
          <img
            src="https://source.unsplash.com/200x200/?portrait"
            alt="person 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="-ml-4 relative w-10 h-10 border-2 border-white rounded-full overflow-hidden">
          <img
            src="https://source.unsplash.com/200x200/?portrait"
            alt="person 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4 text-normal">
          <span className="text-gray-300">
            {props.submission} submissions from
          </span>{" "}
          <span className="text-white">{props.contributors} contributors</span>
        </div>
      </div>
    </div>
  );
}

export default Mission;
