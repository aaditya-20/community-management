import ShowNotifications from "./ShowNotification";
import React from "react";
let data = 0;

const Header = () => {
  return (
    <div className="relative box-border box-sizing border-box w-[1518px] h-[70px] left-[0px] top-0 bg-gradient-to-b from-gray-900 to-gray-800  border-b-1 border-[#171C23]">
      <div className="absolute w-[124px] h-[39px] left-[1150px] top-[20px] bg-[#313131] rounded-[25px] flex items-center justify-center">
        <button type="button" className="text-white font-small">
          Link wallet
        </button>
      </div>

     <ShowNotifications/>

      <div className="absolute w-[152px] h-[39px] left-[1350px] top-[20px] bg-[#313131] rounded-[25px] flex items-center justify-center">
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
