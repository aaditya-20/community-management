import Image from "next/image";
import React, { useState } from "react";

const LoginSection = () => {
    const [magicLink, setMagicLink] = useState("");

  return (
    <div className="bg-[#232B35] h-auto w-[485px] shadow-[6px,6px,20px,rgba(15,15,15,0.26)]">
      <div className="w-full h-[54px] border-b border-[#353B43] flex items-center pl-[30px]">
        <h1 className=" font-open-sans font-normal text-[13.1px] leading-[17.68px] tracking-[0.16em]">
          LOGIN HERE
        </h1>
      </div>
      <div className="w-full h-auto pr-[50px] pl-[30px] pb-[29px] pt-[37px]">
        <div className="h-auto w-full">
          <h1 className="text-white font-medium text-base mb-[9px]">
            Magic Link
          </h1>
        </div>
        <div className="w-full h-[45px] bg-[#2E363F] rounded-lg overflow-hidden text-ellipsis mb-[35px]">
          <input
            className="text-[#FFFFFFA3] font-normal text-sm w-full h-full px-[18px] pt-[10px] pb-4 outline-none overflow-hidden text-ellipsis"
            placeholder="Enter your magic link"
            value = {magicLink}
            onChange = {(e)=>{setMagicLink(e.target.value)}}
          />
        </div>
        <div className="w-full h-[17px] flex items-center justify-center mb-[37px]">
          <h1 className="text-[#919191] text-[18px] leading-[27px] ">- OR -</h1>
        </div>
        <button className="w-full h-[45px] bg-white border border-[#EAEAEA] flex justify-center items-center rounded-[9px] mb-6" onClick={()=>{}}>
          <div className="flex gap-[14px] items-center justify-center">
            <Image src="Icons/Google.svg" height={25} width={25} alt="" />{" "}
            <h1 className="font-medium text-xs text-black">
              Sign up with Google
            </h1>
          </div>
        </button>
        <button className="w-full h-[45px] bg-white border border-[#EAEAEA] flex justify-center items-center rounded-[9px]" onClick={()=>{}}>
          <div className="flex gap-[14px] items-center justify-center">
            <Image src="Icons/Wallet.svg" height={25} width={25} alt="" />{" "}
            <h1 className="font-medium text-xs text-black">
              Sign up with Wallet
            </h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LoginSection;
