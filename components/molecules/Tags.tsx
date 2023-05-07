import Image from "next/image";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Tags = () => {
  const [Tags, setTags] = useState([{ src: "Icons/✍️.svg", title: "Writing" }, {src:"Icons/📢.svg",title:"Marketing"}]);

  const handleClick = () => {
    const newTag = prompt("Enter a new tag:");

    if (newTag) {
      setTags([...Tags, { title: newTag, src: "" }]);
    }
  };
  return (
    <div>
      <h1 className="font-medium text-[16px] mt-6 leading-[22px] text-white mb-[10px]">
        Tags
      </h1>
      <div className="w-[383px] h-[41px] flex justify-start items-center bg-[#232B35] rounded-[8px] pr-3 pl-[23px] ">
        <div className="flex gap-[6.13px]">
          {Tags.map((tag, index) => (
            <div
              key={index}
              className="inline-flex gap-[4.33px] bg-[#363C44] px-[5px] py-[1px] rounded-[2.0348px] justify-center items-center"
            >
              {tag.src != '' && <Image width={11} height={10} alt="" src={tag.src} />}
              <h1 className="font-normal text-[10.2174px] text-white font-open-sans">
                {tag.title}
              </h1>
            </div>
          ))}
        </div>
        <AiOutlinePlusCircle
          size={16}
          className="ml-[13px] cursor-pointer text-[#757575]"
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default Tags;
