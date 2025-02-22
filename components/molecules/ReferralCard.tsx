import { useState } from "react";

export default function ReferralCard(props : any) {
  const [text, setText] = useState("");
  function handleText(e: any) {
    setText(e.target.value);
  }
  return (
    <div className="max-w-[700px] h-auto rounded-[20px] bg-[#232B35]  mt-6 relative realtive">
      <h1 className="font-medium text-base text-white mb-[11px]">
        {props.title}
      </h1>

      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
        <input
          type="url"
          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
          placeholder={props.placeholder}
          value={text}
          onChange={handleText}
        />
      </div>
    </div>
  );
}
