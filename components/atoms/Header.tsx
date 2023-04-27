import ShowNotifications from "./ShowNotification";
import React from "react";
import linkWallet from "@/utils/authentication/linkWallet";

let data = 0;

const Header = () => {
  const onWalletLink = linkWallet();
  return (
    <div className="relative box-border box-sizing border-box w-[auto] h-[70px] left-[0px] top-0  bg-[#171C23] border-b-[1px] border-[#353B43]">
      <div className="absolute w-[124px] h-[39px] right-[249px] top-[20px] bg-[#313131] rounded-[25px] flex items-center justify-center">
        {/*Pending :: Change color of button when onWalletLink is called and user have connected his wallet */ }
        <button type="button" className="text-white font-small" onClick={onWalletLink} >
          Link wallet
        </button>
      </div>

     <ShowNotifications/>

      <div className="absolute w-[152px] h-[39px] right-[16px] top-[20px] bg-[#313131] rounded-[25px] flex items-center justify-center">
  <button type="button" className="text-gray-400 font-small flex items-center space-x-2">
    <img 
    src={"/Avatar.png"} 
    alt="Avatar" 
    className="w-8 h-8 rounded-full"/>
    <span className="text-gray-400">Hello, <span className="text-white">Andrew</span></span>
  </button>
</div>
    </div>
  );
};

export default Header;
