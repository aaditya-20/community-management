import React from 'react'
import Sidebar from '@/components/molecules/Sidebar';
import Header from '@/components/atoms/Header';
import NavbarMissionOnboarding from '@/components/molecules/NavbarMissionOnboarding';
import BeAchamp from '@/components/molecules/BeAchamp';
import MissionStepsCard from '@/components/molecules/MissionStepCard';
import Image from 'next/image';
import RouteGuardAdmin from '@/utils/RouteGuardAdmin';


// const [file, setFile] = useState("");
function MissionForUser(props:any) {
  const title = props.title==null?"Mission title":props.title;
  
const description = props.description==null?`here comes the description.`:props.description;
const tags = ["onboarding"];
const missionSteps = [
  props.heading1==null?"Heading 1":props.heading1,
  props.subheading1==null?"Subheading 1":props.subheading1,
  props.heading2==null?"Heading 2":props.heading2,
  props.subheading2==null?"Subheading2":props.subheading2,
];
const reward = 1000;
const coinType = "USDC";

  return (
    <div>
        <div className="grid grid-cols-[1400px] gap-10  bg-[#171C23] grid-rows-[71px,auto] h-[1200px] w-[1400px] ">
        
        <div className="flex align-middle border-b-[1px] border-b-[#353B43]">
          <Image src="/../public/Icons/FireBondIcon.png" width={160} height={10} alt='kjdfhah' className=''/>
          <div className="absolute w-[124px] h-[39px] right-[0px] top-[20px]  bg-[#313131] rounded-[25px] flex items-center justify-center">
        {/*Pending :: Change color of button when onWalletLink is called and user have connected his wallet */ }
            <button type="button" className="text-white font-small"  >
                Link wallet
            </button>
        </div>
        </div>
       
        <div className="flex">
        <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43]  rounded-[20px]">
          <Image
            src="/../public/Icons/MissionPageBanner.png"
            width={800}
            height={1}
            alt="kjdfhah"
            className="mx-[10px] my-[10px]"
          />
          <div className="font-semibold text-2xl text-white mx-3">
           {title}
          </div>
          <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
            <pre className="overflow-auto no-scrollbar">{description}</pre>
            <div className="my-[60px]">
              <MissionStepsCard
                heading1={missionSteps[0]}
                descp1={missionSteps[1]}
                heading2={missionSteps[2]}
                descp2={missionSteps[3]}
              />
            </div>
          </div>

         
        </div>
        <div className="flex flex-col text-[#ffffff] mx-[auto] ">
              {/* hello */}
            <BeAchamp
              title={title}
              tags={tags}
              val={reward}
            />
            <div className='mt-[30px] text-center align-middle  font-[500] font-[General Sans] text-[14px]  w-[346px] h-[47px] rounded-[8px] border-white border-[1px]'>
              <span className='relative top-3'>submit work</span> 
            </div>
          </div>
      </div>
        

    
    </div>
    </div>
  )
}

export default RouteGuardAdmin(MissionForUser)