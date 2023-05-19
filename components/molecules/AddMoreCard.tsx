import React from "react";
import Button from "../atoms/Button";
import Image from "next/image";
import ProfileIcon from "../atoms/ProfileAvatar";
import Router from "next/router";
import { useRouter } from "next/router";

const AddMoreCard = () => {
  const router = useRouter();
   
  return (
    <div onClick={()=>{router.push('./MissionCreationFormPage')}} className="h-[190px] w-[340px] bg-[#232B36] rounded-[20px] relative cursor-pointer">
      <div className="p-6 h-full w-full flex justify-center items-center">
        <Image height={22} width={22} src="Icons/plus.svg" alt=""/>
      </div>
    </div>
  );
};

export default AddMoreCard;
