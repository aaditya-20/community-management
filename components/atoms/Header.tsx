import ShowNotifications from "./ShowNotification";
import React from "react";
import linkWallet from "@/utils/authentication/linkWallet";
import router from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
let data = 0;

declare var window: any;

const Header = () => {
  const [name, setName] = useState("user");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedJsonData = localStorage.getItem("data");
      const jsonData = JSON.parse(storedJsonData ?? "{}");
      if (jsonData != null && jsonData.name) setName(jsonData.name);
    }
  }, [name]);
  const handleLogout=()=>{
    localStorage.clear();
    router.push("/FirstPage");
  }
  const onWalletLink = linkWallet();
  return (
    <div className="w-full h-[80px] bg-[#171C23] border-b border-[#353B43] py-5 px-4">
      <div className="w-full h-full flex justify-end items-center">
        <div className="flex gap-[15px]">
          <button type="button"
            className="h-[40px] w-auto px-6 bg-[#313131] rounded-[25px] cursor-pointer"
            onClick={handleLogout}
          >
            <h1 className="text-white font-normal text-base">logout</h1>
          </button>
          {/* Notifications */}
          <ShowNotifications />

          {/* Profile */}
          <div className="h-[40px] w-auto pr-5 pl-1 rounded-full bg-[#242627] flex gap-[10px] items-center cursor-pointer">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image src="Icons/Avatar.svg" height={32} width={32} alt="" className="object-contain"/>
            </div>

            <h1 className="text-base font-normal text-[#777879]">Hello,{" "}<span className="text-white">{name}</span></h1>
          </div>
        </div>
      </div>
      {/* <div className="absolute w-[152px] h-[39px] right-[200px] top-[20px] bg-[#313131] rounded-[25px] flex items-center justify-center">
        <button
          type="button"
          className="text-gray-400 font-small flex items-center space-x-2"
        >
          <img
            src={"/Avatar.png"}
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-400">
            Hello, <span className="text-white">{name}</span>
          </span>
        </button>
      </div>
      <div>
        <ShowNotifications />
      </div>

      <div className="absolute w-[90px] h-[39px] right-[29px] top-[20px] bg-[#313131] rounded-[25px] flex items-center justify-center">
        <button
          type="button"
          className="text-white font-small"
          onClick={() => router.push("/FirstPage")}
        >
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default Header;
