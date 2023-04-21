import Link from "next/link";
import { IntegrationOption } from "../molecules/IntegrationOption";
import { FaDiscord,FaTwitter,FaTelegram,FaEthereum,FaTelegramPlane } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import IconButton from "../atoms/IconButton";
import BackGroundPage from "@/components/molecules/BackGroundPage";
import { useState } from "react";
function CommunitySetUpIntegration() {
  
  const [flagDiscord,setDiscord] = useState("visible");
  const [flagTwitter,setTwitter] = useState("hidden");
  const [flagTelegram,setTelegram] = useState("hidden");
  const [flagEthereum,setEthereum] = useState("hidden");

  // let hidden = "hidden"

  function handleDiscordClick(){
   
  }
  function handleTwitterClick(){
 
    if(flagTwitter=="hidden"){
      
      setTwitter("visible");
    
      
    }
}
function handleTelegramClick(){
  if(flagTelegram=="hidden"){
    setTelegram("visible");
   
    
  }
}
function handleEthereumClick(){
  if(flagEthereum=="hidden"){
    setEthereum("visible")
  }
}
  return (
    <>
      
      <div className="flex items-center justify-center ">
        <BackGroundPage className="flex items-center justify-center bg-[#171C23] h-[100vh] w-[100vw]"/>

        <div className="absolute w-[662px] h-[700px] top-[120px]  bg-[#232B35] shadow-md">

          <div className="absolute w-[662px] h-[54px]  border-b-[1px] border-[#353B43]">
            <Link
              href="/"
              className="relative top-[15px] left-[30px] text-[#AEABD8]"
            >
              COMMUNITY SETUP
            </Link>
            <div className="absolute font-['Roboto'] font-[13px] left-[410px] top-[13px] text-[#FE702A]">
              STEP 2 OF 2
            </div>
            <div className="absolute bg-[#FE702A] h-[12px] w-[108px] top-[19px] left-[520px] border-solid border-[1.5px] border-[#FE702A]"></div>
          </div>


          <div className="absolute font-[600] top-[78px] left-[30px]  font-['General Sans'] text-white text-[24px] w-[662px] ">
            <p className=" font-[600]  font-['General Sans'] text-white text-[24px]  ">Integrations</p>
            <p className="   font-['General Sans'] text-[#A6A6A6] text-[16px] font-[400 ]  ">Supercharge your workflow and connect the tool you use every day.</p>
          </div>
          
         <div className="absolute top-[200px] left-[30px]">
           <IntegrationOption Icon ={FaDiscord} IconSize={20} IconColor="white" CapName="Discord" SmallName="discord" IconBackgroundStyle="bg-[#6359E9]" handleClick={handleDiscordClick} visibility={flagDiscord}/>
           
         </div>   
         <div className="absolute top-[290px] left-[30px]">
           <IntegrationOption Icon ={FaTwitter} IconSize={20} IconColor="white" CapName="Twitter" SmallName="twitter" IconBackgroundStyle="bg-[#64CFF6]" handleClick={handleTwitterClick} visibility={flagTwitter} />
           
         </div>   
         <div className="absolute top-[380px] left-[30px]">
           <IntegrationOption Icon ={FaTelegramPlane} IconSize={20} IconColor="white" CapName="Telegram" SmallName="telegram" IconBackgroundStyle="bg-[#2298D5]" handleClick={handleTelegramClick} visibility={flagTelegram} />
           
         </div>   
         <div className="absolute top-[470px] left-[30px]">
           <IntegrationOption Icon ={FaEthereum} IconSize={25} IconColor="white" CapName="Ethereum" SmallName="ethereum" IconBackgroundStyle="bg-[#1D1D1D]" handleClick={handleEthereumClick} visibility={flagEthereum} />
           
         </div>

         {/* <div> */}

         <IconButton
          icon={VscBlank}
          label="Back"
          className="absolute bg-[#1D1D1D] bottom-[0px] w-[331px] h-[67px]"
          classNameIcon=""
        />
         <IconButton
          icon={VscBlank}
          label="Continue"
          className="absolute bg-[#FE702A] bottom-[0px] left-[331px] w-[331px] h-[67px]"
          classNameIcon=""
        />


         {/* </div>    */}
              
        </div>
       
      </div>
    </>
  );
}

export default CommunitySetUpIntegration;
