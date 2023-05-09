import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import ShareFeedbackCard from "@/components/molecules/ShareFeedbackCard";
import RouteGuardAdmin from "@/utils/RouteGuardAdmin";
const title = "Design our company digital mascot ";
const description = "We want to Design our company digital mascot Requirements:the body of the NFT design consists of a combination of our icon and precious items such as gemstones, gold, etc.The design should include the project name: Mew Protocolanimation effects. Format ca be GIF, WEBP, etc.the NFT design should be consistent with the design style of our projectWe will choose 3 prizes: $40 for the first place, $10 for the second and the third place.Reference:www.mewprotocol.com";
const tags = ["writing", "marketing"];
const missionSteps = [
  " Follow our Twitter handle",
  "Follow us!",
  "Submit your work",
  "Share the proof of work",
];
const reward = 2.9;
const coinType = "USDC";
function MissionDigitalMascot() {
  return (
    <div>
      <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1500px] w-full md:grid-cols-[auto,1fr]">
        <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
          <Sidebar />
        </div>
        <div className="border-b-[1px] border-b-[#353B43]">
          <Header />
        </div>
        <div className="">
        <NavbarMissionOnboarding title={title} description = {description} heading1={missionSteps[0]} heading2={missionSteps[1]} subheading1={missionSteps[2]} subheading2={missionSteps[3]}/>
        </div>
        <div className="flex">
          <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
            <Image
              src="/../public/Icons/MissionPageBanner.png"
              width={800}
              height={1}
              alt="kjdfhah"
              className="mx-[10px] my-[10px]"
            />
            <div className="mx-[30px] my-[30px]">
              <div className="font-[600] text-[24px] text-[#ffffff]">
                Design our company digital mascot
              </div>
              <div className="font-[500] text-[16px] text-[#D9D9D9]">
                We want to Design our company digital mascot
                <ol
                  type="1"
                  className="font-[General Sans] list-decimal mx-[20px]"
                >
                  <li>Requirements:</li>
                  <li>
                    the body of the NFT design consists of a combination of our
                    icon and as gemstones, gold, etc.
                  </li>
                  <li>
                    The design should include the project name: Mew Protocol
                  </li>
                  <li> animation effects. Format can be GIF, WEBP, etc.</li>
                  <li>
                    the NFT design should be consistent with the design style of
                    our project
                  </li>
                  <li>
                    We will choose 3 prizes: $40 for the first place, $10 for
                    the second and the third place.
                  </li>
                  <li>Reference:</li>
                  <li>www.mewprotocol.com</li>
                </ol>
              </div>

              <Image
                src="/../public/Icons/DigitalMascot.png"
                width={255}
                height={255}
                alt="kjdfhah"
                className="mx-[auto] my-[30px] mb-[10px]"
              />
            </div>

            <div className="my-[60px]">
              <MissionStepsCard
                heading1={"Join our Discord"}
                descp1={missionSteps[0]}
                heading2="Start a conversation"
                descp2={missionSteps[1]}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[200px] left-[1120px]  text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
            <ShareFeedbackCard
              feedback="Design our company digital mascot "
              tag={["Writing", "Marketing"]}
              val="2.9"
            />
          </div>
      </div>
    </div>
  );
}

export default RouteGuardAdmin(MissionDigitalMascot)