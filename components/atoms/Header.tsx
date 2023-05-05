import ShowNotifications from "./ShowNotification";
import React from "react";
import linkWallet from "@/utils/authentication/linkWallet";
import router from "next/router";
let data = 0;

declare var window: any;
var name = "user";
if (typeof window !== "undefined") {
  const storedJsonData = localStorage.getItem("data");
  const jsonData = JSON.parse(storedJsonData ?? "{}");
  if (jsonData != null && jsonData.name) name = jsonData.name;
}
const Header = () => {
  const onWalletLink = linkWallet();
  return (
    <div className="relative box-border box-sizing border-box w-[auto] h-[70px] left-[0px] top-0  bg-[#171C23] border-b-[1px] border-[#353B43]">
      <div className="absolute w-[152px] h-[39px] right-[200px] top-[20px] bg-[#313131] rounded-[25px] flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default Header;
