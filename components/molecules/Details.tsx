import Image from "next/image";
import React, { useState } from "react";

const Details = () => {
  const [on, setOn] = useState(false);
  const [conditions, setConditions] = useState([""]);

  const handleClick = (value: string) => {
    if (conditions[0] == "") {
      const newConditions = [value];
      setConditions(newConditions);
    } else {
      if (!conditions.includes(value)) {
        const newConditions = [...conditions, value];
        setConditions(newConditions);
      }
    }
  };

  const handleSubmit = () => {
    setOn(false);
  };

  return (
    <div>
      <div className="w-[749px] h-auto rounded-[20px] bg-[#232B35] p-6 mb-[24px] relative">
        <div>
          <h1 className="font-normal text-[20px] leading-[27px] mx-6 text-white">
            Details
          </h1>
          <div className="w-full h-0 border-[0.5px] border-[#474C52] mt-[21px] mb-6 absolute left-0"></div>
        </div>
        <h1 className="font-medium text-base text-white mb-[12px] mt-[45px]">
          Description
        </h1>
        <div className="h-[103px] w-full bg-[#2E363F] overflow-hidden text-ellipsis rounded-lg mb-6">
          <textarea
            className="h-full w-full overflow-hidden text-ellipsis outline-none resize-none pt-[16.21px] px-[18.38px] bg-inherit placeholder:text-[#D0D0D0A6] text-white text-[12px] leading-[16.2px]"
            placeholder="Add description to let the members know more about your mission"
            
          />
        </div>
        <h1 className="font-medium text-base text-white mb-[22px] mt-[45px]">
          Mission ons
        </h1>
        {conditions[0] != "" ? (
          <div className="flex gap-[10px]">
            {conditions?.map((item, index) => {
              return (
                <div key={index}>
                  <div className=" border border-[#757575] w-[65px] h-[36px] flex justify-center items-center rounded-[4px] text-[#AAAAAA] font-normal text-sm">
                    {item}
                  </div>
                </div>
              );
            })}
            <Image
              src="Icons/add.svg"
              alt=""
              height={29}
              width={29}
              onClick={() => {
                setOn(!on);
              }}
              className="cursor-pointer ml-[12px]"
            />
          </div>
        ) : (
          <div className="flex gap-[10px]">
            <Image
              src="Icons/add.svg"
              alt=""
              height={29}
              width={29}
              onClick={() => {
                setOn(!on);
              }}
              className="cursor-pointer"
            />
            <Image src="Icons/Line.svg" alt="" height={0} width={659} />
          </div>
        )}
      </div>
      {on && (
        <div className="absolute inset-0 bg-[#00000082] h-[1087px] flex justify-center items-center">
          <div className="w-[598px] h-[156px] bg-[#232B35] rounded-[20px]">
            <h1 className="text-white font-normal text-[20px] leading-[27px] mt-6 ml-6">
              Select ons
            </h1>
            <div className="flex w-full gap-[16px] mt-[32px] ml-6">
              <button
                className=" border border-[#757575] w-[65px] h-[36px] flex justify-center items-center rounded-[4px] text-[#AAAAAA] font-normal text-sm hover:bg-[#161C23]"
                onClick={() => {
                  handleClick("Follow");
                }}
              >
                Follow
              </button>
              <button
                className=" border border-[#757575] w-[65px] h-[36px] flex justify-center items-center rounded-[4px] text-[#AAAAAA] font-normal text-sm hover:bg-[#161C23]"
                onClick={() => {
                  handleClick("Post");
                }}
              >
                Post
              </button>
              <button
                className=" border border-[#757575] w-[65px] h-[36px] flex justify-center items-center rounded-[4px] text-[#AAAAAA] font-normal text-sm hover:bg-[#161C23]"
                onClick={() => {
                  handleClick("Join");
                }}
              >
                Join
              </button>
              <button
                className=" border border-[#757575] w-[65px] h-[36px] flex justify-center items-center rounded-[4px] text-[#AAAAAA] font-normal text-sm hover:bg-[#161C23]"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
