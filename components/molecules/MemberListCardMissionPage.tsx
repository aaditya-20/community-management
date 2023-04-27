import React from "react";
import { useState } from "react";
import MemberXpDetailsForTopContributor from "../atoms/MemberXpDetailsForTopContributor";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { VscBlank, VscDash } from "react-icons/vsc";
import { platform } from "os";
import Link from "next/link";

export default function MemberListCardMissionPage() {
  const [players, setPlayers] = useState([
    {
      name: "Player1",
      xp: 10,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Discord",
    },
    {
      name: "Player2",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Discord",
    },
    {
      name: "Player3",
      xp: 4,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Twitter",
    },
    {
      name: "Player1",
      xp: 4,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Twitter",
    },
    {
      name: "Player2",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Twitter",
    },
    {
      name: "Player3",
      xp: 1,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Twitter",
    },
    {
      name: "Player1",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Twitter",
    },
    {
      name: "Player2",
      xp: 5,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Twitter",
    },
    {
      name: "Player3",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Discord",
    },
    {
      name: "Player1",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Discord",
    },
    {
      name: "Player2",
      xp: 4,
      missionsCompleted: 0,
      previousXP: 4,
      platform: "Discord",
    },
    {
      name: "Player3",
      xp: 5,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
    {
      name: "Player1",
      xp: 3,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
    {
      name: "Player2",
      xp: 1,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
    {
      name: "Player3",
      xp: 1,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
    {
      name: "Player1",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
    {
      name: "Player2",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
    {
      name: "Player3",
      xp: 1,
      missionsCompleted: 0,
      previousXP: 5,
      platform: "Discord",
    },
    {
      name: "Player1",
      xp: 1,
      missionsCompleted: 0,
      previousXP: 5,
      platform: "Discord",
    },
    {
      name: "Player2",
      xp: 0,
      missionsCompleted: 0,
      previousXP: 2,
      platform: "Discord",
    },
    {
      name: "Player3",
      xp: 0,
      missionsCompleted: 0,
      previousXP: 1,
      platform: "Discord",
    },
    {
      name: "Player1",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
    {
      name: "Player2",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
    {
      name: "Player3",
      xp: 2,
      missionsCompleted: 0,
      previousXP: 0,
      platform: "Discord",
    },
  ]);
 
  const ele = players.map((value, index) => {
    
    return (
      <li key = {index} className="my-8 ">
        <MemberXpDetailsForTopContributor
          icon={value.platform == "Discord" ? FaDiscord : FaTwitter}
          change={VscBlank}
          colorOfChange={`inline hidden ${
            value.xp - value.previousXP >= 0 ? "text-[green]" : "text-[red]"
            // value.xp - value.previousXP > 0 ? "text-[green]" : (value.xp - value.previousXP < 0 ? "text-[red]":"text-[white]")
          }`}
          position={""}
          missionsCompleted={value.missionsCompleted}
          xp={value.xp}
          playerName={value.name}
          playerNameStyle={"left-[45px]"}
          BoxColor={value.platform == "Discord" ? '' : 'bg-[#64CFF6]'}

        />
      </li>
    );
  });
  return (
    // username ,previous xp,current cp,missions completed.
    <>
      <div className="absolute h-[750px] w-[1150px] bg-[#242B35] rounded-[20px]  overflow-y-auto scrollbar">
        <div className="absolute text-[#FFFFFF] font-[General Sans] font-[500] text-[24px] left-[24px] top-[22px]  ">
          Members 
        </div>
        {/* <div className="absolute text-[#D9D9D9] font-[General Sans] font-[400] text-[14px] left-[592px] top-[32px]  ">Show All</div> */}

        <div>
          <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[24px]">
            Profile ID
          </div>
          <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[400px]">
            completed missions
          </div>
          <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[800px]">
            platform
          </div>
          <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[1000px]">
            XP
          </div>
        </div>

        <div className="absolute top-[90px] left-[15px] w-[auto]">
          <ul>{ele}</ul>
        </div>
        
      </div>
      <div className="relative bg-[#242B35] border-t-[1px] w-[1150px] h-[50px] border-[#353B43] top-[700px] rounded-b-[20px]">
      <Link
          href="/"
          className="absolute top-[15px] right-[70px] text-[#D9D9D9]"
        >
          Show next 100 
        </Link>
        </div>
    </>
  );
}
