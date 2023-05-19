import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import { HiPencil, HiRocketLaunch } from "react-icons/hi2";
const title = "Mission Onboarding Mission";
const description = "This is a custom heading";
const tags = ["onboarding"];
const missionSteps = [
  " Follow @firebondapp on Twitter",
  "Follow us!",
  "Get verified using the onboarding form",
  "Fill the onboarding form",
];
const reward = 1000;
const coinType = "USDC";
export default function MissionOnboardingMisison() {
  return (
    <div className="min-h-screen min-w-fit bg-[#171C23] flex overflow-auto scrollbar-hide">
      <Sidebar />
      <div className="w-full h-full">
        <Header />

        {/* Edit Section */}
        <NavbarMissionOnboarding
          title={title}
          description={description}
          heading1={missionSteps[0]}
          heading2={missionSteps[1]}
          subheading1={missionSteps[2]}
          subheading2={missionSteps[3]}
        />

        {/* Main Content Section */}
        <div className="mt-6 flex justify-center items-center">
          <div className="flex">
            <div className="text-[#ffffff] ml-[20px] mb-[50px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
              <Image
                src="/MissionPageBanner.png"
                width={800}
                height={1}
                alt="kjdfhah"
                className="mx-[10px] my-[10px]"
              />
              <Image
                src="/../public/Icons/MissionPageBanner2.png"
                width={800}
                height={1}
                alt="kjdfhah"
                className="mx-[10px] "
              />
              <div className="mx-[30px] mb-3">
                <MissionStepsCard
                  heading1={"Follow @firebondapp on Twitter"}
                  descp1={"Follow us!"}
                  heading2="Get verified using the onboarding form"
                  descp2={"Fill the onboarding form"}
                />
              </div>
            </div>
            <div className="text-[#ffffff] w-[auto] h-[auto] ml-[30px]">
              <BeAchamp val="1000" tags={tags} title="Be A Champion" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-full w-auto md:grid-cols-[auto,1fr]">
    //     <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
    //       <Sidebar />
    //     </div>
    //     <div className="border-b-[1px] border-b-[#353B43]">
    //       <Header />
    //     </div>
    //     <div className="">
    //     <NavbarMissionOnboarding title={title} description = {description} heading1={missionSteps[0]} heading2={missionSteps[1]} subheading1={missionSteps[2]} subheading2={missionSteps[3]}/>
    //     </div>
    //     <div className="flex">
    //       <div className="text-[#ffffff] ml-[20px]  w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
    //         <Image
    //           src="/MissionPageBanner.png"
    //           width={800}
    //           height={1}
    //           alt="kjdfhah"
    //           className="mx-[10px] my-[10px]"
    //         />
    //         <Image
    //           src="/../public/Icons/MissionPageBanner2.png"
    //           width={800}
    //           height={1}
    //           alt="kjdfhah"
    //           className="mx-[10px] "
    //         />
    //         <div className="mx-[30px]">
    //           <MissionStepsCard
    //             heading1={"Follow @firebondapp on Twitter"}
    //             descp1={"Follow us!"}
    //             heading2="Get verified using the onboarding form"
    //             descp2={"Fill the onboarding form"}
    //           />
    //         </div>
    //       </div>
    //       <div className="text-[#ffffff] w-[auto] h-[auto] ml-[30px]">
    //         <BeAchamp val="1000" tags={tags} title = 'Be A Champion'/>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
