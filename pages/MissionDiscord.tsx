import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import ShareFeedbackCard from "@/components/molecules/ShareFeedbackCard";
import RouteGuardAdmin from "@/utils/RouteGuardAdmin";
import { HiPencil, HiRocketLaunch } from "react-icons/hi2";
function missionCheck(k: string) {
  fetch("https://discord.com/api/users/@me/guilds", {
    headers: {
      authorization: `Bearer ${k}`,
    },
  })
    .then((result) => result.json())
    .then(async (response) => {
      console.log(response);
      let data = response;
      let flag = false;
      for (let i = 0; i < data.length; i++) {
        //server id
        if (data[i].id == "882790547252959498") {
          flag = true;
          break;
        }
      }
      if (flag) {
        localStorage.setItem("discordMission", "true");
      }
    });
}

function MissionDiscord() {
  if (typeof window !== "undefined") {
    let k = localStorage.getItem("accessToken") || "";

    missionCheck(k);
  }
  const title = "Discord Mission";
  const description = `Get a Discord Role and introduce yourself to the community
GUIDE 📚
1. Join our discord if you haven't done that yet.
2. You'll then get a verified role.
3. Write a message telling us who you are and what your top skills you have!
4. Post it in the #introduce-yourself channelDo all this and then you'll have access to the Quests that require a role.
SUBMISSION 📝
This quest will auto-validate when you claim it.`;
  const tags = ["onboarding"];
  const missionSteps = [
    "Join our Discord",
    "Join on Discord Channel and get verified",
    "Start a conversation ",
    "Start a conversation on any discord channel you like containing at least 10 characters",
  ];
  const reward = 1000;
  const coinType = "USDC";
  const [file, setFile] = useState("");

  function handleFileSelect(e: any) {
    setFile(e.target.value);
  }
  function handleUpload() {}
  return (
    <div className="min-h-screen min-w-fit bg-[#171C23] flex overflow-auto scrollbar-hide">
      <Sidebar />
      <div className="w-full h-full">
        <Header />

        {/* Edit Section */}
        <div className="h-[115px] w-full border-b border-[#353B43] px-6 py-[28px]">
          <div className="h-full w-full">
            <h1 className="mb-2 text-[#A6A6A6] text-sm font-medium">
              Missions/template
            </h1>
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold text-white">Missions</h1>
              <div className="flex gap-4">
                <button className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium">
                  Back
                </button>
                <button className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium">
                  <div className="flex justify-center items-center gap-2">
                    <HiRocketLaunch size={16} />
                    <h1>Publish</h1>
                  </div>
                </button>
                <button className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium">
                  <div className="flex items-center gap-2">
                    <HiPencil size={16} />
                    <h1>Edit</h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="mt-6 flex justify-center items-center">
          <div className="flex">
            <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
              <Image
                src="/MissionPageBanner.png"
                width={800}
                height={1}
                alt="kjdfhah"
                className="mx-[10px] my-[10px]"
              />
              <div className="font-semibold text-2xl text-white mx-3">
                Discord Mission
              </div>
              <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
                <pre className="overflow-auto no-scrollbar">{description}</pre>
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
            <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
              <BeAchamp
                title="Discord Mission for Firebond"
                tags={["Writing", "Marketing"]}
                val="2.9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1500px] w-full md:grid-cols-[auto,1fr]">
    //   <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
    //     <Sidebar />
    //   </div>
    //   <div className="border-b-[1px] border-b-[#353B43]">
    //     <Header />
    //   </div>
    //   <div className="">
    //   <NavbarMissionOnboarding
    //         title={title}
    //         description={description}
    //         heading1={missionSteps[0]}
    //         heading2={missionSteps[1]}
    //         subheading1={missionSteps[2]}
    //         subheading2={missionSteps[3]}
    //       />
    //   </div>
    //   <div className="flex">
    //     <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
    //       <Image
    //         src="/MissionPageBanner.png"
    //         width={800}
    //         height={1}
    //         alt="kjdfhah"
    //         className="mx-[10px] my-[10px]"
    //       />
    //       <div className="font-semibold text-2xl text-white mx-3">
    //         Discord Mission
    //       </div>
    //       <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
    //         <pre className="overflow-auto no-scrollbar">{description}</pre>
    //         <div className="my-[60px]">
    //           <MissionStepsCard
    //             heading1={"Join our Discord"}
    //             descp1={missionSteps[0]}
    //             heading2="Start a conversation"
    //             descp2={missionSteps[1]}
    //           />
    //         </div>
    //       </div>

    //     </div>
    //     <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
    //         <BeAchamp
    //           title="Discord Mission for Firebond"
    //           tags={["Writing", "Marketing"]}
    //           val="2.9"
    //         />
    //       </div>
    //   </div>
    // </div>
  );
}

export default RouteGuardAdmin(MissionDiscord);
